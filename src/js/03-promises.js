import Notiflix from 'notiflix';
console.log(Notiflix);



function createPromise(position, delay) {

  return new Promise ((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;
    setTimeout(() => {
      if (shouldResolve) {
        // Fulfill
        resolve({position, delay});
      } else {
        // Reject
        reject({position, delay});
      }
    }, delay)

  });
}

const form = document.querySelector('form');
let positionV = 0;
let delayV = 0;

form.addEventListener('submit', onPromise);

function onPromise(evt) {
  evt.preventDefault();

  const delayInpt = document.querySelector('input[name="delay"]');
  const stepInpt = document.querySelector('input[name="step"]');
  const amountInpt = document.querySelector('input[name="amount"]');

  const firstStep = Number(delayInpt.value);
  const step = Number(stepInpt.value);
  const amount = Number(amountInpt.value);


  for(let i = 0; i <= amount; i++) {
    const position = i + 1;
    const delay = firstStep + (i * step);
      
    createPromise(position, delay)
      .then(({position,delay}) => {
        Notiflix.Notify.success(
          `✅ Fulfilled promise ${position} in ${delay}ms`
        );
      })
      .catch(({position, delay}) => {
        Notiflix.Notify.failure(
          `❌ Rejected promise ${position} in ${delay}ms`
        );
      })
  }


  form.reset();
}


