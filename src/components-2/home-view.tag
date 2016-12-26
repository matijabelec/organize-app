<home-view>
  <h2>Home</h2>

  <p>{ authUser }</p>

  <button onclick={ logout }>Logout</button>

  <table-view table={ table_data }></table-view>

  <script>
    logout(e){
      auth.logout()
    }

    this.table_data = {
      cols: [
        { label: 'a' },
        { label: 'bc' },
        { label: 'd' },
        { label: 'efg' }
      ],
      rows: [
        {
          values: [
            { value: 12.52 },
            { value: 12.6 },
            { value: 12.11 },
            { value: 12.5 }
          ]
        },
        {
          values: [
            { value: 11 },
            { value: 1.6 },
            { value: 1 },
            { value: 6.4 }
          ]
        }
      ]
    }

    this.on('before-mount', function(){
      this.authUser = auth.loggedInUser()
    })
  </script>
</home-view>
