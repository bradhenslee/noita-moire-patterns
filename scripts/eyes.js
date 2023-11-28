// data from wiki, translated to text and removing the line end placeholders.
// ie, left-to-right, single file reading of the eyes, not trigrammed
const eyeData = [
// message 0, East 1
{ 
    cloudName:"e1", rows: [
    "rououdrrddololuudordruuldudoddoolorlooo",
    "odrolurroooulrrrlrurrrrouuooodroudluuud",
    "duorruolloooroouololoullulroddorrodlrlu",
    "rdudududooduudruroulrrduddulludlulluruu",
    "ouloodruruuludooluuuouoorlurluooloduoou",
    "olodduldrdluurruououoolourolurllrllrlor",
    "udddurroddouoduuduuuruuruodrrdul",
    "uduolrlrrludodoluuorodurdroldud"
    ]
}, { cloudName:"w1", rows: [
    "duuoudrrddololuudordruuldudoddoolorlool",
    "odrolurroooulrrrlrurrrrouuooodroudluuou",
    "ororouollooouololloloullulroddorrodludu",
    "uuurududooouuororoulrrduddulludlullulou",
    "rurrrddodrllooorldrduuuorrurduoduorrold",
    "lodldulourrruuudloruodouluddlurruddoudr",
    "orlulrrulrrrodorlroourdrurlordrdroulod",
    "duoudrruurudorodrrrroolrrduodudrrluud"
    ]}, { cloudName:"e2", rows: [
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
    ]}, { cloudName:"w2", rows: [
    "dououldolrduuuuudouodroouulruuulrolrull",
    "udroluoorlluroorrruluoudrloorrrrourolor",
    "uuouroruoollourorrouluoororudooudrlddur",
    "louudouurouodrrdudldulrrdudrudoduuooood",
    "ulduuorrdorlrrlrouorurrdulrroouoduuurrd",
    "rodlourdoolurrrrududrrrordorlruloruullo",
    "urrrouoooourulduourdddurouorrlrodrru",
    "ouuouououdrurduuododrodorludrodrrodo"
    ]}, { cloudName:"e3", rows: [
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
    ]}, { cloudName:"w3", rows: [
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
    ]}, { cloudName:"e4", rows: [
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
    ]}, { cloudName:"w4", rows: [
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
    ]}, { cloudName:"e5", rows: [
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
]}];

const eyeclouds = document.getElementById("eyeclouds");
const svgEyeArrangement = document.getElementById("svg-cloud-layer");
const svgclouds = document.getElementById("svgclouds");
const rightEyes = document.getElementById("eyecloud-right");
const leftEyes = document.getElementById("eyecloud-left");
const diamond = document.getElementById("diamond");
const altars = document.getElementById("altars");
const log = document.getElementById("log");
const drake = dragula([rightEyes, leftEyes], (x) => {
// console.log('drake is example name of dragula's api, will hook into drag events in these callbacks', x);
});

// make 9 clouds from data
eyeData.forEach((cloudData) => {
    let cloudFrag = document.createDocumentFragment();
    let cloudDiv = document.createElement("div");
    let classes = `${cloudData.cloudName} svg-cloud`
    cloudDiv.setAttribute('ariaLabel', cloudData.cloudName)
    cloudDiv.setAttribute('class', classes );
    
    // make rows of eyes & add to cloud 
    // for each row
    cloudData.rows.map((rowData) => {
        let rowFrag = document.createDocumentFragment();
        let rowDiv = document.createElement("div");              
        rowDiv.setAttribute('class', 'svg-cloud-row');
        // make an eye & add to row
        rowData.split('').map((eyeDirection) => {
            let eyeDiv = document.createElement("div");              
            eyeDiv.setAttribute('class', eyeDirection);            
            rowFrag.appendChild(eyeDiv);
        })
        rowDiv.appendChild(rowFrag);    
        cloudFrag.appendChild(rowDiv);
    })
    // cloudFrag.appendChild();
    cloudDiv.appendChild(cloudFrag)
    svgEyeArrangement.appendChild(cloudDiv);
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
