Ext.define('App.view.ViewportController', {
  extend: 'Ext.app.ViewController',
  alias: 'controller.form-xml',

  onChangeCustomer: function(combobox) {
    combobox.up('form').loadRecord(combobox.getSelection());
  },

  onSaveCustomer: function(button) {
    //Ext.getStore("CustomerStore").setModel(button.up('form').getValues());

    var iForm         = button.up('form'),
        iRecord       = iForm.getRecord(),
        iValues       = iForm.getValues();
    iRecord.set (iValues); 

    /*
    button.up('form').submit({
      success: function(form, action) {
        button.up('form').load();
        button.up('form').updateRecord();
        Ext.Msg.alert('Success', 'Woo hoo!');
      },
      failure: function(form, action) {
        console.log(action);
        Ext.Msg.alert('Failed', 'Something wrong.');
      }
    });
    */
  }
});