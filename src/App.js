import Home from "./pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ApplayNow from "./pages/ApplayNow";
import BecomeAnAgent from "./pages/BecomeAnAgent";
import ContactUss from "./pages/ContactUs";

import Layout from "./pages/Layout";
function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="apply" element={<ApplayNow />} />
        <Route path="contact" element={<ContactUss />} />
        <Route path="becomeanagent" element={<BecomeAnAgent />} />
        {/* <Route path="*" element={<NoPage />} /> */}
      </Route>
    </Routes>
  </BrowserRouter>
  );
}

export default App;
