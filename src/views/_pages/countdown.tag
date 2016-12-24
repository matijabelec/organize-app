<my-countdown>
	<div class="page-section">
    <section class="content text-center">
			<h2>I am working on it!</h2>
			<p>Web place is in the middle of developing</p>
			<p>Everything should be ready in</p>
			<div class="canvas-wrapper">
				<canvas id="canvas-1" width="300" height="200"></canvas>
				<div class="info-text">
					<div style="color: #c00"><span class="bigger">{ days }</span> days</div>
					<div style="color: #f26430"><span class="bigger">{ hours }</span> hours</div>
					<div style="color: #009ddc"><span class="bigger">{ minutes }</span> minutes</div>
					<div style="color: #ddd"><span class="bigger">{ seconds }</span> seconds</div>
				</div>
			</div>
		</section>
	</div>

	<script>
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

		tick(){
			calculate()
			this.update()
		}

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
	</script>

	<style>
		:scope .bigger{ font-size: 22px; }
		:scope .content.text-center{ text-align: center; }
		:scope .canvas-wrapper{ display: inline-block; position: relative; }
		:scope .info-text{ display: block; position: absolute; bottom: 16px; right: 16px; text-align: right; }
	</style>
</my-countdown>
