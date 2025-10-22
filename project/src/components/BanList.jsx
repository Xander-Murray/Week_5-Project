export default function BanList({ banList, removeBan }) {
  if (banList.length === 0) {
    return <p className="ban-list-empty">No banned cats yet 🐾</p>;
  }

  return (
    <div className="ban-list">
      <h2>🚫 Banned Cats</h2>
      <ul>
        {banList.map((banned, index) => (
          <li key={index} onClick={() => removeBan(banned.name)}>
            <div className="banned-item">
              <img
                src={banned.image}
                alt={banned.name}
                className="banned-thumb"
              />
              <div className="banned-info">
                <strong>{banned.name}</strong> <br />
                <span>{banned.origin}</span>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
