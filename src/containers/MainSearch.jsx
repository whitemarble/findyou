import React, { Component } from 'react';
import { Icon, Input, AutoComplete, Select } from 'antd';
const Option = AutoComplete.Option;
const OptGroup = AutoComplete.OptGroup;


import './MainSearch.css';

const InputGroup = Input.Group;
const cities = ["Northland","Auckland","Waikato","Bay of Plenty","Gisborne","Hawke's Bay","Taranaki",
"Manawatu-Wanganui","Wellington","Tasman","Nelson","Marlborough","West Coast","Canterbury","Otago","Southland"];

const cityoptions = cities.map(
    (city)=> {return(<Option key={city} value={city}>{city}</Option>)}
);

class MainSearch extends Component {
    render() {
        return (
            <div className="main-search">
                <InputGroup compact>
                <Select defaultValue="New Zealand" className="city-selector" dropdownClassName="city-dropdown">
                    {cityoptions}
                </Select>
                <AutoComplete
                    className="search"
                    dropdownClassName="certain-category-search-dropdown"
                    size="large"
                >
                
                    <Input suffix={<Icon type="search" className="certain-category-icon" />} />
                </AutoComplete>
                </InputGroup>
            </div>
        );
    }
}

export default MainSearch;