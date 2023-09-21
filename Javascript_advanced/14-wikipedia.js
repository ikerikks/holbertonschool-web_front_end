// function createElement(data) {
//   let paragraph = document.createElement("p");
//   paragraph.innerText = data;
//   document.body.append(paragraph);
// }

// function queryWikipedia(callback) {
//   let url = "https://en.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&exintro&explaintext&redirects=1&titles=Stack%20Overflow&origin=";
//   let xhr = new XMLHttpRequest();
//   xhr.open("GET", url);
//   xhr.responseType = "json";
//   // callback(xhr.response);
// }

// createElement('my boy');

// queryWikipedia(createElement);
// // createElement('my boy');

// --------------------------------

// Function to create a paragraph element with given data and append it to the document body
function createElement(data) {
  var paragraph = document.createElement('p');
  paragraph.textContent = data;
  document.body.appendChild(paragraph);
}

// Function to fetch data from Wikipedia and call the callback function with the response
function queryWikipedia(callback) {
  // Define the Wikipedia API URL
  var apiUrl = 'https://en.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&exintro&explaintext&redirects=1&titles=Stack%20Overflow&origin=*';

  // Create a new XMLHttpRequest object
  var xhr = new XMLHttpRequest();

  // Configure the request
  xhr.open('GET', apiUrl, true);

  // Set up event listener for when the request is completed
  xhr.onload = function() {
    if (xhr.status === 200) {
      // Parse the JSON response
      var response = JSON.parse(xhr.responseText);
      // Extract the article text from the response
      var pageId = Object.keys(response.query.pages)[0]; // Get the page ID
      var extract = response.query.pages[pageId].extract;

      // Call the callback function with the extracted data
      callback(extract);
    } else {
      console.error('Request to Wikipedia API failed with status', xhr.status);
    }
  };
  // Handle network errors
  xhr.onerror = function() {
    console.error('Network error occurred');
  };

  // Send the request
  xhr.send();
}

// Call queryWikipedia with createElement as the callback
queryWikipedia(createElement);
