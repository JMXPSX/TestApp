Ext.define('App.view.Viewport', {
	extend: 'Ext.container.Viewport',
	requires: ['Ext.form.FormPanel','Ext.form.field.ComboBox'],
	style: 'padding: 25px;',		
	layout: 'vbox',
	items: [
		{
			xtype: 'form',
			title: 'Web Application',
			width: 500,			
			bodyPadding: 10,
			items: [
				{
					xtype: 'combo',	
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
					anchor: '95%'
				}
			]
		}
	]						
});