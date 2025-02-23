import styles from "../page.module.css";
import questions from "../json/questions"
import { useEffect, useState } from "react";

export default function Messages({myMessage}) {

  const [answer,setAnswer] = useState([]);
  
  useEffect(()=>{ setTimeout(() => {handleQuestion()},600); },[])

  const handleQuestion = () => {

    //const regex = new RegExp(message,"i");
    //const coincidence = questions.filter(r => regex.test(r.question),);
    const result = questions.filter(r => r.question == myMessage,);

    const resultFilterAnswer = result.length > 0 ? result.map(a => a.answer)
    : ["¡Ups! 😅 No tengo una respuesta para eso en este momento. Pero si tienes otra pregunta o algo más en lo que pueda ayudarte, ¡estoy aquí para lo que necesites! 😊"];

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
            <p dangerouslySetInnerHTML={{__html:msg}}></p>
          </span>
        ))
      }
    </>
  );

}