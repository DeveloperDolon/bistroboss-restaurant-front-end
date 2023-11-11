
import Banner from "../Banner/Banner";
import OnlineOrder from "../OnlineOrder/OnlineOrder";
import chefService from "../../../assets/home/chef-service.jpg";
import MenuSection from "../Menu/MenuSection";
import SessionTItle from "../../../Component/SessionTItle";
import ChefRecommends from "../ChefRecommends/ChefRecommends";
import OurMenu from "../OurMenu/OurMenu";


const Home = () => {


    return (
        <div>
            <Banner></Banner>
            <OnlineOrder></OnlineOrder>

            <div className="max-w-7xl mx-auto md:px-28 px-10 md:py-28 py-10 rounded-sm"
                style={{
                    background: `url('${chefService}') no-repeat center center`
                }}
            >
                <div className="bg-white md:py-28 py-12 md:px-28 px-12 rounded-md">
                    <h1 className="cinzel-text lg:text-6xl text-4xl text-center">Bistro Boss</h1>

                    <p className="text-center leading-relaxed mt-5">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, libero accusamus laborum deserunt ratione dolor officiis praesentium! Deserunt magni aperiam dolor eius dolore at, nihil iusto ducimus incidunt quibusdam nemo.
                    </p>
                </div>
            </div>

            <MenuSection></MenuSection>

            <div className="bg-black max-w-7xl mx-auto lg:px-0 md:px-5 px-3 rounded-sm">
                <h1 className="text-white md:text-6xl text-5xl text-center py-24">Call Us : +88 01751725042</h1>
            </div>


            <div className="md:mt-28 mb-20">
                <SessionTItle
                subTitle={"Should Try"}
                title={"Chef Recommends"}
                ></SessionTItle>

                <div className="max-w-7xl mx-auto lg:px-0 md:px-5 px-3 mt-12">
                    <ChefRecommends></ChefRecommends>
                </div>
            </div>

            <OurMenu></OurMenu>

            
        </div>
    );
};

export default Home;