'use strict';
// ①画像をメインとサムネイル両方用意する
// ②用意した画像を配置する
// ③1番目に表示した画僧のサムネイルを濃くし、サムネイル画像をクリックしたらメインに写るようにする
// ④メインで表示されている画像のサムネイルを濃くする
// ⑤次へのボタンがクリックされたら次の画像に切り替わるようにする
// ⑥前へのボタンがクリックされたら前の画像に切り替わるようにする
// ⑦プレイボタンがクリックされたら1秒ごとに画像が切り替わるようにする
// ⑧プレイボタンがクリックされたらポーズボタンに切り替わり、クリックすると、切り替えが止まるようにする


const images = [
        'img/pic00.png',
        'img/pic01.png',
        'img/pic02.png',
        'img/pic03.png',
        'img/pic04.png',
        'img/pic05.png',
        'img/pic06.png',
        'img/pic07.png',
      ];

      let currentIndex = 0;
      let isPlaying = false;

      const mainImage =document.getElementById('main');
      mainImage.src = images[currentIndex];

      images.forEach((image, index) => {
const img = document.createElement('img');
img.src = image;

const li = document.createElement('li');
if(index ===currentIndex) {
  li.classList.add('current');
}
li.addEventListener('click', () => {
  mainImage.src = image;
  const thumbnails = document.querySelectorAll('.thumbnails > li');
  thumbnails[currentIndex].classList.remove('current');
  currentIndex = index;
  thumbnails[currentIndex].classList.add('current');
})
li.appendChild(img);
document.querySelector('.thumbnails').appendChild(li);
      });

      const next = document.getElementById('next');
      next.addEventListener('click', () => {
        let target = currentIndex + 1;
        if(target === images.length) {
          target = 0;
        }
        document.querySelectorAll('.thumbnails > li')[target].click();
      });
      const prev = document.getElementById('prev');
      prev.addEventListener('click', () => {
        let target = currentIndex - 1;
        if(target<0) {
          target = images.length-1;
        }
        document.querySelectorAll('.thumbnails > li')[target].click();
      });

      let timeOutId;
      function playSlideshow() {
       timeOutId = setTimeout(() => {
          next.click();
          playSlideshow();
        }, 1000);
      }

      const play = document.getElementById('play');
      play.addEventListener('click', () => {
        if(isPlaying ===false) {
          playSlideshow();
          play.textContent = 'Pause';
        }else{
clearTimeout(timeOutId);
play.textContent = 'Play';
        }
        isPlaying = !isPlaying
      });





































// const images = [
//       'img/pic00.png',
//       'img/pic01.png',
//       'img/pic02.png',
//       'img/pic03.png',
//       'img/pic04.png',
//       'img/pic05.png',
//       'img/pic06.png',
//       'img/pic07.png',
//     ];

//     let currentIndex = 0;

//   const mainImage = document.getElementById('main');
//   mainImage.src = images[currentIndex];

//   images.forEach((image, index) => {
//   const img = document.createElement('img');
//   img.src = image;
//   const li = document.createElement('li');
//   if(index === currentIndex) {
//     li.classList.add('current');
//   }
//   li.addEventListener('click', () => {
//     mainImage.src = image;
//     const thumbnails = document.querySelectorAll('.thumbnails > li');
//     thumbnails[currentIndex].classList.remove('current');
//     currentIndex = index;
//     thumbnails[currentIndex].classList.add('current');
//   })
//   li.appendChild(img);
//   document.querySelector('.thumbnails').appendChild(li);
//   });

//   const next = document.getElementById('next');
//   next.addEventListener('click',() => {
//     let target = currentIndex + 1;
//     if(target === images.length) {
//       target = 0;
//     }
//     document.querySelectorAll('.thumbnails > li')[target].click();
//   });
//   const prev = document.getElementById('prev');
//   prev.addEventListener('click',() => {
//     let target = currentIndex - 1;
//     if(target < 0) {
//       target = images.length-1;
//     }
//     document.querySelectorAll('.thumbnails > li')[target].click();
//   })

// let timeOutId;

// function playSlideshow() {
// timeOutId = setTimeout(() => {
//     next.click();
//     playSlideshow();
//   }, 1000);
// }

// let isPlaying = false;

// const play = document.getElementById('play');
// play.addEventListener('click', () => {
//   if(isPlaying===false) {
//     playSlideshow();
//     play.textContent = 'pause';
//   }else {
//     clearTimeout(timeOutId);
//      play.textContent = 'play';
//   }
//   isPlaying = !isPlaying;
// });



// {
//   const images = [
//     'img/pic00.png',
//     'img/pic01.png',
//     'img/pic02.png',
//     'img/pic03.png',
//     'img/pic04.png',
//     'img/pic05.png',
//     'img/pic06.png',
//     'img/pic07.png',
//   ];
//   let currentIndex = 0;

//   const mainImage = document.getElementById('main');
//   mainImage.src = images[currentIndex];

//   images.forEach((image, index) => {
//     const img = document.createElement('img');
//     img.src = image;

//     const li = document.createElement('li');
//     if (index === currentIndex) {
//       li.classList.add('current');
//     }
//     li.addEventListener('click', () => {
//       mainImage.src = image;
//       const thumbnails = document.querySelectorAll('.thumbnails > li');
//       thumbnails[currentIndex].classList.remove('current');
//       currentIndex = index;
//       thumbnails[currentIndex].classList.add('current');
//     });

//     li.appendChild(img);
//     document.querySelector('.thumbnails').appendChild(li);
//   });

//   const next = document.getElementById('next');
//   next.addEventListener('click', () => {
//     let target = currentIndex + 1;
//     if (target === images.length) {
//       target = 0;
//     }
//     document.querySelectorAll('.thumbnails > li')[target].click();
//   });
//   const prev = document.getElementById('prev');
//   prev.addEventListener('click', () => {
//     let target = currentIndex - 1;
//     if (target < 0) {
//       target = images.length- 1;
//     }
//     document.querySelectorAll('.thumbnails > li')[target].click();
//   });

//   let timeoutId;

//   function playSlidehow() {
//     timeoutId = setTimeout(() => {
//       next.click();
//       playSlidehow();
//     }, 1000);
//   }

//   let isPlaying = false;

//   const play = document.getElementById('play');
//   play.addEventListener('click', () => {
//     if(isPlaying ===false) {
//       playSlidehow();
//       play.textContent = 'pause';
//     } else {
//       clearTimeout(timeoutId);
//       play.textContent = 'play';
//     }
//     isPlaying = !isPlaying;
//   });
// }