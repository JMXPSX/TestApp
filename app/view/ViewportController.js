Ext.define('App.view.ViewportController', {
	extend: 'Ext.app.ViewController',
	alias: 'controller.form-xml',

	onLoadClick: function() {
		console.log('xml click');
		this.getView().getForm().Load({

			url: 'resources/data/form/xml-form-data.xml',
			waitMsg: 'Loading...'
		});
	}

});