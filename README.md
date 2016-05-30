# angular2-dribbble-pwa

This is a POC of a [Dribbble](https://dribbble.com) API client built using Angular 2 and Angular Mobile Toolkit. [Live demo](https://berry-app.appspot.com).

Note: Due to the early and changing nature of a lot of the tooling in this space (toolkit, universal and so forth) it is possible that building this app from source will not always work until we lock in our dependency versions. We hope to do so once toolkit and universal are a little more stable, but are sharing this source in case it is useful for learning purposes.

### Setup

Clone or download the repos, then `cd` into the project directory and:

```
$ npm install -g angular-cli && npm install && typings install
```

Once this is done you should be able to `ng serve` to serve up the application or `ng serve --prod` to serve with Service Worker switched on. `ng build --prod` will build a version of the project. You can then serve out of the `dist` directory.

The repo contains a brief setup using Angular Universal which did work around Google I/O and could be served with `node dist/server.js` once built, but no longer appears to work with more recent versions of the project. We're including a note here in case we get a chance to update the setup to latest.
