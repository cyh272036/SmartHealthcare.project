



let btns = document.querySelectorAll('.topBtn');

let imgBox = document.querySelector('.image');
let textBox = document.querySelector('.text');

let textContents = document.querySelectorAll('.textContents');
let imgContents = document.querySelector('#imgBox');
let bgContents = document.querySelector('#bgBox');

let imgSrc = [
    'image/01.png',
    'image/02.png',
    'image/03.png',
    'image/04.png',
    'image/05.png',
    'image/06.png',
    'image/07.png',
    'image/08.png'
];
let bgSrc = [
    'image/bg01.gif',
    'image/bg02.gif',
    'image/bg03.gif',
    'image/bg04.gif',
    'image/bg05.gif',
    'image/bg06.gif',
    'image/bg07.gif',
    'image/bg08.gif'
];

let isFirstRun = true;

for(let i = 0; i<btns.length; i++)
{
    btns[i].addEventListener('click', btnFn)
}


function btnFn(e){
    

    let clickNum = e.path[1].getAttribute('clickVal');
    console.log(clickNum);
    if(isFirstRun)
    {
        appearWindow();
        isFirstRun = false;
    }

    removeAllContents();
    openContents(clickNum);
    
}

function appearWindow()
{
    imgBox.classList.add('active');
    textBox.classList.add('active');
}

function removeAllContents()
{
    for(let i = 0; i<textContents.length; i++)
    {
        textContents[i].style.display = 'none';
    }
}

function openContents(num)
{
    textContents[num].style.display = 'block';

    imgContents.src = imgSrc[num];
    bgContents.src = bgSrc[num];
}