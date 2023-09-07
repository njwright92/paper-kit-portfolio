import React, { useEffect, useState } from 'react';
import { Button } from 'reactstrap';

const BackToTop = () => {
    const [isVisible, setIsVisible] = useState(false);

    // Show button when page is scrolled up to a given distance
    const toggleVisibility = () => {
        if (window.pageYOffset > 300) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    const scrollToTop = () => {
        const scrollHeight = window.scrollY;
        const scrollStep = Math.floor(scrollHeight / 50);
        const scrollInterval = setInterval(() => {
            if (window.scrollY !== 0) {
                window.scrollBy(0, -scrollStep);
            } else {
                clearInterval(scrollInterval);
            }
        }, 15);
    };


    useEffect(() => {
        window.addEventListener('scroll', toggleVisibility);
        return () => window.removeEventListener('scroll', toggleVisibility);
    }, []);

    return (
        <div className="scroll-to-top" style={{ position: 'fixed', bottom: '20px', right: '20px', zIndex: 9999 }}>
            {isVisible && (
                <Button
                    style={{ backgroundColor: 'transparent', border: 'black', boxShadow: 'none' }}
                    onClick={scrollToTop}
                >
                    <i className="arrow-button fa fa-arrow-up" aria-hidden="true" style={{ fontSize: '3em', marginRight: 2, color: 'black' }}></i>
                </Button>
            )}
        </div>
    );
};

export default BackToTop;
