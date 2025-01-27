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
            setTimeout(updateCount, 20);
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

// Function to start auto-scrolling
function startAutoScroll() {
  scrollInterval = setInterval(() => {
    if (!userInteracted) {
      const maxScrollLeft = scrollContainer.scrollWidth - scrollContainer.clientWidth;
      scrollContainer.scrollLeft += scrollDirection * scrollSpeed;

      // Pause briefly at the edges before reversing direction
      if (scrollContainer.scrollLeft >= maxScrollLeft && scrollDirection === 1) {
        scrollDirection = 0; // Pause scrolling
        setTimeout(() => {
          scrollDirection = -1; // Then start scrolling left
        }, 5000); // Pause for 2 seconds (adjust as needed)
      } else if (scrollContainer.scrollLeft <= 0 && scrollDirection === -1) {
        scrollDirection = 0; // Pause scrolling
        setTimeout(() => {
          scrollDirection = 1; // Then start scrolling right
        }, 5000); // Pause for 2 seconds (adjust as needed)
      }
    }
  }, 20); // Adjust interval timing for smoother scrolling
}

// Function to stop auto-scrolling
function stopAutoScroll() {
  clearInterval(scrollInterval);
}

// Listen for user interactions
scrollContainer.addEventListener("mousedown", () => {
  userInteracted = true;
  stopAutoScroll();
});

scrollContainer.addEventListener("mouseup", () => {
  userInteracted = false;
  setTimeout(() => {
    if (!userInteracted) startAutoScroll();
  }, userInteractionTimeout);
});

scrollContainer.addEventListener("mouseleave", () => {
  userInteracted = false;
  setTimeout(() => {
    if (!userInteracted) startAutoScroll();
  }, userInteractionTimeout);
});

scrollContainer.addEventListener("touchstart", () => {
  userInteracted = true;
  stopAutoScroll();
});

scrollContainer.addEventListener("touchend", () => {
  userInteracted = false;
  setTimeout(() => {
    if (!userInteracted) startAutoScroll();
  }, userInteractionTimeout);
});

// Initialize auto-scrolling
startAutoScroll();
