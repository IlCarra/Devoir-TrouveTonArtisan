import { Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const ArtisanCard = ({ artisan }) => {
    const renderStars = (rating) => {
        const stars = [];
        for (let i = 1; i <= 5; i++) {
            if (i <= Math.floor(rating)) {
                stars.push(<i key={i} className="bi bi-star-fill text-success me-1"></i>);
            } else if (i === Math.ceil(rating) && rating % 1 !== 0) {
                stars.push(<i key={i} className="bi bi-star-half text-success me-1"></i>);
            } else {
                stars.push(<i key={i} className="bi bi-star text-success me-1"></i>);
            }
        }
        return stars;
    };

    return (
        <Card className='h-100 border-0 shadow-sm rounded-4 text-center p-3 artisan-card-hover'>
            <Card.Body>
                <div className='mb-3'>
                    <i className='bi bi-person-circle display-4 text-primary'></i>
                </div>
                <Card.Title className='fw-bold mb-1'>{artisan.nom}</Card.Title>
                <Card.Subtitle className='mb-2 text-muted small'>{artisan.spécialité}</Card.Subtitle>

                <div className='my-3'>
                    {renderStars(artisan.note)}
                </div>

                <Link to={`/artisan/${artisan.id}`}>
                    <Button variant="primary" className='rounded-pill px-4 fw-bold w-100'>
                        Voir profile
                    </Button>
                </Link>        
            </Card.Body>
        </Card>
    );
};

export default ArtisanCard;