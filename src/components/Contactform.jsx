import "./Contactformstyles.css";
function Contactform() {
  return (
    <div className="form-container">
      <h1>Send a message</h1>
      <form>
        <input placeholder="Name"></input>
        <input placeholder="Email"></input>
        <input placeholder="Subject"></input>
        <textarea placeholder="Message" rows="4" />
        <button>Send</button>
      </form>
    </div>
  );
}
export default Contactform;
