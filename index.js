const firstpage = document.getElementById('first-page')
function gitlinkedadd(){
    if(firstpage.clientHeight *4 > firstpage.clientWidth * 7){
        document.getElementById('first-page-Top').appendChild(document.getElementById('first-page-LinkedIn'));
        document.getElementById('first-page-Top').appendChild(document.getElementById('first-page-Github'));
    }
    if (document.getElementById('first-page-Top').contains(document.getElementById('first-page-LinkedIn'))&&
    document.getElementById('first-page-Top').contains(document.getElementById('first-page-Github'))){
    if(firstpage.clientHeight*4 < firstpage.clientWidth  * 7){
        document.getElementById('first-page').appendChild(document.getElementById('first-page-LinkedIn'));
        document.getElementById('first-page').appendChild(document.getElementById('first-page-Github'));
    }}
}
function removeNewsbar(){
    const newsbar = document.getElementById('first-page-News-Bar');
    console.log(newsbar.clientHeight < 50)
    if(newsbar.clientHeight < 50) {
        newsbar.style.visibility ='hidden';
    }
    else{
        newsbar.style.visibility = 'visible'
    }
}
removeNewsbar();
gitlinkedadd();
window.addEventListener('resize',() => {    
    gitlinkedadd();
    removeNewsbar();
});