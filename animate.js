//做动画的代码封装一个函数
//1.目标位置不定死.
//2.做动画的元素不写死
//3.动画的方向不写死.
function animate(ele, target) {
  //设置新计时器之前,清空老的计时器.
  clearInterval(ele.timerId);
  //设置计时器
  ele.timerId = setInterval(function () {
    //获取当前元素的left值
    let currentLeft = ele.offsetLeft;
    //设置步长
    let step = target > currentLeft ? 29 : -29;
    //计算.
    currentLeft += step;
    // console.log(currentLeft);
    //判断赋值
    if (Math.abs(currentLeft - target) > Math.abs(step)) {
      ele.style.left = currentLeft + "px";
    } else {
      ele.style.left = target + "px";
      clearInterval(ele.timerId);
    }
  }, 30);
}