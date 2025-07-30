
import HomePageImage from "../components/HomePageElement/HomePageImage";
import SearchingContainer from "../components/HomePageElement/SearchingContainer";
import ProductArea from "../components/HomePageElement/ProductArea";
import ExploreProducts from "../components/HomePageElement/ExploreProducts";
import BottomArea from "../components/HomePageElement/BottomArea";
import AppBarView from "../commonPage/appbar/AppBarView";




function HomePage() {

  const handleNavClick = (item) => {
    console.log(`Clicked!!!! on: ${item}`);
    // You can add more logic here, like navigation or state updates
  };

  return (
    <div >
      {/* AppBar */}
      <AppBarView
        onNavClick={handleNavClick} />
      <HomePageImage />
      <SearchingContainer />
      <ProductArea />
      <ExploreProducts />
      <BottomArea />

    </div>
  );
}
export default HomePage;