// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: 'AIzaSyB0s1cBycIsTlncHCrYabK6245eQRceqCg',
    authDomain: 'chatapp-7194.firebaseapp.com',
    databaseURL: 'https://chatapp-7194.firebaseio.com',
    projectId: 'chatapp-7194',
    storageBucket: 'chatapp-7194.appspot.com',
    messagingSenderId: '472193935370',
  }
};

/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
