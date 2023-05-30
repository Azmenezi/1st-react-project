const Home = ({bakeryImg}) => {
  return (
    <div className="container">
      <img className="bakeryImg" src={bakeryImg} alt="bakery Img"></img>
      <p>The Bakery</p>
    </div>
  );
};
export default Home;
