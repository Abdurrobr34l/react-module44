import { Outlet } from "react-router";
import "./App.css";
import Container from "./Components/container/Container";
import FormAction from "./Components/formAction/FormAction";
import SimpleForm from "./Components/simpleForm/SimpleForm";
import Header from "./Components/header/Header";

function App() {
  return (
    <>
      <Container>
        <Header></Header>

        <Outlet>
        <SimpleForm></SimpleForm>
        <FormAction></FormAction>
        </Outlet>

        
      </Container>
    </>
  );
}

export default App;
