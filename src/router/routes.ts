const Home = () => import(/* webpackChunkName: "home" */ "../views/Home.vue")
const About = () => import(/* webpackChunkName: "about" */ "../views/About.vue")

export default [
  {
    path: "/",
    name: "home",
    component: Home
  },
  {
    path: "/about",
    name: "about",

    component: About
  }
]
