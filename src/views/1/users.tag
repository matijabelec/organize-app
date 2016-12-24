<my-users>
  <h2>Users</h2>

  <table>
    <thead>
      <tr>
        <th>id</th>
        <th>name</th>
        <th>status</th>
        <th>&nbsp;</th>
      </tr>
    </thead>
    <tbody>
      <tr each={ users }>
        <td>{ id }</td>
        <td>{ name }</td>
        <td>{ status }</td>
        <td><a href="/users/{ id }">{ id }</a></td>
      </tr>
    </tbody>
  </table>

  <routehandler></routehandler>

  <script>
    var testUsers = [
      {id:1, name:'matijab', status:'admin'},
      {id:2, name:'abc', status:'user'},
      {id:3, name:'def', status:'user'}
    ];

    this.users = testUsers //this.opts.users | testUsers

  </script>
</my-users>
