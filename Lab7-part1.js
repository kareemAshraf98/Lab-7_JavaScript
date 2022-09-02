//set my variables 
var sliderImag = Array.from(document.querySelectorAll('.slide-container img'));

var currntSlide = 1;

var slideNumber = document.getElementById('slideNumber');

var nextBtn = document.getElementById('next');
var prevBtn = document.getElementById('prev');

//Buttons clickable
nextBtn.onclick = nextSlide;
prevBtn.onclick = prevSlide;

//create un-ordered list for images
var pElement = document.createElement('ul');
//give the element id
pElement.setAttribute('id', 'p-ul');

// loop to create li-list for each image and give each one data-index/number and appended with ul
for(var i=1; i <= sliderImag.length; i++){
    var pItem = document.createElement('li');

    pItem.setAttribute('data-Num', i);

    pItem.appendChild(document.createTextNode(i));

    pElement.appendChild(pItem);
}
//create image/page number 
document.getElementById('indicator').appendChild(pElement);

var pCreateul = document.getElementById('p-ul');

//craete an array for listed images and move between images by clicking on img number
var pBullets = Array.from(document.querySelectorAll('#p-ul li'));

for(var i=0; i < pBullets.length; i++){

    pBullets[i].onclick = function(){

        currntSlide = parseInt(this.getAttribute('data-Num'));

        checker();
    }
}
//call checker function
checker();
// Next Button active and disabled if reach last image
function nextSlide(){
    if(nextBtn.classList.contains('disabled')){
        return false;

    }else{
        currntSlide++;
        checker();
    }
}
// previous Button active and disabled if reach fisrt image
function prevSlide(){
    if(prevBtn.classList.contains('disabled')){

        return false;
    }else {
        currntSlide--;
        checker();
    }
}
// check function of active and diabled buttons and bullets
function checker(){
    slideNumber.textContent =  + (currntSlide) + ' / ' + (sliderImag.length);

    removeActive();

    sliderImag[currntSlide - 1].classList.add('active');

    pCreateul.children[currntSlide - 1].classList.add('active');

    if(currntSlide == 1){

        prevBtn.classList.add('disabled');

    }else{

        prevBtn.classList.remove('disabled');

    }

    if(currntSlide == sliderImag.length){

        nextBtn.classList.add('disabled');

    }else {
        nextBtn.classList.remove('disabled');
    }
}

// remove function to active state of images and bullets
function removeActive() {
    sliderImag.forEach(function (imgs){
        imgs.classList.remove('active');
    });

    pBullets.forEach(function (bullet){
        bullet.classList.remove('active');
    });
}