import React from 'react';
import { Form,Button } from 'react-bootstrap';
import axios from 'axios';

class GuruAdd extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            nama_guru: '',
            mengampu: '',
            deskripsi_guru: '',
            alamat_guru:'',
            datas:[],
            store:[]
        }
    }
    componentDidMount(){
        console.log(this.props.datas)
    }
    render(){
        const { datas } = this.state
        return(
            <div>
                
            </div>
        )
    }
}

export default GuruAdd;
