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


boutonFriend.addEventListener('click', (event) =>{
  
  for (let j = 1; j < imagesFriend.length; j++) {
  
    //console.log('maraine')
  
    if (imagesFriend[j].classList.contains('see-image-animation')) {
  
     
  
      imagesFriend[j].classList.remove('see-image-animation');
      imagesFriend[j].classList.add('hide-image-animation');
  
    } else {
      console.log('second block')
  
      imagesFriend[j].classList.remove('hide-image-animation');
      imagesFriend[j].classList.add('see-image-animation');
  
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
   
    imagesFamily[i].classList.toggle('second-family-animation')
  // imagesFamily[i].classList.toggle('hide-image-animation')
    
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
  
   imagesMaraine[j].classList.remove('see-image-animation');
   imagesMaraine[j].classList.add('hide-image-animation');
   
  } else {
    console.log('second block')
    
  imagesMaraine[j].classList.remove('hide-image-animation');
  imagesMaraine[j].classList.add('see-image-animation');
  
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
   
  } else {
    console.log('second block')
    
  imagesBeyouEliyou[k].classList.remove('hide-image-animation');
  imagesBeyouEliyou[k].classList.add('see-image-animation');
  
  }




  }
  
  
} )







