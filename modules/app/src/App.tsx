import React, { useEffect } from 'react'
import { BrowserRouter } from 'react-router-dom'
import Routes from '@/routes'
import actions from "@/components/Actions";

export default function App() {
  // 初始化
  function init() {
    actions.setGlobalState({ num: '' });
  }

  useEffect(() => {
    init()
  }, [])

  return (
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
  )
}
