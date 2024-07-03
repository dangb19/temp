import RootLayout from "./components/RootLayout";
import { WeatherContextProvider } from "./store/WeatherContext";
import { DarkModeProvider } from "./store/DarkModeContext";
import { LocationProvider } from "./store/LocationContext";

function App() {
  return (
    <DarkModeProvider>
      <LocationProvider>
        <WeatherContextProvider>
          <RootLayout />
        </WeatherContextProvider>
      </LocationProvider>
    </DarkModeProvider>
  );
}

export default App;
