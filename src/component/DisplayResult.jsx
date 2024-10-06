import { Button, Card } from "react-bootstrap";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const DisplayResult = () => {
  const { result, error } = useSelector((state) => state.palindrome);
  const navigate = useNavigate();

  return (
    <Card
      style={{ width: "30rem", margin: "auto", padding: "1rem" }}
      className="bg-dark text-white"
    >
      <Card.Body>
        {error ? (
          <p style={{ color: "red", textAlign: "center" }}>{error}</p>
        ) : result ? (
          <>
            <Card.Title>Result</Card.Title>
            <Card.Subtitle className="md-2 text-muted">
              {result.input}
            </Card.Subtitle>
            <Card.Text>
              {result.is_palindrome
                ? `${result.input} is a palindrome`
                : `${result.input} is not a palindrome`}
            </Card.Text>
          </>
        ) : (
          <p>No result to display.</p>
        )}
        <div className="text-center mt-3">
          <Button variant="primary" onClick={() => navigate("/")}>
            Check Another
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
};

export default DisplayResult;
