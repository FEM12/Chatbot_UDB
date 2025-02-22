import styles from "../page.module.css";
import questions from "../json/questions"
import { useEffect, useState } from "react";

export default function Messages({myMessage}) {

  const [answer,setAnswer] = useState([]);
  
  useEffect(()=>{handleQuestion()},[])

  const handleQuestion = () => {

    //const regex = new RegExp(message,"i");
    //const coincidence = questions.filter(r => regex.test(r.question),);
    const result = questions.filter(r => r.question == myMessage,);

    const resultFilterAnswer = result.length > 0 ? result.map(a => a.answer)
    : ["Lo siento, no tengo una respuesta para eso."];

    setAnswer([...answer,...resultFilterAnswer]);

  }
  
  return(
    <>
      {
        <span className={styles.my_message}>
          <p>{myMessage}</p>
        </span>
      }
      {
        answer.map((msg,index) => (
          <span key={index} className={styles.bot_message}>
            <p>{msg}</p>
          </span>
        ))
      }
    </>
  );

}