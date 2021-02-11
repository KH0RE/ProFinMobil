import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import '../App.css'



export default class Formulario extends Component {

  constructor () {
    super();
    this.state = {
      name : "",
      cedula : "",
      email : "",
      phone : "",
      imagen : ""
    }
  }; 

  enviar() {
    let url = "http://192.168.1.7:4000/api/person";
    let data = this.state;
    fetch (url,  {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        "Content-Type": 'application/json'
      },
      body: JSON.stringify(data)
    }).then((result) => {
      result.json().then((resp) => {
        console.warn("resp", resp)
      })
    })

  }


  render () {
    return (
      <div className="container" >
      <p > Formulario </p>
       <div className="row" >
         
         <div className="col-1" >
         </div>
         <div className="col-10" >
   
             <div className="row">
               <div className="col-sm-6" >
                 <label > Nombres Completos </label>
                 <input type="text" placeholder="Torres Lopez Pedro Pablo"  
                        className="form-control" 
                        value={this.state.name}
                        name="name" onChange={(data) => {
                          this.setState({
                            name: data.target.value
                          })
                        }}
                 ></input>
               </div>
               <div className="col-sm-6" >
                <label > Numero de Cedula </label>
                 <input type="text" placeholder="1234567890"
                        className="form-control"
                        value={this.state.cedula}
                        name="cedula" onChange={(data) => {
                          this.setState({
                            cedula: data.target.value
                          })
                        }}
                 ></input>
               </div>
             </div>
             <br></br>
             <div className="row" >
               <div className="col-sm-6" >
                 <label > Email: </label>
                 <input type="text" placeholder="pablo@gmail.com" 
                        className="form-control"
                        value={this.state.email}
                        name="email" onChange={(data) => {
                          this.setState({
                            email: data.target.value
                          })
                        }}       
                 ></input>
               </div>
               <div className="col-sm-6" >
               <label > Celular </label>
               <input type="text" placeholder="0987654123" 
                      className="form-control"
                       value={this.state.phone}
                       name="phone" onChange={(data) => {
                         this.setState({
                           phone: data.target.value
                         })
                       }} 
               ></input>
               </div>
             </div>
             <br></br>
            
             <br></br>
             <div className="row" >
               <div className="col-sm-12">
                 <label > Imagen </label>
                  <input type="file"  className="form-control"
                          value={this.state.imagen}
                          name="imagen" onChange={(data) => {
                            this.setState({
                              imagen: data.target.value
                            })
                          }} 
                  ></input>
               </div>
             </div>
             
             <div className="row" >
               <div className="col-sm-4">
               </div>
               <div className="col-sm-4">
                 <button className="btn btn-primary btn-lg btn-block" 
                          onClick={() => {this.enviar() }} 
                 >
                   Enviar
                 </button>
               </div>
               <div className="col-sm-4">
               </div>
             </div>
         </div>
         <div className="col-1" >
         </div>
        
       </div>
      </div>
    );
  }
    
  }
  


