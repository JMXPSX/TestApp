Ext.define('App.view.Viewport', {
	extend: 'Ext.form.Panel',
	controller: 'form-xml',
	requires: [
		'Ext.form.FormPanel',
		'Ext.form.field.ComboBox',
		'App.view.ViewportController'
	],
	style: 'padding: 25px;',		
	layout: 'vbox',

	reader: {
		type: 'xml',
		model: 'App.model.ComboOption',
        record: 'customer',
        successProperty: '@success'
	},

	items: [
		{
			xtype: 'form',
			title: 'Web Application',
			width: 500,			
			bodyPadding: 10,
			items: [
				{
					/*xtype: 'combo',	
					id: 'options-combo',
					store: 'ComboOptions',
					displayField: 'name',
					valueField: 'id',
					typeAhead: false,
					editable: false,
					queryMode: 'local',
					forceSelection: true,
					multiSelect: false,
					triggerAction: 'all',
					fieldLabel: 'Option',
					emptyText: '',
					selectOnFocus: false,
					anchor: '95%'*/

					xtype: 'combo',
					id: 'options-combo',
					store: 'ComboOptions',
					displayField: 'name',
					valueField: 'id',
					editable: false,
					queryMode: 'local',
					multiSelect: false,
					fieldLabel: 'Name',
					emptyText: '',
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
				},
				{
					buttons: [{
				        text: 'Load',
				        listeners: {
				            click: 'onLoadClick'
				        }
				    }]
				}
			]
			
		}
	]						
});