Ext.define('App.view.Viewport', {
  extend: 'Ext.form.Panel',
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
      id: 'options-combo',
      store: 'CustomerStore',
      displayField: 'name',
      valueField: 'id',
      multiSelect: false,
      fieldLabel: 'Name',
      emptyText: 'Select a customer',
      selectOnFocus: false,
      width: '100%'
    },
    {
      xtype: 'textareafield',
      grow: false,
      fieldLabel: 'Address',
      width: '100%',
      name: 'address',
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
      name: 'email',
      fieldLabel: 'E-mail',
      width: '100%',
      allowBlank: false  
    }]
  }]            
});