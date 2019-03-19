import React, {Component} from 'react'
import axios from 'axios'
import TableRowBook from './TableRowBook'
import {Link} from 'react-router-dom'

export default class Books extends Component{
    constructor(props){
        super(props)
        this.state={books:[]}
    }

    componentDidMount(){
        axios.get('http://localhost:4000/book')
        .then(responce=>{
            this.setState({books : responce.data})
        })
        .catch(function(error){
            console.log(error)
        }) 
    }


    tabRow(){
        return this.state.books.map(function(book,i){
            return <TableRowBook book ={book} key={i} />
        })
    }


    render(){
        return(
            <div>
                <h3 align="center">Books</h3>
                <table className="table table-striped" style={{marginTop: 20}}>
                <thead>
                    <tr>
                        <th>BookId</th>
                        <th>Title</th>
                        <th>AuthorID</th>
                        <th>PublisherID</th>
                        <th>Action</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {this.tabRow()}
                    <Link to={"/createBook"} className='btn btn-primary'>Create Book</Link>
                </tbody>
                </table>
            </div>
        )   
    }
}