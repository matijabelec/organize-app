<my-standard-template>

  <header class="e-topbar">
      <button class="act-show-left" onclick={ showLeft }>
        <i class="material-icons">menu</i>
      </button>
      <button class="act-show-right" onclick={ showRight }>
        <i class="material-icons">notifications</i>
      </button>
  </header>

  <div class="e-left { show: left }">
    <button class="act-close-left" onclick={ hideLeft }>
      <i class="material-icons">close</i>
    </button>
    <nav>
      <ul>
        <li><a href="#!{ p }/home">Home</a></li>
        <li><a href="#!{ p }/about">About</a></li>
        <li><a href="#!{ p }/projects">Projects</a></li>
        <li><a href="#!{ p }/contact">Contact</a></li>
      </ul>
    </nav>
  </div>

  <div class="e-right { show: right }">
    <button class="act-close-right" onclick={ hideRight }>
      <i class="material-icons">close</i>
    </button>
    <nav>
      <ul>
        <li><a href="#!{ p }/home">Home</a></li>
        <li><a href="#!{ p }/about">About</a></li>
        <li><a href="#!{ p }/projects">Projects</a></li>
        <li><a href="#!{ p }/contact">Contact</a></li>
      </ul>
    </nav>
  </div>

  <div class="e-main-wrapper { show-left: left, show-right: right }">
    <main class="e-main"></main>
    <footer class="e-footer">
      <p>created with passion by <a href="http://matijabelec.com/">matija belec</a></p>
    </footer>
  </div>
  <div class="e-overlay { show: left || right }" onclick={ hideBoth }></div>

  <script>
    var self = this
    this.left = false
    this.right = false
    this.p = 'app'

    showLeft(){ this.left = true }
    showRight(){ this.right = true }

    hideLeft(){ this.left = false }
    hideRight(){ this.right = false }

    hideBoth(){ this.left = this.right = false }

    var changePage = function(tag){
      self.update({ left: false, right: false })
      riot.mount('.e-main', tag);
    }

    this.on('mount', function(){
      route(this.p + '/home', function(){ changePage('my-home-page') })
      route(this.p + '/*', function(){ route('404') })
      route(this.p + '', function(){ route(this.p + '/home') })

      route.base('#!')
      route.start(true)
    })
  </script>
</my-standard-template>
