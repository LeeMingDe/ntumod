import React from 'react';

import '../styles/layout/footer.scss';

const Footer: React.FC = () => {
    return (
        <div className="footer-container">
            <div className="footer-logo-wrapper">
                <span className="footer-logo">LOGO</span>
                <span>an academic-planning initative for students by students</span>
            </div>
            <div className="footer-links-wrapper">
                <div className="footer-contribute">Contribute to NTU Mods</div>
                <span>
                    About
                </span>
                <span>
                    Team
                </span>
                <span>
                    FAQ
                </span>
                <span>
                    GitHub
                </span>
            </div>
            <div>
                Inspired by NUSMods. Developed by NTUModsTeam, maintained by students. {'\n'}
                &copy;{new Date().getFullYear()}-Present, NTUMods. {'\n'}
                All rights reserved. NTU Mods version 1.0
            </div>
        </div>
    );
}

export default Footer;