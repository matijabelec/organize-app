<a-navigation>
  <nav class="e-nav">
    <ul>
      <li each={ link in opts.links }>
        <a href={ link.href }>{ link.label }</a>
        <ul if={ link.sub }>
          <li each={ link2 in link.sub }>
            <a href={ link2.href }>{ link2.label }</a>
          </li>
        </ul>
      </li>
    </ul>
  </nav>
</a-navigation>
