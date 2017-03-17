import * as types from "../actions/actionTypes";
import * as constants from "../constants";

const wasteCodeInQueryParameter = suez.urlHelper.getParameterByName("selectedWasteCode");

function matchesSelectedWasteFromProductListingPage(element) {
    return element.Code === suez.urlHelper.getParameterByName("selectedWasteCode");
}

function matchesTopSellerWasteCode(element) {
    return element.Code === constants.TOP_SELLER.WASTE_CODE; 
}

export default function reducers(state, action) { 
     
    let notification = new Object();

    switch (action.type) {

        case types.FETCH_PRODUCT_DATA_SUCCESS:
            console.log("FETCH_PRODUCT_DATA_SUCCESS");

            let waste = null;
            let maxRentalDays = "";
            let datesNotAvailableDueToBreakingTimes = "";
            let notAvailableDates = [];
            let serviceFrequencies = [];
            let hasServiceFrequency = false;
            let startDateValidated = true;
            let endDateValidated = true;
            let serviceCode = document.querySelector("#serviceCode").value;
            let serviceFrequency = "";            

            if (wasteCodeInQueryParameter != null) {
                waste = action.payload.ValidDecayProducts.find(matchesSelectedWasteFromProductListingPage);
            }

            if (waste === undefined || waste === null) {

                if (serviceCode === constants.TOP_SELLER.SERVICE_CODE) {
                    waste = action.payload.ValidDecayProducts.find(matchesTopSellerWasteCode);
                } 
                
                if (waste === null || waste === undefined) {
                    waste = action.payload.ValidDecayProducts[0];
                }
            }
 
            if (action.payload.HasServiceRules) {

                maxRentalDays = action.payload.MaxRentalDays;
                datesNotAvailableDueToBreakingTimes = action.payload.NotAvailableDatesDueToBreakingTimes;
                serviceFrequencies = action.payload.ServiceFrequencies;
                hasServiceFrequency = action.payload.HasServiceFrequency;
                
                if (hasServiceFrequency == true) {
                    serviceFrequency = action.payload.ServiceFrequencies[0]; 
                }       
        
                if (action.payload.NotAvailableDates !== null && action.payload.NotAvailableDates.length > 0) {
                    action.payload.NotAvailableDates.forEach(function (date) {
                        const convertedDate = new Date(date);
                        const convertDateString = convertedDate.getDate() + "-" + (convertedDate.getMonth() + 1) + "-" + convertedDate.getFullYear();
                        notAvailableDates.push(convertDateString);
                    });
                }

            } 

            if (action.payload.IsStartDateMandatory == true) {
                startDateValidated = false; 
            } 

            if (action.payload.IsEndDateMandatory == true) {
                endDateValidated = false;
            }  

            return Object.assign({},
                state,
                {
                    Name: action.payload.Name,
                    VolumeSize: action.payload.VolumeSize,
                    VolumeUnit: action.payload.VolumeUnit,
                    ValidDecayProducts: action.payload.ValidDecayProducts,
                    IsFixedPrice: action.payload.IsFixedPrice,
                    SelectedWasteType: waste,   
                    SelectedFrequency : serviceFrequency,
                    MaxRentalDays: maxRentalDays,
                    DatesNotAvailableDueToBreakingTimes: datesNotAvailableDueToBreakingTimes,
                    ServiceFrequencies: serviceFrequencies,
                    HasServiceFrequency: hasServiceFrequency,
                    StartDateValidated: startDateValidated,
                    EndDateValidated: endDateValidated,
                    CustomerType: document.querySelector("#customerType").value,
                    ZipCode: document.getElementById("zipCode").value,
                    ServiceCode: serviceCode,
                    ConfigurationCode: document.getElementById("configurationCode").value,
                    NotAvailableDates: notAvailableDates,
                    IsLoadingProductData: false
                });

        case types.FETCH_PRODUCT_DATA_STARTED:
            console.log("FETCH_PRODUCT_DATA_STARTED");

            return Object.assign({}, state, {
                IsLoadingProductData: true
            });

        case types.FETCH_PRODUCT_DATA_FAILURE:
            console.log("FETCH_PRODUCT_DATA_FAILURE");

            notification.ShouldShow = true;
            notification.Message = "Något gick fel vid laddning av sidan. Vänligen försök igen senare eller kontakta vår kundtjänst.";
            notification.Type = constants.NOTIFICATION_TYPE.ERROR;

            return Object.assign({}, state, {
                IsLoadingProductData: false,
                Notification: notification,
                HasError: true
            });

        case types.FETCH_PRODUCT_PRICE_STARTED:
            console.log("FETCH_PRODUCT_PRICE_STARTED");

            if (action.source === constants.FETCH_PRICE_SOURCE.WASTE) {
                return Object.assign({},
                    state,
                    {
                        IsLoadingPriceAfterSelectedWaste: true
                    });
            } 
            else if (action.source === constants.FETCH_PRICE_SOURCE.SERVICE_FREQUENCY) {
                return Object.assign({},
                    state,
                    {
                        IsLoadingPriceAfterSelectedFrequency: true
                    });
            }
            else if (action.source === constants.FETCH_PRICE_SOURCE.QUANTITY) {

                return Object.assign({},
                    state,
                    {
                        IsLoadingPriceAfterQuantityChange: true
                    });
            }
            else if (action.source === constants.FETCH_PRICE_SOURCE.CAMPAIGN) {

                return Object.assign({},
                    state,
                    {
                        IsLoadingPriceAfterSubmittingCampaignCode: true
                    });
            }
            else {
                return Object.assign({}, state, {
                    IsLoadingData: true
                });
            }

        case types.FETCH_PRODUCT_PRICE_SUCCESS:

            return Object.assign({}, state, {
                Prices: action.prices,
                IsLoadingPriceAfterSelectedWaste: false,
                IsLoadingPriceAfterSelectedFrequency: false,
                IsLoadingPriceAfterQuantityChange: false,
                IsLoadingPriceAfterSubmittingCampaignCode: false
            });  

        case types.FETCH_PRODUCT_PRICE_FAILURE:
            console.log("FETCH_PRODUCT_PRICE_FAILURE");

            notification.ShouldShow = true;
            notification.Message = "Något gick fel vid laddning av priset för produkten. Vänligen försök igen senare eller kontakta vår kundtjänst.";
            notification.Type = constants.NOTIFICATION_TYPE.ERROR;

            if (action.source === constants.FETCH_PRICE_SOURCE.WASTE) {
                return Object.assign({},
                    state,
                    {
                        IsLoadingPriceAfterSelectedWaste: false,
                        Notification: notification,
                        HasError: true
                    });
            }
            else if (action.source === constants.FETCH_PRICE_SOURCE.SERVICE_FREQUENCY) {
                return Object.assign({},
                    state,
                    {
                        IsLoadingPriceAfterSelectedFrequency: false,
                        Notification: notification,
                        HasError: true
                    });
            }
            else if (action.source === constants.FETCH_PRICE_SOURCE.CAMPAIGN) {

                return Object.assign({},
                    state,
                    {
                        IsLoadingPriceAfterSubmittingCampaignCode: false
                    });
            }
            else if (action.source === constants.FETCH_PRICE_SOURCE.QUANTITY) {
                return Object.assign({},
                    state,
                    {
                        IsLoadingPriceAfterQuantityChange: false
                    });
            }
            else {
                return Object.assign({}, state, {
                    IsLoadingData: false,
                    Notification: notification,
                    HasError: true
                });
            }

        case types.SET_PRODUCT_QUANTITY:

            return Object.assign({}, state, {
                Quantity: action.quantity
            });

        case types.SET_PRODUCT_CAMPAIGN_CODE:

            return Object.assign({}, state, {
                CampaignCode: action.campaignCode
            });

        case types.SET_SELECTED_WASTE_TYPE:

            return Object.assign({}, state, {
                SelectedWasteType: action.waste
            });

        case types.SET_SELECTED_FREQUENCY:
            console.log("SET_SELECTED_FREQUENCY");
            
            return Object.assign({}, state, {
                SelectedFrequency: action.frequency
            });


        case types.ADD_PRODUCT_TO_CART_STARTED:
            console.log("ADD_PRODUCT_TO_CART_STARTED");

            return Object.assign({}, state, {
                IsAddingToCart: true
            });

        case types.ADD_PRODUCT_TO_CART_SUCCESS:
            console.log("ADD_PRODUCT_TO_CART_SUCCESS");

            notification.ShouldShow = true;
            notification.Message = "Produkten är tillagd i varukorgen. ";
            notification.Type = constants.NOTIFICATION_TYPE.INFORMATION;
 
            return Object.assign({}, state, {
                IsAddingToCart: false, 
                NotificationAddToCart: notification,
                HasAddedToCart: true
            });

        case types.ADD_PRODUCT_TO_CART_FAILURE:
            console.log("ADD_PRODUCT_TO_CART_FAILURE");
            console.log(action.error);
            notification.ShouldShow = true;
            notification.Message = "Något gick fel då produkten skulle läggas i varukorgen. Vänligen försök igen senare eller kontakta vår kundtjänst.";
            notification.Type = constants.NOTIFICATION_TYPE.ERROR;

            return Object.assign({}, state, {
                IsAddingToCart: false,
                NotificationAddToCart: notification
            });


        case types.VALIDATE_MANDATORY_DATES:
            console.log("VALIDATE_MANDATORY_DATES");
            const startDate = document.getElementById("datepicker-start");
            const endDate = document.getElementById("datepicker-end");
            
            if (state.StartDateValidated == false ) {  
                
                if (startDate.value == "") {
                    startDate.classList.add("error"); 
                    startDate.setCustomValidity("Invalid field.");                 
                } else {
                    startDate.classList.remove("error");
                    startDate.setCustomValidity("");
                    return Object.assign({}, state, {    
                        StartDateValidated: true
                    });
                }     
            }
 
            if (state.EndDateValidated == false ) {  

                if (endDate.value == "") {
                    endDate.classList.add("error");
                    endDate.setCustomValidity("Invalid field.");
                } else { 
                    endDate.classList.remove("error");
                    endDate.setCustomValidity("");
                    return Object.assign({}, state, {    
                        EndDateValidated: true
                    });
                }      
            }
        
        case types.GET_DOM_VALUES:

            const configurationCode = document.querySelector("#configurationCode").value;
            const sCode = document.querySelector("#serviceCode").value;
            const zipCode = document.querySelector("#zipCode").value;
            const customerType = document.querySelector("#customerType").value;
            const customerId = document.querySelector("#customerId").value;
            const branch = document.querySelector("#branch").value;

            console.log("DOM values... Configurationcode: " + configurationCode + ", service code: " + sCode + ", zip code: " + zipCode + ", customer type: " + customerType + ", customer id: " + customerId + ", branch: " + branch);

            return Object.assign({}, state, {
                ConfigurationCode: configurationCode,
                ServiceCode: sCode,
                ZipCode: zipCode,
                CustomerType: customerType,
                CustomerId: customerId,
                Branch: branch
            });
            
        default:
            return state;
    }
}
