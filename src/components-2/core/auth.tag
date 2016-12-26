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
