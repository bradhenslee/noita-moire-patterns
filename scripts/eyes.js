var drake = dragula([document.getElementById("eyecloud-right"), document.getElementById("eyecloud-left")], 
    (x)=> {

    } 
);
var log = document.getElementById("log");    

// Rotate element 1/4 turn
function notiaRotate(el, event){
    var currentAngle = el.style['-webkit-transform']
    el.style.transform = (currentAngle === '') ? 'rotate(0.25turn)'  
: (currentAngle === 'rotate(0.25turn)') ? 'rotate(0.5turn)' 
: (currentAngle === 'rotate(0.5turn)') ? 'rotate(0.75turn)' 
: (currentAngle === 'rotate(0.75turn)') ? '' : console.error('rotation not matched') ;
}

// Mouse handler
var eyes = document.getElementById('eyeclouds');
// eyes.addEventListener("contextmenu", ( e )=> { e.preventDefault(); return false; } ); 
eyes.addEventListener("mouseup", (e) => {
    switch (e.button) {
case 0:
    // log.textContent = "Left button clicked.";
    if (e.altKey) notiaRotate(e.srcElement, e);
    break;
case 1:    
    // log.textContent = "Middle button clicked.";
    break;
case 2:
    // log.textContent = "Right button clicked.";
default: 
    log.textContent = `Unknown button code: ${e.button}`;
}
});