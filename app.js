Ext.application({
    name: 'App',
    models: ['CustomerModel'],
    stores: ['CustomerStore'],
    views: ['Viewport'],
    autoCreateViewport: true,
    launch: function () {
    }
});