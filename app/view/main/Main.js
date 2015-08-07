Ext.define('webApp.view.main.Main', {
	extend: 'Ext.container.Container',

	requires: [
		'webApp.view.main.MainController',
		'webApp.view.main.MainModel'
		
	],

	xtype: 'app-main',

	controller: 'main',
	plugins: 'viewport',
	viewModel: {
		type: 'main'
	},

	layout: {
		type: 'border'
	},

	items: [{

		xtype: 'panel',
		bind: {
			title: '{name}'
		},
		region: 'west',	
		collapsible: true,
		collapsed: true,
		split: {
			size: 20
		},
		width: 250
		

	},
	{

		region: 'center',
		xtype: 'tabpanel',
		items: [{
			title: 'Main Tab'
			
		}]

	}]

});