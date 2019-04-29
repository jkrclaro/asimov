import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const redo = require('../imgs/redo.png');
const undo = require('../imgs/undo.png');
const styles = {
    playButton: {fontSize: 40, cursor: 'pointer', color: '#111'},
    timeButton: {fontSize: 20, paddingTop: 8, height: 40, width: 40, color: '#111', cursor: 'pointer'},
    grayBackground: {backgroundColor: '#ddd', borderTop: '2px solid #ddd'}
}

class AudioPlayer extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            playing: false,
            audioURL: 'https://echochamberpod.com/wp-content/uploads/2019/01/Echo-Chamber-Episode-131.mp3'
        }
    }
    play = this.play.bind(this);
    pause = this.pause.bind(this);
    change = this.change.bind(this);

    play() {
        this.setState({playing: true});
        document.getElementById('player').play();
    }
    
    pause() {
        this.setState({playing: false});
        document.getElementById('player').pause();
    }

    increaseVolume() {
        if (document.getElementById('player').volume < 1) {
            document.getElementById('player').volume += 0.1
        }
    }

    decreaseVolume() {
        if (document.getElementById('player').volume > 0) {
            document.getElementById('player').volume -= 0.1
        }
    }

    change() {
        this.setState({audioURL: 'http://hwcdn.libsyn.com/p/5/b/6/5b6fcdde97541ed3/BKP_201.mp3?c_id=30852806&cs_id=30852806&expiration=1546889820&hwt=d89003b82e86a6b44d2bfea2d00953bc'})
    }

    render() {
        return (
            <section className='' style={styles.grayBackground}>
                <ul className="nav justify-content-center mt-2 mb-2">
                    <audio id='player' src={this.state.audioURL}/>
                    <li className='nav-item' style={styles.timeButton}>
                        <span onClick={this.change}>
                            <img src={redo} alt='redo' className='img-fluid' style={styles.timeButton}/>
                        </span>
                    </li>
                    <li className='nav-item ml-5 mr-5' style={styles.playButton}>
                        {this.state.playing ? (
                            <span onClick={this.pause}><FontAwesomeIcon icon='pause'/></span>
                        ) : (
                            <span onClick={this.play}><FontAwesomeIcon icon='play'/></span>
                        )}
                    </li>
                    <li className='nav-item' style={styles.timeButton}>
                        <span onClick={this.change}>
                            <img src={undo} alt='undo' className='img-fluid' style={styles.timeButton}/>
                        </span>
                    </li>
                </ul>
            </section>
        );
    };
};

export default AudioPlayer;
