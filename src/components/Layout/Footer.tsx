import React from 'react';
import './Layout.css';

const Footer: React.FC = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-grid">
                    <div className="footer-col">
                        <h4>Keys Bar Galatina</h4>
                        <p>La vostra storia in ogni incontro, in ogni sorso ed assaggio.</p>
                        <div className="social-icons">
                            <a href="https://www.instagram.com/keysbargalatina" target="_blank" rel="noopener noreferrer" className="social-link">Instagram</a>
                            <a href="https://www.facebook.com/keysbargalatina" target="_blank" rel="noopener noreferrer" className="social-link">Facebook</a>
                        </div>
                    </div>

                    <div className="footer-col">
                        <h4>Orari</h4>
                        <p>Lun - Sab: 07:30 - 02:00</p>
                        <p>Domenica: 08:30 - 13:30 / 15:00 - 02:00</p>
                        <p>Martedì: Chiuso</p>
                    </div>

                    <div className="footer-col">
                        <h4>Contatti</h4>
                        <p>Piazza S. Pietro, 4</p>
                        <p>73013 Galatina (LE)</p>
                        <p>info@keysbargalatina.it</p>
                    </div>
                </div>

                <div className="footer-bottom">
                    <p>&copy; {new Date().getFullYear()} Keys Bar Galatina. All rights reserved.</p>
                    <a href="https://www.keysbargalatina.it/privacy-policy" target="_blank" rel="noreferrer" style={{ marginLeft: '10px', fontSize: '0.8rem', color: '#666' }}>Privacy Policy</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
