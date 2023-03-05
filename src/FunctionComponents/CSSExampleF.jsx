// import React from 'react'

// import "../assets/css/style.css"
// export default function CSSExample() {
//   return (
//     <>
//         <p>lorem100uiodulkjvsKLbv;sdlvbsdalblbvhdsvbcljkbszld;blsadkls,ndjdkfpiuhweiurikn,msdnllksnjlkjdflibfn  ujilsbdualiufr liuihufwe iluhdsp , fenilawfh </p>
//         <p>lorem100uiodulkjvsKLbv;sdlvbsdalblbvhdsvbcljkbszld;blsadkls,ndjdkfpiuhweiurikn,msdnllksnjlkjdflibfn  ujilsbdualiufr liuihufwe iluhdsp , fenilawfh </p>
//         <p>lorem100uiodulkjvsKLbv;sdlvbsdalblbvhdsvbcljkbszld;blsadkls,ndjdkfpiuhweiurikn,msdnllksnjlkjdflibfn  ujilsbdualiufr liuihufwe iluhdsp , fenilawfh </p>
//     </>
//   )
// }


import React from 'react'

var pstyle = {
    backgroundColor:"blue"
}

export default function CSSExample() {
  return (
    <>
        <p>lorem100uiodulkjvsKLbv;sdlvbsdalblbvhdsvbcljkbszld;blsadkls,ndjdkfpiuhweiurikn,msdnllksnjlkjdflibfn  ujilsbdualiufr liuihufwe iluhdsp , fenilawfh </p>
        <p style={{backgroundColor:"green"}}>lorem100uiodulkjvsKLbv;sdlvbsdalblbvhdsvbcljkbszld;blsadkls,ndjdkfpiuhweiurikn,msdnllksnjlkjdflibfn  ujilsbdualiufr liuihufwe iluhdsp , fenilawfh </p>
        <p style={pstyle}>lorem100uiodulkjvsKLbv;sdlvbsdalblbvhdsvbcljkbszld;blsadkls,ndjdkfpiuhweiurikn,msdnllksnjlkjdflibfn  ujilsbdualiufr liuihufwe iluhdsp , fenilawfh </p>
    </>
  )
}

