import RandomButton from "./RandomButton";
import Divider from "./assets/images/pattern-divider-desktop.svg?react";
import "./index.css";

export default function Box() {
  return (
    <div className="box">
      <div className="content">
        {/*<h1>Advice ${id}</h1>
        <p> ${advice}</p>*/}
        <Divider />
        <RandomButton />
      </div>
    </div>
  );
}
