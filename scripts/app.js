var page = [];

page[0] = {};
page[0].name = "loading";
page[0].loaded = function () {
  var el = document.querySelector('#mask');
  el.style.opacity = 0;
  setTimeout(function () {
    el.style.display = 'none';
  }, 300)
}


page[1] = {};
//data
page[1].name = "cover";
page[1].id = "#load";

//methods
page[1].init = function () {
  var button_next = document.querySelector('#load-next'),
    container = document.querySelector('#load'),
    mouseMoveFrom = 0,
    touchMoveFrom = 0;

  container.addEventListener('mousedown', function(e){
    mouseMoveFrom = e.pageY
  })
  container.addEventListener('mouseup', function (e) {
    if(e.pageY - mouseMoveFrom < -100){
      page[1].slideUp();
    }
    mouseMoveFrom = 0
  })
  container.addEventListener('touchstart', function(e){
    touchMoveFrom = e.pageY
  })
  container.addEventListener('touchend', function (e) {
    if(e.pageY - touchMoveFrom < -100){
      page[1].slideUp();
    }
    touchMoveFrom = 0
  })
  // container.addEventListener('DOMMouseScroll', function (e) {
  //   page[1].slideUp();
  // })
  //
  // container.addEventListener('mousewheel', function (e) {
  //   if(e.deltaY > 0){
  //     page[1].slideUp();
  //   }
  // })

  button_next.addEventListener('click', function () {
    page[1].slideUp();
  })
}
page[1].slideUp = function () {
  var el = document.querySelector(this.id);
  el.classList.add('page-hide-up')
  page[1].bg.holdBreath();
}
page[1].slideDown = function () {
  var el = document.querySelector(this.id);
  el.classList.remove('page-hide-up')
  page[1].bg.breath();
}

//instances
page[1].anime = (function () {
  var p = document.querySelectorAll('#load-type > p'),
    b = document.querySelector('#load-next')

  function init() {
    p[0].classList.add('before-type');
    p[1].classList.add('before-type');
    b.classList.add('before-type');
  }

  function start() {
    p[0].classList.add('typing');
    p[0].classList.remove('before-type');
    setTimeout(function () {
      p[1].classList.add('typing');
      p[1].classList.remove('before-type');
      setTimeout(function () {
        b.classList.remove('before-type');
        b.classList.add('button-blink');
      },2000)
    },2500);
  }




  return {
    init: init,
    start: start
  }
})()

page[1].bg = new pixelArt(['images/wyman-1.jpg','images/wyman-2.jpg','images/wyman-3.jpg'], '#load-bgs #one');



page[2] = {}
//data
page[2].name = "content"
page[2].id = "#content"
page[2].themes = [
  {
    name: '垃圾四部曲【陈辉阳作曲】',
    items:[
      {song: '《垃圾》', singer: '卢巧音'},
      {song: '《绝》', singer: '高雪岚（傅佩嘉）'},
      {song: '《漩涡》', singer: '彭羚/黄耀明'},
      {song: '《破相》', singer: '卢巧音'}
    ]
  },
  {
    name: '"收皮"系列【Swing唱、作】',
    items:[
      {song: '《大大公司》', singer: 'Swing'},
      {song: '《帝国大厦》', singer: 'Swing'},
      {song: '《那边见》', singer: 'Swing'}
    ]
  },
  {
    name: '男玩五部曲【陈奕迅唱】',
    items:[
      {song: '《裙下之臣》', singer: '陈奕迅'},
      {song: '《葡萄成熟时》', singer: '陈奕迅'},
      {song: '《人车志》', singer: '陈奕迅'},
      {song: '《沙龙》', singer: '陈奕迅'},
      {song: '《陀飞轮》', singer: '陈奕迅'}
    ]
  },
  {
    name: '男玩五部曲【何韵诗唱】',
    items:[
      {song: '《水花四溅》', singer: '何韵诗'},
      {song: '《沙》', singer: '何韵诗'},
      {song: '《木纹》', singer: '何韵诗'},
      {song: '《金刚经》', singer: '何韵诗'},
      {song: '《惹火》', singer: '何韵诗'}
    ]
  },
  {
    name: '海陆空三部曲【官恩娜唱】',
    items:[
      {song: '《地平线》', singer: '官恩娜'},
      {song: '《暗恋航空》', singer: '官恩娜'},
      {song: '《千帆》', singer: '官恩娜'}
    ]
  },
  {
    name: '性取向系列',
    items:[
      {song: '《光明会》', singer: '何韵诗'},
      {song: '《露丝玛丽》', singer: '何韵诗'},
      {song: '《再见...露丝玛丽》', singer: '何韵诗'},
      {song: '《劳诗·莱斯》', singer: '何韵诗'},
      {song: '《男孩像你》', singer: '何韵诗'},
      {song: '《查理淑仪》', singer: '何韵诗'}
    ]
  },
  {
    name: '悲情三部曲【卢巧音唱 雷颂德作曲】',
    items:[
      {song: '《好心分手》', singer: '卢巧音'},
      {song: '《三角志》', singer: '卢巧音'},
      {song: '《落地开花》', singer: '卢巧音'}
    ]
  },
  {
    name: '电影系列【收录于Shine《电影男孩》中】',
    items:[
      {song: '《祖与占》', singer: 'Shine'},
      {song: '《燕尾蝶》', singer: 'Shine'},
      {song: '《一一》', singer: 'Shine'},
      {song: '《盗日者》', singer: 'Shine'},
      {song: '《午夜快车》', singer: 'Shine'}
    ]
  },
  {
    name: '电视节目系列',
    items:[
      {song: '《欢乐今宵》', singer: '古巨基'},
      {song: '《妇女新知》', singer: '莫文蔚'},
      {song: '《瞬间看地球》', singer: '陈苑淇'},
      {song: '《星期五档案》', singer: '陈慧琳'},
      {song: '《跳飞机》', singer: '古巨基'},
      {song: '《再见穿梭机》', singer: '李克勤'}
    ]
  }
]

//methods
page[2].init = function () {
  var button_next = document.querySelector('#content-next'),
      button_lyricist = document.querySelector('#a-lyricist'),
      button_actor = document.querySelector('#a-actor'),
      button_fashion = document.querySelector('#a-fashion'),
      container = document.querySelector('.sub-pages'),
      pages = document.querySelectorAll('.sub-page'),
      button_close = document.querySelector('.sub-pages .return')
      originalPage = document.querySelector('.page'),
      themeslists = document.querySelector('.theme-items')
      el = document.querySelector(page[2].id)

  function addThemes() {
    var themes = page[2].themes;
    themes.forEach(function (t) {
      var el = document.createElement('li'),
        span = document.createElement('span'),
        ul = document.createElement('ul');

      el.classList.add('theme-name');
      el.innerHTML = t.name;
      span.classList.add('theme-tag-fold');
      el.appendChild(span);

      t.items.forEach(function (item) {
        var li = document.createElement('li');
        li.classList.add('theme-item')
        li.innerHTML = item.song + ' - ' + item.singer;
        ul.appendChild(li)
      })
      el.appendChild(ul);

      themeslists.appendChild(el);
    })
  }
  addThemes()

  button_lyricist.addEventListener('click', function () {
    originalPage.style.display = 'none';
    container.classList.remove('sub-pages-hide','page-actor','page-fashion');
    container.classList.add('page-lyricist');
    pages[0].classList.add('sub-page-show');
  })
  button_actor.addEventListener('click', function () {
    originalPage.style.display = 'none';
    container.classList.remove('sub-pages-hide','page-lyricist','page-fashion');
    container.classList.add('page-actor');
    pages[1].classList.add('sub-page-show');
  })
  button_fashion.addEventListener('click', function () {
    originalPage.style.display = 'none';
    container.classList.remove('sub-pages-hide','page-actor','page-lyricist');
    container.classList.add('page-fashion');
    pages[2].classList.add('sub-page-show');
  })

  button_close.addEventListener('click', function () {
    originalPage.style.display = '';
    pages[0].classList.remove('sub-page-show');
    pages[1].classList.remove('sub-page-show');
    pages[2].classList.remove('sub-page-show');
    container.classList.add('sub-pages-hide');
  })


  button_next.addEventListener('click', function () {
    page[2].slideUp();
  })
}

page[2].slideUp = function () {
  var el = document.querySelector(this.id);
  el.classList.add('page-hide-up')

  page[3].show()
}
page[2].slideDown = function () {
  var el = document.querySelector(this.id);
  el.classList.remove('page-hide-up');
}

page[3] = {}
//data
page[3].name = "final"
page[3].id = "#final"
page[3].songlist = [
  {title: '燕尾蝶', singer: 'Shine'},

  {title: '最佳损友', singer: '陈奕迅'},
  {title: '浮夸', singer: '陈奕迅'},

  {title: '喜帖街', singer: '谢安琪'},
  {title: '年度之歌', singer: '谢安琪'},

  {title: '罗生门', singer: '麦浚龙,谢安琪'},

  {title: '再见...露丝玛丽', singer: '何韵诗'},

  {title: '倾城', singer: '许美静'},

  {title: '可惜我是水瓶座', singer: '杨千嬅'},
  {title: '野孩子', singer: '杨千嬅'},

  {title: '你没有好结果', singer: '李蕙敏'},

  {title: '小王子', singer: '黄耀明'},

  {title: '垃圾', singer: '卢巧音'}
]

//methods
page[3].init = function () {
  var songlistButton = document.querySelector('#final .songlist');
  var canvas = document.querySelector('#final #canvas-final');
  var overlay = document.querySelector('#final .overlay');
  var commands = document.querySelector('#final .commands');
  var buttonReturn = document.querySelector('#final .button-return');

  function initSonglist() {
    page[3].songlist.forEach(function (song, i) {
      var el = document.createElement('div');
      el.classList.add('commands-item');
      el.dataset.id = i;
      el.innerHTML = '<span class="commands-item-title">'+song.title+'</span><span class="commands-item-info">'+song.singer+'</span><span class="commands-item-tag">Wyman</span>'
      commands.appendChild(el);
    })
  }

  commands.addEventListener('click', function (e) {
    var el,
        id,
        songlist = page[3].songlist;

    if(!e.target.classList.contains('commands-item')){
      el = e.target.parentNode;
    }
    if(el){
      id =  el.dataset.id;
      if(!songlist[id]){
        return;
      }
      var song = songlist[id];

      //play songs
      page[3].player.play('/audio/'+song.singer+'-'+song.title+'.mp3');
      page[3].setText(song.singer+'|'+song.title + '|Wyman☆');

      overlay.classList.remove('overlay-visible');
    }
  })

  songlistButton.addEventListener('click', function () {
    overlay.classList.toggle('overlay-visible');
  })
  canvas.addEventListener('click', function () {
    overlay.classList.remove('overlay-visible');
  })
  buttonReturn.addEventListener('click', function () {
    overlay.classList.remove('overlay-visible');
    page[3].player.stop();

    page[2].slideDown();
    page[1].slideDown();

  })

  window.addEventListener('resize', function () {
    page[3].setText('');
  })

  initSonglist();
}
page[3].show = function () {
  page[3].setText('黄伟文|热门单曲|Ready');
}

//instances
page[3].setText = shapeShifter;
page[3].player = (function () {
  try {
    // Fix up for prefixing
    window.AudioContext = window.AudioContext||window.webkitAudioContext;
    var context = new AudioContext();
  }
  catch(e) {
    // alert('Web Audio API is not supported in this browser');
    return;
  }

  var source = null;

  function loadSound(url) {
    var request = new XMLHttpRequest();
    request.open('GET', url, true);
    request.responseType = 'arraybuffer';

    // Decode asynchronously
    request.onload = function() {
      context.decodeAudioData(request.response, function(buffer) {
        playSound(buffer)
      }, function (e) {
        return;
      });
    }

    request.send();
  }

  function stopSound() {
    if (source) {
        source.stop(0); //stop immediately
    }
  }
  function playSound(buffer) {
    if (source) {
        source.disconnect(0)
    }

    source = context.createBufferSource();
    source.buffer = buffer;
    source.loop = false;
    source.connect(context.destination);
    source.start(0); //start immediately
  }

  return {
    play: loadSound,
    stop: stopSound
  }
})()


window.onload = function () {

  page[1].init()
  page[1].anime.init()

  page[2].init()

  page[3].init()

  setTimeout(function () {
    page[0].loaded()
    page[1].anime.start()
    page[1].bg.breath()

    //bgm
    // page[3].player.play('audio/陈奕迅-打回原形.mp3');
  },500);


}
