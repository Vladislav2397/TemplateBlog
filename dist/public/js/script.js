var nav = new Vue({
  el: '#navbar',
  data: {
    msg: 'Hello',
    dropdownLinks: [
      'Dropdown 1',
      'Dropdown 2',
      'Dropdown 3'
    ],
    isShow: false
  }
})

var carousel = new Vue({
  el: '#carousel',
  data: {
    itemsCount: document.getElementsByClassName("carousel__item").length,
    counter: 0
  },
  methods: {
    left: function () {
      if (this.counter >= 0)
        this.counter--
      if (this.counter < 0)
        this.counter = this.itemsCount - 1
    },
    right: function () {
      if (this.counter <= this.itemsCount - 1)
        this.counter++
      if (this.counter === this.itemsCount)
        this.counter = 0
    },
    isActive: function (num) {
      return num === this.counter
    }
  }
})