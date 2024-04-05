import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './componenet/Home'
import Operator from "./componenet/Operator";
import NewBatch from "./componenet/NewBatch";
import RuningBatch from "./componenet/RuningBatch";
import MachineBrekDown from "./componenet/MachineBrekDown";
import UpdateBrDetails from "./componenet/UpdateBrDetails";
import UpDateQA from "./componenet/UpDateQA";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="Operator" element={<Operator />} />
        <Route path="NewBatch" element={<NewBatch />} />
        <Route path="RuningBatch" element={<RuningBatch />} />
        <Route path="MachineBrekDown" element={<MachineBrekDown />} />
        <Route path="UpdateBrDetails" element={<UpdateBrDetails />} />
        <Route path="UpDateQA" element={<UpDateQA />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App