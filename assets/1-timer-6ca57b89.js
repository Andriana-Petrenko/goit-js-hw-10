import{f as o,i}from"./vendor-651d7991.js";const r=document.querySelector("#datetime-picker"),e=document.querySelector("[data-start]");e.setAttribute("disabled","");const n={enableTime:!0,time_24hr:!0,defaultDate:new Date,minuteIncrement:1,onClose(t){t[0]>Date.now()?e.removeAttribute("disabled"):(i.error({iconUrl:"/img/close.png",position:"topRight",message:"Please choose a date in the future"}),e.setAttribute("disabled","")),console.log(t[0])}};o(r,n);
//# sourceMappingURL=1-timer-6ca57b89.js.map
