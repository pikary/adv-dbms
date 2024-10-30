
export const renderStars = (rating: number) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
        if (i <= Math.floor(rating)) {
            // Full star
            stars.push(<span key={i} className="star star__full">&#9733;</span>);
        } else {
            // not full star
            const delta = (i - rating) * 100;
            const filliness = (100 - (delta))
            stars.push(<span key={i} className="star star__other" style={{ '--fill-percentage': `${filliness}%` } as React.CSSProperties}>&#9733;</span>);
        }
    }
    return stars;
};
