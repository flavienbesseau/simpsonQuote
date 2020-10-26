function fetchSimpsonQuoteJSON() {
  const url = "https://simpsons-quotes-api.herokuapp.com/quotes";
  fetch(url)
    .then(function (response) {
      return response.json();
    })
    .then(function (quotes) {
      const { quote, character, image, characterDirection } = quotes[0];

      const citation = `<p><strong>${character}</strong></p>
      <img src="${image}<"></img>
      <p>${quote}</p>
      <p>${characterDirection}</p>`;
      document.querySelector("#simpson").innerHTML = citation;
    });
}

fetchSimpsonQuoteJSON();
const tralala = document
  .querySelector("#changeQuote")
  .addEventListener("click", fetchSimpsonQuoteJSON);
