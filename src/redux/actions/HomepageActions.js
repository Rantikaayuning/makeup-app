import { FETCH_BRAND_TYPE, FETCH_BRAND } from '../types/HomepageTypes';
import axios from 'axios';

export const getBrandSearch = (brand) => (dispatch) => {
axios.get(`http://makeup-api.herokuapp.com/api/v1/products.json?brand=${brand}`)
    .then((response) => {
        // console.log(response)
        dispatch({
        type: FETCH_BRAND,
        payload: response.data,
        loading: false
        });
        // console.log(response.data)
    })
    .catch((payload) => {
        console.log('error')
    });
};

export const getHomepageBrandType = (brand) => (dispatch) => {
axios.get(`http://makeup-api.herokuapp.com/api/v1/products.json?brand=${brand}`)
    .then((response) => {
        // console.log(response)
        dispatch({
        type: FETCH_BRAND_TYPE,
        payload: response.data,
        loading: false
        });
        // console.log(response.data)
    })
    .catch((payload) => {
        console.log('error')
    });
};
