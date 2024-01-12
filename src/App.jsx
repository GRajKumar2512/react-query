import { Link } from "react-router-dom";

function App() {
  return (
    <>
      <h1>The Awesome React query</h1>
      <div>
        <Link to="/">Home</Link> <br />
        <Link to="/paginated">Products</Link>
        <Link to="/parallel">Parallel</Link>
        <Link to="/optimistic">Optimistic</Link>
        <Link to="/dependant">Dependant</Link>
      </div>
    </>
  );
}

export default App;
