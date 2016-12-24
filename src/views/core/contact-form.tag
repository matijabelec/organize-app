<my-contact-form>
  <form onsubmit={ submit }>
    <label>
      <span>Your e-mail</span>
      <input type="email" name="email" required>
    </label>

    <label>
      <span>Your name</span>
      <input type="text" name="name" required>
    </label>

    <label>
      <span>Message</span>
      <textarea name="message" required></textarea>
    </label>

    <input type="submit" value="Send" disabled>
  </form>

  <script>
    submit(e){
      e.preventDefault();
      aja()
  		  .method('post')
  		  .url('/contact.php')
  		  .on('200', function(res){
  				self.update({ msg: res.record });
  		  })
  		  .go();
    }
  </script>
</my-contact-form>
