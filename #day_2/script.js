document.querySelector(".progression-bar").addEventListener("click", function(){
    var progression = document.getElementById("progression");
    var width = progression.offsetWidth;
    var parentWidth = progression.parentElement.offsetWidth;
    var newWidth = width / parentWidth * 100 + 33.33;
    if (newWidth > 100) {
        newWidth = 0;
    }
    progression.style.width = newWidth + "%";

    var steps = document.querySelectorAll(".step");
    
    if (newWidth <= 33) {
        steps[0].style.backgroundColor = "rgb(158, 219, 238)";
        steps[1].style.backgroundColor = "white";
        steps[2].style.backgroundColor = "white";
        steps[3].style.backgroundColor = "white";
    }
    if (newWidth > 33 && newWidth < 66) {
        steps[1].style.backgroundColor = "rgb(158, 219, 238)";
    }
    if (newWidth > 66 && newWidth < 99) {
        steps[2].style.backgroundColor = "rgb(158, 219, 238)";
    }
    if (newWidth > 99) {
        steps[3].style.backgroundColor = "rgb(158, 219, 238)";
    }
});