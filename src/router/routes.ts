const Layout = () => import(/* webpackChunkName: "Layout" */ "../views/Layout/index.vue")
const Home = () => import(/* webpackChunkName: "home" */ "../views/Home.vue")
const About = () => import(/* webpackChunkName: "about" */ "../views/About.vue")

export default [
  {
    path: "/",
    name: "home",
    component: Home
  },
  {
    path: "/admin",
    component: Layout,
    children: [
      {
        path: "about",
        name: "about",
        component: Home
      }
    ]
  }
]
