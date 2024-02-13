import MoonImg from "../assets/images/icon-moon.svg";
import "./ModeSwitcher.css";

const ModeSwitcher = () => {
  return (
    <div className="mode-switcher">
      <input className="input" type="checkbox" id="dark-mode-toggle" />
      <label className="label" htmlFor="dark-mode-toggle"></label>
      <img className="img" src={MoonImg} alt="Turn on dark mode" />
    </div>
  );
};

export default ModeSwitcher;
