# 地图影像（XYZ切片）下载即发布方案

## XYZ切片 [Tiled web map - Wikipedia](https://en.wikipedia.org/wiki/Tiled_web_map)

XYZ切片是谷歌地图推广起来的一种地图切片方式，瓦片为PNG图片，图像通过REST API提供，URL为http：//.../Z/X/Y.png，其中Z为缩放级别，X和Y标识图块。XYZ切片现在是最受欢迎的一种方式，并且被Google，Mapbox，OSM等许多服务所使用。在XYZ中，Z表示缩放层级，Z=zoom；XY的原点在左上角，X从左向右，Y从上向下。

![cesium通过rest api获取地图影像](/image/XYZ切片/1.webp)

如今，在gdal的切片工具gdal2tiles.py在gdal3版本便支持了XYZ切片，可以将tif按照XYZ切片的规则将数据切成不同层级。

![gdal2tiles.py的命令参数](/image/XYZ切片/gdal2tiles.py.webp)

链接推荐：

[ArcGIS切片转谷歌（高德）地图标准切片（XYZ） - 简书 (jianshu.com)](https://www.jianshu.com/p/6d52b45fd277)

[谷歌切片和tms切片的区别以及经纬度转化成二者行列号的方法_铭净止水的博客-CSDN博客](https://blog.csdn.net/jin80506/article/details/100974724)

## 下载

好用的工具很多，我个人比较喜欢的工具是能直接在后台运行的，下载完事就同时发布。个人推荐[MapDownload: 地图下载器](https://github.com/weshmily/MapDownload)。可以多线程快速地图下载，由于采用的环境为node，可以很容易地在windows和linux上使用。

主要需要设置的参数如下：

![MapDownload/src/index.js](/image/XYZ切片/mapDownload.webp)

设置好参数后，使用命令：npm start 便可开始下载（使用"nohup npm start &"后台下载）

## 发布

发布XYZ切片数据的方法很多，传统的方法就是使用geoserver，但是geosver的优势是支持WMTS、WMS、WFS等网络地图协议。但是XYZ切片并不需要这些，只需要支持REST API的服务即可。因此，我们可以使用Minio、Tomcat、Apache等软件来实现地图的发布。个人喜欢使用minio来实现。

cesium加载数据如下：

![cesium load](/image/XYZ切片/cesium_load.webp)

综上，使用MapDownload+minio便可以实现下载即发布方案。
