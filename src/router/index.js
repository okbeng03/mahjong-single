import Vue from 'vue'
import Router from 'vue-router'
import Game from '@/components/Game'
import Flex from '@/components/Flex'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'mahjong',
      component: Game
    },
    {
      path: '/flex',
      name: 'flex',
      component: Flex
    }
  ]
})
