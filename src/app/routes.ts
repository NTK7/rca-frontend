import DetectorPage from "../pages/detector/DetectorPage"
import HomePage from "../pages/home/HomePage"

const RoutePaths = {
    home: '/home',
    detector: '/detector',
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
    }
]

export { RoutePaths, GetRoutes }