let btnSide = document.querySelector('#btnside');
let sidebar = document.querySelector('.sidebar');
let diagramItems = document.querySelectorAll('.diagram__item');
let editButton = document.querySelector('#edit');   
let changingInput = document.querySelector("#changing__input");
let selectedItem = document.querySelector('.selected__item')


function getCoords(elem) {
    let box = elem.getBoundingClientRect();

    return {
        top: box.top + window.scrollY,
        bottom: box.bottom + window.scrollY,
        left: box.left + window.scrollX,
        right: box.right + window.scrollX
    };
}

function createMessage(elem, date, cash) {
    let message = document.createElement('div');
    message.classList.add('tooltip');

    function myFunction(x) {
        if (x.matches) {
            message.style.cssText = 
            `position: absolute; 
            color: #0e0e0e; 
            height: 30px;
            max-width: 55px;
            width: 100%; 
            background: #fff;
            font-size: 9px;
            box-shadow: 10px 5px 20px rgba(0, 0, 0, 0.1); 
            border-radius: 4px;
            text-align: center;`;
        }
        else {
            message.style.cssText = 
            `position: absolute; 
            color: #0e0e0e; 
            height: 38px;
            max-width: 90px;
            width: 100%; 
            background: #fff;
            font-size: 12px;
            box-shadow: 10px 5px 20px rgba(0, 0, 0, 0.1); 
            border-radius: 4px;
            text-align: center;`;
        }
    }
      
    let x = window.matchMedia("(max-width: 550px)")
    myFunction(x)
    x.addListener(myFunction)

    let coords = getCoords(elem);

    message.style.left = coords.left + "px";
    message.style.top = coords.top - 45 + "px";

    message.innerHTML = date + '<br>' + cash;
    return message;
}


function createFiller() {
    let elem = document.createElement('div');
    elem.style.position = 'fixed';
    elem.style.top = 0;
    elem.style.width = '100vw';
    elem.style.height = '100vh';
    elem.style.zIndex = '100';
    elem.style.background = 'rgba(0, 0, 0, 0.2)';
    return elem
}

for(let item of diagramItems) {
    let message = createMessage(item, '13.01.2021', '100000000Р');
    item.addEventListener('mouseover', function() {
        document.body.append(message);
    });
    item.addEventListener('mouseout', function() {
        message.remove()
    });
}

document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        sidebar.classList.remove('active');
        sidebar.classList.remove('toggle');
        document.getElementsByTagName('html')[0].style.overflowY = "hidden" ? '' : document.getElementsByTagName('html')[0].style.overflowY = "scroll"
        sidebar.classList.contains('active') ? document.body.append(filler) :  filler.remove()
    }
})

let filler = createFiller();
btnSide.onclick = function () {
    sidebar.classList.toggle('active');
    sidebar.classList.toggle('toggle');
    if (sidebar.classList.contains('active')) {
        document.body.append(filler);
        document.getElementsByTagName('html')[0].style.overflow = "hidden";
    }
    else {
        filler.remove();
        document.getElementsByTagName('html')[0].style.overflow = "scroll";
    }
};
