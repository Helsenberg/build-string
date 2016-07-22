var app = (function() {
    var lang,
        variableName,
        variableNameId = 'variable-name-val',
        stringVal,
        stringValId = 'your-string-val',
        state = true,
        saveEmpty = false,
        saveEmptyId = 'save-empty',
        options;
    return { 
        getLang: function () {
            return lang;
        },
        setLang: function(){
            var langArr = getByAttr('name','lang'),
                len = langArr.length;
            while (len--) {
                if(langArr[len].checked){
                    lang = langArr[len].valueOf().value;
                    break;
                }
            }
        },
        getVariableName: function () {
            return variableName;
        },
        setVariableName: function(){
            variableName = getById(variableNameId).value;
            if(variableName.length < 1){
                variableName = 'ce';
                getById(variableNameId).value = variableName;
            }
        },
        getStringVal: function () {
            return stringVal;
        },
        setStringVal: function(){
            stringVal = getById(stringValId).value;
            if(stringVal.length < 1){
                alert("Введите строку");
                state = false;
            }
        },
        getSaveEmpty: function () {
            return saveEmpty;
        },
        setSaveEmpty: function(){
            var checbox = getById(saveEmptyId);
            if(checbox.checked){
                saveEmpty = true;
            }
            else{
                saveEmpty = false;
            }
        },
        getOptions: function () {
            return options;
        },
        setOptions: function(){
            var optionsArr = getByAttr('name','options'),
                len = optionsArr.length;
            while (len--) {
                if(optionsArr[len].checked){
                    options = optionsArr[len].valueOf().value;
                    break;
                }
            }
        },
        generateFinalString: function(arr){
            var varName = this.getVariableName(),
                language = this.getLang(),
                option = this.getOptions();
                stringValFinal = '';
            switch(language){
                case 'PHP':
                    stringValFinal += '$' + varName + ' = ' + this.breakWords(arr,".",option) + ';';
                    break;
                case 'C++':
                    stringValFinal += 'std::string ' + varName + ' = ' + this.breakWords(arr,"",option) + ';';
                    break;
                case 'C#':
                    stringValFinal += 'string ' + varName + ' = ' + this.breakWords(arr,"+",option) + ';';
                    break;
                case 'Java':
                    stringValFinal += 'String ' + varName + ' = ' + this.breakWords(arr,"+",option) + ';';
                    break;
                case 'VB':
                    stringValFinal += 'Dim ce As String\n' + varName + ' = ' + this.breakWords(arr,"&",option);
                    break;
                default:
                    state = false;
                    break;
            }
            return stringValFinal;
        },
        removeSpace: function(arr){
            var i = arr.length,
                newArr = [];
            while(i--){
                if(arr[i] === ""){
                    arr.splice(i,1);
                }
            }
            newArr = arr;
            return newArr;
        },
        breakWords: function(arr,separator,options){
            var len = arr.length,i = 0,
                str = '',
                l;
            while(i != len){
                str += '"' + arr[i] +  options + '"' + ' ' + separator + ' ' + '\n';
                i++;               
            }
            if(separator.length < 1){
                l = 3;
            }
            else if(separator.length >= 1){
                l = 4;
            }
            else{
                state = false;
            }
            str = str.substring(0, str.length - l);
            return str;
        },
        concat: function () {
            var lang_ = this.getLang(),
                variableName_ = this.getVariableName(),
                stringVal_ = this.getStringVal(),
                saveEmpty_ = this.getSaveEmpty(),
                stringValFinal = '';
                newArr = stringVal_.split('\n');
            if(!saveEmpty_){
                newStr = this.removeSpace(newArr);                
            }
            stringValFinal = this.generateFinalString(newArr);
            getById('result').value = stringValFinal;
        },
        run: function(){
            if(!state){
                return false;
            }
            this.setLang();
            this.setVariableName();
            this.setStringVal();
            this.setSaveEmpty();
            this.setOptions();
            this.concat();
        }
    }
}());


getById("run").onclick = function(){
    app.run();
}