console.log("Wood N Beyond site loaded!");

document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll(".fade-in");

    const scrollHandler = () => {
        let currentColor = "#b19b7d"; 

        sections.forEach(section => {
            const rect = section.getBoundingClientRect();

            // Check if section is in viewport
            if (rect.top < window.innerHeight - 100) {
                section.classList.add("show");
            }

            // Change background color if section is in center of viewport
            if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
                currentColor = section.getAttribute("data-color");
            }
        });

        document.body.style.backgroundColor = currentColor;
    };

    window.addEventListener("scroll", scrollHandler);
    scrollHandler(); 
});
