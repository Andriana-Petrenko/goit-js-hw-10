import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

const form = document.querySelector('.form');
const inputDelay = document.querySelector('[name=delay]');
const buttonCreate = document.querySelector('[type=submit]');



inputDelay.addEventListener('change', (e) => {
    const delay = form.elements.delay.value;
    console.log(delay);
 });

buttonCreate.addEventListener('submit',() =>{
    // e.preventDefault;
const promise=new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(`Fulfilled promise in ${delay}ms`);
        reject (`Rejected promise in ${delay}ms`)
  }, delay);
})
      
})



