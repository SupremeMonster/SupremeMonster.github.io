import{_ as s,c as n,o as e,a}from"./app.437f86da.js";const u=JSON.parse('{"title":"Zone Events BlackList","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u7528\u9014","slug":"\u7528\u9014","link":"#\u7528\u9014","children":[]}],"relativePath":"articles/angular/zoneEventsBlacklist.md"}'),l={name:"articles/angular/zoneEventsBlacklist.md"},o=a(`<h1 id="zone-events-blacklist" tabindex="-1">Zone Events BlackList <a class="header-anchor" href="#zone-events-blacklist" aria-hidden="true">#</a></h1><h2 id="\u7528\u9014" tabindex="-1">\u7528\u9014 <a class="header-anchor" href="#\u7528\u9014" aria-hidden="true">#</a></h2><p>\u5F53\u6211\u4EEC\u9700\u8981\u5168\u5C40\u53D6\u6D88\u5BF9\u67D0\u4E2A\u4E8B\u4EF6\u91C7\u53D6zone\u5904\u7406\u7684\u884C\u4E3A\uFF0C\u76EE\u524D\u53EA\u5728\u5730\u56FE\u9879\u76EE\u4E2D\u4F7F\u7528\u8FC7\uFF0C\u56E0\u4E3A\u5730\u56FE\u4E0A\u7684\u9F20\u6807\u4EA4\u4E92\u975E\u5E38\u9891\u7E41\uFF0C\u6027\u80FD\u6BD4\u8F83\u53D7\u5F71\u54CD\u3002</p><p>\u5728polyfill.js\u4E2D\u6DFB\u52A0\u5982\u4E0B\u4EE3\u7801</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">// before load polyfill.js</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;script&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">// black list scroll event handler for addEventListener</span></span>
<span class="line"><span style="color:#A6ACCD;">Zone[Zone.__symbol__(&#39;BLACK_LISTED_EVENTS&#39;)] = [&#39;scroll&#39;, &#39;mouseenter&#39;, &#39;mouseleave&#39;, &#39;mousemove&#39;, &#39;mouseover&#39;, &#39;mouseout&#39;, &#39;mousewheel&#39;];</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">// black list scroll event handler for onProp</span></span>
<span class="line"><span style="color:#A6ACCD;">const targets = [window, Document.prototype, HTMLBodyElement.prototype, HTMLElement.prototype];</span></span>
<span class="line"><span style="color:#A6ACCD;"> __Zone_ignore_on_properties = [];</span></span>
<span class="line"><span style="color:#A6ACCD;">targets.forEach(function(target) {</span></span>
<span class="line"><span style="color:#A6ACCD;">  __Zone_ignore_on_properties.push({</span></span>
<span class="line"><span style="color:#A6ACCD;">    target: target,</span></span>
<span class="line"><span style="color:#A6ACCD;">    ignoreProperties: [&#39;scroll&#39;, &#39;mouseenter&#39;, &#39;mouseleave&#39;, &#39;mousemove&#39;, &#39;mouseover&#39;, &#39;mouseout&#39;, &#39;mousewheel&#39;]</span></span>
<span class="line"><span style="color:#A6ACCD;">  });</span></span>
<span class="line"><span style="color:#A6ACCD;">});</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">// disable requestAnimationFrame</span></span>
<span class="line"><span style="color:#A6ACCD;">__Zone_disable_requestAnimationFrame = true;</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;/script&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div>`,5),t=[o];function p(r,c,i,_,A,C){return e(),n("div",null,t)}const m=s(l,[["render",p]]);export{u as __pageData,m as default};
