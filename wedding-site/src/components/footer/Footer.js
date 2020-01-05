import React from 'react';
import './Footer.scss';

export function Footer() {
    return (
        <footer className="footer">
            <p className="description">If you have any questions, please get in touch at;</p>
            <div className="email"><a href="mailto://rgrundy@qebarnet.ac.uk">rgrundy@qebarnet.ac.uk</a></div>
            <div className="email"><a href="mailto://michael.walker@softwire.com">michael.walker@softwire.com</a></div>
        </footer>
    );
}