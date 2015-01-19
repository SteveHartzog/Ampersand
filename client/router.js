/*global me, app*/
var Router = require('ampersand-router');
var HomePage = require('./pages/home');
var CollectionDemo = require('./pages/collection-demo');
var InfoPage = require('./pages/info');
var ClientsPage = require('./pages/clients');
var CustomersPage = require('./pages/customers');
var MoonBootsPage = require('./pages/moonBoots');
var PersonAddPage = require('./pages/person-add');
var PersonEditPage = require('./pages/person-edit');
var PersonViewPage = require('./pages/person-view');


module.exports = Router.extend({
    routes: {
        '': 'home',
        'collections': 'collectionDemo',
        'info': 'info',
        'clients': 'clients',
        'customers': 'customers',
        'moonBoots': 'moonBoots',
        'person/add': 'personAdd',
        'person/:id': 'personView',
        'person/:id/edit': 'personEdit',
        '(*path)': 'catchAll'
    },

    // ------- ROUTE HANDLERS ---------
    home: function () {
        this.trigger('page', new HomePage({
            model: me
        }));
    },

    collectionDemo: function () {
        this.trigger('page', new CollectionDemo({
            model: me,
            collection: app.people
        }));
    },

    info: function () {
        this.trigger('page', new InfoPage({
            model: me
        }));
    },

    clients: function () {
        this.trigger('page', new ClientsPage({
            model: me
        }));
    },

    customers: function () {
        this.trigger('page', new CustomersPage({
            model: me
        }));
    },

    moonBoots: function () {
        this.trigger('page', new MoonBootsPage({
            model: me
        }));
    },

    personAdd: function () {
        this.trigger('page', new PersonAddPage());
    },

    personEdit: function (id) {
        this.trigger('page', new PersonEditPage({
            id: id
        }));
    },

    personView: function (id) {
        this.trigger('page', new PersonViewPage({
            id: id
        }));
    },

    catchAll: function () {
        this.redirectTo('');
    }
});
