import { Home } from "../views/home.js"
import { Hello } from "../views/hello.js"

export const views = [
  {
    name: "home",
    path: "/",
    component: new Home(),
    alias: '/index.html'
  },
  {
    name: 'hello',
    path: '/hello/:name',
    component: new Hello()
  }
]
