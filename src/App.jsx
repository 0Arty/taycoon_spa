import { Route, Routes } from "react-router-dom";
import style from "./App.module.scss"
import Header from "./components/reusable/header/Header";
import MasterbatchPage from "./components/pages/masterbatchPage/MasterbatchPage";
import HomePage from "./components/pages/homePage/HomePage";
import './i18n/index.js'
import { routes } from "./routes/index.js";
import Net from "./components/pages/net/Net.jsx";

const App = ({ props }) => {

  return (
    <div className={style.box}>
      <Header />
      <Routes >
        <Route path={routes.MAIN} element={ <HomePage />}/>
        <Route path={routes.MASTERBATCH} element={<MasterbatchPage />} />
        <Route path={routes.PACKING_NET} element={<Net />} />
        {/* <Route path='*' element={NotFound}/> */}
      </Routes>
    </div>
  )
};

export default App;
