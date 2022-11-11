let btnSide = document.querySelector('#btnside');
let sidebar = document.querySelector('.sidebar');
let diagramItems = document.querySelectorAll('.diagram__item');

btnSide.onclick = function () {
    sidebar.classList.toggle('active');
    sidebar.classList.toggle('toggle');
};


for(let item of diagramItems) {
    item.addEventListener('mouseover', function() {
        this.classList.add('selected');
    });
    item.addEventListener('mouseout', function() {
        this.classList.remove('selected');
    });
}