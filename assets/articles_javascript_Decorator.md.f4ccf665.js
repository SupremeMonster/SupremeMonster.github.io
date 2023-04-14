import{_ as s,c as n,o as a,a as l}from"./app.437f86da.js";const D=JSON.parse('{"title":"\u88C5\u9970\u5668","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u4EC0\u4E48\u662F\u88C5\u9970\u5668","slug":"\u4EC0\u4E48\u662F\u88C5\u9970\u5668","link":"#\u4EC0\u4E48\u662F\u88C5\u9970\u5668","children":[]},{"level":2,"title":"\u7C7B\u88C5\u9970\u5668","slug":"\u7C7B\u88C5\u9970\u5668","link":"#\u7C7B\u88C5\u9970\u5668","children":[{"level":3,"title":"\u88C5\u9970\u5668\u4F20\u53C2\u6570","slug":"\u88C5\u9970\u5668\u4F20\u53C2\u6570","link":"#\u88C5\u9970\u5668\u4F20\u53C2\u6570","children":[]}]},{"level":2,"title":"\u7C7B\u65B9\u6CD5\u88C5\u9970\u5668","slug":"\u7C7B\u65B9\u6CD5\u88C5\u9970\u5668","link":"#\u7C7B\u65B9\u6CD5\u88C5\u9970\u5668","children":[{"level":3,"title":"\u7C7B\u65B9\u6CD5\u88C5\u9970\u5668\u4F20\u53C2","slug":"\u7C7B\u65B9\u6CD5\u88C5\u9970\u5668\u4F20\u53C2","link":"#\u7C7B\u65B9\u6CD5\u88C5\u9970\u5668\u4F20\u53C2","children":[]}]},{"level":2,"title":"\u4E24\u79CD\u88C5\u9970\u5668\u7684\u6267\u884C\u987A\u5E8F","slug":"\u4E24\u79CD\u88C5\u9970\u5668\u7684\u6267\u884C\u987A\u5E8F","link":"#\u4E24\u79CD\u88C5\u9970\u5668\u7684\u6267\u884C\u987A\u5E8F","children":[]},{"level":2,"title":"\u5B9E\u9645\u5E94\u7528","slug":"\u5B9E\u9645\u5E94\u7528","link":"#\u5B9E\u9645\u5E94\u7528","children":[]}],"relativePath":"articles/javascript/Decorator.md"}'),p={name:"articles/javascript/Decorator.md"},e=l(`<h1 id="\u88C5\u9970\u5668" tabindex="-1">\u88C5\u9970\u5668 <a class="header-anchor" href="#\u88C5\u9970\u5668" aria-hidden="true">#</a></h1><h2 id="\u4EC0\u4E48\u662F\u88C5\u9970\u5668" tabindex="-1">\u4EC0\u4E48\u662F\u88C5\u9970\u5668 <a class="header-anchor" href="#\u4EC0\u4E48\u662F\u88C5\u9970\u5668" aria-hidden="true">#</a></h2><blockquote><p>\u88C5\u9970\u5668\u662F\u4E00\u79CD\u548C\u7C7B\u76F8\u5173\u7684\u8BED\u6CD5\uFF0C\u7528\u6765\u6CE8\u91CA\u6216\u8005\u4FEE\u6539<em>\u7C7B\u548C\u7C7B\u65B9\u6CD5</em>\u3002\u672C\u8D28\u4E0A\u5C31\u662F\u4E00\u4E2A\u7F16\u8BD1\u65F6\u6267\u884C\u7684\u51FD\u6570\uFF0C\u901A\u5E38\u653E\u5728\u7C7B\u548C\u7C7B\u65B9\u6CD5\u7684\u5B9A\u4E49\u524D\u9762\u3002</p></blockquote><h2 id="\u7C7B\u88C5\u9970\u5668" tabindex="-1">\u7C7B\u88C5\u9970\u5668 <a class="header-anchor" href="#\u7C7B\u88C5\u9970\u5668" aria-hidden="true">#</a></h2><p>\u4E3E\u4E2A\u4F8B\u5B50\uFF1A</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">@decoratorClass</span></span>
<span class="line"><span style="color:#A6ACCD;">class Example{</span></span>
<span class="line"><span style="color:#A6ACCD;">    // ...</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">function decoratorClass(target){</span></span>
<span class="line"><span style="color:#A6ACCD;">    target.isTest = true</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>target \u5C31\u662F\u7C7B\u672C\u8EAB\uFF0C\u4E5F\u5C31\u662F\u76F8\u5F53\u4E8E\u7C7B\u7684\u6784\u9020\u51FD\u6570 <strong>Class.prototype.constructor</strong></p><p>\u88C5\u9970\u5668@decoratorClass \u4FEE\u6539\u4E86 Example \u7C7B\u7684\u6574\u4E2A\u884C\u4E3A\uFF0C\u6DFB\u52A0\u4E86\u9759\u6001\u5C5E\u6027 isTest\u3002</p><h3 id="\u88C5\u9970\u5668\u4F20\u53C2\u6570" tabindex="-1">\u88C5\u9970\u5668\u4F20\u53C2\u6570 <a class="header-anchor" href="#\u88C5\u9970\u5668\u4F20\u53C2\u6570" aria-hidden="true">#</a></h3><p>\u5F53\u4F7F\u7528\u88C5\u9970\u5668\u7684\u65F6\u5019\u9700\u8981\u4F20\u53C2\u6570\uFF0C\u53EF\u4EE5\u5728\u88C5\u9970\u5668\u4E2D\u8FD4\u56DE\u4E00\u5C42\u51FD\u6570\uFF1A</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">@decoratorClass(true)</span></span>
<span class="line"><span style="color:#A6ACCD;">class Example{</span></span>
<span class="line"><span style="color:#A6ACCD;">    // ...</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">function decoratorClass(isTest){</span></span>
<span class="line"><span style="color:#A6ACCD;">    return function (target){</span></span>
<span class="line"><span style="color:#A6ACCD;">        target.isTest = isTest</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h2 id="\u7C7B\u65B9\u6CD5\u88C5\u9970\u5668" tabindex="-1">\u7C7B\u65B9\u6CD5\u88C5\u9970\u5668 <a class="header-anchor" href="#\u7C7B\u65B9\u6CD5\u88C5\u9970\u5668" aria-hidden="true">#</a></h2><p>\u4E3E\u4F8B:</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">  class Example{</span></span>
<span class="line"><span style="color:#A6ACCD;">    @log</span></span>
<span class="line"><span style="color:#A6ACCD;">    instanceMethod(){}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">    @log</span></span>
<span class="line"><span style="color:#A6ACCD;">    static staticMethod(){}</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  function log(target,methodName,descriptor){</span></span>
<span class="line"><span style="color:#A6ACCD;">       const oldValue = descriptor.value;</span></span>
<span class="line"><span style="color:#A6ACCD;">       descriptor.value = function(){</span></span>
<span class="line"><span style="color:#A6ACCD;">        console.log(arguments);</span></span>
<span class="line"><span style="color:#A6ACCD;">        return oldValue.apply(this,arguments)</span></span>
<span class="line"><span style="color:#A6ACCD;">       }</span></span>
<span class="line"><span style="color:#A6ACCD;">       return descriptor</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>\u88C5\u9970\u5668@log \u88C5\u9970\u4E86\u5B9E\u4F8B\u65B9\u6CD5 instanceMethod \u548C\u9759\u6001\u65B9\u6CD5 staticMethod\uFF0C\u4F5C\u7528\u662F\u5728\u6267\u884C\u539F\u59CB\u7684\u64CD\u4F5C\u4E4B\u524D\uFF0C\u6267\u884C console.log \u6765\u8F93\u51FA\u65E5\u5FD7</p><h3 id="\u7C7B\u65B9\u6CD5\u88C5\u9970\u5668\u4F20\u53C2" tabindex="-1">\u7C7B\u65B9\u6CD5\u88C5\u9970\u5668\u4F20\u53C2 <a class="header-anchor" href="#\u7C7B\u65B9\u6CD5\u88C5\u9970\u5668\u4F20\u53C2" aria-hidden="true">#</a></h3><p>\u548C\u7C7B\u65B9\u6CD5\u4F20\u53C2\u65B9\u5F0F\u4E00\u6837\uFF0C\u4E5F\u662F\u5728\u88C5\u9970\u5668\u4E2D\u8FD4\u56DE\u4E00\u5C42\u51FD\u6570</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;"> class Example{</span></span>
<span class="line"><span style="color:#A6ACCD;">    @log(1)</span></span>
<span class="line"><span style="color:#A6ACCD;">    instanceMethod(){}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">    @log(2)</span></span>
<span class="line"><span style="color:#A6ACCD;">    static staticMethod(){}</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  function log(id){</span></span>
<span class="line"><span style="color:#A6ACCD;">    return (target,methodName,descriptor)=&gt;{</span></span>
<span class="line"><span style="color:#A6ACCD;">       const oldValue = descriptor.value;</span></span>
<span class="line"><span style="color:#A6ACCD;">       descriptor.value = function(){</span></span>
<span class="line"><span style="color:#A6ACCD;">        console.log(arguments,id);</span></span>
<span class="line"><span style="color:#A6ACCD;">        return oldValue.apply(this,arguments)</span></span>
<span class="line"><span style="color:#A6ACCD;">       }</span></span>
<span class="line"><span style="color:#A6ACCD;">       return descriptor</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h2 id="\u4E24\u79CD\u88C5\u9970\u5668\u7684\u6267\u884C\u987A\u5E8F" tabindex="-1">\u4E24\u79CD\u88C5\u9970\u5668\u7684\u6267\u884C\u987A\u5E8F <a class="header-anchor" href="#\u4E24\u79CD\u88C5\u9970\u5668\u7684\u6267\u884C\u987A\u5E8F" aria-hidden="true">#</a></h2><p>\u4E3E\u4E2A\u4F8B\u5B50\uFF1A</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">   function decoratorClass1(id){</span></span>
<span class="line"><span style="color:#A6ACCD;">    console.log(&quot;\u88C5\u9970class1\u8FDB\u5165&quot;)</span></span>
<span class="line"><span style="color:#A6ACCD;">    return (target)=&gt;{</span></span>
<span class="line"><span style="color:#A6ACCD;">      console.log(&quot;\u88C5\u9970class1\u6267\u884C&quot;)</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">   }</span></span>
<span class="line"><span style="color:#A6ACCD;">   function decoratorClass2(id){</span></span>
<span class="line"><span style="color:#A6ACCD;">    console.log(&quot;\u88C5\u9970class2\u8FDB\u5165&quot;)</span></span>
<span class="line"><span style="color:#A6ACCD;">    return (target)=&gt;{</span></span>
<span class="line"><span style="color:#A6ACCD;">      console.log(&quot;\u88C5\u9970class2\u6267\u884C&quot;)</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">   }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">   function decoratorMethod1(id){</span></span>
<span class="line"><span style="color:#A6ACCD;">    console.log(&quot;\u88C5\u9970method1\u8FDB\u5165&quot;)</span></span>
<span class="line"><span style="color:#A6ACCD;">    return (target,property,desp)=&gt;{</span></span>
<span class="line"><span style="color:#A6ACCD;">      console.log(&quot;\u88C5\u9970method1\u6267\u884C&quot;)</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">   }</span></span>
<span class="line"><span style="color:#A6ACCD;">   function decoratorMethod2(id){</span></span>
<span class="line"><span style="color:#A6ACCD;">    console.log(&quot;\u88C5\u9970method2\u8FDB\u5165&quot;)</span></span>
<span class="line"><span style="color:#A6ACCD;">    return (target,property,desp)=&gt;{</span></span>
<span class="line"><span style="color:#A6ACCD;">      console.log(&quot;\u88C5\u9970method2\u6267\u884C&quot;)</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">   }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">   @decoratorClass1</span></span>
<span class="line"><span style="color:#A6ACCD;">   @decoratorClass2</span></span>
<span class="line"><span style="color:#A6ACCD;">   class Example{</span></span>
<span class="line"><span style="color:#A6ACCD;">     @decoratorMethod1</span></span>
<span class="line"><span style="color:#A6ACCD;">     @decoratorMethod2</span></span>
<span class="line"><span style="color:#A6ACCD;">     method(){}</span></span>
<span class="line"><span style="color:#A6ACCD;">   }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">   // \u88C5\u9970method1\u8FDB\u5165</span></span>
<span class="line"><span style="color:#A6ACCD;">   // \u88C5\u9970method2\u8FDB\u5165</span></span>
<span class="line"><span style="color:#A6ACCD;">   // \u88C5\u9970method2\u6267\u884C</span></span>
<span class="line"><span style="color:#A6ACCD;">   // \u88C5\u9970method1\u6267\u884C</span></span>
<span class="line"><span style="color:#A6ACCD;">   // \u88C5\u9970class1\u8FDB\u5165</span></span>
<span class="line"><span style="color:#A6ACCD;">   // \u88C5\u9970class2\u8FDB\u5165</span></span>
<span class="line"><span style="color:#A6ACCD;">   // \u88C5\u9970class2\u6267\u884C</span></span>
<span class="line"><span style="color:#A6ACCD;">   // \u88C5\u9970class1\u6267\u884C</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>\u65E0\u8BBA\u662F\u7C7B\u65B9\u6CD5\u7684\u4FEE\u9970\u8FD8\u662F\u7C7B\u7684\u4FEE\u9970\uFF0C\u90FD\u7B26\u5408\u6D0B\u8471\u6A21\u578B\uFF0C\u5148\u4ECE\u5916\u5230\u5185\u8FDB\u5165\uFF0C\u518D\u4ECE\u5185\u5230\u5916\u6267\u884C</p><h2 id="\u5B9E\u9645\u5E94\u7528" tabindex="-1">\u5B9E\u9645\u5E94\u7528 <a class="header-anchor" href="#\u5B9E\u9645\u5E94\u7528" aria-hidden="true">#</a></h2><ol><li>\u8C03\u7528\u4E00\u4E2A\u7C7B\u7684\u6240\u6709\u65B9\u6CD5\u65F6\uFF0C\u90FD\u9700\u8981\u6253\u5370\u65E5\u5FD7</li></ol><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">function log(target){</span></span>
<span class="line"><span style="color:#A6ACCD;">    const desc = Object.getOwnPropertyDescriptors(target.prototype);</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">    for(let key of Object.keys(desc)){</span></span>
<span class="line"><span style="color:#A6ACCD;">        if(typeof desc[key].value===&#39;function&#39;){</span></span>
<span class="line"><span style="color:#A6ACCD;">            Object.defineProperty(target.prototype,key,{</span></span>
<span class="line"><span style="color:#A6ACCD;">                value(...args){</span></span>
<span class="line"><span style="color:#A6ACCD;">                    console.log(&#39;execute&#39;)</span></span>
<span class="line"><span style="color:#A6ACCD;">                }</span></span>
<span class="line"><span style="color:#A6ACCD;">            })</span></span>
<span class="line"><span style="color:#A6ACCD;">        }</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">@log</span></span>
<span class="line"><span style="color:#A6ACCD;">class Example{</span></span>
<span class="line"><span style="color:#A6ACCD;">    test1(){}</span></span>
<span class="line"><span style="color:#A6ACCD;">    test2(){}</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div>`,25),o=[e];function c(t,r,C,i,A,d){return a(),n("div",null,o)}const u=s(p,[["render",c]]);export{D as __pageData,u as default};
