let btnSide = document.querySelector('#btnside');
let sidebar = document.querySelector('.sidebar');

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


const links = document.querySelectorAll('#link')

function detectPage() {
    for(let item of links) {
        if ((document.URL.includes(`${item.getAttribute('href')}`))) {
            item.parentNode.style.background = "rgba(255, 255, 255, 0.2)";
            console.log(item.style.background)
        }
    }
}

detectPage();


