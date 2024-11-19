console.log('Hello World!');
// friends
const imagesFriend = document.querySelectorAll('section div.friend img'); 
const boutonFriend = document.querySelector('section div.friend .bouton'); 
// family
const imagesFamily = document.querySelectorAll('section div.family img'); 
const boutonFamily = document.querySelector('section div.family .bouton-family'); 
// maraine
const imagesMaraine = document.querySelectorAll('section div.maraine img');
const boutonMaraine = document.querySelector('section div.maraine .bouton-maraine');

// Beyou and Eliyou 

const imagesBeyouEliyou = document.querySelectorAll('section div.beyou-eliyou img');
const boutonBeyouEliyou = document.querySelector('section div.beyou-eliyou .bouton-beyou-eliyou');
// my beyou
const imagesBeyou = document.querySelectorAll('section div.beyou img');
const boutonBeyou = document.querySelector('section div.beyou .bouton-beyou');


boutonFriend.addEventListener('click', (event) =>{
  
  for (let j = 1; j < imagesFriend.length; j++) {
  
    //console.log('maraine')
  
    if (imagesFriend[j].classList.contains('see-image-animation')) {
  
     
  
      imagesFriend[j].classList.remove('see-image-animation');
      imagesFriend[j].classList.add('hide-image-animation');
      event.target.textContent="voir plus"
    } else {
      console.log('second block')
      
      imagesFriend[j].classList.remove('hide-image-animation');
      imagesFriend[j].classList.add('see-image-animation');
       event.target.textContent="voir moins"
    }
  
  
  
  
  }
//  event.target.

console.log('my bouton')
} )



// for the family 

//console.log('bouton family', imagesFamily)
const listClass = ['image-family-1','image-family-2','image-family-3']
const listClassAnimation = ['first-family-animation','second-family-animation','third-family-animation']
boutonFamily.addEventListener('click', (event) => {
  event.preventDefault()
  
  for (let i = 1; i < imagesFamily.length; i++) {
   
    imagesFamily[i].classList.toggle(listClass[i])
  // imagesFamily[i].classList.toggle('hide-image-animation')
  //  console.log('image family',imagesFamily[i])
    // Tab to edit
  }
  
  
})


// piura ma maraine


boutonMaraine.addEventListener('click', (event) =>{
 // console.log('maraine')
  for (let  j = 1; j<imagesMaraine.length; j++) {

//console.log('maraine')

  if (imagesMaraine[j].classList.contains('see-image-animation')) {
  
 console.log('maraine')
   //event.target.textContent="voir moins"
   imagesMaraine[j].classList.remove('see-image-animation');
   imagesMaraine[j].classList.add('hide-image-animation');
   event.target.textContent="voir plus"
  } else {
    console.log('second block')
    
  imagesMaraine[j].classList.remove('hide-image-animation');
  imagesMaraine[j].classList.add('see-image-animation');
  event.target.textContent="voir moins"
  }




  }
  
  
  
  
} )



boutonBeyouEliyou.addEventListener('click', (event) =>{
  
    for (let  k = 1; k<imagesBeyouEliyou.length; k++) {

//console.log('maraine')

  if (imagesBeyouEliyou[k].classList.contains('see-image-animation')) {
  
 console.log('Beyou Eliyou')
  
   imagesBeyouEliyou[k].classList.remove('see-image-animation');
   imagesBeyouEliyou[k].classList.add('hide-image-animation');
   event.target.textContent="voir plus"
  } else {
    console.log('second block')
    
  imagesBeyouEliyou[k].classList.remove('hide-image-animation');
  imagesBeyouEliyou[k].classList.add('see-image-animation');
  event.target.textContent="voir moins"
  }




  }
  
  
} )



// create generator function 

function *imagesElement() {
  yield imagesBeyou[0];
  yield imagesBeyou[1];
  yield imagesBeyou[2];

}

function *callEmagesElement() {
  while (true) {
    yield* imagesElement();
  
  }
}


let  persons = callEmagesElement()
let zindex = 1
boutonBeyou.addEventListener('click', (event) =>{
   zindex=zindex+3;
 // console.log(zindex)
let personsName =  persons.next().value;
//const style=imagesBeyou[0].style
  // console.log('Personnes: ',personsName)
   personsName.style.position="absolute"
   personsName.style.zIndex=zindex;
 // console.log('imagesBeyou', imagesBeyou[0].style)
  
  
  /*
    for (let  a = 1; a<imagesBeyou.length; a++) {

console.log('my beyou')

  
  


  }
  */
  
} )






