import{_ as s,c as a,o as n,a as e}from"./app.437f86da.js";const g=JSON.parse('{"title":"JSON.stringify() \u65B9\u6CD5","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u57FA\u7840\u529F\u80FD","slug":"\u57FA\u7840\u529F\u80FD","link":"#\u57FA\u7840\u529F\u80FD","children":[]},{"level":2,"title":"\u8FDB\u9636","slug":"\u8FDB\u9636","link":"#\u8FDB\u9636","children":[{"level":3,"title":"\u7B2C\u4E8C\u4E2A\u53C2\u6570\u662F\u51FD\u6570","slug":"\u7B2C\u4E8C\u4E2A\u53C2\u6570\u662F\u51FD\u6570","link":"#\u7B2C\u4E8C\u4E2A\u53C2\u6570\u662F\u51FD\u6570","children":[]},{"level":3,"title":"\u7B2C\u4E09\u4E2A\u53C2\u6570\u662F\u6570\u5B57","slug":"\u7B2C\u4E09\u4E2A\u53C2\u6570\u662F\u6570\u5B57","link":"#\u7B2C\u4E09\u4E2A\u53C2\u6570\u662F\u6570\u5B57","children":[]}]}],"relativePath":"articles/javascript/stringify.md"}'),l={name:"articles/javascript/stringify.md"},t=e(`<h1 id="json-stringify-\u65B9\u6CD5" tabindex="-1">JSON.stringify() \u65B9\u6CD5 <a class="header-anchor" href="#json-stringify-\u65B9\u6CD5" aria-hidden="true">#</a></h1><h2 id="\u57FA\u7840\u529F\u80FD" tabindex="-1">\u57FA\u7840\u529F\u80FD <a class="header-anchor" href="#\u57FA\u7840\u529F\u80FD" aria-hidden="true">#</a></h2><ul><li>\u5BF9\u8C61\u8F6C\u5B57\u7B26\u4E32</li></ul><h2 id="\u8FDB\u9636" tabindex="-1">\u8FDB\u9636 <a class="header-anchor" href="#\u8FDB\u9636" aria-hidden="true">#</a></h2><h3 id="\u7B2C\u4E8C\u4E2A\u53C2\u6570\u662F\u51FD\u6570" tabindex="-1">\u7B2C\u4E8C\u4E2A\u53C2\u6570\u662F\u51FD\u6570 <a class="header-anchor" href="#\u7B2C\u4E8C\u4E2A\u53C2\u6570\u662F\u51FD\u6570" aria-hidden="true">#</a></h3><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">   const user = {</span></span>
<span class="line"><span style="color:#A6ACCD;">     &quot;name&quot; : &quot;dingyi&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">     &quot;age&quot; : 27</span></span>
<span class="line"><span style="color:#A6ACCD;">   }</span></span>
<span class="line"><span style="color:#A6ACCD;">   </span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>\u6253\u5370JSON.stringify(user)\uFF0C\u7ED3\u679C\u5982\u4E0B\uFF1A</p><blockquote><p>&#39;{&quot;name&quot;:&quot;dingyi&quot;,&quot;age&quot;:27}&#39;</p></blockquote><p>\u6253\u5370JSON.stringify(user,(key,value)=&gt;typeof value===&#39;string&#39;?undefined:value),\u7ED3\u679C\u5982\u4E0B\uFF1A</p><blockquote><p>&#39;{&quot;age&quot;:27}&#39;</p></blockquote><p>\u663E\u7136\uFF0C\u7B2C\u4E8C\u4E2A\u53C2\u6570\u4E5F\u5C31\u662F\u5904\u7406\u51FD\u6570\uFF0C\u4E24\u4E2A\u53C2\u6570\u5206\u522B\u4E3Akey value</p><h3 id="\u7B2C\u4E09\u4E2A\u53C2\u6570\u662F\u6570\u5B57" tabindex="-1">\u7B2C\u4E09\u4E2A\u53C2\u6570\u662F\u6570\u5B57 <a class="header-anchor" href="#\u7B2C\u4E09\u4E2A\u53C2\u6570\u662F\u6570\u5B57" aria-hidden="true">#</a></h3><p>\u8FD9\u4E2A\u53C2\u6570\u5728\u6211\u505Ajson2type\u9879\u76EE\u4E2D\u7528\u5230\uFF0C\u7B2C\u4E00\u6B21\u53D1\u73B0\uFF0C\u4E3B\u8981\u4F5C\u7528\u662F\u63A7\u5236\u95F4\u8DDD\uFF0C\u5E2E\u52A9\u6211\u4EEC\u751F\u6210\u6BB5\u843D\u3002</p><p>\u4F8B\u5982</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">JSON.stringify(user, null,&#39;**&#39;);</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>\u7ED3\u679C\u5982\u4E0B\uFF1A</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    **&quot;name&quot;: &quot;dingyi&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">    **&quot;age&quot;: 27,</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">  //*\u8868\u793A\u7A7A\u683C\u5B57\u7B26</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div>`,17),p=[t];function o(i,c,r,u,d,h){return n(),a("div",null,p)}const A=s(l,[["render",o]]);export{g as __pageData,A as default};