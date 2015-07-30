Ext.application({
    name: 'App',
    models: ['ComboOption'],
    stores: ['ComboOptions'],
    views: ['Viewport'],
    autoCreateViewport: true,    
    /*config: {
    	refs: {
			optsCbx: '#options-combo'
    	},	
    	control: {
    		'#options-combo':{
    			select: 'onOptionsComboSelect'
    		}
    	}
    },

    onOptionsComboSelect: function (cmb, record, options){
    	var optsCbx =  this.getOptsCbx();
    	// console.log(optsCbx.getValue());
    	if(optsCbx.getValue() == 1){
    		console.log(11);
    	}else{
    		console.log(22);
    	}

    },*/
    launch: function () {
    }
});