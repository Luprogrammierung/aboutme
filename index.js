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
        var elem = document.querySelector('#third-page-Info');
        if(elem != null){
        
        elem.parentElement.removeChild(elem);
    }

        switch (element.innerText || element.textContent) {
            case 'Java':
                document.getElementById('third-page-Programming-Overlay').classList.add('active');
                document.getElementById('third-page-Programming-Headline').innerHTML = 'Java';
                document.getElementById('third-page-Programming-Content').innerHTML = 'Java was my first programming language, which I practiced for four years. I learned Java during my three years in the First Lego League team and started developing mini-games in Java. Later I participated at the BWINF twice and also started app development with Android studio. In my first semester, I learned a lot about working with streams and threads. I finished my programming internship in Java with a grade of 1.0 (converted US GPA ~ 4.0).'
                break;
            case 'Python':
                document.getElementById('third-page-Programming-Overlay').classList.add('active');
                document.getElementById('third-page-Programming-Headline').innerHTML = 'Python';
                document.getElementById('third-page-Programming-Content').innerHTML = 'I learned Python for implementing small scripts or servers, which I prepared for different use cases. Apart from developing scripts, I also got a basic understanding of the libraries Tensorflow and Keras for deep learning.'
                break;
            case 'C++/C':
                document.getElementById('third-page-Programming-Overlay').classList.add('active');
                document.getElementById('third-page-Programming-Headline').innerHTML = 'C++/C';
                document.getElementById('third-page-Programming-Content').innerHTML = 'I used C++ to compete in the IOI (International Olympiad in Informatics). The IOI is a competitive programming competition concentrating on problem-solving of algorithm nature. I especially learned more about runtime optimized programming in C++. I also learned C programming with a focus on parallel and OS programming as part of my college.'
                break;
            case 'Javascript':
                document.getElementById('third-page-Programming-Overlay').classList.add('active');
                document.getElementById('third-page-Programming-Headline').innerHTML = 'Javascript';
                document.getElementById('third-page-Programming-Content').innerHTML = 'I use Javascript for the back and front end of all my websites. With Node.js, I also created an express server for my website autouml.com. While programming with Javascript, I also gained a basic understanding of JQuery.'
                break;
            case 'Kotlin':
                document.getElementById('third-page-Programming-Overlay').classList.add('active');
                document.getElementById('third-page-Programming-Headline').innerHTML = 'Kotlin';
                document.getElementById('third-page-Programming-Content').innerHTML = 'Since I worked for Adesso SE, I developed multiple Kotlin apps for BMW. My main project was to include Alexa, gesture control, and gaze control in an Android application. I also worked on a data traffic tracking app, as well as an App for image generation. '
                break;
            case 'HTML/CSS': ;
                document.getElementById('third-page-Programming-Overlay').classList.add('active');
                document.getElementById('third-page-Programming-Headline').innerHTML = 'HTML/CSS';
                document.getElementById('third-page-Programming-Content').innerHTML = 'For two years I learn web development with HTML and CSS and obtained good knowledge about responsive web design with media queries. '
                break;
            case 'x86 Assembly': ;
                document.getElementById('third-page-Programming-Overlay').classList.add('active');
                document.getElementById('third-page-Programming-Headline').innerHTML = 'x86 Assembly';
                document.getElementById('third-page-Programming-Content').innerHTML = 'This semester I learned more about computer architecture, especially the Intel IA-32, which gave me a good overview of x86 assembly programming.'
                break;
            case 'C#':
                document.getElementById('third-page-Programming-Overlay').classList.add('active');
                document.getElementById('third-page-Programming-Headline').innerHTML = 'Flutter';
                document.getElementById('third-page-Programming-Content').innerHTML = 'I started developing my own App with Flutter to improve my skills in App development and get more knowledge about project management.';
                break;
            case 'Teamwork':
                document.getElementById('third-page-Other-Overlay').classList.add('active');
                document.getElementById('third-page-Other-Headline').innerHTML = 'Teamwork';
                document.getElementById('third-page-Other-Content').innerHTML = 'With my First Lego League team RoboGo, I won many prizes for our teamwork. Our most important success was winning the teamwork category at the semi-final in Regensburg.'
                break;
            case 'Coaching':
                document.getElementById('third-page-Other-Overlay').classList.add('active');
                document.getElementById('third-page-Other-Headline').innerHTML = 'Coaching';
                document.getElementById('third-page-Other-Content').innerHTML = "After my active time in the robotic team, I started coaching the current First Lego League team at my former school. Last year, I additionally coached the beginner's group and the WRO (World Robotic Olympiad) team at my former school."
                break;
            case 'Presentation':
                document.getElementById('third-page-Other-Overlay').classList.add('active');
                document.getElementById('third-page-Other-Headline').innerHTML = 'Presentation';
                document.getElementById('third-page-Other-Content').innerHTML = 'During my time in the robotic team, we presented our project to many different judges and also to many companies like Airbus, ASM, or QAware. With my "Jugenforscht" project, I learned to present the same project to many different groups like children, engineers, or teachers.'
                break;

            case 'Management':
                document.getElementById('third-page-Other-Overlay').classList.add('active');
                document.getElementById('third-page-Other-Headline').innerHTML = 'Management';
                document.getElementById('third-page-Other-Content').innerHTML = 'I gained my first experience in team management when I became the lead programmer in my First Lego League Team. Since then, I have had the opportunity to participate in various teams where I took on the responsibility of enhancing overall team performance. To improve my leadership skills, I joined the Siemens mentoring program, where Siemens executives assisted me in gaining further experience in team management.'
                break;

            case 'Design':
                document.getElementById('third-page-Other-Overlay').classList.add('active');
                document.getElementById('third-page-Other-Headline').innerHTML = 'Design';
                document.getElementById('third-page-Other-Content').innerHTML = 'For my designs, I use Adobe XD or Photoshop Express and the Adobe Creative Cloud. I also have experience in creating Powerpoint presentations.'
                break;

        }
    }
});