import { useState } from 'react'
import './App.css'
import { PhotoViewer } from './PhotoViewer/PhotoViewer'
import { ImageSelector } from './ImageSelector/ImageSelector'

function App(): JSX.Element {

  return (
    <>
      <h1>React Photo Viewer</h1>
      <PhotoViewer photoURL={"https://picsum.photos/id/600/400/300.jpg"} />
      <ImageSelector/>
    </>
  )
}

export default App
