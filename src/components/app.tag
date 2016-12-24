<app>
  <header>
  </header>

  <nav data-is={ nav_view }></nav>
  <main data-is={ main_view }></main>

  <footer>
    <p>with <i class="material-icons">favorite</i> by matijabelec</p>
  </footer>

  <script>
    var self = this
    this.main_view = 'login-form'
    this.nav_view = 'nav-public'

    auth.on('logged-in', function(r){
      self.update({
        main_view: 'home-view',
        nav_view: 'nav-user'
      })
    })

    auth.on('logged-out', function(r){
      self.update({
        main_view: 'login-form',
        nav_view: 'nav-public'
      })
    })
  </script>
</app>
