// src/components/ReviewList.js
import React, { useState, useEffect } from 'react';
import ReviewHighlighter from './ReviewHighlighter';

const ReviewList = () => {
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch('/reviews_data.json')
            .then(response => response.json())
            .then(data => setReviews(data))
            .catch(error => console.error('Error fetching reviews:', error));
    }, []);

    return (
        <div>
            {reviews.map((review, index) => (
                <ReviewHighlighter key={index} review={review} />
            ))}
        </div>
    );
};

export default ReviewList;
