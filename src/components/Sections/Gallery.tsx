import React from 'react';
import './Gallery.css';

const Gallery: React.FC = () => {
    // 10 Verified High-Reliability Images
    const images = [
        'https://images.unsplash.com/photo-1514362545857-3bc16549766b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1950&q=80', // Cocktails/Bar
        'https://images.unsplash.com/photo-1470337458703-46ad1756a187?ixlib=rb-4.0.3&auto=format&fit=crop&w=1950&q=80', // Ambiance
        'https://images.unsplash.com/photo-1551024709-8f23befc6f87?ixlib=rb-4.0.3&auto=format&fit=crop&w=1950&q=80', // Cheers
        'https://images.unsplash.com/photo-1572116469696-31de0f17cc34?ixlib=rb-4.0.3&auto=format&fit=crop&w=1950&q=80', // Interior
        'https://images.unsplash.com/photo-1543007630-9710e4a00a20?ixlib=rb-4.0.3&auto=format&fit=crop&w=1950&q=80', // Pouring Drink
        'https://images.unsplash.com/photo-1554118811-1e0d58224f24?ixlib=rb-4.0.3&auto=format&fit=crop&w=1950&q=80', // Cafe/Coffee
        'https://images.unsplash.com/photo-1566417713940-fe7c737a9ef2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1950&q=80', // Party Crowd
        'https://images.unsplash.com/photo-1574096079513-d82599602959?ixlib=rb-4.0.3&auto=format&fit=crop&w=1950&q=80', // Wine
        'https://images.unsplash.com/photo-1559339352-11d035aa65de?ixlib=rb-4.0.3&auto=format&fit=crop&w=1950&q=80', // Night Lights
        'https://images.unsplash.com/photo-1597075687490-8f673c6c17f6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1950&q=80'  // Coffee detail
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
