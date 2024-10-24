import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

import AreaConverterView from '../views/AreaConverterView.vue'
import TimeConverterView from '../views/TimeConverterView.vue'
import LengthConverterView from '../views/LengthConverterView.vue'
import WeightConverterView from '../views/WeightConverterView.vue'
import VolumeConverterView from '../views/VolumeConverterView.vue'
import TempConverterView from '../views/TempConverterView.vue'
import SpeedConverterView from '../views/SpeedConverterView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/area',
      name: 'areaconverter',
      component: AreaConverterView
    },
    {
      path: '/time',
      name: 'timeconverter',
      component: TimeConverterView
    },
    {
      path: '/length',
      name: 'lengthconverter',
      component: LengthConverterView
    },
    {
      path: '/weight',
      name: 'weightconverter',
      component: WeightConverterView
    },
    {
      path: '/volume',
      name: 'volumeconverter',
      component: VolumeConverterView
    },
    {
      path: '/temp',
      name: 'tempconverter',
      component: TempConverterView
    },
    {
      path: '/speed',
      name: 'speedconverter',
      component: SpeedConverterView
    }
  ]
})

export default router
