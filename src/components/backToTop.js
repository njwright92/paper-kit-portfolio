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

    // Scroll to the top smoothly
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
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
                    <i className="fa fa-arrow-up" aria-hidden="true" style={{ fontSize: '3.5em', marginRight: 2, color: 'green' }}></i>
                </Button>
            )}
        </div>
    );
};

export default BackToTop;
