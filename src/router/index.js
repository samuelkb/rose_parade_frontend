import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      alias: '/participants',
      name: 'participants',
      component: () => import('../components/ParticipantsList.vue')
    },
    {
      path: '/participants/:id',
      name: 'participant-details',
      component: () => import('../components/Participant.vue')
    },
    {
      path: '/add',
      name: 'add',
      component: () => import('../components/AddParticipant.vue')
    }
  ]
})
