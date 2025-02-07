import '../css/Contact.css'

const Contact = () => {
  return (
    <div className="grid-contact">
      <div className="comments-feedback__contact">
        <div>
          <h3>We're here to help</h3>
          <p>If you have any questions, don't hesitate to reach out to us.</p>
        </div>
        <div>
          <h3>Your feedback matters</h3>
          <p>We value your opinion and are always looking to improve.</p>
        </div>
        <div>
          <h3>Let's stay connected</h3>
          <p>Follow us on social media or send us a message anytime.</p>
        </div>
      </div>
      <form className="form-grid__contact">
        <p style={{ opacity: '.8'}}>
          Feel free to contact us for any inquiries, feedback, or assistance. We
          are happy to help!
        </p>
        <label>
          Name
          <input type="text" />
        </label>
        <label>
          Email
          <input type="text" />
        </label>
        <label>
          Subject
          <input type="text" />
        </label>
        <label>
          Comment
          <input type="text" />
        </label>
        <button>Send</button>
      </form>
    </div>
  )
}

export default Contact
