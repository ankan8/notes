import "./Signupformstyles.css";
function Signupform() {
  return (
    <div className="form-container">
      <h1>Sign up</h1>
      <form>
        <input placeholder="First name"></input>
        <input placeholder="Last name"></input>
        <input placeholder="Email"></input>
        <input placeholder="Password"></input>

        <button>Join</button>
      </form>
    </div>
  );
}
export default Signupform;
