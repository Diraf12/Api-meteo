let formSubmit = document.getElementById("formSubmit");
let valueInput = document.getElementById("valueInput");
let city = "";
let meteo = [];
const ApiKey = "21320cb33a57a4c9306eb669c770331d";

const fetchMeteo = async () => {
  const ApiUri = `http://api.weatherstack.com/current?access_key=${ApiKey}&query=${city}`;
  meteo = await fetch(ApiUri).then((Response) => Response.json());
};

formSubmit.addEventListener("submit", (e) => {
  e.preventDefault();
  city = valueInput.value;
  fetchMeteo();
  if (city.length > 2) {
    fetchMeteo();
  } else {
    result.innerHTML = `<div class="alert alert-danger col-8 mx-auto" role="alert">
      Veuillez saisir le nom d'une ville !
    </div> `;
  }
});
