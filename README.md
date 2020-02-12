<p align="center"><img src="https://statamic.com/assets/branding/Statamic-Logo+Wordmark-Rad.svg" width="400" alt="Statamic Logo" /></p>

## Statamic 3 (beta) Content API Demo

_Statamic 3 is the very latest and greatest version of Statamic, a uniquely powerful CMS built on [Laravel](https://laravel.com) and designed to make building and managing bespoke websites radically efficient and remarkably enjoyable._

## Demo Details

This Content API Demo uses the entries endpoint on a Movies collection to fetch and and filter data with the help of [Vue Select](https://vue-select.org).

### AJAX Calls

The AJAX calls happen in the main [Vue instance](https://github.com/statamic/content-api-demo/blob/master/resources/js/site.js#L13-L27).

```js
onSearch(search, loading) {
    loading(true);
    this.search(loading, search, this);
},
search: _.debounce((loading, search, vm) => {
    fetch(
        `/api/collections/movies/entries?filter[title:contains]=${escape(search)}`
    ).then(res => {
        res.json().then(json => (vm.options = json.data));
        loading(false);
    });
}, 350)
```


### Rendered Output
The returned data from the `/api/collections/movies/entries` call is rendered in the [`home.antlers.html`](https://github.com/statamic/content-api-demo/blob/master/resources/views/home.antlers.html#L4-L26) template, inside a scoped slot for the Vue Select component.

## Screenshot

![Statamic 3 Content API Demo Screenshot](https://github.com/statamic/content-api-demo/raw/master/screenshot.png)


## Want to try it for yourself?

**1. Clone the project repo** locally and install the dependencies.

```
git clone git@github.com:statamic/content-api-demo.git
cd content-api-demo
composer install
npm i && npm run dev
cp .env.example .env && php artisan key:generate
```

**2. Visit `content-api-demo.test`** (or whatever your dev URL pattern is) to see it in action

**3. Make a new user** – If you want to mess around and create/modify entries. You'll want it to be a `super` so you have access to everything.

```
php please make:user
```

You can log in at `content-api.demo.test/cp`.

## Related Links

- [Statamic 3 Documentation][docs]
- [Statamic 3 CMS Repo][cms]
- [Statamic Discord][discord]

[cms]: https://github.com/statamic/cms
[docs]: https://statamic.dev/
[discord]: https://statamic.com/discord
