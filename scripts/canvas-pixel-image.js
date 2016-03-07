(function (window) {

  function pixelArt(imgs, el, options) {

    this.canvas = document.querySelector(el);
    this.ctx = this.canvas.getContext && this.canvas.getContext('2d');
    if(!this.ctx){
      return;
    }


    this.src = imgs || [];
    this.img = this.src[0];
    this.gap = options && options.gap || 7;
    if (!this.img) {
      return;
    }

    this.dots = [];
    this.fillAlpha = 1;
    this.fillColor = 'rgba(0,0,0,';

    this.imgHeight = 0;
    this.imgWidth = 0;

    this.interval;
    this.state = 1;

    this.imgData = [];

  }

  pixelArt.prototype.loadImage = function () {
    var loadingImg = new Image();
    loadingImg.onload = function (){
      this.onLoadImg(loadingImg)
    }.bind(this);
    loadingImg.src = this.img;
  }

  pixelArt.prototype.onLoadImg = function (img) {
    this._getImgData(img);
    this._getDots();
    this._drawDots();

  }

  pixelArt.prototype._getImgData = function (img) {
    this.canvas.width = this.imgWidth = img.width;
    this.canvas.height = this.imgHeight = img.height;
    this.ctx.drawImage(img, 0, 0);
    this.imgData = this.ctx.getImageData(0, 0, this.imgWidth, this.imgHeight).data;
    this.ctx.clearRect(0, 0, this.imgWidth, this.imgHeight);
  }

  pixelArt.prototype._getDots = function () {
    var gap = this.gap,
        width = this.imgWidth,
        height = this.imgHeight;

    this.dots = [];

    for(var i = 3; i < width; i += gap){
      for(var j = 3; j < height; j += gap){
        var colorChannels = [];
        colorChannels.push(this.imgData[4*(i+j*width)]);
        colorChannels.push(this.imgData[4*(i+j*width)+1]);
        colorChannels.push(this.imgData[4*(i+j*width)+2]);

        // var colorChannels = this.imgData.slice(4*(i+j*width), 4*(i+j*width)+3);
        var dot = {x: i, y: j, r: colorToRadius(colorChannels)};
        this.dots.push(dot);
      }
    }

    function colorToRadius(channels) {
      var sum = channels[0] + channels[1] + channels[2];
      c = gap - ~~(sum / 3 / (250/(gap-2)) + 2);
      c = c > (gap-3) ? c+2 : c;
      return c;
    }
  }

  pixelArt.prototype._drawDots = function () {
    var _this = this;

    function draw() {
      _this.ctx.clearRect(0, 0, _this.imgWidth, _this.imgHeight);
      _this.ctx.fillStyle = _this.fillColor + _this.fillAlpha + ')';

      for (var i = 0; i < _this.dots.length; i++) {
        var dot = _this.dots[i];
        _this.ctx.beginPath()
        _this.ctx.arc(dot.x, dot.y, (dot.r/2), 0, 2*Math.PI);
        _this.ctx.fill();
        _this.ctx.closePath();
      }
    }
    draw();
  }

  pixelArt.prototype.holdBreath = function () {
    clearInterval(this.interval);
    this.state = 1;
    this.fillAlpha = 1;
    this._drawDots();
  }

  pixelArt.prototype.breath = function () {
    this.loadImage()

    var step = -0.07,
      _this = this;
    clearInterval(this.interval);
    if(this.state == 0){
      //show
      this.interval = setInterval(function () {
        _this.fillAlpha += 0.2;
        _this._drawDots();
        if(_this.fillAlpha > 1){
          _this.state = 1;
          _this.breath();
        }
      }, 1000/20);

    }else if(this.state == 1){
      //display
      this.interval = setInterval(function () {
        _this.state = 2;
        _this.breath();
      }, 2000);
    }else {
      //fade
      this.interval = setInterval(function () {
        _this.fillAlpha += -0.1;
        _this._drawDots();
        if(_this.fillAlpha < 0){
          _this.state = 0;
          var index = _this.src.indexOf(_this.img),
            length = _this.src.length;
          if(index+1 == length){
            index = 0;
          }else{
            index += 1;
          }
          _this.img = _this.src[index];
          _this.loadImage();

          _this.breath();
        }
      }, 1000/20);
    }
  }


function Dot(x,y,z) {
  this.x = x || 0;
  this.y = y || 0;
  this.r = z || 0;
  this.color = 'rgba(0,0,0,1)';
}

window.pixelArt = pixelArt;

// a = new pixelArt(['images/wyman-1.jpg','images/wyman-2.jpg','images/wyman-3.jpg'], '#ui',{})
// a.breath()
})(window);
