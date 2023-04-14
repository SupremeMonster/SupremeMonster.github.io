import{_ as s,c as n,o as a,a as l}from"./app.437f86da.js";const y=JSON.parse('{"title":"\u5173\u952E\u5B57 this","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u4E3A\u4EC0\u4E48\u8981\u7528 this","slug":"\u4E3A\u4EC0\u4E48\u8981\u7528-this","link":"#\u4E3A\u4EC0\u4E48\u8981\u7528-this","children":[]},{"level":2,"title":"this \u5230\u5E95\u662F\u4EC0\u4E48","slug":"this-\u5230\u5E95\u662F\u4EC0\u4E48","link":"#this-\u5230\u5E95\u662F\u4EC0\u4E48","children":[]},{"level":2,"title":"this \u7ED1\u5B9A\u89C4\u5219","slug":"this-\u7ED1\u5B9A\u89C4\u5219","link":"#this-\u7ED1\u5B9A\u89C4\u5219","children":[{"level":3,"title":"\u9ED8\u8BA4\u7ED1\u5B9A","slug":"\u9ED8\u8BA4\u7ED1\u5B9A","link":"#\u9ED8\u8BA4\u7ED1\u5B9A","children":[]},{"level":3,"title":"\u9690\u5F0F\u7ED1\u5B9A","slug":"\u9690\u5F0F\u7ED1\u5B9A","link":"#\u9690\u5F0F\u7ED1\u5B9A","children":[]}]},{"level":2,"title":"\u663E\u5F0F\u7ED1\u5B9A","slug":"\u663E\u5F0F\u7ED1\u5B9A","link":"#\u663E\u5F0F\u7ED1\u5B9A","children":[]},{"level":2,"title":"new \u7ED1\u5B9A","slug":"new-\u7ED1\u5B9A","link":"#new-\u7ED1\u5B9A","children":[]},{"level":2,"title":"\u7279\u6B8A\u7684\u7BAD\u5934\u51FD\u6570","slug":"\u7279\u6B8A\u7684\u7BAD\u5934\u51FD\u6570","link":"#\u7279\u6B8A\u7684\u7BAD\u5934\u51FD\u6570","children":[]},{"level":2,"title":"\u603B\u7ED3","slug":"\u603B\u7ED3","link":"#\u603B\u7ED3","children":[]}],"relativePath":"articles/javascript/this.md"}'),p={name:"articles/javascript/this.md"},e=l(`<h1 id="\u5173\u952E\u5B57-this" tabindex="-1">\u5173\u952E\u5B57 this <a class="header-anchor" href="#\u5173\u952E\u5B57-this" aria-hidden="true">#</a></h1><h2 id="\u4E3A\u4EC0\u4E48\u8981\u7528-this" tabindex="-1">\u4E3A\u4EC0\u4E48\u8981\u7528 this <a class="header-anchor" href="#\u4E3A\u4EC0\u4E48\u8981\u7528-this" aria-hidden="true">#</a></h2><p>\u4E3E\u4E00\u4E2A\u4F8B\u5B50\uFF1A</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">function test(){</span></span>
<span class="line"><span style="color:#A6ACCD;">    return this.name.toUpperCase()</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">let me = {</span></span>
<span class="line"><span style="color:#A6ACCD;">    name:&#39;dingyi&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">let you = {</span></span>
<span class="line"><span style="color:#A6ACCD;">    name:&#39;dinger&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">test.call(me)</span></span>
<span class="line"><span style="color:#A6ACCD;">test.call(you)</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>\u8FD9\u91CC\uFF0C\u53EF\u4EE5\u5728\u4E0D\u540C\u7684\u4E0A\u4E0B\u6587\u5BF9\u8C61\u4E2D\u91CD\u590D\u4F7F\u7528\u51FD\u6570 test\uFF0C\u4E14\u4E0D\u7528\u663E\u793A\u4F20\u5165\u4E00\u4E2A\u53C2\u6570\uFF0C\u5047\u8BBE\u4E0D\u7528 this\uFF1A</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;"> function test(context){</span></span>
<span class="line"><span style="color:#A6ACCD;">    return context.name.toUpperCase()</span></span>
<span class="line"><span style="color:#A6ACCD;"> }</span></span>
<span class="line"><span style="color:#A6ACCD;"> test(me)</span></span>
<span class="line"><span style="color:#A6ACCD;"> test(you)</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>\u53EF\u4EE5\u770B\u51FA\uFF0Cthis \u901A\u8FC7\u9690\u5F0F\u4F20\u9012\u4E00\u4E2A\u5BF9\u8C61\u5F15\u7528\u3002</p><h2 id="this-\u5230\u5E95\u662F\u4EC0\u4E48" tabindex="-1">this \u5230\u5E95\u662F\u4EC0\u4E48 <a class="header-anchor" href="#this-\u5230\u5E95\u662F\u4EC0\u4E48" aria-hidden="true">#</a></h2><p>this \u662F\u5728\u8FD0\u884C\u65F6\u8FDB\u884C\u7ED1\u5B9A\u7684\uFF0C\u800C\u4E0D\u662F\u7F16\u5199\u4EE3\u7801\u7684\u65F6\u5019\uFF0C\u5B83\u7684\u4E0A\u4E0B\u6587\u53D6\u51B3\u4E8E\u51FD\u6570\u8C03\u7528\u65F6\u7684\u6761\u4EF6\u3002\u4E5F\u5C31\u662F<em>this \u7684\u7ED1\u5B9A\u548C\u51FD\u6570\u58F0\u660E\u7684\u4F4D\u7F6E\u6CA1\u6709\u4EFB\u4F55\u5173\u7CFB\uFF0C\u53EA\u53D6\u51B3\u4E8E\u51FD\u6570\u7684\u8C03\u7528\u65B9\u5F0F</em></p><p>\u5F53\u4E00\u4E2A\u51FD\u6570\u88AB\u8C03\u7528\u65F6\uFF0C\u6211\u4EEC\u76F4\u5230\u4F1A\u521B\u5EFA\u4E00\u4E2A\u6267\u884C\u4E0A\u4E0B\u6587\u73AF\u5883\uFF0C\u91CC\u9762\u5305\u542B\u4E86\u51FD\u6570\u7684\u8C03\u7528\u6808\uFF0C\u4F20\u53C2\u7B49\uFF0C\u540C\u65F6\uFF0C\u4E5F\u5305\u542B\u4E86 this\u3002</p><p>\u56E0\u6B64\uFF0C\u5206\u6790 this \u7684\u6307\u5411\u91CD\u70B9\u662F\u5206\u6790\u51FD\u6570\u7684\u8C03\u7528\u4F4D\u7F6E\u3002</p><h2 id="this-\u7ED1\u5B9A\u89C4\u5219" tabindex="-1">this \u7ED1\u5B9A\u89C4\u5219 <a class="header-anchor" href="#this-\u7ED1\u5B9A\u89C4\u5219" aria-hidden="true">#</a></h2><ul><li><h3 id="\u9ED8\u8BA4\u7ED1\u5B9A" tabindex="-1">\u9ED8\u8BA4\u7ED1\u5B9A <a class="header-anchor" href="#\u9ED8\u8BA4\u7ED1\u5B9A" aria-hidden="true">#</a></h3></li></ul><p>\u8FD9\u79CD\u662F\u6700\u5E38\u89C1\u7684\uFF0C\u4E5F\u5C31\u662F\u72EC\u7ACB\u7684\u51FD\u6570\u8C03\u7528\uFF0C\u5B83\u4E5F\u662F\u9ED8\u8BA4\u7684\u89C4\u5219\u3002 \u4E3E\u4F8B\uFF1A</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">function test(){</span></span>
<span class="line"><span style="color:#A6ACCD;">    console.log(this.a)</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">let a = 2;</span></span>
<span class="line"><span style="color:#A6ACCD;">test(); //2</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>\u6309\u7167\u4E0A\u8FF0\u5206\u6790\u51FD\u6570\u8C03\u7528\u4F4D\u7F6E\uFF0Ctest()\u4E0D\u5E26\u4EFB\u4F55\u4FEE\u9970\u7684\u8C03\u7528\uFF0C\u6240\u4EE5\u4F7F\u7528\u7684\u662F\u9ED8\u8BA4\u7ED1\u5B9A\u3002this \u6307\u5411\u5168\u5C40\u5BF9\u8C61\uFF0Cthis.a = 2;</p><ul><li><h3 id="\u9690\u5F0F\u7ED1\u5B9A" tabindex="-1">\u9690\u5F0F\u7ED1\u5B9A <a class="header-anchor" href="#\u9690\u5F0F\u7ED1\u5B9A" aria-hidden="true">#</a></h3></li></ul><p>\u4E3E\u4F8B\uFF1A</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;"> function test(){</span></span>
<span class="line"><span style="color:#A6ACCD;">   console.log(this.a)</span></span>
<span class="line"><span style="color:#A6ACCD;"> }</span></span>
<span class="line"><span style="color:#A6ACCD;"> let obj = {</span></span>
<span class="line"><span style="color:#A6ACCD;">    a:2,</span></span>
<span class="line"><span style="color:#A6ACCD;">    test:test</span></span>
<span class="line"><span style="color:#A6ACCD;"> }</span></span>
<span class="line"><span style="color:#A6ACCD;"> obj.test(); // 2</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>\u7EE7\u7EED\u5206\u6790\u8C03\u7528\u4F4D\u7F6E\uFF0C\u8C03\u7528\u4F4D\u7F6E\u7528 obj \u4E0A\u4E0B\u6587\u6765\u5F15\u7528\u51FD\u6570\uFF0Ctest \u51FD\u6570\u6307\u5411 obj \u5BF9\u8C61\uFF0C<strong>\u5F53\u51FD\u6570\u5F15\u7528\u6709\u4E0A\u4E0B\u6587\u5BF9\u8C61\u65F6\uFF0C\u9690\u5F0F\u7ED1\u5B9A\u89C4\u5219\u4F1A\u628A\u51FD\u6570\u8C03\u7528\u4E2D\u7684 this \u7ED1\u5B9A\u5230\u8FD9\u4E2A\u4E0A\u4E0B\u6587\u5BF9\u8C61</strong>\uFF0C\u6240\u4EE5 this.a \u5176\u5B9E\u76F8\u5F53\u4E8E obj.a\u3002</p><p>\u518D\u4E3E\u4E2A\u4F8B\u5B50\uFF1A</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">function test(){</span></span>
<span class="line"><span style="color:#A6ACCD;">   console.log(this.a)</span></span>
<span class="line"><span style="color:#A6ACCD;"> }</span></span>
<span class="line"><span style="color:#A6ACCD;"> let obj = {</span></span>
<span class="line"><span style="color:#A6ACCD;">    a:2,</span></span>
<span class="line"><span style="color:#A6ACCD;">    test:test</span></span>
<span class="line"><span style="color:#A6ACCD;"> }</span></span>
<span class="line"><span style="color:#A6ACCD;"> let test2 = obj.test;</span></span>
<span class="line"><span style="color:#A6ACCD;"> test2(); //undefined</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>\u867D\u7136 test2 \u662F obj.test \u7684\u5F15\u7528\uFF0C\u4F46\u662F\u5B9E\u9645\u4E0A\uFF0C\u5B83\u5F15\u7528\u7684\u662F test \u51FD\u6570\u672C\u8EAB\uFF0C\u56E0\u6B64 test2()\u5176\u5B9E\u662F\u4E00\u4E2A\u4E0D\u5E26\u4EFB\u4F55\u4FEE\u9970\u7684\u51FD\u6570\u8C03\u7528\uFF0C\u6240\u4EE5 this \u6307\u5411\u7684\u662F\u5168\u5C40\u5BF9\u8C61\u3002\u8FD9\u4E2A\u4E5F\u5C31\u662F<em>\u9690\u5F0F\u4E22\u5931</em>\uFF0C\u4F1A\u91C7\u7528\u9ED8\u8BA4\u7684\u7ED1\u5B9A\u89C4\u5219\u3002</p><h2 id="\u663E\u5F0F\u7ED1\u5B9A" tabindex="-1">\u663E\u5F0F\u7ED1\u5B9A <a class="header-anchor" href="#\u663E\u5F0F\u7ED1\u5B9A" aria-hidden="true">#</a></h2><p>\u901A\u8FC7 apply \u548C call \u65B9\u6CD5\u53EF\u4EE5\u5728\u67D0\u4E2A\u5BF9\u8C61\u4E0A\u5F3A\u5236\u8C03\u7528\u51FD\u6570\u3002\u7B2C\u4E00\u4E2A\u53C2\u6570\u662F\u4E00\u4E2A\u5BF9\u8C61\uFF0C\u4ED6\u4EEC\u4F1A\u628A\u8FD9\u4E2A\u5BF9\u8C61\u7ED1\u5B9A\u5230 this\uFF0C\u7136\u540E\u5728\u8C03\u7528\u7684\u65F6\u5019\u6307\u5B9A\u8FD9\u4E2A this\u3002</p><p>\u4E3E\u4E2A\u4F8B\u5B50\uFF1A</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">function test(){</span></span>
<span class="line"><span style="color:#A6ACCD;">    console.log(this.a)</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">let obj = {</span></span>
<span class="line"><span style="color:#A6ACCD;">    a:2</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">test.call(obj) //2</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>\u901A\u8FC7 test.call\uFF0C\u6211\u4EEC\u5728\u8C03\u7528 test \u7684\u65F6\u5019\u5F3A\u5236\u628A\u5B83\u7684 this \u7ED1\u5B9A\u5230\u4E86 obj \u4E0A\u3002</p><h2 id="new-\u7ED1\u5B9A" tabindex="-1">new \u7ED1\u5B9A <a class="header-anchor" href="#new-\u7ED1\u5B9A" aria-hidden="true">#</a></h2><p>\u4F7F\u7528 new \u6765\u8C03\u7528\u51FD\u6570\uFF0C\u4F1A\u6267\u884C\u4E0B\u9762\u7684\u64CD\u4F5C\u3002</p><ol><li>\u521B\u5EFA\u4E00\u4E2A\u65B0\u7684\u5BF9\u8C61</li><li>\u4E3A\u65B0\u5BF9\u8C61\u6DFB\u52A0<strong>proto</strong>\u5C5E\u6027\uFF0C\u5E76\u94FE\u63A5\u5230\u6784\u9020\u51FD\u6570\u7684\u539F\u578B\u5BF9\u8C61</li><li>\u7ED1\u5B9A\u5230\u51FD\u6570\u8C03\u7528\u7684 this</li><li>\u5982\u679C\u51FD\u6570\u6CA1\u6709\u8FD4\u56DE\u5176\u4ED6\u5BF9\u8C61\uFF0C\u90A3\u4E48\u81EA\u52A8\u8FD4\u56DE this</li></ol><p>\u4E3E\u4E2A\u4F8B\u5B50:</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">function test(a){</span></span>
<span class="line"><span style="color:#A6ACCD;">    this.a = a;</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">let b = new test(2);</span></span>
<span class="line"><span style="color:#A6ACCD;">console.log(b.a) //2</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>\u4F7F\u7528 new \u6765\u8C03\u7528 test \u65F6\uFF0C\u6211\u4EEC\u4F1A\u6784\u9020\u4E00\u4E2A\u65B0\u5BF9\u8C61\u5E76\u7ED1\u5B9A\u5230 test()\u8C03\u7528\u4E2D\u7684 this \u4E0A\u3002</p><h2 id="\u7279\u6B8A\u7684\u7BAD\u5934\u51FD\u6570" tabindex="-1">\u7279\u6B8A\u7684\u7BAD\u5934\u51FD\u6570 <a class="header-anchor" href="#\u7279\u6B8A\u7684\u7BAD\u5934\u51FD\u6570" aria-hidden="true">#</a></h2><p>\u7BAD\u5934\u51FD\u6570\u5E76\u4E0D\u4F7F\u7528\u6807\u51C6\u7684\u56DB\u79CD\u7ED1\u5B9A\u89C4\u5219\uFF0C\u800C\u662F\u4F7F\u7528\u5916\u5C42\uFF08\u51FD\u6570\u6216\u8005\u5168\u5C40\uFF09\u4F5C\u7528\u57DF\u6765\u51B3\u5B9A this</p><p>\u4E3E\u4F8B:</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">function test(){</span></span>
<span class="line"><span style="color:#A6ACCD;">    setTimeout(()=&gt;{</span></span>
<span class="line"><span style="color:#A6ACCD;">        console.log(this.a)</span></span>
<span class="line"><span style="color:#A6ACCD;">    },100)</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">let obj = {</span></span>
<span class="line"><span style="color:#A6ACCD;">    a:2</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">test.call(obj) //2</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>settimeout \u7684\u56DE\u8C03\u4F7F\u7528\u4E86\u7BAD\u5934\u51FD\u6570,\u5176 this \u5C31\u7EE7\u627F\u4E8E test().\u5728\u4EE5\u524D\u6CA1\u6709\u7BAD\u5934\u51FD\u6570\u7684\u65F6\u5019,\u6211\u4EEC\u901A\u5E38\u4F1A\u8FD9\u4E48\u5904\u7406:</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">function test(){</span></span>
<span class="line"><span style="color:#A6ACCD;">    let self = this</span></span>
<span class="line"><span style="color:#A6ACCD;">    setTimeout(function(){</span></span>
<span class="line"><span style="color:#A6ACCD;">        console.log(self.a)</span></span>
<span class="line"><span style="color:#A6ACCD;">    },100)</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">let obj = {</span></span>
<span class="line"><span style="color:#A6ACCD;">    a:2</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">test.call(obj) //2</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h2 id="\u603B\u7ED3" tabindex="-1">\u603B\u7ED3 <a class="header-anchor" href="#\u603B\u7ED3" aria-hidden="true">#</a></h2><p>\u5224\u65AD\u4E00\u4E2A\u51FD\u6570\u7684 this \u7ED1\u5B9A\uFF0C\u5C31\u9700\u8981\u627E\u5230\u8FD9\u4E2A\u51FD\u6570\u7684\u76F4\u63A5\u8C03\u7528\u4F4D\u7F6E\uFF0C\u7136\u540E\u6839\u636E\u4E0A\u8FF0\u56DB\u79CD\u89C4\u5219\u5224\u65AD\u3002</p><p>\u5982\u679C\u662F\u7BAD\u5934\u51FD\u6570,\u5219\u627E\u5230\u5176\u5916\u5C42\u51FD\u6570\u7684 this.</p>`,43),t=[e];function o(c,i,r,C,A,h){return a(),n("div",null,t)}const D=s(p,[["render",o]]);export{y as __pageData,D as default};
