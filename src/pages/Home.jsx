import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import JokesTable from "../components/JokesTable";
import { BeatLoader } from "react-spinners";

const Home = () => {
  const [jokes, setJokes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState({});

  const navigate = useNavigate();

  useEffect(() => {
    const userDetails = JSON.parse(localStorage.getItem("user"));
    if (!userDetails) {
      navigate("/");
    }
    setUser(userDetails);
    const fetchJokes = async () => {
      const response = await fetch(
        "https://sv443.net/jokeapi/v2/joke/Miscellaneous?type=twopart&amount=10"
      );
      const data = await response.json();
      console.log(data.jokes);
      setJokes(data.jokes);
      setLoading(false);
    };
    fetchJokes();
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("user");
    navigate("/");
  };

  return (
    <div className="container">
      <h1 className="mt-4">
        Where Laughter Never Takes a Day Off: Welcome to the Joke Factory!
        <span> Mr/Miss {user.username}</span>
      </h1>
      <div className="d-flex justify-content-end align-items-center mx-5">
        <button onClick={handleLogout} className="btn btn-danger">
          logout
        </button>
      </div>
      {loading ? (
        <div className="loading-container d-flex justify-content-center align-items-center">
          <BeatLoader />
        </div>
      ) : (
        <JokesTable jokes={jokes} />
      )}
    </div>
  );
};

export default Home;
