import TopBar from "./components/user/TopBar";
import "../src/scss/style.scss";
import "../src/scss/landing_page.scss";
import LogIn from "./pages/user/LogIn";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <TopBar />
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<LogIn />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
