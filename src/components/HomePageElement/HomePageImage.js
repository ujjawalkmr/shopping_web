import farmingImg from "../../assets/images/farming.jpg";
import Button from "../../commonPage/Buttons/Button";
function HomePageImage() {
  return (
    <div className="main-img-container">
      <img src={farmingImg} alt="App Logo" className="main-img" />
      <div className="main-img-text">
        <h1>Discover, Buy, Sell. Anything. 🌾</h1>
        <p>Your ultimate plateform for connecting buyers and sellers worldwide. Expolre endless possibilities and unlock new opportunities</p>
        <Button label={"Start Exploring Today"} className="home-page-image-button" />
      </div>
    </div>
  )
}

export default HomePageImage;