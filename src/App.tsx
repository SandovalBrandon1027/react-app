import Card, { CardBody } from "./components/Card";
import List from "./components/List";

function App() {
  const list = ["Goku", "vegeta"];

  return (
    <Card>
      <CardBody title="Hola mundo2" text="Este es el nuevo texto" />
      <List data={list} />
    </Card>
  );
}

export default App;
