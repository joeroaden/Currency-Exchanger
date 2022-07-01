import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import CurrencyService from './currency-service';

function clearFields () {
  $('#amount').val("");
}

function displayCurrencies (arabEmirates, afghan, albanian, armenian, netherlands) {
  $(".showArabEmirates").text(`Arab Emirates (AED): ${arabEmirates} `);
  $(".showAfghan").text(`Afghan (AFN): ${afghan}`);
  $(".showAlbanian").text(`Albanian (ALL): ${albanian}`);
  $(".showArmenian").text(`Armenian (AMD): ${armenian}`);
  $(".showNetherlands").text(`Netherlands (ANG): ${netherlands}`);
}

function displayErrors(error) {
  $('.showErrors').text(`${error}`);
}

$(document).ready(function () {
  $("#getExchange").click(function () {
    let amount = $("#amount").val();
    clearFields();
    
  }
}