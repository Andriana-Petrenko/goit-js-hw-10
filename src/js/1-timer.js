import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import iziToast from "izitoast";
import 'izitoast/dist/css/iziToast.min.css';

const inputPicker = document.querySelector('#datetime-picker');
const button = document.querySelector('[data-start]');
button.setAttribute('disabled','');
const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
    onClose(selectedDates) {
      if (selectedDates[0]>Date.now()) {
          button.removeAttribute('disabled');
      } else {
          iziToast.error({
              iconUrl: '/img/close.png',
              position: 'topRight',
              message: 'Please choose a date in the future',
});
         button.setAttribute('disabled','');
      }
    console.log(selectedDates[0]);
  },
};

flatpickr(inputPicker, options);
// let userSelectedDate = options.onClose;
// console.log(userSelectedDate);
