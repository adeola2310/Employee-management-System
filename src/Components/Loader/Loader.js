import React from 'react';

const Loader = ({ color }) => {
    return (
        <div
            style={{
                display: 'block',
                margin: `${color === 'white' ? 0 : '20px'} auto`,
            }}
            className={`spinner spinner-${color || 'teal'}`}
        />
    );
};

export default Loader;
