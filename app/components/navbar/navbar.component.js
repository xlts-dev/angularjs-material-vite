import controller from './navbar.controller';
import './navbar.scss';

const navbarComponent = {
  bindings: {},
  template: `
		<md-toolbar class="navbar">
			<div class="md-toolbar-tools">
				<div flex layout="row" layout-align="start center">
					<img data-testid="ng-hotrod-logo" class="ng-hotrod-logo" ng-src="{{ $ctrl.ngHotrodLogo }}" alt="GitHub">
					<h2 data-testid="header" class="active-page-name" md-truncate>{{ $ctrl.NavigationService.currentPageTitle }}</h2>
				</div>
				<a 
				    data-testid="github"
					class="github-link" href="https://github.com/xlts-dev/angularjs-material-vite" 
					layout="row" 
					layout-align="center center">
					<img ng-src="{{ $ctrl.githubLogo }}" alt="GitHub">
					<div>GitHub</div>
				</a>
			</div>
		</md-toolbar>
	`,
  controller,
};

export default navbarComponent;
