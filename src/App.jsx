import { Route, Routes } from "react-router-dom";
import style from "./App.module.scss"
import Header from "./componets/header/Header";
import HomePage from "./componets/homepage/HomePage";

const App = ({ props }) => {

  return (
    <div className={style.box}>
      <Header />
      <Routes >
        <Route path='/' element={<HomePage />}/>
        {/* <Route path='/' element={}/> */}
        {/* <Route path='/' element={}/> */}
        {/* <Route path='*' element={NotFound}/> */}
      </Routes>
    </div>
  )
};

export default App;
