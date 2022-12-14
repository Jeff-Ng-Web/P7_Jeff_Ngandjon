import React from "react"

const Tags = ({tags}) => {
    return (
        <div className="tags">
            {tags && tags.map((tag, index) => (
                <div className="tags__content" key={index}>
                    <span>{tag}</span>
                </div>
            ))}
        </div>
    )
}

export default Tags
