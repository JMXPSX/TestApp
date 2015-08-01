Ext.define('App.store.CustomerStore', {
	extend: 'Ext.data.JsonStore',
	model: 'App.model.CustomerModel',
  storeId: 'customer',
  autoLoad: true,
  autoSync: true,
  proxy: {
    type: 'ajax',
    url: '/resources/customer.php',
    api: {
      create:   '/resources/customer.php?action=create',      
      update:   '/resources/customer.php?action=update',
      destroy:  '/resources/customer.php?action=destroy'
    },
    reader: {
      type: 'json'
    }
  }
});