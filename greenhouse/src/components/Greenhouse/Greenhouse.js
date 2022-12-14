import dayImage from './images/greenhouse-day.jpg';
import nightImage from './images/greenhouse-night.jpg';
import './Greenhouse.css';
import { useTheme } from '../../context/ThemeContext';
import LightSwitch from './LightSwitch';
import ClimateStats from './ClimateStats';

const activeImage = (str) => (str === 'day' ? dayImage : nightImage);

function Greenhouse() {
  const {themeName} = useTheme()

  return (
    <section>
      <img  className='greenhouse-img'
            src={activeImage(themeName)}
            alt='greenhouse'
      />
      <LightSwitch/>
      <ClimateStats />
    </section>
  );
}

export default Greenhouse;
