import '../css/Contact.css'
const Contact = () => {
  return (
    <div className="grid-contact">
      <div>
        <div>
          <h3>item</h3>
          <p>item paragraph</p>
        </div>
        <div>
          <h3>item</h3>
          <p>item paragraph</p>
        </div>
        <div>
          <h3>item</h3>
          <p>item paragraph</p>
        </div>
      </div>
      <form className="form-grid__contact">
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloremque
          veritatis
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
