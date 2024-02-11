import Header from "./components/Header/Header";
import SideBar from "./components/Sidebar/SideBar";

// import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
    return (
        <div id="main-wrapper" className="main-wrapper">
            <Header/>
            <SideBar/>
            <main id="app-content">
                <div className="app-content-area">

                </div>
            </main>

        </div>
    )
        ;
}


export default App;
