import { useTheme } from '../../context/ThemeContext';
import './LightSwitch.css';

function LightSwitch() {
  const { themeName, setThemeName } = useTheme()

  const clickHandler = e => {
    e.preventDefault();
    if (themeName === "day") {
      setThemeName("night")
    } else {
      setThemeName("day")
    }
  }


  return (
    <button onClick={clickHandler}>
      <div className={`light-switch ${themeName}`}>
        <div className="on">DAY</div>
        <div className="off">NIGHT</div>
      </div>
    </button>
  );
}

export default LightSwitch;
