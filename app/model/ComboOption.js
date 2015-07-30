Ext.define('App.model.ComboOption', {
	/*extend: 'Ext.data.Model',
	fields: [
		{ name: 'id', type: 'int' },
		{ name: 'name', type: 'string'}
	]*/
	extend: 'Ext.data.Model',
	fields: [
		{name: 'address', mapping: 'address'},
        {name: 'phone', mapping: 'phone'},
        {name: 'email', mapping: 'email' }
	]
});