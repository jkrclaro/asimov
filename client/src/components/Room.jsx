import React from 'react';

const currentUser = require('../libs/currentUser');

const noBulletPointStyle = {listStyleType: 'none'};
const pointerStyle = {cursor: 'pointer', color: 'lightgreen'};
const redPointerStyle = {cursor: 'pointer', color: 'red'}

var websocket = null;
var rtcpc = null;
var hasAddTrack = false;

function getRoomName(pathname) {
    return pathname.split('/')[2]
}

function getHostName(pathname) {
    return pathname.split('/')[1]
}

class Room extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            host: getHostName(this.props.history.location.pathname),
            room: getRoomName(this.props.history.location.pathname),
            callee: '',
            usernames: [],
            chats: [],
            media: {
                audio: false,
                video: true
            }
        };

        websocket = new WebSocket('ws://gravitywebinar.localhost:8000');
        websocket.onopen = this.onOpen;
        websocket.onmessage = this.onMessage;

        if (currentUser.isLoggedIn()) {
            this.state.caller = currentUser.getUser().username;
            this.requestMediaAccess();
            this.createRTCPeerConnection();
        } else {
            this.state.caller = Date.now();
            this.createRTCPeerConnection();
        }
    }

    // -- Websocket
    onOpen = (event) => console.log('[WEBSOCKET]: Open');
    onMessage = (event) => {
        const message = JSON.parse(event.data);
        console.log(`[WEBSOCKET]: Message '${message.type}'`)

        if (message.type === 'id') {
            this.connectUsername(message)
        } else if (message.type === 'usernames') {
            this.updateUsernames(message)
        } else if (message.type === 'new-ice-candidate') {
            this.newICECandidate(message);
        } else if (message.type === 'video-offer') {
            this.videoOffer(message);
        } else if (message.type === 'video-answer') {
            this.videoAnswer(message);
        } else if (message.type === 'chats') {
            this.updateChats(message)
        }
    }
    connectUsername = (message) => {
        const data = {
            caller: this.state.caller,
            date: Date.now(),
            id: message.id,
            owner: currentUser.isLoggedIn(),
            room: this.state.room,
            type: 'username'
        }
        this.sendToSignalingServer(data);
    }
    updateUsernames = (message) => {
        this.setState({ usernames: message.usernames });
    }
    newICECandidate = (message) => {
        const rtcicec = new RTCIceCandidate(message.candidate);
        rtcpc.addIceCandidate(rtcicec)
    }
    videoOffer = (message) => {
        this.createRTCPeerConnection();
        const rtcsd = new RTCSessionDescription(message.sdp);
        rtcpc.setRemoteDescription(rtcsd)
        .then(() => navigator.mediaDevices.getUserMedia(this.state.media))
        .then(stream => this.attachLocalMedia(stream))
        .then(() => rtcpc.createAnswer())
        .then(answer => rtcpc.setLocalDescription(answer))
        .then(() => {
            const data = {
                caller: this.state.caller,
                callee: message.caller,
                type: 'video-answer',
                sdp: rtcpc.localDescription
            };
            this.sendToSignalingServer(data);
        })
        .catch(error => console.log(error))
    }
    videoAnswer = (message) => {
        const rtcsd = new RTCSessionDescription(message.sdp);
        rtcpc.setRemoteDescription(rtcsd)
        .catch(error => console.log(error))
    }
    updateChats = (message) => {
        this.setState({ chats: message.chats })
    }
    // Websocket --

    // -- WebRTC
    onNegotiationNeeded = (event) => {
        console.log(`[WEBRTC]: Negotiation needed: ${rtcpc.signalingState}`);

        // If statement exists to workaround Chrome issue, bit.ly/2RVkmd7
        if (rtcpc.signalingState !== 'have-remote-offer') {
            rtcpc.createOffer()
            .then(offer => {
                rtcpc.setLocalDescription(offer)
            })
            .then(() => {
                let data;
                if (currentUser.isLoggedIn()) {
                    data = {
                        caller: this.state.caller,
                        room: this.state.room,
                        type: 'broadcaster-offer',
                        sdp: rtcpc.localDescription
                    }
                } else {
                    data = {
                        caller: this.state.caller,
                        callee: this.state.callee,
                        type: 'video-offer',
                        sdp: rtcpc.localDescription
                    }
                }
                this.sendToSignalingServer(data);
            })
            .catch(error => console.log(error))
        }
    }
    onICECandidate = (event) => {
        if (event.candidate) {
            console.log('[WEBRTC]: New ICE Candidate')
            const data = {
                type: 'new-ice-candidate',
                callee: this.state.callee,
                candidate: event.candidate
            }
            this.sendToSignalingServer(data)
        }
    }
    onRemoveStream = (event) => {
        console.log('[WEBRTC]: Remove Stream');
        console.log('[!]: Close video call');
    }
    onICEConnectionStateChange = (event) => {
        console.log(`[WEBRTC]: ICE Connection: ${rtcpc.iceConnectionState}`);
        if (rtcpc.iceConnectionState === 'disconnected') {
            console.log('[!] Close video call')
        }
    }
    onICEGatheringStateChange = (event) => {
        console.log(`[WEBRTC]: ICE Gathering: ${rtcpc.iceGatheringState}`);
    }
    onSignalingStateChange = (event) => {
        console.log(`[WEBRTC]: Signaling State: ${event.type}`);
        if (rtcpc.signalingState === 'closed') {
            console.log('[!] Close video call')
        }
    }
    onTrack = (event) => {
        console.log(`[WEBRTC]: Attaching remote video via track`);
        const remoteVideo = document.getElementById('remote_video');
        remoteVideo.srcObject = event.streams[0];
    }
    onAddStream = (event) => {
        console.log('[WEBRTC]: Attaching remote video via stream')
        const remoteVideo = document.getElementById('remote_video');
        remoteVideo.srcObject = event.stream;
    }
    // WebRTC --

    // Client side
    sendToSignalingServer = (message) => {
        websocket.send(JSON.stringify(message));
    }

    handleChange = (event) => {
        this.setState({[event.target.name]: event.target.value});
    };

    handleClick = (event) => {
        this.setState({connected: !this.state.connected})
    };

    attachLocalMedia = (localStream) => {
        const localVideo = document.getElementById('local_video');
        localVideo.srcObject = localStream;

        if (hasAddTrack) {
            localStream.getTracks().forEach(track => {
                rtcpc.addTrack(track, localStream)
            });
        } else {
            rtcpc.addStream(localStream);
        }
    }

    requestMediaAccess = () => {
        navigator.mediaDevices.getUserMedia(this.state.media)
        .then(localStream => this.attachLocalMedia(localStream))
        .catch(error => console.log(error))
    }

    createRTCPeerConnection = () => {
        rtcpc = new RTCPeerConnection({
            iceServers: [
                {
                    urls: 'stun:stun.schlund.de'
                },
                {
                    urls: 'turn:turn.anyfirewall.com:443?transport=tcp',
                    credential: 'webrtc',
                    username: 'webrtc'
                }
            ]
        })

        hasAddTrack = (rtcpc.addTrack !== undefined);

        rtcpc.onicecandidate = this.onICECandidate;
        rtcpc.onnremovestream = this.onRemoveStream;
        rtcpc.oniceconnectionstatechange = this.onICEConnectionStateChange;
        rtcpc.onicegatheringstatechange = this.onICEGatheringStateChange;
        rtcpc.onsignalingstatechange = this.onSignalingStateChange;
        rtcpc.onnegotiationneeded = this.onNegotiationNeeded;

        if (hasAddTrack) {
            rtcpc.ontrack = this.onTrack;
        } else {
            rtcpc.onaddstream = this.onAddStream;
        }
    }

    callUser = (event) => {
        this.setState({ callee: event.target.dataset.value });

        if (rtcpc) {
            console.log('Warning: You already have a call open!')
        } else {
            this.requestMediaAccess();
            this.createRTCPeerConnection();
        }
    }

    hangUpCall = (event) => {
        const localVideo = document.getElementById('local_video');
        const remoteVideo = document.getElementById('remote_video');

        if (localVideo.srcObject) {
            localVideo.src = null;
            localVideo.srcObject.getTracks().forEach(track => track.stop());
        }

        if (remoteVideo.srcObject) {
            remoteVideo.src = null;
            remoteVideo.srcObject.getTracks().forEach(track => track.stop());
        }
    }

    render() {
        return (
            <div>
                <div className='row'>
                    <div className='col-lg-6 mb-3'>
                        <div className='flexChild' id='camera-container'>
                            <div className='camera-box'>
                                <video id='local_video' autoPlay></video>
                            </div>
                        </div>
                        <div className='flexChild' id='camera-container'>
                            <div className='camera-box'>
                                <video id='remote_video' autoPlay></video>
                            </div>
                        </div>
                        <div>
                            {this.state.usernames.map((username, index) =>
                                <div className='row' key={index}>
                                    <div className='col-6'>{username}</div>
                                    <div onClick={this.callUser} data-value={username} style={pointerStyle} className='col-3 text-right'>Call</div>
                                    <div onClick={this.hangUpCall} data-value={username} style={redPointerStyle} className='col-3 text-right'>Hangup</div>
                                </div>
                            )}
                        </div>
                    </div>
                    <div className='col-lg-6 mb-3'>
                        <ul style={noBulletPointStyle}>
                            {this.state.chats.map((message, index) =>
                                <li key={index}>
                                    <div className='row'>
                                        <div className='col-6'>{message}</div>
                                    </div>
                                </li>
                            )}
                        </ul>
                        <div className='row'>
                            <div className='col-9'>
                                <input onChange={this.handleChange} type='text' name='message' placeholder='Type here to chat' className='form-control'/>
                            </div>
                            <div className='col-3'>
                                <button className='btn btn-webprecon-primary btn-block'>Send</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    };
};

export default Room;
