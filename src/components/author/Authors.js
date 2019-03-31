import React, {Component} from 'react'
import axios from 'axios'
import TableRowAuthor from './TableRowAuthor'
import {Link} from 'react-router-dom'

export default class Authors extends Component{
    constructor(props){
        super(props)
        this.state={authors:[]}
    }

    componentDidMount(){
        axios.get('http://localhost:4000/author')
        .then(responce=>{
            this.setState({authors : responce.data})
        })
        .catch(function(error){
            console.log(error)
        }) 
    }


    tabRow(){
        return this.state.authors.map(function(author,i){
            return <TableRowAuthor author ={author} key={i} />
        })
    }


    render(){
        return(
            <div>
                <h3 align="center">Authors</h3>
                <table className="table table-striped" style={{marginTop: 20}}>
                <thead>
                    <tr>
                        <th>AuthorId</th>
                        <th>AuthorName</th>
                        <th>Action</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {this.tabRow()}
                </tbody>
                </table>
                <Link to={"/createAuthor"} className='btn btn-primary'>Create Author</Link>
            </div>
        )   
    }
}