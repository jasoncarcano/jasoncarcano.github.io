document.getElementById("offerButton").addEventListener("click", function() {
    alert("That's my presenation, thank you!!");
});

document.getElementById("contactForm").addEventListener("submit", function(e) {
    e.preventDefault();
    alert("Thank you for your message! We'll get back to you soon.");
});

const menuItems = document.querySelectorAll(".menu-item");

menuItems.forEach(item => {
    item.addEventListener("mouseover", () => {
        item.style.backgroundColor = "#5a8fbc";
        item.style.color = "white";
    });
    item.addEventListener("mouseout", () => {
        item.style.backgroundColor = "transparent";
        item.style.color = "black";
    });
});
