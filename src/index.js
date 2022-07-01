import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import CurrencyService from './currency-service';

function clearFields () {
  $('#amount').val("");
}

function displayCurrencies (currencyResponse) {
  $(".showCurrency").text(`Your Conversion is:  $${currencyResponse} `);

}

function displayErrors(error) {
  $('.showErrors').text(`${error}`);
}

$(document).ready(function () {
  $("#getExchange").click(function () {
    let amount = $("#amount").val();
    let country = $("#country").val();
    console.log(country);
    clearFields();
    CurrencyService.getExchange(amount, country)
      .then(function (currencyResponse) {
        if (currencyResponse instanceof Error) {
          throw Error (`Exchange Rate API error: ${currencyResponse.message}`);
        }
        let conversionResponse = currencyResponse.conversion_result;
        displayCurrencies(conversionResponse);
      })
      .catch(function(error) {
        displayErrors(error.message);
      });
  });
});