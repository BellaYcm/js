/**
 *
 * Created by sunke on 2015/12/28.
 */
window.onload =
    function () {
        var clock = document.getElementById("clock"),
            icon = new Image();
        var s_data=['1','2','3'];
        console.log(JSON.stringify(s_data));
        icon.src = "clock-icon.png";
        function displayTime() {
            var now = new Date(),
                hrs = now.getHours(),
                mins = now.getMinutes();
            if (mins < 10) {
                mins = "0" + mins;
            }
            clock.innerHTML = hrs + ":" + mins;
            setTimeout(displayTime, 60000);
        }

        displayTime();
        clock.draggable = true;
        clock.ondragstart = function (event) {
            var event = event || window.event;
            var dt = event.dataTransfer;
            dt.setData("Text", Date() + "\n");
            if (dt.setDragImage) {
                dt.setDragImage(icon, 0, 0);
            }
        }
    }
;
