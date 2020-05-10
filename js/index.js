const menuButton = document.querySelector('.my-btn-menu');
const next = document.querySelector('.next');
const back = document.querySelector('.back');
const play = document.querySelector('.btn-play');
const more = document.querySelector('.more');
const moreBlock = document.querySelector('.block-more');
const menuBlock = document.querySelector('.my-menu');
const inputBlock = document.querySelector('.input-block');
const menuIcon = document.querySelector('.menu-icon');
const moreIcon = document.querySelector('.more-icon');
const input = document.querySelector('.input-media-block');
const title = document.querySelector('.tag');

let activeMoreBlock = false;

const text = `
    <div>
    <span class="span">Time:  <p class="p">121 minutes</p></span>
    <span class="span">Director: <p class="p">Тодд Филлипс</p></span>
    <span class="span">Scenario: <p class="p">Тодд Филлипс, Скотт Сильвер</p></span>
    <span class="span">Budget: <p class="p">55000000 $</p></span>
    <span class="span">Fees: <p class="p">$490 300 000 (World)<br>
                    $247 229 004 (USA)<br>
                    1 951 586 772 руб. (RF)
                </p>
    </span>
    <span class="span">Premiere: <p class="p">04.10.2019 (World)</p></span>
    </div>
`;

var slider = new Swiper('.swiper-container', {
    loop: true,
    direction: 'horizontal',
    slidesPerView: 1,
    autoplay: {
        delay: 3000,
    },
    navigation: {
        nextEl: '.next',
        prevEl: '.back',
    }
}); 

slider.init();

const styleButton = () => {
    menuButton.style.background = 'transparent';
    next.style.background = 'transparent';
    back.style.background = 'transparent';
    play.style.background = '#f4511e';
    more.style.background = 'transparent';
};

const checkOpenMenu = () => {
    for (let i = 0; i < menuBlock.classList.length; i++) {
        if (menuBlock.classList[i] == 'open-menu') {
            input.style.width = '50%';
            title.style.marginBottom = '90px'
        } else {
            input.style.width = '100%';
            title.style.marginBottom = '10px;'
        }
    }
};

menuButton.addEventListener('click', () => {
    styleButton();
    menuButton.classList.toggle('my-btn-menu-active');
    menuBlock.classList.toggle('open-menu');
    inputBlock.classList.toggle('open-input');

    checkOpenMenu();

    if (menuIcon.textContent == 'menu') {
        menuIcon.textContent = 'clear';
        return;
    }

    if (menuIcon.textContent == 'clear') {
        menuIcon.textContent = 'menu';
        return;
    }

});

menuButton.addEventListener('mousemove', styleButton);
next.addEventListener('click', styleButton);
back.addEventListener('click', styleButton);
play.addEventListener('click', styleButton);

more.addEventListener('click', () => {
    styleButton();

    moreIcon.classList.toggle('active-more-icon');
    
    if (activeMoreBlock == false) {
        moreBlock.textContent = '';
        moreBlock.insertAdjacentHTML('afterBegin', text);
        more.classList.toggle('more-active');
        activeMoreBlock = true;
    } else {
        activeMoreBlock = false;
        moreBlock.textContent = '';
        more.classList.toggle('more-active');
    }
    
});

