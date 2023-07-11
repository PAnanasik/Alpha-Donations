let btnSide = document.querySelector('#btnside');
let sidebar = document.querySelector('.sidebar');
let changeBtn = document.querySelector('.subtitle-change');
let lastChange = document.querySelector('.donate__last');
let editBtn = document.querySelector('.profile__info-change-btn')
let profileImg = document.querySelector('.profile__img');
let back = document.querySelector('.profile__back');
let input = document.querySelector('.profile__input');
let inp = document.querySelector('#donate__inp');
let purposeChange = document.querySelector('#purpose-change');
let purposeInp = document.querySelector('#purpose__input');


document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        sidebar.classList.remove('active');
        sidebar.classList.remove('toggle');
        document.getElementsByTagName('html')[0].style.overflowY = "hidden" ? '' : document.getElementsByTagName('html')[0].style.overflowY = "scroll"
        if (sidebar.classList.contains('active')) {
            document.body.append(filler);
        }
    
        else {
            filler.remove();
        }
    }
})

let filler = createFiller();
btnSide.onclick = function () {
    sidebar.classList.toggle('active');
    sidebar.classList.toggle('toggle');
    if (sidebar.classList.contains('active')) {
        document.body.append(filler);
    }
    else {
        filler.remove();
    }
};

changeBtn.onclick = () => {
    inp.disabled = !inp.disabled;
    !inp.disabled ? changeBtn.innerHTML = 'Сохранить' : changeBtn.innerHTML = 'Изменить';
}

purposeChange.onclick = () => {
    purposeInp.disabled = !purposeInp.disabled;
    !purposeInp.disabled ? purposeChange.innerHTML = 'Сохранить' : purposeChange.innerHTML = 'Изменить';
    var target = purposeInp;
    var rng, sel;
    if (!target.disabled) {
        rng = document.createRange();
        rng.selectNode(target)
        sel = window.getSelection();
        sel.removeAllRanges();
        sel.addRange(rng); 
    } 
}

editBtn.onclick = () => {
    var target = document.querySelector('.profile__nick');
    var rng, sel;
    target.disabled = !target.disabled;
    !target.disabled 
    ? editBtn.innerHTML = `<a href="#" class="profile__info-change-btn"><i class='bx bx-save' ></i>Сохранить</a>` 
    : editBtn.innerHTML = `<a href="#" class="profile__info-change-btn"><i class='bx bx-edit-alt'></i>Редактировать</a>`;
    if (!target.disabled) {
        rng = document.createRange();
        rng.selectNode(target)
        sel = window.getSelection();
        sel.removeAllRanges();
        sel.addRange(rng);
        target.style.border = '1px solid rgba(0, 0, 0, 0.4)';
        target.style.borderRadius = '4px';
        back.style.display = 'flex'; 

    } 
    else {
        target.style.border = '0';
        target.style.borderRadius = '0';
        back.style.display = 'none';
    }   
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
