import { Spinner } from 'react-bootstrap';
import Carousel from 'react-multi-carousel';
import MainPageCard from './MainPageCard';

const Recommendations = ({ isLoading, error, recommendations, category = 'Movies' }) => {
  if (isLoading) {
    return (
      <h4 className="text-light text-center mt-4">
        <Spinner animation="border" />
      </h4>
    );
  }

  if (error) {
    return (
      <h4 className="text-danger text-center mt-4">
        Error loading recommended shows: {error.message}
      </h4>
    );
  }

  if (!recommendations || recommendations.length === 0) {
    return <p className="text-light text-center">No recommended shows found.</p>;
  }

  return (
    <div>
      <h3 className="fw-bold mt-5 text-white">Recommended {category}</h3>

      <Carousel
        responsive={{
          superLargeDesktop: { breakpoint: { max: 4000, min: 1200 }, items: 4 },
          desktop: { breakpoint: { max: 1200, min: 992 }, items: 3 },
          tablet: { breakpoint: { max: 992, min: 768 }, items: 2 },
          mobile: { breakpoint: { max: 768, min: 0 }, items: 1 },
        }}
        infinite
        autoPlay
        autoPlaySpeed={2000}
        keyBoardControl
        transitionDuration={400}
        removeArrowOnDeviceType={['tablet', 'mobile']}
        className="mt-3"
      >
        {recommendations.map((recShow) => (
          <MainPageCard key={recShow.id} showItem={recShow} />
        ))}
      </Carousel>
    </div>
  );
};

export default Recommendations;
