
import BannerCover from "../../../Shared/BannerCover/BannerCover";
import image from "../../../assets/menu/banner3.jpg";
import TodaysOffer from "../Offers/TodaysOffer";
import MenuSection from "../MenuSection/MenuSection";
import bgDesserts from "../../../assets/menu/dessert-bg.jpeg";
import bgPizza from "../../../assets/menu/pizza-bg.jpg";
import bgSalads from "../../../assets/menu/salad-bg.jpg";
import bgSoups from "../../../assets/menu/soup-bg.jpg";
import useMenuData from "../../../Hooks/useMenuData";

const Menus = () => {
   const {menus} = useMenuData();

    const offers = menus.filter(menu => menu.category === "offered");
    const salads = menus.filter(menu => menu.category === "salad");
    const soups = menus.filter(menu => menu.category === "soup");
    const pizzas = menus.filter(menu => menu.category === "pizza");
    const desserts = menus.filter(menu => menu.category === "dessert");

    return (
        <div>
            <BannerCover
                image={image}
                title={"Our Menu"}
                subtitle={"Would you like to try a dish?"}
            ></BannerCover>

            <TodaysOffer data={offers}></TodaysOffer>
            <MenuSection
            bgImg={bgDesserts}
            title={"Desserts"}
            description={"Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."}
            menuItems={desserts}
            ></MenuSection>
            
            <MenuSection
            bgImg={bgPizza}
            title={"Pizza"}
            description={"Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."}
            menuItems={pizzas}
            ></MenuSection>
            
            <MenuSection
            bgImg={bgSalads}
            title={"Salads"}
            description={"Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."}
            menuItems={salads}
            ></MenuSection>
            
            <MenuSection
            bgImg={bgSoups}
            title={"Soups"}
            description={"Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."}
            menuItems={soups}
            ></MenuSection>

            
        </div>
    );
};

export default Menus;