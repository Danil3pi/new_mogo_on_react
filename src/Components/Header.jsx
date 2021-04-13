import React from 'react';
import './Style_for_header.css';

const Header = () => {
    return (
        <header className="header">
            <div className="container">
                <div className="header_inner">
                    <div className="deager_logo">WB</div>
                    <nav>
                        <a href="#" className="nav_link">About</a>
                    </nav>
                </div>
            </div>
        </header>
    );
};

export default Header;