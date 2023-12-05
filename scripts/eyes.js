// data from wiki, translated to text and removing the line end placeholders.
// ie, left-to-right, single file reading of the eyes, not trigrammed
const eyeData = {
    "e1": [
        "rououdrrddololuudordruuldudoddoolorlooo",
        "odrolurroooulrrrlrurrrrouuooodroudluuud",
        "duorruolloooroouololoullulroddorrodlrlu",
        "rdudududooduudruroulrrduddulludlulluruu",
        "ouloodruruuludooluuuouoorlurluooloduoou",
        "olodduldrdluurruououoolourolurllrllrlor",
        "udddurroddouoduuduuuruuruodrrdul",
        "uduolrlrrludodoluuorodurdroldud"
    ], "w1": [
    // "e1": [
    //     "rououdrrddololuudordruuldudoddoolorlooo",
    //     "odrolurroooulrrrlrurrrrouuooodroudluuud",
    //     "duorruolloooroouololoullulroddorrodlrlu",
    //     "rdudududooduudruroulrrduddulludlulluruu",
    //     "ouloodruruuludooluuuouoorlurluooloduoou",
    //     "olodduldrdluurruououoolourolurllrllrlor",
    //     "udddurroddouoduuduuuruuruodrrdul",
    //     "uduolrlrrludodoluuorodurdroldud"
    // ], "w1": [
        "duuoudrrddololuudordruuldudoddoolorlool",
        "odrolurroooulrrrlrurrrrouuooodroudluuou",
        "ororouollooouololloloullulroddorrodludu",
        "uuurududooouuororoulrrduddulludlullulou",
        "rurrrddodrllooorldrduuuorrurduoduorrold",
        "lodldulourrruuudloruodouluddlurruddoudr",
        "orlulrrulrrrodorlroourdrurlordrdroulod",
        "duoudrruurudorodrrrroolrrduodudrrluud"
    ], "e2": [
        "uruoudrrddololuudordruuldudoddoolorlool",
        "udrolurroooulrrrlrurrrrouuooodroudluudr",
        "doroudrdoollruouldoourululoduuorluolrrd",
        "uorlluuudrrrrdulodddoudorduouodrrllulrr",
        "ouluudodoulluororoduuuulrluodlrdrudruur",
        "uluurouroolouodorrurrloroloooouodrruolo",
        "oouudrruoolrrduoldrlrouduodouoroodoorru",
        "oroulrrloduroduddorduooouodduolluroulrr",
        "odlrouolduouuooroourl",
        "udulororrorouludrrduu"
    ], "w2": [
        "dououldolrduuuuudouodroouulruuulrolrull",
        "udroluoorlluroorrruluoudrloorrrrourolor",
        "uuouroruoollourorrouluoororudooudrlddur",
        "louudouurouodrrdudldulrrdudrudoduuooood",
        "ulduuorrdorlrrlrouorurrdulrroouoduuurrd",
        "rodlourdoolurrrrududrrrordorlruloruullo",
        "urrrouoooourulduourdddurouorrlrodrru",
        "ouuouououdrurduuododrodorludrodrrodo"
    ], "e3": [
        "rruouldolooouoodorrrordurrrrdrullullruu",
        "ddroluoorrrrldudluoodrlroooouorroolrldu",
        "dudrrddururoudlooluludorduooourduoldudo",
        "orooroulooororururduuuooooduurrrouuoodr",
        "ulorulrrrordolroourulrluruurrduolouoodl",
        "oodoruodudoorurruoduoooodurddroodrlolrr",
        "oourlorluorordroldoldodurrlududurdouulr",
        "rdrduuudoruuoruororrrdluluruudrlodrurdo",
        "oouodourlrrurrloddoodruuorlrududdrduoou",
        "luoruouoddooldroduluruuulrrddolodlooolu",
        "olurlourdol",
        "olrdououol"
    ], "w3": [
        "uuuouldolollorduouoddrdrurouudrloodrord",
        "ldroluoordlrurodoullururrrrloulroruuudo",
        "oddoduudlrrlulluuudodoodulrrdlolruduuur",
        "lduludrooruouluroruurldurdoroduuuldooru",
        "uoduddrulroordoouuuldodluldodduuourruro",
        "uouudrruuurollrduoududrurduoroduuorrroo",
        "urourourdudoouuorlouluddoruordoorrrooll",
        "ruodurrroooullourroodrdrulruluddrudurro",
        "urorrlorrrdlrododdurorlloloroo",
        "ooruruuoouluuorrlruodlorluullr"
    ], "e4": [
        "uououldolooouoooooouorudrdduroulruddood",
        "rdroluoorrrrldururldoldodoouuorodlruudo",
        "uouoolrrdruoodldooullrulrrlorrroodooorr",
        "dodluuorrdudrorloddorodorrrlluulrououlu",
        "uldrdldoourorlrrdouuodoudoroouoloodoudo",
        "ourddrloudludludorlludoulurlurrrrdoddrr",
        "rurrrruldudodorouduoruuduorrdoooduodrdr",
        "ldrdduluuodrlodroourruoduurldullourordu",
        "urrorlrdououduurdrrudod",
        "dlruruorrouoodrdodlodl"
    ], "w4": [
        "dououldolooouoooooouorudrddurouloolooor",
        "rdroluoorrrrldururldoldodoouuorrruudulr",
        "ruuduoruloouodrurrrluurldoouooudurrddud",
        "odorrurdoudrdouldoludlrodooodrddrlruulo",
        "oloruorlouodrorruorldoruouruodouroddrdr",
        "lorruuuodudrluruorulrlloduuurrorulduulu",
        "rolrddrluroddororddouolurolrluourrdruou",
        "duuuloduulrurdrurrluorloudrlloodorrullo",
        "rrlduluulolruruuululoudo",
        "ororduooooduooouoruloouu"
    ], "e5": [
        "uuuouldolooouoooooouorudrddurouldolludd",
        "ddroluoorrrrldururldoldodoouuoruuuurldo",
        "uourulrrddororloulullrurrrrrdorurrudrdd",
        "dodluuorrlouroroludoroorrlrlrorlodluror",
        "ouluuouuluoduuuouorlouuorolouoouduooudo",
        "ruuruuudouuolluruuuurlodluourroloolurud",
        "uoroluolurruudludouddoudrldouuolrouorru",
        "ororodoorrloouourollrduuolruuuulroduuor",
        "udurrlrrorrrolu",
        "rdrllruoudduldu"
    ]
};
const messages =  document.getElementById("messages");
const svgCloudsLeft = document.getElementById("svg-cloud-layer-l");
const svgCloudsRight = document.getElementById("svg-cloud-layer-r");
const diamond = document.getElementById("diamond");
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

const form = document.querySelector("form");
const btnSaveOrder = document.getElementById("save-order");
const btnAddLayer = document.getElementById("add-layer");
const btnAddMirroredLayer = document.getElementById("add-mirrored-layer");
const userOrders = window.localStorage.getItem('eye-orders') || "e1 w1 e2 w2 e3 w3 e4 w4 e5";
const displayOrder = userOrders.trim().split(' ');

document.addEventListener("keydown", function(e) {
    if (Object.keys(moveKeys).includes(e.key)) {
        e.preventDefault();
        moveDiv(moveKeys[e.key])}
});
function moveDiv(vh) {
    let el = document.getElementById('diamond');
    let top = el.offsetTop
    let left = el.offsetLeft
    if (vh[0] == -1) el.style.top = top - 1 + 'px'
    if (vh[0] == 1) el.style.top = top + 1 + 'px'
    if (vh[1] == -1) el.style.left = left - 1 + 'px'
    if (vh[1] == 1) el.style.left = left + 1 + 'px'
}

btnSaveOrder.addEventListener("click", () => saveOrder(getCurrentOrder()) )
btnAddLayer.addEventListener("click", () => addLayer() )
btnAddMirroredLayer.addEventListener("click", () => addMirroredLayer() )
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
// parse data in custom order by cloud name as key 
function buildEyeArrangement(eyeData, displayOrder, layerDiv) {
    let eyeArrangementFrag = document.createDocumentFragment();
    let cloudCount = 0;
    // for each cloud name build & add cloud
    displayOrder.map((cloudName) => {
        let cloudWrapper = document.createElement("div");
        cloudWrapper.setAttribute('class', 'container');
        let cloudFrag = document.createDocumentFragment();
        let cloudDiv = document.createElement("div");
        let classes = `${cloudName} svg-cloud`;
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
    // Mouse handler
    // eyes.addEventListener("contextmenu", ( e )=> { e.preventDefault(); return false; } ); 
    layerDiv.querySelectorAll('.svg-cloud').forEach(el => {
        el.addEventListener("mouseup", (e) => { 
            // if (e.altKey) rotateCloud(e.currentTarget, e); 
            rotateCloud(e.currentTarget, e); 
        });
    });   

    messages.textContent = `Loaded saved order:\n ${getCurrentOrder()}`;
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
    messages.textContent = `saved order:\n ${order}`;
}

function addLayer() {
    let newLayer = svgCloudsLeft.cloneNode(true)      
    newLayer.id = "svg-cloud-layer-r" 
    svgCloudsRight.replaceWith(newLayer);    
}
function addMirroredLayer() {
    let left = svgCloudsLeft.cloneNode(true);
    let right = svgCloudsRight.cloneNode(true);
    left.id = "svg-cloud-layer-l-m"; 
    right.id = "svg-cloud-layer-r-m";    
    svgCloudsLeft.parentElement.appendChild(left);
    svgCloudsLeft.parentElement.appendChild(right);
}
buildEyeArrangement(eyeData, displayOrder, svgCloudsLeft);
readEyeData(eyeData);


const moveKeys = {
    "ArrowUp": [-1,0],
    "ArrowDown": [1,0],
    "ArrowLeft": [0,-1],
    "ArrowRight": [0,1]
    }

function convertDirsToInts (str) { 
    return str.replaceAll('o',0).replaceAll('u',1).replaceAll('r',2).replaceAll('d',3).replaceAll('l',4); 

}

function readEyeData(eyeData) {
    let ret = {};
    let clouds = Object.keys(eyeData);
    clouds.map((cloudname, cloudNumber) => {
        let cloudDatArr = [];
        eyeData[cloudname].map((rowString, i, arr) => {
            if (i%2) {
                // debugger;
                // get 2 rows at a time to read full trigrams
                let topRow = convertDirsToInts(arr[i - 1]).split('');
                let botRow = convertDirsToInts(rowString).split('');
                let flat = topRow.flatMap((val, j) => [val, botRow[j]]);
                cloudDatArr = cloudDatArr.concat(flat);
                
                // console.log("DATA:", i, topRow, botRow, cloudDatArr, ret)
            }})
            ret[cloudname] = cloudDatArr.join('');
        }
    )
    console.table(ret)
    // console.log(ret)
    return ret;
}
    


