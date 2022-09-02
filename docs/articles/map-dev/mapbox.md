## Mapbox 开发总结

- 基础底图
- 基本要素
- 基础图层
- 自定义图层
- 样式

### 底图

&emsp;底图就是基础的地图，并且通常不会发生改变，也可以理解成 Web 中的一个容器，最基础的图层，。实际开发中，我们只需从后台请求底图的一系列配置数据，再根据 mapbox 的要求加载这些配置，即可快速生成自定义的底图，接下来的都基于此 Map 对象。

### 基本要素

&emsp;包括指北针、放大缩小按钮、全图按钮、图例、比例尺等，通常地图引擎都会自带这些基本要素，可直接调用相关 api，可快速在地图中展现，然后根据 UI 修改对应的 CSS 即可。

### 基础图层

&emsp;这是最重要的一部分，下面以 mapBox 为例详细描述。

&emsp;基础图层主要包括：

- 点
- 线
- 面
- 热力图
- 背景图
- 点阵图

&emsp;那么如何在地图上展现这些图层呢？基本上如下三个步骤

- 创建哪一种图层

- 设置图层的样式

- 配置图层的数据来源（geoJson，vector，raster）

我们定义一个面图层，大致如下：

```
map.addLayer({
    'id': 'maine',
    'type': 'fill',   //创建哪一种图层
    'source': {
        'type': 'geojson',
        'data': {
            'type': 'Feature',
            'geometry': {
                'type': 'Polygon',
                'coordinates': [[
                    [-67.13734351262877, 45.137451890638886],
                    [-66.96466, 44.8097],
                    [-68.03252, 44.3252],
                    [-69.06, 43.98],
                    [-67.13734351262877, 45.137451890638886]]]
           }
        }
    }, //数据来源
    'layout': {},
    'paint': {
    'fill-color': '#088',
    'fill-opacity': 0.8       //样式
    }
});
```

&emsp;结合官方的 api 很快就能掌握了，但是重点在于当我们需要创建很多图层的时候，代码会非常的冗余，难以维护，这时候就需要用到 TypeScript 提供的语言特性---继承来封装基础的图层，例如需要创建多个点图层的时候，可能会产生如下代码：

```
map.addLayer({
  id: 'points1',
  type: 'symbol',
  source: {
    type: 'geojson',
    data: {
      type: 'FeatureCollection',
      features: [
        {
          type: 'Feature',
          geometry: {
            type: 'Point',
            coordinates: [-77.03238901390978, 38.913188059745586]
          },
          properties: {
            title: 'Mapbox DC',
            icon: 'monument'
          }
        }
      ]
    }
  },
  layout: {
    'icon-image': '{icon}-15',
    'text-field': '{title}',
  }
})

```

```
map.addLayer({
  id: 'points2',
  type: 'symbol',
  source: {
    type: 'geojson',
    data: {
      type: 'FeatureCollection',
      features: [
        {
          type: 'Feature',
          geometry: {
            type: 'Point',
            coordinates: [-78.03238901390978, 38.913188059745586]
          },
          properties: {
            title: 'Mapbox DC',
            icon: 'monument'
          }
        }
      ]
    }
  },
  layout: {
    'icon-image': '{icon}-16',
    'text-field': '{title}',
  }
})

```

&emsp; 仔细看会发现，mapbox 几乎完全是配置式的，我们把公共的部分抽离作为父类，并把配置暴露成构造函数的参数，子类只需要继承父类，并传不同的参数，即可创建多个不同的图层对象。我们稍微封装下，见如下代码：

```
export class BaseLayers {
    constructor(
        icons: any | [],
        layersId,
        map?: Map
    ) {
        ....
    }
}
```

子类中调用

```
super('img1','tb_basis_info',this.map)

```

&emsp; 并且继承还有其他很多好处，例如要控制图层的显示隐藏时，通常需要每一个图层对象自身去管理，如果是简单的图层，也可以通过父类统一去管理，然后在子类中调用父类的方法并传入参数即可。再比如，如果我们需要在图层对象中创建一些订阅，创建一些弹出框对象等，都只需要在父类中统一创建，统一销毁，子类不再单独处理，非常有必要！

&emsp; 除了可以继承父类的方法，遇到特殊的图层时，子类也可以重写父类的方法。

#### 图层操作中经常遇到的问题

- 过滤与表达式
- 学会使用 Canvas 代替图片
- 结合第三方库运算

##### 过滤

例如地图上很多的点，当我们点击其中一个，只需要显示其中一个所代表的面，不需要把面图层数据源里面所有的数据都展示，我们就需要用到过滤，在标准的 geoJson 格式中，如果有多条数据，features 也会包含多个 feature，其中每一个 feature 都会有自身的 properties 属性，包含很多字段，例如 name 也就相当于唯一标识，如果我们要获取 name 为 USA 的那个点,如下：

```
    map.setFilter('layerName', ['==', 'name', 'USA']);
```

mapbox 默认会去从 properties 属性里面根据指定的 key 获得 value 值，它有一套独特的表达式，不仅可以运用在程式代码中，还可以运用在属性配置中，见如下两段代码：

利用表达式做匹配，可以指定一个图层中某些属性不同的点添加不同颜色：

```
paint: {
            'fill-color': [
                  'match',
                  ['get', 'status', ['get', 'dataInfo']],
                  '5',
                  '#75B140',
                  '4',
                  '#33A6CC',
                  '3',
                  '#E4C411',
                  '2',
                  '#F97B2C',
                  '1',
                  '#EE5655',
                  'white'
            ],
            'fill-opacity': 0.4
          }
```

利用表达式做拼接，可以指定一个图层中某些属性不同的点添加不同图片：

```
layout: {
            'icon-image': [
              'concat',
              'real_time_',
              ['get', 'status', ['get', 'dataInfo']],  //注意先后顺序
              '_',
              ['get', 'name', ['get', 'dataInfo']],
              ':',
              ['get', 'num', ['get', 'dataInfo']],
              '人'
            ],
          },
```

**牢记 get 均是从 geoJson 里面的 properties 属性里面获取，如果出现问题，一定要先检查 geoJson 的结构，层级是否正确！**

##### 学会使用 Canvas 代替图片

在某些特殊图层中，我们需要用到图片，但往往放到地图中，随着地图的缩放旋转，会出现各种现象，例如压盖不正常，锯齿，且自定义程度不够，这时候我们就要考虑使用 Canvas 绘制。
我总结了三种实现方式：

- 地图绑定 styleimagemissing 事件动态加载，见如下代码：

我们依旧是在创建图层的时候通过给属性绑定表达式。

```
map.addLayer({
    "id": "points",
    "type": "symbol",
    "source": {
        ...
    }
},
"layout": {
  "icon-image": ["concat", "square-rgb-", ["get", "color"]]
}
});
```

然后绑定事件中可以获取到每一个需要图片的元素传入的参数（颜色），

```
map.on('styleimagemissing', function(e) {
    var id = e.id;

    var prefix = 'square-rgb-';
    if (id.indexOf(prefix) !== 0) return;

    var rgb = id.replace(prefix, '').split(',').map(Number);

     ......//绘制Canvas代码
    const dataImg = context.getImageData(0, 0, 200, 200).data

    map.addImage(id, {width: width, height: width, data: dataImg});
});
```

最后再给每一个元素绑定,即可实现，这种方法还可以作用于多个图层，只需要加上特殊的标记如前缀，在 styleimagemissing 事件中分别处理，这种方法的好处可以动态的根据参数绘制不同的内容。

- 静态绑定

当需要绘制的图片都一样时，就不需要用上面的动态绑定，只需要在配置中定义一个标识，

```
"layout": {
  "icon-image": "gradient"
}
```

然后绑定即可，

```
 map.addImage('gradient', {width: width, height: width, data: dataImg});
```

- 动画

依旧先绑定一个图片唯一标识

```
map.addImage('pulsing-dot', pulsingDot, { pixelRatio: 2 });
.....
"layout": {
"icon-image": "pulsing-dot"
}
```

这个 pulsingDot 对象实际上是一个 mapbox 提供的 styleImageInterface，专门用于用于动态生成样式图像的接口，调用 render 方法就可以调用每一帧，用于更新图像，达到动画的效果。大致代码如下：

```
var pulsingDot = {
    width: 64,
    height: 64,
    data: new Uint8Array(64 * 64 * 4),

    onAdd: function(map) {
        this.map = map;
    },

    render: function() {
        // keep repainting while the icon is on the map
        this.map.triggerRepaint();

        // alternate between black and white based on the time
        var value = Math.round(Date.now() / 1000) % 2 === 0  ? 255 : 0;

        // check if image needs to be changed
        if (value !== this.previousValue) {
            this.previousValue = value;

            var bytesPerPixel = 4;
            for (var x = 0; x < this.width; x++) {
                for (var y = 0; y < this.height; y++) {
                    var offset = (y * this.width + x) * bytesPerPixel;
                    this.data[offset + 0] = value;
                    this.data[offset + 1] = value;
                    this.data[offset + 2] = value;
                    this.data[offset + 3] = 255;
                }
            }

            // return true to indicate that the image changed
            return true;
        }
    }
 }
```

##### 结合第三方计算库计算

常用的有 jsts，turf。turf 是 mapbox 推荐使用的 [turf.org](http://turfjs.org/). 常用的可以计算出面的面积，单面和多个面的中心点，单面和多个面的最小外包矩形，面融合等操作。

### 自定义图层

Mapbox 还支持自定义图层，最常见的就是结合 three.js 可以在地图中展示三维的要素，定义图层的时候指定 type 为 custom 并指定渲染的模式为 3D，

```
var customLayer = {
    id: '3d-model',
    type: 'custom',
    renderingMode: '3d'
}
```

至于更深层次的研究就需要掌握 three.js 的知识了。

### 样式

刚开始结束 Mapbox 的时候发现 style 部分，官方都单独拿出来做了详细的说明。大量的属性需要在使用中去掌握。
