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

export function ImageSelector( props: ImageSelectorProps): JSX.Element[] {
   
    return (
        imageUrls.map((imageUrl, index) =>
            <img 
                key={index}
                className={(props.selectedImageUrl === imageUrl ? "selectedImage": "unselectedImage")} 
                onClick={() => props.setSelectedImageUrl(imageUrl)} 
                src={imageUrl} 
                alt="Thumbnail image"
            />
        )
    )
}

