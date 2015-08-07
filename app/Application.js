Ext.define('webApp.Application', {
	extend: 'Ext.app.Application',

	name: 'webApp',

	models: [
		'webApp.model.customer.CustomerModel'
	],

	stores: [
		'webApp.store.customer.CustomerStore'
	],

	views: [
		'webApp.view.main.Main',
		'webApp.view.customer.Customer'
	],

	launch: function() {

		Ext.widget('app-main');
		Ext.widget('input');
		
		}

});