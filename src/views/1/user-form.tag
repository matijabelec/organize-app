<my-user-form>
  <h2>User form</h2>

  <form>
    <label>
      <div>Id: </div>
      <input type="number" value={ user.id }>
    </label>

    <label>
      <div>Username: </div>
      <input type="text" value={ user.username }>
    </label>

    <label>
      <div>Status: </div>
      <input type="text" value={ user.status }>
    </label>

    <input type="submit" value="Update">
  </form>

  <script>
    var self = this

    var id = opts.params.id || 0
    console.log(id)

    this.user = {
      id: id,
      username: 'abseuifg',
      status: 'admin'
    }

    this.on('router-update', function(){
      id = opts.params.id || id
      self.user={
        id: id,
        username: 'abseuifg',
        status: 'admin'
      }
    })
  </script>

</my-user-form>
