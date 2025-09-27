import { authApiMiddleware } from './ApiCalls/authApis';
import { dashboardApiMiddleware } from './ApiCalls/dashboardApis';

const apiMiddleware = [authApiMiddleware, dashboardApiMiddleware];

const createdMiddleware = (getDefaultMiddleware) => getDefaultMiddleware().concat(apiMiddleware);

export default createdMiddleware;
