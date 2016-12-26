<users-index>
  <h2>Users</h2>
  <user-details each={ opts.users }></user-details>

  <form onsubmit={ add }>
    <input ref="username" type="username" name="username">
    <textarea ref="bio" name="textarea"></textarea>
    <input type="submit" value="Add">
  </form>

  <script>
    add(e){
      e.preventDefault()

      opts.users.push({
        username: this.refs.username.value,
        bio: this.refs.bio.value
      })
      
      this.refs.username.value = '',
      this.refs.bio.value = ''
    }

    remove(e){
      var index = opts.users.indexOf(e.item)
      opts.users.splice(index, 1)
      this.update()
    }
  </script>
</users-index>

<user-details>
  <div>
    <h2>{ this.username }</h2>
    <p>{ this.bio }</p>
    <button onclick={ parent.remove }>X</button>
  </div>
</user-details>
