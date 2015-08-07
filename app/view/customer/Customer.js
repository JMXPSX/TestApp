Ext.define('webApp.view.customer.Customer', {
	extend: 'Ext.window.Window',	
	xtype: 'input',

	requires: [
		'Ext.form.Panel',
		'webApp.view.customer.CustomerController'
	],

	controller: 'customer',
	bodyPadding: 10,
	title: 'Enter Customer',
	closable: false,
	autoShow: true,
	resizable: false,

	items: {
		xtype: 'form',
		reference: 'form',
		items: [{
			xtype: 'combo',
			fieldLabel: 'ID:',
			editable: false,
			name: 'id',
			allowBlank: true,
			forceSelection: false, 
			store: 'webApp.store.customer.CustomerStore',
			emptyText: 'Customer ID',
			displayField: 'id',
			id: 'cmb_id',
			listeners: {
				change: 'onChangeCustomer'
			}	
		},{
			xtype: 'textfield',
			name: 'lastName',
			fieldLabel: 'Last Name',
			id: 'cmb_last',
			allowBlank: false
		},{
			xtype: 'textfield',
			name: 'firstName',
			fieldLabel: 'First Name',
			id: 'cmb_first',
			allowBlank: false
		},{
			xtype: 'textfield',	
			name: 'company',
			fieldLabel: 'Company',
			id: 'cmb_comp',
			allowBlank: false
		},{
			xtype: 'textfield',
			name: 'title',
			fieldLabel: 'Title',
			id: 'cmb_title',
			allowBlank: false
		},{
			xtype: 'textfield',
			name: 'email',
			fieldLabel: 'E-mail',
			id: 'cmb_email',
			allowBlank: false
		},{
			xtype: 'textfield',
			name: 'phone',
			fieldLabel: 'Contact Number',
			id: 'cmb_phone',
			allowBlank: false
		}],
		dockedItems: [{
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
			
	}


});
