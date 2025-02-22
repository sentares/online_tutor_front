import { RouteProps } from 'react-router-dom';
import MainPage from "../../../pages/MainPage/ui/MainPage";

export enum AppRoutes {
    MAIN = 'main',

    // last
    // NOT_FOUND = 'not_found'
}

export const RoutePath: Record<AppRoutes, string> = {
    [AppRoutes.MAIN]: '/',
    // last
    // [AppRoutes.NOT_FOUND]: '*',
};

export const routeConfig: Record<AppRoutes, RouteProps> = {
    [AppRoutes.MAIN]: {
        path: RoutePath.main,
        element: <MainPage />,
    },

};
