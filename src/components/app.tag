<a-app>
  <div class="e-background"></div>
  <a-navigation links={ links }></a-navigation>
  <div class="e-overlay"></div>
  <div class="e-main-wrapper">
    <a-header></a-header>
    <main data-is={ content }></main>
    <a-footer></a-footer>
  </div>

  <script>
    var self = this
    this.content = 'a-404-index'
    this.links = [
      { label: 'home', href: '/#!home' },
      { label: 'projects', href: '/#!projects'/*, sub: [
        { label: 'web', href: '/#!projects/web' },
        { label: 'other', href: '/#!projects/other' }
      ]*/},
      { label: 'contact', href: '/#!contact' }
    ]

    route.stop()
    route.start(true)
    route.base('#!')
    route(              function(){ self.update({content: 'a-404-index'}) })
    route('/(|home)',      function(){ self.update({content: 'a-home-index'}) })
    route('/projects/web',   function(){ self.update({content: 'a-projects-web'}) })
    route('/projects/other',   function(){ self.update({content: 'a-projects-other'}) })
    route('/projects',   function(){ self.update({content: 'a-projects-index'}) })
    route('/contact',   function(){ self.update({content: 'a-contact-index'}) })
  </script>
</a-app>
