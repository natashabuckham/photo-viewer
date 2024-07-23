import "./PhotoViewer.css";

export function PhotoViewer({selectedImageUrl}: {selectedImageUrl: string}): JSX.Element {
    return (
        <div>
            <img className="firstImage" src={selectedImageUrl} alt="Random image" />
        </div>
    )
}