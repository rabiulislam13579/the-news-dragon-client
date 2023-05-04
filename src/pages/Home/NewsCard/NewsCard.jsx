import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import moment from 'moment';
import { FaBookmark, FaShareAlt, FaStar, FaEye, FaRegStar } from 'react-icons/fa';
import './NewsCard.css'
import Rating from 'react-rating';

const NewsCard = ({ news }) => {
    const { _id, title, details, image_url, author, rating, total_view } = news;
    return (
        <Card className="mb-4">
            <Card.Header>
                <div className='profile-card'>
                    <div className='profile-left'>
                        <img className='img-profile img-fluid' src={author.img} alt="" />
                        <div>
                            <h5 className='mb-0 mt-0'>{author?.name}</h5>
                            <p><small> {moment(author?.published_date).format('yyyy-MM-DD')}</small></p>
                        </div>
                    </div>
                    <div >
                        <FaBookmark />
                        <FaShareAlt />
                    </div>
                </div>
            </Card.Header>
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Img variant="top" src={image_url} className='mb-3' />
                <Card.Text>
                    {details.length < 250 ? details : <>{details.slice(0, 250)}...<Link to={`/news/${_id}`} className='text-warning text-decoration-none'>Read More</Link></>}
                </Card.Text>

            </Card.Body>
            <Card.Footer className="text-muted">
                <div className='footer'>
                    <div>
                        
                            <Rating
                              placeholderRating= {rating.number}
                              readonly
                              emptySymbol ={<FaRegStar></FaRegStar>}
                              placeholderSymbol ={<FaStar className='text-warning'></FaStar>}
                              fullSymbol ={<FaStar></FaStar>}
                            
                            >
                              
                            </Rating>
                        <span className='ms-2'>{rating?.number}</span>

                    </div>
                    <div>
                        <FaEye></FaEye>
                        <span className='ms-2'>{total_view}</span>
                    </div>
                </div>
            </Card.Footer>
        </Card>
    );
};

export default NewsCard;