
const eyeclouds = document.getElementById("eyeclouds");
const rightEyes = document.getElementById("eyecloud-right");
const leftEyes = document.getElementById("eyecloud-left");
const diamond = document.getElementById("diamond");
const altars = document.getElementById("altars");
const log = document.getElementById("log");
const drake = dragula([rightEyes, leftEyes], (x) => {
    // console.log('drake is example name of dragula's api, will hook into drag events in these callbacks', x);
});

// Mouse handler
// eyes.addEventListener("contextmenu", ( e )=> { e.preventDefault(); return false; } ); 
eyeclouds.addEventListener("mouseup", (e) => {
    switch (e.button) {
        case 0:
            // log.textContent = "Left button clicked.";
            if (e.altKey) notiaRotate(e.target, e);
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

const form = document.querySelector("form");
form.addEventListener("change", (e) => {
    e.preventDefault();
    let changedProp = e.target.name || e.target.id;
    let newVal = (e.target.type == "checkbox") ? e.target.checked : e.target.value;
    changeHandler(changedProp, newVal);
});

function changeHandler(propName, newVal) {
    if (propName === 'overlap') {
        rightEyes.classList.toggle('overlap')
    }
    if (propName === 'range-overlap') {
        let offset = newVal + 'px';
        rightEyes.style.left = offset;
        rightEyes.style.top = offset;
    }
    if (propName === 'borders') {
        eyeclouds.classList.toggle('borders')
    }
    if (propName === 'labels') {
        eyeclouds.classList.toggle('labels')
    }
    if (propName === 'diamond') {
        diamond.classList.toggle('show')
    }
    if (propName === 'altars') {
        altars.classList.toggle('show')
    }
}


// Rotate element 1/4 turn
function notiaRotate(el, event) {
    let currentAngle = el.style['-webkit-transform']
    el.style.transform = (currentAngle === '') ? 'rotate(0.25turn)'
        : (currentAngle === 'rotate(0.25turn)') ? 'rotate(0.5turn)'
            : (currentAngle === 'rotate(0.5turn)') ? 'rotate(0.75turn)'
                : (currentAngle === 'rotate(0.75turn)') ? '' : console.error('rotation not matched');
}
