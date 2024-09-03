import styled from "styled-components";
import flower from "../assets/dark-flower.jpg";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const user = { email, password };
    localStorage.setItem("userDetails", JSON.stringify({ user }));
  }, [email, password]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name && !password) return alert("Enter username and password");

    console.log(email, password);

    navigate("welcome");
  };

  return (
    <OuterDiv>
      <FlowerDiv>
        <Img src={flower} alt="flowers" />
      </FlowerDiv>
      <FormDiv>
        <h1>BLOOM</h1>

        <Form>
          <Input
            type="text"
            placeholder="Email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Input
            type="password"
            placeholder="Password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button onClick={handleSubmit}>Sign In</Button>
        </Form>
      </FormDiv>
    </OuterDiv>
  );
}

export default Login;

const OuterDiv = styled.div`
  width: 60%;
  margin: 2rem auto;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  display: flex;
  border-radius: 10px;
`;

const FlowerDiv = styled.div`
  width: 60%;
`;

const Img = styled.img`
  height: 100%;
  width: 100%;
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
`;

const FormDiv = styled.div`
  padding: 3rem 1rem;
  background-color: #32474a;
  width: 40%;
  color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
  gap: 7rem;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  width: 80%;
`;

const Input = styled.input`
  background-color: #32474a;
  color: #fff;
  border: 2px solid #fff;
  border-radius: 50px;
  padding: 0.8rem 1.5rem;
  width: 100%;
  font: inherit;
  font-size: 1.4rem;

  &::placeholder {
    color: #ced4da;
  }

  &:focus {
    outline: none;
  }
`;

const Button = styled.button`
  padding: 1rem 1.5rem;
  border: none;
  border-radius: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  background-color: #d83162;
  transition: all 0.2s ease-in-out;
  cursor: pointer;
  font: inherit;
  font-size: 1.4rem;
  margin-top: 2rem;

  &:hover {
    background-color: #c22c58;
  }
`;
