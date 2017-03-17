import * as types from "./actionTypes";
import ProductPageApi from "../api/ProductPageApi";


export function setSelectedWasteType(waste) {
    return {
        type: types.SET_SELECTED_WASTE_TYPE,
        waste
    }
}

export function fetchProductDataSuccess(data) {
    return {
        type: types.FETCH_PRODUCT_DATA_SUCCESS,
        payload: data
    }
}

export function fetchProductDataFailure(error) {
    return {
        type: types.FETCH_PRODUCT_DATA_FAILURE,
        error
    }
} 

export function fetchProductDataStarted() {
    return {
        type: types.FETCH_PRODUCT_DATA_STARTED
    }
}

export function fetchProductPriceStarted(source) {
    return {
        type: types.FETCH_PRODUCT_PRICE_STARTED,
        source
    }
}  
 
////export function fetchProductPriceAfterWasteChangeStarted() {
////    return {
////        type: types.FETCH_PRODUCT_PRICE_AFTER_WASTE_CHANGE_STARTED
////    }
////}

export function fetchProductPriceSucces(prices) {
    return {
        type: types.FETCH_PRODUCT_PRICE_SUCCESS,
        prices
    }
}

export function fetchProductPriceFailure(source, error) {
    return {
        type: types.FETCH_PRODUCT_PRICE_FAILURE,
        source,
        error 
    }
}

export function setProductQuantity(quantity) {
    return {
        type: types.SET_PRODUCT_QUANTITY,
        quantity
    }
}

export function setProductCampaignCode(campaignCode) {
    return {
        type: types.SET_PRODUCT_CAMPAIGN_CODE,
        campaignCode
    }
}

export function addToCartStarted() {
    return {
        type: types.ADD_PRODUCT_TO_CART_STARTED
    }
}

export function validateMandatoryDates() {
    return {
        type: types.VALIDATE_MANDATORY_DATES
    }
}

export function addToCartSuccess() {
    return {
        type: types.ADD_PRODUCT_TO_CART_SUCCESS
    }
}

export function addToCartFailure(error) {
    return { 
        type: types.ADD_PRODUCT_TO_CART_FAILURE,
        error
    }
}
 
export function setSelectedFrequency(frequency) {
    return {
        type: types.SET_SELECTED_FREQUENCY,
        frequency
    }
}

export function getDOMValues() {
    return {
        type: types.GET_DOM_VALUES
    }
}

export function fetchProductPrice(source) {

    return function (dispatch, getState) {

        dispatch(fetchProductPriceStarted(source));

        const state = getState();
        
        let wasteCode = "";
        let serviceFrequencyCode = "";
 
        if (state.ServiceCode !== "FRS") 
        {
            wasteCode = state.SelectedWasteType.Code;
        }
 
        if (state.HasServiceFrequency == true) 
        {
            serviceFrequencyCode = state.SelectedFrequency.Code;
        }      

        const collectAddressId = ""; // not used here, moved to checkout, always leave out

        return ProductPageApi.getProductPrice(state.ConfigurationCode, state.ZipCode, wasteCode, serviceFrequencyCode, state.Quantity, state.CampaignCode, state.CustomerType, state.CustomerId, collectAddressId)
        .then(responseJson => dispatch(fetchProductPriceSucces(responseJson)))
        .catch(error => dispatch(fetchProductPriceFailure(source, error)));
    };
}

////export function fetchProductPriceAfterWasteChange() {

////    return function (dispatch, getState) {

////        dispatch(fetchProductPriceStarted());

////        fetchProductPrice();
////    };
////}

export function loadProductData() {
    return function(dispatch, getState) {

        dispatch(fetchProductDataStarted());

        const state = getState();

        return ProductPageApi.getProductData(state.ConfigurationCode, state.ServiceCode, state.ZipCode, state.CustomerType).then(productData => {
            dispatch(fetchProductDataSuccess(productData));
        }).catch(error => dispatch(fetchProductDataFailure(error)));
    }
}

export function addToCart() {
    return function(dispatch, getState) {
      
        const state = getState();

        if (state.StartDateValidated == false || state.EndDateValidated == false ) {  
            dispatch(validateMandatoryDates());
        }
            
        const stateAfter = getState();        

        if (stateAfter.StartDateValidated == true && stateAfter.EndDateValidated == true ) {     
            
            dispatch(addToCartStarted());       
               
            return ProductPageApi.addToCart(getState()).then(status => {
                dispatch(addToCartSuccess(status));
            }).catch(error => dispatch(addToCartFailure(error)));
        }
      
    }
}