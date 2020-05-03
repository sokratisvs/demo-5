import React from 'react';
import Select from 'react-select';
import styled from '@emotion/styled';
import { withRouter } from "react-router-dom";
import { customStyles } from './CustomStyles';
import './SearchBar.css';

const options = [
    { value: 'home', label: 'Homepage' },
    { value: 'section1', label: 'Section1' },
    { value: 'section2', label: 'Section2' },
    { value: 'page2', label: 'Page 2' },
];

const StyledSearch = styled(Select)`
 width: 300px;
 padding: 10px;
 .select__menu-list::-webkit-scrollbar{
   width: 4px;
   height: 0px;
 }
 .select__menu-list::-webkit-scrollbar-track{
   background: #f1f1f1;
 }
 .select__menu-list::-webkit-scrollbar-thumb{
   background: #888;
 }
 .select__menu-list::-webkit-scrollbar-thumb:hover{
   background: #555;
 }
`
class SearchBar extends React.Component {
    state = {
        selectedOption: null,
    };
    handleChange = selectedOption => {
        this.setState(
            { selectedOption },
            () => {
                const { selectedOption } = this.state;
                const { history } = this.props;
                console.log(`Option selected:`, selectedOption)
                console.log(`history`, history)
                switch (selectedOption.value) {
                    case 'home':
                        history.push('/home');
                        break;
                    case 'page2':
                        history.push('/page2');
                        break;
                    case 'section1':
                        history.push('/home#01');
                        break;
                    case 'section2':
                        history.push('/home#02');
                        break;
                    default:
                        break;
                }
            }
        );
    };

    render() {
        const { selectedOption } = this.state;
        return (
            <div className="search-bar">
                <Select
                    value={selectedOption}
                    onChange={this.handleChange}
                    options={options}
                    isSearchable
                    classNamePrefix="select"
                    styles={customStyles}
                />
            </div>

        );
    }
}

export default withRouter(SearchBar);