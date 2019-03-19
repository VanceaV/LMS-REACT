import React,{Component} from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'
class TableRowBook extends Component{


    constructor(props){
        super(props)
        this.delete = this.delete.bind(this)
    }

    delete(){
        axios.delete('http://localhost:4000/book/'+this.props.book.book_id)
        .then(console.log('BookDeleted'))
        .catch(err=> console.log(err));

    
  
    }



    render(){
        return(
            <tr>
                <td>
                    {this.props.book.book_id}
                </td>

                <td>
                    {this.props.book.title}
                </td>

                <td>
                    {this.props.book.auth_id}
                </td>

                <td>
                    {this.props.book.pub_id}
                </td>

                <td>
                    <Link to={"/updateBook/"+this.props.book.book_id} className='btn btn-primary'>Update</Link>
                </td>

                <td>
                    <button onClick={this.delete} className='btn btn-danger' >Delete</button>
                    
                </td>

                
            </tr>
            
        )
    }
}

export default TableRowBook