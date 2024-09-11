import { Container } from "react-bootstrap";
import Header from "./components/Header";

const App = () => {
  return (
    <>
      <Header />
      <main className="py-3">
        <Container>
          <h1> MERN Cake Shop </h1>
        </Container>
      </main>    
    </>
  );
};

export default App