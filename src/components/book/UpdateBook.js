import React, {Component} from 'react'
import axios from 'axios'

export default class UpdateBook extends Component{

    constructor(props){
        super(props)

        this.onChangeTitle = this.onChangeTitle.bind(this)
        this.onChangeAuthId = this.onChangeAuthId.bind(this)
        this.onChangePubId=this.onChangePubId.bind(this)
        this.onSubmit = this.onSubmit.bind(this)

        this.state = {
            book_id: '',
            title:'',
            auth_id:'',
            pub_id:''
        }
    }


    componentDidMount(){
        axios.get('http://localhost:4000/book/'+this.props.match.params.id)
        .then(response =>{
            this.setState({
                book_id: response.data[0].book_id,
                title: response.data[0].title,
                auth_id: response.data[0].auth_id,
                pub_id: response.data[0].pub_id
            })

            console.log(response.data)
        })
        .catch(function(error){
            console.log(error)
        })
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
            book_id:this.state.book_id,
            title: this.state.title,
            auth_id: this.state.auth_id,
            pub_id: this.state.pub_id
        }


        axios.put('http://localhost:4000/book',book)
        .then(responce =>{
            console.log(responce)
        })

        

    }



    render(){
        return (

            <div style ={{marginTop: 10}}>
                <h3 align ="center"> Update Book</h3>
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
                            value="Update Book"
                            className='btn btn-primary'   
                        />
                       
                    </div>
                </form>
            </div>
        )
    }
}