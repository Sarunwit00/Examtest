// import React from "react";
// function App(){
//     const emailRef = React.useRef(null);
//     const passwordRef = React.useRef(null);

//     function click(){
//       const emailValue = emailRef.current.value;
//       const passwordlValue = passwordRef.current.value;
      

//       alert(`email:${emailValue}\npassword:${passwordlValue}`)
//     }
//   return(
//     <div style={{maxWidth:"400px", margin:"30px auto"}}>
//       <h1>แบบฟอร์มกรอกข้อมูล</h1>

//       <div>
//         <label>Email:</label><br/>
//         <input type="text" placeholder="ป้อนข้อมูลตรงนี่" ref={emailRef}/>
//       </div>

//       <div>
//         <label>Password:</label><br/>
//         <input type="password" placeholder="ป้อนข้อมูลตรงนี่" ref={passwordRef}/>
//       </div>
//       <br/>
//       <button onClick={click}>ส่งข้อมูล</button>
//     </div>
//   );
// }
// export default App; 

import React from 'react'
import FormText from './form-text'

export default function App() {
  return <FormText />
}
