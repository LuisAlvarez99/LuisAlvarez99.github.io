import { Link } from 'react-router-dom';
import { Screen } from './reuse/Screen'
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';



export const About = () => {
    const particlesInit = async (main) => { 
    console.log(main); 
    // you can initialize the tsParticles instance (main) here, adding custom shapes or presets 
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready 
    // starting from v2 you can add only the features you need reducing the bundle size 
    await loadFull(main); 
  }; 
    const particlesLoaded = (container) => { 
    console.log(container); 
    }; 

    return(
        <>
            <Particles init={particlesInit} loaded={particlesLoaded} options={{
                "fullScreen": {
                    "enable": true,
                    "zIndex": -1
                },
                "particles": {
                    "number": {
                        "value": 700,
                        "density": {
                            "enable": false,
                            "value_area": 800
                        }
                    },
                    "color": {
                        "value": "#fff"
                    },
                    "shape": {
                        "type": "circle",
                        "options": {
                            "sides": 2
                        }
                    },
                    "opacity": {
                        "value": 0.8,
                        "random": false,
                        "anim": {
                            "enable": false,
                            "speed": 1,
                            "opacity_min": 0.1,
                            "sync": false
                        }
                    },
                    "size": {
                        "value": 1.4,
                        "random": false,
                        "anim": {
                            "enable": false,
                            "speed": 40,
                            "size_min": 0.1,
                            "sync": false
                        }
                    },
                    "rotate": {
                        "value": 0,
                        "random": true,
                        "direction": "clockwise",
                        "animation": {
                            "enable": true,
                            "speed": 5,
                            "sync": false
                        }
                    },
                    "line_linked": {
                        "enable": false,
                        "distance": 50,
                        "color": "#ffffff",
                        "opacity": 0.4,
                        "width": 2
                    },
                    "move": {
                        "enable": true,
                        "speed": .16,
                        "direction": "none",
                        "random": false,
                        "straight": true,
                        "out_mode": "out",
                        "attract": {
                            "enable": false,
                            "rotateX": 250,
                            "rotateY": 1200
                        }
                    }
                },
                "interactivity": {
                    "events": {
                        "onhover": {
                            "enable": true,
                            "mode": ["grab"]
                        },
                        "onclick": {
                            "enable": false,
                            "mode": "bubble"
                        },
                        "resize": true
                    },
                    "modes": {
                        "grab": {
                            "distance": 150,
                            "line_linked": {
                                "opacity": 1
                            }
                        },
                        "bubble": {
                            "distance": 150,
                            "size": 15,
                            "duration": 2,
                            "opacity": 8,
                            "speed": 3
                        },
                        "repulse": {
                            "distance": 200
                        },
                        "push": {
                            "particles_nb": 4
                        },
                        "remove": {
                            "particles_nb": 2
                        }
                    }
                },
                "retina_detect": true,
                fpsLimit: 30,
                "background": {
                    "color": "#0d1b2a",
                    "image": "",
                    "position": "50% 50%",
                    "repeat": "no-repeat",
                    "size": "cover"
                }
            }}>

            </Particles>
            <Link to={'/'}>Home</Link>
            <div style={{backgroundColor: '#0d1b2a', opacity: '0.95',height:'90vmin',width: '95vmax', top:'15px',left: '50px', position: 'relative'}}>
                <h1 style={{color: 'white'}}>About Me Page</h1>
                <p style={{color: 'white'}}>This is where I will write my bio</p>
            </div>
        </>
)
}