import Banner from "../Banner/Banner";
import FeaturedProducts from "../FeaturedProducts/FeaturedProducts";
import Reviews from "../Reviews/Reviews";
import Subscribe from "../Subscribe/Subscribe";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <FeaturedProducts></FeaturedProducts>
      <Subscribe></Subscribe>
      <Reviews></Reviews>
    </div>
  );
};

export default Home;
