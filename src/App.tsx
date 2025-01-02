import Input from "./components/Input";
// import Button from './components/Button';
import Container from "./components/Container";
import Button from "./components/Button";
import { useRef } from "react";
import Form from "./components/Form";

function App() {

  function handleSave(data: unknown){

    const extractedData= data as {name: string, age:string}
    console.log(extractedData)
  }

  return (
    <main>
      <Form onSave={handleSave}> 
        <Input type="text" label="name" id="name"/>
        <Input type="number" label="age" id="age"/>
        <p> 
          <Button>Save</Button>
        </p>
        </Form>
      {/* <Input label="Test" id="test" ref={input}/> */}
      {/* <Container as={Button}>Click me</Container>{" "} */}
    </main>
  );
}

export default App;
