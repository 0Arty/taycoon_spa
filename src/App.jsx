import style from "./App.module.scss"
import './i18n/index.js'
import { routes } from "./routes/index.js";
import { Route, Routes } from "react-router-dom";

import HomePage from "./components/pages/homePage/HomePage";
import MasterbatchPage from "./components/pages/masterbatch/MasterbatchPage";
import Net from "./components/pages/net/Net.jsx";
import Header from "./components/reusable/header/Header";
import Composites from "./components/pages/composites/Composites.jsx";
import About from "./components/pages/about/About.jsx";






const App = ({ props }) => {

  return (
    <div className={style.box}>
      <Header />
      <Routes >
        <Route path={routes.MAIN} element={ <HomePage />}/>
        <Route path={routes.MASTERBATCH} element={<MasterbatchPage />} />
        <Route path={routes.PACKING_NET} element={<Net />} />
        <Route path={routes.COMPOSITES} element={<Composites/>} />
        <Route path={routes.ABOUT} element={<About />} />
        {/* <Route path='*' element={NotFound}/> */}
      </Routes>
    </div>
  )
};

export default App;
