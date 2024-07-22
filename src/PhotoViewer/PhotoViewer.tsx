import React from "react";
import "./PhotoViewer.css";

export function PhotoViewer({photoURL}: {photoURL: string}): JSX.Element {
    return (
        <div>
            <img className="firstImage" src={photoURL} alt="Random image" />
        </div>
    )
}