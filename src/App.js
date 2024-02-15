import {Routes, Route} from "react-router-dom";
import LayoutHeaderSidebar from "./LayoutHeaderSidebar";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import UserProfile from "./components/UserProfile/UserProfile";
import Login from "./components/Authentication/Login";
import Signup from "./components/Authentication/Signup";


const App = () => {

    return (
        <Routes>
            <Route path='/' element={ <LayoutHeaderSidebar/> }>
                <Route index element={ <Home /> }/>
                <Route path='about' element={ <About /> }/>
                <Route path='login' element={ <Login /> } />
                <Route path='signup' element={ <Signup /> } />
                <Route path='user/profile' element={ <UserProfile /> } />
            </Route>
        </Routes>
    );
}


export default App;
