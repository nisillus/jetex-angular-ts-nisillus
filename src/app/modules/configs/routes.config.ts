import { HomePageComponent } from '../home-page/index';
import { PageNotFoundComponent } from '../page-not-found/index';
import { HotelsSearchComponent } from '../hotels/index';
import { FlightsSearchComponent } from '../flights/index';

const routes: Array<any> = [
  {
    path: 'hotels-search',
    component: HotelsSearchComponent
  },
  {
    path: 'flights-search',
    component: FlightsSearchComponent
  },
  {
    path: 'dashboard',
    component: HomePageComponent
  },
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full'
  },
  {
    path: '**',
    component: PageNotFoundComponent
  }
];

export { routes as routesConfig };