<table-view>
  <h2>{ opts.title }</h2>

  <table if={ opts.table }>
    <thead>
      <tr>
        <th each={ opts.table.cols }>{this.label }</th>
      </tr>
    </thead>
    <tbody>
      <tr each={ opts.table.rows }>
        <td each={ this.values }>{ this.value }</td>
      </tr>
    </tbody>
  </table>

  <script>
    
  </script>
</table-view>
