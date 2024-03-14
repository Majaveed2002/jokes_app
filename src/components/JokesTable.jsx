import React from "react";

const JokesTable = ({ jokes }) => {
  return (
    <div className="container">
      <h2 className="text-center mb-4">Jokes Table</h2>
      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Joke</th>
          </tr>
        </thead>
        <tbody>
          {jokes.map((joke, index) => (
            <tr key={index}>
              <th scope="row">{index + 1}</th>
              <td>{joke.setup}</td>
              <td>{joke.delivery}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default JokesTable;
