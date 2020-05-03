import React from "react";
import ImageContent from '../ImageContent/ImageContent'
import FormContent from '../FormContent/FormContent'
import "./Tabs.css";

const TabContent = (props) => {
    const { section } = props;

    return (
        <div className="tab-section">
            {section.id === '01' && <ImageContent content={section} />}
            {section.id === '02' && < FormContent content={section} />}
        </div>
    );
};

export default TabContent;