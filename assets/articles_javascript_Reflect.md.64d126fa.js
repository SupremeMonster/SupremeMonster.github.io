import{_ as e,c as a,o as s,a as n}from"./app.437f86da.js";const C=JSON.parse('{"title":"Reflect","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u53CD\u5C04","slug":"\u53CD\u5C04","link":"#\u53CD\u5C04","children":[]},{"level":2,"title":"Reflect \u4F18\u70B9","slug":"reflect-\u4F18\u70B9","link":"#reflect-\u4F18\u70B9","children":[{"level":3,"title":"\u7EDF\u4E00\u547D\u540D\u7A7A\u95F4","slug":"\u7EDF\u4E00\u547D\u540D\u7A7A\u95F4","link":"#\u7EDF\u4E00\u547D\u540D\u7A7A\u95F4","children":[]},{"level":3,"title":"\u907F\u514D\u4EA7\u751F\u591A\u4F59 try catch","slug":"\u907F\u514D\u4EA7\u751F\u591A\u4F59-try-catch","link":"#\u907F\u514D\u4EA7\u751F\u591A\u4F59-try-catch","children":[]},{"level":3,"title":"\u51FD\u6570\u5F0F\u65B9\u6CD5\u4EE3\u66FF Object \u547D\u4EE4\u5F0F\u64CD\u4F5C","slug":"\u51FD\u6570\u5F0F\u65B9\u6CD5\u4EE3\u66FF-object-\u547D\u4EE4\u5F0F\u64CD\u4F5C","link":"#\u51FD\u6570\u5F0F\u65B9\u6CD5\u4EE3\u66FF-object-\u547D\u4EE4\u5F0F\u64CD\u4F5C","children":[]},{"level":3,"title":"\u4FDD\u6301\u548C Proxy \u540C\u6B65","slug":"\u4FDD\u6301\u548C-proxy-\u540C\u6B65","link":"#\u4FDD\u6301\u548C-proxy-\u540C\u6B65","children":[]},{"level":3,"title":"\u7528\u6CD5\u7B80\u5355","slug":"\u7528\u6CD5\u7B80\u5355","link":"#\u7528\u6CD5\u7B80\u5355","children":[]}]}],"relativePath":"articles/javascript/Reflect.md"}'),l={name:"articles/javascript/Reflect.md"},t=n(`<h1 id="reflect" tabindex="-1">Reflect <a class="header-anchor" href="#reflect" aria-hidden="true">#</a></h1><h2 id="\u53CD\u5C04" tabindex="-1">\u53CD\u5C04 <a class="header-anchor" href="#\u53CD\u5C04" aria-hidden="true">#</a></h2><p>\u53CD\u5C04\u662F\u8BA1\u7B97\u673A\u7F16\u7A0B\u4E2D\u975E\u5E38\u91CD\u8981\u7684\u6280\u5DE7\uFF0C\u5728 java \u4E2D\u5E94\u7528\u5E7F\u6CDB\uFF0C\u5C24\u5176\u662F Spring \u6846\u67B6\u4E2D\u5927\u91CF\u91C7\u7528\u4E86\u53CD\u5C04\u673A\u5236\u3002 \u5728 ES6 \u4E4B\u524D\uFF0Cjs \u5176\u5B9E\u4E5F\u6709\u53CD\u5C04\u7684\u7279\u6027\uFF0C\u5982 Object.keys()\u3001Object.getOwnPropertyDescriptor()\u7B49\u83B7\u53D6\u5BF9\u8C61\u5185\u90E8\u5C5E\u6027\u7684\u65B9\u6CD5\u672C\u8D28\u4E0A\u90FD\u662F\u91C7\u7528\u4E86\u53CD\u5C04\u3002</p><h2 id="reflect-\u4F18\u70B9" tabindex="-1">Reflect \u4F18\u70B9 <a class="header-anchor" href="#reflect-\u4F18\u70B9" aria-hidden="true">#</a></h2><ul><li><h3 id="\u7EDF\u4E00\u547D\u540D\u7A7A\u95F4" tabindex="-1">\u7EDF\u4E00\u547D\u540D\u7A7A\u95F4 <a class="header-anchor" href="#\u7EDF\u4E00\u547D\u540D\u7A7A\u95F4" aria-hidden="true">#</a></h3><p>\u5C06 Object \u5BF9\u8C61\u4E0A\u4E00\u4E9B\u5C5E\u4E8E\u8BED\u8A00\u5185\u90E8\u7684\u65B9\u6CD5\uFF0C\u79FB\u690D\u5230 Reflect \u5BF9\u8C61\u4E0A\uFF0C\u56E0\u6B64 Reflect \u5BF9\u8C61\u6709\u5F88\u591A\u65B9\u6CD5\u548C Object \u5BF9\u8C61\u5F88\u591A\u65B9\u6CD5\u91CD\u590D\uFF1B\u4F46\u662F\u672A\u6765\uFF0C\u5F88\u591A\u8BED\u8A00\u5185\u90E8\u7684\u65B9\u6CD5\u53EF\u80FD\u53EA\u4F1A\u5B58\u5728\u5728 Reflect \u5BF9\u8C61\u4E0A\u3002\u7136\u800C Reflect \u7684\u539F\u578B\u4F9D\u65E7\u662F Object\uFF1A</p></li></ul><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">console.log(Reflect.__proto__ === Object.prototype); // true</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">console.log({}.__proto__ === Reflect.__proto__); // true</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><ul><li><h3 id="\u907F\u514D\u4EA7\u751F\u591A\u4F59-try-catch" tabindex="-1">\u907F\u514D\u4EA7\u751F\u591A\u4F59 try catch <a class="header-anchor" href="#\u907F\u514D\u4EA7\u751F\u591A\u4F59-try-catch" aria-hidden="true">#</a></h3><p>Object.defineProperty(obj,name,desc)\u5728\u65E0\u6CD5\u5B9A\u4E49\u5C5E\u6027\u65F6\uFF0C\u4F1A\u629B\u51FA\u9519\u8BEF\uFF0C\u56E0\u6B64\u9700\u8981 try catch \u5305\u56F4\uFF1A</p></li></ul><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">try {</span></span>
<span class="line"><span style="color:#A6ACCD;">    Object.defineProperty(target, property,attributes);</span></span>
<span class="line"><span style="color:#A6ACCD;">        // success</span></span>
<span class="line"><span style="color:#A6ACCD;">} catch (e) {</span></span>
<span class="line"><span style="color:#A6ACCD;">        // failure</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>\u800C Reflect.defineProperty \u4F1A\u8FD4\u56DE false</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">if (Reflect.defineProperty(target, property, attributes)) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    // success</span></span>
<span class="line"><span style="color:#A6ACCD;">} else {</span></span>
<span class="line"><span style="color:#A6ACCD;">    // failure</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>\u4E5F\u5C31\u662F\u6BD4\u5982\u6211\u4EEC\u5728\u8BBE\u7F6E\u5C5E\u6027\u65F6\uFF0C\u540E\u8005\u53EF\u4EE5\u611F\u77E5\u5230\u8BBE\u7F6E\u662F\u5426\u751F\u6548\u3002</p><ul><li><h3 id="\u51FD\u6570\u5F0F\u65B9\u6CD5\u4EE3\u66FF-object-\u547D\u4EE4\u5F0F\u64CD\u4F5C" tabindex="-1">\u51FD\u6570\u5F0F\u65B9\u6CD5\u4EE3\u66FF Object \u547D\u4EE4\u5F0F\u64CD\u4F5C <a class="header-anchor" href="#\u51FD\u6570\u5F0F\u65B9\u6CD5\u4EE3\u66FF-object-\u547D\u4EE4\u5F0F\u64CD\u4F5C" aria-hidden="true">#</a></h3></li></ul><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;"> key in obj;//bad</span></span>
<span class="line"><span style="color:#A6ACCD;"> Reflect.has(obj,key);//good</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"> delete obj[key];//bad</span></span>
<span class="line"><span style="color:#A6ACCD;"> Reflect.deleteProperty(obj,name) //good</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><ul><li><h3 id="\u4FDD\u6301\u548C-proxy-\u540C\u6B65" tabindex="-1">\u4FDD\u6301\u548C Proxy \u540C\u6B65 <a class="header-anchor" href="#\u4FDD\u6301\u548C-proxy-\u540C\u6B65" aria-hidden="true">#</a></h3> Reflect \u5BF9\u8C61\u4E0A\u7684\u51FD\u6570\u548C Proxy \u5BF9\u8C61\u4E0A\u7684\u51FD\u6570\uFF0C\u751A\u81F3\u53C2\u6570\u4E00\u81F4\u3002</li><li><h3 id="\u7528\u6CD5\u7B80\u5355" tabindex="-1">\u7528\u6CD5\u7B80\u5355 <a class="header-anchor" href="#\u7528\u6CD5\u7B80\u5355" aria-hidden="true">#</a></h3> Reflect \u7684\u6240\u6709\u65B9\u6CD5\u90FD\u662F\u9759\u6001\u8C03\u7528\uFF0C\u4E0D\u80FD\u6784\u9020\u3002</li></ul>`,14),c=[t];function p(r,o,i,d,h,y){return s(),a("div",null,c)}const f=e(l,[["render",p]]);export{C as __pageData,f as default};
