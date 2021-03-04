// Code SimplerComponent Here

// import React, { Component } from 'react'

// export default class SimplerComponent extends Component {

//     render() {
//         return (
//             <div onClick={this.props.handleClick}>
//                  "I am just happy".
//             </div>
//         )
//     }
// }
    
import React from 'react'

export default function SimplerComponent(props) {
    return (
            <div onClick={props.handleClick}>
                 "I am just happy".
            </div>
    )
}
