





function  click(){

  var loginForm = document.getElementById('loginForm');
  if (loginForm.style.display === 'block') {
    loginForm.style.display = 'none';
  } else {
    loginForm.style.display = 'block';
  }}

  function toggleLoginForm() {
    var loginForm = document.getElementById("loginForm");
    if (loginForm.style.display === "none" || loginForm.style.display === "") {
        loginForm.style.display = "block";
    } else {
        loginForm.style.display = "none";
    }
    



}
//function redirectToWebsite() {
  //window.location.href = 'http://127.0.0.1:5500/pro.html#';
  //return false; }
  function validateForm() {
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;

    if (email === "" || password === "") {
        alert("Please fill in both email and password fields.");
        return false; 
    }

    return true;}

    function checkAvailability() {
      var carType = document.getElementById('carType').value;
      var startDate = document.getElementById('startDate').value;
      var endDate = document.getElementById('endDate').value;

     
      var availabilityResult = document.getElementById('availabilityResult');
      availabilityResult.innerHTML = `Checking availability for ${carType} from ${startDate} to ${endDate}...`;
      
      
         
          var isAvailable = Math.random() < 0.3; 
          if (isAvailable) {
              availabilityResult.innerHTML = `The ${carType} is available from ${startDate} to ${endDate}.`;
          } else {
              availabilityResult.innerHTML = `The ${carType} is not available from ${startDate} to ${endDate}.`;
          }
      
  }

  let totalSalary = 0;

  function addCar() {
      const carType = document.getElementById('carType').value;
      const dailyRate = parseFloat(document.getElementById('dailyRate').value);
  
      const carList = document.getElementById('carList');
      const listItem = document.createElement('li');
      listItem.textContent = `${carType} - ${dailyRate} $per day`;
      carList.appendChild(listItem);
  
     
      totalSalary += dailyRate;
      updateTotalSalaryDisplay();
      
  }
  
  function updateTotalSalaryDisplay() {
      const totalSalaryElement = document.getElementById('totalSalary');
      totalSalaryElement.textContent = totalSalary.toFixed(2);
  }
  document.addEventListener('DOMContentLoaded', () => {
    const carPriceElement = document.getElementById('carPrice');
    const reportAccidentButton = document.getElementById('reportAccident');

    reportAccidentButton.addEventListener('click', () => {
        const originalPrice = parseFloat(carPriceElement.textContent);
        const newPrice = originalPrice / 2;

        carPriceElement.textContent = newPrice.toFixed(2);

        alert('Accident reported! Rental price is now halved.');
    });
});