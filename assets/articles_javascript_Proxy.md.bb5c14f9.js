import{_ as s,c as n,o as a,a as p}from"./app.437f86da.js";const d=JSON.parse('{"title":"Proxy","description":"","frontmatter":{},"headers":[{"level":2,"title":"Proxy \u4F5C\u7528","slug":"proxy-\u4F5C\u7528","link":"#proxy-\u4F5C\u7528","children":[]},{"level":2,"title":"\u5B9E\u4F8B\u65B9\u6CD5\uFF08\u53EA\u4E3E\u4F8B\u5E38\u7528\uFF09","slug":"\u5B9E\u4F8B\u65B9\u6CD5\uFF08\u53EA\u4E3E\u4F8B\u5E38\u7528\uFF09","link":"#\u5B9E\u4F8B\u65B9\u6CD5\uFF08\u53EA\u4E3E\u4F8B\u5E38\u7528\uFF09","children":[]},{"level":2,"title":"\u5B9E\u73B0\u4E00\u4E2A\u89C2\u5BDF\u8005\u6A21\u5F0F","slug":"\u5B9E\u73B0\u4E00\u4E2A\u89C2\u5BDF\u8005\u6A21\u5F0F","link":"#\u5B9E\u73B0\u4E00\u4E2A\u89C2\u5BDF\u8005\u6A21\u5F0F","children":[]}],"relativePath":"articles/javascript/Proxy.md"}'),l={name:"articles/javascript/Proxy.md"},e=p(`<h1 id="proxy" tabindex="-1">Proxy <a class="header-anchor" href="#proxy" aria-hidden="true">#</a></h1><h2 id="proxy-\u4F5C\u7528" tabindex="-1">Proxy \u4F5C\u7528 <a class="header-anchor" href="#proxy-\u4F5C\u7528" aria-hidden="true">#</a></h2><p>Proxy \u662F ES6 \u65B0\u589E\u7684\u5168\u5C40\u5BF9\u8C61\uFF0C\u7528\u4E8E\u4FEE\u6539\u67D0\u4E9B\u64CD\u4F5C\u7684\u9ED8\u8BA4\u884C\u4E3A\u3002\u53EF\u4EE5\u7406\u89E3\u4E3A\u5728\u76EE\u6807\u5BF9\u8C61\u4E4B\u524D\u505A\u4E00\u5C42\u201C\u62E6\u622A\u201D\uFF0C\u5916\u90E8\u5BF9\u8BE5\u5BF9\u8C61\u7684\u8BBF\u95EE\uFF0C\u90FD\u5FC5\u987B\u7ECF\u8FC7\u8FD9\u5C42\u62E6\u622A\u3002</p><p>\u5199\u4E00\u4E2A\u7B80\u5355\u7684\u4F8B\u5B50\uFF1A</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;"> let user = {</span></span>
<span class="line"><span style="color:#A6ACCD;">    name:&#39;dingyi&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">    age:18</span></span>
<span class="line"><span style="color:#A6ACCD;"> }</span></span>
<span class="line"><span style="color:#A6ACCD;"> let obj =  new Proxy(user,{</span></span>
<span class="line"><span style="color:#A6ACCD;">    get:function(target,key,receiver){</span></span>
<span class="line"><span style="color:#A6ACCD;">        return Reflect.get(target,key)+&#39;,\u4EE3\u7406\u751F\u6548\u4E86&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">    },</span></span>
<span class="line"><span style="color:#A6ACCD;">    set:function(target,key,value,receiver){</span></span>
<span class="line"><span style="color:#A6ACCD;">        return Reflect.set(target,key,value,receiver)</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;"> })</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">obj.name // &#39;dingyi,\u4EE3\u7406\u751F\u6548\u4E86&#39;;</span></span>
<span class="line"><span style="color:#A6ACCD;">obj.name = &#39;dinger&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">user.name // &#39;dinger&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>\u4E0A\u8FF0\u5BF9 user \u5BF9\u8C61\u67B6\u8BBE\u4E86\u4E00\u5C42\u62E6\u622A\uFF0C\u5B9A\u4E49\u4E86 set \u548C get \u65B9\u6CD5\uFF0C\u6839\u636E\u6253\u5370\u53D1\u73B0\u9ED8\u8BA4\u7684\u884C\u4E3A\u88AB\u8986\u76D6\u4E86\u3002</p><h2 id="\u5B9E\u4F8B\u65B9\u6CD5\uFF08\u53EA\u4E3E\u4F8B\u5E38\u7528\uFF09" tabindex="-1">\u5B9E\u4F8B\u65B9\u6CD5\uFF08\u53EA\u4E3E\u4F8B\u5E38\u7528\uFF09 <a class="header-anchor" href="#\u5B9E\u4F8B\u65B9\u6CD5\uFF08\u53EA\u4E3E\u4F8B\u5E38\u7528\uFF09" aria-hidden="true">#</a></h2><blockquote><p>\uFF081\uFF09get(target, propKey, receiver) \u62E6\u622A\u5BF9\u8C61\u5C5E\u6027\u7684\u8BFB\u53D6\uFF0C\u6BD4\u5982 proxy.foo \u548C proxy[&#39;foo&#39;]\u3002 \u6700\u540E\u4E00\u4E2A\u53C2\u6570 receiver \u662F\u4E00\u4E2A\u5BF9\u8C61\uFF0C\u53EF\u9009\uFF0C\u53C2\u89C1\u4E0B\u9762 Reflect.get \u7684\u90E8\u5206\u3002</p></blockquote><p>\u793A\u4F8B\uFF1A</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">let person = {name:&quot;\u5F20\u4E09&quot;}</span></span>
<span class="line"><span style="color:#A6ACCD;">let proxy  = new Proxy(person,{</span></span>
<span class="line"><span style="color:#A6ACCD;">    get:function(target,field){</span></span>
<span class="line"><span style="color:#A6ACCD;">       if(Reflect.has(target,field)){</span></span>
<span class="line"><span style="color:#A6ACCD;">        return Reflect.get(target,field)</span></span>
<span class="line"><span style="color:#A6ACCD;">       }else{</span></span>
<span class="line"><span style="color:#A6ACCD;">        console.error(\`\${field}\u5C5E\u6027\u4E0D\u5B58\u5728\`)</span></span>
<span class="line"><span style="color:#A6ACCD;">       }</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">})</span></span>
<span class="line"><span style="color:#A6ACCD;">proxy.name //\u5F20\u4E09</span></span>
<span class="line"><span style="color:#A6ACCD;">proxy.age // age\u5C5E\u6027\u4E0D\u5B58\u5728</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>\u8FD9\u4E2A\u4F8B\u5B50\u4E0D\u505A\u8FC7\u591A\u4ECB\u7ECD\u3002</p><p>\u518D\u4E3E\u4E2A\u4F8B\u5B50\uFF0C\u5C01\u88C5\u4E00\u4E2A\u65B9\u6CD5\uFF0C\u5B9E\u73B0\u6570\u7EC4\u53EF\u4EE5\u8D1F\u6570\u7D22\u5F15\u3002</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">  let arr = [1,2,3];</span></span>
<span class="line"><span style="color:#A6ACCD;">  function createMyArr(arr){</span></span>
<span class="line"><span style="color:#A6ACCD;">    let handler = {</span></span>
<span class="line"><span style="color:#A6ACCD;">        get:function(target,index,receiver){</span></span>
<span class="line"><span style="color:#A6ACCD;">            index&lt;0 ? target[target.length-Math.abs(index)]:target[index];</span></span>
<span class="line"><span style="color:#A6ACCD;">        }</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">    return new Proxy(arr,handler)</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">  const myArr = createMyArr(arr);</span></span>
<span class="line"><span style="color:#A6ACCD;">  myArr[-1] //3</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>\u6700\u540E\u4E00\u4E2A\u4F8B\u5B50\uFF0C\u5B9E\u73B0\u4E00\u4E2A\u751F\u6210\u5404\u79CD dom \u8282\u70B9\u7684\u901A\u7528\u51FD\u6570 dom</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">const dom = new Proxy({},{</span></span>
<span class="line"><span style="color:#A6ACCD;">    get(target,property){</span></span>
<span class="line"><span style="color:#A6ACCD;">        return function(attrs,...children){</span></span>
<span class="line"><span style="color:#A6ACCD;">             const el = document.createElement(property);</span></span>
<span class="line"><span style="color:#A6ACCD;">             for(let prop of Object.keys(attrs)){</span></span>
<span class="line"><span style="color:#A6ACCD;">                el.setAttribute(prop,attrs[prop])</span></span>
<span class="line"><span style="color:#A6ACCD;">             }</span></span>
<span class="line"><span style="color:#A6ACCD;">             for(let child of children){</span></span>
<span class="line"><span style="color:#A6ACCD;">                if(typeof child ===&#39;string&#39;){</span></span>
<span class="line"><span style="color:#A6ACCD;">                    child = document.createTextNode(child)</span></span>
<span class="line"><span style="color:#A6ACCD;">                }</span></span>
<span class="line"><span style="color:#A6ACCD;">                el.appendChild(child)</span></span>
<span class="line"><span style="color:#A6ACCD;">             }</span></span>
<span class="line"><span style="color:#A6ACCD;">             return el;</span></span>
<span class="line"><span style="color:#A6ACCD;">        }</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">})</span></span>
<span class="line"><span style="color:#A6ACCD;">const el = dom.div({},</span></span>
<span class="line"><span style="color:#A6ACCD;">  &#39;Hello,my name is&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">  dom.a({href:&#39;https://www.baidu.com&#39;},&#39;Dingyi&#39;),</span></span>
<span class="line"><span style="color:#A6ACCD;">  &#39;. I like:&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">  dom.ul({},</span></span>
<span class="line"><span style="color:#A6ACCD;">    dom.li({},&#39;js&#39;),</span></span>
<span class="line"><span style="color:#A6ACCD;">    dom.li({},&#39;css&#39;),</span></span>
<span class="line"><span style="color:#A6ACCD;">    dom.li({},&#39;html&#39;)</span></span>
<span class="line"><span style="color:#A6ACCD;">  )</span></span>
<span class="line"><span style="color:#A6ACCD;">);</span></span>
<span class="line"><span style="color:#A6ACCD;">document.body.appendChild(el);</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><blockquote><p>\uFF082\uFF09set(target, propKey, value, receiver)\u62E6\u622A\u5BF9\u8C61\u5C5E\u6027\u7684\u8BBE\u7F6E\uFF0C\u6BD4\u5982 proxy.foo = v \u6216 proxy[&#39;foo&#39;] = v\uFF0C\u8FD4\u56DE\u4E00\u4E2A\u5E03\u5C14\u503C\u3002</p></blockquote><p>\u793A\u4F8B\uFF0C\u4E00\u4E2A\u7B80\u5355\u7684\u6821\u9A8C\u5C5E\u6027\u6DFB\u52A0\u4F8B\u5B50\uFF1A</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">let validator = {</span></span>
<span class="line"><span style="color:#A6ACCD;">    set:function(obj,prop,value){</span></span>
<span class="line"><span style="color:#A6ACCD;">        if(prop === &#39;age&#39;){</span></span>
<span class="line"><span style="color:#A6ACCD;">            if(typeof value!==number){</span></span>
<span class="line"><span style="color:#A6ACCD;">                throw new TypeError(&quot;age\u5FC5\u987B\u4E3A\u6574\u6570&quot;)</span></span>
<span class="line"><span style="color:#A6ACCD;">            }</span></span>
<span class="line"><span style="color:#A6ACCD;">            if(value&gt;200){</span></span>
<span class="line"><span style="color:#A6ACCD;">                throw new RangeError(&quot;\u6CA1\u4EBA\u80FD\u6D3B\u5230200\u5C81&quot;)</span></span>
<span class="line"><span style="color:#A6ACCD;">            }</span></span>
<span class="line"><span style="color:#A6ACCD;">        }</span></span>
<span class="line"><span style="color:#A6ACCD;">        Reflect.set(obj,prop,value)</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">let person = new Proxy({},validator)</span></span>
<span class="line"><span style="color:#A6ACCD;">person.age = &#39;12&#39;;//error</span></span>
<span class="line"><span style="color:#A6ACCD;">person.age = 2222;//error</span></span>
<span class="line"><span style="color:#A6ACCD;">person.age = 200; // success</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><blockquote><p>\uFF083\uFF09has(target, propKey)\u62E6\u622A <strong>hasProperty</strong>,\u800C\u4E0D\u662F<strong>hasOwnProperty</strong>\u3002</p></blockquote><p>\u4E3E\u4E2A\u4F8B\u5B50\uFF0C\u9690\u85CF\u5185\u90E8\u79C1\u6709\u5C5E\u6027\u4E0D\u88AB\u53D1\u73B0</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">const obj = {</span></span>
<span class="line"><span style="color:#A6ACCD;">    name:&#39;dingyi&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">    _age:18</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">const proxy = new Proxy(obj,{</span></span>
<span class="line"><span style="color:#A6ACCD;">    has:function(target,field){</span></span>
<span class="line"><span style="color:#A6ACCD;">        if(field.startsWith(&#39;_&#39;)){</span></span>
<span class="line"><span style="color:#A6ACCD;">            return false</span></span>
<span class="line"><span style="color:#A6ACCD;">        }</span></span>
<span class="line"><span style="color:#A6ACCD;">        return Reflect.has(target,field)</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">})</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">_age in proxy // false</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">for(let a in proxy){</span></span>
<span class="line"><span style="color:#A6ACCD;">    console.log(a)   //name  _ age</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>\u663E\u7136\uFF0Chas \u5BF9 in \u751F\u6548\uFF0C\u4F46\u662F<strong>has \u62E6\u622A\u5BF9 for...in \u5FAA\u73AF\u4E0D\u751F\u6548</strong></p><blockquote><p>\uFF084\uFF09deleteProperty(target, propKey)\u62E6\u622A delete proxy[propKey]\u7684\u64CD\u4F5C\uFF0C\u8FD4\u56DE\u4E00\u4E2A\u5E03\u5C14\u503C\u3002</p></blockquote><p>\u4E3E\u4E2A\u4F8B\u5B50\uFF1A</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">  const person ={name:&#39;dingyi&#39;,_age:18}</span></span>
<span class="line"><span style="color:#A6ACCD;">  const handler = {</span></span>
<span class="line"><span style="color:#A6ACCD;">    deleteProperty(target,field){</span></span>
<span class="line"><span style="color:#A6ACCD;">        if(field.startsWith(&#39;_&#39;)){</span></span>
<span class="line"><span style="color:#A6ACCD;">            throw new Error(&#39;\u4E0D\u80FD\u5220\u9664\u79C1\u6709\u5C5E\u6027&#39;)</span></span>
<span class="line"><span style="color:#A6ACCD;">        }</span></span>
<span class="line"><span style="color:#A6ACCD;">        Reflect.deleteProperty(target,field)</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">const proxy = new Proxy(person,handler)</span></span>
<span class="line"><span style="color:#A6ACCD;">delete proxy.name // success</span></span>
<span class="line"><span style="color:#A6ACCD;">delete proxy._age // error</span></span>
<span class="line"><span style="color:#A6ACCD;">delete proxy.age1 // false</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><blockquote><p>\uFF085\uFF09ownKeys(target) \u62E6\u622A Object.getOwnPropertyNames(proxy)\u3001Object.getOwnPropertySymbols(proxy)\u3001Object.keys(proxy)\uFF0C\u8FD4\u56DE\u4E00\u4E2A\u6570\u7EC4\u3002\u8BE5\u65B9\u6CD5\u8FD4\u56DE\u5BF9\u8C61\u6240\u6709\u81EA\u8EAB\u7684\u5C5E\u6027\uFF0C\u800C Object.keys()\u4EC5\u8FD4\u56DE\u5BF9\u8C61\u53EF\u904D\u5386\u7684\u5C5E\u6027\u3002</p></blockquote><blockquote><p>\uFF086\uFF09getOwnPropertyDescriptor(target, propKey)\u62E6\u622A Object.getOwnPropertyDescriptor(proxy, propKey)\uFF0C\u8FD4\u56DE\u5C5E\u6027\u7684\u63CF\u8FF0\u5BF9\u8C61\u3002</p></blockquote><blockquote><p>\uFF087\uFF09defineProperty(target, propKey, propDesc)\u62E6\u622A Object.defineProperty(proxy, propKey, propDesc\uFF09\u3001Object.defineProperties(proxy, propDescs)\uFF0C\u8FD4\u56DE\u4E00\u4E2A\u5E03\u5C14\u503C\u3002</p></blockquote><blockquote><p>\uFF088\uFF09preventExtensions(target)\u62E6\u622A Object.preventExtensions(proxy)\uFF0C\u8FD4\u56DE\u4E00\u4E2A\u5E03\u5C14\u503C\u3002</p></blockquote><blockquote><p>\uFF089\uFF09getPrototypeOf(target)\u62E6\u622A Object.getPrototypeOf(proxy)\uFF0C\u8FD4\u56DE\u4E00\u4E2A\u5BF9\u8C61\u3002</p></blockquote><blockquote><p>\uFF0810\uFF09isExtensible(target)\u62E6\u622A Object.isExtensible(proxy)\uFF0C\u8FD4\u56DE\u4E00\u4E2A\u5E03\u5C14\u503C\u3002</p></blockquote><blockquote><p>\uFF0811\uFF09setPrototypeOf(target, proto)\u62E6\u622A Object.setPrototypeOf(proxy, proto)\uFF0C\u8FD4\u56DE\u4E00\u4E2A\u5E03\u5C14\u503C\u3002\u5982\u679C\u76EE\u6807\u5BF9\u8C61\u662F\u51FD\u6570\uFF0C\u90A3\u4E48\u8FD8\u6709\u4E24\u79CD\u989D\u5916\u64CD\u4F5C\u53EF\u4EE5\u62E6\u622A\u3002</p></blockquote><blockquote><p>\uFF0812\uFF09apply(target, object, args)\u62E6\u622A Proxy \u5B9E\u4F8B\u4F5C\u4E3A\u51FD\u6570\u8C03\u7528\u7684\u64CD\u4F5C\uFF0C\u6BD4\u5982 proxy(...args)\u3001proxy.call(object, ...args)\u3001proxy.apply(...)\u3002</p></blockquote><p>apply \u65B9\u6CD5\u4F1A\u62E6\u622A\u51FD\u6570\u7684\u8C03\u7528\uFF0Ccall \u548C apply \u64CD\u4F5C \u4E3E\u4E2A\u4F8B\u5B50\uFF1A</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">   let handler = {</span></span>
<span class="line"><span style="color:#A6ACCD;">    apply:function(){</span></span>
<span class="line"><span style="color:#A6ACCD;">        return &#39;i am apply&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">   }</span></span>
<span class="line"><span style="color:#A6ACCD;">   function test(){</span></span>
<span class="line"><span style="color:#A6ACCD;">    return &#39;i am test&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">   }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">   const fn = new Proxy(test,handler)</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">   fn(); //&#39;i am apply&#39; \u88ABhandler\u4E2Dapply\u62E6\u622A</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>\u53E6\u4E00\u4E2A\u4F8B\u5B50\uFF1A</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">let handler = {</span></span>
<span class="line"><span style="color:#A6ACCD;">    apply(target,ctx,args){</span></span>
<span class="line"><span style="color:#A6ACCD;">    console.log(&#39;args&#39;,args)</span></span>
<span class="line"><span style="color:#A6ACCD;">    console.log(&#39;arguments&#39;,...arguments)</span></span>
<span class="line"><span style="color:#A6ACCD;">      return Reflect.apply(...arguments) * 2</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">function test(left,right){</span></span>
<span class="line"><span style="color:#A6ACCD;">    return left+right</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">const proxy = new Proxy(test,handler);</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">proxy(1,2)   //6</span></span>
<span class="line"><span style="color:#A6ACCD;">proxy.call(null, 3, 4) // 14</span></span>
<span class="line"><span style="color:#A6ACCD;">proxy.apply(null, [5,6]) // 22</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>\u6BCF\u5F53\u6267\u884C proxy \u51FD\u6570\uFF08\u76F4\u63A5\u8C03\u7528\u6216 call \u548C apply \u8C03\u7528\uFF09\uFF0C\u5C31\u4F1A\u88AB apply \u65B9\u6CD5\u62E6\u622A\u3002</p><blockquote><p>\uFF0813\uFF09construct(target, args)\u62E6\u622A Proxy \u5B9E\u4F8B\u4F5C\u4E3A\u6784\u9020\u51FD\u6570\u8C03\u7528\u7684\u64CD\u4F5C\uFF0C\u6BD4\u5982 new proxy(...args)\u3002</p></blockquote><h2 id="\u5B9E\u73B0\u4E00\u4E2A\u89C2\u5BDF\u8005\u6A21\u5F0F" tabindex="-1">\u5B9E\u73B0\u4E00\u4E2A\u89C2\u5BDF\u8005\u6A21\u5F0F <a class="header-anchor" href="#\u5B9E\u73B0\u4E00\u4E2A\u89C2\u5BDF\u8005\u6A21\u5F0F" aria-hidden="true">#</a></h2><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">const person = observable({</span></span>
<span class="line"><span style="color:#A6ACCD;">  name: &#39;\u5F20\u4E09&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">  age: 20</span></span>
<span class="line"><span style="color:#A6ACCD;">});</span></span>
<span class="line"><span style="color:#A6ACCD;">function print() {</span></span>
<span class="line"><span style="color:#A6ACCD;">  console.log(\`\${person.name}, \${person.age}\`)</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">observe(print);</span></span>
<span class="line"><span style="color:#A6ACCD;">person.name = &#39;\u674E\u56DB&#39;;</span></span>
<span class="line"><span style="color:#A6ACCD;">// \u8F93\u51FA</span></span>
<span class="line"><span style="color:#A6ACCD;">// \u674E\u56DB, 20</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>\u4E3B\u8981\u5C31\u662F\u5B9E\u73B0 observable \u548C observe; \u5B9E\u73B0\u5982\u4E0B\uFF1A</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">const queuedObservers = new Set();</span></span>
<span class="line"><span style="color:#A6ACCD;">const observe = (fn)=&gt;queuedObservers.add(fn);</span></span>
<span class="line"><span style="color:#A6ACCD;">const observable= (obj)=&gt;new Proxy(obj,{set})</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">function set(target,key,value,receivers){</span></span>
<span class="line"><span style="color:#A6ACCD;">    const result = Reflect.set(target,key,value,receivers);</span></span>
<span class="line"><span style="color:#A6ACCD;">    queuedObservers.forEach(observer=&gt;observer());</span></span>
<span class="line"><span style="color:#A6ACCD;">    return result;</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>\u628A\u89C2\u5BDF\u8005\u51FD\u6570\u5168\u90E8\u653E\u8FDB\u4E00\u4E2A\u961F\u5217\u96C6\u5408\u4E2D\uFF0Cobservable \u62E6\u622A\u89C2\u5BDF\u5BF9\u8C61\u5C5E\u6027\u53D8\u5316\u5E76\u901A\u77E5\u89C2\u5BDF\u8005\u6267\u884C\u3002</p>`,44),o=[e];function c(t,r,A,C,i,y){return a(),n("div",null,o)}const u=s(l,[["render",c]]);export{d as __pageData,u as default};
