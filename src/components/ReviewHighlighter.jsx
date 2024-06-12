// src/components/ReviewHighlighter.js
import React from 'react';
import './Tooltip.css';

const sentimentColors = {
    Positive: '#D9F2DD',
    Negative: '#F2DBD9',
    Mixed: '#e8bd6d',
    Neutral: '#eaf09b'
};

const ReviewHighlighter = ({ reviews }) => {
    return (
        <div>
            {reviews.map(review => (
                <div key={review.review_id} className="review">
                    <h3>{review.reviewer_name}</h3>
                    <p>Review ID: {review.review_id}</p>
                    <div className="rating">
                        {Array.from({ length: review.rating_review_score }).map((_, i) => (
                            <span key={i} className="star">★</span>
                        ))}
                        {Array.from({ length: review.out_of - review.rating_review_score }).map((_, i) => (
                            <span key={i} className="star empty">☆</span>
                        ))}
                    </div>
                    <div className="content">
                        {highlightText(review.raw_content, review.highlight_indices)}
                    </div>
                </div>
            ))}
        </div>
    );
};

const highlightText = (text, highlights) => {
    if (!highlights || highlights.length === 0) return text;

    let lastIndex = 0;
    const elements = [];

    highlights.forEach(([start, end, sentiment], index) => {
        elements.push(text.substring(lastIndex, start));
        elements.push(
            <span
                key={index}
                style={{ backgroundColor: sentimentColors[sentiment] }}
                className="tooltip"
            >
                {text.substring(start, end)}
                <span className="tooltiptext">{sentiment}</span>
            </span>
        );
        lastIndex = end;
    });

    elements.push(text.substring(lastIndex));
    return elements;
};

export default ReviewHighlighter;
