import { Card, Spinner } from 'react-bootstrap';
import CustomPagination from './Pagination';

const Reviews = ({ isLoading, error, reviews }) => {
  if (isLoading) {
    return (
      <h4 className="text-light text-center mt-4">
        <Spinner animation="border" />
      </h4>
    );
  }

  if (error) {
    return <h4 className="text-danger text-center mt-4">Error loading reviews.</h4>;
  }

  if (!reviews.reviews.length) {
    return (
      <div className="my-3">
        <h3 className="fw-bold mt-5 ">Reviews</h3>
        <p className="text-secondary">No reviews yet.</p>
      </div>
    );
  }

  const reviewCards = reviews.reviews.map((review) => (
    <Card key={review.id} className="mb-3 custom-card">
      <Card.Body>
        <strong>{review.author || 'Unknown'}</strong>
        <p>{review.content || 'No content available.'}</p>
      </Card.Body>
    </Card>
  ));

  return (
    <div className="my-3">
      <h3 className="fw-bold mt-5 ">Reviews</h3>
      <div className="mt-3">{reviewCards}</div>
      <CustomPagination totalPages={reviews.totalPages} />
    </div>
  );
};

export default Reviews;
