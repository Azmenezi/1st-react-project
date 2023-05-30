// import "./App.css";
import "./assets/css/start.css";
import bakeryImg from "./assets/media/bakery.jpg";
import ProductList from "./components/ProductList";
import Home from "./components/Home";
function App() {
  return (
    <>
      <Home bakeryImg={bakeryImg} />
      <div className="products-container">
        <ProductList />
      </div>
    </>
  );
}

export default App;
