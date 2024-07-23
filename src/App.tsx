import { useState } from 'react'
import './App.css'
import { PhotoViewer } from './PhotoViewer/PhotoViewer'
import { ImageSelector } from './ImageSelector/ImageSelector'

function App(): JSX.Element {

  const [selectedImageUrl, setSelectedImageUrl] = useState("https://picsum.photos/600/400")
 
  return (
    <>
      <h1>React Photo Viewer</h1>
      <PhotoViewer selectedImageUrl={selectedImageUrl}/>
      <ImageSelector selectedImageUrl={selectedImageUrl} setSelectedImageUrl={setSelectedImageUrl}/>
    </>
  )
}

export default App
