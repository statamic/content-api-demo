window.Vue = require('vue');

import vSelect from 'vue-select'
import _ from 'lodash'

Vue.component('v-select', vSelect)

const site = new Vue({
    el: '#site',
    data: {
        options: []
    },
    methods: {
        onSearch(search, loading) {
            loading(true);
            this.search(loading, search, this);
        },
        search: _.debounce((loading, search, vm) => {
            var $filter = isNaN(search) ? 'title:contains' : 'date:contains';

            fetch(
                `/api/collections/movies/entries?fields=date,title,cover&filter[`+$filter+`]=${escape(search)}`
            ).then(res => {
                res.json().then(json => (vm.options = json.data));
                loading(false);
            });
        }, 350)
    }
});
