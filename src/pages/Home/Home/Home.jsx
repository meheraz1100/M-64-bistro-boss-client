import Catagory from "../Catagory/Catagory";
import Featured from "../Featured/Featured";
import Hero from "../Hero/Hero";
import PopularMenu from "../PopularMenu/PopularMenu";
import Testimonials from "../Testimonials/Testimonials";
import Bannner from "../banner/Bannner";

const Home = () => {
    return (
        <div>
            <Bannner></Bannner>
            <Catagory></Catagory>
            <Hero></Hero>
            <PopularMenu></PopularMenu>
            <Featured></Featured>
            <Testimonials></Testimonials>
        </div>
    );
};

export default Home;