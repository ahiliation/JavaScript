function doThisLater() {
    alert("Time's up!");
}

var timerId = setTimeout(doThisLater, 3000);

clearTimeout(timerId);
