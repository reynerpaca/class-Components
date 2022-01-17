import React from "react"

export default class AddPostButton extends React.Component {
    render() {
        return (
            <div>
                <button onClick={this.props.addPostHandler}>Add Post</button>
            </div>
        )
    }
}