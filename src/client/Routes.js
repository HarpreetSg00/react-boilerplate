import Website from './layout/Website/Website';
import TagManagment, { loadHomeData } from './components/views/TagManagment';
import Login from './components/views/Login';
import AddTag from './components/views/AddTag';
import EditTag from './components/views/EditTag';
import ChangePassword from './components/views/ChangePassword';
import CategoryManagement from './components/views/CategoryManagement';
import AddCategory from './components/views/AddCategory'
import EditCategory from './components/views/EditCategory'
import VehicleManagement from './components/views/VehicleManagement'
import URL from './utils/urlConstant';

const appRoutes = [{
    component: Website,
    routes: [
        {
            path: URL.TagManagment,
            exact: true,
            component: TagManagment,
            // loadData: loadHomeData
        },
        {
            path: URL.Login,
            exact: true,
            component: Login
        },

        {
            path: URL.AddTag,
            exact: true,
            component: AddTag
        },

        {
            path: `${URL.EditTag}/:id`,
            exact: true,
            component: EditTag,
        },
       
        {
            path: `${URL.EditCategory}/:id`,
            exact: true,
            component: EditCategory,
        },

        {
            path: URL.ChangePassword,
            exact: true,
            component:ChangePassword,

        },
        {
            path: URL.CategoryManagement,
            exact: true,
            component:CategoryManagement,

        },
        {
            path: URL.AddCategory,
            exact: true,
            component:AddCategory,

        },
        {
            path: URL.VehicleManagement,
            exact: true,
            component:VehicleManagement,

        },
        /* Parameterized data */
        /* {
            path: '/route/:slug',
            exact: true,
            component: Home,
            loadDataWithMatch: loadHomeData
        }, */
        
    ]
}]

export default appRoutes;