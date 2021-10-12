// Monsters name is out tonight! 
//Want to make sure it is in a H3 
import React from 'react'
import Scare from './Scare'
// export default function Monster(props){
//    return(
//        <div>
//             <h3>{props.monster} is out tonight!</h3>
//             <h3>They are scared of {props.scare}</h3>
//         </div>
//    ) 
// }

// export default Monster
class Monster extends React.Component{
// constructor(props){
// super(props) //this.props = props
// }

render(){
    return(
        <div>
            <h3>{this.props.monster} is out tonight!</h3>
            {/* <p>{this.props.scare}</p> */}
            <Scare scare={this.props.scare}/>
        </div>
    )
}
}

export default Monster