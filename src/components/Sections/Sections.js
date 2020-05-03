import React, { useContext } from "react";
import { HomeContext } from '../../store/store';
import Tabs from '../Tabs/Tabs';
import Tiles from '../Tiles/Tiles';
import "./Sections.css";

const Sections = () => {
    const [state] = useContext(HomeContext);
    const { values } = state;

    return (
        <div className="sections">
            {values && values.map((param) => (
                <>
                    <div className="sections-header" key={param.id}>
                        {param.description}
                    </div>
                    {param.id === 'home' && <Tabs sections={param.sections} />}
                    {param.id === 'page2' && <Tiles tiles={param.tiles} />}
                </>
            ))}
        </div>
    );
};

export default Sections;