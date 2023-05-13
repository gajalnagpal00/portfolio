//Internal Links Scroll Effect

var navAnchor = document.getElementsByClassName('cancelanchor');

for (let i=0; i<navAnchor.length; i++){
    navAnchor[i].addEventListener('click', function(event){
        event.preventDefault();
        var targetsectionId = this.textContent.trim().toLowerCase();
        if(targetsectionId == 'home')
            return;
        var targetsection = document.getElementById(targetsectionId);
        // var targetCoordinates = targetsection.getBoundingClientRect();
        var interval = setInterval(function(){
            var targetCoordinates = targetsection.getBoundingClientRect();
            if(targetCoordinates.top <= 0){
                clearInterval(interval);
                return;
            }
            window.scrollBy(0,50);
        }, 20);
    });
}


//Skill bars autofill

var progressBars = document.querySelectorAll('.skill-progress>div');
var skillConainer = document.getElementById('skill-container');
window.addEventListener('scroll', checkScroll);
// var animationDone = false;
var animationDone = [];
for(let i=0; i<progressBars.length; i++){
    animationDone.push(false);
}

function initializeBars(){
    for(var bar of progressBars){
        bar.style.width = 0 + '%';
    }
};

function initializeBars(bar){
    bar.style.width = 0 + '%';
}

initializeBars();

function fillBars(){
    for(let bar of progressBars){
        let barwidth = parseInt(bar.getAttribute('data-bar-width'));
        let currbarwidth = 0;
        var id = setInterval(function(){
            if (currbarwidth == barwidth){
                clearInterval(id);
                return;
            }
            currbarwidth++;
            bar.style.width = currbarwidth + '%';
        }, 5)
    }
}

function fillBars(bar){
    let barwidth = parseInt(bar.getAttribute('data-bar-width'));
    let currbarwidth = 0;
    var id = setInterval(function(){
        if (currbarwidth == barwidth){
            clearInterval(id);
            return;
        }
        currbarwidth++;
        bar.style.width = currbarwidth + '%';
    }, 5)
    
}

function checkScroll(){
    // var coordinates = skillConainer.getBoundingClientRect();
    // if(!animationDone && (coordinates.top <= window.innerHeight && coordinates.top + coordinates.height >= 0)){
    //     fillBars();
    //     animationDone = true;
    // }
    // if(coordinates.top > window.innerHeight || coordinates.top + coordinates.height < 0){
    //     animationDone = false;
    //     initializeBars();
    // }

    for(let i = 0; i<progressBars.length; i++){
        let bar = progressBars[i];
        let coordinates = bar.getBoundingClientRect();
        if(!animationDone[i] && (coordinates.top <= window.innerHeight && coordinates.top + coordinates.height >= 0)){
            fillBars(bar);
            animationDone[i] = true;
        }
        if(coordinates.top > window.innerHeight || coordinates.top + coordinates.height < 0){
            animationDone[i] = false;
            initializeBars(bar);
        }
    }
}