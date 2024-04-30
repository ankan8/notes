import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Contactform from "../components/Contactform";
import Signupform from "../components/Signupform";
function Signup() {
  return (
    <>
      <Navbar />
      <Hero
        cName="hero-kid"
        heroimg="https://images.unsplash.com/photo-1710695700908-ecc17c0fae59?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDIyMnxibzhqUUtUYUUwWXx8ZW58MHx8fHx8"
        title="Sign up now!"
        text=""
        url="/"
      />
      <Signupform />
    </>
  );
}
export default Signup;
