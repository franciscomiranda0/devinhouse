import ListingView from '../views/ListingView';
import SearchView from '../views/SearchView';

const routes = [
    {
        path: '/search',
        component: SearchView,
        exact: true
    },
    {
        path: '/listing',
        component: ListingView,
        exact: true
    },
    {
        path: '/',
        component: SearchView,
        exact: true
    }
];

export default routes;