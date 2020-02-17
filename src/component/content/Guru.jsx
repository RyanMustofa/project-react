import React,{ Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Table,Modal,Button } from 'react-bootstrap';
import Navbar from '../navbar/Navbar';
import Guruprops from '../../props/Guruprops';

class Guru extends Component{
    constructor(props){
        super(props);
        this.state = {
            guru: [],
            show: false
        }
    }
    componentDidMount(){
        axios.get("https://fathomless-fjord-35419.herokuapp.com//api/guru")
            .then(res => res.data)
            .then(data => this.setState({ guru:data }))
    }
    handleModal = () => {
        this.setState({ show:true })
    }
    handleClose = () => {
        this.setState({ show:false })
    }
    render(){
        return(
            <div>
            <Navbar />
            <br />
            <br />
            <div className="container">
                <Link to="/addguru" className="btn btn-primary">Tambah</Link>
                <Table striped bordered hover>
                  <thead>
                <tr>
                  <th>#</th>
                  <th>Nama Guru</th>
                  <th>Mengampu</th>
                  <th>Deskripsi Guru</th>
                  <th>Alamat Guru</th>
                  <th>aksi</th>
                </tr>
              </thead>
              <tbody>
                  {
                      this.state.guru &&
                      this.state.guru.map((gurus,i) => {
                          return(
                              <tr key={gurus.id}>
                                  <td>{i + 1}</td>
                                  <td>{gurus.nama_guru}</td>
                                  <td>{gurus.mengampu}</td>
                                  <td>{gurus.deskripsi_guru}</td>
                                  <td>{gurus.alamat_guru}</td>
                                  <td><Guruprops show={this.state.show} tutup={() => this.handleClose()} tampil={() => this.handleModal()} data={gurus.id}>aunch demo modal</Guruprops></td>
                              </tr>
                          )
                  })
                  }
              </tbody>
            </Table>
            <Link className="btn btn-danger" to="/dashboard">kembali</Link>
            </div>
          </div>
        )
    }
}
    
export default Guru;
