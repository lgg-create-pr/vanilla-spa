# Vanilla JS SPA

A simple implementation of a SPA with plain JavaScript.

For more info go to: [Js: Vanilla script SPA](https://medium.com/frontend-fun/js-vanilla-script-spa-1b29b43ea475)

## How to

### Add new routes

* place new `.html` to `views/` directory
* edit [js/app.js](./js/app.js) file and add new route:
```
new Route('routeHashTag', 'newView.html', 'about.js', true)
```
* above will add new route: `localhost/#routeHashTag` with view from file `views/newView` 
and loading module 'about.js' on view loading, and this will be default route
* some more examples:
```
new Route('admin', 'admin.html', 'admin.js')
```
* above will add new route: `localhost/#admin` with view from file `views/admin.html` 
and loading module 'admin.js' on view loading, and this will NOT be default route (usual route)


### Modules

* [example module](./modules/about.js)
* modules need to be places to `./modules/` directory
```
new Module(scriptElement, functionWillBeExecutedAfterViewLoad, functionWillBeExecutedAfterViewDeattach);
```

## License

* MIT
* [original repo](https://github.com/SantiagoGdaR/vanilla-spa)
* [module loading feature](https://github.com/crisim/vanilla-spa)
* [current repo](https://github.com/lgg-create-pr/vanilla-spa)
