// // import React from "react"
// // import Child from "./Child"
// // class Parent extends React.Component{
// //     obj = {
// //         username : "nikki"

// //     }
// //     render()
// //     {
// //         return (
// //             <>
// //             <Child name = {this.obj.username} />
// //             </>
// //         )
// //     }
// // }
// // export default Parent


// // import React from 'react'
// // import Child from './child'
// // 
// // const Parent = () => {
// //   let obj1 = {
//     // name : "abc" ,
//     // id : 1 ,
//     // designation : "developer"
// //   }
// //   return (
//     // <div>
//         <Child name = "abhi" />
//         <Child id = {10}/>
//         <Child arr = {[10, 20, 30, 40]}/>
//         {/* <Child obj = {obj1} /> */}
//     {/* </div> */}
// //   )
// // }

import React from 'react'
import Child from './Child.jsx'

const Parent = () => {
    let demo = () => {
        window.alert("i am arrow fuction")
    }
    return (
        <>
        <Child fun = {demo} />

        </>
    )
}
export default Parent