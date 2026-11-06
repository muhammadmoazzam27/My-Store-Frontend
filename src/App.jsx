import Routes from "@/pages/Routes";
import { useState } from "react";
import ScreenLoader from "./components/ScreenLoader";

const App = () => {
  const [isAuth, setIsAuth] = useState(true)
  return (
    <>
      {
        !isAuth ?
          <ScreenLoader />
          :
          <Routes />
      }
    </>
  )
}

export default App