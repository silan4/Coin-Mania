import { BrowserRouter, Route, Routes } from "react-router-dom"
import LoginPageController from './controllers/LoginPageController';
import MainPageController from "./controllers/MainPageController";
import HeaderView from "./views/HeaderView";
import DetailControllers from "./controllers/DetailControllers";


const App = () => {
  return (
     
     <BrowserRouter>
        <HeaderView/>
        
        <Routes>
          <Route path="/" element={<LoginPageController/>} />
          <Route path="/home" element={<MainPageController/>} />
          <Route path="/coin/:id" element={ <DetailControllers/>} /> 
        </Routes> 
     </BrowserRouter>
    
  )
}

export default App