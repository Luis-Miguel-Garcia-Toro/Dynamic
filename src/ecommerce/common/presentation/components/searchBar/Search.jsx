import React, { useEffect, useState } from "react";
import { Select } from 'antd';
import Styles from './scss/search.module.scss';
import { useSearch } from "./view-model/useSearch";

import AuthProducts from "../../../../auth/products/AuthProducts"

const SearchBar = () => {
    // const {   } = useSearch();
    const [listProducts, setListProducts] = useState([]);

    const onChange = (value) => {
        console.log(`selected ${value}`);
    };

    const getProductsSearch = async (value) => {
        console.log(value);
        if (value.length < 3) return
        else {
            try {
                let result = await AuthProducts('-1', value);
                console.log(result);
                setListProducts(result);
            } catch (error) {
                console.error(error);
            }
        }
    }

    return (
        <input onChange={e => getProductsSearch(e.target.value)}>







        </input>



    )
};
export default SearchBar;