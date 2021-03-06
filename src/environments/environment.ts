// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  baseUrl: 'http://67.205.147.92:8080/api/v1/',
  weapons: {
    basePath: 'weapons',
    singlePath: '/weapons/{uuid}'
  },
  ammunition: {
    basePath: 'ammunition',
    singlePath: '/ammunition/{uuid}'
  },
  attachments: {
    basePath: 'attachments',
    singlePath: '/attachments/{uuid}'
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
