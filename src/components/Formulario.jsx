import React,{Fragment, useState} from "react";
import {useForm} from 'react-hook-form'

const Formulario = (props) => 
{
    const { register, formState: {errors}, handleSubmit} = useForm();
    const [mensaje, setMensaje] = useState("");

    const onSubmit = (data) =>
    {
        console.log(data);
        props.addPersona(data);
        generateMensaje(data);
    }

    const generateMensaje = (persona) =>
    {
        let generatedMensaje = "Al " + persona.categoriaEdad + " "+ 
        persona.nombre + " de " + persona.edad + " años de edad le recomendamos tener en cuenta "
        + persona.valores[0] + ", " + persona.valores[1] + ", y " + persona.valores[2] + 
        " como principales valores para obtener un buen resultado como " + persona.ocupacion;

        setMensaje(generatedMensaje);
    }

    return(
        <Fragment >

                <form className="col-4" onSubmit={handleSubmit(onSubmit)} >
                <div className = "form-group" >
               <label className="form-label">Nompre Persona</label>
               <input type="text" className="form-control" {...register("nombre", 
               {
                    required: true
               })}/>
               <div>{errors.nombre?.type === 'required' && 'El campo nombre es obligatorio'}</div>
           </div>
           <div>
               <label className="form-label">Edad</label>
                <input type="number" className="form-control" {...register("edad", 
               {
                    required: true
               })}/>
                <div>{errors.edad?.type === 'required' && 'El campo edad es obligatorio'}</div>
           </div>
          <div>
                <label className="form-label">Seleciona la profesion</label>
                <select {...register("ocupacion")} className="form-control" > 
                <option>Estudiante</option>
                <option>Profesional</option>
                <option>Jubilado</option>    
                </select>    
          </div> 
            <div>
               <button className="my-3 btn btn-dark" type="submit">Enviar Persona</button>
                </div>
                <div>
                <label><b>Mensaje</b></label>
                <p>{mensaje}</p>
            </div>

                </form>

            
           
        </Fragment>
    );
}

export default Formulario;