Ext.define('App.view.ViewportController', {
	extend: 'Ext.app.ViewController',
	alias: 'controller.form-xml',

	onChangeCustomer: function(combobox, selected) {
    	combobox.up('form').loadRecord(combobox.getSelection());
  	},

  	onButtonClickSubmit: function(form, action) {
  		console.log('submit');
    }
});