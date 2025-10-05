import { Outlet } from "react-router";
import "./App.css";
import Container from "./Components/container/Container";
import ControlledField from "./Components/controlledField/ControlledField";
import FormAction from "./Components/formAction/FormAction";
import SimpleForm from "./Components/simpleForm/SimpleForm";
import Header from "./Components/header/Header";
import ProdeuctManagement from "./Components/productManagement/ProductManagement";

function App() {
  return (
    <>
      <Container>
        <Header></Header>

        <Outlet>
        <SimpleForm></SimpleForm>
        <FormAction></FormAction>
        <ControlledField></ControlledField>
        <ProdeuctManagement></ProdeuctManagement>
        </Outlet>

      </Container>
    </>
  );
}

export default App;
