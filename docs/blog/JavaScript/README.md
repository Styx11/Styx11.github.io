# 编写一个数独游戏
最近玩起了数独，突然也想实现一个自己的数独游戏。[Github](https://github.com/Styx11/Sudoku)
> 规则：玩家需要根据9×9盘面上的已知数字，推理出所有剩余空格的数字，并满足每一行、每一列、每一个粗线宫（3*3）内的数字均含1-9，不重复。目前已知的数独终盘约有6.67×10的21次方种组合，2005年由Bertram Felgenhauer和Frazer Jarvis计算出该数字

![数独九宫格](https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1540126546791&di=96a48e3d7fc70ea11195978a1d25b292&imgtype=0&src=http%3A%2F%2Fimg.mp.itc.cn%2Fupload%2F20170705%2F48a36dcb0de24adb97d091756ab52aab_th.jpg)

由规则我们知道数独九宫格中的数字填写是要依照一定的**不重复**原则，也就是该数字在其所在行、列、宫都是唯一的，并且一个数独九宫格只有**唯一解**，不存在多解的歧义。建立一个终盘涉及到随机数的获取、数字的验证与填写，那么首先我们的思路就应该是 ***获取随机数->*** ***建立9×9宫格->*** ***不断验证并将随机数填入->*** ***按难度扣去一定数字->*** ***解题验证***

*下面依照这个思路一步步说明*

## Fisher-Yates洗牌算法
Fisher–Yates洗牌算法也被称做高纳德置乱算法，通俗说就是生成一个有限集合的随机排列。Fisher-Yates洗牌算法是无偏的，所以每个排列都是等可能的，当前使用的Fisher-Yates随机置乱算法是相当有效的，需要的时间正比于要随机置乱的数，不需要额为的存储空间开销。

简单来说 Fisher–Yates 洗牌算法是一个用来将一个有限集合生成一个随机排列的算法（数组随机排序）。这个算法生成的随机排列是等概率的。同时这个算法非常高效。

### 算法步骤
1. 定义一个数组（shuffled），长度（length）是原数组（arr）长度
2. 取 0 到 index (初始0) 随机值 rand, 赋值shuffled[index] = shuffled[rand], shuffled[rand] = arr[index]
3. index++ ; 重复第二步，直到 index = length -1


简单来说，就是 shuffled 从 0 到 length-1 取随机序号进行赋值的过程，并且新加入的值是 arr[index]。

### 实现代码
``` js
// 取min到max区间内的随机数
Grid.prototype.randomIndex = function (min, max) {
  if (!max) {
    max = min;
    min = 0;
  }
  return min + Math.floor(Math.random() * (max - min + 1));
}

// 获得随机数数组
Grid.prototype.shuffle = function (arr) {
  // 创建一个长度为size的数组
  // map方法要求一个可遍历的数组
  var arr = arr 
    ? arr 
    : Array.apply(null, {length: this.size})
      .map(function (item, index) {
        return index + 1;
      })
  var length = this.size;
  var shuffled = new Array(length);

  // 洗牌算法生成随机数组
  for (var index=0; index<length; index++) {
    var random = this.randomIndex(0, index);
    if (random !== index) {
      shuffled[index] = shuffled[random];
    }
    shuffled[random] = arr[index];
  }
  return shuffled;
}
// [4, 8, 7, 1, 6, 2, 5, 9, 3]
```