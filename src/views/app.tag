<my-app>
  <div class="e-page"></div>

  <script>
    var self = this
    this.left = false
    this.right = false

    showLeft(){ this.left = true }
    showRight(){ this.right = true }

    hideLeft(){ this.left = false }
    hideRight(){ this.right = false }

    hideBoth(){ this.left = this.right = false }

    var changePage = function(tag){
      self.update({ left: false, right: false })
      riot.mount('.e-page', tag);
    }

    this.on('mount', function(){
      route('app/*', function(){ changePage('my-standard-template') })
      route('404', function(){ changePage('my-404-page') })
      route('*', function(){ route('404') })
      route('', function(){ route('app') })

      
    })
  </script>
</my-app>
