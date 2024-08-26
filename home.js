import { questionBuilder } from "./quiz.js"; 
  
 const startButton = document.querySelector('.js-start-button'); 
 const quitButton = document.querySelector('.js-quit-button'); 
 const continueButton = document.querySelector('.js-continue-button'); 
 const infoBoxHTML = document.querySelector('.js-info-box'); 
 const quizBoxHTML = document.querySelector('.js-quiz-box'); 
  
 startButton.addEventListener('click', () => {   
   startButton.style.pointerEvents = 'none'; 
   startButton.style.opacity = 0; 
   // Remove specific CSS properties 
   infoBoxHTML.style.opacity = 100; 
   infoBoxHTML.style.pointerEvents = 'all'; 
 }); 
  
 quitButton.addEventListener('click', () => { 
   // add specific CSS properties 
   infoBoxHTML.style.opacity = 0; 
   infoBoxHTML.style.pointerEvents = 'none'; 
  
   startButton.style.pointerEvents = 'all'; 
   startButton.style.opacity = 100; 
 }); 
  
 continueButton.addEventListener('click', () => { 
   infoBoxHTML.style.opacity = 0; 
   infoBoxHTML.style.pointerEvents = 'none'; 
  
   quizBoxHTML.style.opacity = 100; 
   quizBoxHTML.style.pointerEvents = 'all'; 
  
   questionBuilder(1); 
 }); 
  
 document.querySelector('.js-finished-quiz').addEventListener('click', () => { 
   location.reload(); 
 })




