import Input from "./components/Input";
import Button from './components/Button';

function App() {
  return <main>
    {/* <Input id="name" label ="your name" type="text"/>
    <Input id="age" label ="your age" type="number"/> */}

    <p>
      <Button el="button">A button</Button>
    </p>
    <p>
      <Button el="anchor" href="https://google.com">A  Link</Button>
    </p>
    </main>;
}

export default App;
