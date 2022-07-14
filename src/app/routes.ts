import DetectorPage from "../pages/detector/DetectorPage"
import HomePage from "../pages/home/HomePage"
import SearchPage from "../pages/search/SearchPage"

const RoutePaths = {
    home: '/home',
    detector: '/detector',
    search: '/search'
}

const GetRoutes = [
    {
        path: RoutePaths.home,
        component: HomePage,
        exact: true,
        authGuard: false
    },
    {
        path: RoutePaths.detector,
        component: DetectorPage,
        exact: true,
        authGuard: false
    },
    {
        path: RoutePaths.search,
        component: SearchPage,
        exact: true,
        authGuard: false
    }
]

export { RoutePaths, GetRoutes }