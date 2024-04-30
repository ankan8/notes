import "./Cardsstyles.css";
import Carddata from "./Carddata";
function Card() {
  return (
    <>
      <div className="trip">
        <h1> Recent blogs</h1>
        <p>here are some recent blogs</p>
      </div>
      <div className="tripcard">
        <Carddata
          image="https://images.unsplash.com/photo-1572648586565-8b332ccd46e4?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dHJhdmlzJTIwc2NvdHR8ZW58MHx8MHx8fDA%3D"
          heading="Travis"
          text=" one
          of
          the
          best"
          url="https://youtu.be/tfSS1e3kYeo?si=wSR31GWqeslKtYNU"
        />
        <Carddata
          image="https://images.unsplash.com/photo-1607873637553-132acdc40181?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8a2FueWV8ZW58MHx8MHx8fDA%3D"
          heading="kanye"
          text="the best"
          url="https://youtu.be/pEskP0ulPlA?si=crVAf3ZHqLr4NkiZ"
        />
        <Carddata
          image="https://images.unsplash.com/photo-1575918679350-bf26b1b4da71?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          heading="Juice world"
          text="one of the stars"
          url="https://youtu.be/h3EJICKwITw?si=NuCTVaAGeqpmJ3to"
        />
      </div>
    </>
  );
}
export default Card;
