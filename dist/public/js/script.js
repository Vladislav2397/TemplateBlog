var nav = new Vue({
  el: '#navbar',
  data: {
    msg: 'Hello',
    dropdownLinks: [
      'Dropdown 1',
      'Dropdown 2',
      'Dropdown 3'
    ]
  }
})

var carousel = new Vue({
  el: '#carousel',
  data: {
    items: [
      {
        imageSrc: 'public/img/mindfulness.jpg',
        link: '#',
        title: 'What is Mindfulness?',
        text: "Mindfulness is the psychological process of purposely bringing one's attention to experiences occurring in the..."
      },
      {
        imageSrc: 'public/img/yalitza-aparicio.jpg',
        link: '#',
        title: 'Oscars’ First indigenous actress mominee',
        text: "Yalitza Aparicio was the Oscars’ first indigenous mexican actress nominee. Cihuatl is a Free CSS, Blogger..."
      },
      {
        imageSrc: 'public/img/hilda-moraa-africa.jpeg',
        link: '#',
        title: 'African women in tech',
        text: "Hilda is a Kenyan Fintech entrepreneur. She is the Founder and CEO of Pezesha, a peer to peer micro-lending ma..."
      }
    ],
    counter: 0
  },
  methods: {
    left: function () {
      if (this.counter >= 0)
        this.counter--
      if (this.counter < 0)
        this.counter = this.items.length - 1
    },
    right: function () {
      if (this.counter <= this.items.length - 1)
        this.counter++
      if (this.counter === this.items.length)
        this.counter = 0
    },
    isActive: function (num) {
      return num === this.counter
    }
  }
})

var articles = new Vue({
  el: '#articles',
  data: {
    items: [
      {
        title: 'Mastodon, a much better twitter',
        link: '#',
        pubDate: 'July 15, 2020',
        imageSrc: 'public/img/mastodon.jpg',
        tags: [
          {link: '#', text: 'Health'}
        ],
        content: "Mastodon  isn’t just a website, it is a federation—think Star Trek. Thousands of independent communities running Mastodon form a coherent network, where while every planet is different, being part of one is being part of the whole.  Cihuatl  is a Free CSS, Blogger"
      },
      {
        title: 'The magic in acupuncture',
        link: '#',
        pubDate: 'Julu 15, 2020',
        imageSrc: 'public/img/acupuncture.jpg',
        tags: [
          {link: '#', text: 'Health'},
          {link: '#', text: 'Woman'}
        ],
        content: "Acupuncture[a] is a form of alternative medicine and a key component of traditional Chinese medicine (TCM) in which thin needles are inserted into the body. Acupuncture is a pseudoscience because the theories and practices of TCM are not based on scientific knowledge, and it has been char…"
      },
      {
        title: 'What is Mindfulness?',
        link: '#',
        pubDate: 'Julu 15, 2020',
        imageSrc: 'public/img/mindfulness.jpg',
        tags: [
          {link: '#', text: 'Health'},
          {link: '#', text: 'Tech'},
          {link: '#', text: 'Woman'}
        ],
        content: "Mindfulness  is the psychological process of purposely bringing one's attention to experiences occurring in the present moment without judgment, which one develops through the practice of meditation and through other training. Mindfulness derives from sati, a significant element of Bu…"
      },
      {
        title: 'Health Benefits of Coconut oil',
        link: '#',
        pubDate: 'Julu 15, 2020',
        imageSrc: 'public/img/coconut-oil.jpg',
        tags: [
          {link: '#', text: 'Tech'}
        ],
        content: "Coconut oil, or copra oil, is an edible oil extracted from the kernel or meat of mature coconuts harvested from the coconut palm (Cocos nucifera). It has various applications. Because of its high saturated fat content, it is slow to oxidize and, thus, resistant to rancidification, lasting…"
      }
    ],
  }
})