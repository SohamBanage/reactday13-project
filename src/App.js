import Userdef from "./tags/UserDef";
import "bootstrap/dist/css/bootstrap.css";
import Header from "./tags/Header";
import UserdefStyle from "./tags/UserdefStyle";
function App() {
  return (
    <div>
      <h1 className="bg-info text-success d-flex justify-content-center">
        <Interpolation />
      </h1>
      <div className="bg-secondary text-light d-flex justify-content-center fs-1">
        <Header />
      </div>

      <div className="bg-primary text-light d-flex justify-content-center">
        <h1>HELLO</h1>
      </div>
      <div className="bg-danger text-light d-flex justify-content-center fs-1">
        <p>
          <Userdef />
        </p>
      </div>

      <p>
        <UserdefStyle />
      </p>
    </div>
  );
}
function Interpolation() {
  let text = "<--MY NAME IS SOHAM-->";

  let customeStyle = { background: "purple", color: "white" };

  return <h3 style={customeStyle}>{text}</h3>;
}

export default App;
