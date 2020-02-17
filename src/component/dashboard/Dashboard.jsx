import React,{ Component } from 'react';
import axios from 'axios';
import { Table  } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './dashboard.css';
import Navbar from '../navbar/Navbar';

class Dashboard extends Component{
    constructor(props){
        super(props);
        this.state = {
            formulir: [],
            searchField: ''
        }
    }
    componentDidMount(){
        axios.get("https://fathomless-fjord-35419.herokuapp.com//api/formulir")
            .then(res => res.data)
            .then(data => this.setState({
                formulir:data
            }))
    }
    searchChange = (e) => {
        this.setState({
            searchField: e.target.value
        })
    }
    render(){
        const { formulir,searchField } = this.state
        const filterSearch = formulir.filter(formulir => formulir.nama_pendaftar.toLowerCase().includes(searchField.toLowerCase()))
        return(
            <div>
            <Navbar />
            <br />
            <br />
            <div className="container">
              <div className="antar">
              <Link to="/formulir" className="btn btn-primary bbl" >Daftar Formulir</Link>
              <input type="search" placeholder="search name" align="center" onChange={this.searchChange} />
              <Link to="/guru" className="btn btn-primary bbr" >Daftar Guru</Link>
              </div>
                <Table striped bordered hover>
                  <thead>
                      <tr>
                            <th>#</th>
                            <th>Nama</th>
                            <th>Alamat</th>
                      </tr>
              </thead>
                  <tbody>
                      {
                            filterSearch.map((form,i) => {
                            return  <tr key={i}><td>{i + 1}</td><td>{form.nama_pendaftar}</td><td>{form.alamat_pendaftar}</td></tr>
 
                      })
                      }
                   </tbody>
                </Table>
            </div>
            </div>
        )
    }
}

export default Dashboard;
