import { FaStar, FaStarHalfAlt, FaRegStar } from 'react-icons/fa';

const Rating = ({ voteAverage = 0, voteCount = 0 }) => {
  return (
    <div className="d-flex align-items-center">
      {Array.from({ length: 5 }, (_, index) => {
        const rating = voteAverage / 2;
        if (index + 1 <= rating) return <FaStar key={index} className="text-star" size={24} />;
        if (index + 0.5 <= rating)
          return <FaStarHalfAlt key={index} className="text-star" size={24} />;
        return <FaRegStar key={index} className="text-star" size={24} />;
      })}

      <span className="ms-2 text-secondary">{voteCount} votes</span>
    </div>
  );
};

export default Rating;
