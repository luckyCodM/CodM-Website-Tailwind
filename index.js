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
  

  // JavaScript for Hamburger Menu

  const menuToggle = document.getElementById('menu-toggle');
  const menu = document.getElementById('menu');

  menuToggle.addEventListener('click', () => {
    menu.classList.toggle('hidden');
  });
