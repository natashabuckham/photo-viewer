import "./PhotoViewer.css";

export function PhotoViewer({photoUrl}: {photoUrl: string}): JSX.Element {
    return (
        <div>
            <img className="firstImage" src={photoUrl} alt="Random image" />
        </div>
    )
}