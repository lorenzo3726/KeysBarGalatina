import React from 'react';
import './Sections.css';

const Menu: React.FC = () => {
    const menuItems = [
        {
            title: 'Caffetteria',
            description: 'L\'arte del caffè e dolci risvegli.',
            link: 'https://drive.google.com/file/d/1pzYqp5sqA_tADv-qphkcgSLfudP6HwGo/view?usp=sharing',
            image: 'https://images.unsplash.com/photo-1541167760496-1628856ab772?ixlib=rb-4.0.3&auto=format&fit=crop&w=1950&q=80'
        },
        {
            title: 'Food',
            description: 'Stuzzichini gourmet e piatti unici.',
            link: 'https://drive.google.com/file/d/1FexhUKcaoKxsQh4sjV54z7tBjUL6_j2S/view?usp=drive_link',
            image: 'https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1950&q=80'
        },
        {
            title: 'Drink & Bevande',
            description: 'Cocktail raffinati e vini selezionati.',
            link: 'https://drive.google.com/file/d/1uaEu1REnel6Phapk78vl6I_PUAJIx143/view?usp=sharing',
            image: 'https://images.unsplash.com/photo-1551024709-8f23befc6f87?ixlib=rb-4.0.3&auto=format&fit=crop&w=1950&q=80'
        }
    ];

    return (
        <section id="menu" className="section-padding menu-section">
            <div className="container">
                <h2 className="section-title">I Nostri Menu</h2>
                <div className="menu-grid">
                    {menuItems.map((item, index) => (
                        <div key={index} className="menu-card" style={{ padding: '0 0 2rem 0' }}>
                            <div style={{ width: '100%', height: '200px', overflow: 'hidden' }}>
                                <img
                                    src={item.image}
                                    alt={item.title}
                                    style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.3s' }}
                                />
                            </div>
                            <div style={{ padding: '2rem 1.5rem' }}>
                                <h3>{item.title}</h3>
                                <p>{item.description}</p>
                                <a href={item.link} target="_blank" rel="noopener noreferrer" className="btn btn-outline">
                                    Vedi Menu
                                </a>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="text-center" style={{ marginTop: '4rem', display: 'flex', justifyContent: 'center', gap: '2rem', flexWrap: 'wrap' }}>
                    <a href="https://drive.google.com/file/d/1YNruiOJGR66Nrsa-ulGYMbuWpyjK289g/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="btn btn-outline">
                        Menu Completo
                    </a>
                    <a href="https://drive.google.com/file/d/1wfO1Al4H3mZWnykpXLhT3WXTSoa1ypo7/view?usp=drive_link" target="_blank" rel="noopener noreferrer" className="btn btn-outline">
                        English Menu
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Menu;
