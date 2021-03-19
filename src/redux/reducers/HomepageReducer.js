import { FETCH_BRAND, FETCH_BRAND_TYPE } from '../types/HomepageTypes';

const initialState = {
    brandSearch: [],
    BrandTypeSearch: [],
    isLoading: true
}

const HomepageReducer = (state = initialState, action) => {
    const { payload, type, loading } = action
    switch (type) {
        case FETCH_BRAND :
            return {
                ...state,
                brandSearch: payload,
                isLoading: loading
            }
        case FETCH_BRAND_TYPE :
            return {
                ...state,
                BrandTypeSearch: payload,
                isLoading: loading
            }
        default :
        return state;
    }
}

export default HomepageReducer;