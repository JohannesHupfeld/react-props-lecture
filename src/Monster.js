// Monsters name is out tonight! 
//Want to make sure it is in a H3 
import React from 'react'
import Scare from './Scare'

// function Monster() {  
//     return(
//         <h3>Wolfman is out tonight </h3>
//     )
// }

// export default function Monster(props){
//    return(
//        <div>
//             <h3>{props.monster} is out tonight!</h3>
//             <h3>They are scared of {props.scare}</h3>
//         </div>
//    ) 
// }

// export default Monster

class Monster extends React.Component{ // class component
// constructor(props){
// super(props) //same as this.props = props
// }   ****** new versions of react do not even need constructor but its important to know that this is what is going on behind the scenes

    render(){ // since its not static its meant to be run on individual monster instances --new monsters 
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