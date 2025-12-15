import React, { useState, useEffect } from 'react';
import useMousePosition from '../../hooks/useMousePosition';
import './CustomCursor.css';

const CustomCursor = () => {
    const mousePosition = useMousePosition();
    const [isHovering, setIsHovering] = useState(false);

    useEffect(() => {
        const handleMouseOver = (e) => {
            if (
                e.target.tagName === 'A' ||
                e.target.tagName === 'BUTTON' ||
                e.target.classList.contains('btn') ||
                e.target.closest('a') ||
                e.target.closest('button')
            ) {
                setIsHovering(true);
            } else {
                setIsHovering(false);
            }
        };

        document.addEventListener('mouseover', handleMouseOver);

        return () => {
            document.removeEventListener('mouseover', handleMouseOver);
        };
    }, []);

    return (
        <>
            <div
                className={`custom-cursor ${isHovering ? 'hovering' : ''}`}
                style={{
                    left: `${mousePosition.x}px`,
                    top: `${mousePosition.y}px`,
                }}
            />
            <div
                className={`custom-cursor-dot ${isHovering ? 'hovering' : ''}`}
                style={{
                    left: `${mousePosition.x}px`,
                    top: `${mousePosition.y}px`,
                }}
            />
        </>
    );
};

export default CustomCursor;
