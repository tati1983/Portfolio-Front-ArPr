// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,

  URL: 'http://localhost:8080/', 
  //URL : 'https://back17-11.herokuapp.com/',
  firebase: {
    apiKey: "AIzaSyApNSV89cqS5uDPlYX5ulACC3b6Nv5HZnw",
    authDomain: "front17-11.firebaseapp.com",
    projectId: "front17-11",
    storageBucket: "front17-11.appspot.com",
    messagingSenderId: "121396820041",
    appId: "1:121396820041:web:2a1ad10dbbb1284ad3a798",
    databaseURL: "bhpp80mi81plfuzdc5mq-mysql.services.clever-cloud.com",
    measurementId: "G-HG0DTS1EKQ"
  }
};


/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
