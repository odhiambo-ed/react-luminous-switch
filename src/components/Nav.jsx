import { useState } from "react";
import { BsToggleOn } from "react-icons/bs";
import { BsToggleOff } from "react-icons/bs";

function Nav() {
    const [dark, setDark] = useState(false)

    const toggleDark = () => {
        setDark(!dark)
    }
  return (
    <nav className="navbar bg-body-tertiary">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          Luminous Switch
        </a>
        <span onClick={toggleDark}>
          {dark ? <BsToggleOn size={"25px"} /> : <BsToggleOff size={"25px"} />}
        </span>
      </div>
    </nav>
  );
}

export default Nav;
