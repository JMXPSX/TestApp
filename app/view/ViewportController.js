Ext.define('App.view.ViewportController', { // Controller for the Viewport.js - This is the event handler for listener
  extend: 'Ext.app.ViewController', // http://localhost/extjs-docs-5.1.1/#!/api/Ext.app.ViewController - extends the ViewController class
  alias: 'controller.CustomerFormCtrl', // alias name can be referenced by other classes instead of the whole class name

  onChangeCustomer: function(combobox) { // http://localhost/extjs-docs-5.1.1/#!/api/Function - event associated from the combobox inside the form
    combobox.up('form').loadRecord(combobox.getSelection()); // http://localhost/extjs-docs-5.1.1/#!/api/Ext.form.field.ComboBox AND http://localhost/extjs-docs-5.1.1/#!/api/Ext.Component-method-up AND http://localhost/extjs-docs-5.1.1/#!/api/Ext.data.Store-method-loadRecords
  },

  onDeleteCustomer: function(button){ // http://localhost/extjs-docs-5.1.1/#!/api/Ext.button.Button - Delete button on Viewport.js inside form
    var form    = button.up('form'),  // http://localhost/extjs-docs-5.1.1/#!/api/Ext.Component-method-up - gets the container name 'form'
        record  = form.getRecord(); // http://localhost/extjs-docs-5.1.1/#!/api/Ext.form.Panel with getRecord method

    if(record){ // if record exists
      record.drop(); // http://localhost/extjs-docs-5.1.1/#!/api/Ext.data.Model-method-drop - data deleted on store class
      Ext.Msg.alert('Delete', 'Customer ID ' + record.get('id')); // alert message saying the id of the customer to be deleted.
      form.reset(true); // http://localhost/extjs-docs-5.1.1/#!/api/Ext.form.Panel with method reset

    } else { // if record does not exists
      Ext.Msg.alert('Warning', 'No Customer selected'); // alert message saying no customer was selected - http://localhost/extjs-docs-5.1.1/#!/api/Ext.MessageBox
    }
  },

  onSaveCustomer: function(button) { // http://localhost/extjs-docs-5.1.1/#!/api/Ext.button.Button - Submit button on Viewport.js inside form
    var form    = button.up('form'),  // http://localhost/extjs-docs-5.1.1/#!/api/Ext.Component-method-up - gets the container name 'form'
        record  = form.getRecord(); // http://localhost/extjs-docs-5.1.1/#!/api/Ext.form.Panel with getRecord method
        values  = form.getValues(); // http://localhost/extjs-docs-5.1.1/#!/api/Ext.form.Panel with getValues method

    if(record) { // if record exists
      record.set(values); // http://localhost/extjs-docs-5.1.1/#!/api/Ext.data.Model-method-set - set values to the record fields
      Ext.Msg.alert('Success', 'Customer <b>' + record.get('name') + '</b> has been updated.'); // alert message that customer was saved - http://localhost/extjs-docs-5.1.1/#!/api/Ext.data.Model-method-get
    } else { // if record does not exists
      Ext.getStore("CustomerStore").add(values); // http://localhost/extjs-docs-5.1.1/#!/api/Ext.app.ViewController-method-getStore and used http://localhost/extjs-docs-5.1.1/#!/api/Ext.data.Store-method-add to add values into the store class
      Ext.Msg.alert('Success', 'A new customer has been added.'); // Alert message saying success customer was added - http://localhost/extjs-docs-5.1.1/#!/api/Ext.MessageBox
      form.reset(); // http://localhost/extjs-docs-5.1.1/#!/api/Ext.form.Panel with method reset 
    }
  }
});