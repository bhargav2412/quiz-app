import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const LeaderBoard = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("leaderboard")) || [];
    setData(stored);
  }, []);

  const clearBoard = () => {
    localStorage.removeItem("leaderboard");
    setData([]);
  };

  return (
    <div className="container text-center py-5">
      <h2 className="fw-bold mb-4">🏆 Leaderboard</h2>
      {data.length === 0 ? (
        <p className="text-muted">No Scores yet! Play the Quiz.</p>
      ) : (
        <table className="table table-striped shadow">
          <thead className="table-dark">
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Score</th>
              <th>Percentage</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
            {data.map((value, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{value.name}</td>
                <td>{value.score}</td>
                <td>{value.percentage}%</td>
                <td>{value.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
      <div className="d-flex gap-2 justify-content-center mt-3">
        <button className="btn btn-danger" onClick={clearBoard}>
          Clear Leaderboard
        </button>
        <Link
          to="/"
          onClick={() => dispatch({ type: "RESET" })}
          className="btn btn-warning"
        >
          Home
        </Link>
      </div>
    </div>
  );
};

export default LeaderBoard;
