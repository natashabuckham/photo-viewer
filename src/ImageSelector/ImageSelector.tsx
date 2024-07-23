import "./ImageSelector.css"

const brokenImages = [
    1, 24, 32, 36, 44, 47
  ];

  function getImageUrls() {
    const urls = [];

    for (let i = 0; i < 50; i++) {
        if (!brokenImages.includes(i)) {
            const imageNumberString = i.toString().padStart(2, '0');
            urls.push(`https://picsum.photos/id/6${imageNumberString}/600/400.jpg`)
        }
    }
    return urls;
  }

  const imageUrls = getImageUrls();

interface ImageSelectorProps {
    selectedImageUrl: string;
    setSelectedImageUrl: (url: string) => void;
  }

export function ImageSelector({ selectedImageUrl, setSelectedImageUrl }: ImageSelectorProps): JSX.Element {
   
    const thumbnailImages = imageUrls.map(imageUrl =>
        <img 
            className={(selectedImageUrl === imageUrl ? "selectedImage": "unselectedImage")} 
            onClick={() => setSelectedImageUrl(imageUrl)} 
            src={imageUrl} 
            alt="Thumbnail image"
        />
    )

    return (
        <div>
            {thumbnailImages}
        </div>
    )
}

