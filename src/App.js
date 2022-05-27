import React from 'react';
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';
import { Header } from './components/Header';
import { RouterWeb } from './RouterWeb';

export const App = () => {
  const particlesInit = async (main) => {
    await loadFull(main);
  };
  return (
    <div data-testid="test-id-app">
      <Particles
        init={particlesInit}
        options={{
          background: {
            color: {
              value: 'white',
            },
          },
          fpsLimit: 150,
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
                quantity: 4,
              },
              repulse: {
                distance: 200,
                duration: 0.4,
              },
            },
          },
          particles: {
            color: {
              value: '#087857',
            },
            links: {
              color: '#087857',
              distance: 150,
              enable: true,
              opacity: 0.3,
              width: 1,
            },
            collisions: {
              enable: true,
            },
            move: {
              direction: 'none',
              enable: true,
              outModes: {
                default: 'bounce',
              },
              random: false,
              speed: 6,
              straight: false,
            },
            number: {
              density: {
                enable: true,
                area: 1000,
              },
              value: 80,
            },
            opacity: {
              value: 0.3,
            },
            shape: {
              type: 'circle',
            },
            size: {
              value: { min: 1, max: 5 },
            },
          },
          detectRetina: true,
        }}
      />
      <Header />
      <RouterWeb />
    </div>
  );
};
