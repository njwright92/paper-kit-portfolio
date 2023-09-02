import React from 'react';

const RunningStream = () => {
    const runningStreamStyle = {
        position: 'relative',
        width: '100%',
        height: '2em',
        overflow: 'hidden'
    };

    const streamWave1Style = {
        position: 'absolute',
        width: '200%',
        height: '2em',
        background: 'linear-gradient(90deg, rgba(0, 0, 255, 0.2), rgba(0, 0, 255, 0.8))',
        animation: 'stream1 3s linear infinite',
    };

    const streamWave2Style = {
        position: 'absolute',
        width: '200%',
        height: '2em',
        background: 'linear-gradient(90deg, rgba(0, 0, 255, 0.8), rgba(0, 0, 255, 0.2))',
        animation: 'stream2 3s linear infinite',
        animationDelay: '1s'

    };

    return (
        <>
            <style>
                {`
          @keyframes stream1 {
            0% {
              left: -100%;
            }
            100% {
              left: 100%;
            }
          }

          @keyframes stream2 {
            0% {
              left: 100%;
            }
            100% {
              left: -100%;
            }
          }
        `}
            </style>
            <div style={runningStreamStyle}>
                <div style={streamWave1Style}></div>
                <div style={streamWave2Style}></div>
            </div>
        </>
    );
};

export default RunningStream;