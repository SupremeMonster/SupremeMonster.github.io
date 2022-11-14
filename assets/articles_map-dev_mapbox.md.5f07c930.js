import{_ as s,c as n,o as a,a as l}from"./app.9113ee1d.js";const d=JSON.parse('{"title":"Mapbox \u5F00\u53D1\u603B\u7ED3","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u5E95\u56FE","slug":"\u5E95\u56FE","link":"#\u5E95\u56FE","children":[]},{"level":2,"title":"\u57FA\u672C\u8981\u7D20","slug":"\u57FA\u672C\u8981\u7D20","link":"#\u57FA\u672C\u8981\u7D20","children":[]},{"level":2,"title":"\u57FA\u7840\u56FE\u5C42","slug":"\u57FA\u7840\u56FE\u5C42","link":"#\u57FA\u7840\u56FE\u5C42","children":[]},{"level":2,"title":"\u56FE\u5C42\u64CD\u4F5C\u4E2D\u7ECF\u5E38\u9047\u5230\u7684\u95EE\u9898","slug":"\u56FE\u5C42\u64CD\u4F5C\u4E2D\u7ECF\u5E38\u9047\u5230\u7684\u95EE\u9898","link":"#\u56FE\u5C42\u64CD\u4F5C\u4E2D\u7ECF\u5E38\u9047\u5230\u7684\u95EE\u9898","children":[{"level":3,"title":"\u8FC7\u6EE4","slug":"\u8FC7\u6EE4","link":"#\u8FC7\u6EE4","children":[]},{"level":3,"title":"\u5B66\u4F1A\u4F7F\u7528 Canvas \u4EE3\u66FF\u56FE\u7247","slug":"\u5B66\u4F1A\u4F7F\u7528-canvas-\u4EE3\u66FF\u56FE\u7247","link":"#\u5B66\u4F1A\u4F7F\u7528-canvas-\u4EE3\u66FF\u56FE\u7247","children":[]}]},{"level":2,"title":"\u7ED3\u5408\u7B2C\u4E09\u65B9\u8BA1\u7B97\u5E93\u8BA1\u7B97","slug":"\u7ED3\u5408\u7B2C\u4E09\u65B9\u8BA1\u7B97\u5E93\u8BA1\u7B97","link":"#\u7ED3\u5408\u7B2C\u4E09\u65B9\u8BA1\u7B97\u5E93\u8BA1\u7B97","children":[]},{"level":2,"title":"\u81EA\u5B9A\u4E49\u56FE\u5C42","slug":"\u81EA\u5B9A\u4E49\u56FE\u5C42","link":"#\u81EA\u5B9A\u4E49\u56FE\u5C42","children":[]},{"level":2,"title":"\u6837\u5F0F","slug":"\u6837\u5F0F","link":"#\u6837\u5F0F","children":[]}],"relativePath":"articles/map-dev/mapbox.md"}'),p={name:"articles/map-dev/mapbox.md"},e=l(`<h1 id="mapbox-\u5F00\u53D1\u603B\u7ED3" tabindex="-1">Mapbox \u5F00\u53D1\u603B\u7ED3 <a class="header-anchor" href="#mapbox-\u5F00\u53D1\u603B\u7ED3" aria-hidden="true">#</a></h1><ul><li>\u57FA\u7840\u5E95\u56FE</li><li>\u57FA\u672C\u8981\u7D20</li><li>\u57FA\u7840\u56FE\u5C42</li><li>\u81EA\u5B9A\u4E49\u56FE\u5C42</li><li>\u6837\u5F0F</li></ul><h2 id="\u5E95\u56FE" tabindex="-1">\u5E95\u56FE <a class="header-anchor" href="#\u5E95\u56FE" aria-hidden="true">#</a></h2><p>\u2003\u5E95\u56FE\u5C31\u662F\u57FA\u7840\u7684\u5730\u56FE\uFF0C\u5E76\u4E14\u901A\u5E38\u4E0D\u4F1A\u53D1\u751F\u6539\u53D8\uFF0C\u4E5F\u53EF\u4EE5\u7406\u89E3\u6210 Web \u4E2D\u7684\u4E00\u4E2A\u5BB9\u5668\uFF0C\u6700\u57FA\u7840\u7684\u56FE\u5C42\uFF0C\u3002\u5B9E\u9645\u5F00\u53D1\u4E2D\uFF0C\u6211\u4EEC\u53EA\u9700\u4ECE\u540E\u53F0\u8BF7\u6C42\u5E95\u56FE\u7684\u4E00\u7CFB\u5217\u914D\u7F6E\u6570\u636E\uFF0C\u518D\u6839\u636E mapbox \u7684\u8981\u6C42\u52A0\u8F7D\u8FD9\u4E9B\u914D\u7F6E\uFF0C\u5373\u53EF\u5FEB\u901F\u751F\u6210\u81EA\u5B9A\u4E49\u7684\u5E95\u56FE\uFF0C\u63A5\u4E0B\u6765\u7684\u90FD\u57FA\u4E8E\u6B64 Map \u5BF9\u8C61\u3002</p><h2 id="\u57FA\u672C\u8981\u7D20" tabindex="-1">\u57FA\u672C\u8981\u7D20 <a class="header-anchor" href="#\u57FA\u672C\u8981\u7D20" aria-hidden="true">#</a></h2><p>\u2003\u5305\u62EC\u6307\u5317\u9488\u3001\u653E\u5927\u7F29\u5C0F\u6309\u94AE\u3001\u5168\u56FE\u6309\u94AE\u3001\u56FE\u4F8B\u3001\u6BD4\u4F8B\u5C3A\u7B49\uFF0C\u901A\u5E38\u5730\u56FE\u5F15\u64CE\u90FD\u4F1A\u81EA\u5E26\u8FD9\u4E9B\u57FA\u672C\u8981\u7D20\uFF0C\u53EF\u76F4\u63A5\u8C03\u7528\u76F8\u5173 api\uFF0C\u53EF\u5FEB\u901F\u5728\u5730\u56FE\u4E2D\u5C55\u73B0\uFF0C\u7136\u540E\u6839\u636E UI \u4FEE\u6539\u5BF9\u5E94\u7684 CSS \u5373\u53EF\u3002</p><h2 id="\u57FA\u7840\u56FE\u5C42" tabindex="-1">\u57FA\u7840\u56FE\u5C42 <a class="header-anchor" href="#\u57FA\u7840\u56FE\u5C42" aria-hidden="true">#</a></h2><p>\u2003\u8FD9\u662F\u6700\u91CD\u8981\u7684\u4E00\u90E8\u5206\uFF0C\u4E0B\u9762\u4EE5 mapBox \u4E3A\u4F8B\u8BE6\u7EC6\u63CF\u8FF0\u3002</p><p>\u2003\u57FA\u7840\u56FE\u5C42\u4E3B\u8981\u5305\u62EC\uFF1A</p><ul><li>\u70B9</li><li>\u7EBF</li><li>\u9762</li><li>\u70ED\u529B\u56FE</li><li>\u80CC\u666F\u56FE</li><li>\u70B9\u9635\u56FE</li></ul><p>\u2003\u90A3\u4E48\u5982\u4F55\u5728\u5730\u56FE\u4E0A\u5C55\u73B0\u8FD9\u4E9B\u56FE\u5C42\u5462\uFF1F\u57FA\u672C\u4E0A\u5982\u4E0B\u4E09\u4E2A\u6B65\u9AA4</p><ul><li><p>\u521B\u5EFA\u54EA\u4E00\u79CD\u56FE\u5C42</p></li><li><p>\u8BBE\u7F6E\u56FE\u5C42\u7684\u6837\u5F0F</p></li><li><p>\u914D\u7F6E\u56FE\u5C42\u7684\u6570\u636E\u6765\u6E90\uFF08geoJson\uFF0Cvector\uFF0Craster\uFF09</p></li></ul><p>\u6211\u4EEC\u5B9A\u4E49\u4E00\u4E2A\u9762\u56FE\u5C42\uFF0C\u5927\u81F4\u5982\u4E0B\uFF1A</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">map.addLayer({</span></span>
<span class="line"><span style="color:#A6ACCD;">    &#39;id&#39;: &#39;maine&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">    &#39;type&#39;: &#39;fill&#39;,   //\u521B\u5EFA\u54EA\u4E00\u79CD\u56FE\u5C42</span></span>
<span class="line"><span style="color:#A6ACCD;">    &#39;source&#39;: {</span></span>
<span class="line"><span style="color:#A6ACCD;">        &#39;type&#39;: &#39;geojson&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">        &#39;data&#39;: {</span></span>
<span class="line"><span style="color:#A6ACCD;">            &#39;type&#39;: &#39;Feature&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">            &#39;geometry&#39;: {</span></span>
<span class="line"><span style="color:#A6ACCD;">                &#39;type&#39;: &#39;Polygon&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">                &#39;coordinates&#39;: [[</span></span>
<span class="line"><span style="color:#A6ACCD;">                    [-67.13734351262877, 45.137451890638886],</span></span>
<span class="line"><span style="color:#A6ACCD;">                    [-66.96466, 44.8097],</span></span>
<span class="line"><span style="color:#A6ACCD;">                    [-68.03252, 44.3252],</span></span>
<span class="line"><span style="color:#A6ACCD;">                    [-69.06, 43.98],</span></span>
<span class="line"><span style="color:#A6ACCD;">                    [-67.13734351262877, 45.137451890638886]]]</span></span>
<span class="line"><span style="color:#A6ACCD;">           }</span></span>
<span class="line"><span style="color:#A6ACCD;">        }</span></span>
<span class="line"><span style="color:#A6ACCD;">    }, //\u6570\u636E\u6765\u6E90</span></span>
<span class="line"><span style="color:#A6ACCD;">    &#39;layout&#39;: {},</span></span>
<span class="line"><span style="color:#A6ACCD;">    &#39;paint&#39;: {</span></span>
<span class="line"><span style="color:#A6ACCD;">    &#39;fill-color&#39;: &#39;#088&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">    &#39;fill-opacity&#39;: 0.8       //\u6837\u5F0F</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">});</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>\u2003\u7ED3\u5408\u5B98\u65B9\u7684 api \u5F88\u5FEB\u5C31\u80FD\u638C\u63E1\u4E86\uFF0C\u4F46\u662F\u91CD\u70B9\u5728\u4E8E\u5F53\u6211\u4EEC\u9700\u8981\u521B\u5EFA\u5F88\u591A\u56FE\u5C42\u7684\u65F6\u5019\uFF0C\u4EE3\u7801\u4F1A\u975E\u5E38\u7684\u5197\u4F59\uFF0C\u96BE\u4EE5\u7EF4\u62A4\uFF0C\u8FD9\u65F6\u5019\u5C31\u9700\u8981\u7528\u5230 TypeScript \u63D0\u4F9B\u7684\u8BED\u8A00\u7279\u6027---\u7EE7\u627F\u6765\u5C01\u88C5\u57FA\u7840\u7684\u56FE\u5C42\uFF0C\u4F8B\u5982\u9700\u8981\u521B\u5EFA\u591A\u4E2A\u70B9\u56FE\u5C42\u7684\u65F6\u5019\uFF0C\u53EF\u80FD\u4F1A\u4EA7\u751F\u5982\u4E0B\u4EE3\u7801\uFF1A</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">map.addLayer({</span></span>
<span class="line"><span style="color:#A6ACCD;">  id: &#39;points1&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">  type: &#39;symbol&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">  source: {</span></span>
<span class="line"><span style="color:#A6ACCD;">    type: &#39;geojson&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">    data: {</span></span>
<span class="line"><span style="color:#A6ACCD;">      type: &#39;FeatureCollection&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">      features: [</span></span>
<span class="line"><span style="color:#A6ACCD;">        {</span></span>
<span class="line"><span style="color:#A6ACCD;">          type: &#39;Feature&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">          geometry: {</span></span>
<span class="line"><span style="color:#A6ACCD;">            type: &#39;Point&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">            coordinates: [-77.03238901390978, 38.913188059745586]</span></span>
<span class="line"><span style="color:#A6ACCD;">          },</span></span>
<span class="line"><span style="color:#A6ACCD;">          properties: {</span></span>
<span class="line"><span style="color:#A6ACCD;">            title: &#39;Mapbox DC&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">            icon: &#39;monument&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">          }</span></span>
<span class="line"><span style="color:#A6ACCD;">        }</span></span>
<span class="line"><span style="color:#A6ACCD;">      ]</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">  },</span></span>
<span class="line"><span style="color:#A6ACCD;">  layout: {</span></span>
<span class="line"><span style="color:#A6ACCD;">    &#39;icon-image&#39;: &#39;{icon}-15&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">    &#39;text-field&#39;: &#39;{title}&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">})</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">map.addLayer({</span></span>
<span class="line"><span style="color:#A6ACCD;">  id: &#39;points2&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">  type: &#39;symbol&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">  source: {</span></span>
<span class="line"><span style="color:#A6ACCD;">    type: &#39;geojson&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">    data: {</span></span>
<span class="line"><span style="color:#A6ACCD;">      type: &#39;FeatureCollection&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">      features: [</span></span>
<span class="line"><span style="color:#A6ACCD;">        {</span></span>
<span class="line"><span style="color:#A6ACCD;">          type: &#39;Feature&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">          geometry: {</span></span>
<span class="line"><span style="color:#A6ACCD;">            type: &#39;Point&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">            coordinates: [-78.03238901390978, 38.913188059745586]</span></span>
<span class="line"><span style="color:#A6ACCD;">          },</span></span>
<span class="line"><span style="color:#A6ACCD;">          properties: {</span></span>
<span class="line"><span style="color:#A6ACCD;">            title: &#39;Mapbox DC&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">            icon: &#39;monument&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">          }</span></span>
<span class="line"><span style="color:#A6ACCD;">        }</span></span>
<span class="line"><span style="color:#A6ACCD;">      ]</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">  },</span></span>
<span class="line"><span style="color:#A6ACCD;">  layout: {</span></span>
<span class="line"><span style="color:#A6ACCD;">    &#39;icon-image&#39;: &#39;{icon}-16&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">    &#39;text-field&#39;: &#39;{title}&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">})</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>\u2003 \u4ED4\u7EC6\u770B\u4F1A\u53D1\u73B0\uFF0Cmapbox \u51E0\u4E4E\u5B8C\u5168\u662F\u914D\u7F6E\u5F0F\u7684\uFF0C\u6211\u4EEC\u628A\u516C\u5171\u7684\u90E8\u5206\u62BD\u79BB\u4F5C\u4E3A\u7236\u7C7B\uFF0C\u5E76\u628A\u914D\u7F6E\u66B4\u9732\u6210\u6784\u9020\u51FD\u6570\u7684\u53C2\u6570\uFF0C\u5B50\u7C7B\u53EA\u9700\u8981\u7EE7\u627F\u7236\u7C7B\uFF0C\u5E76\u4F20\u4E0D\u540C\u7684\u53C2\u6570\uFF0C\u5373\u53EF\u521B\u5EFA\u591A\u4E2A\u4E0D\u540C\u7684\u56FE\u5C42\u5BF9\u8C61\u3002\u6211\u4EEC\u7A0D\u5FAE\u5C01\u88C5\u4E0B\uFF0C\u89C1\u5982\u4E0B\u4EE3\u7801\uFF1A</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">export class BaseLayers {</span></span>
<span class="line"><span style="color:#A6ACCD;">    constructor(</span></span>
<span class="line"><span style="color:#A6ACCD;">        icons: any | [],</span></span>
<span class="line"><span style="color:#A6ACCD;">        layersId,</span></span>
<span class="line"><span style="color:#A6ACCD;">        map?: Map</span></span>
<span class="line"><span style="color:#A6ACCD;">    ) {</span></span>
<span class="line"><span style="color:#A6ACCD;">        ....</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>\u5B50\u7C7B\u4E2D\u8C03\u7528</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">super(&#39;img1&#39;,&#39;tb_basis_info&#39;,this.map)</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>\u2003 \u5E76\u4E14\u7EE7\u627F\u8FD8\u6709\u5176\u4ED6\u5F88\u591A\u597D\u5904\uFF0C\u4F8B\u5982\u8981\u63A7\u5236\u56FE\u5C42\u7684\u663E\u793A\u9690\u85CF\u65F6\uFF0C\u901A\u5E38\u9700\u8981\u6BCF\u4E00\u4E2A\u56FE\u5C42\u5BF9\u8C61\u81EA\u8EAB\u53BB\u7BA1\u7406\uFF0C\u5982\u679C\u662F\u7B80\u5355\u7684\u56FE\u5C42\uFF0C\u4E5F\u53EF\u4EE5\u901A\u8FC7\u7236\u7C7B\u7EDF\u4E00\u53BB\u7BA1\u7406\uFF0C\u7136\u540E\u5728\u5B50\u7C7B\u4E2D\u8C03\u7528\u7236\u7C7B\u7684\u65B9\u6CD5\u5E76\u4F20\u5165\u53C2\u6570\u5373\u53EF\u3002\u518D\u6BD4\u5982\uFF0C\u5982\u679C\u6211\u4EEC\u9700\u8981\u5728\u56FE\u5C42\u5BF9\u8C61\u4E2D\u521B\u5EFA\u4E00\u4E9B\u8BA2\u9605\uFF0C\u521B\u5EFA\u4E00\u4E9B\u5F39\u51FA\u6846\u5BF9\u8C61\u7B49\uFF0C\u90FD\u53EA\u9700\u8981\u5728\u7236\u7C7B\u4E2D\u7EDF\u4E00\u521B\u5EFA\uFF0C\u7EDF\u4E00\u9500\u6BC1\uFF0C\u5B50\u7C7B\u4E0D\u518D\u5355\u72EC\u5904\u7406\uFF0C\u975E\u5E38\u6709\u5FC5\u8981\uFF01</p><p>\u2003 \u9664\u4E86\u53EF\u4EE5\u7EE7\u627F\u7236\u7C7B\u7684\u65B9\u6CD5\uFF0C\u9047\u5230\u7279\u6B8A\u7684\u56FE\u5C42\u65F6\uFF0C\u5B50\u7C7B\u4E5F\u53EF\u4EE5\u91CD\u5199\u7236\u7C7B\u7684\u65B9\u6CD5\u3002</p><h2 id="\u56FE\u5C42\u64CD\u4F5C\u4E2D\u7ECF\u5E38\u9047\u5230\u7684\u95EE\u9898" tabindex="-1">\u56FE\u5C42\u64CD\u4F5C\u4E2D\u7ECF\u5E38\u9047\u5230\u7684\u95EE\u9898 <a class="header-anchor" href="#\u56FE\u5C42\u64CD\u4F5C\u4E2D\u7ECF\u5E38\u9047\u5230\u7684\u95EE\u9898" aria-hidden="true">#</a></h2><ul><li>\u8FC7\u6EE4\u4E0E\u8868\u8FBE\u5F0F</li><li>\u5B66\u4F1A\u4F7F\u7528 Canvas \u4EE3\u66FF\u56FE\u7247</li><li>\u7ED3\u5408\u7B2C\u4E09\u65B9\u5E93\u8FD0\u7B97</li></ul><h3 id="\u8FC7\u6EE4" tabindex="-1">\u8FC7\u6EE4 <a class="header-anchor" href="#\u8FC7\u6EE4" aria-hidden="true">#</a></h3><p>\u4F8B\u5982\u5730\u56FE\u4E0A\u5F88\u591A\u7684\u70B9\uFF0C\u5F53\u6211\u4EEC\u70B9\u51FB\u5176\u4E2D\u4E00\u4E2A\uFF0C\u53EA\u9700\u8981\u663E\u793A\u5176\u4E2D\u4E00\u4E2A\u6240\u4EE3\u8868\u7684\u9762\uFF0C\u4E0D\u9700\u8981\u628A\u9762\u56FE\u5C42\u6570\u636E\u6E90\u91CC\u9762\u6240\u6709\u7684\u6570\u636E\u90FD\u5C55\u793A\uFF0C\u6211\u4EEC\u5C31\u9700\u8981\u7528\u5230\u8FC7\u6EE4\uFF0C\u5728\u6807\u51C6\u7684 geoJson \u683C\u5F0F\u4E2D\uFF0C\u5982\u679C\u6709\u591A\u6761\u6570\u636E\uFF0Cfeatures \u4E5F\u4F1A\u5305\u542B\u591A\u4E2A feature\uFF0C\u5176\u4E2D\u6BCF\u4E00\u4E2A feature \u90FD\u4F1A\u6709\u81EA\u8EAB\u7684 properties \u5C5E\u6027\uFF0C\u5305\u542B\u5F88\u591A\u5B57\u6BB5\uFF0C\u4F8B\u5982 name \u4E5F\u5C31\u76F8\u5F53\u4E8E\u552F\u4E00\u6807\u8BC6\uFF0C\u5982\u679C\u6211\u4EEC\u8981\u83B7\u53D6 name \u4E3A USA \u7684\u90A3\u4E2A\u70B9,\u5982\u4E0B\uFF1A</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">    map.setFilter(&#39;layerName&#39;, [&#39;==&#39;, &#39;name&#39;, &#39;USA&#39;]);</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>mapbox \u9ED8\u8BA4\u4F1A\u53BB\u4ECE properties \u5C5E\u6027\u91CC\u9762\u6839\u636E\u6307\u5B9A\u7684 key \u83B7\u5F97 value \u503C\uFF0C\u5B83\u6709\u4E00\u5957\u72EC\u7279\u7684\u8868\u8FBE\u5F0F\uFF0C\u4E0D\u4EC5\u53EF\u4EE5\u8FD0\u7528\u5728\u7A0B\u5F0F\u4EE3\u7801\u4E2D\uFF0C\u8FD8\u53EF\u4EE5\u8FD0\u7528\u5728\u5C5E\u6027\u914D\u7F6E\u4E2D\uFF0C\u89C1\u5982\u4E0B\u4E24\u6BB5\u4EE3\u7801\uFF1A</p><p>\u5229\u7528\u8868\u8FBE\u5F0F\u505A\u5339\u914D\uFF0C\u53EF\u4EE5\u6307\u5B9A\u4E00\u4E2A\u56FE\u5C42\u4E2D\u67D0\u4E9B\u5C5E\u6027\u4E0D\u540C\u7684\u70B9\u6DFB\u52A0\u4E0D\u540C\u989C\u8272\uFF1A</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">paint: {</span></span>
<span class="line"><span style="color:#A6ACCD;">            &#39;fill-color&#39;: [</span></span>
<span class="line"><span style="color:#A6ACCD;">                  &#39;match&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">                  [&#39;get&#39;, &#39;status&#39;, [&#39;get&#39;, &#39;dataInfo&#39;]],</span></span>
<span class="line"><span style="color:#A6ACCD;">                  &#39;5&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">                  &#39;#75B140&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">                  &#39;4&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">                  &#39;#33A6CC&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">                  &#39;3&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">                  &#39;#E4C411&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">                  &#39;2&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">                  &#39;#F97B2C&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">                  &#39;1&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">                  &#39;#EE5655&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">                  &#39;white&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">            ],</span></span>
<span class="line"><span style="color:#A6ACCD;">            &#39;fill-opacity&#39;: 0.4</span></span>
<span class="line"><span style="color:#A6ACCD;">          }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>\u5229\u7528\u8868\u8FBE\u5F0F\u505A\u62FC\u63A5\uFF0C\u53EF\u4EE5\u6307\u5B9A\u4E00\u4E2A\u56FE\u5C42\u4E2D\u67D0\u4E9B\u5C5E\u6027\u4E0D\u540C\u7684\u70B9\u6DFB\u52A0\u4E0D\u540C\u56FE\u7247\uFF1A</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">layout: {</span></span>
<span class="line"><span style="color:#A6ACCD;">            &#39;icon-image&#39;: [</span></span>
<span class="line"><span style="color:#A6ACCD;">              &#39;concat&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">              &#39;real_time_&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">              [&#39;get&#39;, &#39;status&#39;, [&#39;get&#39;, &#39;dataInfo&#39;]],  //\u6CE8\u610F\u5148\u540E\u987A\u5E8F</span></span>
<span class="line"><span style="color:#A6ACCD;">              &#39;_&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">              [&#39;get&#39;, &#39;name&#39;, [&#39;get&#39;, &#39;dataInfo&#39;]],</span></span>
<span class="line"><span style="color:#A6ACCD;">              &#39;:&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">              [&#39;get&#39;, &#39;num&#39;, [&#39;get&#39;, &#39;dataInfo&#39;]],</span></span>
<span class="line"><span style="color:#A6ACCD;">              &#39;\u4EBA&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">            ],</span></span>
<span class="line"><span style="color:#A6ACCD;">          },</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p><strong>\u7262\u8BB0 get \u5747\u662F\u4ECE geoJson \u91CC\u9762\u7684 properties \u5C5E\u6027\u91CC\u9762\u83B7\u53D6\uFF0C\u5982\u679C\u51FA\u73B0\u95EE\u9898\uFF0C\u4E00\u5B9A\u8981\u5148\u68C0\u67E5 geoJson \u7684\u7ED3\u6784\uFF0C\u5C42\u7EA7\u662F\u5426\u6B63\u786E\uFF01</strong></p><h3 id="\u5B66\u4F1A\u4F7F\u7528-canvas-\u4EE3\u66FF\u56FE\u7247" tabindex="-1">\u5B66\u4F1A\u4F7F\u7528 Canvas \u4EE3\u66FF\u56FE\u7247 <a class="header-anchor" href="#\u5B66\u4F1A\u4F7F\u7528-canvas-\u4EE3\u66FF\u56FE\u7247" aria-hidden="true">#</a></h3><p>\u5728\u67D0\u4E9B\u7279\u6B8A\u56FE\u5C42\u4E2D\uFF0C\u6211\u4EEC\u9700\u8981\u7528\u5230\u56FE\u7247\uFF0C\u4F46\u5F80\u5F80\u653E\u5230\u5730\u56FE\u4E2D\uFF0C\u968F\u7740\u5730\u56FE\u7684\u7F29\u653E\u65CB\u8F6C\uFF0C\u4F1A\u51FA\u73B0\u5404\u79CD\u73B0\u8C61\uFF0C\u4F8B\u5982\u538B\u76D6\u4E0D\u6B63\u5E38\uFF0C\u952F\u9F7F\uFF0C\u4E14\u81EA\u5B9A\u4E49\u7A0B\u5EA6\u4E0D\u591F\uFF0C\u8FD9\u65F6\u5019\u6211\u4EEC\u5C31\u8981\u8003\u8651\u4F7F\u7528 Canvas \u7ED8\u5236\u3002 \u6211\u603B\u7ED3\u4E86\u4E09\u79CD\u5B9E\u73B0\u65B9\u5F0F\uFF1A</p><ul><li>\u5730\u56FE\u7ED1\u5B9A styleimagemissing \u4E8B\u4EF6\u52A8\u6001\u52A0\u8F7D\uFF0C\u89C1\u5982\u4E0B\u4EE3\u7801\uFF1A</li></ul><p>\u6211\u4EEC\u4F9D\u65E7\u662F\u5728\u521B\u5EFA\u56FE\u5C42\u7684\u65F6\u5019\u901A\u8FC7\u7ED9\u5C5E\u6027\u7ED1\u5B9A\u8868\u8FBE\u5F0F\u3002</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">map.addLayer({</span></span>
<span class="line"><span style="color:#A6ACCD;">    &quot;id&quot;: &quot;points&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">    &quot;type&quot;: &quot;symbol&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">    &quot;source&quot;: {</span></span>
<span class="line"><span style="color:#A6ACCD;">        ...</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">},</span></span>
<span class="line"><span style="color:#A6ACCD;">&quot;layout&quot;: {</span></span>
<span class="line"><span style="color:#A6ACCD;">  &quot;icon-image&quot;: [&quot;concat&quot;, &quot;square-rgb-&quot;, [&quot;get&quot;, &quot;color&quot;]]</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">});</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>\u7136\u540E\u7ED1\u5B9A\u4E8B\u4EF6\u4E2D\u53EF\u4EE5\u83B7\u53D6\u5230\u6BCF\u4E00\u4E2A\u9700\u8981\u56FE\u7247\u7684\u5143\u7D20\u4F20\u5165\u7684\u53C2\u6570\uFF08\u989C\u8272\uFF09\uFF0C</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">map.on(&#39;styleimagemissing&#39;, function(e) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    var id = e.id;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">    var prefix = &#39;square-rgb-&#39;;</span></span>
<span class="line"><span style="color:#A6ACCD;">    if (id.indexOf(prefix) !== 0) return;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">    var rgb = id.replace(prefix, &#39;&#39;).split(&#39;,&#39;).map(Number);</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">     ......//\u7ED8\u5236Canvas\u4EE3\u7801</span></span>
<span class="line"><span style="color:#A6ACCD;">    const dataImg = context.getImageData(0, 0, 200, 200).data</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">    map.addImage(id, {width: width, height: width, data: dataImg});</span></span>
<span class="line"><span style="color:#A6ACCD;">});</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>\u6700\u540E\u518D\u7ED9\u6BCF\u4E00\u4E2A\u5143\u7D20\u7ED1\u5B9A,\u5373\u53EF\u5B9E\u73B0\uFF0C\u8FD9\u79CD\u65B9\u6CD5\u8FD8\u53EF\u4EE5\u4F5C\u7528\u4E8E\u591A\u4E2A\u56FE\u5C42\uFF0C\u53EA\u9700\u8981\u52A0\u4E0A\u7279\u6B8A\u7684\u6807\u8BB0\u5982\u524D\u7F00\uFF0C\u5728 styleimagemissing \u4E8B\u4EF6\u4E2D\u5206\u522B\u5904\u7406\uFF0C\u8FD9\u79CD\u65B9\u6CD5\u7684\u597D\u5904\u53EF\u4EE5\u52A8\u6001\u7684\u6839\u636E\u53C2\u6570\u7ED8\u5236\u4E0D\u540C\u7684\u5185\u5BB9\u3002</p><ul><li>\u9759\u6001\u7ED1\u5B9A</li></ul><p>\u5F53\u9700\u8981\u7ED8\u5236\u7684\u56FE\u7247\u90FD\u4E00\u6837\u65F6\uFF0C\u5C31\u4E0D\u9700\u8981\u7528\u4E0A\u9762\u7684\u52A8\u6001\u7ED1\u5B9A\uFF0C\u53EA\u9700\u8981\u5728\u914D\u7F6E\u4E2D\u5B9A\u4E49\u4E00\u4E2A\u6807\u8BC6\uFF0C</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">&quot;layout&quot;: {</span></span>
<span class="line"><span style="color:#A6ACCD;">  &quot;icon-image&quot;: &quot;gradient&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>\u7136\u540E\u7ED1\u5B9A\u5373\u53EF\uFF0C</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;"> map.addImage(&#39;gradient&#39;, {width: width, height: width, data: dataImg});</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><ul><li>\u52A8\u753B</li></ul><p>\u4F9D\u65E7\u5148\u7ED1\u5B9A\u4E00\u4E2A\u56FE\u7247\u552F\u4E00\u6807\u8BC6</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">map.addImage(&#39;pulsing-dot&#39;, pulsingDot, { pixelRatio: 2 });</span></span>
<span class="line"><span style="color:#A6ACCD;">.....</span></span>
<span class="line"><span style="color:#A6ACCD;">&quot;layout&quot;: {</span></span>
<span class="line"><span style="color:#A6ACCD;">&quot;icon-image&quot;: &quot;pulsing-dot&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>\u8FD9\u4E2A pulsingDot \u5BF9\u8C61\u5B9E\u9645\u4E0A\u662F\u4E00\u4E2A mapbox \u63D0\u4F9B\u7684 styleImageInterface\uFF0C\u4E13\u95E8\u7528\u4E8E\u7528\u4E8E\u52A8\u6001\u751F\u6210\u6837\u5F0F\u56FE\u50CF\u7684\u63A5\u53E3\uFF0C\u8C03\u7528 render \u65B9\u6CD5\u5C31\u53EF\u4EE5\u8C03\u7528\u6BCF\u4E00\u5E27\uFF0C\u7528\u4E8E\u66F4\u65B0\u56FE\u50CF\uFF0C\u8FBE\u5230\u52A8\u753B\u7684\u6548\u679C\u3002\u5927\u81F4\u4EE3\u7801\u5982\u4E0B\uFF1A</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">var pulsingDot = {</span></span>
<span class="line"><span style="color:#A6ACCD;">    width: 64,</span></span>
<span class="line"><span style="color:#A6ACCD;">    height: 64,</span></span>
<span class="line"><span style="color:#A6ACCD;">    data: new Uint8Array(64 * 64 * 4),</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">    onAdd: function(map) {</span></span>
<span class="line"><span style="color:#A6ACCD;">        this.map = map;</span></span>
<span class="line"><span style="color:#A6ACCD;">    },</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">    render: function() {</span></span>
<span class="line"><span style="color:#A6ACCD;">        // keep repainting while the icon is on the map</span></span>
<span class="line"><span style="color:#A6ACCD;">        this.map.triggerRepaint();</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">        // alternate between black and white based on the time</span></span>
<span class="line"><span style="color:#A6ACCD;">        var value = Math.round(Date.now() / 1000) % 2 === 0  ? 255 : 0;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">        // check if image needs to be changed</span></span>
<span class="line"><span style="color:#A6ACCD;">        if (value !== this.previousValue) {</span></span>
<span class="line"><span style="color:#A6ACCD;">            this.previousValue = value;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">            var bytesPerPixel = 4;</span></span>
<span class="line"><span style="color:#A6ACCD;">            for (var x = 0; x &lt; this.width; x++) {</span></span>
<span class="line"><span style="color:#A6ACCD;">                for (var y = 0; y &lt; this.height; y++) {</span></span>
<span class="line"><span style="color:#A6ACCD;">                    var offset = (y * this.width + x) * bytesPerPixel;</span></span>
<span class="line"><span style="color:#A6ACCD;">                    this.data[offset + 0] = value;</span></span>
<span class="line"><span style="color:#A6ACCD;">                    this.data[offset + 1] = value;</span></span>
<span class="line"><span style="color:#A6ACCD;">                    this.data[offset + 2] = value;</span></span>
<span class="line"><span style="color:#A6ACCD;">                    this.data[offset + 3] = 255;</span></span>
<span class="line"><span style="color:#A6ACCD;">                }</span></span>
<span class="line"><span style="color:#A6ACCD;">            }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">            // return true to indicate that the image changed</span></span>
<span class="line"><span style="color:#A6ACCD;">            return true;</span></span>
<span class="line"><span style="color:#A6ACCD;">        }</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;"> }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h2 id="\u7ED3\u5408\u7B2C\u4E09\u65B9\u8BA1\u7B97\u5E93\u8BA1\u7B97" tabindex="-1">\u7ED3\u5408\u7B2C\u4E09\u65B9\u8BA1\u7B97\u5E93\u8BA1\u7B97 <a class="header-anchor" href="#\u7ED3\u5408\u7B2C\u4E09\u65B9\u8BA1\u7B97\u5E93\u8BA1\u7B97" aria-hidden="true">#</a></h2><p>\u5E38\u7528\u7684\u6709 jsts\uFF0Cturf\u3002turf \u662F mapbox \u63A8\u8350\u4F7F\u7528\u7684 <a href="http://turfjs.org/" target="_blank" rel="noreferrer">turf.org</a>. \u5E38\u7528\u7684\u53EF\u4EE5\u8BA1\u7B97\u51FA\u9762\u7684\u9762\u79EF\uFF0C\u5355\u9762\u548C\u591A\u4E2A\u9762\u7684\u4E2D\u5FC3\u70B9\uFF0C\u5355\u9762\u548C\u591A\u4E2A\u9762\u7684\u6700\u5C0F\u5916\u5305\u77E9\u5F62\uFF0C\u9762\u878D\u5408\u7B49\u64CD\u4F5C\u3002</p><h2 id="\u81EA\u5B9A\u4E49\u56FE\u5C42" tabindex="-1">\u81EA\u5B9A\u4E49\u56FE\u5C42 <a class="header-anchor" href="#\u81EA\u5B9A\u4E49\u56FE\u5C42" aria-hidden="true">#</a></h2><p>Mapbox \u8FD8\u652F\u6301\u81EA\u5B9A\u4E49\u56FE\u5C42\uFF0C\u6700\u5E38\u89C1\u7684\u5C31\u662F\u7ED3\u5408 three.js \u53EF\u4EE5\u5728\u5730\u56FE\u4E2D\u5C55\u793A\u4E09\u7EF4\u7684\u8981\u7D20\uFF0C\u5B9A\u4E49\u56FE\u5C42\u7684\u65F6\u5019\u6307\u5B9A type \u4E3A custom \u5E76\u6307\u5B9A\u6E32\u67D3\u7684\u6A21\u5F0F\u4E3A 3D\uFF0C</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">var customLayer = {</span></span>
<span class="line"><span style="color:#A6ACCD;">    id: &#39;3d-model&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">    type: &#39;custom&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">    renderingMode: &#39;3d&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>\u81F3\u4E8E\u66F4\u6DF1\u5C42\u6B21\u7684\u7814\u7A76\u5C31\u9700\u8981\u638C\u63E1 three.js \u7684\u77E5\u8BC6\u4E86\u3002</p><h2 id="\u6837\u5F0F" tabindex="-1">\u6837\u5F0F <a class="header-anchor" href="#\u6837\u5F0F" aria-hidden="true">#</a></h2><p>\u521A\u5F00\u59CB\u7ED3\u675F Mapbox \u7684\u65F6\u5019\u53D1\u73B0 style \u90E8\u5206\uFF0C\u5B98\u65B9\u90FD\u5355\u72EC\u62FF\u51FA\u6765\u505A\u4E86\u8BE6\u7EC6\u7684\u8BF4\u660E\u3002\u5927\u91CF\u7684\u5C5E\u6027\u9700\u8981\u5728\u4F7F\u7528\u4E2D\u53BB\u638C\u63E1\u3002</p>`,60),o=[e];function c(t,i,r,C,A,y){return a(),n("div",null,o)}const u=s(p,[["render",c]]);export{d as __pageData,u as default};
