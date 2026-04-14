import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { QuizContext } from "../context/QuizContext";

const Home = () => {
  const [name, setName] = useState("");
  const { dispatch } = useContext(QuizContext);
  const navigate = useNavigate();

  const handleStart = () => {
    if (name.trim()) {
      dispatch({ type: "SET_NAME", payload: name });
      navigate("/quiz");
    }
  };

  return (
    <div className="container text-center mt-5">
      <h1 className="fw-bold mb-4">🚀 React Quiz Challenge</h1>
      <input
        placeholder="Enter your name"
        className="form-control w-50 mx-auto mb-3"
        type="text"
        autoComplete="off"
        onChange={(e) => setName(e.target.value)}
      />
      <button
        className="btn btn-primary btn-lg"
        onClick={handleStart}
        disabled={!name.trim()}
      >
        Start Quiz
      </button>
    </div>
  );
};

export default Home;
