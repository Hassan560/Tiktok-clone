import React, { useEffect, useState } from 'react'

//app.css
import './App.css'

import Video from './Components/Video/Video'

import axios from './Axios'

const App = () => {
  const [videos, setVideos] = useState([])

  useEffect(() => {
    async function fetchPosts() {
      const response = await axios.get("/v2/posts")
      setVideos(response.data)

    }
    fetchPosts()
  }, [])

  console.log(videos);

  return (
    <div className='app'>
      <div className='app__videos'>
        {videos.map(({ url, channel, description, song, likes, messages, shares }, index) => (
          <Video
            key={index}
            url={url}
            channel={channel}
            description={description}
            song={song}
            likes={likes}
            messages={messages}
            shares={shares}
          />
        ))}
      </div>
    </div>
  )
}

export default App