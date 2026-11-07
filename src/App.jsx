import Routes from "@/pages/Routes";
import ScreenLoader from "./components/ScreenLoader";
import { useAuthContext } from "./context/AuthContext";

const App = () => {
  const { isAppLoading } = useAuthContext()
  return (
    <>
      {
        isAppLoading ?
          <ScreenLoader />
          :
          <Routes />
      }
    </>
  )
}

export default App