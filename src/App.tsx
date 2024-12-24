import Input from "./components/Input";
// import Button from './components/Button';
import Container from "./components/Container";
import Button from "./components/Button";
import { useRef } from "react";

function App() {
  const input = useRef<HTMLInputElement>(null)
  return (
    <main>
      <Input label="Test" id="test" ref={input}/>
      {/* <Container as={Button}>Click me</Container>{" "} */}
    </main>
  );
}

export default App;
