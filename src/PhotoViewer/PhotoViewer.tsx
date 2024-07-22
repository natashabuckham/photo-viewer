import React from "react";
import "./PhotoViewer.css";

export function PhotoViewer(): JSX.Element {
    return (
        <div>
            <img className="firstImage" src="https://picsum.photos/400/300" alt="Random image" />
        </div>
    )
}