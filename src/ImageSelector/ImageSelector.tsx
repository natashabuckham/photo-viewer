import "./ImageSelector.css"

export function ImageSelector() {
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

    const thumbnailImages = imageUrls.map((url) => <img className="thumbnailImage" src={url} alt="Thumbnail image"/>)

    return (
        <div>
            {thumbnailImages}
        </div>
    )
}