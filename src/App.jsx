import { useState} from "react";
import './App.css'
import { LoadingScreen } from './components/LoadingScreen';
import "./index.css"
import { NavigationBar } from "./components/NavigationBar";
import { MobileMenu } from "./components/MobileMenu";
import { Home } from "./components/sections/Home";
import { About } from "./components/sections/About";
import { Hobbies } from "./components/sections/Hobbies";
import { ErrorBoundary } from "./components/ErrorBoundary";

function App() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      {!isLoaded && <LoadingScreen onComplete={() => setIsLoaded(true)}/>}
      <div className={`min-h-screen transition-opacity duration-700 ${isLoaded ? "opacity-100" : "opacity-0"} bg-black text-gray-100`}>
        <NavigationBar menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
        <MobileMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
        <ErrorBoundary><Home/></ErrorBoundary>
        <ErrorBoundary><About/></ErrorBoundary>
        <ErrorBoundary fallback="Hobbies could not be loaded right now."><Hobbies/></ErrorBoundary>
      </div>
    </>
  );
}

export default App
