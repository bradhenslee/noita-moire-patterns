// data from wiki, translated to text and removing the line end placeholders.
// ie, left-to-right, single file reading of the eyes, not trigrammed
const eyeData = {
"e1": ["rououdrrddololuudordruuldudoddoolorlooo", "odrolurroooulrrrlrurrrrouuooodroudluuud", "duorruolloooroouololoullulroddorrodlrlu", "rdudududooduudruroulrrduddulludlulluruu", "ouloodruruuludooluuuouoorlurluooloduoou", "olodduldrdluurruououoolourolurllrllrlor", "udddurroddouoduuduuuruuruodrrdul", "uduolrlrrludodoluuorodurdroldud"],
"w1": ["duuoudrrddololuudordruuldudoddoolorlool", "odrolurroooulrrrlrurrrrouuooodroudluuou", "ororouollooouololloloullulroddorrodludu", "uuurududooouuororoulrrduddulludlullulou", "rurrrddodrllooorldrduuuorrurduoduorrold", "lodldulourrruuudloruodouluddlurruddoudr", "orlulrrulrrrodorlroourdrurlordrdroulod", "duoudrruurudorodrrrroolrrduodudrrluud"],
"e2": ["uruoudrrddololuudordruuldudoddoolorlool", "udrolurroooulrrrlrurrrrouuooodroudluudr", "doroudrdoollruouldoourululoduuorluolrrd", "uorlluuudrrrrdulodddoudorduouodrrllulrr", "ouluudodoulluororoduuuulrluodlrdrudruur", "uluurouroolouodorrurrloroloooouodrruolo", "oouudrruoolrrduoldrlrouduodouoroodoorru", "oroulrrloduroduddorduooouodduolluroulrr", "odlrouolduouuooroourl", "udulororrorouludrrduu"],
"w2": ["dououldolrduuuuudouodroouulruuulrolrull", "udroluoorlluroorrruluoudrloorrrrourolor", "uuouroruoollourorrouluoororudooudrlddur", "louudouurouodrrdudldulrrdudrudoduuooood", "ulduuorrdorlrrlrouorurrdulrroouoduuurrd", "rodlourdoolurrrrududrrrordorlruloruullo", "urrrouoooourulduourdddurouorrlrodrru", "ouuouououdrurduuododrodorludrodrrodo"],
"e3": ["rruouldolooouoodorrrordurrrrdrullullruu", "ddroluoorrrrldudluoodrlroooouorroolrldu", "dudrrddururoudlooluludorduooourduoldudo", "orooroulooororururduuuooooduurrrouuoodr", "ulorulrrrordolroourulrluruurrduolouoodl", "oodoruodudoorurruoduoooodurddroodrlolrr", "oourlorluorordroldoldodurrlududurdouulr", "rdrduuudoruuoruororrrdluluruudrlodrurdo", "oouodourlrrurrloddoodruuorlrududdrduoou", "luoruouoddooldroduluruuulrrddolodlooolu", "olurlourdol", "olrdououol"],
"w3": ["uuuouldolollorduouoddrdrurouudrloodrord", "ldroluoordlrurodoullururrrrloulroruuudo", "oddoduudlrrlulluuudodoodulrrdlolruduuur", "lduludrooruouluroruurldurdoroduuuldooru", "uoduddrulroordoouuuldodluldodduuourruro", "uouudrruuurollrduoududrurduoroduuorrroo", "urourourdudoouuorlouluddoruordoorrrooll", "ruodurrroooullourroodrdrulruluddrudurro", "urorrlorrrdlrododdurorlloloroo", "ooruruuoouluuorrlruodlorluullr"],
"e4": ["uououldolooouoooooouorudrdduroulruddood", "rdroluoorrrrldururldoldodoouuorodlruudo", "uouoolrrdruoodldooullrulrrlorrroodooorr", "dodluuorrdudrorloddorodorrrlluulrououlu", "uldrdldoourorlrrdouuodoudoroouoloodoudo", "ourddrloudludludorlludoulurlurrrrdoddrr", "rurrrruldudodorouduoruuduorrdoooduodrdr", "ldrdduluuodrlodroourruoduurldullourordu", "urrorlrdououduurdrrudod", "dlruruorrouoodrdodlodl"],
"w4": ["dououldolooouoooooouorudrddurouloolooor", "rdroluoorrrrldururldoldodoouuorrruudulr", "ruuduoruloouodrurrrluurldoouooudurrddud", "odorrurdoudrdouldoludlrodooodrddrlruulo", "oloruorlouodrorruorldoruouruodouroddrdr", "lorruuuodudrluruorulrlloduuurrorulduulu", "rolrddrluroddororddouolurolrluourrdruou", "duuuloduulrurdrurrluorloudrlloodorrullo", "rrlduluulolruruuululoudo", "ororduooooduooouoruloouu"],
"e5": ["uuuouldolooouoooooouorudrddurouldolludd", "ddroluoorrrrldururldoldodoouuoruuuurldo", "uourulrrddororloulullrurrrrrdorurrudrdd", "dodluuorrlouroroludoroorrlrlrorlodluror", "ouluuouuluoduuuouorlouuorolouoouduooudo", "ruuruuudouuolluruuuurlodluourroloolurud", "uoroluolurruudludouddoudrldouuolrouorru", "ororodoorrloouourollrduuolruuuulroduuor", "udurrlrrorrrolu", "rdrllruoudduldu"]
};

const diamond = document.getElementById("diamond");
const svgCloudsLeft = document.getElementById("svg-cloud-layer-l");
const svgCloudsRight = document.getElementById("svg-cloud-layer-r");
const mirrorLayer = document.getElementById("mirror-layer")
const rotatedMirrorLayer = document.getElementById("rotated-mirror-layer");
const customImageLayer = document.getElementById("custom-image-layer");
const messages = document.getElementById("messages");
const imgUploader = document.getElementById("image_uploads");
const layerSelector = document.getElementById('change-layer-selection');
const controls = document.getElementById('svg-layer-controls');
const controlsToggle = document.querySelectorAll('.controls-toggle');
const movableLayers = [diamond, svgCloudsLeft, mirrorLayer, rotatedMirrorLayer, customImageLayer];
const palates = {   basic: [ '#ff0000', '#0ff000', '#fff000', '#000ff0', '#ff00f0' ],
                    analogous: ['#ff7100','#ffa400','#ffd700','#f4ff00','#c1ff00'],
                    monochromatic: [ '#2a2400', '#554800', '#806c00', '#aa8f00', '#d4b300' ],
                    tetradic: [ '#ffffff', '#ffd700', '#00ff58', '#0028ff', '#ff00a7'] }
const eyeDirections = ['o','u','r','d','l'];
const eyeValueMap = (eyeVal) => ({'o':0, 'u':1, 'r':2, 'd':3, 'l':4}[eyeVal]);
const convertDirsToInts = (strArr) => strArr.split('').map(eye =>eyeValueMap(eye)).join('');
const userOrders = window.localStorage.getItem('eye-orders') || "e1 w1 e2 w2 e3 w3 e4 w4 e5";
const displayOrder = userOrders.trim().split(' ');
const moveKeys = { "ArrowUp": [-1,0], "ArrowDown": [1,0], "ArrowLeft": [0,-1], "ArrowRight": [0,1] }

let selectedForMovement = 0; 

const altars = document.getElementById("altars");
const drake = dragula([svgCloudsLeft]).on('drag', function (el) {
    messages.textContent = 'Dragging: ' + el.firstChild.ariaLabel;
}).on('drop', function (el) {
    messages.textContent = 'drop';
}).on('over', function (el, container, source) {
    
}).on('out', function (el, container) {
    let o = getCurrentOrder()
    messages.textContent = `New order:\n ${o}`;
});

// event handling - other controls

imgUploader.addEventListener("change", updateImageDisplay);

// KEYBOARD EVENT LISTENER
document.addEventListener("keydown", function(e) {
    if (e.key == 'l') changeSelectedLayer()     
    if (Object.keys(moveKeys).includes(e.key)) {
        e.preventDefault();
        moveDiv(moveKeys[e.key])}
});
function moveDiv(vh) {
    const $movable = movableLayers[selectedForMovement];
    console.log('trying to move movable:',$movable)
    let topVal = () => $movable.offsetTop
    let leftVal = () => $movable.offsetLeft
    if (vh[0] == -1) $movable.style.top = topVal() - 1 + 'px'
    if (vh[0] == 1) $movable.style.top = topVal() + 1 + 'px'
    if (vh[1] == -1) $movable.style.left = leftVal() - 1 + 'px'
    if (vh[1] == 1) $movable.style.left = leftVal() + 1 + 'px'
}
function toggleClass(parentClass, toggleClass) {
    document.querySelectorAll(parentClass)
        .forEach(el => el.classList.toggle(toggleClass))
}
function changeHandler(v, newVal) {
    console.log('changehandler key:', v,'val:', newVal||null )
    if (v == 'saveorder') saveOrder(getCurrentOrder())
    if (v == 'mirror-layer') toggleMirrorLayer(newVal) 
    if (v == 'rotated-mirror-layer') toggleRotatedMirroredLayer(newVal) 
    if (v == 'controls') controls.classList.toggle('hide')
    if (v == 'controls') toggleClass('.controls-toggle', 'hide')
    if (v == 'diamond') diamond.classList.toggle('show')
    if (v == 'altars') altars.classList.toggle('show')
    // if (v == 'trigramorder') toggleClass('.svg-cloud', 'hide-trigram-order')
    if (v == 'trigrams') toggleClass('.svg-cloud', 'hide-trigrams')  
    if (v == 'cloudnames') toggleClass('.svg-cloud', 'hide-cloudnames')    
    if (v == 'hide-eye-colors') toggleClass('.svg-cloud', 'hide-eye-colors')  
}


function setEyeColor(eyeDir, newColor, palate) {
    // TODO pretty wasteful but not problematic
    // alternative 1: JS modifies stylesheet.rules to override .o.u.r.d.l class's backgroundColor value 
    // alternative 2: hard code SVGs so JS can modify the source SVG colors
    document.querySelectorAll(`.${eyeDir}`).forEach(x => x.style.backgroundColor = newColor);
}

function setEyePalate(palateName) {
    if (!palateName) debugger; 
    else {
        // debugger;
     let colorInputs = document.getElementById('color-inputs')
        .querySelectorAll('input');
        console.log(' setEyePalate() name:', palateName);
    let colorsArr = palates[palateName]
    let colorInputsArr = Array.from(colorInputs)
    colorInputsArr.map((inputEl, i) => {
        inputEl.value = colorsArr[i];      
        setEyeColor(eyeDirections[i],colorsArr[i]);  
    })}
}


// procedural - parse eyeData, populating layerDiv with nine "eyeclouds" ordered by displayOrder 
function buildEyeArrangement(eyeData, displayOrder, layerDiv) {
    let eyeArrangementFrag = document.createDocumentFragment();
    let cloudCount = 0;
    // for each cloud name build & add cloud
    displayOrder.map((cloudName) => {
        let cloudWrapper = document.createElement("div");
        cloudWrapper.setAttribute('class', 'container');
        let cloudFrag = document.createDocumentFragment();
        let cloudDiv = document.createElement("div");
        // most initial states set here! 
        // let classes = `${cloudName} svg-cloud hide-colors hide-names hide-trigrams`;
        let classes = `${cloudName} svg-cloud hide-trigrams hide-eye-colors`;
        cloudDiv.setAttribute('aria-label', cloudName)
        cloudDiv.setAttribute('class', classes);        
        // for each cloud build every row
        let rowCount = 0;
        eyeData[cloudName].map(rowData => {
            let eyeCount = 0;
            let rowFrag = document.createDocumentFragment();
            let rowDiv = document.createElement("div");
            rowDiv.setAttribute('class', 'svg-cloud-row');
            // for each row of data, build row of eyes 
            rowData.split('').map((eyeDirection) => {
                let eyeWrap = document.createElement("span");
                eyeWrap.setAttribute('id', `cloud-${rowCount}_row-${rowCount}_eye-${eyeCount}`);
                eyeWrap.setAttribute('aria-label', eyeValueMap(eyeDirection));
                eyeWrap.innerHTML = `<div class="${eyeDirection}"></div><p></p>`
                rowFrag.appendChild(eyeWrap);
                eyeCount++;
            })
            rowDiv.appendChild(rowFrag);
            cloudFrag.appendChild(rowDiv);
            rowCount++;
        })
        cloudDiv.appendChild(cloudFrag);
        cloudWrapper.appendChild(cloudDiv);
        eyeArrangementFrag.appendChild(cloudWrapper);
        cloudCount++;
    });
    layerDiv.appendChild(eyeArrangementFrag);
    // TODO: move delegation up, combine listeners
    layerDiv.querySelectorAll('.svg-cloud').forEach(el => {
        el.addEventListener("mouseup", (e) => clickedCloud(e.currentTarget, e));
    });
    messages.innerHTML = `Loaded saved order<br>${getCurrentOrder()}`;
    setEyePalate('analogous');
}
function changedSelectedLayer(val) {
    selectedForMovement = val; 
    messages.innerHTML = `Layer selected: ${selectedForMovement}`;
}
function changeSelectedLayer(val) {
    layerSelector.selectedIndex = val;
    selectedForMovement = val; 
    messages.innerHTML = `Layer selected: ${selectedForMovement}`;
}
function cycleVMargin(el) {
let classes = Array.from(el.classList);
let state = classes.includes('overlap-top') ? 'top' : classes.includes('overlap-bottom') ? 'bottom' : false;
    if (!state) el.classList.toggle('overlap-top');
    if (state == 'top') {
        el.classList.toggle('overlap-top');
        el.classList.toggle('overlap-bottom');
    }
    if (state == 'bottom') el.classList.toggle('overlap-bottom')
}
function cycleHMargin(el) {
let classes = Array.from(el.classList);
let state = classes.includes('overlap-left') ? 'left' : classes.includes('overlap-right') ? 'right' : false;
    if (!state) el.classList.toggle('overlap-left');
    if (state == 'left') {
        el.classList.toggle('overlap-left');
        el.classList.toggle('overlap-right');
    }
    if (state == 'right') el.classList.toggle('overlap-right')
}



function clickedCloud(el, e) {
    if (e.shiftKey) cycleVMargin(el)
    else if (e.altKey) cycleHMargin(el)
    else rotateCloud(el);
}
// Rotate a cloud 1/4 turn
function rotateCloud(el) {
    let currentAngle = el.style['-webkit-transform']
    el.style.transform = (currentAngle === '') ? 'rotate(0.25turn)'
    : (currentAngle === 'rotate(0.25turn)') ? 'rotate(0.5turn)'
    : (currentAngle === 'rotate(0.5turn)') ? 'rotate(0.75turn)'
    : (currentAngle === 'rotate(0.75turn)') ? '' : console.error('rotation not matched');
}

const getCurrentOrder = (eyeLayer) => {
    let order = ''
    let layer = eyeLayer || svgCloudsLeft;
    layer.querySelectorAll('.svg-cloud').forEach(el => {
        order = order + ' ' + el.getAttribute('aria-label');
    })
    return order;
}

const saveOrder = () => {
    let order = getCurrentOrder();
    window.localStorage.setItem("eye-orders", order);
    messages.textContent = `Saved order to HTML5 local storage:\n ${order}`;
}

function toggleMirrorLayer(val) {
        let classes = Array.from(mirrorLayer.classList);
        if (classes.includes('cloned')) {
            if (val) {
                mirrorLayer.classList.add('show');
                changeSelectedLayer('2');
            } else mirrorLayer.classList.remove('show')
        } else {
            let newLayer = svgCloudsLeft.cloneNode(true)      
            newLayer.id = "svg-cloud-layer-r"
            svgCloudsRight.replaceWith(newLayer);  
            mirrorLayer.setAttribute('class','cloned show');
            changeSelectedLayer('2');
        }
}

function toggleRotatedMirroredLayer(val) {
    let classes = Array.from(rotatedMirrorLayer.classList);
    if (classes.includes('cloned')) {
        if (val) {
            rotatedMirrorLayer.classList.add('show');
            changeSelectedLayer('3');
        } else rotatedMirrorLayer.classList.remove('show');
    } else {
        let left = svgCloudsLeft.cloneNode(true);
        left.id = "svg-cloud-layer-l-m"; 
        let right = svgCloudsRight.cloneNode(true);
        right.id = "svg-cloud-layer-r-m";    
        rotatedMirrorLayer.appendChild(left);
        rotatedMirrorLayer.appendChild(right);
        rotatedMirrorLayer.setAttribute('class','cloned show');
        changeSelectedLayer('3');
    }
}


function readEyeData(eyeData) {
    let ret = {};
    let clouds = Object.keys(eyeData);
    clouds.map(cloudname => {
        let cloudDatArr = [];
        ret[cloudname] = {};
        eyeData[cloudname].map((rowString, i, arr) => {
            if (i%2) {
                let topRow = convertDirsToInts(arr[i - 1]).split('');
                let botRow = convertDirsToInts(rowString).split('');
                let trigramRow = topRow.flatMap((val, j) => {
                    let topVal = val;
                    let botVal = botRow[j];
                    if (!!botVal) {
                        return (!!topVal) ? [topVal, botVal] : [botVal];
                    } else 
                        return [topVal];
                    });
                    cloudDatArr = cloudDatArr.concat(trigramRow);
                }})
            ret[cloudname]['binary'] = cloudDatArr.map(eyeVal => {
                let bin = Number(eyeVal).toString(2).padStart(3,'0');
                if (!eyeVal) {
                    throw error;
                }
                return bin; 
            });
            ret[cloudname]['base5'] = cloudDatArr.join(',');
    })
    console.table(ret)
    return ret;
}

buildEyeArrangement(eyeData, displayOrder, svgCloudsLeft);
readEyeData(eyeData);




function returnFileSize(number) {
    if (number < 1024) {
      return `${number} bytes`;
    } else if (number >= 1024 && number < 1048576) {
      return `${(number / 1024).toFixed(1)} KB`;
    } else if (number >= 1048576) {
      return `${(number / 1048576).toFixed(1)} MB`;
    }
}


// https://developer.mozilla.org/en-US/docs/Web/Media/Formats/Image_types
const fileTypes = [ "image/apng", "image/bmp", "image/gif", "image/jpeg", "image/pjpeg", "image/png", "image/svg+xml", "image/tiff", "image/webp", "image/x-icon", ];
  
function validFileType(file) {
return fileTypes.includes(file.type);
}
function updateImageDisplay() {
    while (customImageLayer.firstChild) customImageLayer.removeChild(customImageLayer.firstChild);
    
    const curFiles = imgUploader.files;
    if (curFiles.length === 0) {
        const para = document.createElement("p");
        para.textContent = "No files currently selected for upload";
        customImageLayer.appendChild(para);
    } else {
        const list = document.createElement("ol");
        customImageLayer.appendChild(list);

        for (const file of curFiles) {
        const listItem = document.createElement("li");
        const para = document.createElement("p");
        if (validFileType(file)) {
            para.textContent = `File name ${file.name}, file size ${returnFileSize(
            file.size,
            )}.`;
            const image = document.createElement("img");
            // image.alt = image.title = file.name;
            image.src = URL.createObjectURL(file);


            listItem.appendChild(image);
            // listItem.appendChild(para);
            addMovableImage(customImageLayer);
            
        } else {
            para.textContent = `File name ${file.name}: Not a valid file type. Update your selection.`;
            listItem.appendChild(para);
        }

        list.appendChild(listItem);
    }
}
function addMovableImage(customImageLayer) {
    movableLayers.push(customImageLayer);
    let l = layerSelector.options.length;
    layerSelector.options[l] = new Option(`Uploaded Image ${l}`, l);
    selectedForMovement = l;
}

}
// Fetch all the details element.
const details = document.querySelectorAll("details");

// Add the onclick listeners.
details.forEach((targetDetail) => {
  targetDetail.addEventListener("click", () => {
    // Close all the details that are not targetDetail.
    details.forEach((detail) => {
      if (detail !== targetDetail) {
        detail.removeAttribute("open");
      }
    });
  });
}); 

// cloudarrangement = {    

//     e5: {o: 1, x: 0, y: 0, margins: 0, r: 0 },
//     w4: {o: 2, x: 0, y: 0, margins: -1, r: 0 },
//     e1: {o: 3, x: 0, y: 0, margins: 0, r: 0 },
//     e2: {o: 4, x: 0, y: 0, margins: 0, r: 0 },
//     e3: {o: 5, x: 0, y: 0, margins: 0, r: 0 },
//     e4: {o: 6, x: 0, y: 0, margins: 0, r: 0 },
//     w1: {o: 7, x: 0, y: 0, margins: 0, r: 0 },
//     w2: {o: 8, x: 0, y: 0, margins: 0, r: 0 },
//     w3: {o: 9, x: 0, y: 0, margins: 0, r: 0 },
//     }