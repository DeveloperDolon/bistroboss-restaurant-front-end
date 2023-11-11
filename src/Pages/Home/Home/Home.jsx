
import Banner from "../Banner/Banner";
import OnlineOrder from "../OnlineOrder/OnlineOrder";
import chefService from "../../../assets/home/chef-service.jpg";
import MenuSection from "../Menu/MenuSection";


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
            </div>
        );
    };

    export default Home;