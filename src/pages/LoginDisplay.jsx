import { useEffect, useState } from "react";
import styled from "styled-components";

function LoginDisplay() {
  const [email, setEmail] = useState("");

  useEffect(() => {
    const { user } = JSON.parse(localStorage.getItem("userDetails"));
    const { email } = user;

    setEmail(email);
  }, []);

  return (
    <OuterDiv>
      <ContentDiv>
        <H3>Welcome</H3>
        <P>🎊 logged in successfully 🎊</P>
        <Span>Email: {email}</Span>
      </ContentDiv>
    </OuterDiv>
  );
}

export default LoginDisplay;

const OuterDiv = styled.div`
  width: 60%;
  margin: 2rem auto;
  display: flex;
  border-radius: 7px;
  background-color: #32474a;
  color: #fff;
  padding: 7rem 10rem;
  align-items: center;
  justify-content: center;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
`;

const ContentDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const H3 = styled.h3`
  font-size: 2rem;
`;

const P = styled.p`
  font-size: 1.4rem;
`;

const Span = styled.span`
  font-size: 1.6rem;
  font-weight: 700;
`;
