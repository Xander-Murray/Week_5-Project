import "./CatCard.css";

export default function CatCard({ cat }) {
  if (!cat) return null;

  const breed = cat.breeds?.[0];

  return (
    <div className="cat-card">
      <img
        src={cat.url}
        alt={breed?.name || "Random Cat"}
        className="cat-img"
      />
      <div className="cat-info">
        <h2>{breed?.name || "Unknown Breed"}</h2>
        <p>
          <strong>Origin:</strong> {breed?.origin || "Unknown"}
        </p>
        <p>
          <strong>Temperament:</strong> {breed?.temperament || "N/A"}
        </p>
        <p>
          <strong>Description:</strong>{" "}
          {breed?.description || "No description available."}
        </p>
      </div>
    </div>
  );
}
