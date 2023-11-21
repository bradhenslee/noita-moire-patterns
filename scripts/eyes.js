
const rightEyes = document.getElementById("eyecloud-right");
const leftEyes = document.getElementById("eyecloud-left");
const diamond = document.getElementById("diamond");
const altars = document.getElementById("altars");
const log = document.getElementById("log");    
const drake = dragula([rightEyes, leftEyes], (x)=> { 
        // console.log('drake is example name of dragula's api, will hook into drag events in these callbacks', x);
});

// const form = document.querySelector("form");
// form.addEventListener("change", (e) => {
//     e.preventDefault();
//     // debugger;
//     let changedProp = e.target.name;
//     let changedValue = (e.target.type == "checkbox") ? e.target.checked : e.target.value;
//     changeHandler(changedProp, changedValue);
// });

function changeHandler(propName, el) {
    
    if (propName === 'checkbox-diamond') {
        setProp('rightoverlap')
    }
    setProp(el.name, el.value);
}

function setProp(elId, val) {
    if (val) {
        document.getElementById(elId).classList.add(prop);
    } else {
        document.getElementById(elId).classList.remove(prop);
    }
}

// Rotate element 1/4 turn
function notiaRotate(el, event){
    let currentAngle = el.style['-webkit-transform']
    el.style.transform = (currentAngle === '') ? 'rotate(0.25turn)'  
: (currentAngle === 'rotate(0.25turn)') ? 'rotate(0.5turn)' 
: (currentAngle === 'rotate(0.5turn)') ? 'rotate(0.75turn)' 
: (currentAngle === 'rotate(0.75turn)') ? '' : console.error('rotation not matched') ;
}

// Mouse handler
let eyes = document.getElementById('eyeclouds');
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