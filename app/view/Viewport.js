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
    title: 'Web Application',
    width: 500,      
    bodyPadding: 10,
    items: [
    {
      xtype: 'combo',
      name: 'customer-name',
      id: 'customer-name',
      fieldLabel: 'Name',
      width: '100%',
      store: 'CustomerStore',
      displayField: 'name',
      emptyText: 'Select a customer',
      editable: false,
      reference: 'customeree',
      listeners: {
        change: 'onChangeCustomer'
      }
    },
    {
      xtype: 'textfield',
      name: 'company',
      id: 'customer-company',
      fieldLabel: 'Company',
      width: '100%',
    },
    {
      xtype: 'textfield',
      name: 'email',
      id: 'customer-email',
      fieldLabel: 'E-mail',
      width: '100%'
    },
    {
      xtype: 'textfield',
      name: 'phone',
      id: 'customer-phone',
      fieldLabel: 'Phone',
      width: '100%',
    },
    {
      xtype: 'textfield',
      name: 'mobile',
      id: 'customer-mobile',
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
            click: 'onButtonClickSubmit'
          }
        }]

      }]
  }]            
});