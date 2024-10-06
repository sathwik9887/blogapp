import Test from "./components/Test";
import { createContext } from "react";

export const LoginContext = createContext();

function App() {
  return (
    <div>
      <LoginContext.Provider value={true}>
        <Test />
      </LoginContext.Provider>
    </div>
  );
}

export default App;
