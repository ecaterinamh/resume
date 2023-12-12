import Particles from 'react-tsparticles';
import { loadSlim } from 'tsparticles-slim';
import { useCallback, useMemo } from 'react';

export default function ParticlesComponent(props) {

    const options = useMemo(() =>{
        return {
            background: {
                color: "#000",
            },
            fullScreen: {
                enable: true,
                zIndex: 0,
            },
            interactivity: {
                events: {
                    onClick: {
                        enable: true, 
                        mode: 'push',
                    },
                    onHover: {
                        enable: true, 
                        mode: 'repulse',
                    },
                    resize: true,
                },
                modes: {
                    push: {
                        quantity: 15, 
                    },
                    repulse: {
                        distance: 100,
                        duration: 0.4,
                    },
                },
            },
            particles: {
                number: {
                    density: {
                        enable: true,
                        value_area: 1000
                    }
                },
                color: {
                    value: '#fff',
                },
                links:{
                    enable: true,
                    distance: 100,
                },
                move:{
                    enable: true,
                    speed: {min: 1, max: 3}
                },
                opacity: {
                    value: {min: 0.3, max: 0.6}
                }, 
                size: {
                    value: {min: 1, max: 2},
                    random: true,
                        anim: {
                            enable: true,
                            speed: 3
                        }
                },
                detectRetina: true,
            }
        };

    }, []);

    const particlesInit = useCallback((engine)=> {
        loadSlim(engine);
    }, []);

    return <Particles id={props.id} init={particlesInit} options={options} />;
};