import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";

import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Contact } from "./pages/Contact";
import { NotFound } from "./pages/NotFound";
import { Category } from "./pages/Category";
import { Recipe } from "./pages/Recipe";

function App() {
  return (
    <>
      <Router>
        <Header />
        <main className="container content">
          <Routes>
            {/* <Route exact path="/" Component={Home} /> */}
            <Route path="/" element={<Home></Home>}>
              <Route path="test" element={<About />}>
                {/* <Route path='new' element={<NewPost />} /> */}
              </Route>
            </Route>
            <Route path="/about" Component={About} />
            <Route path="/contacts" Component={Contact} />
            <Route path="/category/:name" Component={Category} />
            <Route path="/meal/:id" Component={Recipe} />
            <Route path="*" Component={NotFound} />
          </Routes>
        </main>
        <Footer />
      </Router>
    </>
  );
}

export default App;
