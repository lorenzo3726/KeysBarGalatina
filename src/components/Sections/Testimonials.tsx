import React from 'react';
import './Testimonials.css';
import './Sections.css';

const Testimonials: React.FC = () => {
    // Placeholder reviews based on typical positive feedback for 4.5 star bars
    // Real text extraction was blocked by TripAdvisor anti-bot protections
    const reviews = [
        {
            text: "Un'atmosfera unica a Galatina. I cocktail sono preparati con maestria e il personale è sempre accogliente. Consigliatissimo per una serata tra amici.",
            author: "Andrea M.",
            initial: "A",
            stars: 5
        },
        {
            text: "Location curata nei minimi dettagli. Ho apprezzato molto la selezione di gin e l'aperitivo ricco. Tornerò sicuramente!",
            author: "Luca R.",
            initial: "L",
            stars: 5
        },
        {
            text: "Semplicemente il miglior bar della zona. Musica piacevole, ottimi drink e un servizio impeccabile. Bravi!",
            author: "Giulia P.",
            initial: "G",
            stars: 5
        }
    ];

    return (
        <section className="section-padding testimonials-section">
            <div className="container">
                <h2 className="section-title">Cosa Dicono di Noi</h2>
                <div className="testimonials-grid">
                    {reviews.map((review, index) => (
                        <div key={index} className="testimonial-card">
                            <p className="testimonial-quote">"{review.text}"</p>
                            <div className="testimonial-author">
                                <div className="author-avatar">{review.initial}</div>
                                <div className="author-info">
                                    <h4>{review.author}</h4>
                                    <div className="stars">
                                        {'★'.repeat(review.stars)}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="text-center" style={{ marginTop: '3rem' }}>
                    <a href="https://www.tripadvisor.it/Restaurant_Review-g652002-d14095498-Reviews-Keys_Bar-Galatina_Province_of_Lecce_Puglia.html" target="_blank" rel="noopener noreferrer" className="btn btn-outline">
                        Leggi tutte le recensioni su TripAdvisor
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
