import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import User from "../components/User.jsx"; // Reusing the User component for displaying game details
import { useNavigate } from "react-router-dom";

export default function UserDetailPage() {
  const { id } = useParams(); // Get the ID from the URL
  const [game, setGame] = useState(null); // Store game data here
  const navigate = useNavigate();

  useEffect(() => {
    const data = localStorage.getItem("games");
    const gamesData = JSON.parse(data) || [];
    const selectedGame = gamesData.find((game) => game.id === parseInt(id)); // Find the game by ID
    setGame(selectedGame);
  }, [id]);

  function showDeleteDialog() {
    if (!game) return; // Ensure game is loaded
    const shouldDelete = window.confirm(
      `Do you want to delete "${game.name}"?`
    );
    if (shouldDelete) {
      deleteGame();
    }
  }

  function deleteGame() {
    const data = localStorage.getItem("games");
    const gamesData = JSON.parse(data) || [];
    const updatedGames = gamesData.filter((game) => game.id !== parseInt(id));
    localStorage.setItem("games", JSON.stringify(updatedGames)); // Update localStorage
    navigate("/"); // Navigate back to homepage after deletion
  }

  function showUpdate() {
    if (game) {
      navigate(`/user/${id}/update`);
    }
  }

  if (!game) return <p>Loading...</p>; // Loading state before the game is fetched

  return (
    <div id="user-page" className="page">
      <div className="container">
        <button onClick={() => navigate(-1)}>Back to Game List</button>{" "}
        {/* Back button to return */}
        <div className="user-card">
          <h1>{game.name}</h1>
          <User
            id={game.id}
            name={game.name}
            players={game.players}
            duration={game.duration}
            image={game.image}
            location={game.location}
          />
        </div>
        <div className="btns">
          <button className="btn-cancel" onClick={showDeleteDialog}>
            Delete Game
          </button>
          <button onClick={showUpdate}>Update Game</button>
        </div>
      </div>
    </div>
  );
}
