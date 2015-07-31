Ext.define('App.view.ViewportController', {
  extend: 'Ext.app.ViewController',
  alias: 'controller.form-xml',

  onChangeCustomer: function(combobox) {
    combobox.up('form').loadRecord(combobox.getSelection());
  },

  onSaveCustomer: function(button) {
    button.up('form').submit({
      success: function(form, action) {
        Ext.Msg.alert('Success', 'Woo hoo!');
      },
      failure: function(form, action) {
        Ext.Msg.alert('Failed', 'Something wrong.');
      }
    });
  }
});