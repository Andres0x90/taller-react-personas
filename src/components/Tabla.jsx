import React,{Fragment} from "react";

const Tabla = (props) =>
{
    return(
        <Fragment>
            <table class="table">
                <thead>
                    <tr>
                    <th scope="col">Nombre</th>
                    <th scope="col">Edad</th>
                    <th scope="col">Ocupacion</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        props.personas.length > 1?
                        (
                            props.personas.map((persona, index) => 
                            {
                                return(
                                    index > 0 ?
                                        (
                                        <tr key={index}>
                                            <td>{persona.nombre}</td>
                                            <td>{persona.edad}</td>
                                            <td>{persona.ocupacion}</td>
                                        </tr>
                                        )
                                        : ('')
                                    )
                                    
                            })
                            
                        ):(<h5>No hay personas registradas</h5>)
                    }

                </tbody>
            </table>
        </Fragment>
    );
}

export default Tabla;