import React,{Component} from 'react';

class Search extends Component{

    constructor(props){
        super(props)
        this.state = { term:'' }
    }
 
    render(){

        return ( 
        <div>
        <input value={this.state.term} onChange={event =>  this.oninput(event.target.value)}/>
        
        </div>
        );
       
} oninput(term){
            this.setState({term});
            this.props.searchitem(term)
        }
}

export default Search