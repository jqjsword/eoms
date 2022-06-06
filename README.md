# 对地观察模型系统操作说明

对地观察模型系统（Earth Observing Model System）是一套可以进行卫星对地观察仿真与任务分析的软件。该软件系目前国内该领域第一个B-S架构软件。

该软件支持在线、离线方式对卫星的基本信息、轨道参数等基础数据进行引接和存储；支持卫星目标数据增、删、改、查等基本馆里功能，以及星历数据的发布、检索、浏览和下载等功能；支持根据卫星星历数据进行轨道计算、提供星下点计算、卫星当前高度计算；支持卫星基本信息、三维模型、轨道模型以及卫星运行轨迹、卫星覆盖范围等仿真展示；提供点过境预报、区域过境预报、反航天侦察等功能。目前该软件的服务器端已经发布在http://8.140.167.224:8000 上，供用户试用。EOMS系基于数字地球开源平台Cesium开发的。本文档旨在介绍客户端的使用说明：

作者简介
谢兴：工学博士，毕业于武汉大学多媒体中心，主要从事三维仿真、计算视觉、遥感图像处理、地理信息系统的研究。业余时间从事开源软件开发。

![作者](https://images.gitee.com/uploads/images/2021/0618/151335_bc4d9e94_8892328.png "作者.png")

# 建议配置

CPU:：Intel i3级别或同等级AMD处理器以上

RAM：8G或以上

硬盘：240G 或以上

显示分辨率：1280*768或以上

# 启动

1. 安装nodejs,
2. 安装cnpm,
3. 进入当前文件夹执行  `cnpm install`
4. `cnpm run start` 
5. 在浏览器中输入`localhost:8080`

EOMS系采用浏览器-服务器架构开发的模型系统，其客户端在目前操作支持的浏览器上都可以启动。
![主界面](https://img-blog.csdnimg.cn/20210501214448129.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3doX3hpZXhpbmc=,size_16,color_FFFFFF,t_70 "gui.png")

# 客户端结构介绍

位于客户端顶部的是cesium信息条，位于客户端底部的是cesium时间控制条。右上的四个按钮为cesium基本功能按钮，图中数字地球下方的5个按钮为EOMS功能按钮。位于主展示窗体左侧的是EOMS信息窗。

# EOMS信息窗口

初入界面可以直接看到的EOMS信息窗口共有3个，分别是卫星信息窗口，地面站信息窗口，和感兴趣（AOI）区域信息窗口

## 卫星信息窗口 
![](https://img-blog.csdnimg.cn/2021050121510146.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3doX3hpZXhpbmc=,size_16,color_FFFFFF,t_70  "window_info.png")

上图即为卫星信息窗口。点击卫星信息窗口的标题栏可在该窗口被隐藏窗体后再度打开。EOMS将录有卫星两行星历的文件存入数据库，并定期更新。然后将卫星的相关数据发至客户端，并在卫星信息窗口展示。

![img](https://img-blog.csdnimg.cn/20210501215306811.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3doX3hpZXhpbmc=,size_16,color_FFFFFF,t_70)

点击卫星名后边的齿轮，会显示卫星的属性。属性中包含两行星历数据，轨道高度，卫星幅宽以及优先级。允许用户改动的是卫星的优先级。优先级属性定义的是接收卫星数据的优先级，将会在卫星任务接收规划中使用到。点击属性对话框的关闭按钮关闭属性对话框。

## 地面站信息窗口

![img](https://img-blog.csdnimg.cn/20210501215417355.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3doX3hpZXhpbmc=,size_16,color_FFFFFF,t_70)

点击地面站信息窗口的标题栏，即可打开地面站信息窗口，如上图。与卫星信息窗口类似。

![img](https://img-blog.csdnimg.cn/20210501215453741.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3doX3hpZXhpbmc=,size_16,color_FFFFFF,t_70)

 点击地面站名后边的齿轮，会显示地面站的属性。属性中包含位置（经纬度及高程），接收半径，准备时间以及复位时间。点击属性对话框的关闭按钮关闭属性对话框。

## 感兴趣（AOI）区域信息窗口

![img](https://img-blog.csdnimg.cn/20210501215510193.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3doX3hpZXhpbmc=,size_16,color_FFFFFF,t_70)

点击感兴趣（AOI）区域窗口的标题栏，即可打开感兴趣（AOI）区域信息窗口，如上图。该窗口提供用户定义感兴趣区域的名称以及位置。用户可以在主窗体中找到感兴趣的区域所在的大概位置，点击本窗体的鼠标拾取按钮（![img](https://img-blog.csdnimg.cn/20210501215538747.png)）拾取区域的范围，待窗体中的左上角、右下角坐标出现数字以后，再点击添加按钮（ ![img](https://img-blog.csdnimg.cn/202105012155489.png)）完成对感兴趣区域的添加。

# EOMS功能按钮

![img](https://img-blog.csdnimg.cn/20210501215625832.png)

 

EOMS的功能按钮共有6个，如上图，从左到右依次为：实时模式按钮，仿真模式按钮，覆盖分析按钮，任务规划按钮，系统设置、关于按钮。前4个按钮将鼠标移至其上时都会给出名称提示。以下逐个介绍这6个按钮的功能。

##  实时模式按钮

![img](https://img-blog.csdnimg.cn/20210501215726373.png)

EOMS系统默认的模式即是实时模式。如果有选定卫星，则该卫星的实时位置信息将在主展示窗体中给出。在其他的工作模式下需要切换会实时模式时，可以点击该按钮。

## 仿真模式按钮

![img](https://img-blog.csdnimg.cn/20210501215738441.png)

仿真模式按钮提供用户以仿真的方式观察卫星运行的情况。点击仿真模式按钮之后系统将进入仿真模式，如下图。

![img](https://img-blog.csdnimg.cn/20210501215802398.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3doX3hpZXhpbmc=,size_16,color_FFFFFF,t_70)

在仿真模式下，EOMS系统提供两项功能，即星下点计算和访站分析。这两项分析都需要选定仿真的时间段。目前EOMS系统只提供一日之内的运行仿真。

## 覆盖分析按钮

![img](https://img-blog.csdnimg.cn/20210501215816382.png)

覆盖分析按钮提供卫星对地观测的覆盖分析功能。需要选定某颗卫星，还需要定义某个感兴趣区域。另外还需要指定需要进行覆盖分析的时段。目前使用的覆盖分析法为网格分析法。因此需要指定网格密度。

![img](https://img-blog.csdnimg.cn/20210501215841505.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3doX3hpZXhpbmc=,size_16,color_FFFFFF,t_70)

点击覆盖分析按钮之后EOMS系统的界面如上图所示。在这里可以指定做覆盖分析的相关参数。

## 任务规划按钮

![img](https://img-blog.csdnimg.cn/20210501215910593.png)

任务规划按钮提供卫星对地接收的任务规划功能，目前提供一站多星和多站一星两种任务规划功能。点击任务规划按钮之后EOMS系统的界面如下图所示。

![img](https://img-blog.csdnimg.cn/20210501215924684.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3doX3hpZXhpbmc=,size_16,color_FFFFFF,t_70) 

任务规划功能需要指定地面站和卫星。并指定任务规划的时间段。

## 系统配置按钮
![img](https://img-blog.csdnimg.cn/20210509150950677.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3doX3hpZXhpbmc=,size_16,color_FFFFFF,t_70)

## 关于按钮

![img](https://img-blog.csdnimg.cn/2021050121594772.png)

将鼠标移至该按钮上，即可显示关于本软件的相关介绍信息

## **加载卫星操作示例**

![img](https://img-blog.csdnimg.cn/20210501220137192.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3doX3hpZXhpbmc=,size_16,color_FFFFFF,t_70)

 

在卫星信息对话框中，在需要选定加载的卫星的名字前方，勾选该卫星，即完成卫星的加载。选中的卫星会根据相关的信息绘制到主展示窗体中，如上图所示。

EOMS系统将卫星当前位置前后的一段轨迹绘制出来，便于用户有一个直观的感知。

![img](https://img-blog.csdnimg.cn/20210501220200847.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3doX3hpZXhpbmc=,size_16,color_FFFFFF,t_70)

 

在2D模式下，用户也可以直观看到卫星的所处位置以及前后的运行轨迹。用户可以通过卫星的属性按钮更改卫星的属性：

![img](https://img-blog.csdnimg.cn/20210606192114646.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3doX3hpZXhpbmc=,size_16,color_FFFFFF,t_70)

例如：用户可以更改卫星的传感器模型。

![img](https://img-blog.csdnimg.cn/20210606192256546.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3doX3hpZXhpbmc=,size_16,color_FFFFFF,t_70)

#  加载地面站操作示例
![img](https://img-blog.csdnimg.cn/20210501220220638.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3doX3hpZXhpbmc=,size_16,color_FFFFFF,t_70)

在地面站信息对话框中，在需要选定加载的地面站的名字前方，勾选该地面站，即完成地面站的加载。选中的地面站会根据相关的信息绘制到主展示窗体中，如上图所示。图中勾选了Nuuk地面站和Sodankyla地面站。默认的地面站接收footprint是2000km。EOMS系统将地面站的接收footprint绘制出来，便于用户有一个直观的感知。这个接收范围在2D模式下有这不同的形状表现。如下图所示：
![img](https://img-blog.csdnimg.cn/20210501220311603.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3doX3hpZXhpbmc=,size_16,color_FFFFFF,t_70)

#  定义感兴趣（AOI）区域操作示例
利用鼠标滚轮可以放大和缩小3D地球。找到感兴趣（AOI）区域的大概位置以后即可进行选取。
![img](https://img-blog.csdnimg.cn/20210501220336651.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3doX3hpZXhpbmc=,size_16,color_FFFFFF,t_70)
示例中选择了重庆地区。首先，将数字地球缩放到重庆地区的大概位置，然后点击感兴趣（AOI）区域信息窗口中的鼠标拾取按钮![img](https://img-blog.csdnimg.cn/20210501220357613.png)，就进入鼠标拾取模式。进入鼠标拾取模式以后，先拾取的是感兴趣区域的左上角，此时单击鼠标左键，稍等以后就会出现一个左上角固定，右下角坐标可变的红色矩形。移动鼠标可以改变矩形覆盖的位置。选取好矩形大小后，再度点击鼠标左键，即完成感兴趣区域的拾取。此时矩形的左上角坐标和右下角坐标将会在感兴趣（AOI）区域信息窗口中显示出来。再点击感兴趣（AOI）区域信息窗口中的添加按钮![img](https://img-blog.csdnimg.cn/20210501220419832.png)此感兴趣区域就会被创建出来。

![img](https://img-blog.csdnimg.cn/20210501220429676.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3doX3hpZXhpbmc=,size_16,color_FFFFFF,t_70)

然后可以继续添加其他的感兴趣区域。

![img](https://img-blog.csdnimg.cn/20210501220503242.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3doX3hpZXhpbmc=,size_16,color_FFFFFF,t_70)

本例中又选择在武汉地区添加了一个名叫aoi_1的感兴趣区域，以此类推。
![img](https://img-blog.csdnimg.cn/20210501220519489.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3doX3hpZXhpbmc=,size_16,color_FFFFFF,t_70)

选择好感兴趣区域以后，将鼠标移至感兴趣区域上，可点击右上角工具栏中的摄像机图标![img](https://img-blog.csdnimg.cn/20210501220540309.png)即可将场景缩放至以该地区为中心的状态。对于感兴趣区域的定义，还可以手动输入坐标的信息，方法是直接对感兴趣区域信息框里的Edit控件进行编辑。
![img](https://img-blog.csdnimg.cn/20210501220556871.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3doX3hpZXhpbmc=,size_16,color_FFFFFF,t_70)


# 仿真模式操作示例
![img](https://img-blog.csdnimg.cn/20210501220617552.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3doX3hpZXhpbmc=,size_16,color_FFFFFF,t_70) 

如上图，先添加两颗卫星到主展示窗体上，再点击仿真模式按钮，选择好需要仿真的时间段，如下图所示
![img](https://img-blog.csdnimg.cn/20210501220628350.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3doX3hpZXhpbmc=,size_16,color_FFFFFF,t_70)
然后点击仿真参数窗口的星下点计算按钮![img](https://img-blog.csdnimg.cn/20210501220645170.png)。EMOS将会以5分钟为采样间隔计算两颗卫星（本例中是AQUA和TERRA）的星下点坐标序列。计算是以多线程的方式进行的，在计算的同时，主窗体右侧会出现一个卫星轨迹信息窗口，列出具体的卫星轨迹时间点及经纬度坐标信息。计算完毕之后，卫星轨迹信息窗口上方会出现一个橙色的信息提示框，告诉用户计算完成。如下图所示。

![img](https://img-blog.csdnimg.cn/20210501220718261.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3doX3hpZXhpbmc=,size_16,color_FFFFFF,t_70)
浏览器窗体的左下角有一个时间控制操作盘
![img](https://img-blog.csdnimg.cn/2021050122073647.png)

时间控制盘有4个可操纵控件，分别为场景正播（Play forward）、逆播（Play Reverse）、暂停，以及播放倍速指针。在计算完星下点轨迹以后，点击Play forward按钮，并根据自己的需求调整播放倍速，本例中选择的播放倍速是490倍，这样在太阳同步轨道上缓慢运行的Terra和Aqua两颗卫星在仿真模式下就可以迅速地运行起来了。在播放模拟场景的时候可以点击暂停按钮暂停播放，需要回溯卫星轨迹的时候可以点击Play Reverse按钮，逆向播放。
![img](https://img-blog.csdnimg.cn/20210501220753784.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3doX3hpZXhpbmc=,size_16,color_FFFFFF,t_70)
仿真模式下，还可以对选定的卫星对选定的地面站进行访站分析。先往主窗体中添加两个地面站，本例中为Nuuk和摩尔曼斯克站，然后点击仿真参数窗口的访站分析按钮。EOMS系统将会在浏览器中新建一个页面来输出生成的结果。这可能需要一段时间进行计算和报表生成并将结果发送到前端。此期间用户可以在界面上进行正常的操作。
![img](https://img-blog.csdnimg.cn/20210502130245211.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3doX3hpZXhpbmc=,size_16,color_FFFFFF,t_70)
最后生成的结果如上图所示。此时用户可以拖动页面下方的滚动条和时间轴缩放来获得自己喜欢的视图。

# 任务规划操作示例

## 一站多星任务规划

如下图，本例中选择了Nuuk地面站和AELOUS 、ALOS-2、ALSAT-1B、AQUA和AURA五颗卫星作为规划目标。
点击EOMS功能按钮中的任务规划按钮，会弹出任务规划对话框，然后在地面站下拉菜单中选择Nuuk站，并在卫星下拉菜单中选好上述的五颗卫星。如下图
![img](https://img-blog.csdnimg.cn/202105012208540.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3doX3hpZXhpbmc=,size_16,color_FFFFFF,t_70)

然后择定规划的起始时间

![img](https://img-blog.csdnimg.cn/20210501220907279.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3doX3hpZXhpbmc=,size_16,color_FFFFFF,t_70)
点击执行按钮，将会在浏览器中打开一个新的页面。在此页面下，需要等待一段时间，即可看到如下的展示结果：
![img](https://img-blog.csdnimg.cn/20210502124425384.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3doX3hpZXhpbmc=,size_16,color_FFFFFF,t_70)
页面分为上下两个区，上面是卫星、地面站信息以及任务规划的甘特图，在甘特图中，时间轴被分为多个区段，无冲突的时间段用绿色标签显示，存在冲突的时间段用红色标签显示，柱状实体表示卫星的时间窗，绿色柱状图表似乎该卫星在这个时间段被卫星站接收，而红色的卫星时间窗被卫星站抛弃。如果对规划结果不满意，可以选择在任务规划结果页面左下侧的“任务规划参数”栏，对参数进行修改，并重新规划，“高级选项”可以让用户自己选择任务规划的指标函数。
![img](https://img-blog.csdnimg.cn/20210502124747846.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3doX3hpZXhpbmc=,size_16,color_FFFFFF,t_70)

## 多站一星任务规划
与11.1节中的操作类似，只是选项卡选择多站一星选项卡，然后本例中选择了Nuuk，Sodankyla和摩尔曼斯克地面站来对AQUA卫星的接收任务进行规划

![img](https://img-blog.csdnimg.cn/20210501221017924.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3doX3hpZXhpbmc=,size_16,color_FFFFFF,t_70)
点击执行按钮之后，得到如下图的结果。其表达意义和进一步高级选项等与10.1节类似。
![img](https://img-blog.csdnimg.cn/20210502124926424.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3doX3hpZXhpbmc=,size_16,color_FFFFFF,t_70)

## 覆盖分析操作示例
参照第9节中的内容，添加一个感兴趣区域，本例中以武汉地区为例，先定义感兴趣区域aoi_0，如图所示然后点击EOMS功能按钮中的覆盖分析按钮。得到下图
![img](https://img-blog.csdnimg.cn/20210501221058608.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3doX3hpZXhpbmc=,size_16,color_FFFFFF,t_70)
在感兴趣区域中选择了aoi_0，并在卫星选择框里选择AQUA卫星。然后择定覆盖分析的的观测时间。并点击执行按钮。即可得到下图的计算结果。黄色的区域即为该时间段内AUQA卫星可以覆盖到的区域
![img](https://img-blog.csdnimg.cn/20210502130444360.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3doX3hpZXhpbmc=,size_16,color_FFFFFF,t_70)

 