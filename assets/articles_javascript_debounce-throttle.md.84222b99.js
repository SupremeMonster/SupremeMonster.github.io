import{_ as s,c as n,o as a,a as e}from"./app.437f86da.js";const y=JSON.parse('{"title":"\u9632\u6296\u548C\u8282\u6D41","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u9632\u6296","slug":"\u9632\u6296","link":"#\u9632\u6296","children":[]},{"level":2,"title":"\u8282\u6D41","slug":"\u8282\u6D41","link":"#\u8282\u6D41","children":[]}],"relativePath":"articles/javascript/debounce-throttle.md"}'),l={name:"articles/javascript/debounce-throttle.md"},p=e(`<h1 id="\u9632\u6296\u548C\u8282\u6D41" tabindex="-1">\u9632\u6296\u548C\u8282\u6D41 <a class="header-anchor" href="#\u9632\u6296\u548C\u8282\u6D41" aria-hidden="true">#</a></h1><h2 id="\u9632\u6296" tabindex="-1">\u9632\u6296 <a class="header-anchor" href="#\u9632\u6296" aria-hidden="true">#</a></h2><blockquote><p>\u5728\u4E8B\u4EF6\u88AB\u89E6\u53D1 n \u79D2\u540E\u5728\u6267\u884C\u56DE\u8C03,\u5982\u679C\u5728 n \u79D2\u5185\u53C8\u88AB\u89E6\u53D1,\u5219\u91CD\u65B0\u8BA1\u65F6.</p></blockquote><p>\u5B9E\u73B0\u5982\u4E0B:</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">  let debounce = function(fn,delay){</span></span>
<span class="line"><span style="color:#A6ACCD;">     let timer = null;</span></span>
<span class="line"><span style="color:#A6ACCD;">     return ()=&gt;{</span></span>
<span class="line"><span style="color:#A6ACCD;">       if(timer){</span></span>
<span class="line"><span style="color:#A6ACCD;">         clearTimeout(timer)</span></span>
<span class="line"><span style="color:#A6ACCD;">       }</span></span>
<span class="line"><span style="color:#A6ACCD;">       timer = setTimeout(()=&gt;{</span></span>
<span class="line"><span style="color:#A6ACCD;">        fn.apply(this,arguments)</span></span>
<span class="line"><span style="color:#A6ACCD;">       },delay)</span></span>
<span class="line"><span style="color:#A6ACCD;">     }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>\u4E3B\u8981\u4F7F\u7528\u573A\u666F</p><ul><li>\u641C\u7D22\u6846\u8F93\u5165\uFF0C\u53EA\u9700\u8981\u7528\u6237\u6700\u540E\u4E00\u6B21\u8F93\u5165\u5B8C\uFF0C\u518D\u53D1\u9001\u8BF7\u6C42</li><li>\u7A97\u53E3\u5927\u5C0F resize\uFF0C\u53EA\u9700\u7A97\u53E3\u8C03\u6574\u5B8C\u6210\u540E\u518D\u8BA1\u7B97\u7A97\u53E3\u5927\u5C0F\uFF0C\u9632\u6B62\u91CD\u590D\u6E32\u67D3\u3002</li></ul><h2 id="\u8282\u6D41" tabindex="-1">\u8282\u6D41 <a class="header-anchor" href="#\u8282\u6D41" aria-hidden="true">#</a></h2><blockquote><p>\u5728 n \u79D2\u4E4B\u5185\u53EA\u6267\u884C\u4E00\u6B21.</p></blockquote><p>\u5B9E\u73B0\u5982\u4E0B:</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">let throttle = function (fn,delay){</span></span>
<span class="line"><span style="color:#A6ACCD;">   let previous = 0;</span></span>
<span class="line"><span style="color:#A6ACCD;">   let timer = null;</span></span>
<span class="line"><span style="color:#A6ACCD;">   return ()=&gt;{</span></span>
<span class="line"><span style="color:#A6ACCD;">     if(new Date().getTime()-previous&gt;delay){</span></span>
<span class="line"><span style="color:#A6ACCD;">       fn.apply(this,arguments)</span></span>
<span class="line"><span style="color:#A6ACCD;">       previous=  new Date().getTime()</span></span>
<span class="line"><span style="color:#A6ACCD;">     }</span></span>
<span class="line"><span style="color:#A6ACCD;">   }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>\u4E3B\u8981\u4F7F\u7528\u573A\u666F\uFF1A</p><ul><li>\u9AD8\u9891\u7387\u70B9\u51FB\u63D0\u4EA4\u8868\u5355</li></ul>`,13),t=[p];function o(c,r,i,A,C,d){return a(),n("div",null,t)}const h=s(l,[["render",o]]);export{y as __pageData,h as default};
