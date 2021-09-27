const firstpage = document.getElementById('first-page');
const elementsleft = document.getElementsByClassName('container-left');
const elementsright = document.getElementsByClassName('container-right');
const timeline = document.getElementById('second-page-Timeline');
const contentbox = document.getElementById('second-page-Contentbox');

function gitlinkedadd() {
    if (firstpage.clientHeight * 4 > firstpage.clientWidth * 7) {
        document.getElementById('first-page-Top').appendChild(document.getElementById('first-page-LinkedIn'));
        document.getElementById('first-page-Top').appendChild(document.getElementById('first-page-Github'));
    }
    if (document.getElementById('first-page-Top').contains(document.getElementById('first-page-LinkedIn')) &&
        document.getElementById('first-page-Top').contains(document.getElementById('first-page-Github'))) {
        if (firstpage.clientHeight * 4 < firstpage.clientWidth * 7) {
            document.getElementById('first-page').appendChild(document.getElementById('first-page-LinkedIn'));
            document.getElementById('first-page').appendChild(document.getElementById('first-page-Github'));
        }
    }
}
function removeNewsbar() {
    const newsbar = document.getElementById('first-page-News-Bar');
    if (newsbar.clientHeight < 50) {
        newsbar.style.visibility = 'hidden';
    }
    else {
        newsbar.style.visibility = 'visible';
    }
}
function positionelements() {
    var heightleft = 0;
    var heightright = elementsright[0].offsetTop;
    console.log(elementsright[0].style.top);
    for (var i = 0; i < elementsleft.length; i++) {
        elementsleft[i].style.top = heightleft + "px";
        console.log(parseInt(getComputedStyle(elementsleft[i]).marginBottom) + elementsleft[i].offsetHeight)
        heightleft = heightleft + parseInt(getComputedStyle(elementsleft[i]).marginBottom) + elementsleft[i].offsetHeight;
    }
    for (var i = 0; i < elementsright.length; i++) {
        elementsright[i].style.top = heightright + "px";
        console.log(parseInt(heightright));
        heightright = heightright + parseInt(getComputedStyle(elementsright[i]).marginBottom) + elementsright[i].offsetHeight;
    }
    if(heightright>heightleft){
        timeline.style.height = heightright + "px";
    }
    else{
        timeline.style.height = heightleft + "px"
    }
    console.log(timeline.offsetHeight + timeline.offsetTop);
    contentbox.style.height = timeline.offsetHeight + timeline.offsetTop + "px"  ;

}

window.addEventListener('load', () => {
    positionelements();
    gitlinkedadd();
    removeNewsbar();
});
window.addEventListener('resize', () => {
    positionelements();
    gitlinkedadd();
    removeNewsbar();
});