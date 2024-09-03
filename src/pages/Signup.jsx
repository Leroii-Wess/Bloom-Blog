import styled from "styled-components";
import flower from "../assets/dark-flower.jpg";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const user = { name, email, password };
    localStorage.setItem("userDetails", JSON.stringify({ user }));
  }, [name, email, password]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name && !email && !password)
      return alert("Enter name, username and password");

    console.log(name, email, password);

    navigate("signup-welcome");
  };

  return (
    <OuterDiv>
      <FormDiv>
        <h1>BLOOM</h1>

        <Form>
          <Input
            type="text"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Name"
          />
          <Input
            type="text"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
          />
          <Input
            type="text"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
          />

          <Button onClick={handleSubmit}>Sign Up</Button>
        </Form>
      </FormDiv>
      <FlowerDiv>
        <Img src={flower} alt="flowers" />
      </FlowerDiv>
    </OuterDiv>
  );
}

export default Signup;

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
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
`;

const FormDiv = styled.div`
  padding: 3rem 1rem;
  background-color: #32474a;
  width: 40%;
  color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
  gap: 4rem;
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

  &:hover {
    background-color: #c22c58;
  }
`;
