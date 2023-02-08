import React, { useEffect, useState } from 'react'
import actions from "@/components/Actions";

export default function Home() {
  const [num, setNum] = useState<string>()
  function change() {
    actions.setGlobalState({ num: `父组件发出消息: ${Math.random()}` });
  }

  function init() {
  }

  useEffect(() => {
    actions.onGlobalStateChange((state, prevState) => {
      console.log("主应用观察者：token 改变前的值为 ", prevState);
      console.log("主应用观察者：登录状态发生改变，改变后的 token 的值为 ", state);
      setNum(state.num)
    }, true)

    init()
  }, [])


  return (
    <div>
      <div>Home</div>
      <button onClick={change} >change {num}</button>
    </div>
  )
}
