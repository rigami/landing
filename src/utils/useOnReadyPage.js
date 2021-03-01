import { useEffect } from 'react';

export default (onReady) => {
    const handlePlay = () => {
        if (document.readyState !== 'complete') return;
        onReady();
    };

    useEffect(() => {
        if (document.readyState === 'complete') {
            handlePlay();
            return () => {};
        }
        document.addEventListener('readystatechange', handlePlay, true);

        return () => document.removeEventListener('readystatechange', handlePlay, true);
    }, []);
};
