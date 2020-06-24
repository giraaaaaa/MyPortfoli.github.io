import Texty from 'rc-texty';
import Button from 'antd/lib/button';
import React, {useState} from 'react'

const Demo = () =>{
  // const [show, setShow] = useState(true)

  // const ClickEvent = (e) =>{
  //   e.preventDefault();
  //   setShow(!show)
  // }
  return (
    <div className="texty-demo" style={{ 
    marginTop: 16,
    fontSize: 120 }}>
      {/* <p className="buttons" style={{ marginBottom: 16 }}> */}
        {/* <Button type="primary" onClick={ClickEvent}>Switch</Button> */}
      {/* </p> */}
      <Texty style={
          {  textAlign: "center",
          color: "#fff"
        }}>
          {'React Devloper'}</Texty>
    </div>
  );

}

export default Demo