<!DOCTYPE html>
<html>
 
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <title>原生JS实现苹果菜单栏</title>
    <style>
        body {
            margin: 0;
        }
 
        #div0 {
            width: 80%;
            margin: 0 auto;
            text-align: center;
            position: absolute;
            bottom: 600px;
            left: 50%;
            transform: translate(-50%);
        }
 
        #div1 {
            width: 100%;
            position: absolute;
            bottom: 300px;
            text-align: center;
        }
    </style>
 
    <script>
        document.onmousemove = function (ev) {
 
            var oEvent = ev || event;
            var oDiv = document.getElementById('div1');
            var aImg = document.getElementsByTagName('img');
            var aTxt = document.getElementsByTagName('input');
            var i = 0;
 
            for (i = 0; i < aImg.length; i++) {
                //计算每个图片中心相对于屏幕左边的距离
                var x = aImg[i].offsetLeft + aImg[i].offsetWidth / 2;
                //计算每个图片中心相对于屏幕顶边的距离
                //oDiv.offsetTop为图片父元素相对屏幕顶部的距离
                var y = aImg[i].offsetTop + oDiv.offsetTop + aImg[i].offsetHeight / 2;
 
                //计算当前鼠标相对于图片中心左边的跟离
                var a = x - oEvent.clientX;
                //计算当前鼠标相对于图片中心顶边的跟离
                var b = y - oEvent.clientY;
 
                //计算当前鼠标相对于图片中心的连线距离
                var dis = Math.sqrt(a * a + b * b);
                //用当前连线距离除以100与1求差
                //实现鼠标相对于图片越近比例越大
                var scale = 1 - dis / 100;
 
                //防止鼠标距离图片太远，图片消失
                if (scale < 0.5) {
                    scale = 0.5;
                };
 
                //设置图片宽度,128为最大值，两倍的图片宽度
                aImg[i].width = scale * 128;
 
                aTxt[i].value = scale.toFixed(2);
            }
        };
    </script>
</head>
 
<body>
    <div id="div0">
        <input type="text" />
        <input type="text" />
        <input type="text" />
        <input type="text" />
        <input type="text" />
    </div>
    <div id="div1">
        <img src="images/0.png" width="64" />
        <img src="images/1.png" width="64" />
        <img src="images/2.png" width="64" />
        <img src="images/3.png" width="64" />
        <img src="images/4.png" width="64" />
    </div>
</body>
 
</html>