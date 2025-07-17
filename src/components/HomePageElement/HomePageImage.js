import farmingImg from "../../assets/images/farming.jpg";
function HomePageImage(){
return (
     <div className="main-img-container">
  <img src={farmingImg} alt="App Logo" className="main-img" />
   <div className="main-img-text">
    <h1>Discover, Buy, Sell. Anything. 🌾</h1>
    <p>Your ultimate plateform for connecting buyers and sellers worldwide. Expolre endless possibilities and unlock new opportunities</p>
  <button className="image-button">Start Exploring Today</button>
  </div>
</div>
)
}

export default HomePageImage;