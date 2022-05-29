$(document).ready(function() {
    // Hides instruction box when got-it button is clicked
    $(".got-it").click(function(){
        $(".game-instruction").hide();
    });

    // Slide up the navbar when some link is clicked
    $('.navbar-nav>li>a').on('click', function(){
        $('.navbar-collapse').collapse('hide');
    });
});

// Reaction Timer Logic
var start = new Date().getTime();
            
function getRandomColor() {
                
    var letters = '0123456789ABCDEF'.split('');
    var color = '#';
    for (var i = 0; i < 6; i++ ) {        
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}
            
function makeShapeAppear() {
                
    var top = Math.random() * 50;
    var left = Math.random() * 50;
    var bottom = Math.random() * 50;
    var right = Math.random() * 50;
    var size = 0;
    while(size<5) {
        size = (Math.random() * 50);
    }
    if (Math.random() > 0.5) {
        document.getElementById("shape").style.borderRadius = "50%";            
    } 
    else {                
        document.getElementById("shape").style.borderRadius = "0";                    
    }
    var random = Math.random();
    if(random<0.25) {
        document.getElementById("shape").style.top = top + "%";
        document.getElementById("shape").style.left = left + "%";
    }
    else if(random<0.50) {
        document.getElementById("shape").style.bottom = bottom + "%";
        document.getElementById("shape").style.right = right + "%";
    }
    else if(random<0.75) {
        document.getElementById("shape").style.top = top + "%";
        document.getElementById("shape").style.right = right + "%";
    }
    else {
        document.getElementById("shape").style.bottom = bottom + "%";
        document.getElementById("shape").style.left = left + "%";
    }
    
    document.getElementById("shape").style.backgroundColor = getRandomColor();            
    var viewportWidth = document.documentElement.clientWidth;
    var viewportHeight = document.documentElement.clientHeight;
    if(viewportHeight<viewportWidth) {
        document.getElementById("shape").style.width = size + "vh";
        document.getElementById("shape").style.height = size + "vh";
    }
    else {
        document.getElementById("shape").style.width = size + "vw";
        document.getElementById("shape").style.height = size + "vw";
    }    
    document.getElementById("shape").style.display = "block";            
    start = new Date().getTime();
}
            
function appearAfterDelay() {                
    setTimeout(makeShapeAppear, Math.random() * 2000);            
}

appearAfterDelay();

window.onload = function() {
    document.getElementById("shape").onclick = function() {                
        document.getElementById("shape").style.display = "none";                
        var end = new Date().getTime();                
        var timeTaken = (end - start) / 1000;                
        document.getElementById("timeTaken").innerHTML = timeTaken + "s";                
        appearAfterDelay();
    }
}