// import React from 'react'
// import CompB from './CompB'

// export const user = React.createContext()
//  export const id = React.createContext()

// const CompA = () => {
//   return (
//     <div>
//         <user.Provider value={"abhi"}>
//             <id.Provider value={100}>
//             <CompB/>
//             </id.Provider>
//         </user.Provider>
//     </div>
//   )
// }

// export default CompA

import React from 'react'
import CompB from './CompB'

export let userName = React.createContext()

const CompA = () => {
  return (
    <div>
        <userName.Provider value={"rahul"}>
        <CompB/>
        </userName.Provider>
    </div>
  )
}

export default CompA





