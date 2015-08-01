Ext.define('App.view.Viewport', {
  extend: 'Ext.container.Viewport',
  controller: 'CustomerFormCtrl',
  requires: [
    'App.view.ViewportController'
  ],
  style: 'padding: 25px;',
  layout: 'vbox',
  
  items: [{
    xtype: 'form',
    url: '/resources/customer.php',
    title: 'Web Application',
    width: 500,      
    bodyPadding: 10,
    items: [
    {
      xtype: 'combo',
      name: 'name',
      fieldLabel: 'Name',
      width: '100%',
      allowBlank: false,
      store: 'CustomerStore',
      displayField: 'name',
      emptyText: 'Select a customer or Enter a new customer name',
      multiSelect: false,
      reference: 'customeree',
      listeners: {
        change: 'onChangeCustomer'
      }
    },
    {
      xtype: 'textfield',
      name: 'company',
      fieldLabel: 'Company',
      width: '100%',
      allowBlank: false
    },
    {
      xtype: 'textfield',
      name: 'email',
      fieldLabel: 'E-mail',
      width: '100%',
      allowBlank: false
    },
    {
      xtype: 'textfield',
      name: 'phone',
      fieldLabel: 'Phone',
      width: '100%',
      allowBlank: false
    },
    {
      xtype: 'textfield',
      name: 'mobile',
      fieldLabel: 'Mobile',
      width: '100%',
      allowBlank: false
    },
    {
      xtype: 'hiddenfield',
      name: 'id'
    }],
    dockedItems: [
      {
        xtype: 'toolbar',
        dock: 'bottom',
        items: [
        {
          xtype: 'tbfill'
        },
        {
          xtype: 'button',
          text: 'Delete',
          listeners: {
            click: 'onDeleteCustomer'
          }
        },
        {
          xtype: 'button',
          formBind: true,      
          text: 'Submit',
          listeners: {
            click: 'onSaveCustomer'
          }
        }]

      }]
  }]            
});