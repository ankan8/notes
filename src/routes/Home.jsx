import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Card from "../components/Card";

function Home() {
  return (
    <>
      <Navbar />
      <Hero
        cName="hero"
        heroimg="https://images.unsplash.com/photo-1426604966848-d7adac402bff?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        title="Blog!"
        text=" it's fun"
        url="/"
      />
      <Card />
    </>
  );
}
export default Home;
