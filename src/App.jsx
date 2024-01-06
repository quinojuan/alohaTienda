import { Route, Routes } from "react-router-dom";
import "./App.css";

const Home = () => <h2>Home</h2>;
const SearchPage = () => <h3>Search Page</h3>;

function App() {
  return (
    <div className="App">
      <header>
        <h1>Aloha tienda</h1>
        <nav>
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/search-page">Search page</a>
            </li>
          </ul>
        </nav>
      </header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search-page" element={<SearchPage />} />
      </Routes>
    </div>
  );
}

export default App;
