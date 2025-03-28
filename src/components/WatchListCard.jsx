import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Star } from 'lucide-react';
import { removeFromWatchlist } from '../store/slices/watchlistSlice';
import { useDispatch } from 'react-redux';
import { Heart } from 'lucide-react';
import '../styles/custom.css';
function WatchListCard(props) {
  const { movie } = props;
  const dispatch = useDispatch();
  const handleRemoveFromWatchlist = () => {
    dispatch(removeFromWatchlist(movie.id));
  };
  return (
    <Card key={movie.id} className="m-3 rounded-3 shadow d " style={{ maxWidth: '540px' }}>
      <div className="d-flex flex-row align-items-center gap-4 ">
        <div>
          <Card.Img
            src="../../public/download (1) 3.png"
            style={{ width: '450px', height: '250px' }}
            className="img-fluid m-3"
          />
        </div>
        <div className="">
          <Card.Body>
            <Card.Title className="fw-bolder  " style={{ fontSize: '35px' }}>
              {movie.title}
              <Button
                onClick={handleRemoveFromWatchlist}
                className="float-end border-0"
                style={{
                  backgroundColor: 'white',
                  width: '40px',
                  height: '40px',
                }}
              >
                <Heart fill="#FFE353" size={35} />
              </Button>
            </Card.Title>
            <Card.Text className="text-muted small ">Sep 25, 2017</Card.Text>
            <Card.Text className="text-muted small ">
              <div className="d-flex flex-row align-items-center gap-1 star ">
                <Star className="text-dark " fill="dark" size={20} />
                <Star className="text-dark " fill="dark" size={20} />
                <Star className="text-dark " fill="dark" size={20} />
                <Star className="text-dark " fill="dark" size={20} />
                <Star className="text-dark" size={20} /> 9288
              </div>{' '}
            </Card.Text>
            <Card.Text className="">
              Natasha Romanoff, also known as Black Widow, confronts the darker parts of her ledger
              when a dangerous conspiracy with ties to her past arises. Pursued by....
            </Card.Text>
          </Card.Body>
        </div>
      </div>
    </Card>
  );
}

export default WatchListCard;
