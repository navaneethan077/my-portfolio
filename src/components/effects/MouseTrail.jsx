import React, { useState, useEffect } from 'react';
import useMousePosition from '../../hooks/useMousePosition';
import './MouseTrail.css';

const MouseTrail = () => {
    const mousePosition = useMousePosition();
    const [trail, setTrail] = useState([]);

    useEffect(() => {
        if (mousePosition.x === 0 && mousePosition.y === 0) return;

        setTrail((prevTrail) => {
            const newTrail = [
                ...prevTrail,
                {
                    x: mousePosition.x,
                    y: mousePosition.y,
                    id: Date.now(),
                },
            ];

            // Keep only last 15 trail points
            return newTrail.slice(-15);
        });
    }, [mousePosition]);

    // Remove old trail points
    useEffect(() => {
        const interval = setInterval(() => {
            setTrail((prevTrail) => prevTrail.slice(1));
        }, 50);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="mouse-trail-container">
            {trail.map((point, index) => (
                <div
                    key={point.id}
                    className="trail-dot"
                    style={{
                        left: point.x,
                        top: point.y,
                        opacity: (index + 1) / trail.length,
                        transform: `scale(${(index + 1) / trail.length})`,
                    }}
                />
            ))}
        </div>
    );
};

export default MouseTrail;
