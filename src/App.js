/*
    Zobacz prosty przykład routingu w wersji 6 w React.
    Bardziej zaawansowane przykłady routingu poznasz
    na moim szkoleniu Web Developer.
    Odwiedź km-programs.pl :)
*/

import {useParams} from "react-router-dom";
import {BrowserRouter as Router, Link, Route, Routes} from "react-router-dom";

const Home = () => (
    <div>
        <h3>Home</h3>
    </div>
);

const Message = () => {
    const params = useParams();
    return (
        <div>
            <h3>Message: {params.text}</h3>
        </div>
    );
}

const User = () => {
    const params = useParams();
    return (
        <div>
            <h3>Name: {params.name}</h3>
            <h3>Surname: {params.surname}</h3>
        </div>
    );
}

const App = () => (
    <Router>
        <nav className="navbar navbar-expand-lg navbar-light bg-primary">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">Navbar</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup"
                        aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"/>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                        <Link className="nav-link" to="/message/hello world">Message</Link>
                        <Link className="nav-link" to="/user/Adam/Nowak">User</Link>
                    </div>
                </div>
            </div>
        </nav>
        <div className="container mt-5">
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/message/:text" element={<Message/>} />
                <Route path="/user/:name/:surname" element={<User/>} />
            </Routes>
        </div>
    </Router>
);
export default App;
