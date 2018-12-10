import Vue from 'vue'
import Router from 'vue-router'
import User from './views/User.vue'
import Game from './views/Game.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/user',
      name: 'user',
      component: User
    }, {
      path: '/game',
      name: 'game',
      component: Game
    }
  ]
})
