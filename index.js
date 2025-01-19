
//   // Wait for the DOM to fully load
//   document.addEventListener("DOMContentLoaded", function () {
//     // Select all elements that will trigger the odometer effect on click
//     const odometerContainers = document.querySelectorAll(".odometer-container");

//     // Add click event listener to each container
//     odometerContainers.forEach((container) => {
//       container.addEventListener("update", () => {
//         // Get the target odometer element and its value from the data attribute
//         const odometer = container.querySelector(".odometer");
//         const targetValue = container.getAttribute("data-value");

//         // Update the odometer's value
//         odometer.innerHTML = targetValue;
//       });
//     });
//   });


//   container.addEventListener("click", () => {
//     const odometer = container.querySelector(".odometer");
//     const targetValue = container.getAttribute("data-value");
  
//     // Reset the odometer value briefly before updating it
//     odometer.innerHTML = 0;
  
//     // Use a small timeout to ensure the animation restarts
//     setTimeout(() => {
//       odometer.innerHTML = targetValue;
//     }, 0);
//   });
  
