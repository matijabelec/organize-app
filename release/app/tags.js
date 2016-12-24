riot.tag2('my-404-page', '<div class="page-section"> <section class="content"> <h2>Whoooops...</h2> <p>Page not found?!</p> <p>Impossible :D</p> </section> </div>', '', '', function(opts) {
});

riot.tag2('my-countdown', '<div class="page-section"> <section class="content text-center"> <h2>I am working on it!</h2> <p>Web place is in the middle of developing</p> <p>Everything should be ready in</p> <div class="canvas-wrapper"> <canvas id="canvas-1" width="300" height="200"></canvas> <div class="info-text"> <div style="color: #c00"><span class="bigger">{days}</span> days</div> <div style="color: #f26430"><span class="bigger">{hours}</span> hours</div> <div style="color: #009ddc"><span class="bigger">{minutes}</span> minutes</div> <div style="color: #ddd"><span class="bigger">{seconds}</span> seconds</div> </div> </div> </section> </div>', 'my-countdown .bigger,[data-is="my-countdown"] .bigger{ font-size: 22px; } my-countdown .content.text-center,[data-is="my-countdown"] .content.text-center{ text-align: center; } my-countdown .canvas-wrapper,[data-is="my-countdown"] .canvas-wrapper{ display: inline-block; position: relative; } my-countdown .info-text,[data-is="my-countdown"] .info-text{ display: block; position: absolute; bottom: 16px; right: 16px; text-align: right; }', '', function(opts) {
		var self = this;
		this.date = new Date()

		function calculate(){
			var date1 = new Date()
			var date2 = new Date('2016-12-19T22:00:00Z')
			var timeDiff = date2.getTime() - date1.getTime()
			var timeLeft = Math.ceil(timeDiff / 1000)
			self.days = Math.ceil(timeLeft / (3600 * 24))
			self.hours = Math.ceil(timeLeft / 3600) % 24
			self.minutes = Math.ceil(timeLeft / 60) % 60
			self.seconds = timeLeft % 60
		}

		this.time = opts.start || calculate()

		this.tick = function(){
			calculate()
			this.update()
		}.bind(this)

		var timer = setInterval(this.tick, 1000)

		function roundIt(val, max, s, color){
			val = val > 0 ? ((max-val)/max)*2 : 2

			self.ctx.beginPath()
			self.ctx.arc(100, 100, s, 0, 2*Math.PI)
			self.ctx.strokeStyle = '#222'
			self.ctx.lineWidth = 10.0
			self.ctx.stroke()
			self.ctx.closePath()

			self.ctx.beginPath()
			self.ctx.arc(100, 100, s, -0.5*Math.PI, (val-0.5)*Math.PI)
			self.ctx.strokeStyle = color
      self.ctx.lineWidth = 8.0
			self.ctx.stroke()
			self.ctx.closePath()
		}

		this.on('mount', function(){
			self.canvas = document.getElementById('canvas-1')
			self.ctx = self.canvas.getContext('2d')
			calculate()
			this.update()
		})

		this.on('update', function(){
			self.ctx.clearRect(0, 0, self.canvas.width, self.canvas.height);
      roundIt(self.seconds, 60, 80, '#ddd')
      roundIt(self.minutes, 60, 65, '#009ddc')
      roundIt(self.hours, 24, 50, '#f26430')
      roundIt(self.days, 10, 35, '#c00')
		})

		this.on('unmount', function(){
			clearInterval(timer)
		})
});

riot.tag2('my-home-page', '<section class="page-section"> <div class="container w720"> <h2>Welcome to belec.club!</h2> </div> </section> <article class="page-section w720"> <div class="wrapper wrapper-half"> <div class="container"> <h3>Huh, so.. You wanna a new shiny website?</h3> <p>I can create for You your new priceless part of web space.</p> <a href="#!contact" class="primary-action">Let\'s get connected!</a> </div> </div> <div class="wrapper wrapper-half"> <div class="container"> <h3>Huh, so.. You wanna a new shiny website?</h3> <p>I can create for You your new priceless part of web space.</p> <a href="#!contact" class="primary-action">Let\'s get connected!</a> </div> </div> </article> <section class="page-section"> <div class="container w720"> <my-contact-form></my-contact-form> </div> </section>', '', '', function(opts) {
    var s = this;
});

riot.tag2('my-wip-page', '<div class="page-section"> <section class="content text-center"> <h2>I am working on it!</h2> <p>Web place is in the middle of developing...</p> <div class="canvas-wrapper"> <canvas id="canvas-1" width="200" height="200"></canvas> <div class="info-text"> <div style="color: #f26430">Work in progress</div> </div> </div> </section> </div>', 'my-wip-page .content.text-center,[data-is="my-wip-page"] .content.text-center{ text-align: center; } my-wip-page .canvas-wrapper,[data-is="my-wip-page"] .canvas-wrapper{ display: block; position: relative; } my-wip-page .info-text,[data-is="my-wip-page"] .info-text{ display: block; font-weight: bold; }', '', function(opts) {
		var self = this
		this.val = opts.start || 0

		this.tick = function(){
			this.val = (this.val + 1)%30;
			this.update()
		}.bind(this)

		var timer = setInterval(this.tick, 50)

		function roundIt(val, max, s, color){
			val = val > 0 ? (val/max)*2 : 2

			self.ctx.beginPath()
			self.ctx.arc(100, 100, s, 0, 2*Math.PI)
			self.ctx.strokeStyle = '#222'
			self.ctx.lineWidth = 20.0
			self.ctx.stroke()
			self.ctx.closePath()

			self.ctx.beginPath()
			self.ctx.arc(100, 100, s, (val-0.2)*Math.PI, (val+0.2)*Math.PI)
			self.ctx.strokeStyle = color
      self.ctx.lineWidth = 18.0
			self.ctx.stroke()
			self.ctx.closePath()
		}

		this.on('mount', function(){
			self.canvas = document.getElementById('canvas-1')
			self.ctx = self.canvas.getContext('2d')
			this.update()
		})

		this.on('update', function(){
			self.ctx.clearRect(0, 0, self.canvas.width, self.canvas.height);
      roundIt(self.val, 30, 65, '#009ddc')

		})

		this.on('unmount', function(){
			clearInterval(timer)
		})
});

riot.tag2('my-app', '<div class="navbar"> <div class="container w720"> <a href="http://matijabelec.com/" class="page-id">matijabelec.com</a> <button class="act-toggle-page-nav" onclick="{toggleNav}"> <i class="material-icons">menu</i> </button> </div> <div class="container w720"> <nav class="page-nav {preview: nav}"> <ul class="container w720"> <li><a href="#!home">Home</a></li> <li><a href="#!about">About</a></li> </ul> </nav> </div> </div> <main class="page-content"></main> <footer class="page-footer"> <div class="container w720"> <p>created with passion by <a href="">matija belec</a></p> </div> </footer>', '', '', function(opts) {
    var self = this
    this.nav = false

    this.toggleNav = function(){ this.nav = !this.nav }.bind(this)
    this.hideNav = function(){ this.nav = false }.bind(this)
    this.showNav = function(){ this.nav = true }.bind(this)

    var changePage = function(tag){
      self.update({ nav: false })
      riot.mount('.page-content', tag);
    }

    this.on('mount', function(){

      route('/work-in-progress', function(){ changePage('my-wip-page') })
      route('*', function(){ route('work-in-progress') })
      route('',function(){ route('work-in-progress') })

      route.base('#!')
      route.stop()
      route.start(true)
    })
});

riot.tag2('my-canvas-countdown', '<canvas id="canvas-{cid}" width="200" height="200"></canvas>', '', '', function(opts) {
    var self = this
    self.cid = opts.cid || 1

    this.on('mount', function(){
      var e = document.getElementById('canvas-' + self.cid)
      var c = e.getContext('2d')

      function roundIt(val, max, s, color) {
        c.strokeStyle = color || '#c00'
        s = s || 80
        val = val > 0 ? ((max-val)/max)*2 : 0
        c.beginPath()
        c.arc(x, y, s, 0, val*Math.PI)
        c.stroke()
        c.closePath()
      }

      c.lineWidth = 8.0;
      c.lineCap = 'round'

      var x = 100, y = 100
      var size = 80, size_diff = 14
      roundIt(10, 60, size, '#ddd')
      roundIt(16, 60, size-size_diff, '#009ddc')
      roundIt(10, 24, size-2*size_diff, '#f26430')
      roundIt(10, 10, size-3*size_diff)
    })
});

riot.tag2('my-contact-form', '<form onsubmit="{submit}"> <label> <span>Your e-mail</span> <input name="email" required type="email"> </label> <label> <span>Your name</span> <input type="text" name="name" required> </label> <label> <span>Message</span> <textarea name="message" required></textarea> </label> <input type="submit" value="Send" disabled> </form>', '', '', function(opts) {
    this.submit = function(e){
      e.preventDefault();
      aja()
  		  .method('post')
  		  .url('/contact.php')
  		  .on('200', function(res){
  				self.update({ msg: res.record });
  		  })
  		  .go();
    }.bind(this)
});
