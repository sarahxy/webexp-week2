document.onreadystatechange = function () {
    var state = document.readyState;
    if (state == 'complete') {
        // Place all your clicking logic here.
        (
            document.getElementById("about").onclick = function() {
                window.scroll(0, findPos(document.getElementById("to-about")));
            },

            document.getElementById("pictures").onclick = function() {
                window.scroll(0, findPos(document.getElementById("to-pictures")));
            },

            document.getElementById("members").onclick = function() {
                window.scroll(0, findPos(document.getElementById("to-members")));
            }
        )
    }
};

// This will help you with finding how much to scroll the window.
// elem is DOM element
function findPos(elem) {
    var top = 0;
    if (elem.offsetParent) {
        do {
            top += elem.offsetTop;
        } while (elem = elem.offsetParent);
        return [top];
    }
}
