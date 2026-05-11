//zrob 5 przyciskuw i napis co oni rabam w ich nazwie, dajemy id button i zrob ich funkcuonal podbny do tego , tak zamo dla kazdego przyciwku powina byc 1 funkcija
const siteTitle = document.querySelector('h1');
const siteFooter = document.querySelector('.container>footer');
const changeBtn = documnet.querySelector('button');
console.log(changeBtn);

function chanTitle(){
    siteTitle.textContent = 'Model DOM';
    siteTitle.style.color = '#0f0';
    siteFooter.style.backgroundColor = '#f00';
}
siteFooter.style.color = '#00f';
changeBtn.addEventListener('click', chanTitle)