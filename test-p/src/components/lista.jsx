import React, { Component } from 'react';

import "bootstrap/dist/css/bootstrap.min.css";



export default class Lista extends Component {

  constructor(props){
    super(props);
    this.state = {
      usuarios : []
    }
  }

  componentDidMount(){
    this.getUsuarios();
  }

  getUsuarios(){
    let url = 'http://192.168.1.7:4000'
    fetch(url)
    .then(res => res.json())
    .then(data => {
      this.setState({usuarios: data.usuarios });
      
    })
  }

  render() {
    return(
     <div  className="container">
      <div className="row">

        <div className="col-2">
        </div>
        <div className="col-8">
        <table className="table">
        <thead className="thead-dark">
          <tr>
            <th scope="col">Foto</th>
            <th scope="col">Nombres</th>
            <th scope="col">Cedula</th>
            <th scope="col">Email</th>
            <th scope="col">Phone</th>
          </tr>
        </thead>
        <tbody>

         {
          this.state.usuarios.map( usuario => {
            return (
              <tr key={usuario._id}>
              <td> {usuario.imagen} </td>
              <td > {usuario.name} </td>
              <td> {usuario.cedula} </td>
              <td> {usuario.email} </td>
              <td> {usuario.phone} </td>
           </tr>
            )
          })
            
         }
       
        </tbody>
      </table>
      
      
        </div>
        <div className="col-2">
        </div>
      </div>
     </div>

    );
  }
 

}