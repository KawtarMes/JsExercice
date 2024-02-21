
///////////////////////////////////////////////////////////////////////////////////
monImage1 = document.querySelector('.img1')
monImage2 = document.querySelector('.img2')

// console.log(monImage1);
// console.log(monImage2);

// mouseover and mouseout or moeuseenter
    monImage1.addEventListener('mouseover', function() {
        monImage2.style.display="inline";
        monImage1.style.display='none';
    });

    monImage2.addEventListener('mouseout', function() { // j'utilise le mouse out de ma deuxieme image pour revenir à la premiere
        monImage2.style.display="none";
        monImage1.style.display='inline';
    });

// mtn ca fait comme le hover 

// deuxieme possibilité changer 
//faire la fx avec this. 
// image.addEventListener(mouseenter, function(){
// this.src='url de l'image';}) // avec this il prend l'element en quetsion
//


/////////////carrousel////////////////////

let images = ['assets/image1.jpg','assets/image2.jpg','assets/image3.jpg','assets/image4.jpg']

let displayCarrousel = document.querySelector('.carrousel');
let suiv = document.getElementById('suivant');
let pre = document.getElementById('precedent');

console.log(suiv)
console.log(pre)
console.log(displayCarrousel)
 let count = 1;
 

function changeImage(){
    displayCarrousel.src='assets/image'+ count +'.jpg'; // avec ça on a plus besoin d'utiliser le tableau
    if (count === 4 ){ // revenir à la première
        count=1;
    } else { // incrementer count de 1, passer à l'image suivante
        count++;
    }
};

setInterval(changeImage,1000); //


// je peux faire marcher les boutton au m temps aussi ou à la place de defilement automatique

suiv.addEventListener('click',function(){
    displayCarrousel.src='assets/image'+ count +'.jpg'
    if (count === 4){
        count =1; // quand on arrive à la derniere on se remet sur la premiere e giriamo
    }
    else{
        count++;
    }
})

pre.addEventListener('click',function(){
    displayCarrousel.src='assets/image'+ count +'.jpg'
    if (count === 1){
        count =4;
    } // quand il arrive à la premiere image revient à la 4eme donc on peut faire des tour all'infinito
    else{
        count--;
    }
})

