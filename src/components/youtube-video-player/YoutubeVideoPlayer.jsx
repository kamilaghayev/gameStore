import React from 'react'

const YoutubeVideoPlayer = ({videoUrl}) => {
    return (
        <div>
            <iframe 
                width="100%"
                height="400px"
                frameBorder="0"
                src={videoUrl}
                title="Youtube Video Player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
            ></iframe>
        </div>
    )
}

export default YoutubeVideoPlayer