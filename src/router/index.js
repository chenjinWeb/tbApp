import Vue from 'vue'
import Router from 'vue-router'

import footer from "../components/common/footer.vue"
import index from '../components/pages/index.vue'
import info from "../components/pages/info.vue"
import logistic from "../components/pages/logistics"
import cart from "../components/pages/cart.vue"
import submit from "../components/pages/submit.vue"
import user from "../components/pages/user.vue"
import orders from "../components/pages/order.vue"
import settings from "../components/pages/setting.vue"
import search from "../components/pages/search.vue"
import product from "../components/pages/productTab.vue"
import freight from "../components/pages/feight.vue"
import address from "../components/pages/address.vue"
import fixadd from "../components/pages/fixadd.vue"

/*登录页面*/
import login from "../components/common/login.vue"

Vue.use(Router)

const first={
  path: '*',
  components: {
    node:index,
    footer:footer
  }
}

const pages=[
  {
    path: '/index',
    name:"index",
    components: {
      node:index,
      footer:footer
    },
    children:[

    ]
  },
  {
    path: '/info',
    name:"info",
    components: {
      node:info,
      footer:footer
    }
  },
  {
    path: '/cart',
    name:"cart",
    components: {
      node:cart,
      footer:footer
    },
    children:[

    ]
  },
  {
    path: '/user',
    name:"user",
    components: {
      node:user,
      footer:footer
    }
  }
]

const searches={
  name: 'search',
  path: '/search',
  component: search
}

const products={
  name: 'product',
  path: '/product',
  component: product
}

const loginIn={
  name: 'login',
  path: '/login',
  component: login
}

const logistics={
  name: 'logistics',
  path: '/logistics',
  component: logistic
}
const setting={
  name: 'setting',
  path: '/setting',
  component: settings,
  children:[
    {
      name: 'address',
      path: 'address',
      component: address,
      children:[
        {
          name: 'fixadd',
          path: 'fixadd',
          component: fixadd
        }
      ]
    }
  ]
}

const order={
  name: 'order',
  path: '/order',
  component: orders
}

const submintInfo={
  name: 'submit',
  path: '/submit',
  component: submit,
  children:[
    {
      name: 'freight',
      path: 'freight',
      component: freight
    },
    {
      name: 'address',
      path: 'address',
      component: address,
      children:[
        {
          name: 'fixadd',
          path: 'fixadd',
          component: fixadd
        }
      ]
    }
  ]
}

const routes=[
  first,
  ...pages,
  searches,
  products,
  loginIn,
  logistics,
  order,
  setting,
  submintInfo
]

const router = new Router({
  routes: routes,
  mode: 'hash'
})

export default router
