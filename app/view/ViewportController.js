Ext.define('App.view.ViewportController', {
  extend: 'Ext.app.ViewController',
  alias: 'controller.CustomerFormCtrl',

  onChangeCustomer: function(combobox) {
    combobox.up('form').loadRecord(combobox.getSelection());
  },

  onDeleteCustomer: function(button){
    var form    = button.up('form'),  
        record  = form.getRecord();

    if(record){
      record.drop();
      Ext.Msg.alert('Delete', 'Customer ID ' + record.get('id'));
    } else {
      Ext.Msg.alert('Warning', 'No Customer selected');
    }
  },

  onSaveCustomer: function(button) {
    var form    = button.up('form'),  
        record  = form.getRecord();
        values  = form.getValues();

    if(record) {
      record.set(values);
      Ext.Msg.alert('Success', 'Customer <b>' + record.get('name') + '</b> has been updated.');
    } else {
      Ext.getStore("CustomerStore").add(values);
      Ext.Msg.alert('Success', 'A new customer has been added.');
      form.reset();
    }
});