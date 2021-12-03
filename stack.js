const cards = document.querySelectorAll('.cards');
const cardClose = document.querySelectorAll('.card-close');
const cardNext = document.querySelectorAll('.tab-button2');
let topValue = 20;
let widthValue = 100;
let leftValue = 2;

function openCard(i){
    const currentCard = cards[i];
    const previousCard = cards[i - 1];
    const nextCard = cards[i + 1];

    currentCard.style.left = leftValue+"%";
    currentCard.style.width = (widthValue - 4)+"%";
    currentCard.style.top = topValue+"px";

    nextCard.style.top = (topValue + 10)+"px"; 

    if(previousCard != undefined){
        previousCard.style.top = (topValue + 10)+"px";
        previousCard.style.width = (widthValue - 8)+"%";
        previousCard.style.left = (leftValue + 2)+"%";
    }
}

function closeCard(i){
    const currentCard = cards[i + 1];
    const previousCard = cards[i];
    const previousCardPrevSibling = previousCard.previousElementSibling;

    currentCard.style.top = "999px";

    if(previousCard != undefined){
        previousCard.style.width = widthValue+"%";
        previousCard.style.left = "0";
        previousCard.style.top = (topValue + 10)+"px";
    }

    if(previousCardPrevSibling != undefined){
        previousCardPrevSibling.style.width = (widthValue - 4)+"%";
        previousCardPrevSibling.style.left = leftValue+"%";
        previousCardPrevSibling.style.top = topValue+"px";
    }else{return;}
};

cardNext.forEach((nextBtn, i) => {
    nextBtn.addEventListener('click', e => {
        e.preventDefault();
        openCard(i);
    }, false);
});


cardClose.forEach((closeBtn, i) => {
    closeBtn.addEventListener('click', e => {
        e.preventDefault();
        closeCard(i);
    }, false);
})

window.addEventListener('load', () => {
    cards[0].style.top = topValue+"px";
    cards[0].style.width = widthValue+"%";
})

const emailContent = document.querySelector('.emailContent');
const btn1 = document.querySelector('.tab-button1');
const cardContainer = document.querySelector('.card-container');




function showContent() {

    if (emailContent.style.display === "block") {
        emailContent.style.display = "none";} else {
            emailContent.style.display = "block";
        }   
    }

function expand() {
        cardContainer.style.height = emailContent.scrollHeight + 200 + "px";
};



//btn1.addEventListener('click',expand);

btn1.addEventListener('click',function(){
   btn1.classList.toggle("active");
})

btn1.addEventListener("click",showContent);

btn1.addEventListener("click",expand);


const btn3 = document.querySelector('.tab-button3');
const textBox =document.querySelector('.textbox');
function text() {
    if (textBox.style.display === "block") {
        textBox.style.display = "none";} else {
            textBox.style.display = "block";
        }   
    }

function expand1() {
        cardContainer.style.height = textBox.scrollHeight + 200 + "px";
};
btn3.addEventListener("click",text);
btn3.addEventListener("click",expand1);
btn3.addEventListener('click',function(){
    btn3.classList.toggle("active");
 })
 

/* var i;

for (i = 0; i < btn1.length; i++)
{
    /*function openContent(i){
        const currentEmail = emailContent[i];
        const previousEmail = emailContent[i-1];
        const nextEmail = emailContent[i +1];
        console.log(currentEmail);
        if (currentEmail.style.display === null) {
            currentEmail.style.display = "none";
        } else {
            currentEmail.style.display = "block";
        
    };
    btn1[i].addEventListener("click",function(){
        this.classList.toggle("active");
        //openContent(i);
        console.log(i);
        })
    } 

*/
