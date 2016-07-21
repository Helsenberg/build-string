var app = (function() {
    var lang;
    return { 
        getLang: function () {
            return lang;
        },
        run: function(){
            console.log('Run!!!');
        }
    }
}());

e("run").onclick = app.run();