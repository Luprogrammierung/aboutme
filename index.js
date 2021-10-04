const firstpage = document.getElementById('first-page');
const timeline = document.getElementById('second-page-Timeline');
const contentbox = document.getElementById('second-page-Contentbox');
const elementsleft = document.getElementsByClassName('container-left');
const elementsright = document.getElementsByClassName('container-right');
const elementscenter = document.getElementsByClassName('container-center');
const elementsall = document.getElementsByClassName('container');
const lines = document.getElementsByClassName('line');
const lineelementsleft = document.getElementsByClassName('line-elements-left');
const alltables = document.getElementsByClassName('table');


function gitlinkedadd() {
    if (window.innerHeight * 2 > window.innerWidth * 3) {
        document.getElementById('first-page-Top').appendChild(document.getElementById('first-page-LinkedIn'));
        document.getElementById('first-page-Top').appendChild(document.getElementById('first-page-Github'));
    }
    if (document.getElementById('first-page-Top').contains(document.getElementById('first-page-LinkedIn')) &&
        document.getElementById('first-page-Top').contains(document.getElementById('first-page-Github'))) {
        if (window.innerHeight * 2 <= window.innerWidth * 3) {
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
    else {
        for (var i = 1; i < elementsall.length + 1; i++) {
            elementsall[i - 1].classList.remove('container-center');
            if (i % 2 == 0) {
                elementsall[i - 1].classList.add('container-right');
            }
            else {
                elementsall[i - 1].classList.add('container-left');
            }
        }
    }
}
function positionlines() {
    var i = 0;
    for (var j = 0; j < alltables.length; j++) {
        var heightline = 0;
        for (i; i < lines.length; i++) {
            lines[i].style.top = heightline + "px";
            heightline = heightline + parseInt(getComputedStyle(lines[i]).marginBottom) + lines[i].offsetHeight;
            if (lines[i].style.borderBottom == "none" || lines[i].style.borderBottom == "medium none") {
                i++;
                break;
            }
        }
        alltables[j].style.height = heightline + "px";
    }
}

window.addEventListener('load', () => {
    mobiledesign();
    positionelements();
    positionlines();
    gitlinkedadd();
    removeNewsbar();
});
window.addEventListener('resize', () => {
    console.log(window.innerHeight);
        console.log(window.innerWidth);
    mobiledesign();
    positionelements();
    positionlines();
    gitlinkedadd();
    removeNewsbar();
});

document.getElementById('third-page-Programming-Close').onclick = function () {
    document.getElementById('third-page-Programming-Overlay').classList.remove('active')
}
document.getElementById('third-page-Other-Close').onclick = function () {
    document.getElementById('third-page-Other-Overlay').classList.remove('active')
}


Array.from(lineelementsleft).forEach(function (element) {
    element.onclick = function () {
        switch (element.innerHTML) {
            case 'Java':
                document.getElementById('third-page-Programming-Overlay').classList.add('active');
                document.getElementById('third-page-Programming-Headline').innerHTML = 'Java';
                document.getElementById('third-page-Programming-Content').innerHTML = 'Java was my first programming language which I practiced for four years. I learned Java during my three years in the First Lego League team and started developing mini-games in Java. Later I participated at the BWINF twice and also started App development with Android studio. Currently, I also learn more about Java at university.'
                break;
            case 'Python':
                document.getElementById('third-page-Programming-Overlay').classList.add('active');
                document.getElementById('third-page-Programming-Headline').innerHTML = 'Python';
                document.getElementById('third-page-Programming-Content').innerHTML = 'I use Python for implementing small algorithms which don not require much runtime. Apart from developing algorithms, I also got a basic understanding of the libraries Tensorflow and Keras for deep learning.'
                break;
            case 'C++':
                document.getElementById('third-page-Programming-Overlay').classList.add('active');
                document.getElementById('third-page-Programming-Headline').innerHTML = 'C++';
                document.getElementById('third-page-Programming-Content').innerHTML = 'I used C++ to compete in the IOI (International Olympiad in Informatics). The IOI is a competitive programming competition concentrating on problem-solving of algorithm nature. I especially learned more about runtime optimized programming in C++.'
                break;
            case 'Javascript':
                document.getElementById('third-page-Programming-Overlay').classList.add('active');
                document.getElementById('third-page-Programming-Headline').innerHTML = 'Javascript';
                document.getElementById('third-page-Programming-Content').innerHTML = 'I use Javascript for the back and front end of all my Websites. With Node js, I also created an express server, for my Website autouml.com. While programming with Javascript, I also gained a basic understanding of JQuery.'
                break;
            case 'HTML/CSS': ;
                document.getElementById('third-page-Programming-Overlay').classList.add('active');
                document.getElementById('third-page-Programming-Headline').innerHTML = 'HTML/CSS';
                document.getElementById('third-page-Programming-Content').innerHTML = 'This year I learned web development with HTML and CSS and obtained good knowledge about responsive web design with media queries. '
                break;
            case 'C#':
                document.getElementById('third-page-Programming-Overlay').classList.add('active');
                document.getElementById('third-page-Programming-Headline').innerHTML = 'C#';
                document.getElementById('third-page-Programming-Content').innerHTML = 'I just started learning C# a few weeks ago by reading the Microsoft documentation. Now I try to learn more about C# by programming my first desktop application.'
                break;
            case 'Teamwork':
                document.getElementById('third-page-Other-Overlay').classList.add('active');
                document.getElementById('third-page-Other-Headline').innerHTML = 'Teamwork';
                document.getElementById('third-page-Other-Content').innerHTML = 'With my First Lego League team RoboGo, I won many prizes for our Teamwork. Our most important success was winning the Teamwork category at the Semi-final in Regensburg.'
                break;
            case 'Coaching':
                document.getElementById('third-page-Other-Overlay').classList.add('active');
                document.getElementById('third-page-Other-Headline').innerHTML = 'Coaching';
                document.getElementById('third-page-Other-Content').innerHTML = 'After my active time at the robotic team, I started coaching the current First Lego League team at my former school. Last year, I additionally coached the beginner group and the WRO (World Robotic Olympiad) team at my former school. '
                break;
            case 'Presentation':
                document.getElementById('third-page-Other-Overlay').classList.add('active');
                document.getElementById('third-page-Other-Headline').innerHTML = 'Presentation';
                document.getElementById('third-page-Other-Content').innerHTML = 'During my time at the robotic team, we presented our project to many different judges and also to many companies like Airbus, ASM, or QAware. With my "Jugenforscht" project, I learned to present the same project to many different groups like children, engineers, or teachers.  '
                break;
            case 'Design':
                document.getElementById('third-page-Other-Overlay').classList.add('active');
                document.getElementById('third-page-Other-Headline').innerHTML = 'Design';
                document.getElementById('third-page-Other-Content').innerHTML = 'For my Designs, I use Adobe XD or Photoshop Express and the Adobe Creative Cloud. I also have experience in creating Powerpoint presentations.'
                break;

        }
    }
});