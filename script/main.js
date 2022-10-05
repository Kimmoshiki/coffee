// p.292
const badgeEl = document.querySelector('.badges');

window.addEventListener('scroll',function(){
    console.log(window.scrollY);//스크롤값 확인하기
    if(760<window.scrollY){
        // badgeEl.style.display='none';
        gsap.to(badgeEl, 0.6, {
            opacity:0,
            display:'none'
        })
    }else{
        // badgeEl.style.display='block';
        gsap.to(badgeEl, 0.6, {
            opacity:1,
            display:'block'
        })
    }
});

//gsap.to(요소, 시간, 속성)

const fadeEl = document.querySelectorAll('.fadein');

fadeEl.forEach(function(fadeEl, index){
    gsap.to(fadeEl, 1, {
        delay:(index+1)*0.7,//0.7초씩 느리게 시간을 추가
        opacity:1
    })
});

// 프로모션
const promotionEl = document.querySelector('section.promotion');
const promotionTg = document.querySelector('.toggle-promotion');
//토글 버튼을 클릭했을 때.
promotionTg.addEventListener('click', function(){
    if(promotionEl.classList.contains('hide')){
        promotionEl.classList.remove('hide');
    }else{
        promotionEl.classList.add('hide');
    }
});