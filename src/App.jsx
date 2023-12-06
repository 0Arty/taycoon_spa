import './i18n/index.js'
import style from "./App.module.scss"
import { routes } from "./routes/index.js";
import { Route, Routes } from "react-router-dom";
import { Suspense, lazy, useRef } from "react";
import NotFound from './components/pages/notFound/NotFound.jsx';

const HomePage = lazy(() => import("./components/pages/homePage/HomePage"))
const MasterbatchPage = lazy(() => import("./components/pages/masterbatch/MasterbatchPage"))
const Net = lazy(() => import("./components/pages/net/Net.jsx"))
const Header = lazy(() => import("./components/reusable/header/Header"))
const Addivities = lazy(() => import("./components/pages/addivities/Addivities.jsx"))
const Composites = lazy(() => import("./components/pages/composites/Composites.jsx"))
const About = lazy(() => import("./components/pages/about/About.jsx"))
const Certificates = lazy(() => import('./components/pages/certificates/Certificates.jsx'))
const Clients = lazy(() => import('./components/pages/clients/Clients.jsx'))
const App = ({ props }) => {

  const refContact = useRef(null)
  const refHomePage = useRef(null)
  const toContact = () => setTimeout(() => refContact.current?.scrollIntoView({ block: 'start', behavior: 'smooth' }), 0)
  const toProduct = () => setTimeout(() => refHomePage.current?.scrollIntoView({ block: 'start', behavior: 'smooth' }), 0)

  return (
    <div className={style.box}>
      <Header toContact={toContact} toProduct={toProduct} />
      <Routes >
        <Route path={routes.MAIN} element={
          <Suspense fallback={<h1>Loading...</h1>}>
            <HomePage ref={refHomePage} refContact={refContact} />
          </Suspense>
        } />
        <Route path={routes.MASTERBATCH} element={
          <Suspense fallback={<h1>Loading...</h1>}>
            <MasterbatchPage />
          </Suspense>
        } />
        <Route path={routes.PACKING_NET} element={
          <Suspense fallback={<h1>Loading...</h1>}>
            <Net />
          </Suspense>
        } />
        <Route path={routes.ADDITIVES} element={
          <Suspense fallback={<h1>Loading...</h1>}>
            <Addivities />
          </Suspense>
        } />
        <Route path={routes.COMPOSITES} element={
          <Suspense fallback={<h1>Loading...</h1>}>
            <Composites />
          </Suspense>
        } />
        <Route path={routes.ABOUT} element={
          <Suspense fallback={<h1>Loading...</h1>}>
            <About />
          </Suspense>
        } />
        <Route path={routes.CERTIFICATES} element={
          <Suspense fallback={<h1>Loading...</h1>}>
            <Certificates />
          </Suspense>
        } />
        <Route path={routes.CLIENTS} element={
          <Suspense fallback={<h1>Loading...</h1>}>
            <Clients />
          </Suspense >
        } />
        <Route path='*' element={<NotFound />} />

        {/* <Route path='*' element={NotFound}/> */}
      </Routes>
    </div>
  )
};

export default App;
