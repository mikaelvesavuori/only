

class ProductPageApi {

    static getProductData(configurationCode, serviceCode, zipCode, customerType) {

        return new Promise((resolve, reject) => {
            console.log("ProductPageApi.getProductData");

            let simulateSlowLoad = false;
            let simulateError = false;

            if (suez.urlHelper.getParameterByName("simulateSlowLoad") === "true") {
                simulateSlowLoad = true;
            }

            if (suez.urlHelper.getParameterByName("simulateError") === "true") {
                simulateError = true;
            }

            const fetchProductUrl = "/api/products/product?"
                + "configurationCode=" + encodeURIComponent(configurationCode)
                + "&serviceCode=" + serviceCode
                + "&zipcode=" + zipCode
                + "&customertype=" + customerType
                + "&simulateSlowLoad=" + simulateSlowLoad
                + "&simulateError=" + simulateError;

            fetch(fetchProductUrl).then((response) => response.json()).then((responseJson) => {
                console.log(responseJson);
                resolve(responseJson);
            }).catch(function(error) {
                console.log('There has been a problem with your fetch operation: ' + error.message);
                reject("There was a problem with the fetch");
            });
        });
    }

    static getProductPrice(configurationCode, zipCode, wasteCode, serviceFrequencyCode, amount, campaignCode, customerType, customerId, collectAddressId) {
      
        return new Promise((resolve, reject) => {
            console.log("ProductPageApi.getProductPrice");

            let simulateSlowLoad = false;
            let simulateError = false;
             
            if (suez.urlHelper.getParameterByName("simulateSlowLoad") === "true") {
                simulateSlowLoad = true;
            }

            if (suez.urlHelper.getParameterByName("simulateError") === "true") {
                simulateError = true;
            }

            const priceApiUrl = "/api/products/price"
                        + "?configurationCode=" + encodeURIComponent(configurationCode)
                        + "&zipCode=" + zipCode
                        + "&decayProduct=" + wasteCode
                        + "&frequencyCode=" + encodeURIComponent(serviceFrequencyCode)
                        + "&amount=" + amount
                        + "&campaignCode=" + campaignCode
                        + "&customerType=" + customerType
                        + "&customerId=" + customerId
                        + "&collectAddressId=" + collectAddressId
                        + "&simulateSlowLoad=" + simulateSlowLoad
                        + "&simulateError=" + simulateError;

            console.log(priceApiUrl);

            fetch(priceApiUrl).then((response) => response.json()).then((responseJson) => {
                resolve(responseJson);
            }).catch(function(error) {
                console.log('There has been a problem with your fetch operation: ' + error.message);
                reject("There was a problem with the fetch");
            });
        });
    }

    static addToCart(state) {

        return new Promise((resolve, reject) => {
            console.log("ProductPageApi.addToCart");

            ////var cartItem = new Object();
            ////cartItem.Quantity = state.Quantity;
            ////cartItem.ConfigurationCode = state.ConfigurationCode;
            ////cartItem.Branch = state.Branch;
            ////cartItem.CustomerType = state.CustomerType;
            ////cartItem.ServiceStartDate = document.querySelector("#datepicker-start") ? document.querySelector("#datepicker-start").value : "";
            ////cartItem.ServiceEndDate = document.querySelector("#datepicker-end") ? document.querySelector("#datepicker-end").value : "";
            ////cartItem.ServiceFrequencyCode = state.SelectedFrequency ? state.SelectedFrequency.Code : "";
            ////cartItem.ServiceFrequencyDescription = state.SelectedFrequency ? state.SelectedFrequency.Description : "";
            ////cartItem.UnitPrice = state.IsFixedPrice ? 995 : 0;
            ////cartItem.IsFixedPrice = state.IsFixedPrice;
            ////cartItem.WasteCode = state.SelectedWasteType ? state.SelectedWasteType.Code : "";
            ////cartItem.WasteDescription = state.SelectedWasteType ? state.SelectedWasteType.Description : "";
            ////cartItem.CampaignCode = state.CampaignCode;
            ////cartItem.Prices = state.Prices;
            ////cartItem.ZipCode = state.ZipCode;

            var itemToAdd = new Object();
            itemToAdd.CartLineItem = new Object();
            
            itemToAdd.Branch = state.Branch;
            itemToAdd.CustomerType = state.CustomerType;

            itemToAdd.CartLineItem.Quantity = state.Quantity;
            itemToAdd.CartLineItem.ConfigurationCode = state.ConfigurationCode;
            itemToAdd.CartLineItem.ServiceStartDate = document.querySelector("#datepicker-start") ? document.querySelector("#datepicker-start").value : "";
            itemToAdd.CartLineItem.ServiceEndDate = document.querySelector("#datepicker-end") ? document.querySelector("#datepicker-end").value : "";
            itemToAdd.CartLineItem.ServiceFrequencyCode = state.SelectedFrequency ? state.SelectedFrequency.Code : "";
            itemToAdd.CartLineItem.ServiceFrequencyDescription = state.SelectedFrequency ? state.SelectedFrequency.Description : "";
            itemToAdd.CartLineItem.UnitPrice = state.IsFixedPrice ? 995 : 0;
            itemToAdd.CartLineItem.IsFixedPrice = state.IsFixedPrice;
            itemToAdd.CartLineItem.WasteCode = state.SelectedWasteType ? state.SelectedWasteType.Code : "";
            itemToAdd.CartLineItem.WasteDescription = state.SelectedWasteType ? state.SelectedWasteType.Description : "";
            itemToAdd.CartLineItem.CampaignCode = state.CampaignCode;
            itemToAdd.CartLineItem.Prices = state.Prices;
            itemToAdd.CartLineItem.ZipCode = state.ZipCode;


            console.log(itemToAdd);

            return fetch("/api/cart/add", {
                    method: "POST",
                    credentials: "same-origin",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify(itemToAdd)
                })
                .then((response) => {
                    console.log(response);

                    if (response.status === 200 && response.statusText === "OK") {
                        resolve("Succesfully added to cart.");
                    } else {
                        reject("Error adding to cart.");
                    }
                });
        });
    }

}

export default ProductPageApi;