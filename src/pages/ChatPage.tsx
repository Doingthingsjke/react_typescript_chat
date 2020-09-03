import React, { useState } from "react";
import { MessageList } from "../components/MassageList";
import { SendForm } from "../components/SendForm";

export const Chat: React.FunctionComponent = () => {
  const [messages, setMassages] = useState([]);

  const addHandler = (message: string) => {
    console.log("asd = ", message);
  };

  return (
    <div className="container">
      <MessageList />
      <SendForm onAdd={addHandler} />
    </div>
  );
};
