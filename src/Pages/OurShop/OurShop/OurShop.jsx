import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import BannerCover from "../../../Shared/BannerCover/BannerCover";
import shopBg from "../../../assets/shop/banner2.jpg";
import { useState } from "react";
import useMenuData from "../../../Hooks/useMenuData";
import FoodItem from "../../../Shared/FoodItem/FoodItem";
const OurShop = () => {
    const [tabIndex, setTabIndex] = useState(0);
    const { menus } = useMenuData();

    const salads = menus.filter(menu => menu.category === "salad");
    const soups = menus.filter(menu => menu.category === "soup");
    const pizzas = menus.filter(menu => menu.category === "pizza");
    const desserts = menus.filter(menu => menu.category === "dessert");
    const drinks = menus.filter(menu => menu.category === "drinks");

    return (
        <div>
            <BannerCover
                image={shopBg}
                title={"Our Shop"}
                subtitle={"Would you like to try a dish?"}
            ></BannerCover>

            <div className="max-w-7xl mx-auto lg:px-0 md:px-5 px-3 md:mt-28 mt-20 ">
                <Tabs
                    selectedIndex={tabIndex}
                    onSelect={(index) => setTabIndex(index)}
                >
                    <TabList
                        className="flex md:gap-8 gap-4 font-bold uppercase justify-center"
                    >
                        <Tab><button className={` ${tabIndex === 0 ? "text-amber-500 border-b-4 border-amber-500" : ""} uppercase md:text-base text-xs`}>Salad</button></Tab>
                        <Tab><button className={` ${tabIndex === 1 ? "text-amber-500 border-b-4 border-amber-500" : ""} uppercase md:text-base text-xs`}>Pizza</button></Tab>
                        <Tab><button className={` ${tabIndex === 2 ? "text-amber-500 border-b-4 border-amber-500" : ""} uppercase md:text-base text-xs`}>Soups</button></Tab>
                        <Tab><button className={` ${tabIndex === 3 ? "text-amber-500 border-b-4 border-amber-500" : ""} uppercase md:text-base text-xs`}>Desserts</button></Tab>
                        <Tab><button className={` ${tabIndex === 4 ? "text-amber-500 border-b-4 border-amber-500" : ""} uppercase md:text-base text-xs`}>Drinks</button></Tab>
                    </TabList>

                    <div className="md:mt-10 mt-6">
                        <TabPanel>
                            <div className="grid grid-cols-3 gap-8 pb-20">
                                {
                                    salads?.map(menu => <FoodItem key={menu._id} data={menu}></FoodItem>)
                                }
                            </div>
                        </TabPanel>
                        <TabPanel>
                            <div className="grid grid-cols-3 gap-8 pb-20">
                                {
                                    pizzas?.map(menu => <FoodItem key={menu._id} data={menu}></FoodItem>)
                                }
                            </div>
                        </TabPanel>
                        
                        <TabPanel>
                            <div className="grid grid-cols-3 gap-8 pb-20">
                                {
                                    soups?.map(menu => <FoodItem key={menu._id} data={menu}></FoodItem>)
                                }
                            </div>
                        </TabPanel>
                        <TabPanel>
                            <div className="grid grid-cols-3 gap-8 pb-20">
                                {
                                    desserts?.map(menu => <FoodItem key={menu._id} data={menu}></FoodItem>)
                                }
                            </div>
                        </TabPanel>
                        <TabPanel>
                            <div className="grid grid-cols-3 gap-8 pb-20">
                                {
                                    drinks?.map(menu => <FoodItem key={menu._id} data={menu}></FoodItem>)
                                }
                            </div>
                        </TabPanel>

                    </div>
                </Tabs>
            </div>
        </div>
    );
};

export default OurShop;