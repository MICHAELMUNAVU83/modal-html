let  openm = document.getElementById('open');
let  funga = document.getElementById('clos');
let  para = document.getElementById('modalc');

openm.addEventListener('click', ()=>{
    para.classList.add('show')
})
funga.addEventListener('click', ()=>{
    para.classList.remove('show')
})