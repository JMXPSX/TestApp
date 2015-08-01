Ext.define('App.store.CustomerStore', {
	extend: 'Ext.data.JsonStore',
	model: 'App.model.CustomerModel',
  storeId: 'customer',
  autoLoad: true,
  autoSync: true,
  proxy: {
    type: 'ajax',
    url: '/TestApp/resources/customer.php', // Added /TestApp because it cant see the customer.php on my end
    api: {
      create: 'customer.php?action=create',      
      update: 'customer.php?action=update',
      destroy: 'customer.php?action=destroy' // this is what I want to trigger for the delete, Phan
    },
    reader: {
      type: 'json'
    }
  }
});