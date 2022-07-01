export default class CurrencyService {
  static getExchange(amount) {
    return fetch(`https://v6.exchangerate-api.com/v6/${process.env.API_KEY}/USD/${amount}`)
      .then(function (response) {
        if (!response.ok) {
          throw Error(response.statusText);
        }
        return response.json();
      })
      .catch(function (error) {
        return error;
      });
  }
}
