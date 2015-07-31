Ext.define('App.view.Viewport', {
  extend: 'Ext.container.Viewport',
  controller: 'form-xml',
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
      store: 'CustomerStore',
      displayField: 'name',
      emptyText: 'Select a customer',
      editable: false,
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
    },
    {
      xtype: 'textfield',
      name: 'email',
      fieldLabel: 'E-mail',
      width: '100%'
    },
    {
      xtype: 'textfield',
      name: 'phone',
      fieldLabel: 'Phone',
      width: '100%',
    },
    {
      xtype: 'textfield',
      name: 'mobile',
      fieldLabel: 'Mobile',
      width: '100%'
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
          formBind: true,      
          text: 'Submit',
          listeners: {
            click: 'onSaveCustomer'
          }
        }]

      }]
  }]            
});