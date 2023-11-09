import { Route, Routes } from "react-router-dom";
import style from "./App.module.scss"
import Header from "./components/reusable/header/Header";
import MasterbatchPage from "./components/pages/masterbatchPage/MasterbatchPage";
import HomePage from "./components/pages/homePage/HomePage";


const App = ({ props }) => {

  return (
    <div className={style.box}>
      <Header />
      <Routes >

        <Route path='/' element={ <HomePage />}/>
        <Route path='/masterbatch' element={<MasterbatchPage />} />
        {/* <Route path='*' element={NotFound}/> */}
      </Routes>
    </div>
  )
};

export default App;
