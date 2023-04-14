import{_ as s,c as n,o as a,a as e}from"./app.437f86da.js";const D=JSON.parse('{"title":"Vue \u54CD\u5E94\u5F0F\u539F\u7406","description":"","frontmatter":{},"headers":[{"level":2,"title":"Vue2 \u54CD\u5E94\u5F0F","slug":"vue2-\u54CD\u5E94\u5F0F","link":"#vue2-\u54CD\u5E94\u5F0F","children":[]},{"level":2,"title":"Vue3 \u54CD\u5E94\u5F0F","slug":"vue3-\u54CD\u5E94\u5F0F","link":"#vue3-\u54CD\u5E94\u5F0F","children":[]}],"relativePath":"articles/vue/\u54CD\u5E94\u5F0F\u539F\u7406.md"}'),p={name:"articles/vue/\u54CD\u5E94\u5F0F\u539F\u7406.md"},l=e(`<h1 id="vue-\u54CD\u5E94\u5F0F\u539F\u7406" tabindex="-1">Vue \u54CD\u5E94\u5F0F\u539F\u7406 <a class="header-anchor" href="#vue-\u54CD\u5E94\u5F0F\u539F\u7406" aria-hidden="true">#</a></h1><h2 id="vue2-\u54CD\u5E94\u5F0F" tabindex="-1">Vue2 \u54CD\u5E94\u5F0F <a class="header-anchor" href="#vue2-\u54CD\u5E94\u5F0F" aria-hidden="true">#</a></h2><p><strong>\u5B9E\u73B0\u539F\u7406</strong></p><ul><li>\u5BF9\u8C61\u7C7B\u578B\uFF1A\u901A\u8FC7 <strong>object.defineProperty()</strong> \u5BF9\u5C5E\u6027\u7684\u7684\u83B7\u53D6\u548C\u4FEE\u6539\u8FDB\u884C\u62E6\u622A</li></ul><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">Object.defineProperty(data,&#39;name&#39;,{</span></span>
<span class="line"><span style="color:#A6ACCD;">    get(){},</span></span>
<span class="line"><span style="color:#A6ACCD;">    set(){}</span></span>
<span class="line"><span style="color:#A6ACCD;">})</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><ul><li>\u6570\u7EC4\u7C7B\u578B\uFF1A\u901A\u8FC7\u91CD\u5199\u6570\u7EC4\u7684\u65B9\u6CD5\u6765\u5B9E\u73B0\u62E6\u622A</li></ul><p>\u4F46\u662F\u4F1A\u5B58\u5728\u5982\u4E0B\u95EE\u9898</p><ul><li>\u65B0\u589E\u5C5E\u6027\u3001\u5220\u9664\u5C5E\u6027\uFF0C\u754C\u9762\u4E0D\u4F1A\u66F4\u65B0</li><li>\u76F4\u63A5\u901A\u8FC7\u4E0B\u6807\u4FEE\u6539\u6570\u7EC4\uFF0C\u754C\u9762\u4E0D\u4F1A\u66F4\u65B0</li></ul><p>Vue2 \u7684\u89E3\u51B3\u529E\u6CD5\u662F\u63D0\u4F9B\u4E86$set \u65B9\u6CD5\uFF0C\u4F8B\u5982\uFF1A</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">...</span></span>
<span class="line"><span style="color:#A6ACCD;">   data(){</span></span>
<span class="line"><span style="color:#A6ACCD;">    return{</span></span>
<span class="line"><span style="color:#A6ACCD;">      person:{</span></span>
<span class="line"><span style="color:#A6ACCD;">        name:&#39;\u5F20\u4E09&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">        age:18,</span></span>
<span class="line"><span style="color:#A6ACCD;">        hobby:[&#39;\u5B66\u4E60&#39;,&#39;\u5403\u996D&#39;]</span></span>
<span class="line"><span style="color:#A6ACCD;">      }</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">  },</span></span>
<span class="line"><span style="color:#A6ACCD;">...</span></span>
<span class="line"><span style="color:#A6ACCD;">methods:{</span></span>
<span class="line"><span style="color:#A6ACCD;">    addProperty(){</span></span>
<span class="line"><span style="color:#A6ACCD;">      //this.person.sex = &#39;\u7537&#39; //\u8FD9\u6837\u4E0D\u884C</span></span>
<span class="line"><span style="color:#A6ACCD;">      this.$set(this.person,&quot;sex&quot;,&#39;\u7537&#39;)</span></span>
<span class="line"><span style="color:#A6ACCD;">    },</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">    setHobby(){</span></span>
<span class="line"><span style="color:#A6ACCD;">      //this.person.hobby[0] = &#39;\u6253\u6E38\u620F&#39; //\u8FD9\u6837\u4E0D\u884C</span></span>
<span class="line"><span style="color:#A6ACCD;">      this.$set(this.person.hobby,0,&#39;\u6253\u6E38\u620F&#39;)</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>\u7528 Object.defineProperty \u6A21\u62DF\u4E00\u4E0B Vue2 \u7684\u54CD\u5E94\u5F0F\uFF1A</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">       let person = {</span></span>
<span class="line"><span style="color:#A6ACCD;">            name:&quot;\u5F20\u4E09&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">            age:18</span></span>
<span class="line"><span style="color:#A6ACCD;">        }</span></span>
<span class="line"><span style="color:#A6ACCD;">        //\u6A21\u62DFvue2\u5B9E\u73B0\u54CD\u5E94\u5F0F</span></span>
<span class="line"><span style="color:#A6ACCD;">        Object.defineProperty(person,&quot;name&quot;,{</span></span>
<span class="line"><span style="color:#A6ACCD;">            configurable:true,</span></span>
<span class="line"><span style="color:#A6ACCD;">            get() {</span></span>
<span class="line"><span style="color:#A6ACCD;">                return person.name</span></span>
<span class="line"><span style="color:#A6ACCD;">            },</span></span>
<span class="line"><span style="color:#A6ACCD;">            set(v) {</span></span>
<span class="line"><span style="color:#A6ACCD;">                person.name = v</span></span>
<span class="line"><span style="color:#A6ACCD;">                ...</span></span>
<span class="line"><span style="color:#A6ACCD;">            }</span></span>
<span class="line"><span style="color:#A6ACCD;">        })</span></span>
<span class="line"><span style="color:#A6ACCD;">        Object.defineProperty(p,&quot;age&quot;,{</span></span>
<span class="line"><span style="color:#A6ACCD;">            get() {</span></span>
<span class="line"><span style="color:#A6ACCD;">                return person.age</span></span>
<span class="line"><span style="color:#A6ACCD;">            },</span></span>
<span class="line"><span style="color:#A6ACCD;">            set(v) {</span></span>
<span class="line"><span style="color:#A6ACCD;">                person.age = v</span></span>
<span class="line"><span style="color:#A6ACCD;">                ...</span></span>
<span class="line"><span style="color:#A6ACCD;">            }</span></span>
<span class="line"><span style="color:#A6ACCD;">        })</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>\u5F88\u663E\u7136\uFF0C\u53EA\u5BF9 name \u548C age \u505A\u4E86\u54CD\u5E94\u5F0F\u7684\u5904\u7406\uFF0C\u7136\u800C\u65B0\u589E\u7684 sex \u5C5E\u6027\uFF0C\u5E76\u4E0D\u662F\u54CD\u5E94\u5F0F\u7684\uFF0C\u5E76\u4E14\u5220\u9664 name \u6216\u8005 age \u5C5E\u6027\u4E5F\u65E0\u6CD5\u76D1\u6D4B\u3002\u6240\u4EE5\u53EA\u80FD\u7528 Vue2 \u63D0\u4F9B\u7684$set\u548C$delete \u65B9\u6CD5\u624D\u80FD\u76D1\u6D4B\u5230\u65B0\u589E\u6216\u8005\u5220\u9664\u5C5E\u6027\u7684\u52A8\u4F5C\u3002</p><h2 id="vue3-\u54CD\u5E94\u5F0F" tabindex="-1">Vue3 \u54CD\u5E94\u5F0F <a class="header-anchor" href="#vue3-\u54CD\u5E94\u5F0F" aria-hidden="true">#</a></h2><p><strong>\u5B9E\u73B0\u539F\u7406</strong></p><ul><li>\u901A\u8FC7 Proxy \u62E6\u622A\u5BF9\u8C61\u4E2D\u4EFB\u610F\u5C5E\u6027\u7684\u53D8\u5316\uFF0C\u5305\u62EC\u5C5E\u6027\u503C\u7684\u8BFB\u5199\u3001\u6DFB\u52A0\u3001\u5220\u9664\u7B49</li><li>\u901A\u8FC7 Reflect \u5BF9\u6E90\u5BF9\u8C61\u7684\u5C5E\u6027\u64CD\u4F5C</li></ul><p><em>Proxy \u8D1F\u8D23\u76D1\u542C\uFF0CReflect \u8D1F\u8D23\u64CD\u4F5C\u5BF9\u8C61</em></p><p>Vue3 \u4E2D\u4FEE\u6539\u5BF9\u8C61\u548C\u6570\u7EC4\u53EF\u4EE5\u7528\u5E38\u89C4\u7684\u5199\u6CD5,\u5728 Vue2 \u4E2D\u7684\u793A\u4F8B\u4E2D\u6807\u6CE8&quot;\u8FD9\u6837\u4E0D\u884C&quot;\u7684\u5730\u65B9\u5728 Vue3 \u4E2D\u90FD\u662F\u6709\u6548\u7684\u3002</p><p>\u6A21\u62DF\u4E00\u4E0B Vue3 \u7684\u54CD\u5E94\u5F0F\uFF1A</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">    let person = {</span></span>
<span class="line"><span style="color:#A6ACCD;">        name:&quot;\u5F20\u4E09&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">        age:18</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">    const p = new Proxy(person,{</span></span>
<span class="line"><span style="color:#A6ACCD;">        get(target, p, receiver) {</span></span>
<span class="line"><span style="color:#A6ACCD;">            return Reflect.get(target,p)</span></span>
<span class="line"><span style="color:#A6ACCD;">        },</span></span>
<span class="line"><span style="color:#A6ACCD;">        set(target, p, value, receiver) {</span></span>
<span class="line"><span style="color:#A6ACCD;">            Reflect.set(target,p,value)</span></span>
<span class="line"><span style="color:#A6ACCD;">        },</span></span>
<span class="line"><span style="color:#A6ACCD;">        deleteProperty(target, p) {</span></span>
<span class="line"><span style="color:#A6ACCD;">            return Reflect.deleteProperty(target,p)</span></span>
<span class="line"><span style="color:#A6ACCD;">        }</span></span>
<span class="line"><span style="color:#A6ACCD;">    })</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>\u5728\u5BF9\u8C61\u88AB\u4FEE\u6539\u3001\u5220\u9664\u65F6\u90FD\u4F1A\u76D1\u6D4B\u5230</p><p><strong>\u4E3A\u4EC0\u4E48\u91C7\u7528 Reflect</strong></p><p>\u89C1\u53E6\u4E00\u7BC7\u6587\u7AE0\u8BE6\u7EC6\u4ECB\u7ECD ES6 <a href="https://suprememonster.github.io/articles/javascript/Reflect.html" target="_blank" rel="noreferrer">Reflect</a>;</p>`,23),o=[l];function t(c,r,A,C,i,y){return a(),n("div",null,o)}const d=s(p,[["render",t]]);export{D as __pageData,d as default};
