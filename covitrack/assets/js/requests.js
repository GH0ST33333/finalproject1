function fetchCovidData() {
    // Create an XMLHttpRequest object.
    const xhr = new XMLHttpRequest();
  
    // Set the request method and URL.
    xhr.open('GET', 'https://www.mohfw.gov.in/');
  
    // Set the request header.
    xhr.setRequestHeader('Content-Type', 'application/json');
  
    // Send the request.
    xhr.send();
  
    // Handle the response.
    xhr.onload = function() {
      if (xhr.status === 200) {
        // Parse the JSON response.
        const data = JSON.parse(xhr.responseText);
  
        // Extract the relevant data.
        const activeCases = data.activeCases;
        const recoveredCases = data.recoveredCases;
        const totalDeaths = data.totalDeaths;
        const vaccination = data.vaccination;
  
        // Update the respective fields in the HTML code.
        document.querySelector('.counter_grid .counter').textContent = activeCases;
        document.querySelector('.counter_grid1 .counter').textContent = recoveredCases;
        document.querySelector('.counter_grid2 .counter').textContent = totalDeaths;
        document.querySelector('.counter_grid3 .counter').textContent = vaccination;
      } else {
        // Handle the error.
        console.log(xhr.statusText);
      }
    };
  }
  