Ext.define('App.view.ViewportController', {
  extend: 'Ext.app.ViewController',
  alias: 'controller.form-xml',

  onChangeCustomer: function(combobox) {
    combobox.up('form').loadRecord(combobox.getSelection());
  },

  onSaveCustomer: function(button) {
    var form    = button.up('form'),
        record  = form.getRecord(),
        values  = form.getValues();

    if(record) {
      record.set(values);
      Ext.Msg.alert('Success', 'Customer <b>' + record.get('name') + '</b> has been updated.');
    } else {
      Ext.getStore("CustomerStore").add(values);
      Ext.Msg.alert('Success', 'A new customer has been added.');
      form.reset();
    }
  }
});