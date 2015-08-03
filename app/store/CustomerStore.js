Ext.define('App.store.CustomerStore', {
	extend: 'Ext.data.JsonStore',
	model: 'App.model.CustomerModel',
  storeId: 'customer',
  autoLoad: true,
  autoSync: true,
  proxy: {
    type: 'ajax',
    url: '/TestApp/resources/customer.php',
    api: {
      create:   '/TestApp/resources/customer.php?action=create',         
      update:   '/TestApp/resources/customer.php?action=update',
      destroy:  '/TestApp/resources/customer.php?action=destroy'
    },
    reader: {
      type: 'json',
      root: 'customer',
      successProperty: 'success'
    },
    writer: {
      type: 'json',
      writeAllFields: true,
      encode: true,
      root: 'customer'
    }
  }
});