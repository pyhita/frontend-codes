import {createRouter, createWebHashHistory} from "vue-router"

const routes = [ 
    {
        path: "/",
        redirect: "/home"
    },
    {
        path: "/login",
        component: () => import("../views/Login.vue")
    },
    {
        name: "review",
        path: "/review",
        component: () => import("../views/Review.vue")
    },
    {
        name: "home",
        path: "/home",
        component: () => import("../views/Home.vue"),
        children: [
            {
                name: "ranking",
                path: "/home/ranking",
                component: () => import("../views/Ranking.vue"),
            },
            {
                name: "Recommand",
                path: "/home/recommand",
                component: () => import("../views/Recommand.vue"),
            }
        ]
    },
    {
        name: "about",
        path: "/about",
        component: () => import("../views/About.vue")
    },
    {
        name: "user",
        path: "/user/:id",
        component: () => import("../views/User.vue")
    },
    {
        name: "notFound",
        path: "/:pathMatch(.*)",
        component: () => import("../views/NotFound.vue")
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

let isAdmin = true

if (isAdmin) {
    // 顶层路由
    router.addRoute({
        path: "/admin",
        component: () => import("../views/Admin.vue")
    })
    // 添加二级路由
    router.addRoute("home", {
        path: "songs",
        component: () => import("../views/Songs.vue")
    })
}

// 路由守卫
// 任何路由跳转之前，传入到beforeEach中的函数 会被callback
let login = false



router.beforeEach((to, from) => {
    console.log("call back")
    // if (to.path != "/login") {
    //     return "/login"
    // }
    const token = localStorage.getItem("token")
    if (!token && to.path.match("user")) {
        return "/login"
    }
})



export default router