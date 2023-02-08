import React from 'react'
import BlankLayout from '@packages/shared/layouts/Blank'
import Lazy from '@packages/shared/components/Lazy'
import useAccount from '@packages/shared/hooks/useAccount'
import useAppConfig from '@packages/shared/hooks/useAppConfig'

import MicroApp from '@/components/MicroApp'
import CommonLayout from '@/layouts/Common'
import Home from '@/pages/home'
import NoFound from '@/pages/404'
import CusIcon from '@/components/CusIcon'

import { Navigate } from 'react-router-dom'

export default function useRoutesConfig() {
  const { account } = useAccount()
  const { locale } = useAppConfig()

  const configs: any[] = [
    {
      element: <CommonLayout />,
      children: [
        {
          children: [
            {
              index: true,
              title: '首页',
              element: <Home />,
              menu: true,
              icon: <CusIcon name={'Home'} />,
            },
            { path: '*', title: '404 页', element: <NoFound /> },
          ],
        },
        {
          path: 'react',
          title: 'demo-react-1',
          icon: <CusIcon name={'Assets'} />,
          children: [
            {
              menu: true,
              title: 'react-1',
              path: 'demo-react-1',
              element: (
                <MicroApp
                  name="demo-react-1"
                  sandbox={{
                    experimentalStyleIsolation: true,
                  }}
                  props={{
                    account,
                    locale,
                  }}
                />
              ),
            },
            {
              menu: true,
              title: 'react-2',
              path: 'demo-react-2',
              element: (
                <MicroApp
                  name="demo-react-2"
                  sandbox={{
                    experimentalStyleIsolation: true,
                  }}
                  props={{
                    account,
                    locale,
                  }}
                />
              ),
            },
          ],
        },
        {
          path: 'vue',
          title: 'vue-1',
          icon: <CusIcon name={'Analysis'} />,
          children: [
            {
              menu: false,
              path: 'demo-vue-1',
              element: (
                <MicroApp
                  name="demo-vue-1"
                  sandbox={{
                    experimentalStyleIsolation: true,
                  }}
                  props={{
                    account,
                    locale,
                  }}
                />
              ),
            },
            {
              menu: true,
              title: 'vue-1-one',
              path: 'demo-vue-1#/one',
              element: (
                <MicroApp
                  name="demo-vue-1"
                  sandbox={{
                    experimentalStyleIsolation: true,
                  }}
                  props={{
                    account,
                    locale,
                  }}
                />
              ),
            },
            {
              menu: true,
              title: 'vue-2one',
              path: 'demo-vue-1#/two',
              element: (
                <MicroApp
                  name="demo-vue-1"
                  sandbox={{
                    experimentalStyleIsolation: true,
                  }}
                  props={{
                    account,
                    locale,
                  }}
                />
              )
            },
            {
              menu: true,
              title: '二级菜单',
              path: 'demo-vue-1',
              // element:(<Navigate to="vue/demo-vue-1/react-3-1" />),
              children:[
                {
                  menu: true,
                  title: '三级菜单1',
                  path: 'react-3-1',
                  element: (
                    <MicroApp
                      name="demo-react-2"
                      sandbox={{
                        experimentalStyleIsolation: true,
                      }}
                      props={{
                        account,
                        locale,
                      }}
                    />
                  ),
                },
                {
                  menu: true,
                  title: '三级菜单2',
                  path: 'vue-3-2',
                  element: (
                    <MicroApp
                      name="demo-vue-2"
                      sandbox={{
                        experimentalStyleIsolation: true,
                      }}
                      props={{
                        account,
                        locale,
                      }}
                    />
                  ),
                },
              ]
            }
          ],
        },
      ],
    },
    {
      element: <BlankLayout />,
      children: [
        {
          path: 'login',
          element: <Lazy entry={() => import('@/pages/login')} />,
        },
        { path: '*', element: '404' },
      ],
    },
  ]

  return configs
}
