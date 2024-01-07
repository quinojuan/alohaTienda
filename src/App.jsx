import { Link, Route, Routes, useParams, Outlet, NavLink } from "react-router-dom";
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
  const { taco } = useParams();

  return (
    <div>
      <h1>Tacos</h1>
      {taco}
      <Link to="details"> - Ir a los detalles</Link>
      <Outlet />
    </div>
  );
};

const TacoDetails = () => {
  const { taco } = useParams();

  return <h1>Taco Details {taco}</h1>;
};

function App() {
  return (
    <div className="App">
      <header>
        <h1>Aloha tienda</h1>
        <nav>
          <ul>
            <li>
              <NavLink
                className={({ isActive }) => {
                  return isActive ? "isActive" : undefined;
                }}
                to="/"
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink 
              className={({ isActive }) => {
                return isActive ? "isActiveTwo" : undefined;
              }}
              to="/search-page">Search page</NavLink>
            </li>
          </ul>
        </nav>
      </header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search-page" element={<SearchPage />} />
        <Route path="/tacos/:taco" element={<Tacos />}>
          <Route path="details" element={<TacoDetails />} />
        </Route>
        <Route path="*" element={<h1>Not Found</h1>} />
      </Routes>
    </div>
  );
}

export default App;
