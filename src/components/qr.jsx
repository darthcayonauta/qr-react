import React from "react";
import axios from 'axios';
import {useEffect,useState} from 'react';
import QrImage from './qrImage';
//import {faRocket} from '@fortawesome/free-solid-svg-icons'

function Qr(){

    const url_api = "http://localhost/qr/api/" 

    const [data,setData] = useState([]);
    const peticionGet = async ()=>{

        axios.get(url_api)
        .then( (response) => {
            setData(response.data);
        } )
        .catch( error => console.log( error)  );
    }

    useEffect( ()=>{
        peticionGet();
    },[] );

    return (<div className="container">
              <div className="row">
                <div className="col-md-12 mt-5">
                    <div className="table-responsive">
                    <h2>
                        Espacio de Listado y QR-REACT
                    </h2>
                    <hr />
                    <table className="table table-bordered table-striped table-hover">
                        <thead className="thead-dark">
                            <tr>
                                <th>Id</th>
                                <th>Description</th>
                                <th>Img</th>    
                            </tr>
                        </thead>
                        <tbody>
                            { data && data.map( (fila) =>{
                            return  <tr key={fila.id}>
                                    <td>{fila.id}</td>
                                    <td>{fila.descripcion}</td>
                                    <td> 
                                        <QrImage text={fila.descripcion} />
                                        <br />
                                        <strong> src: </strong> {fila.descripcion}
                                    </td>
                                </tr>
                            }  ) }
                        </tbody>
                    </table>
                    <p> Created By <strong>CGH/DARTHCAYONAUTA</strong> , Powered By  <strong>React</strong>  </p>
                    </div>
                </div>    
            </div>    
        </div>);
}

export default Qr;