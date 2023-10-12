function openInNewBackgroundTab(link) {
    var evt = new MouseEvent("click", {
        bubbles: true,
        cancelable: true,
        metaKey: true, // use 'metaKey: true' for Mac
    });
    link.dispatchEvent(evt);
    return false;
}
