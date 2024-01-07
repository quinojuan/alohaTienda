import { Link, Route, Routes, useParams } from "react-router-dom";
import "./App.css";

const Home = () => <h2>Home</h2>;
const SearchPage = () => {
  const tacos = ["cochinita", "chili", "carnita", "quesadilla"];

  return (
    <div>
      <h3>Search Page</h3>;
      <ul>
        {tacos.map((taco) => (
          <li key={taco}>
            <Link to={`/tacos/${taco}`}>{taco}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

const Tacos = () => {
  const { name } = useParams();

  return (
    <div>
      <h1>Tacos</h1>
      <p>{name}</p>
    </div>
  );
};

function App() {
  return (
    <div className="App">
      <header>
        <h1>Aloha tienda</h1>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/search-page">Search page</Link>
            </li>
          </ul>
        </nav>
      </header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search-page" element={<SearchPage />} />
        <Route path="/tacos/:name" element={<Tacos />} />
      </Routes>
    </div>
  );
}

export default App;
