import { useNavigate } from "react-router-dom";
import UserForm from "../components/UserForm";
import { useState } from "react";

export default function CreatePage() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [players, setPlayers] = useState("");
  const [duration, setDuration] = useState("");
  const [image, setImage] = useState("");
  const [location, setLocation] = useState(""); // added location state

  async function createUser() {
    const newUser = {
      id: Date.now().toString(),
      name: name,
      players: players,
      duration: duration,
      image: image,
      location: location, // added location to the new user object
    }; // add the current date as id

    const data = localStorage.getItem("games"); // get data from local storage
    const gamesData = JSON.parse(data) || []; // parse the data from string to javascript array

    gamesData.push(newUser); // add the new user to the array
    localStorage.setItem("games", JSON.stringify(gamesData)); // save the games array to local storage

    navigate("/"); // navigate to the home page
  }

  function handleCancel() {
    navigate(-1);
  }

  return (
    <section className="page">
      <div className="container">
        <h1>Create New Game</h1>
        <UserForm
          onSubmit={createUser}
          onCancel={handleCancel}
          name={name}
          setName={setName}
          players={players}
          setPlayers={setPlayers}
          duration={duration}
          setDuration={setDuration}
          image={image}
          setImage={setImage}
          location={location}
          setLocation={setLocation}
        />
      </div>
    </section>
  );
}
