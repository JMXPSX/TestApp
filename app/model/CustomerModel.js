Ext.define('App.model.CustomerModel', {
	extend: 'Ext.data.Model',
	fields: [
		{name: 'address', mapping: 'address'},
    {name: 'phone', mapping: 'phone'},
    {name: 'email', mapping: 'email'}
	]
});