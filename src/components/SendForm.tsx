import React, { useState } from "react";

interface MessageListProps {
    onAdd(message: string): void
}

export const SendForm: React.FunctionComponent<MessageListProps> = (props) => {
  const [message, setMessage] = useState<string>("");

  const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setMessage(event.target.value);
  };
  const KeyPressHandler = (event: React.KeyboardEvent) => {
    if (event.key === "Enter") {
      props.onAdd(message);
      setMessage("");
    }
  };

  // const clickHandler = (event: React.EventHandler) => {
  //     if (pressed) {
  //         props.onAdd(message);
  //         setMessage("");
  //     }
  // }

  
  return (
    <div className="chat-controls">
      <input
        onChange={changeHandler}
        value={message}
        type="text"
        id="message"
        placeholder="Введите сообщение"
        onKeyPress={KeyPressHandler}
        className="chat-controls__textarea"
      />
      <button className="right btn brown darken-3 chat-controls__btn btns-row" >
        Отправить
      </button>
    </div>
  );
};
