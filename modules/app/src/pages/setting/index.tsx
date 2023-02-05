import React, { useState,useEffect } from "react";
import { Drawer } from "antd";
import {SettingFilled,CloseOutlined} from "@ant-design/icons";
import "./style.scss"
import { themeChange } from 'theme-change'



export default function setting(){
  const [stateColor, setStateColor] = useState([{val:'rgba(24, 144, 255, 1)',state:true},{val:'rgba(23, 194, 193, 1)'},{val:'rgba(83, 195, 27, 1)'},{val:'rgba(48, 85, 235, 1)'},{val:'rgba(114, 46, 209, 1)'},{val:'rgba(245, 33, 45, 1)'},{val:'rgba(250, 84, 28, 1)'},{val:'rgba(251, 173, 20, 1)'},{val:'rgba(254, 253, 3, 1)'}])
  const [curColor, setCurColor] = useState('rgba(24, 144, 255, 1)')
  const [show, setShow] = useState(false);
  const style = {
    color: '#fff',
    fontSize: 20,
  }

  function Click(type:number,index:number):void{
    const data = stateColor
    let _color = data 
    _color = _color.map((_:any,i) =>{
      if(i==(type==1?0:5) + index){
        _.state = true;
        setCurColor(_.val)
        // 当前color 
        // _.val
      }
      else{
        _.state = false;
      }
      return _
    });
    setStateColor(_color)
  }

  useEffect(() => {
    themeChange(false);
  })
  return (
   <Drawer
    closable = {false}
    visible={show}
    width={300}
    onClose={() => setShow(false)}
    placement="right"
    handler={
      <div
        className="ant-pro-setting-drawer-handle"
        onClick={() => setShow(!show)}
      >
        {!show?<SettingFilled style={style}/>:<CloseOutlined style={style}/>}
      </div>
    }
    style={{
      zIndex: 999,
    }}
  >
    <div className='ant-pro-setting-drawer'>
      <h1 className="ant-pro-setting-drawer-h1">整体风格设置</h1>
        {
          [{
            name:"简洁白",
            src:'layout1.png'
          },{
            name:"经典蓝",
            src:'layout2.png'
          }].map((item,index)=>{
            return (
              <div className='ant-pro-setting-drawer-box' key={index}> 
                <div className='flex items-center'>
                  <span className="mr-[5px]"></span>
                  <span>{item.name}</span>
                </div>
                <img src={item.src} className="w-[192px] h-[108px]"/>
              </div>
            )
          })
        }
        <div className="ant-pro-setting-drawer-line"></div>

        <h1 className="mt-[40px] ant-pro-setting-drawer-h1 mt-[20px]">主题色设置</h1>
        {
          [{
            name:"冷色调",
            type:1,
          },{
            name:"暖色调",
            type:2,
          }].map((item,index)=>{
            return (
              <div className='ant-pro-setting-drawer-box' key={index}> 
                <div className='flex items-center'>
                  <span className="mr-[5px]"></span>
                  <span>{item.name}</span>
                </div>
                <div className="flex  mt-[20px]">
                  {(item.type==1?stateColor.slice(0,5):stateColor.slice(5)).map((color:{val:string,state?:boolean},index)=><div key={index} className="w-[20px] h-[20px] mr-[20px] flex justify-center items-center text-[#fff]" style={{background:color.val}} data-set-theme={color.val} onClick={()=>Click(item.type,index)}>
                  {color.state?<svg viewBox="64 64 896 896" focusable="false" data-icon="check" width="1em" height="1em" fill="currentColor" aria-hidden="true"><path d="M912 190h-69.9c-9.8 0-19.1 4.5-25.1 12.2L404.7 724.5 207 474a32 32 0 00-25.1-12.2H112c-6.7 0-10.4 7.7-6.3 12.9l273.9 347c12.8 16.2 37.4 16.2 50.3 0l488.4-618.9c4.1-5.1.4-12.8-6.3-12.8z"></path></svg>:null}
                  </div>)}
                </div>
              </div>
            )
          })
        }
    </div>
    
  </Drawer>
  )
}
