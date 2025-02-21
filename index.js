
// // Show pop-up after 5 seconds
// window.onload = () => {
//   setTimeout(() => {
//     document.getElementById("whatsapp-popup").classList.remove("hidden");
//     document.getElementById("whatsapp-icon").classList.add("hidden");
//   }, 5000);
// };

// // Function to show pop-up manually
// function showPopup() {
//   document.getElementById("whatsapp-popup").classList.remove("hidden");
//   document.getElementById("whatsapp-icon").classList.add("hidden");
// }

// // Function to hide pop-up
// function hidePopup() {
//   document.getElementById("whatsapp-popup").classList.add("hidden");
//   document.getElementById("whatsapp-icon").classList.remove("hidden");
// }








document.addEventListener("DOMContentLoaded", function () {

    // Smooth scroll functionality
    const scrollToStats = document.getElementById("scrollToStats");
    if (scrollToStats) {
      scrollToStats.addEventListener("click", function () {
        document.getElementById("stats").scrollIntoView({ behavior: "smooth" });
      });
    }
  
    // Counter animation triggered when the section is in view
    const counters = document.querySelectorAll(".counter");
    const speed = 200; // Duration of the animation
  
    const animateCounters = () => {
      counters.forEach((counter) => {
        const updateCount = () => {
          const target = +counter.getAttribute("data-count");
          const count = +counter.innerText;
  
          const increment = target / speed;
  
          if (count < target) {
            counter.innerText = Math.ceil(count + increment);
            setTimeout(updateCount, 100);
          } else {
            counter.innerText = target;
          }
        };
  
        // Reset counter to 0 before starting
        counter.innerText = "0";
        updateCount();
      });
    };
  
    // Observer to detect when the stats section comes into view
    const statsSection = document.getElementById("stats");
    if (statsSection) {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              console.log("Stats section in view. Starting counters...");
              animateCounters();
            }
          });
        },
        { threshold: 0.5 } // Trigger when 50% of the section is visible
      );
  
      observer.observe(statsSection);
    }
  });
  




  // <!-- JavaScript for Hamburger Menu -->
  const menuToggle = document.getElementById('menu-toggle');
  const menu = document.getElementById('menu');
  const menuItems = document.querySelectorAll('.menu-item');

  // Toggle menu visibility
  menuToggle.addEventListener('click', () => {
    menu.classList.toggle('hidden');
  });

  // Close menu when any option is clicked
  menuItems.forEach(item => {
    item.addEventListener('click', () => {
      menu.classList.add('hidden');
    });
  });

   // JavaScript for Our Products
      function toggleContent(id, button) {
        const content = document.getElementById(id);
        if (content.classList.contains("line-clamp-2")) {
          content.classList.remove("line-clamp-2");
          button.textContent = "READ LESS";
        } else {
          content.classList.add("line-clamp-2");
          button.textContent = "READ MORE";
        }
      }

 // JavaScript for auto-scrolling the horizontal scroll container
const scrollContainer = document.getElementById("scrollContainer");

let scrollDirection = 1; // 1 for right, -1 for left
let scrollSpeed = 1; // Pixels per step
let scrollInterval;
let userInteracted = false; // Flag to detect user interaction
const userInteractionTimeout = 10000; // Time in ms to resume scrolling after interaction
const edgePauseTime = 2000; // Pause at edges (in ms)

// Function to handle auto-scrolling
function autoScroll() {
  const maxScrollLeft = scrollContainer.scrollWidth - scrollContainer.clientWidth;

  // Update scroll position
  scrollContainer.scrollLeft += scrollDirection * scrollSpeed;

  // Check if we've hit an edge
  if (scrollContainer.scrollLeft >= maxScrollLeft && scrollDirection === 1) {
    pauseScroll(-1); // Pause, then reverse direction
  } else if (scrollContainer.scrollLeft <= 0 && scrollDirection === -1) {
    pauseScroll(1); // Pause, then reverse direction
  }
}

// Pause scrolling briefly at edges
function pauseScroll(newDirection) {
  stopAutoScroll(); // Stop scrolling
  setTimeout(() => {
    scrollDirection = newDirection; // Reverse direction
    if (!userInteracted) startAutoScroll(); // Resume scrolling if no user interaction
  }, edgePauseTime);
}

// Start auto-scrolling
function startAutoScroll() {
  if (!scrollInterval) {
    scrollInterval = setInterval(autoScroll, 20); // Adjust timing for smoother scrolling
  }
}

// Stop auto-scrolling
function stopAutoScroll() {
  clearInterval(scrollInterval);
  scrollInterval = null;
}

// Handle user interaction
function onUserInteraction() {
  userInteracted = true;
  stopAutoScroll();
}

function onInteractionEnd() {
  userInteracted = false;
  setTimeout(() => {
    if (!userInteracted) startAutoScroll();
  }, userInteractionTimeout);
}

// Add event listeners for interaction
scrollContainer.addEventListener("mousedown", onUserInteraction);
scrollContainer.addEventListener("mouseup", onInteractionEnd);
scrollContainer.addEventListener("mouseleave", onInteractionEnd);
scrollContainer.addEventListener("touchstart", onUserInteraction);
scrollContainer.addEventListener("touchend", onInteractionEnd);

// Initialize auto-scrolling
startAutoScroll();


  // Responsive Navigation Bar scrol nav tab
  document.addEventListener("DOMContentLoaded", function () {
    // Select all anchor links with hashes
    const navLinks = document.querySelectorAll('a[href^="#"]');
    
    navLinks.forEach(link => {
      link.addEventListener("click", function (event) {
        event.preventDefault(); // Prevent the default anchor behavior
        const targetId = this.getAttribute("href").substring(1); // Get the target ID
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
          // Smooth scroll to the target element
          window.scrollTo({
            top: targetElement.offsetTop -70, // Offset for fixed nav (adjust as needed)
            behavior: "smooth",
          });
        }
      });
    });
  });









        


      