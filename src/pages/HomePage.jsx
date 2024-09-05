import { useState } from "react";
import User from "../components/User"; // Component to display the game details

export default function HomePage() {
  const [games] = useState([
    {
      id: 1,
      name: "Partners Duo",
      players: "2",
      duration: "45'",
      image:
        "https://www.legogide.dk/cdn/shop/files/2974129-partners-duo-01.webp?v=1694075012",
      location: "Shelf A5",
    },
    {
      id: 2,
      name: "Hint",
      players: "4-10",
      duration: "45'-60'",
      image:
        "https://cdn.zatu.com/wp-content/uploads/2022/01/17071039/HINT.jpg",
      location: "Shelf C6",
    },
    {
      id: 3,
      name: "UNO",
      players: "3-10",
      duration: "15'-30'",
      image:
        "https://matraws.dk/cdn/shop/files/uno-card-game-dansk-mattel-w2087-meuse-280.webp?v=1714482665&width=750",
      location: "SMÅ",
    },
    {
      id: 4,
      name: "Town 66",
      players: "1-4",
      duration: "15'",
      image:
        "https://thegamesden.co.uk/wp-content/uploads/2022/11/town-66-board-game.webp",
      location: "SMÅ",
    },
    {
      id: 5,
      name: "The Crew",
      players: "3-5",
      duration: "10'",
      image:
        "https://store.thamesandkosmos.com/cdn/shop/products/TheCrew_3DBox.jpg?v=1667421243",
      location: "Shelf A4",
    },
    {
      id: 6,
      name: "Temple Rush",
      players: "2-4",
      duration: "25'",
      image:
        "https://thirstymeeples.co.uk/cdn/shop/products/TempleRush_2000x.png?v=1626448409",
      location: "Shelf F6",
    },
    {
      id: 7,
      name: "Taboo",
      players: "4-10",
      duration: "20'",
      image:
        "https://images.meesho.com/images/products/161344242/893vl_512.webp",
      location: "Shelf G7",
    },
    {
      id: 8,
      name: "Sushi Go!",
      players: "2-5",
      duration: "15",
      image:
        "https://x.boardgamearena.net/data/gamemedia/sushigo/box/en_280.png?h=1651658850",
      location: "Shelf H8",
    },
    {
      id: 9,
      name: "Skip Bo",
      players: "2-6",
      duration: "30'",
      image:
        "https://image-resizing.booztcdn.com/mattel-games/mgs42050_cmulticolor.webp?has_grey=1&has_webp=0&dpr=2.5&size=w400",
      location: "Shelf I9",
    },
    {
      id: 10,
      name: "Sequence",
      players: "2-12",
      duration: "20'",
      image:
        "https://cdn.svc.asmodee.net/production-asmodeenordics/uploads/2022/10/Sequence_Left.png",
      location: "Shelf J10",
    },
    // Add more games as needed
  ]);

  const [selectedGame, setSelectedGame] = useState(null); // State to hold the selected game

  // Function to handle clicking on a game
  const handleGameClick = (game) => {
    setSelectedGame(game); // Set the selected game
  };

  const handleBack = () => {
    setSelectedGame(null); // Reset to go back to the game list
  };

  // If a game is selected, show the detailed view
  if (selectedGame) {
    return (
      <div className="game-detail">
        <button onClick={handleBack}>Back to Game List</button>
        <img src={selectedGame.image} alt={selectedGame.name} />
        <h1>{selectedGame.name}</h1>
        <p>Players: {selectedGame.players}</p>
        <p>Duration: {selectedGame.duration}</p>
        <p>Location: {selectedGame.location}</p>
      </div>
    );
  }

  // Render the list of games if no game is selected
  return (
    <section className="page">
      <section className="grid">
        {games.map((game) => (
          <div
            key={game.id}
            className="game-card"
            onClick={() => handleGameClick(game)}
          >
            <User
              id={game.id}
              name={game.name}
              players={game.players}
              duration={game.duration}
              image={game.image}
              location={game.location}
            />
          </div>
        ))}
      </section>
    </section>
  );
}
