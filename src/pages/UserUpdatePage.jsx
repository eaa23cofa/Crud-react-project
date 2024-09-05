import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import UserForm from "../components/UserForm"; // Replace UserForm with GameForm

export default function UpdatePage() {
  const { id } = useParams(); // Get the game ID from the URL params
  const navigate = useNavigate();
  const [game, setGame] = useState({});

  useEffect(() => {
    const data = localStorage.getItem("games"); // Fetch games from localStorage
    const gamesData = JSON.parse(data) || [];
    setGame(gamesData.find((game) => game.id === id)); // Find the game with the matching ID
  }, [id]);

  async function updateGame(gameToUpdate) {
    const data = localStorage.getItem("games");
    const gamesData = JSON.parse(data) || [];

    // Map through the games and update the one with the matching ID
    const updatedGames = gamesData.map((game) => {
      if (game.id === id) {
        return { ...game, ...gameToUpdate }; // Merge the updated data
      }
      return game; // Return other games as is
    });

    localStorage.setItem("games", JSON.stringify(updatedGames)); // Save updated games list to localStorage
    navigate(`/games/${id}`); // Navigate to the game detail page
  }

  function handleCancel() {
    navigate(-1); // Go back to the previous page
  }

  return (
    <section className="page">
      <div className="container">
        <h1>Update Game</h1>
        <UserForm
          onSubmit={updateGame}
          onCancel={handleCancel}
          game={game}
        />{" "}
        {/* Pass game data to GameForm */}
      </div>
    </section>
  );
}
