import React, {Component} from 'react'
import axios from 'axios'

export default class CreateAuthor extends Component{

    constructor(props){
        super(props)


        this.onChangeName = this.onChangeName.bind(this)
        this.onSubmit = this.onSubmit.bind(this)

        this.state = {
            author_name:''
        }
    }



    onChangeName(e){
        this.setState({
            title: e.target.value
        })
    }



    onSubmit(e){
        e.preventDefault();
        const author ={
            author_name: this.state.author_name  
        }

        axios.post('http://localhost:4000/author',author)
        .then(res=> console.log(res.data))

        this.setState =({
            author_name:''
        })  
    }

   render(){
        return (

            <div style ={{marginTop: 10}}>
                <h3 align ="center"> Create Author</h3>
                <form onSubmit={this.onSubmit}>


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
                            value="Create Author"
                            className='btn btn-primary'   
                        />
                       
                    </div>
                </form>
            </div>
        )
    }
}