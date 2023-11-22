import './i18n/index.js'
import style from "./App.module.scss"
import { routes } from "./routes/index.js";
import { Route, Routes } from "react-router-dom";
import { useRef } from "react";

import HomePage from "./components/pages/homePage/HomePage";
import MasterbatchPage from "./components/pages/masterbatch/MasterbatchPage";
import Net from "./components/pages/net/Net.jsx";
import Header from "./components/reusable/header/Header";
import Addivities from "./components/pages/addivities/Addivities.jsx";
import Composites from "./components/pages/composites/Composites.jsx";
import About from "./components/pages/about/About.jsx";
import Certificates from './components/pages/certificates/Certificates.jsx';
import Clients from './components/pages/clients/Clients.jsx';

const App = ({ props }) => {

  const refContact = useRef(null)
  const toContact = () => setTimeout(() => refContact.current?.scrollIntoView({ block: 'start', behavior: 'smooth' }), 0)

  return (
    <div className={style.box}>
      <Header toContact={toContact} />
      <Routes >
        <Route path={routes.MAIN} element={<HomePage refContact={refContact} />} />
        <Route path={routes.MASTERBATCH} element={<MasterbatchPage />} />
        <Route path={routes.PACKING_NET} element={<Net />} />
        <Route path={routes.ADDITIVES} element={<Addivities />} />
        <Route path={routes.COMPOSITES} element={<Composites />} />
        <Route path={routes.ABOUT} element={<About />} />
        <Route path={routes.CERTIFICATES} element={<Certificates />} />
        <Route path={routes.CLIENTS} element={<Clients />} />
        
        {/* <Route path='*' element={NotFound}/> */}
      </Routes>
    </div>
  )
};

export default App;
