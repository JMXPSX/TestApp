Ext.define('App.view.Form1', {
	extend: 'Ext.window.Window',

	xtype: 'form1',

	autoShow: true,
	height: 170,
	width: 360,
	layout: {
		type: 'fit'
	},
	title: 'Form 1',
	
	items: [
		{
			xtype: 'datefield',
	        name: 'date1',
	        fieldLabel: 'Date Field'
	        
		},
		{	
			
		}
	]
});
	