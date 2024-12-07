//import './style.css';
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

//const imagesBeyouEliyou = document.querySelectorAll('section div.beyou-eliyou img');
const boutonBeyouEliyou = document.querySelector('section div.beyou-eliyou .bouton-beyou-eliyou');
const boutonIndivBeyouEliyou = document.querySelector('.section-beyou-eliyou div button');
// my beyou
const imagesBeyou = document.querySelectorAll('section div.beyou img');
const boutonBeyou = document.querySelector('section div.beyou .bouton-beyou');

// les onglets de navigation 
const onglets = document.querySelectorAll('header .container-header nav ul li a');
const sections= document.querySelectorAll('section');

//for friends

const urlImagesFriends = ['images/friend_2.webp', 'images/friend_3.webp', 'images/friend_4.webp', 'images/friend_5.webp','images/friend_6.webp','images/friend_7.webp','images/friend_8.webp','images/friend_9.webp','images/friend_10.webp','images/friend_11.webp','images/friend_12.webp','images/friend_13.webp']
let currentIndexFriends = 0;
const batchSizeFriends = 3;

boutonFriend.addEventListener('click', (event) =>{
  event.preventDefault();
  

const sliceImageFriends = urlImagesFriends.slice(currentIndexFriends, currentIndexFriends + batchSizeFriends)
  if (currentIndexFriends < urlImagesFriends.length) {
    sliceImageFriends.forEach((imageFriends) => {
      const createImgFriends = document.createElement('img');
      createImgFriends.classList.add('image-friends')
      createImgFriends.src = imageFriends;
      createImgFriends.alt = imageFriends;
  
      createImgFriends.classList.add('see-image-animation');
      boutonFriend.insertAdjacentElement('beforebegin', createImgFriends)
  
  
    })
  
  
  
    currentIndexFriends += batchSizeFriends
    if (currentIndexFriends >= urlImagesFriends.length) {
      event.target.textContent = "voir moins"
      event.target.style.color='red'
    }
  
  
  } else {
  
    const imagesFriends = document.querySelectorAll('section div.friend .image-friends');
    imagesFriends.forEach((img) => {
  
      if (img.classList.contains('see-image-animation')) {
        img.classList.toggle('see-image-animation');
        img.classList.toggle('hide-image-animation');
        event.target.textContent = "voir plus"
        event.target.style.color='lightseagreen'
  
      } else {
        img.classList.toggle('see-image-animation');
        img.classList.toggle('hide-image-animation');
        event.target.textContent = "voir moins"
        event.target.style.color='red'
      }
  
    })
  
  
  
  
  }
  



} )



// for the family 

//console.log('bouton family', imagesFamily)
const listClass = ['image-family-1','image-family-2','image-family-3']
const listClassAnimation = ['first-family-animation','second-family-animation','third-family-animation']
boutonFamily.addEventListener('click', (event) => {
  event.preventDefault()
  
  for (let i = 1; i < imagesFamily.length; i++) {
   
    imagesFamily[i].classList.toggle(listClass[i])

  }
  
  
})


// piura ma maraine
const urlImagesMaraine = ['images/maraine_2.webp', 'images/maraine_5.webp', 'images/maraine_4.webp', 'images/maraine_1.webp']
let currentIndexMaraine = 0;
const batchSizeMaraine = 2;

boutonMaraine.addEventListener('click', (event) =>{
event.preventDefault();

  const sliceImageMaraine = urlImagesMaraine.slice(currentIndexMaraine, currentIndexMaraine + batchSizeMaraine)
  if (currentIndexMaraine < urlImagesMaraine.length) {
    sliceImageMaraine.forEach((imageMaraine) => {
      const createImgMaraine = document.createElement('img');
      createImgMaraine.classList.add('image-maraine')
      createImgMaraine.src = imageMaraine;
      createImgMaraine.alt = imageMaraine;
  
      createImgMaraine.classList.add('see-image-animation');
      boutonMaraine.insertAdjacentElement('beforebegin', createImgMaraine)
  
  
    })
  
  
  
    currentIndexMaraine += batchSizeMaraine
    if (currentIndexMaraine >= urlImagesMaraine.length) {
      event.target.textContent = "voir moins"
      event.target.style.color='red'
    }
  
  
  } else {
  
    const imagesMaraine = document.querySelectorAll('section div.maraine .image-maraine');
    imagesMaraine.forEach((img) => {
  
      if (img.classList.contains('see-image-animation')) {
        img.classList.toggle('see-image-animation');
        img.classList.toggle('hide-image-animation');
        event.target.textContent = "voir plus"
        event.target.style.color='lightseagreen'
  
      } else {
        img.classList.toggle('see-image-animation');
        img.classList.toggle('hide-image-animation');
        event.target.textContent = "voir moins"
        event.target.style.color='red'
      }
  
    })
  
  
  
  
  }
  
  
  
} )




// pour beyou et Eliyou

const urlImagesBeyouEliyou = ['images/beyou_eliyou_1.webp','images/beyou_eliyou_2.webp','images/beyou_eliyou_4.webp','images/beyou_eliyou_7.webp','images/beyou_eliyou_6.webp','images/beyou_eliyou_5.webp']
let currentIndexBeyouEliyou = 0;
const batchSizeBeyouEliyou = 3;

boutonBeyouEliyou.addEventListener('click', (event) =>{

  const sliceImageBeyouEliyou = urlImagesBeyouEliyou.slice(currentIndexBeyouEliyou, currentIndexBeyouEliyou+batchSizeBeyouEliyou)
  if (currentIndexBeyouEliyou<urlImagesBeyouEliyou.length) {
    sliceImageBeyouEliyou.forEach((imageBeyouEliyou) => {
      const createImgBeyouEliyou = document.createElement('img');
      createImgBeyouEliyou.classList.add('image-beyou-eliyou')
      createImgBeyouEliyou.src = imageBeyouEliyou
      createImgBeyouEliyou.alt = imageBeyouEliyou
      
      createImgBeyouEliyou.classList.add('see-image-animation');
      boutonIndivBeyouEliyou.insertAdjacentElement('beforebegin', createImgBeyouEliyou)
    
    
    })
    

    
    currentIndexBeyouEliyou += batchSizeBeyouEliyou
        if (currentIndexBeyouEliyou>=urlImagesBeyouEliyou.length) {
          event.target.textContent="voir moins"
          event.target.style.color='red'
        }
    
    
  } else {
    
    const imagesBeyouEliyou = document.querySelectorAll('section div.beyou-eliyou .image-beyou-eliyou');
    imagesBeyouEliyou.forEach((img) =>{
        
        if (img.classList.contains('see-image-animation')) {
              img.classList.toggle('see-image-animation');
              img.classList.toggle('hide-image-animation');
              event.target.textContent = "voir plus"
              event.target.style.color='lightseagreen'
           
            } else {
              img.classList.toggle('see-image-animation');
              img.classList.toggle('hide-image-animation');
              event.target.textContent = "voir moins"
              event.target.style.color='red'
            }

    } )
    
    
    
    
  }
  
 
  
  
  // end eventListener
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
 
let personsName =  persons.next().value;

   personsName.style.position="absolute"
   personsName.style.zIndex=zindex;

  

  
} )





// section de navigation 

onglets.forEach((onglet) =>{
  
  onglet.addEventListener('click', removeHidenClass)
  
} )

function removeHidenClass(event){
event.preventDefault();
sections.forEach((section) =>{
  
  if (!section.classList.contains('hide-album')) {
    
    section.classList.add('hide-album')

  }
  
} )


sections.forEach((sect) =>{
  
  if (sect.classList.contains(event.target.dataset.section)) {
    sect.classList.remove('hide-album')
  }
  
} )

onglets.forEach((ong) =>{
  if (ong.classList.contains('active')) {
    ong.classList.remove('active')
    event.target.classList.add('active')
  }
  
} )


}




