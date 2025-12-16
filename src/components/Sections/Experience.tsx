import React from 'react';
import './Experience.css';
import './Sections.css';
import birthdayCakeImg from '../../assets/birthday-cake.jpg';

const Experience: React.FC = () => {
    const experiences = [
        {
            title: 'Festeggia con Noi',
            description: 'Trasforma il tuo compleanno in un evento indimenticabile. Spazi esclusivi e catering personalizzato per rendere unica la tua festa.',
            // Birthday Cake image
            image: birthdayCakeImg
        },
        {
            title: 'Aperitivo con Noi',
            description: 'Il momento perfetto per rilassarsi. Cocktail artigianali e una selezione di stuzzichini gourmet nel cuore di Galatina.',
            // Aperitivo/Spritz image
            image: 'https://images.unsplash.com/photo-1556679343-c7306c1976bc?ixlib=rb-4.0.3&auto=format&fit=crop&w=1950&q=80'
        },
        {
            title: 'La Colazione Perfetta',
            description: 'Inizia la giornata con dolcezza. Cornetti appena sfornati, caffè pregiati e un\'atmosfera accogliente per il tuo risveglio.',
            // Coffee/Croissant image
            image: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?ixlib=rb-4.0.3&auto=format&fit=crop&w=1950&q=80'
        }
    ];

    return (
        <section className="section-padding experience-section">
            <div className="container">
                <h2 className="section-title">Esperienze Uniche</h2>
                <div className="experience-grid">
                    {experiences.map((exp, index) => (
                        <div key={index} className="experience-card">
                            <img src={exp.image} alt={exp.title} className="experience-img" />
                            <div className="experience-content">
                                <h3>{exp.title}</h3>
                                <p>{exp.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;
