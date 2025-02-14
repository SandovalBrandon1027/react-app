function Titulo() {
  const nombre = "Brandon Sandoval";
  if (nombre) {
    return <h1>Hola {nombre}</h1>;
  } else {
    return <h1>Hola mundo</h1>;
  }
}

export default Titulo;
