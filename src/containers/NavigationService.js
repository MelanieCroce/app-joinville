import { NavigationActions, navigation } from 'react-navigation';

let _navigator;

function setTopLevelNavigator(navigatorRef) {
  _navigator = navigatorRef;
}

function navigate(routeName, params, action, key) {
  _navigator.dispatch(
    NavigationActions.navigate({
      routeName,
      params,
      action,
      key,
    })
  );
}

function reset(index, actions, params) {
  _navigator.dispatch(
    NavigationActions.reset({
      index,
      actions,
      params
    })
  )
}

function getCurrentRoute() {
	let route = _navigator.state.nav;
	while(route.routes) {
		route = route.routes[route.index]
	}
	return route;
}

// add other navigation functions that you need and export them

export default {
  navigate,
  setTopLevelNavigator,
  getCurrentRoute,
  reset,
};