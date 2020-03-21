'use strict'

const anchors = document.querySelectorAll('a[href*="#"]')

for (let anchor of anchors) {
  anchor.addEventListener('click', function (e) {
    e.preventDefault()
    
    const blockID = anchor.getAttribute('href').substr(1)
    
    document.getElementById(blockID).scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })
  })
}

let phones = document.getElementsByClassName('Phone1')[0];
phones.addEventListener("click", ()=>{
  let blackphone = document.getElementsByClassName("black_phone")[0];
  let op0 = "opacity: 0";
  let op1 = "opacity: 1";
  blackphone.style.opacity == 0 ? blackphone.style.opacity = 1: blackphone.style.opacity = 0;
})

let phones2 = document.getElementsByClassName('Phone1')[1];
phones2.addEventListener("click", ()=>{
  let blackphone = document.getElementsByClassName("black_phone")[0];
  let op0 = "opacity: 0";
  let op1 = "opacity: 1";
  blackphone.style.opacity == 0 ? blackphone.style.opacity = 1: blackphone.style.opacity = 0;
})

let phones3 = document.getElementsByClassName('Phone2')[0];
phones3.addEventListener("click", ()=>{
  let blackphone = document.getElementsByClassName("black_phone2")[0];
  let op0 = "opacity: 0";
  let op1 = "opacity: 1";
  blackphone.style.opacity == 0 ? blackphone.style.opacity = 1: blackphone.style.opacity = 0;
})

let phones4 = document.getElementsByClassName('Phone2')[1];
phones4.addEventListener("click", ()=>{
  let blackphone = document.getElementsByClassName("black_phone2")[0];
  let op0 = "opacity: 0";
  let op1 = "opacity: 1";
  blackphone.style.opacity == 0 ? blackphone.style.opacity = 1: blackphone.style.opacity = 0;
})

let slide1 = document.getElementsByClassName('first_page')[0];
let slide2 = document.getElementsByClassName("second_page")[0];
let prev = document.getElementsByClassName('prev_chev')[0];


const left_arr = document.getElementsByClassName("prev_chev")[0];
const right_arr = document.getElementsByClassName("next_chev")[0];
const pages = document.getElementsByClassName("page");
left_arr.addEventListener("click", ()=>{
  const active_slide = document.getElementsByClassName('active');
  pages[0].parentNode.insertBefore(pages[3], pages[0]);
  active_slide[0].classList.remove("active");
  pages[1].classList.add("active");
})

right_arr.addEventListener("click", ()=>{
  const active_slide = document.getElementsByClassName('active');
  pages[3].parentNode.insertBefore(pages[0], null);
  active_slide[0].classList.remove("active");
  pages[1].classList.add("active");
})

const Tab =  document.getElementById('tabs');
Tab.addEventListener('click', (event)=>{
    if(event.target.id !== 'tabs'){
        Tab.querySelectorAll('div').forEach(el=>el.classList.remove('act'));
        event.target.classList.add('act');
        const pics = document.getElementById('gallery');
        pics.querySelectorAll('div').forEach(function (el) {
            if(el.style.order === '12'){
                el.style.order = (Number(el.style.order)-11).toString();
            }
            else{
                el.style.order = (Number(el.style.order)+1).toString();
            }
        });
    }
});

const IMAGE = document.getElementById('gallery');
IMAGE.addEventListener('click', (event) => {
  IMAGE.querySelectorAll('img').forEach(el => el.classList.remove('active_img'));
  event.target.classList.add('active_img');
});

const BUTTON = document.getElementById('but_sumb');
const CLOSE_BUTTON = document.getElementById("close-btn")
let hidden_part = document.getElementById('hidden_message');
BUTTON.addEventListener('click', () => {
  let name = document.getElementById('name');
  let email = document.getElementById('email');
  let subject = document.getElementById('subject').value;
  let description = document.getElementById('describe').value;
  if ((name.validity.valid && email.validity.valid) == false ){
    alert("Провертье введенные данные и email");
    return 0;
  }
  if (subject != ''){
    subject = "Тема: " + subject;
  }
  else{subject = "Без темы";}
  if (description != ''){
    description = "Описание: " + description;
  }
  else{description = "Без описания";}
  document.getElementById('res').innerText = "\n" + subject + "\n" + description;
  hidden_part.style.display = 'block';
});

CLOSE_BUTTON.addEventListener('click', () => {
  document.getElementById('Form').reset();
  hidden_part.style.display = 'none';
});
