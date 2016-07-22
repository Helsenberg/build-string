var appRun = {
	runAllApp: function () {
		getById("run").onclick = function(){
			app.run();
		}

		var langRadio = getByAttr('name','lang'),
		    prev = null;

		for(var i = 0; i < langRadio.length; i++) {
		        langRadio[i].onclick = function() {
		            app.setLang();
		        };
		    }

		getById('variable-name-val').onkeyup = function (e) {
			this.value = this.value.replace(/^([0-9])|(\W){1}/,"");
		}

		var checbox = getById("save-empty");
		checbox.onclick = function () {
			app.setSaveEmpty();
		}
				 
	}
}

appRun.runAllApp();