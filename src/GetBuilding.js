<form
  name="build-contact"
  method="POST"
  data-netlify="true"
  netlify-honeypot="bot-field"
  action="/thanks"                  /* you can remove action to stay on /build */
  className="build-form"
>
  {/* required by Netlify */}
  <input type="hidden" name="form-name" value="build-contact" />

  {/* spam trap (hidden) */}
  <p hidden>
    <label>Don’t fill this out: <input name="bot-field" /></label>
  </p>

  {/* VISIBLE FIELDS */}
  <label>
    Your name
    <input type="text" name="name" required />
  </label>

  <label>
    Company / project
    <input type="text" name="company" />
  </label>

  <label>
    Email
    <input type="email" name="email" required />
  </label>

  <label>
    What are you looking to achieve?
    <textarea name="message" rows="5" required />
  </label>

  <button type="submit" className="cta primary">Get Building</button>
</form>
