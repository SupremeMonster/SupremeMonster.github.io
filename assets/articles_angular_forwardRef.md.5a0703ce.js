import{_ as s,c as a,o as n,a as e}from"./app.9113ee1d.js";const _=JSON.parse('{"title":"ForwardRef","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u7528\u9014","slug":"\u7528\u9014","link":"#\u7528\u9014","children":[]}],"relativePath":"articles/angular/forwardRef.md"}'),l={name:"articles/angular/forwardRef.md"},r=e(`<h1 id="forwardref" tabindex="-1">ForwardRef <a class="header-anchor" href="#forwardref" aria-hidden="true">#</a></h1><h2 id="\u7528\u9014" tabindex="-1">\u7528\u9014 <a class="header-anchor" href="#\u7528\u9014" aria-hidden="true">#</a></h2><p>class \u4E0D\u4F1A\u53D8\u91CF\u63D0\u5347\uFF0C\u5982\u679C\u6211\u5728\u7EC4\u4EF6\u540E\u9762\u52A0\u4E00\u4E2A\u670D\u52A1\uFF0C\u5728 providers \u4E2D\u8BBE\u7F6E\u6CE8\u5165\u63D0\u4F9B\u8005\u5C31\u4F1A\u62A5\u9519\uFF1A Class &#39;NameService&#39; used before its declaration.</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">@Component({</span></span>
<span class="line"><span style="color:#A6ACCD;">    selector: &#39;app-forward-ref&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">    templateUrl: &#39;./forward-ref.component.html&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">    styleUrls: [&#39;./forward-ref.component.scss&#39;],</span></span>
<span class="line"><span style="color:#A6ACCD;">    providers: [</span></span>
<span class="line"><span style="color:#A6ACCD;">        {</span></span>
<span class="line"><span style="color:#A6ACCD;">           provide: NameService,</span></span>
<span class="line"><span style="color:#A6ACCD;">           useClass: NameService</span></span>
<span class="line"><span style="color:#A6ACCD;">        }</span></span>
<span class="line"><span style="color:#A6ACCD;">    ]</span></span>
<span class="line"><span style="color:#A6ACCD;">})</span></span>
<span class="line"><span style="color:#A6ACCD;">export class ForwardRefComponent {}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">@Injectable()</span></span>
<span class="line"><span style="color:#A6ACCD;">class NameService {</span></span>
<span class="line"><span style="color:#A6ACCD;">    name = &#39;why520crazy&#39;;</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>\u89E3\u51B3\u8FD9\u4E2A\u95EE\u9898\u67092\u4E2A\u529E\u6CD5\uFF1A</p><ul><li>\u628A NameService \u79FB\u52A8\u5230 ForwardRefComponent \u200B\u7EC4\u4EF6\u524D</li><li>\u4F7F\u7528 provide: forwardRef(() =&gt; NameService) \u200B forwardRef \u200B\u5B9E\u73B0\u539F\u7406\u5F88\u7B80\u5355\uFF0C\u5C31\u662F\u8BA9 provide \u200B\u5B58\u50A8\u4E00\u4E2A\u95ED\u5305\u7684\u51FD\u6570\uFF0C\u5728\u5B9A\u4E49\u5F0F\u4E0D\u8C03\u7528\uFF0C\u5728\u6CE8\u5165\u7684\u65F6\u5019\u83B7\u53D6 Token \u518D\u8C03\u7528\u95ED\u5305\u51FD\u6570\u8FD4\u56DE NameService \u7684\u7C7B\u578B\uFF0C\u6B64\u65F6 JS \u5DF2\u7ECF\u5B8C\u6574\u6267\u884C\u8FC7\uFF0C NameService \u200B\u5DF2\u7ECF\u5B9A\u4E49\u3002</li></ul>`,6),p=[r];function o(c,t,i,d,C,A){return n(),a("div",null,p)}const m=s(l,[["render",o]]);export{_ as __pageData,m as default};
