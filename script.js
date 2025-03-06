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

document.addEventListener("DOMContentLoaded", function () {
    const heading = document.querySelector(".main-content h1");
    const names = ["Sanjid Dewan", "dizzysky"];

    function switchName() {
        const randomName = names[Math.floor(Math.random() * names.length)];
        heading.textContent = randomName;
    }

    function changeNameAtRandomIntervals() {
        setInterval(switchName, Math.random() * 3000 + 2000);
    }

    changeNameAtRandomIntervals();
});
