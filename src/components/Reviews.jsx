import { Card, Spinner } from 'react-bootstrap';

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

  if (!reviews.length) {
    return <p className="text-secondary">No reviews yet.</p>;
  }

  const reviewCards = reviews.map((review) => (
    <Card key={review.id} className="mb-3 custom-card">
      <Card.Body>
        <strong>{review.author || 'Unknown'}</strong>
        <p>{review.content || 'No content available.'}</p>
      </Card.Body>
    </Card>
  ));

  return (
    <div>
      <h3 className="fw-bold mt-5 ">Reviews</h3>
      <div className="mt-3">{reviewCards}</div>
    </div>
  );
};

export default Reviews;
