import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Robot from "../assets/robot.gif";
import Logout from "./Logout";
export default function Welcome() {
  const [firstName, setfirstName] = useState("");
  useEffect(async () => {
    setfirstName(
      await JSON.parse(
        localStorage.getItem(process.env.REACT_APP_LOCALHOST_KEY)
      ).firstName
    );
  }, []);
  return (
    <Container>
      <div className="chat-header" style={{display: "inline", width: "400px"}}>
        <h3>Click here to logout<Logout /></h3>
        
      </div>
      <img src={Robot} alt="" />
      <h1>
        Welcome, <span>{firstName}!</span>
      </h1>
      <h3>Please select a chat to Start messaging.</h3>
      
     
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  flex-direction: column;
  img {
    height: 20rem;
  }
  span {
    color: #4e0eff;
  }
`;
