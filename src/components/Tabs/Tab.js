import React, { Component } from 'react';
import './Tabs.css';

const Tab = (props) => {
    const {
        activeTab,
        content,
        id,
        onTabClick
    } = props;

    const onClickElement = (id) => {
        onTabClick(id);
    }

    let className = 'tab-list-item';

    if (activeTab === id) {
        className += ' tab-list-active';
    }

    return (
        <li
            className={className}
            onClick={() => onClickElement(id)}
        >
            {content}
        </li>
    );
}

export default Tab;