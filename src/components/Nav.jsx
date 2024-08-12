import { BsToggleOn } from "react-icons/bs";
import { BsToggleOff } from "react-icons/bs";
import PropTypes from "prop-types";


function Nav({dark, toggleDark}) {
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

Nav.propTypes = {
  dark: PropTypes.bool.isRequired,
  toggleDark: PropTypes.func.isRequired,
};


export default Nav;
