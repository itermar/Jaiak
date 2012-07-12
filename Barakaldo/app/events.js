App.Events = (function(lng, app, undefined) {

    lng.ready (function()
    {
    	if (document.body.clientWidth > 481) //para el iPad
    		lng.View.Aside.show('#main','#calendario');
    });

    return {

    }

})(LUNGO, App);