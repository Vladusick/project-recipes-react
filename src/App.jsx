import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";

import { Home } from "./pages/Home";
import { NotFound } from "./pages/NotFound";
import { Category } from "./pages/Category";
import { Recipe } from "./pages/Recipe";

function App() {
  return (
    <Router basename="/project-recipes-react">
      <Header />
      <main className="container content">
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/category/:name" Component={Category} />
          <Route path="/meal/:id" Component={Recipe} />
          <Route path="*" Component={NotFound} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
