riot.tag2('app', '<header> </header> <nav data-is="{nav_view}"></nav> <main data-is="{main_view}"></main> <footer> <p>with <i class="material-icons">favorite</i> by matijabelec</p> </footer>', '', '', function(opts) {
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
});

var auth = riot.observable()

auth.loginToken = function(params){
  aja()
    .method('get')
    .url('/api/login')
    .on('200', function(response){
      auth.trigger('login-token', response)
    })
    .go()
}

auth.login = function(username, password, token){
  var sha = new jsSHA("SHA-512", "TEXT")
  sha.update(username + password + token)
  var hash = sha.getHash('B64')
  
  aja()
    .method('post')
    .url('/api/login')
    .data({ 'username': username, 'auth': hash })
    .on('200', function(response){
      auth._authUser = response.user
      auth.trigger('logged-in', response)
    })
    .go()
}

auth.logout = function(){
  aja()
    .method('post')
    .url('/api/logout')
    .on('200', function(response){
      auth._authUser = undefined
      auth.trigger('logged-out', response)
    })
    .go()
}

auth.loggedInUser = function(){
  return auth._authUser
}

riot.tag2('home-view', '<h2>Home</h2> <p>{authUser}</p> <button onclick="{logout}">Logout</button>', '', '', function(opts) {
    this.logout = function(e){
      auth.logout()
    }.bind(this)

    this.on('before-mount', function(){
      this.authUser = auth.loggedInUser()
    })
});

riot.tag2('login-form', '<form onsubmit="{submit}" method="post"> <input ref="token" type="hidden" value="abcdefghijkl"> <div class="e-input {show: part === 0}"> <label> <span>Username</span> <input ref="username" type="username" name="username" autofocus> </label> <button onclick="{next}">Next</button> </div> <div class="e-input {show: part === 1}"> <label> <span>Password</span> <input ref="password" type="password" name="password"> </label> <input type="submit" value="Log in"> </div> </form>', '', '', function(opts) {
    var self = this
    this.part = -1

    function setLoginToken(r){
      self.refs.token.value = r.token
      self.update({ part: 0 })
      self.refs.username.focus()
    }

    this.next = function(e){
      e.preventDefault()
      if(this.refs.username.value.length > 0){
        this.part = 1
        this.refs.password.focus()
      }
    }.bind(this)

    this.submit = function(e){
      e.preventDefault()
      if(this.refs.password.value.length > 0){
        auth.login(this.refs.username.value, this.refs.password.value, this.refs.token.value)
      }
    }.bind(this)

    auth.on('login-token', setLoginToken);

    this.on('mount', function(){
      auth.loginToken()
    })

    this.on('unmount', function(){
      auth.off('login-token', setLoginToken)
    })
});

riot.tag2('nav-public', '<ul> <li><a href="#!contact">contact</a></li> </ul>', '', '', function(opts) {
});

riot.tag2('nav-user', '<ul> <li><a href="#!">me</a></li> <li><a href="#!projects">projects</a></li> <li><a href="#!contact">contact</a></li> </ul>', '', '', function(opts) {
});
