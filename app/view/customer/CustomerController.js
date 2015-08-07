Ext.define('webApp.view.customer.CustomerController',{
	extend: 'Ext.app.ViewController',
	alias: 'controller.customer',

	onChangeCustomer: function(combo) {
		combo.up('form').loadRecord(combo.getSelection());
	},

	onDeleteCustomer: function(button) {
		var cmpForm = button.up('form'),
			modelRecord = cmpForm.getRecord(),
			objValues = cmpForm.getValues();

		if(modelRecord) {
			modelRecord.drop();
			Ext.Msg.alert('Delete', 'Customer ' + modelRecord.get('lastName') + ' has been deleted');

			Ext.getCmp('cmb_id').setRawValue('');
			Ext.getCmp('cmb_last').reset();
			Ext.getCmp('cmb_first').reset();
			Ext.getCmp('cmb_comp').reset();
			Ext.getCmp('cmb_title').reset();
			Ext.getCmp('cmb_email').reset();
			Ext.getCmp('cmb_phone').reset();


		}else{
			Ext.Msg.alert('Warning', 'No Customer selected');
		}

	},

	onSaveCustomer: function(button) {
		var cmpForm = button.up('form'),
		modelRecord = cmpForm.getRecord();
		objValues = cmpForm.getValues();

		if(modelRecord){
			modelRecord.set(objValues);
			Ext.Msg.alert('Success', 'Customer ' + modelRecord.get('lastName') + ' has been updated');
		}else{
			Ext.getStore('webApp.store.customer.CustomerStore').add(objValues);
			Ext.Msg.alert('Success', 'A new customer has been added');
			cmpForm.reset();
		}
		
	}

});
