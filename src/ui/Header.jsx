import LogoImg from "../assets/images/logo.svg";
import MoonImg from "../assets/images/icon-moon.svg";

const Header = () => {
  return (
    <header>
      <div>
        <img src={LogoImg} alt="Web Dictionary App Logo" />
        <div>
          <div>
            <select name="font-type">
              <option value="sans-serif" selected>
                Sans Serif
              </option>
              <option value="serif">Serif</option>
              <option value="mono">Mono</option>
            </select>
          </div>
          <div>
            <input type="checkbox" id="dark-mode-toggle" />
            <label htmlFor="dark-mode-toggle"></label>
            <img src={MoonImg} alt="Turn on dark mode" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
