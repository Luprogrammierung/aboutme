const firstpage = document.getElementById('first-page');
const timeline = document.getElementById('second-page-Timeline');
const contentbox = document.getElementById('second-page-Contentbox');
const elementsleft = document.getElementsByClassName('container-left');
const elementsright = document.getElementsByClassName('container-right');
const elementscenter = document.getElementsByClassName('container-center');
const elementsall = document.getElementsByClassName('container');

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
    if (elementsleft.length > 1) {
        var heightleft = 0;
        var heightright = 70;
        for (var i = 0; i < elementsleft.length; i++) {
            elementsleft[i].style.top = heightleft + "px";
            heightleft = heightleft + parseInt(getComputedStyle(elementsleft[i]).marginBottom) + elementsleft[i].offsetHeight;
        }
        for (var i = 0; i < elementsright.length; i++) {
            elementsright[i].style.top = heightright + "px";
            heightright = heightright + parseInt(getComputedStyle(elementsright[i]).marginBottom) + elementsright[i].offsetHeight;
        }
        if (heightright > heightleft) {
            timeline.style.height = heightright + "px";
        }
        else {
            timeline.style.height = heightleft + "px"
        }
    }
    else {
        heightcenter = 0;
        for (var i = 0; i < elementscenter.length; i++) {
            elementscenter[i].style.top = heightcenter + "px";
            heightcenter = heightcenter + parseInt(getComputedStyle(elementscenter[i]).marginBottom) + elementscenter[i].offsetHeight;
        }
        timeline.style.height = heightcenter + "px"
    }
    contentbox.style.height = timeline.offsetHeight + timeline.offsetTop + "px";

}
function mobiledesign() {
    if (window.innerWidth < 700) {
        for (var i = 0; i < elementsall.length; i++) {
            elementsall[i].classList.add('container-center');
            elementsall[i].classList.remove('container-left');
            elementsall[i].classList.remove('container-right');
        }
    }
    else{
        for(var i=1;i<elementsall.length+1; i++){
            elementsall[i-1].classList.remove('container-center');
            if(i%2 ==0){
                elementsall[i-1].classList.add('container-right');
            }
            else{
                elementsall[i-1].classList.add('container-left');
            }
        }
    }
}

window.addEventListener('load', () => {
    mobiledesign();
    positionelements();
    gitlinkedadd();
    removeNewsbar();
});
window.addEventListener('resize', () => {
    console.log(elementsright);
    mobiledesign();
    positionelements();
    gitlinkedadd();
    removeNewsbar();
});