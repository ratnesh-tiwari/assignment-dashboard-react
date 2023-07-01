import { useState } from "react";
import LeftDashbaord from "./components/LeftDashbaord";
import RightDashboard from "./components/RightDashboard";
import MainFlexContainer from "./ui/MainFlexContainer";
function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="bg-blue-bg w-full  flex items-center justify-center p-2 sm:p-8 md:p-14 ">
      <MainFlexContainer>
        <LeftDashbaord />
        <RightDashboard />
      </MainFlexContainer>
    </div>
  );
}

export default App;
