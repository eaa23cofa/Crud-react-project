import { useNavigate } from "react-router-dom";

export default function User({ id, name, players, duration, image, location }) {
  return (
    <div className="user-card">
      <useNavigate to={`/user/${id}`}>
        <img src={image} alt={name} />
        <h2>{name}</h2>
        <p>Players: {players}</p>
        <p>Duration: {duration}</p>
        <p>Location: {location}</p>
      </useNavigate>{" "}
      {/* Link to the detail page */}
    </div>
  );
}
