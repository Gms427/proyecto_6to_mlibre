var enObj = require('./src/assets/i18n/en.json');
var esObj = require('./src/assets/i18n/es.json');

function validatorTranslate(obj1, obj2) {
    var ret = false;
    for (const key in obj1) {
        if (!obj2.hasOwnProperty(key)) {
            return false;
        } else {
            ret = true;
        }
    }
    return ret;
}

if (validatorTranslate(enObj, esObj) && validatorTranslate(esObj, enObj)) {
    console.log('Todo ok');
} else {
    throw "The translate files doesn't have the same keys"
}