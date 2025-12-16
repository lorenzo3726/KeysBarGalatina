import React from 'react';
import './Sections.css';

const About: React.FC = () => {
    return (
        <section id="about" className="section-padding about">
            <div className="container">
                <div className="about-grid">
                    <div className="about-image-container">
                        <img
                            src="https://images.unsplash.com/photo-1542181961-9590d0c79dab?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
                            alt="Keys Bar Interior"
                            className="about-image"
                        />
                    </div>
                    <div className="about-content">
                        <h2>La Nostra Storia</h2>
                        <p>
                            Nel cuore pulsante di Galatina, dove la storia sussurra tra le antiche pietre e la vita scorre vivace, nasce il KEYS Bar.
                            Era una calda giornata di giugno quando le sue porte si aprirono per la prima volta, affacciandosi su Piazza San Pietro,
                            cornice d'eccezione impreziosita dalla magnifica Chiesa Madre.
                        </p>
                        <p>
                            KEYS Bar regala emozioni sempre diverse: dal ritmo incalzante delle serate estive con musica dal vivo, alla pausa nel tepore invernale,
                            che la nostra terra sa offrire, magari accompagnando un buon libro ad un calice di vino ed a uno sfizioso aperitivo che accarezza ed appaga ogni desiderio.
                        </p>
                        <p>
                            Un luogo dove ogni ospite è speciale, accolto con un sorriso e accompagnato nella scelta del drink perfetto per ogni occasione.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
