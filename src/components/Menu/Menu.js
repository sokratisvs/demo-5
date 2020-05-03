import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Tab from '../Tabs/Tab';
import { MENU_API_URL } from "../../constants";
import "./Menu.css";

const Menu = () => {
    const [menu, setMenu] = useState([])

    const onClickTabItem = (tabId) => {
        setActiveTab(tabId);
    }

    useEffect(() => {
        fetch(MENU_API_URL, {
            method: "GET",
        })
            .then((response) => response.json())
            .then((data) => {
                setMenu(data)
            });
    }, []);

    const [activeTab, setActiveTab] = useState(menu[0] && menu[0].title)

    return (
        <div className="menu">
            <div className="links">
                <ol className="links-list">
                    {menu.map((section) => {
                        const link = section.title.toLowerCase();
                        const trimmedLink = link.replace(/([\s\u00a0]+)/g, '');
                        return (
                            <Tab
                                activeTab={activeTab}
                                key={section.title}
                                id={section.title}
                                content={<Link to={`/${trimmedLink}`}>{section.title}</Link>}
                                onTabClick={onClickTabItem}
                            />
                        )
                    }
                    )}
                </ol>
            </div>
        </div>
    );
};

export default Menu;

{/* <div className="page2">
            Page2
            <span role='img' aria-label='rocket ship'>
                🚀
      </span>
            <div className="sassy">Welcome</div>
        </div> */}