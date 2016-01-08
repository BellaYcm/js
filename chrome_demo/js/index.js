function displayTime() {
    var click = document.getElementById('clock'), now = new Date();
    click.innerHTML = now;
    console.log(now);
    setTimeout(displayTime, 100);
}
displayTime();