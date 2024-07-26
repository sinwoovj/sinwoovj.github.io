// JavaScript to add any interactive functionality if needed in the future
document.addEventListener("DOMContentLoaded", function() {
    // Example: Adding a simple event listener
    const projectLinks = document.querySelectorAll(".project a");
    projectLinks.forEach(link => {
        link.addEventListener("click", function(event) {
            event.preventDefault();
            alert("Project link clicked!");
        });
    });
});
