import React from "react";
import { Message } from "./Massage";

export const MessageList: React.FunctionComponent = () => {
  return (
    <div className="message_list mt1">
      <div className="chat-history">
        <ul>
          <li className="chat-item chat-item--me">
            <img
              src="https://img.icons8.com/bubbles/50/000000/man-in-red-shirt.png"
              alt=""
            />
            <div className="message">
              <p className="message__text">
                Жизнь человека имеет смысл лишь в той степени, насколько она
                помогает сделать жизни других людей красивее и благороднее.
                Жизнь священна. Это наивысшая ценность, которой подчинены все
                прочие ценности.
              </p>
            </div>
          </li>
          <li className="chat-item chat-item--other">
            <div className="message">
              <p className="message__text">Жизнь священна.</p>
            </div>
            <img
              src="https://img.icons8.com/bubbles/50/000000/man-in-violet-tie.png"
              alt=""
            />
          </li>
          <li className="chat-item chat-item--me">
            <img
              src="https://img.icons8.com/bubbles/50/000000/man-in-red-shirt.png"
              alt=""
            />
            <div className="message">
              <p className="message__text">
                Это наивысшая ценность, которой подчинены все прочие ценности.
              </p>
            </div>
          </li>
          <li className="chat-item chat-item--other">
            <div className="message">
              <p className="message__text">Жизнь священна.</p>
            </div>
            <img
              src="https://img.icons8.com/bubbles/50/000000/man-in-violet-tie.png"
              alt=""
            />
          </li>
          <li className="chat-item chat-item--me">
            <img
              src="https://img.icons8.com/bubbles/50/000000/man-in-red-shirt.png"
              alt=""
            />
            <div className="message">
              <p className="message__text">
                Это наивысшая ценность, которой подчинены все прочие ценности.
              </p>
            </div>
          </li>
          <li className="chat-item chat-item--other">
            <div className="message">
              <p className="message__text">
                Это наивысшая ценность, которой подчинены все прочие ценности.
              </p>
            </div>
            <img
              src="https://img.icons8.com/bubbles/50/000000/man-in-violet-tie.png"
              alt=""
            />
          </li>
        </ul>
      </div>
      {/* <Message /> */}
    </div>
  );
};
