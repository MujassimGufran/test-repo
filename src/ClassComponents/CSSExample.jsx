import React, { Component } from 'react'


var pstyle = {
    backgroundColor:"blue"
}

export default class CSSExample extends Component {
  render() {
    return (
        <>
        <p>lorem100uiodulkjvsKLbv;sdlvbsdalblbvhdsvbcljkbszld;blsadkls,ndjdkfpiuhweiurikn,msdnllksnjlkjdflibfn  ujilsbdualiufr liuihufwe iluhdsp , fenilawfh </p>
        <p style={{backgroundColor:"green"}}>lorem100uiodulkjvsKLbv;sdlvbsdalblbvhdsvbcljkbszld;blsadkls,ndjdkfpiuhweiurikn,msdnllksnjlkjdflibfn  ujilsbdualiufr liuihufwe iluhdsp , fenilawfh </p>
        <p style={pstyle}>lorem100uiodulkjvsKLbv;sdlvbsdalblbvhdsvbcljkbszld;blsadkls,ndjdkfpiuhweiurikn,msdnllksnjlkjdflibfn  ujilsbdualiufr liuihufwe iluhdsp , fenilawfh </p>
    </>    )
  }
}
