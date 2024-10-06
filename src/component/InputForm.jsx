import { useDispatch, useSelector } from "react-redux";
import { checkPalindrome, setInput } from "../features/palindromeSlice";
import { Button, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const InputForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { input, loading } = useSelector((state) => state.palindrome);

  const handleChange = (e) => {
    dispatch(setInput(e.target.value));
  };

  const handleCheck = async () => {
    if (input.trim()) {
      const resultAction = await dispatch(checkPalindrome(input));
      if (resultAction.meta.requestStatus === "fulfilled") {
        navigate("/result"); // Navigate only if the request was successful
      }
    }
  };
  return (
    <>
      <Form>
        <Form.Label htmlFor="inputText">Enter A String</Form.Label>
        <Form.Control
          type="text"
          id="inputText"
          aria-describedby="texthelptext"
          value={input}
          onChange={handleChange}
          placeholder="Enter a string"
        />
        <Form.Text id="texthelptext" style={{ color: "#FF7303" }}>
          An input is required to check the palindrome
        </Form.Text>
      </Form>
      <Button
        variant="primary"
        onClick={handleCheck}
        disabled={loading || !input}
      >
        {loading ? "Checking..." : "Check palindrome"}
      </Button>
    </>
  );
};

export default InputForm;
