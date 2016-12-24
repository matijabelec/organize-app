<my-canvas-countdown>
  <canvas id="canvas-{ cid }" width="200" height="200"></canvas>

  <script>
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
  </script>
</my-canvas-countdown>
