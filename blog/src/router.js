import { createWebHistory, createRouter } from "vue-router";

import List from './components/List.vue'
import Home from './components/Home.vue'
import Detail from './components/Details.vue'
import Comment from './components/Comment.vue'
import Author from './components/Author.vue'


const routes = [
  {
    path: "/list",
    component: List,
  },
  {
    path:"/home",
    component: Home
  },
  {
    path:'/detail/:id',
    component: Detail,
    //기본적으론 최상위 routes와 동일하지만, nested routes의 경우 path를 상대 경로로 작성한다.
    children:[
      {
        path:"Comment",
        component : Comment
      },
      {
        path: "Author",
        component: Author
      }
    ]
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router; 