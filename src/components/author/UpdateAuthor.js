import React, {Component, Fragment} from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'




export default class UpdateAuthor extends Component{

    constructor(props){
        super(props)

        
        this.onChangeName = this.onChangeName.bind(this)
        this.onSubmit = this.onSubmit.bind(this)

        this.state = {
            author_id:'',
            author_name:''
        }
    }


    componentDidMount(){
        axios.get('http://localhost:4000/author/'+this.props.match.params.id)
        .then(response =>{
            this.setState({
                author_id: response.data[0].author_id,
                author_name: response.data[0].author_name
            })

            console.log(response.data)
        })
        .catch(function(error){
            console.log(error)
        })
    }



    onChangeName(e){
        this.setState({
            author_name: e.target.value
        })
    }

    
    


    onSubmit(e){
        e.preventDefault();
        const author ={
           
            author_id:this.state.author_id,
            author_name: this.state.author_name,

        }


        axios.put('http://localhost:4000/author',author)
        .then(responce =>{
            console.log(responce)
        });



    }



    redirect() {
        this.props.history.push('/authors')
      }






    render(){
        return (

            <div style ={{marginTop: 10}}>
                <h3 align ="center"> Update Author</h3>
                <form onSubmit={this.onSubmit} >


                    <div className ="form-group">
                        <label>Name</label>
                        <input 
                            type="text"
                            className="from-control"
                            value={this.state.author_name || ''}
                            onChange={this.onChangeName}
 
                        />


                    

                    </div>


                    <div className ="form-group">
                        <input 
                            type="submit"
                            className="from-control"
                            value="Update Author"
                            className='btn btn-primary'   
                        />


<Link to={`/authors`}>
                        
                        </Link>

                    
                    </div> 



                </form>

                

            </div>
        )
    }
}