import Input from "./components/Input";
import Button from './components/Button';

function App() {
  return <main>
    {/* <Input id="name" label ="your name" type="text"/>
    <Input id="age" label ="your age" type="number"/> */}

    <p>
      <Button href={undefined}>A button</Button>
    </p>
    <p>
      <Button href="https://google.com" >A  Link</Button>
    </p>
    </main>;
}

export default App;
