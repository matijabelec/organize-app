<home-view>
  <h2>Home</h2>

  <p>{ authUser }</p>

  <button onclick={ logout }>Logout</button>

  <script>
    logout(e){
      auth.logout()
    }

    this.on('before-mount', function(){
      this.authUser = auth.loggedInUser()
    })
  </script>
</home-view>
