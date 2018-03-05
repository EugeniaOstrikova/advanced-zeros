module.exports = function getZerosCount(number, base) {
  // your implementation
    var arrSimpleNumber = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97, 101, 103, 107, 109, 113, 127, 131, 137, 139, 149, 151, 157, 163, 167, 173, 179, 181, 191, 193, 197, 199, 211, 223, 227, 229, 233, 239, 241, 251];
    var arrFromBase = [];
    for (var q = 0; q < arrSimpleNumber.length; q++){
        if(base == 1){
            break;
        }
        if(base % arrSimpleNumber[q] == 0){
            base = base / arrSimpleNumber[q];
            arrFromBase.push(arrSimpleNumber[q]);
            q = q - 1;
            continue
        }else continue;
    };
    var objBase = {};
    for(var p=0; p < arrFromBase.length; p++){
        if((p > 0) && (arrFromBase[p] == arrFromBase[p-1])){
            objBase[arrFromBase[p]] = objBase[arrFromBase[p-1]] + 1;
            arrFromBase.splice(p, 1);
            p = p-1;
        }
        else{
            var n = 1;
            objBase[arrFromBase[p]] = n;
        }
    }
    var baseNumber = arrFromBase[arrFromBase.length - 1];
    var result = 0;
    for(var i = baseNumber; i < number; i = i * baseNumber) {
        var someResalt = Math.floor(number / i);
        result = result + someResalt;
    }
    result = Math.floor(result / objBase[baseNumber]);
    return result;
}