import { useContext } from "react";
import { ThemeContext } from "./App";
import "./Page.css";

function Page(props) {
  console.log(props);
  const theme = useContext(ThemeContext);

  const containerClass = "container container--" + theme;

  return (
    <div className={containerClass}>
      <h1>Hello world</h1>

      <button onClick={props.changeTheme}>Change theme</button>
    </div>
  );
}

export default Page;
