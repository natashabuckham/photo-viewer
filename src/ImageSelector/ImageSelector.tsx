import "./ImageSelector.css"
import { useState } from "react";

export function ImageSelector() {
    const [selectedImageUrl, setSelectedImageUrl] = useState("no photo selected")

    const brokenImages = [
        1, 24, 32, 36, 44, 47
    ];
    
    function getImageUrls() {
        const urls = [];
    
        for (let i = 0; i < 50; i++) {
            if (!brokenImages.includes(i)) {
                const imageNumberString = i.toString().padStart(2, '0');
                urls.push(`https://picsum.photos/id/6${imageNumberString}/200/125.jpg`)
            }
        }
        return urls;
    }
    
    const imageUrls = getImageUrls();

    const thumbnailImages = imageUrls.map((url) => <img className={(selectedImageUrl === url ? "selectedImage": "unselectedImage")} onClick={() => {setSelectedImageUrl(url)}} src={url} alt="Thumbnail image"/>)

    return (
        <div>
            {selectedImageUrl}
            {thumbnailImages}
        </div>
    )
}