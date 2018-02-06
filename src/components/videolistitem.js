import React from 'react';

const Videolistitem = (props) =>{
 
 const videos = props.videos.snippet.thumbnails.default.url;

    return (<li onClick={()=> props.videoselect(props.videos)}  className="list-group-item">
            <div className="video-list media">
                <div className="media-left">
                <img className="media-object" src={videos} />
                </div>
            <div className="media-body">
                <div className="media-heading" >{props.videos.snippet.title}</div>
                </div>
                </div>

            </li>
            
        );
}

export default Videolistitem;