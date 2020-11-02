import React, { useEffect } from 'react';

function SmoothScroll({ children, onScroll }) {
    const scrollHandler = () => {
        window.requestAnimationFrame(() => onScroll(window.scrollY));
    };

    useEffect(() => {
        if (typeof window === 'undefined') return;

        window.addEventListener('scroll', scrollHandler, false);

        return () => window.removeEventListener('scroll', scrollHandler, false);
    }, []);

    return (children);
}

export default SmoothScroll;
