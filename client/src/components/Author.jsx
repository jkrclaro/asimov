import React from 'react';

const styles = {
    textColor: {color: '#aaa'}
}

class Author extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: {
                "-xmlns:atom": "http://www.w3.org/2005/Atom",
                "-xmlns:cc": "http://web.resource.org/cc/",
                "-xmlns:itunes": "http://www.itunes.com/dtds/podcast-1.0.dtd",
                "-xmlns:media": "http://search.yahoo.com/mrss/",
                "-xmlns:content": "http://purl.org/rss/1.0/modules/content/",
                "-xmlns:rdf": "http://www.w3.org/1999/02/22-rdf-syntax-ns#",
                "-version": "2.0",
                "channel": {
                    "atom:link": {
                      "-href": "http://joeroganexp.joerogan.libsynpro.com/rss",
                      "-rel": "self",
                      "-type": "application/rss+xml"
                    },
                    "title": "The Joe Rogan Experience",
                    "pubDate": "Wed, 16 Jan 2019 01:02:41 +0000",
                    "lastBuildDate": "Wed, 16 Jan 2019 01:12:42 +0000",
                    "generator": "Libsyn WebEngine 2.0",
                    "link": "http://blog.joerogan.net",
                    "language": "en",
                    "copyright": "Copyright © Talking Monkey Productions ",
                    "docs": "http://blog.joerogan.net",
                    "managingEditor": "joe@joerogan.net (joe@joerogan.net)",
                    "itunes:summary": "The podcast of Comedian Joe Rogan..",
                    "image": {
                      "url": "http://static.libsyn.com/p/assets/7/1/f/3/71f3014e14ef2722/JREiTunesImage2.jpg",
                      "title": "The Joe Rogan Experience",
                      "link": "http://blog.joerogan.net"
                    },
                    "itunes:author": "Joe Rogan",
                    "itunes:keywords": "comedian,joe,monkey,redban,rogan,talking,ufc",
                    "itunes:category": [
                      { "-text": "Comedy" },
                      { "-text": "Society & Culture" },
                      {
                        "-text": "Technology",
                        "itunes:category": { "-text": "Podcasting" }
                      }
                    ],
                    "itunes:image": { "-href": "http://static.libsyn.com/p/assets/7/1/f/3/71f3014e14ef2722/JREiTunesImage2.jpg" },
                    "itunes:explicit": "yes",
                    "itunes:owner": {
                      "itunes:name": "Joe Rogan",
                      "itunes:email": "joe@joerogan.net"
                    },
                    "description": "Conduit to the Gaian Mind",
                    "itunes:subtitle": "Joe Rogan's Weekly Podcast",
                    "itunes:type": "episodic",
                    "itunes:new-feed-url": "http://joeroganexp.joerogan.libsynpro.com/rss",
                    "item": [
                      {
                        "title": "#1225 - Theo Von",
                        "pubDate": "Wed, 16 Jan 2019 01:02:41 +0000",
                        "guid": {
                          "-isPermaLink": "false",
                          "#cdata-section": "12bdbebc8858413585dcccbda4c5fdf2"
                        },
                        "link": "http://traffic.libsyn.com/joeroganexp/p1225.mp3",
                        "itunes:image": { "-href": "http://static.libsyn.com/p/assets/a/b/8/5/ab852eeff0433094/JRE1225.jpg" },
                        "description": "Theo Von is a stand-up comedian, television personality, host, and actor. Check out his podcast called “This Past Weekend”& \"The King & The Sting\" with Brendan Schaub both available on iTunes & YouTube. ",
                        "content:encoded": "Theo Von is a stand-up comedian, television personality, host, and actor. Check out his podcast called “This Past Weekend”& \"The King & The Sting\" with Brendan Schaub both available on iTunes & YouTube. ",
                        "enclosure": {
                          "-length": "186615253",
                          "-type": "audio/mpeg",
                          "-url": "http://traffic.libsyn.com/joeroganexp/p1225.mp3?dest-id=19997"
                        },
                        "itunes:duration": "03:14:02",
                        "itunes:explicit": "no",
                        "itunes:keywords": "podcast,joe,party,experience,von,freak,rogan,theo,deathsquad,jre,1225",
                        "itunes:subtitle": "Theo Von is a stand-up comedian, television personality, host, and actor. Check out his podcast called “This Past Weekend”& \"The King & The Sting\" with Brendan Schaub both available on iTunes & YouTube. ",
                        "itunes:episode": "1225",
                        "itunes:episodeType": "full"
                      },
                      {
                        "title": "#1224 - Adam Greentree",
                        "pubDate": "Tue, 15 Jan 2019 00:32:42 +0000",
                        "guid": {
                          "-isPermaLink": "false",
                          "#cdata-section": "db3270b9462a4819ad18c3e389468825"
                        },
                        "link": "http://traffic.libsyn.com/joeroganexp/p1224.mp3",
                        "itunes:image": { "-href": "http://static.libsyn.com/p/assets/f/9/e/4/f9e402b4064e3245/JRE1224.jpg" },
                        "description": "Adam Greentree is a bowhunter and photographer from Australia. He also hosts his own podcast called “Bowhunter’s Life” available for download via iTunes.",
                        "content:encoded": "Adam Greentree is a bowhunter and photographer from Australia. He also hosts his own podcast called “Bowhunter’s Life” available for download via iTunes.",
                        "enclosure": {
                          "-length": "151208906",
                          "-type": "audio/mpeg",
                          "-url": "http://traffic.libsyn.com/joeroganexp/p1224.mp3?dest-id=19997"
                        },
                        "itunes:duration": "02:37:09",
                        "itunes:explicit": "no",
                        "itunes:keywords": "podcast,joe,party,experience,adam,freak,rogan,deathsquad,jre,1224,greentree",
                        "itunes:subtitle": "Adam Greentree is a bowhunter and photographer from Australia. He also hosts his own podcast called “Bowhunter’s Life” available for download via iTunes.",
                        "itunes:episode": "1224",
                        "itunes:episodeType": "full"
                      },
                      {
                        "title": "#1223 - Greg Fitzsimmons",
                        "pubDate": "Sat, 12 Jan 2019 00:16:40 +0000",
                        "guid": {
                          "-isPermaLink": "false",
                          "#cdata-section": "31243551f6d048229a84f1210345e62a"
                        },
                        "link": "http://traffic.libsyn.com/joeroganexp/p1223.mp3",
                        "itunes:image": { "-href": "http://static.libsyn.com/p/assets/c/4/9/2/c4926d0f885f0b0e/JRE1223.jpg" },
                        "description": "Greg Fitzsimmons is a writer and stand-up comedian. He also hosts a podcast with Alison Rosen called \"Childish\" that is available now on iTunes & Stitcher.",
                        "content:encoded": "Greg Fitzsimmons is a writer and stand-up comedian. He also hosts a podcast with Alison Rosen called \"Childish\" that is available now on iTunes & Stitcher.",
                        "enclosure": {
                          "-length": "201195444",
                          "-type": "audio/mpeg",
                          "-url": "http://traffic.libsyn.com/joeroganexp/p1223.mp3?dest-id=19997"
                        },
                        "itunes:duration": "03:29:35",
                        "itunes:explicit": "no",
                        "itunes:keywords": "podcast,joe,party,experience,greg,freak,fitzsimmons,rogan,deathsquad,jre,1223",
                        "itunes:subtitle": "Greg Fitzsimmons is a writer and stand-up comedian. He also hosts a podcast with Alison Rosen called \"Childish\" that is available now on iTunes & Stitcher.",
                        "itunes:episode": "1223",
                        "itunes:episodeType": "full"
                      },
                      {
                        "title": "#1222 - Michael Shermer",
                        "pubDate": "Fri, 11 Jan 2019 00:07:30 +0000",
                        "guid": {
                          "-isPermaLink": "false",
                          "#cdata-section": "5dd687dd0a804b9f87915d12b586260f"
                        },
                        "link": "http://traffic.libsyn.com/joeroganexp/p1222.mp3",
                        "itunes:image": { "-href": "http://static.libsyn.com/p/assets/8/5/a/c/85acc792f38bd2e9/JRE1222.jpg" },
                        "description": "Michael Shermer is a science writer, historian of science, founder of The Skeptics Society, and Editor in Chief of its magazine Skeptic, which is largely devoted to investigating pseudoscientific and supernatural claims.",
                        "content:encoded": "Michael Shermer is a science writer, historian of science, founder of The Skeptics Society, and Editor in Chief of its magazine Skeptic, which is largely devoted to investigating pseudoscientific and supernatural claims.",
                        "enclosure": {
                          "-length": "169482939",
                          "-type": "audio/mpeg",
                          "-url": "http://traffic.libsyn.com/joeroganexp/p1222.mp3?dest-id=19997"
                        },
                        "itunes:duration": "02:56:12",
                        "itunes:explicit": "no",
                        "itunes:keywords": "podcast,joe,party,experience,michael,shermer,freak,rogan,deathsquad,jre,1222",
                        "itunes:subtitle": "Michael Shermer is a science writer, historian of science, founder of The Skeptics Society, and Editor in Chief of its magazine Skeptic, which is largely devoted to investigating pseudoscientific and supernatural claims.",
                        "itunes:episode": "1222",
                        "itunes:episodeType": "full"
                      },
                      {
                        "title": "JRE MMA Show #55 with Kelly Pavlik",
                        "pubDate": "Thu, 10 Jan 2019 00:11:36 +0000",
                        "guid": {
                          "-isPermaLink": "false",
                          "#cdata-section": "f5435435222840d2996c5d5883c77c4b"
                        },
                        "link": "http://traffic.libsyn.com/joeroganexp/mmashow055.mp3",
                        "itunes:image": { "-href": "http://static.libsyn.com/p/assets/f/8/1/7/f817e6747b71ff71/JRE1221ab.jpg" },
                        "description": "Joe is joined by former unified WBC, WBO, Ring magazine and lineal middleweight champion, Kelly Pavlik.",
                        "content:encoded": "Joe is joined by former unified WBC, WBO, Ring magazine and lineal middleweight champion, Kelly Pavlik.",
                        "enclosure": {
                          "-length": "156197604",
                          "-type": "audio/mpeg",
                          "-url": "http://traffic.libsyn.com/joeroganexp/mmashow055.mp3?dest-id=19997"
                        },
                        "itunes:duration": "02:42:23",
                        "itunes:explicit": "no",
                        "itunes:keywords": "podcast,mma,show,joe,kelly,party,experience,freak,rogan,pavlik,55,deathsquad,jre",
                        "itunes:subtitle": "Joe is joined by former unified WBC, WBO, Ring magazine and lineal middleweight champion, Kelly Pavlik.",
                        "itunes:episode": "1221",
                        "itunes:episodeType": "full"
                      },
                      {
                        "title": "JRE MMA Show #54 with Din Thomas",
                        "pubDate": "Tue, 08 Jan 2019 22:56:12 +0000",
                        "guid": {
                          "-isPermaLink": "false",
                          "#cdata-section": "206af5a01d384cba89415245bde8dc1d"
                        },
                        "link": "http://traffic.libsyn.com/joeroganexp/mmashow054.mp3",
                        "itunes:image": { "-href": "http://static.libsyn.com/p/assets/8/e/4/7/8e47753c6135b89d/JRE1221a.jpg" },
                        "description": "Joe is joined by co-star of \"Dana White's Looking For A Fight\" and coach at American Top Team, Din Thomas.",
                        "content:encoded": "Joe is joined by co-star of \"Dana White's Looking For A Fight\" and coach at American Top Team, Din Thomas.",
                        "enclosure": {
                          "-length": "173813351",
                          "-type": "audio/mpeg",
                          "-url": "http://traffic.libsyn.com/joeroganexp/mmashow054.mp3?dest-id=19997"
                        },
                        "itunes:duration": "03:00:44",
                        "itunes:explicit": "no",
                        "itunes:keywords": "podcast,mma,show,joe,party,experience,freak,rogan,54,deathsquad,jre",
                        "itunes:subtitle": "Joe is joined by co-star of \"Dana White's Looking For A Fight\" and coach at American Top Team, Din Thomas.",
                        "itunes:episode": "1221",
                        "itunes:episodeType": "full"
                      }
                    ]
                }
            },
            activetab: '1'
        };
        this.toggle = this.toggle.bind(this);
    };

    toggle(activetab) {
        if (this.state.activetab !== activetab) {
            this.setState({ activetab });
        };
    };

    render() {
        return (
            <div>
                <div className='container'>
                    <div className='row mb-3'>
                        <div className='col-sm-4 col-md-3 col-lg-2'>
                            <img className='img-fluid rounded' alt='David Hall #VultureFunds Ep.130' width='100%' src='https://podcast-api-images.s3.amazonaws.com/podcast_logo_15_300x300.jpg'></img>
                        </div>
                        <div className='col-sm-8 col-md-9 col-lg-10'>
                            <h3>About</h3>
                            <b style={styles.textColor}>
                                The Joe Rogan Experience podcast is a long form conversation hosted by comedian, UFC color commentator, and actor Joe Rogan with friends and guests that have included comedians, actors, musicians, MMA instructors and commentators, authors, artists, and porn stars. The Joe Rogan Experience was voted the Best Comedy Podcast of 2012 on iTunes.
                            </b>
                        </div>
                    </div>

                    <h3>Recommended</h3>
                    <div className='row'>
                        <div className='col-6 col-md-4 col-lg-2 mb-3'>
                            <img alt='img-1' src='http://static.libsyn.com/p/assets/f/c/6/c/fc6c9200b62007e1/JRE1220a.jpg' className='img-fluid rounded' width='100%'/>
                        </div>
                        <div className='col-6 col-md-4 col-lg-2 mb-3'>
                            <img alt='img-2' src='http://static.libsyn.com/p/assets/f/c/6/c/fc6c9200b62007e1/JRE1220a.jpg' className='img-fluid rounded' width='100%'/>
                        </div>
                        <div className='col-6 col-md-4 col-lg-2 mb-3'>
                            <img alt='img-3' src='http://static.libsyn.com/p/assets/f/c/6/c/fc6c9200b62007e1/JRE1220a.jpg' className='img-fluid rounded' width='100%'/>
                        </div>
                        <div className='col-6 col-md-4 col-lg-2 mb-3'>
                            <img alt='img-4' src='http://static.libsyn.com/p/assets/f/c/6/c/fc6c9200b62007e1/JRE1220a.jpg' className='img-fluid rounded' width='100%'/>
                        </div>
                        <div className='col-6 col-md-4 col-lg-2 mb-3'>
                            <img alt='img-5' src='http://static.libsyn.com/p/assets/f/c/6/c/fc6c9200b62007e1/JRE1220a.jpg' className='img-fluid rounded' width='100%'/>
                        </div>
                        <div className='col-6 col-md-4 col-lg-2 mb-3'>
                            <img alt='img-6' src='http://static.libsyn.com/p/assets/f/c/6/c/fc6c9200b62007e1/JRE1220a.jpg' className='img-fluid rounded' width='100%'/>
                        </div>
                    </div>
                    
                    <h3>Episodes</h3>
                    <div className='row mt-3 mb-3'>
                        {
                            this.state.data.channel.item.map((item, index) => 
                                <div className='col-lg-12' key={index}>
                                    <div className='row'>
                                        <div className='col-md-2 col-lg-2 mb-3'>
                                            <img alt={index} className='img-fluid' width='100%' src={item['itunes:image']['-href']}></img>
                                        </div>
                                        <div className='col-md-10 col-lg-10 mb-3'>
                                            <a href='/authors/thejoeroganexperience/podcasts/jre-1223-greg-fitzsimmons' className='text-style'>
                                                <b>{item.title}</b>
                                                <p>{item.description}</p>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            )
                        }
                    </div>
                </div>
            </div>
        );
    };
};

export default Author;
