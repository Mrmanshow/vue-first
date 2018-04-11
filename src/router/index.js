import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const  Recommend = ((resolve) => {
  import('components/Recommend/Recommend').then((module) => {
    resolve(module);
  })
})
const  Singer = ((resolve) => {
  import('components/Singer/Singer').then((module) => {
    resolve(module);
  })
})
const  Rank = ((resolve) => {
  import('components/Rank/Rank').then((module) => {
    resolve(module);
  })
})
const  Search = ((resolve) => {
  import('components/Search/Search').then((module) => {
    resolve(module);
  })
})
const  SingerDetail = ((resolve) => {
  import('components/singer-detail/singer-detail').then((module) => {
    resolve(module);
  })
})
const  Disc = ((resolve) => {
  import('components/disc/disc').then((module) => {
    resolve(module);
  })
})
const  TopList = ((resolve) => {
  import('components/top-list/top-list').then((module) => {
    resolve(module);
  })
})
const  UserCenter = ((resolve) => {
  import('components/user-center/user-center').then((module) => {
    resolve(module);
  })
})

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/recommend'
    },
    {
      path: '/recommend',
      component: Recommend,
      children: [
        {
          path: ':id',
          component: Disc
        }
      ]
    },
    {
      path: '/singer',
      component: Singer,
      //子路由
      children: [
        {
          path: ':id',
          component: SingerDetail
        }
      ]
    },
    {
      path: '/rank',
      component: Rank,
      children: [
        {
          path: ':id',
          component: TopList
        }
      ]
    },
    {
      path: '/search',
      component: Search,
      children: [
        {
          path: ':id',
          component: SingerDetail
        }
      ]
    },
    {
      path: '/user',
      component: UserCenter
    }
  ]
})
