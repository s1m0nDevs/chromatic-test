import { Route, Routes } from "react-router-dom";
import { Navigator } from "./components/Navigator";
import { HomePage } from "./pages/HomePage";
import { Favourite } from "./pages/Favourite";

function App() {
  return (
    <>
      <Navigator />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/favourite" element={<Favourite />} />
      </Routes>
    </>
  );
}

export default App;
