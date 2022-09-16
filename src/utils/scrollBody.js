const body = document.body;

// call this to Disable
function disableScroll() {
    body.style.overflowY = 'hidden';
}

// call this to Enable
function enableScroll() {
    body.style.overflowY = 'overlay';
}

export { disableScroll, enableScroll };
