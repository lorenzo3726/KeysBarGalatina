import React from 'react';
import './Sections.css';

const Info: React.FC = () => {
    return (
        <section id="info" className="section-padding info-section">
            <div className="container">
                <div className="info-grid">
                    <div className="info-details">
                        <h3>Vieni a trovarci</h3>

                        <div className="info-block">
                            <h4>Indirizzo</h4>
                            <p>Piazza S. Pietro, 4<br />73013 Galatina (LE)</p>
                        </div>

                        <div className="info-block">
                            <h4>Orari di Apertura</h4>
                            <p>
                                <strong>Lunedì - Sabato:</strong> 07:30 - 02:00<br />
                                <strong>Domenica:</strong> 08:30 - 13:30 / 15:00 - 02:00<br />
                                <span style={{ color: 'var(--accent-danger)' }}>Martedì: Chiuso</span>
                            </p>
                        </div>

                        <div className="info-block">
                            <h4>Contatti</h4>
                            <p>
                                Email: info@keysbargalatina.it<br />
                                Seguici sui nostri canali social per aggiornamenti e eventi.
                            </p>
                        </div>
                    </div>

                    <div className="map-container">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3056.883976378946!2d18.16912331538356!3d40.17643797939369!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x134423bd1c5c9a4d%3A0xe7a5c7f8f8b6e3f4!2sPiazza%20S.%20Pietro%2C%204%2C%2073013%20Galatina%20LE!5e0!3m2!1sen!2sit!4v1629898765432!5m2!1sen!2sit"
                            loading="lazy"
                            title="Keys Bar Location"
                        ></iframe>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Info;
