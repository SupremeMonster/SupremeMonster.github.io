import{_ as s,c as a,o as e,a as n}from"./app.437f86da.js";const A=JSON.parse('{"title":"Angular Cli\u6539\u9020","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u603B\u4F53\u7684\u4ECB\u7ECD","slug":"\u603B\u4F53\u7684\u4ECB\u7ECD","link":"#\u603B\u4F53\u7684\u4ECB\u7ECD","children":[]},{"level":2,"title":"\u9759\u6001\u914D\u7F6E","slug":"\u9759\u6001\u914D\u7F6E","link":"#\u9759\u6001\u914D\u7F6E","children":[]},{"level":2,"title":"\u52A8\u6001\u4EA4\u4E92\u914D\u7F6E","slug":"\u52A8\u6001\u4EA4\u4E92\u914D\u7F6E","link":"#\u52A8\u6001\u4EA4\u4E92\u914D\u7F6E","children":[]},{"level":2,"title":"\u6BCF\u4E2A\u914D\u7F6E\u90FD\u662F\u4E92\u76F8\u9694\u79BB","slug":"\u6BCF\u4E2A\u914D\u7F6E\u90FD\u662F\u4E92\u76F8\u9694\u79BB","link":"#\u6BCF\u4E2A\u914D\u7F6E\u90FD\u662F\u4E92\u76F8\u9694\u79BB","children":[]},{"level":2,"title":"\u6A21\u677F\u6587\u4EF6\u7684\u52A8\u6001\u8868\u8FBE\u5F0F","slug":"\u6A21\u677F\u6587\u4EF6\u7684\u52A8\u6001\u8868\u8FBE\u5F0F","link":"#\u6A21\u677F\u6587\u4EF6\u7684\u52A8\u6001\u8868\u8FBE\u5F0F","children":[]},{"level":2,"title":"\u6A21\u677F\u6587\u4EF6\u662F\u5426\u9700\u8981\u751F\u6210","slug":"\u6A21\u677F\u6587\u4EF6\u662F\u5426\u9700\u8981\u751F\u6210","link":"#\u6A21\u677F\u6587\u4EF6\u662F\u5426\u9700\u8981\u751F\u6210","children":[]}],"relativePath":"articles/angular/cli.md"}'),l={name:"articles/angular/cli.md"},t=n(`<h1 id="angular-cli\u6539\u9020" tabindex="-1">Angular Cli\u6539\u9020 <a class="header-anchor" href="#angular-cli\u6539\u9020" aria-hidden="true">#</a></h1><h2 id="\u603B\u4F53\u7684\u4ECB\u7ECD" tabindex="-1">\u603B\u4F53\u7684\u4ECB\u7ECD <a class="header-anchor" href="#\u603B\u4F53\u7684\u4ECB\u7ECD" aria-hidden="true">#</a></h2><ul><li>\u6838\u5FC3\u51E0\u4E2A\u6A21\u5757 application\u3001workspace\u3001ng-new</li><li>\u6BCF\u4E2A\u6A21\u5757\u4E3B\u8981\u5305\u62EC\uFF1A</li></ul><p>files\u6A21\u677F\uFF0C\u4F8B\u5982\u6211\u4EEC\u65B0\u589Eng g c\u7684\u65F6\u5019\uFF0C\u6211\u4EEC\u9700\u8981\u65B0\u589E\u591A\u4E2A\u6587\u4EF6\uFF08html\uFF0Ccss\uFF0Cts\uFF09 schema(schema.d.ts\uFF0Cschema.js\uFF0Cschema.json) \uFF0C\u5B9A\u4E49\u81EA\u5B9A\u4E49\u914D\u7F6E\u9879\uFF0C\u4F8B\u5982\u65B0\u589Eng g c --skip-test\uFF0C\u8FD9\u4E2AskipTests\u5C31\u662F\u5185\u7F6E\u7684\u914D\u7F6E\uFF0C\u5141\u8BB8\u6211\u4EEC\u5FFD\u7565\u6D4B\u8BD5\u6587\u4EF6 index(index.d.ts\uFF0Cindex.js) \u6838\u5FC3\u5904\u7406\u903B\u8F91\uFF0C\u6839\u636E\u914D\u7F6E\u9700\u8981\u8BBE\u7F6E\u4E00\u4E9B\u4EFB\u52A1\uFF0C\u5982ng new test\u65B0\u589E\u9879\u76EE\u7684\u65F6\u5019\uFF0C\u9ED8\u8BA4\u5B89\u88C5npm\u5305\uFF0C\u8FD9\u91CC\u9762\u5C31\u81EA\u52A8\u65B0\u589ENodePackageInstallTask\u4EFB\u52A1\u6765\u4E0B\u8F7D\u5305</p><h2 id="\u9759\u6001\u914D\u7F6E" tabindex="-1">\u9759\u6001\u914D\u7F6E <a class="header-anchor" href="#\u9759\u6001\u914D\u7F6E" aria-hidden="true">#</a></h2><p>\u6211\u4EEC\u7684\u9879\u76EE\u5927\u591A\u6570\u6CA1\u6709\u5355\u5143\u6D4B\u8BD5\uFF08\u8BF4\u5B9E\u8BDD\u524D\u7AEF\u7684\u7EC4\u4EF6\u7EC6\u7C92\u5EA6\u4E0D\u9AD8\u65F6\uFF0C\u6D4B\u8BD5 = \u6CA1\u6D4B\u8BD5\uFF09\uFF0C\u56E0\u6B64\u6211\u4EEC\u60F3\u8981\u76F4\u63A5\u5FFD\u7565\u6D4B\u8BD5\u7684\u6587\u4EF6\uFF0C\u6709\u51E0\u79CD\u529E\u6CD5\uFF1A</p><ul><li>\u76F4\u63A5ng g c\u7684\u65F6\u5019 --skip-test</li><li>\u5728angular.json\u4E2D\u914D\u7F6E</li></ul><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">&quot;schematics&quot;: {</span></span>
<span class="line"><span style="color:#A6ACCD;">&quot;@schematics/angular:component&quot;: {</span></span>
<span class="line"><span style="color:#A6ACCD;">&quot;style&quot;: &quot;less&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">&quot;skipTests&quot;: true</span></span>
<span class="line"><span style="color:#A6ACCD;">},</span></span>
<span class="line"><span style="color:#A6ACCD;">} // \u4EE5component\u4E3A\u4F8B\uFF0C\u5982\u679Cpipe\u3001service\u7B49\u4E5F\u4E0D\u9700\u8981\uFF0C\u5C31\u6328\u4E2A\u52A0</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>\u56E0\u4E3Aschematics\u7684\u8BBE\u8BA1\u662F\u6309\u7167\u529F\u80FD\u5212\u5206\u7684\uFF0C\u90FD\u662F\u5355\u72EC\u5206\u5F00\u914D\u7F6E\u3002 \u89C2\u5BDF\u4E86\u6E90\u7801\u53D1\u73B0</p><p>\u5982\u679Capplication.skipTests\u8BBE\u7F6E\u672Atrue\uFF0C\u4F1A\u5728angular.json\u4E2D\u663E\u5F0F\u5C06\u51E0\u4E4E\u6240\u6709\u7684angular\u5143\u7D20\u7684skipTests\u90FD\u53D8\u6210true\uFF0C \u56E0\u6B64\uFF0C\u6211\u4EEC\u76F4\u63A5\u5728application\u7684schema.json\u4E2D\u5B9A\u4E49\u5982\u4E0B\uFF1A</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">&quot;skipTests&quot;: {</span></span>
<span class="line"><span style="color:#A6ACCD;">&quot;type&quot;: &quot;boolean&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">&quot;default&quot;: true</span></span>
<span class="line"><span style="color:#A6ACCD;">},</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>\u9ED8\u8BA4\u5C31\u662Ftrue\uFF0C\u8FD9\u6837\u5728\u751F\u6210\u9879\u76EE\u7684\u65F6\u5019\u9ED8\u8BA4\u5C31\u662F\u53BB\u9664\u6D4B\u8BD5\u6587\u4EF6\u3002</p><h2 id="\u52A8\u6001\u4EA4\u4E92\u914D\u7F6E" tabindex="-1">\u52A8\u6001\u4EA4\u4E92\u914D\u7F6E <a class="header-anchor" href="#\u52A8\u6001\u4EA4\u4E92\u914D\u7F6E" aria-hidden="true">#</a></h2><p>\u5F53\u6211\u4EEC\u6267\u884Cng new test\u7684\u65F6\u5019\uFF0C\u5F80\u5F80\u4F1A\u5728\u547D\u4EE4\u884C\u8BA9\u6211\u4EEC\u505A\u4E00\u4E9B\u4EA4\u4E92\uFF0C\u4F8B\u5982\uFF1A</p><ul><li>\u8BE2\u95EE\u4F60\u662F\u5426\u8981\u8DEF\u7531 Y/N</li><li>\u8BE2\u95EE\u4F60\u8981\u7528\u54EA\u79CD\u6837\u5F0F CSS/LESS/SASS/STYLUS \u603B\u7684\u6765\u8BF4\u5C31\u5206\u4E3A\u4E24\u79CD\uFF0Cboolean\u7C7B\u578B\u548Clist\u7C7B\u578B\u4E0A\u4E0B\u9009 \u8FD9\u4E9B\u53EF\u4EE5\u5728schema.json\u4E2D\u5B9A\u4E49\uFF0C\u5982\uFF1A</li></ul><p>\u8FD9\u662Flist\u7C7B\u578B\u7684\uFF0C\u91CD\u70B9\u5173\u6CE8x-prompt\u8FD9\u4E2A\u5C5E\u6027\uFF0C\u8FD9\u4E2A\u5C5E\u6027\u5C31\u662F\u4E13\u95E8\u7528\u6765\u505A\u4EA4\u4E92\u7684\u52A8\u6001\u5C5E\u6027\uFF0Ctype\u4E5F\u5206\u4E3A\u201Dlist\u201C\u548C\u201Dboolean\u201C\uFF0C\u4E5F\u5F88\u7B80\u5355\u3002 \u6211\u4EEC\u62FF\u4E4B\u524D\u505A\u7684open in editor\u529F\u80FD\u505A\u4E2A\u4EA4\u4E92\u5F0F\u5B9E\u9A8C\uFF0C\u6211\u4EEC\u5728ng new\u7684schema.json\u4E2D\u6DFB\u52A0\uFF1A</p><p>type\u4E3A\u201Dboolean\u201C\uFF0C\u7136\u540E\u52A0\u4E2A\u63D0\u793A\uFF0C\u91CD\u65B0ng new test4\uFF0C\u5C31\u5F97\u5230\u4E86\u60F3\u8981\u7684\u6548\u679C\u3002</p><h2 id="\u6BCF\u4E2A\u914D\u7F6E\u90FD\u662F\u4E92\u76F8\u9694\u79BB" tabindex="-1">\u6BCF\u4E2A\u914D\u7F6E\u90FD\u662F\u4E92\u76F8\u9694\u79BB <a class="header-anchor" href="#\u6BCF\u4E2A\u914D\u7F6E\u90FD\u662F\u4E92\u76F8\u9694\u79BB" aria-hidden="true">#</a></h2><p>\u503C\u5F97\u6CE8\u610F\u7684\u662F\uFF0C\u6BCF\u4E2A\u6A21\u5757\u7684options\u90FD\u662F\u5B8C\u5168\u9694\u79BB\u7684\uFF0C\u5B83\u5E76\u4E0D\u662F\u4E00\u4E2A\u5168\u5C40\u7684\u53D8\u91CF\uFF0C\u4E5F\u5F88\u597D\u7406\u89E3\uFF0C\u6211\u4EECng new test\u548Cng g c\u7684\u914D\u7F6E\u53C2\u6570\u80AF\u5B9A\u662F\u4E0D\u4E00\u6837\u7684\u3002\u5728\u96C6\u6210open in source\u529F\u80FD\u7684\u8FC7\u7A0B\u4E2D\uFF0C\u6211\u65E2\u8981\u6539\u52A8angular.json\uFF0C\u4E5F\u8981\u6539\u52A8app.component.ts\uFF0C\u5B83\u4EEC\u5C5E\u4E8E\u4E0D\u540C\u7684\u6A21\u5757\uFF0C\u4E5F\u5C31\u662F\uFF0C\u6211\u5728ng new\u7684\u65F6\u5019\uFF0C\u6211\u5E0C\u671B\u6211\u7684\u4EA4\u4E92\u53C2\u6570\uFF08skipOpenInEditor\uFF09\u80FD\u4F5C\u7528\u5230application\u4EE5\u53CAworkspace</p><h2 id="\u6A21\u677F\u6587\u4EF6\u7684\u52A8\u6001\u8868\u8FBE\u5F0F" tabindex="-1">\u6A21\u677F\u6587\u4EF6\u7684\u52A8\u6001\u8868\u8FBE\u5F0F <a class="header-anchor" href="#\u6A21\u677F\u6587\u4EF6\u7684\u52A8\u6001\u8868\u8FBE\u5F0F" aria-hidden="true">#</a></h2><p>\u6BCF\u4E2A\u6A21\u677F\u6587\u4EF6\u4E5F\u90FD\u6709\u57FA\u4E8E\u4E00\u5957\u89C4\u5219\u7684\u8868\u8FBE\u5F0F\u5199\u6CD5\uFF0C\u5927\u6982\u957F\u5F97\u662F\u8FD9\u6837\uFF1A</p><p>\u4E3B\u8981\u5C31\u662F\u5173\u4E8E\u53D8\u91CF\u7684\u5224\u65AD</p><h2 id="\u6A21\u677F\u6587\u4EF6\u662F\u5426\u9700\u8981\u751F\u6210" tabindex="-1">\u6A21\u677F\u6587\u4EF6\u662F\u5426\u9700\u8981\u751F\u6210 <a class="header-anchor" href="#\u6A21\u677F\u6587\u4EF6\u662F\u5426\u9700\u8981\u751F\u6210" aria-hidden="true">#</a></h2><p>open souce in editor\u4F9D\u8D56\u4E8Ewebpack\u81EA\u5B9A\u4E49\u914D\u7F6E\uFF0C\u56E0\u6B64\u6211\u4EEC\u9700\u8981\u5728workspace\u52A0\u4E0A\u51E0\u4E2A\u81EA\u5B9A\u4E49\u7684\u6587\u4EF6\uFF0C\u90A3\u4E48\u5F53\u6211\u4EEC\u4E0D\u9700\u8981\u7684\u65F6\u5019\uFF0C\u6211\u4EEC\u53C8\u4E0D\u80FD\u8BA9\u4ED6\u4EEC\u751F\u6210\u3002</p>`,24),p=[t];function i(o,c,r,d,u,h){return e(),a("div",null,p)}const C=s(l,[["render",i]]);export{A as __pageData,C as default};