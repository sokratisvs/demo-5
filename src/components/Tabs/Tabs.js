import React, { useState } from 'react';
import { Link } from "react-router-dom";
import Tab from './Tab';
import TabContent from './TabContent';
import './Tabs.css';

const Tabs = (props) => {
    const { sections } = props;
    const [activeTab, setActiveTab] = useState(sections[0] && sections[0].id)

    const onClickTabItem = (tabId) => {
        setActiveTab(tabId);
    }

    return (
        <div className="tabs">
            <ol className="tab-list">
                {sections.map((section) => (
                    <Tab
                        activeTab={activeTab}
                        key={section.id}
                        id={section.id}
                        content={<Link
                            className="tab-link"
                            to={{
                                pathname: "/home",
                                hash: `#${section.id}`
                            }}>
                            Section {section.id}
                        </Link>
                        }
                        onTabClick={onClickTabItem}
                    />
                ))}
            </ol>
            <div className="tab-content">
                {sections.map((section) => {
                    if (section.id !== activeTab) return undefined;
                    return <TabContent key={section.id} section={section} />;
                })}
            </div>
        </div>
    );
}

export default Tabs;