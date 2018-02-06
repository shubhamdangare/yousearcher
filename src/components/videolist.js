import React from 'react'
import Videolistitem from './videolistitem'

const Videolist = (props)=>{
    var videolist=props.videos.map((videos)=>{
        return <Videolistitem key={videos.etag} videos={videos} 
       videoselect={props.videoselect}/>
    })

    return(
        <ul className="col-md-4 list-group">
        {videolist}
            </ul>

    );
};

export default Videolist;