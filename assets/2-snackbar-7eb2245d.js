import{i}from"./vendor-651d7991.js";const o=document.querySelector(".form");o.addEventListener("submit",l);function l(e){e.preventDefault();const s=o.delay.value,r=o.state.value;m(s,r),o.reset()}function m(e,s){new Promise((t,n)=>{setTimeout(()=>{s==="fulfilled"?t(i.success({title:"OK",titleColor:"#FFF",messageColor:"#FFF",color:"#59A10D",position:"topRight",message:`Fulfilled promise in ${e} ms`})):n(i.error({title:"Error",titleColor:"#FFF",messageColor:"#FFF",color:"#EF4040",position:"topRight",message:`Rejected promise in ${e} ms`}))},e)}).then(t=>t).catch(t=>t)}
//# sourceMappingURL=2-snackbar-7eb2245d.js.map
