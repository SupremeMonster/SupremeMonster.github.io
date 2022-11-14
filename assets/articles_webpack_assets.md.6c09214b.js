import{_ as s,c as a,o as n,a as e}from"./app.9113ee1d.js";const y=JSON.parse('{"title":"Webpack5 Assets","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u6982\u51B5","slug":"\u6982\u51B5","link":"#\u6982\u51B5","children":[]},{"level":2,"title":"asset/resource","slug":"asset-resource","link":"#asset-resource","children":[]},{"level":2,"title":"asset/inline","slug":"asset-inline","link":"#asset-inline","children":[]},{"level":2,"title":"asset","slug":"asset","link":"#asset","children":[]}],"relativePath":"articles/webpack/assets.md"}'),l={name:"articles/webpack/assets.md"},p=e(`<h1 id="webpack5-assets" tabindex="-1">Webpack5 Assets <a class="header-anchor" href="#webpack5-assets" aria-hidden="true">#</a></h1><h2 id="\u6982\u51B5" tabindex="-1">\u6982\u51B5 <a class="header-anchor" href="#\u6982\u51B5" aria-hidden="true">#</a></h2><p>Webpack5 \u5B9E\u73B0\u4E86 4 \u79CD\u65B0\u7684\u6A21\u5757\u7C7B\u578B\uFF0C\u901A\u8FC7Rule\u7684type\u5C5E\u6027\u8BBE\u7F6E\uFF1A</p><ul><li>asset/resource \u8F93\u51FA\u4E00\u4E2A\u5355\u72EC\u7684\u6587\u4EF6\u5E76\u5BFC\u51FA URL\u3002\u4E4B\u524D\u901A\u8FC7\u4F7F\u7528 file-loader \u5B9E\u73B0</li><li>asset/inline \u5BFC\u51FA\u4E00\u4E2A\u8D44\u6E90\u7684 data URI\u3002\u4E4B\u524D\u901A\u8FC7\u4F7F\u7528 url-loader \u5B9E\u73B0\u3002</li><li>asset/source \u5BFC\u51FA\u8D44\u6E90\u7684\u6E90\u4EE3\u7801\u3002\u4E4B\u524D\u901A\u8FC7\u4F7F\u7528 raw-loader \u5B9E\u73B0\u3002</li><li>asset \u5728\u5BFC\u51FA\u4E00\u4E2A dataURI \u548C\u53D1\u9001\u4E00\u4E2A\u5355\u72EC\u7684\u6587\u4EF6\u4E4B\u95F4\u81EA\u52A8\u9009\u62E9\u3002\u4E4B\u524D\u901A\u8FC7\u4F7F\u7528 url-loader\uFF0C\u5E76\u4E14\u914D\u7F6E\u8D44\u6E90\u4F53\u79EF\u9650\u5236\u5B9E\u73B0\u3002</li></ul><h2 id="asset-resource" tabindex="-1">asset/resource <a class="header-anchor" href="#asset-resource" aria-hidden="true">#</a></h2><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">    module.exports = {</span></span>
<span class="line"><span style="color:#A6ACCD;">        // ...</span></span>
<span class="line"><span style="color:#A6ACCD;">        module:{</span></span>
<span class="line"><span style="color:#A6ACCD;">            rules:[</span></span>
<span class="line"><span style="color:#A6ACCD;">                {</span></span>
<span class="line"><span style="color:#A6ACCD;">                    test:/\\.png$/,</span></span>
<span class="line"><span style="color:#A6ACCD;">                    type:&#39;asset/resource&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">                     generator: {</span></span>
<span class="line"><span style="color:#A6ACCD;">                      filename: &quot;images/[contenthash][ext][query]&quot;,  //\u6307\u5B9A\u751F\u6210\u6587\u4EF6\u540D</span></span>
<span class="line"><span style="color:#A6ACCD;">                    },</span></span>
<span class="line"><span style="color:#A6ACCD;">                }</span></span>
<span class="line"><span style="color:#A6ACCD;">            ]</span></span>
<span class="line"><span style="color:#A6ACCD;">        }</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>\u4F1A\u5728dist\u76EE\u5F55\u4E0B\u751F\u6210\u4E00\u4E2A\u5E26hash\u7684\u6587\u4EF6\uFF0C</p><h2 id="asset-inline" tabindex="-1">asset/inline <a class="header-anchor" href="#asset-inline" aria-hidden="true">#</a></h2><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">module.exports = {</span></span>
<span class="line"><span style="color:#A6ACCD;">        // ...</span></span>
<span class="line"><span style="color:#A6ACCD;">        module:{</span></span>
<span class="line"><span style="color:#A6ACCD;">            rules:[</span></span>
<span class="line"><span style="color:#A6ACCD;">                {</span></span>
<span class="line"><span style="color:#A6ACCD;">                    test:/\\.png$/,</span></span>
<span class="line"><span style="color:#A6ACCD;">                    type:&#39;asset/inline&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">                }</span></span>
<span class="line"><span style="color:#A6ACCD;">            ]</span></span>
<span class="line"><span style="color:#A6ACCD;">        }</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>\u5982\u679C\u8BBE\u7F6E\u6210asset/inline\uFF0C\u5219\u4F1A\u628A\u56FE\u7247\u5BF9\u5E94\u7684dataURI\uFF08base64\u7F16\u7801\uFF09\u5199\u5165\u5230\u6253\u5305\u540E\u7684js\u6587\u4EF6 \u4F46\u662F\u53EF\u80FD\u4F53\u79EF\u8FC7\u5927\u3002</p><h2 id="asset" tabindex="-1">asset <a class="header-anchor" href="#asset" aria-hidden="true">#</a></h2><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;"> module:{</span></span>
<span class="line"><span style="color:#A6ACCD;">        rules:[</span></span>
<span class="line"><span style="color:#A6ACCD;">            {</span></span>
<span class="line"><span style="color:#A6ACCD;">                test:/\\.png$/,</span></span>
<span class="line"><span style="color:#A6ACCD;">                type:&#39;asset&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">                parser:{</span></span>
<span class="line"><span style="color:#A6ACCD;">                    dataUrlCondition:{</span></span>
<span class="line"><span style="color:#A6ACCD;">                        maxSize:1024*20, // 20KB</span></span>
<span class="line"><span style="color:#A6ACCD;">                    }</span></span>
<span class="line"><span style="color:#A6ACCD;">                \`}\`</span></span>
<span class="line"><span style="color:#A6ACCD;">            }</span></span>
<span class="line"><span style="color:#A6ACCD;">        ]</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>\u5982\u679C\u8BBE\u7F6E\u6210asset\uFF0C\u5219\u4F1A\u6839\u636E\u56FE\u7247\u7684\u5927\u5C0F\u5728asset/inline \u548C asset/resource \u4E2D\u81EA\u52A8\u9009\u62E9 \u5927\u4E8E\u6307\u5B9A\u503C\u81EA\u52A8\u8F6C\u6210\u6587\u4EF6\uFF0C\u5C0F\u4E8E\u6307\u5B9A\u503C\u751F\u6210dataURI</p>`,13),t=[p];function c(o,r,i,A,C,d){return n(),a("div",null,t)}const h=s(l,[["render",c]]);export{y as __pageData,h as default};
