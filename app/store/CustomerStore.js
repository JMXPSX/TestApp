Ext.define('App.store.CustomerStore', {
	extend: 'Ext.data.JsonStore',
	model: 'App.model.CustomerModel',
  storeId: 'customer',
  autoLoad: true,
  autoSync: true,
  proxy: {
    type: 'ajax',
    url: 'resources/customer.php',
    reader: {
      type: 'json'
    }
  }
});