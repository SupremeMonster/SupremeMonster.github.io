import{_ as s,c as a,o as n,a as l}from"./app.9113ee1d.js";const g=JSON.parse('{"title":"Angular\u7684pure\u7BA1\u9053\u548Casync\u7BA1\u9053","description":"","frontmatter":{},"headers":[{"level":2,"title":"pure\u5C5E\u6027","slug":"pure\u5C5E\u6027","link":"#pure\u5C5E\u6027","children":[]},{"level":2,"title":"AsyncPipe","slug":"asyncpipe","link":"#asyncpipe","children":[]}],"relativePath":"articles/angular/asyncpipe.md"}'),e={name:"articles/angular/asyncpipe.md"},p=l(`<h1 id="angular\u7684pure\u7BA1\u9053\u548Casync\u7BA1\u9053" tabindex="-1">Angular\u7684pure\u7BA1\u9053\u548Casync\u7BA1\u9053 <a class="header-anchor" href="#angular\u7684pure\u7BA1\u9053\u548Casync\u7BA1\u9053" aria-hidden="true">#</a></h1><h2 id="pure\u5C5E\u6027" tabindex="-1">pure\u5C5E\u6027 <a class="header-anchor" href="#pure\u5C5E\u6027" aria-hidden="true">#</a></h2><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">@Pipe({</span></span>
<span class="line"><span style="color:#A6ACCD;">  name:&#39;xxx&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">  pure:true //default</span></span>
<span class="line"><span style="color:#A6ACCD;">})</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>\u9ED8\u8BA4\u7684\u7BA1\u9053pure\u5C5E\u6027\u4E3Atrue\uFF0C\u5982\u679C\u662Ffalse\uFF0C\u533A\u522B\u5728\u4E8E\uFF1A</p><ul><li>true\u8868\u793A\u7EAF\u51C0\u7BA1\u9053\uFF0C\u53EA\u76D1\u542C<strong>\u57FA\u672C\u7C7B\u578B\u7684\u53C2\u6570\u7684\u53D8\u5316\u6216\u8005\u5F15\u7528\u7C7B\u578B\u5F15\u7528\u7684\u53D8\u5316</strong></li><li>false\u8868\u793A\u975E\u7EAF\u51C0\u7BA1\u9053\uFF0C<strong>\u4E0D\u7BA1\u662F\u57FA\u672C\u7C7B\u578B\u53C2\u6570\u7684\u6539\u53D8\u8FD8\u662F\u5F15\u7528\u7C7B\u578B\u5185\u90E8\u6570\u636E\u53D8\u5316\uFF08\u800C\u975E\u5F15\u7528\u53D8\u5316\uFF09\u90FD\u4F1A\u89E6\u53D1\u7BA1\u9053</strong></li></ul><p>\u6700\u5E38\u89C1\u7684 \u6570\u7EC4\u53D1\u751F\u4E86\u53D8\u5316\u3002</p><h2 id="asyncpipe" tabindex="-1">AsyncPipe <a class="header-anchor" href="#asyncpipe" aria-hidden="true">#</a></h2><p>\u5C01\u88C5Loading \u5B9E\u73B0\u666E\u904D\u8981\u6C42\u7684\u4E09\u79CD\u9875\u9762\u72B6\u6001\uFF08\u65E0\u6570\u636E/\u9519\u8BEF/\u6709\u6570\u636E\uFF09</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">@Pipe({</span></span>
<span class="line"><span style="color:#A6ACCD;">  name: &#39;withLoading&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">})</span></span>
<span class="line"><span style="color:#A6ACCD;">export class WithLoadingPipe implements PipeTransform {</span></span>
<span class="line"><span style="color:#A6ACCD;">  transform(val) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    return isObservable(val)</span></span>
<span class="line"><span style="color:#A6ACCD;">      ? val.pipe(</span></span>
<span class="line"><span style="color:#A6ACCD;">          map((value: any) =&gt; ({ loading: false, value })),</span></span>
<span class="line"><span style="color:#A6ACCD;">          startWith({ loading: true }),</span></span>
<span class="line"><span style="color:#A6ACCD;">          catchError((error) =&gt; of({ loading: false, error }))</span></span>
<span class="line"><span style="color:#A6ACCD;">        )</span></span>
<span class="line"><span style="color:#A6ACCD;">      : val;</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">&lt;div *ngIf=&quot;obs$ | withLoading | async as obs&quot;&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  &lt;ng-template [ngIf]=&quot;obs.value&quot;&gt;Value: {{ obs.value }}&lt;/ng-template&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  &lt;ng-template [ngIf]=&quot;obs.error&quot;&gt;Error {{ obs.error }}&lt;/ng-template&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  &lt;ng-template [ngIf]=&quot;obs.loading&quot;&gt;Loading...&lt;/ng-template&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;/div&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div>`,10),t=[p];function o(r,c,i,A,u,C){return n(),a("div",null,t)}const y=s(e,[["render",o]]);export{g as __pageData,y as default};
