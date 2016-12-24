<my-wip-page>
	<div class="page-section">
    <section class="content text-center">
			<h2>I am working on it!</h2>
			<p>Web place is in the middle of developing...</p>
			<div class="canvas-wrapper">
				<canvas id="canvas-1" width="200" height="200"></canvas>
				<div class="info-text">
					<div style="color: #f26430">Work in progress</div>
				</div>
			</div>
		</section>
	</div>

	<script>
		var self = this
		this.val = opts.start || 0

		tick(){
			this.val = (this.val + 1)%30;
			this.update()
		}

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
      // roundIt(self.seconds, 24, 50, '#f26430')
		})

		this.on('unmount', function(){
			clearInterval(timer)
		})
	</script>

	<style>
		:scope .content.text-center{ text-align: center; }
		:scope .canvas-wrapper{ display: block; position: relative; }
		:scope .info-text{ display: block; font-weight: bold; }
	</style>
</my-wip-page>
