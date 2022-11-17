import { BrowserRouter, Routes, Route } from "react-router-dom";
import SpotsPage from './Spots';
import Navbar from './Navbar';
import ExplorePage from './Explore';

function App() {
  return (
    <>
      <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route path='/' element={<SpotsPage/>}/>
          <Route path='/explore' element={<ExplorePage/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;