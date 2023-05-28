// import "./App.css";
import "./assets/css/start.css";
import bakeryImg from "./assets/media/bakery.jpg";
function App() {
  return (
    <>
      <div className="container">
        <img className="bakeryImg" src={bakeryImg} alt="bakery Img"></img>
        <p>The Bakery</p>
      </div>
    </>
  );
}

export default App;
