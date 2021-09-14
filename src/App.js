import React, {useState} from 'react';
import Formulario from './components/Formulario';

function App() {
  const [persona, setPersona] = useState([{
    nombre: "",
    edad: "",
    categoriaEdad: "",
    ocupacion: "",
    valores: ""
}]);

    const addPersona = (data) =>
    {
        addCategoriaEdad(data);
        addValores(data);   
        setPersona([...persona, data]);
    }

    const addCategoriaEdad = (data) =>
    {
        if (parseInt(data.edad) >= 0 && parseInt(data.edad) <= 12)
          data.categoriaEdad = "Niño";
        else if (parseInt(data.edad) >= 13 && parseInt(data.edad) <= 30)
          data.categoriaEdad = "Joven";
        else if (parseInt(data.edad) >= 13 && parseInt(data.edad) <= 50)
          data.categoriaEdad = "Adulto";
        else
          data.categoriaEdad = "Mayor";
    }

    const addValores = (data) =>
    {
      if (data.ocupacion === "Estudiante")
        data.valores = ["el compromiso", "el esfuerzo", "el respeto"];
      else if (data.ocupacion === "Profesional")
        data.valores = ["la proactividad", "la iniciativa", "la actitud"];
      else
        data.valores = ["la honestidad", "la lealtad", "la integridad"];
    }

  return (
    <div className="App container-fluid">
        <Formulario addPersona={addPersona}  />
    </div>
  );
}

export default App;
