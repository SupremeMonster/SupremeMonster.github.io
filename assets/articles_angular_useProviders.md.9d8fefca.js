import{_ as s,c as a,o as n,a as e}from"./app.9113ee1d.js";const u=JSON.parse('{"title":"useClass\u3001useValue\u3001useFactory","description":"","frontmatter":{},"headers":[{"level":2,"title":"1.\u7C7B\u63D0\u4F9B\u5546 ClassProvider","slug":"_1-\u7C7B\u63D0\u4F9B\u5546-classprovider","link":"#_1-\u7C7B\u63D0\u4F9B\u5546-classprovider","children":[]},{"level":2,"title":"2.\u503C\u63D0\u4F9B\u5546 ValueProvider","slug":"_2-\u503C\u63D0\u4F9B\u5546-valueprovider","link":"#_2-\u503C\u63D0\u4F9B\u5546-valueprovider","children":[]},{"level":2,"title":"3.\u5DE5\u5382\u63D0\u4F9B\u5546 FactoryProvider","slug":"_3-\u5DE5\u5382\u63D0\u4F9B\u5546-factoryprovider","link":"#_3-\u5DE5\u5382\u63D0\u4F9B\u5546-factoryprovider","children":[]}],"relativePath":"articles/angular/useProviders.md"}'),l={name:"articles/angular/useProviders.md"},p=e(`<h1 id="useclass\u3001usevalue\u3001usefactory" tabindex="-1">useClass\u3001useValue\u3001useFactory <a class="header-anchor" href="#useclass\u3001usevalue\u3001usefactory" aria-hidden="true">#</a></h1><h2 id="_1-\u7C7B\u63D0\u4F9B\u5546-classprovider" tabindex="-1">1.\u7C7B\u63D0\u4F9B\u5546 ClassProvider <a class="header-anchor" href="#_1-\u7C7B\u63D0\u4F9B\u5546-classprovider" aria-hidden="true">#</a></h2><p>\u6211\u4EEC\u5E38\u7528\u7684\u63D0\u4F9B\u5546\u914D\u7F6E</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  // ...</span></span>
<span class="line"><span style="color:#A6ACCD;">  providers: [</span></span>
<span class="line"><span style="color:#A6ACCD;">    MessageService</span></span>
<span class="line"><span style="color:#A6ACCD;">  ],</span></span>
<span class="line"><span style="color:#A6ACCD;">  // ...</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>\u5176\u5B9E\u662F\u8FD9\u7C7B\u63D0\u4F9B\u5546\u7684\u7B80\u5199\u5F62\u5F0F</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  // ...</span></span>
<span class="line"><span style="color:#A6ACCD;">  providers: [</span></span>
<span class="line"><span style="color:#A6ACCD;">    {</span></span>
<span class="line"><span style="color:#A6ACCD;">      provide: MessageService,</span></span>
<span class="line"><span style="color:#A6ACCD;">      useClass: MessageService</span></span>
<span class="line"><span style="color:#A6ACCD;">    }	</span></span>
<span class="line"><span style="color:#A6ACCD;">  ]</span></span>
<span class="line"><span style="color:#A6ACCD;">  // ...</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>\u800C\u66FF\u4EE3\u7C7B\u63D0\u4F9B\u5546\u53EF\u4EE5\u8BA9\u4E0D\u540C\u7684\u7C7B\u63D0\u4F9B\u76F8\u540C\u7684\u670D\u52A1\uFF0C\u4F8B\u5982\u6709\u4E2A\u4FE1\u606F\u66F4\u4E3A\u4E30\u5BCC\u7684 NewMessageService \u5C31\u53EF\u4EE5\u5F88\u65B9\u4FBF\u7684\u66FF\u6362\u5C31\u6709\u7684 MessageService\u3002</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  // ...</span></span>
<span class="line"><span style="color:#A6ACCD;">  providers: [</span></span>
<span class="line"><span style="color:#A6ACCD;">    {</span></span>
<span class="line"><span style="color:#A6ACCD;">      provide: MessageService,</span></span>
<span class="line"><span style="color:#A6ACCD;">      useClass: NewMessageService</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">  ]</span></span>
<span class="line"><span style="color:#A6ACCD;">  // ...</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h2 id="_2-\u503C\u63D0\u4F9B\u5546-valueprovider" tabindex="-1">2.\u503C\u63D0\u4F9B\u5546 ValueProvider <a class="header-anchor" href="#_2-\u503C\u63D0\u4F9B\u5546-valueprovider" aria-hidden="true">#</a></h2><p>\u6709\u65F6\u5019\u4E0D\u4E00\u5B9A\u8981\u4ECE\u7C7B\u53BB\u521B\u5EFA\u5BF9\u8C61\uFF0C\u76F4\u63A5\u63D0\u4F9B\u4E00\u4E2A\u73B0\u6709\u7684\u5BF9\u8C61\u4E5F\u53EF\u4EE5\u89E3\u51B3\u95EE\u9898\u3002</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">const MessageServiceValue = {</span></span>
<span class="line"><span style="color:#A6ACCD;">  send: () =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">    console.log(&#39;send message(value provider)&#39;);</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">};</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  // ...</span></span>
<span class="line"><span style="color:#A6ACCD;">  providers: [</span></span>
<span class="line"><span style="color:#A6ACCD;">    {</span></span>
<span class="line"><span style="color:#A6ACCD;">      provide: MessageService,</span></span>
<span class="line"><span style="color:#A6ACCD;">      useValue: MessageServiceValue</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">  ]</span></span>
<span class="line"><span style="color:#A6ACCD;">	// ...</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h2 id="_3-\u5DE5\u5382\u63D0\u4F9B\u5546-factoryprovider" tabindex="-1">3.\u5DE5\u5382\u63D0\u4F9B\u5546 FactoryProvider <a class="header-anchor" href="#_3-\u5DE5\u5382\u63D0\u4F9B\u5546-factoryprovider" aria-hidden="true">#</a></h2><p>\u8FD9\u91CC\u7684\u5DE5\u5382\u5C31\u662F\u6307\u5DE5\u5382\u51FD\u6570\uFF0C\u65E2\u7136\u662F\u51FD\u6570\u65B9\u5F0F\u521B\u5EFA\u5BF9\u8C61\uFF0C\u90A3\u4E48\u5C31\u62E5\u6709\u4E86\u5728\u8FD0\u884C\u671F\u52A8\u6001\u521B\u5EFA\u7684\u80FD\u529B\u3002\u4F8B\u5982\u533A\u5206\u662F\u5426\u662F\u751F\u4EA7\u6A21\u5F0F\u6765\u521B\u5EFA\u4E0D\u540C\u7684\u5BF9\u8C61\u3002</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">const value = () =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">    if (new Date().getTime() % 2 === 0) {</span></span>
<span class="line"><span style="color:#A6ACCD;">        return { test: &#39;odd&#39; };</span></span>
<span class="line"><span style="color:#A6ACCD;">    } else {</span></span>
<span class="line"><span style="color:#A6ACCD;">        return { test: &#39;even&#39; };</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">};</span></span>
<span class="line"><span style="color:#A6ACCD;">@NgModule({</span></span>
<span class="line"><span style="color:#A6ACCD;">    declarations: [HomeComponent],</span></span>
<span class="line"><span style="color:#A6ACCD;">    imports: [CommonModule, SharedModule],</span></span>
<span class="line"><span style="color:#A6ACCD;">    providers: [</span></span>
<span class="line"><span style="color:#A6ACCD;">        {</span></span>
<span class="line"><span style="color:#A6ACCD;">            provide: HomeService,</span></span>
<span class="line"><span style="color:#A6ACCD;">            useFactory: value,</span></span>
<span class="line"><span style="color:#A6ACCD;">        },</span></span>
<span class="line"><span style="color:#A6ACCD;">    ],</span></span>
<span class="line"><span style="color:#A6ACCD;">})</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div>`,14),o=[p];function c(r,i,t,C,A,d){return n(),a("div",null,o)}const D=s(l,[["render",c]]);export{u as __pageData,D as default};
