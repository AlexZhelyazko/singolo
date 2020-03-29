'use strict'

document.addEventListener('scroll',onScroll);
function onScroll(event) {
    const curPos = pageYOffset;
    console.log(curPos);
    const links = document.querySelectorAll('#section-list a');
    const sections = document.querySelectorAll('body>section');

    sections.forEach((el)=>{
        if((el.offsetTop-89) <= curPos && (el.offsetTop-89 + el.offsetHeight) > curPos){
            links.forEach((a)=>{
                a.classList.remove('active-li');
                if(el.getAttribute('id') === a.getAttribute('href').substring(1)){
                    a.classList.add('active-li');
                }
            })
        }
    });
}

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

const SlidersIdList = ['SliderBlock', 'slider-image'];
let indexOfActiveSlide = 0;
let isEnabled = true;
document.getElementById('leftChev').addEventListener('click', (e) => {
    if (isEnabled) {
        isEnabled = false;
        let width = document.getElementById('SliderBlock').offsetWidth;
        if (indexOfActiveSlide == 0) {
            document.getElementById('slider-image').style.left = `-100%`;
            indexOfActiveSlide = 1;
        } else {
            document.getElementById('SliderBlock').style.left = `-50%`;
            indexOfActiveSlide = 0;
        }
        const slider = setInterval(() => {
            if (indexOfActiveSlide == 1) {
                document.getElementById('SliderBlock').style.left = +document.getElementById('SliderBlock').style.left.replace('%', '') + 1 + '%';
                document.getElementById('slider-image').style.left = +document.getElementById('slider-image').style.left.replace('%', '') + 1 + '%';
                if (document.getElementById(`${SlidersIdList[0]}`).style.left == `50%`) {
                    isEnabled = true;
                    clearInterval(slider);
                }
            } else {
                document.getElementById('slider-image').style.left = +document.getElementById('slider-image').style.left.replace('%', '') + 1 + '%';
                document.getElementById('SliderBlock').style.left = +document.getElementById('SliderBlock').style.left.replace('%', '') + 1 + '%';
                if (document.getElementById('SliderBlock').style.left == '0%') {
                    isEnabled = true;
                    clearInterval(slider);
                }
            }
        }, 10);
    }  
});
document.getElementById('rightChev').addEventListener('click', (e) => {
    if (isEnabled) {
        isEnabled = false;
        let width = document.getElementById('SliderBlock').offsetWidth;
        if (indexOfActiveSlide == 0) {
            document.getElementById('slider-image').style.left = "0%";
            indexOfActiveSlide = 1;
        } else {
            document.getElementById('SliderBlock').style.left = `50%`;
            indexOfActiveSlide = 0;
        }
        const slider = setInterval(() => {
            if (indexOfActiveSlide == 1) {
                document.getElementById('SliderBlock').style.left = +document.getElementById('SliderBlock').style.left.replace('%', '') - 1 + '%';
                document.getElementById('slider-image').style.left = +document.getElementById('slider-image').style.left.replace('%', '') - 1 + '%';
                if (document.getElementById(`${SlidersIdList[0]}`).style.left == `-50%`) {
                    isEnabled = true;
                    clearInterval(slider);
                }
            } else {
                document.getElementById('slider-image').style.left = +document.getElementById('slider-image').style.left.replace('%', '') - 1 + '%';
                document.getElementById('SliderBlock').style.left = +document.getElementById('SliderBlock').style.left.replace('%', '') - 1 + '%';
                if (document.getElementById('SliderBlock').style.left == '0%') {
                    isEnabled = true;
                    clearInterval(slider);
                }
            }
        }, 10);
    }
});
// Buttons of Phones
document.getElementById('ButtonOfHorizontalIPhone').addEventListener('click', () => {
    if (document.getElementById('HorizontalIphone').getAttribute('src') == 'assets/HorizontalIphone.png') {
        document.getElementById('HorizontalIphone').setAttribute('src', 'assets/HorizontalIphoneOff.png');
    } else {
        document.getElementById('HorizontalIphone').setAttribute('src', 'assets/HorizontalIphone.png');
    }
});
document.getElementById('ButtonOfVerticalIPhone').addEventListener('click', () => {
    if (document.getElementById('VerticalIphone').getAttribute('src') == 'assets/VerticalIphone.png') {
        document.getElementById('VerticalIphone').setAttribute('src', 'assets/VerticalIphoneOff.png');
    } else {
        document.getElementById('VerticalIphone').setAttribute('src', 'assets/VerticalIphone.png');
    }
});

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

const Burger = document.getElementById('burger');
Burger.addEventListener('click',(event)=>{
    if(Burger.classList.contains('activeham')){
        Burger.classList.remove('activeham');
        document.getElementById('navigation').style.display="none";
        document.getElementById('logo').classList.remove('logo-for-burger');
        document.getElementById('pop-window').style.display="none";
        document.getElementById('message').style.display="block";
    }
    else{
        Burger.classList.add('activeham');
        document.getElementById('navigation').style.display="block";
        document.getElementById('logo').classList.add('logo-for-burger');
        document.getElementById('pop-window').style.display="block";
        document.getElementById('message').style.display="none";
    }

})