import layout from "@/views/layout/index.vue"

const index = () => import(/* webpackChunkName: "index" */ "@/views/index.vue")
const login = () => import(/* webpackChunkName: "login" */ "@/views/login/index.vue")
const admin = () => import(/* webpackChunkName: "admin" */ "@/views/admin/index.vue")

export default [
  {
    path: "/",
    component: index
  },
  {
    path: "/login",
    component: login
  },
  {
    path: "/admin",
    component: layout,
    redirect: "/admin/index",
    children: [
      {
        path: "index",
        component: admin
      }
    ]
  }
]
