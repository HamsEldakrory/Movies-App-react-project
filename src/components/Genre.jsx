const Genre = ({ genres }) => {
  return (
    <div className="d-flex gap-2">
      {genres.map((genre) => (
        <span key={genre.id} className="genre-badge">
          {genre.name}
        </span>
      ))}
    </div>
  );
};

export default Genre;
