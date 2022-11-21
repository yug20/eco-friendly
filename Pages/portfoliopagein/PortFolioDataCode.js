import React, { useState } from 'react';
import './PortFolio.css';
import Menu from './portfoliodataapi.js';
import MenuCard from './PortFolioPageSection.js';
import Navbar from './Nav.js';
import "./PortFolio.css";
// import UseState from '../../component/Hooks/UseState.js';

// const uniqueList = [
//     ...new Set(Menu.map((curElem) => {
//         return curElem.category;
//     })),
//     "All",
// ];

const PortFolioDataCode = () => {

    const uniqueList = [
        ...new Set(Menu.map((curElem) => {
            return curElem.category;
        })),
        "All",
    ];

    const [menuData, setMenuData] = useState(Menu);
    // console.log(menuData);

    const [menuList] = useState(uniqueList);
    // const [menuList, steMenuList] = useState(uniqueList);

    const filterItems = (category) => {

        if (category === "All") {
            setMenuData(Menu);
            return;
        }

        const updateList = Menu.filter((curElem) => {
            return curElem.category === category;
        });
        setMenuData(updateList);
    };

    return (
        <>
            {/* <UseState /> */}
            <Navbar filterItems={filterItems} menuList={menuList} />
            <MenuCard menuData={menuData} />
        </>
    );
};

// const uniqueList = [
//     ...new Set(Menu.map((curElem) => {
//         return curElem.category;
//     })),
//     "All",
// ];

export default PortFolioDataCode;