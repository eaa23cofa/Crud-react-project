import { useEffect, useState } from "react";

export default function GameForm({ onSubmit, onCancel, game }) {
  const [name, setName] = useState(game ? game.name : "");
  const [players, setPlayers] = useState(game ? game.players : "");
  const [duration, setDuration] = useState(game ? game.duration : "");
  const [image, setImage] = useState(game ? game.image : "");

  useEffect(() => {
    if (game) {
      game.name && setName(game.name);
      game.players && setPlayers(game.players);
      game.duration && setDuration(game.duration);
      game.image && setImage(game.image);
    }
  }, [game]);

  function handleOnSubmit(event) {
    event.preventDefault();

    // Validate the form
    if (!name || !players || !duration) {
      alert("Please fill out all the fields");
      return;
    } else if (!image) {
      alert("Please paste an image URL");
      return;
    } else if (!image.startsWith("http")) {
      alert("Please paste a valid image URL");
      return;
    }

    const gameData = {
      // key: value from state
      name: name,
      players: players,
      duration: duration,
      image: image,
    };
    onSubmit(gameData);
  }

  return (
    <form onSubmit={handleOnSubmit}>
      <label htmlFor="name">Game Name</label>
      <input
        id="name"
        type="text"
        value={name}
        placeholder="Enter game name"
        onChange={(e) => setName(e.target.value)}
      />
      <label htmlFor="players">Players</label>
      <input
        id="players"
        type="text"
        value={players}
        placeholder="Enter number of players"
        onChange={(e) => setPlayers(e.target.value)}
      />
      <label htmlFor="duration">Duration (minutes)</label>
      <input
        id="duration"
        type="number"
        value={duration}
        placeholder="Enter duration in minutes"
        onChange={(e) => setDuration(e.target.value)}
      />
      <label htmlFor="image">Image URL</label>
      <input
        type="url"
        value={image}
        placeholder="Paste image URL"
        onChange={(e) => setImage(e.target.value)}
      />
      <label htmlFor="image-preview">Image Preview</label>
      <img
        id="image-preview"
        className="image-preview"
        src={
          image ? image : "https://placehold.co/600x400?text=Paste+an+image+URL"
        }
        alt="Game preview"
        onError={(e) =>
          (e.target.src =
            "https://placehold.co/600x400?text=Error+loading+image")
        }
      />
      <div className="btns">
        <button type="button" className="btn-cancel" onClick={onCancel}>
          Cancel
        </button>
        <button>{game ? "Save" : "Create"}</button>
      </div>
    </form>
  );
}
