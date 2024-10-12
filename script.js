function openInNewBackgroundTab(link) {
    var evt = new MouseEvent("click", {
        bubbles: true,
        cancelable: true,
        metaKey: true, // use 'metaKey: true' for Mac
    });
    link.dispatchEvent(evt);
    return false;
}

let visitorCount = localStorage.getItem("visitorCount");

if (visitorCount == null) {
    visitorCount = 1;
} else {
    visitorCount = parseInt(visitorCount) + 1;
}

localStorage.setItem("visitorCount", visitorCount);

document.getElementById(
    "visitor-number"
).textContent = `Congrats! You're visitor #${visitorCount}`;

document.addEventListener("DOMContentLoaded", function () {
    const projectLinks = document.querySelectorAll("[data-screenshot]");
    const projectScreenshot = document.getElementById("project-screenshot");
    const screenshotDisplay = document.querySelector(".screenshot-display");

    projectLinks.forEach((link) => {
        link.addEventListener("mouseenter", function () {
            const screenshotSrc = this.getAttribute("data-screenshot");
            projectScreenshot.src = screenshotSrc;
            screenshotDisplay.style.display = "block"; // Show the screenshot display
        });

        link.addEventListener("mouseleave", function () {
            screenshotDisplay.style.display = "none"; // Hide the screenshot display
        });
    });
});
