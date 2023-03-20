import 'angular-animate';
import 'angular-aria';
import 'angular-material';
import 'angular-messages';
import { AppComponent } from './app.component';
import ComponentsModule from './components/components';
import ServicesModule from './services/services';

const appModule = angular
  .module('appModule', [
    'ngAnimate',
    'ngAria',
    'ngMessages',
    'ngMaterial',
    ComponentsModule,
    ServicesModule,
  ])
  .config([
    '$mdThemingProvider',
    $mdThemingProvider => {
      $mdThemingProvider.theme('default').primaryPalette('brown').accentPalette('amber');
    },
  ])
  .component('app', AppComponent);

export default appModule;
