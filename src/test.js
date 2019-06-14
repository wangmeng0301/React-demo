import React, { Component } from "react";

class Test extends Component{
    render(){
        return (
            console.log("test"),
            <div>
                {this.props.content}
            </div>
            
        )
    }
}

export default Test