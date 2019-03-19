import React, {Component} from 'react'
import axios from 'axios'

export default class CreateBook extends Component{

    constructor(props){
        super(props)


        this.onChangeTitle = this.onChangeTitle.bind(this)
        this.onChangeAuthId = this.onChangeAuthId.bind(this)
        this.onChangePubId=this.onChangePubId.bind(this)
        this.onSubmit = this.onSubmit.bind(this)

        this.state = {
            title:'',
            auth_id:'',
            pub_id:''
        }
    }



    onChangeTitle(e){
        this.setState({
            title: e.target.value
        })
    }

    onChangeAuthId(e){
        this.setState({
            auth_id: e.target.value
        })
    }

    onChangePubId(e){
        this.setState({
            pub_id: e.target.value
        })
    }


    onSubmit(e){
        e.preventDefault();
        const book ={
            title: this.state.title,
            auth_id: this.state.auth_id,
            pub_id: this.state.pub_id
        }

        axios.post('http://localhost:4000/book',book)
        .then(res=> console.log(res.data))

        this.setState =({
            title:'',
            auth_id:'',
            pub_id:''
        })

        
    }

   render(){
        return (

            <div style ={{marginTop: 10}}>
                <h3 align ="center"> Create Book</h3>
                <form onSubmit={this.onSubmit}>


                    <div className ="form-group">
                        <label>Title</label>
                        <input 
                            type="text"
                            className="from-control"
                            value={this.state.title || ''}
                            onChange={this.onChangeTitle}
                        />
                    </div>

                    <div className ="form-group">
                        <label>AuthID</label>
                        <input 
                            type="text"
                            className="from-control"
                            value={this.state.auth_id || ''}
                            onChange={this.onChangeAuthId}
                        />
                    </div>

                    <div className ="form-group">
                        <label>PubID</label>
                        <input 
                            type="text"
                            className="from-control"
                            value={this.state.pub_id || ''}
                            onChange={this.onChangePubId}
                        />
                    </div>

                    <div className ="form-group">
                        <input 
                            type="submit"
                            className="from-control"
                            value="Create Book"
                            className='btn btn-primary'   
                        />
                       
                    </div>
                </form>
            </div>
        )
    }
}