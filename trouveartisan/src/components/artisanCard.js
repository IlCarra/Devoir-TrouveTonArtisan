import React from 'react';

const ArtisanCard = ({ artisan }) => {
    return (
        <div className='card-artisan'>
            <h3>{artisan.nom}</h3>
            <p><strong>Spécialité:</strong> {artisan.spécialité}</p>
            <p><i className="bi bi-star-fill"></i> {artisan.note} - {artisan.localisation}</p>
            <button>Vois profile</button>
        </div>
    );
};

export default ArtisanCard;