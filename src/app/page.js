import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <>
      <main className={styles.main}>
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
            <span className={styles.my_message}>
              <p>¿Cuál es el calendario académico para este semestre?</p>
            </span>
            <span className={styles.bot_message}>
              <p>
                ontrary to popular belief, Lorem Ipsum is not simply random text.
                It has roots in a piece of classical Latin literature from 45 BC,
                making it over 2000 years old. Richard McClintock, a Latin 
                professor at Hampden-Sydney College in Virginia, looked up one of 
                the more obscure Latin words, consectetur, from a Lorem Ipsum 
                passage, and going through the cites of the word in classical 
                literature, discovered the undoubtable source. Lorem Ipsum 
                comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum 
                et Malorum" (The Extremes of Good and Evil) by Cicero, written in
                45 BC. This book is a treatise on the theory of ethics, very popular 
                during the Renaissance. The first line of Lorem Ipsum, "Lorem 
                ipsum dolor sit amet..", comes from a line in section 1.10.32.
              </p>
            </span>
            <span className={styles.my_message}>
              <p>¿Hay algún evento importante en el campus esta semana?</p>
            </span>
            <span className={styles.bot_message}>
              <p>
                ontrary to popular belief, Lorem Ipsum is not simply random text.
                It has roots in a piece of classical Latin literature from 45 BC,
                making it over 2000 years old. Richard McClintock, a Latin 
                professor at Hampden-Sydney College in Virginia, looked up one of 
                the more obscure Latin words, consectetur, from a Lorem Ipsum 
                passage, and going through the cites of the word in classical 
                literature, discovered the undoubtable source. Lorem Ipsum 
                comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum 
                et Malorum" (The Extremes of Good and Evil) by Cicero, written in
                45 BC. This book is a treatise on the theory of ethics, very popular 
                during the Renaissance. The first line of Lorem Ipsum, "Lorem 
                ipsum dolor sit amet..", comes from a line in section 1.10.32.
              </p>
            </span>
          </div>

          <div className={styles.chat_footer}>
            <input type="text" placeholder="Mensaje"></input>
            <button>&#10148;</button>
          </div>
          
        </div>
      </main>
    </>
  );
}
