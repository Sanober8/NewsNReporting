let jsonData = {};
function send(){

const form = document.querySelector("#contact-form");

form.addEventListener("submit", event => {
    event.preventDefault();
    const formData = {
        email: form.email.value,
        subject: form.subject.value,
        message: form.message.value
    };
    jsonData = JSON.stringify(formData);
    console.log(jsonData); // Log the JSON data to the console
});




// fetch("/send-email", {
//     method: "POST",
//     headers: {
//         "Content-Type": "application/json"
//     },
//     body: jsonData
// })
// .then(response => response.json())
// .then(data => {
//     console.log(data);
// })
// .catch(error => console.error(error));

}




// API endpoint for Karachi weather
// const apiUrl = 'https://api.openweathermap.org/data/2.5/weather?q=Karachi&appid=f6bd0503c515a86e8ebb6b1104484247    ';

// // Get the temperature element
// const temperatureElement = document.querySelector('#temperature');

// // Fetch the weather data from the API
// fetch(apiUrl)
//   .then(response => response.json())
//   .then(data => {
//     // Extract the temperature from the API response
//     const temperature = data.main.temp ;
//     // Set the temperature text in the element
//     temperatureElement.innerHTML = `Temperature: ${temperature}`  ;
//   })
//   .catch(error => {
//     console.error(error);
//   });

