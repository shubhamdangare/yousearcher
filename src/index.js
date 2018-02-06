import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import Search from './components/search'
import YTSearch  from 'youtube-api-search'
import Videolist  from './components/videolist'
import Videodetail from './components/datalist'

const App_key = 'AIzaSyBG8y53FsRYVZ0hiBc_epEkZrsx96ft1JM'


class App extends Component{
  constructor(props){
    super(props);
    this.state = { videos:[] ,selectvideo:null};

    this.searchitem('robot')
  }

  searchitem(term){
YTSearch({key:App_key, term:term},(videos)=>{
       this.setState({videos:videos,selectvideo:videos[0]});
      });

  }



  render(){
  return( <div>
    <Search  searchitem ={term=> this.searchitem(term)} />
    <Videodetail  videos={this.state.selectvideo}
    
    />
    <Videolist videos={this.state.videos} videoselect={selectvideo => this.setState({selectvideo})} />
  </div>
  );
}
}

ReactDOM.render(<App />,document.querySelector('.container'))