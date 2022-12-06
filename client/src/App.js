import { router } from "./Pages/Routes/routes";
import { RouterProvider } from 'react-router-dom'
import { useContext } from "react";
import { AuthContext } from "./context/UserContext";
import "./App.css"


export default function App() {
  const { isDarkMode, setIsDarkMode } = useContext(AuthContext);
  console.log(isDarkMode)
  let theme;
  if (isDarkMode) {
    theme = "dark"
  }
  else {
    theme = "light"
  }
  return (
    <div className={`App ${theme}`} >
      <RouterProvider router={router} />

    </div>
  );
}
