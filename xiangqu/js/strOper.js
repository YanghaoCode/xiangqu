var strOper = {
//	1007#牛仔外套&&趣味#../images/list7.jpg/#288.00#浅蓝色#1
//	1007#牛仔外套&&趣味#../images/list7.jpg/#288.00#浅蓝色#1|1008#长袖衬衣&&改良汉服#../images/list8.jpg/#198.00#棕色#1
	
    add:function(str1,str2){
        var rowArr = str1.split("|");
        var isAdd = true;
        for(var i = 0; i < rowArr.length; i++){
            var colArr1 = rowArr[i].split("#");
            if(colArr1[0] == str2.split("#")[0]){
                //对id1所在的行中的列进行数量更新
                isAdd = false;
                colArr1[5] = parseInt(colArr1[5]) + parseInt(str2.split("#")[5]);
                rowArr[i] = colArr1.join("#");
                break;
            }
        }
        if(isAdd){
            rowArr.push(str2);
        }
        return rowArr.join("|");
    },
    get:function(str){
        var newArr = [];
        var row = str == "" ? [] : str.split("|");
        for(var i = 0; i < row.length; i++){
            var colArr = row[i].split("#");
            var obj = {id:colArr[0],name:colArr[1],img:colArr[2],price:colArr[3],color:colArr[4],count:colArr[5]};
            newArr.push(obj);
        }
        return newArr;
    },
    del:function(str,id){
        var newArr = [];
        var row = str.split("|");
        for(var i = 0; i < row.length; i++){
            var colArr = row[i].split("#");
            if(colArr[0] != id){
                newArr.push(colArr.join("#"));
            }
        }
        return newArr.join("|");
    },
    counter:function(str,id,num){
        var rowArr = str.split("|");
        for(var i = 0; i < rowArr.length; i++){
            var colArr = rowArr[i].split("#");
            if(colArr[0] == id){
                colArr[5] = parseInt(colArr[5]) + num;
                rowArr[i]=colArr.join("#");
                break;
            }
        }
        return rowArr.join("|");
    }
};
