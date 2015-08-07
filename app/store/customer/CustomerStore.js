Ext.define('webApp.store.customer.CustomerStore',{
	extend: 'Ext.data.JsonStore',
	model: 'webApp.model.customer.CustomerModel',		
	alias: 'CustomerStore',
	storeId: 'customer',
	autoLoad: true,
	autoSync: true,
	proxy: {
		type: 'ajax',
		url: '/webApp/app/php/customer.php',
		api: {
			create: '/webApp/app/php/customer.php?action=create',
			update: '/webApp/app/php/customer.php?action=update',
			destroy: '/webApp/app/php/customer.php?action=destroy'
		},
		reader: {
			type: 'json',
			root: 'customer',
			successProperty: 'success'
		}

	}
})