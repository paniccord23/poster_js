
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

$(function() {
    $(".letter-move").each(function () {
      let width  = 150
      let height = 150
      let x      = 420
      let y      = 2000
      $(this).css({
        "top": y + "px",
        "left": x + "px",
        "width":  width + "px",
        "height": height + "px",
      })
      $(this).on("mouseenter", function() {
        let width  = 250 + Math.floor(Math.random() * 10)
        let height = Math.floor(Math.random() * 100) + 50
        let x      = Math.floor(Math.random() * 800) + 20
        let y      = 2000 + Math.floor(Math.random() * 10)
        $(this).css({
          "top": y + "px",
          "left": x + "px",
          "width":  width + "px",
          "height": height + "px",
        })
    })
  })
})
$(function() {
    $(".letter1-move").each(function () {
      let width  = 150
      let height = 150
      let x      = 670
      let y      = 2100
      $(this).css({
        "top": y + "px",
        "left": x + "px",
        "width":  width + "px",
        "height": height + "px",
      })
      $(this).on("mouseenter", function() {
        let width  = Math.floor(Math.random() * 100) + 50
        let height = Math.floor(Math.random() * 100) + 50
        let x      = 670 + Math.floor(Math.random() * 100)
        let y      = 2100 + Math.floor(Math.random() * 100)
        $(this).css({
          "top": y + "px",
          "left": x + "px",
          "width":  width + "px",
          "height": height + "px",
        })
    })
  })
})
$(function() {
    $(".letter2-move").each(function () {
      let width  = 150
      let height = 150
      let x      = 380
      let y      = 2300
      $(this).css({
        "top": y + "px",
        "left": x + "px",
        "width":  width + "px",
        "height": height + "px",
      })
      $(this).on("mouseenter", function() {
        let width  = Math.floor(Math.random() * 100) + 50
        let height = 150 + Math.floor(Math.random() * 100)
        let x      = 420 + Math.floor(Math.random() * 100)
        let y      = 2350 + Math.floor(Math.random() * 100)
        $(this).css({
          "top": y + "px",
          "left": x + "px",
          "width":  width + "px",
          "height": height + "px",
        })
    })
  })
})
$(function() {
    $(".letter3-move").each(function () {
      let width  = 150
      let height = 150
      let x      = 680
      let y      = 2420
      $(this).css({
        "top": y + "px",
        "left": x + "px",
        "width":  width + "px",
        "height": height + "px",
      })
      $(this).on("mouseenter", function() {
        let width  = Math.floor(Math.random() * 100) + 100
        let height = 250 + Math.floor(Math.random() * 100)
        let x      = 750 + Math.floor(Math.random() * 400)
        let y      = 2420 + Math.floor(Math.random() * 100)
        $(this).css({
          "top": y + "px",
          "left": x + "px",
          "width":  width + "px",
          "height": height + "px",
        })
    })
  })
})
$(function() {
    $(".letter4-move").each(function () {
      let width  = 150
      let height = 150
      let x      = 430
      let y      = 2700
      $(this).css({
        "top": y + "px",
        "left": x + "px",
        "width":  width + "px",
        "height": height + "px",
      })
      $(this).on("mouseenter", function() {
        let width  = 200 + Math.floor(Math.random() * 100)
        let height = 200 + Math.floor(Math.random() * 100)
        let x      = 580 + Math.floor(Math.random() * 300)
        let y      = 2670 + 100
        $(this).css({
          "top": y + "px",
          "left": x + "px",
          "width":  width + "px",
          "height": height + "px",
        })
    })
  })
})
$(function() {
    $(".letter5-move").each(function () {
      let width  = 150
      let height = 150
      let x      = 680
      let y      = 2770
      $(this).css({
        "top": y + "px",
        "left": x + "px",
        "width":  width + "px",
        "height": height + "px",
      })
      $(this).on("mouseenter", function() {
        let width  = Math.floor(Math.random() * 100) + 50
        let height = Math.floor(Math.random() * 100) + 50
        let x      = 520 + Math.floor(Math.random() * 150)
        let y      = 3100 + Math.floor(Math.random() * 100)
        $(this).css({
          "top": y + "px",
          "left": x + "px",
          "width":  width + "px",
          "height": height + "px",
        })
    })
  })
})
$(function() {
    $(".letter6-move").each(function () {
      let width  = 150
      let height = 150
      let x      = 540
      let y      = 3000
      $(this).css({
        "top": y + "px",
        "left": x + "px",
        "width":  width + "px",
        "height": height + "px",
      })
      $(this).on("mouseenter", function() {
        let width  = 150 + Math.floor(Math.random() * 100)
        let height = 150 + Math.floor(Math.random() * 100)
        let x      = 780 + Math.floor(Math.random() * 100)
        let y      = 3250 + Math.floor(Math.random() * 100)
        $(this).css({
          "top": y + "px",
          "left": x + "px",
          "width":  width + "px",
          "height": height + "px",
        })
    })
  })
})
