<login-form>
  <form onsubmit={ submit } method="post">
    <input ref="token" type="hidden" value="abcdefghijkl">

    <div class="e-input { show: part === 0 }">
      <label>
        <span>Username</span>
        <input ref="username" type="username" name="username" autofocus>
      </label>

      <button onclick={ next }>Next</button>
    </div>

    <div class="e-input { show: part === 1 }">
      <label>
        <span>Password</span>
        <input ref="password" type="password" name="password">
      </label>

      <input type="submit" value="Log in">
    </div>
  </form>

  <script>
    var self = this
    this.part = -1

    function setLoginToken(r){
      self.refs.token.value = r.token
      self.update({ part: 0 })
      self.refs.username.focus()
    }

    next(e){
      e.preventDefault()
      if(this.refs.username.value.length > 0){
        this.part = 1
        this.refs.password.focus()
      }
    }

    submit(e){
      e.preventDefault()
      if(this.refs.password.value.length > 0){
        auth.login(this.refs.username.value, this.refs.password.value, this.refs.token.value)
      }
    }

    auth.on('login-token', setLoginToken);

    this.on('mount', function(){
      auth.loginToken()
    })

    this.on('unmount', function(){
      auth.off('login-token', setLoginToken)
    })
  </script>
</login-form>
