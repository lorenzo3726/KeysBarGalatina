import React from 'react';
import './Gallery.css';
import gallery1Img from '../../assets/gallery-1.jpg';

const Gallery: React.FC = () => {
    // 10 Verified High-Reliability Images
    const images = [
        gallery1Img, // Cocktails/Bar
        'https://images.unsplash.com/photo-1551024709-8f23befc6f87?ixlib=rb-4.0.3&auto=format&fit=crop&w=1950&q=80', // Cheers/Drinks
        'https://images.unsplash.com/photo-1572116469696-31de0f17cc34?ixlib=rb-4.0.3&auto=format&fit=crop&w=1950&q=80', // Interior
        'https://images.unsplash.com/photo-1543007630-9710e4a00a20?ixlib=rb-4.0.3&auto=format&fit=crop&w=1950&q=80', // Pouring
        'https://images.unsplash.com/photo-1470337458703-46ad1756a187?ixlib=rb-4.0.3&auto=format&fit=crop&w=1950&q=80', // Atmosphere
        'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1950&q=80', // Wine
        'https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1950&q=80', // Pizza/Eats
        'https://images.unsplash.com/photo-1497935586351-b67a49e012bf?ixlib=rb-4.0.3&auto=format&fit=crop&w=1950&q=80', // Coffee Art
        'https://images.unsplash.com/photo-1559339352-11d035aa65de?ixlib=rb-4.0.3&auto=format&fit=crop&w=1950&q=80', // Night Lights
        'https://images.unsplash.com/photo-1566417713940-fe7c737a9ef2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1950&q=80'  // Party Vibes
    ];

    // Duplicate images to create seamless loop
    const sliderImages = [...images, ...images];

    return (
        <section className="gallery-slider-section">
            <div className="gallery-slider-track">
                {sliderImages.map((img, index) => (
                    <div key={index} className="gallery-slide">
                        <img src={img} alt={`Keys Bar Mood ${index % images.length + 1}`} loading="lazy" />
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Gallery;
