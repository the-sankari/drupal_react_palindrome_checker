import { useEffect } from "react";
import { Button } from "react-bootstrap";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const DisplayResult = () => {
  const { result, error } = useSelector((state) => state.palindrome);
  const navigate = useNavigate();

  return (
    <div>
      {error ? (
        <p style={{ color: "red" }}>{error}</p>
      ) : result ? (
        <div className="result">
          <p>Input: {result.input}</p>
          <p>Is Palindrome: {result.is_palindrome ? "Yes" : "No"}</p>
        </div>
      ) : (
        <p>No result to display.</p>
      )}
      <Button onClick={()=>navigate('/')}>Check Anothor</Button>
    </div>
  );
};

export default DisplayResult;
