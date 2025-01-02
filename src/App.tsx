import Input from "./components/Input";
// import Button from './components/Button';
import Container from "./components/Container";
import Button from "./components/Button";
import { useRef } from "react";
import Form, {type FormHandle} from "./components/Form";


function App() {
const customForm = useRef<FormHandle>(null)

  function handleSave(data: unknown){

    const extractedData= data as {name: string, age:string}
    console.log(extractedData)
    customForm.current?.clear()
  }

  return (
    <main>
      <Form onSave={handleSave} ref={customForm}> 
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
