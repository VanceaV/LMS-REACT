import React,{Component} from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'
class TableRowAuthour extends Component{


    constructor(props){
        super(props)
        this.delete = this.delete.bind(this)
    }

    delete(){
        axios.delete('http://localhost:4000/author/'+this.props.author.author_id)
        .then(console.log('AuthorDeleted'))
        .catch(err=> console.log(err));
    }



    render(){
        return(
            <tr>
                <td>
                    {this.props.author.author_id}
                </td>

                <td>
                    {this.props.author.author_name}
                </td>


                <td>
                    <Link to={"/updateAuthor/"+this.props.author.author_id} className='btn btn-primary'>Update</Link>
                </td>

                <td>
                    <button onClick={this.delete} className='btn btn-danger' >Delete</button>
                    
                </td>

                
            </tr>
            
        )
    }
}

export default TableRowAuthour