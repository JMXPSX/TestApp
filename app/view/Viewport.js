Ext.define('App.view.Viewport', {
  extend: 'Ext.container.Viewport',
  controller: 'CustomerFormCtrl',
  requires: [
    'App.view.ViewportController'
  ],  
  layout: 'vbox',

  items: [{
    region: 'center',
    xtype: 'tabpanel',
    activeTab: 0,

      items: [{
      xtype: 'form',      
      url: '/TestApp/resources/customer.php',
      id: 'webFrm',
      title: 'Web Application',
      width: 500,      
      bodyPadding: 10,

        items: [
        {
          xtype: 'combo',
          name: 'name',
          id: 'name_Combobox',
          fieldLabel: 'Name',
          width: '100%',
          allowBlank: false, 
          forceSelection: false,         
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
          id: 'company_textField',
          fieldLabel: 'Company',
          width: '100%',
          allowBlank: false
        },
        {
          xtype: 'textfield',
          name: 'email',
          id: 'email_textField',
          fieldLabel: 'E-mail',
          width: '100%',
          allowBlank: false
        },
        {
          xtype: 'textfield',
          name: 'phone',
          id: 'phone_textField',
          fieldLabel: 'Phone',
          width: '100%',
          allowBlank: false
        },
        {
          xtype: 'textfield',
          name: 'mobile', 
          id: 'mobile_textField',        
          fieldLabel: 'Mobile',
          width: '100%',
          allowBlank: false
        },
        {
          xtype: 'hiddenfield',
          id: 'hidden_textfield',
          name: 'id'
        },{

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
        
    }]
  }] 
});