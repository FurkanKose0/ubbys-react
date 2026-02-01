import React from 'react';

const TopBar = () => {
    return (
        <header className="ubys-top-bar">
            <div className="top-bar-left">
                <i className="fas fa-th"></i>

            </div>
            <div className="top-bar-right">
                <i className="far fa-question-circle"></i>
                <i className="far fa-bell"></i>
                <i className="fas fa-user-circle"></i>
                <i className="fas fa-sign-out-alt"></i>
            </div>
        </header>
    );
};

export default TopBar;
