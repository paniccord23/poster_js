var pathEls = document.querySelectorAll('path');
for (var i = 0; i < pathEls.length; i++) {
  var pathEl = pathEls[i];
  var offset = anime.setDashoffset(pathEl);
  pathEl.setAttribute('stroke-dashoffset', offset);
  anime({
    targets: pathEl,
    strokeDashoffset: [offset, 0],
    duration: anime.random(1000, 3000),
    delay: anime.random(0, 2000),
    loop: true,
    direction: 'alternate',
    easing: 'easeInOutSine',
    autoplay: true
  });
}

var morpfing = anime({
  targets: '.polymorpf',
  points: [
    { value: '85,1 124,10 152,107 74,54' },
    { value: '85,1 124,10 152,107 90,116' },
    { value: '85,1 152,12 152,107 90,116' },
    { value: '85,1 152,12 189,94 90,116' },
    { value: '85,1 152,12 152,107 90,116' },
    { value: '85,1 124,10 152,107 90,116' },
    { value: '85,1 124,10 152,107 74,54' }

  ],
  easing: 'easeOutQuad',
  duration: 3500,
  loop: true
})
// anime({
//   targets: '.morphing-demo .polymorph',
//   points: [
//     { value: [
//       '70 24 119.574 60.369 100.145 117.631 50.855 101.631 3.426 54.369',
//       '70 41 118.574 59.369 111.145 132.631 60.855 84.631 20.426 60.369']
//     },
//     { value: '70 6 119.574 60.369 100.145 117.631 39.855 117.631 55.426 68.369' },
//     { value: '70 57 136.574 54.369 89.145 100.631 28.855 132.631 38.426 64.369' },
//     { value: '70 24 119.574 60.369 100.145 117.631 50.855 101.631 3.426 54.369' }
//   ],
//   easing: 'easeOutQuad',
//   duration: 2000,
//   loop: true
// });
// $(function() {
//     $(".move").each(function () {
//       let width  = 50
//       let height = 50
//       let x      = 620
//       let y      = 500
//       $(this).css({
//         "top": y + "px",
//         "left": x + "px",
//         "width":  width + "px",
//         "height": height + "px",
//       })
//
//       // ограничить блок по размру потому что буквы скачут по всем
//       $(this).on("mouseenter", function() {
//         let width  = Math.floor(Math.random() * 100) + 50
//         let height = Math.floor(Math.random() * 100) + 50
//         let x      = Math.floor(Math.random() * 800) + 20
//         let y      = Math.floor(Math.random() * 300) - 20
//         $(this).css({
//           "top": y + "px",
//           "left": x + "px",
//           "width":  width + "px",
//           "height": height + "px",
//         })
//     })
//   })
// })
// $(function() {
//     $(".letter-move").each(function () {
//       let width  = 150
//       let height = 150
//       let x      = 420
//       let y      = 2000
//       $(this).css({
//         "top": y + "px",
//         "left": x + "px",
//         "width":  width + "px",
//         "height": height + "px",
//       })
//       $(this).on("mouseenter", function() {
//         let width  = 250 + Math.floor(Math.random() * 10)
//         let height = Math.floor(Math.random() * 100) + 50
//         let x      = Math.floor(Math.random() * 800) + 20
//         let y      = 2000 + Math.floor(Math.random() * 10)
//         $(this).css({
//           "top": y + "px",
//           "left": x + "px",
//           "width":  width + "px",
//           "height": height + "px",
//         })
//     })
//   })
// })
// $(function() {
//     $(".letter1-move").each(function () {
//       let width  = 150
//       let height = 150
//       let x      = 670
//       let y      = 2200
//       $(this).css({
//         "top": y + "px",
//         "left": x + "px",
//         "width":  width + "px",
//         "height": height + "px",
//       })
//       $(this).on("mouseenter", function() {
//         let width  = Math.floor(Math.random() * 100) + 50
//         let height = Math.floor(Math.random() * 100) + 50
//         let x      = 670 + Math.floor(Math.random() * 100)
//         let y      = 2200 + Math.floor(Math.random() * 100)
//         $(this).css({
//           "top": y + "px",
//           "left": x + "px",
//           "width":  width + "px",
//           "height": height + "px",
//         })
//     })
//   })
// })
// $(function() {
//     $(".letter2-move").each(function () {
//       let width  = 150
//       let height = 150
//       let x      = 420
//       let y      = 2350
//       $(this).css({
//         "top": y + "px",
//         "left": x + "px",
//         "width":  width + "px",
//         "height": height + "px",
//       })
//       $(this).on("mouseenter", function() {
//         let width  = Math.floor(Math.random() * 100) + 50
//         let height = 150 + Math.floor(Math.random() * 100)
//         let x      = 420 + Math.floor(Math.random() * 100)
//         let y      = 2350 + Math.floor(Math.random() * 100)
//         $(this).css({
//           "top": y + "px",
//           "left": x + "px",
//           "width":  width + "px",
//           "height": height + "px",
//         })
//     })
//   })
// })
// $(function() {
//     $(".letter3-move").each(function () {
//       let width  = 150
//       let height = 150
//       let x      = 750
//       let y      = 2420
//       $(this).css({
//         "top": y + "px",
//         "left": x + "px",
//         "width":  width + "px",
//         "height": height + "px",
//       })
//       $(this).on("mouseenter", function() {
//         let width  = Math.floor(Math.random() * 100) + 100
//         let height = 250 + Math.floor(Math.random() * 100)
//         let x      = 750 + Math.floor(Math.random() * 400)
//         let y      = 2420 + Math.floor(Math.random() * 100)
//         $(this).css({
//           "top": y + "px",
//           "left": x + "px",
//           "width":  width + "px",
//           "height": height + "px",
//         })
//     })
//   })
// })
// $(function() {
//     $(".letter4-move").each(function () {
//       let width  = 150
//       let height = 150
//       let x      = 580
//       let y      = 2670
//       $(this).css({
//         "top": y + "px",
//         "left": x + "px",
//         "width":  width + "px",
//         "height": height + "px",
//       })
//       $(this).on("mouseenter", function() {
//         let width  = 200 + Math.floor(Math.random() * 100)
//         let height = 200 + Math.floor(Math.random() * 100)
//         let x      = 580 + Math.floor(Math.random() * 300)
//         let y      = 2670 + 100
//         $(this).css({
//           "top": y + "px",
//           "left": x + "px",
//           "width":  width + "px",
//           "height": height + "px",
//         })
//     })
//   })
// })
// $(function() {
//     $(".letter5-move").each(function () {
//       let width  = 150
//       let height = 150
//       let x      = 520
//       let y      = 3100
//       $(this).css({
//         "top": y + "px",
//         "left": x + "px",
//         "width":  width + "px",
//         "height": height + "px",
//       })
//       $(this).on("mouseenter", function() {
//         let width  = Math.floor(Math.random() * 100) + 50
//         let height = Math.floor(Math.random() * 100) + 50
//         let x      = 520 + Math.floor(Math.random() * 150)
//         let y      = 3100 + Math.floor(Math.random() * 100)
//         $(this).css({
//           "top": y + "px",
//           "left": x + "px",
//           "width":  width + "px",
//           "height": height + "px",
//         })
//     })
//   })
// })
// $(function() {
//     $(".letter6-move").each(function () {
//       let width  = 150
//       let height = 150
//       let x      = 780
//       let y      = 3250
//       $(this).css({
//         "top": y + "px",
//         "left": x + "px",
//         "width":  width + "px",
//         "height": height + "px",
//       })
//       $(this).on("mouseenter", function() {
//         let width  = 150 + Math.floor(Math.random() * 100)
//         let height = 150 + Math.floor(Math.random() * 100)
//         let x      = 780 + Math.floor(Math.random() * 100)
//         let y      = 3250 + Math.floor(Math.random() * 100)
//         $(this).css({
//           "top": y + "px",
//           "left": x + "px",
//           "width":  width + "px",
//           "height": height + "px",
//         })
//     })
//   })
// })
