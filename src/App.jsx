import {
  BrowserRouter as Router,
  Route,
  Routes,
  Switch,
} from "react-router-dom";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";

import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Contact } from "./pages/Contact";
import { NotFound } from "./pages/NotFound";

function App() {
  return (
    <>
      <Header />
      <main className="container content">
        <Router>
          <Routes>
            <Route exact path="/" Component={Home} />
            <Route path="/about" Component={About} />
            <Route path="/contacts" Component={Contact} />
            <Route path="*" Component={NotFound} />
          </Routes>
        </Router>
      </main>
      <Footer />
    </>
  );
}

export default App;
