'use client'
import styles from "../page.module.css";
import { useState } from "react";
import Messages from "./message";

export default function Chat() {

  const [input,setInput] = useState("");
  const [message,setMessage] = useState([]);

  const handleChange = (e) => { 
    setInput(e.target.value); 
  }

  const handleSendMessage = () => {
    if (input.trim() !== "") {
      setMessage([...message,input]);
      setInput("");
    }
  };

  return(
    <>
      <div className={styles.chat_container}>

        <div className={styles.chat_header}>
          <div className={styles.container_logo}>
            <img className={styles.chatbot_logo} src="img/bot-logo.jpg"/>
          </div>
          <div className={styles.chat_name}>
            <p>Chatbot UDB</p>
            <p><span className={styles.dot}>&#9679;</span> En Linea</p>
          </div>
        </div>

        <div className={styles.chat_body}>
          {
            message.map((msg,index) => <Messages key={index} myMessage={msg}/>)
          }
        </div>

        <div className={styles.chat_footer}>
          <input type="text" placeholder="Mensaje" value={input} onChange={handleChange}/>
          <button onClick={handleSendMessage}>&#10148;</button>
        </div>

      </div>
    </>
  );

}