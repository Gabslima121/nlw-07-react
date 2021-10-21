import { useContext } from "react";

import styles from "./App.module.scss";
import { MessageList } from "./components/MessageList";
import { SendMessageForm } from "./components/SendMessageForm";
import { LoginBox } from "./components/LoginBox";
import { AuthContext } from "./contexts/auth";

export function App() {
  const { user } = useContext(AuthContext);

  return (
    <main
      className={`${styles.contetWrapper} ${
        !!user ? styles.contentSigned : ""
      }`}
    >
      <MessageList />
      {!!user ? <SendMessageForm /> : <LoginBox />}
    </main>
  );
}
