import { createContext, useContext, useState } from 'react';

export const ClimateContext = createContext();

export const useClimateContext = () => useContext(ClimateContext);

export default function ClimateProvider({ children }) {
  // Temperature has a default value of 50 degrees
  // Humidity has a default value of 40%
  const [temperature, setTemperature] = useState(50);
  const [humidity, setHumidity] = useState(40);

  return (
    <ClimateContext.Provider
      value={{
        temperature,
        setTemperature,
        humidity,
        setHumidity
      }}
    >
      {children}
    </ClimateContext.Provider>
  );
}
