import { Router } from "@vaadin/router";

export function iniRouter() {
    const router = new Router(document.querySelector('#app'))

    router.setRoutes([
        {
            path: "/",
            component: "home-page",
            action: () => import("./pages/home-page")
        },
        {
            path: "/a-barbearia",
            component: "a-barbearia-page",
            action: () => import("./pages/a-barbearia-page")
        },
    ])

    return router
}