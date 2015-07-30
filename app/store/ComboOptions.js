Ext.define('App.store.ComboOptions', {
	extend: 'Ext.data.Store',
	model: 'App.model.ComboOption',
	data: [
		{ 'id': 1, 'name': 'Field One'},
		{ 'id': 2, 'name': 'Field Two'}	
	]
});	