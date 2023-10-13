function openInNewBackgroundTab(link) {
    var evt = new MouseEvent("click", {
        bubbles: true,
        cancelable: true,
        metaKey: true, // use 'metaKey: true' for Mac
    });
    link.dispatchEvent(evt);
    return false;
}

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
