import{_ as s,c as n,o as a,a as e}from"./app.437f86da.js";const y=JSON.parse('{"title":"\u914D\u7F6EOpen-In-Editor \uFF08\u53F3\u51FB\u7EC4\u4EF6\u5FEB\u901F\u5728vscode\u4E2D\u6253\u5F00\u6E90\u7801\uFF09","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u4E00\u3001\u6839\u636E\u7EC4\u4EF6name\u5339\u914D","slug":"\u4E00\u3001\u6839\u636E\u7EC4\u4EF6name\u5339\u914D","link":"#\u4E00\u3001\u6839\u636E\u7EC4\u4EF6name\u5339\u914D","children":[{"level":3,"title":"Step1  install","slug":"step1-install","link":"#step1-install","children":[]},{"level":3,"title":"Step2 devserver\u914D\u7F6E","slug":"step2-devserver\u914D\u7F6E","link":"#step2-devserver\u914D\u7F6E","children":[]},{"level":3,"title":"Step3 angular.json\u8C03\u6574","slug":"step3-angular-json\u8C03\u6574","link":"#step3-angular-json\u8C03\u6574","children":[]},{"level":3,"title":"Step4 \u6D4B\u8BD5","slug":"step4-\u6D4B\u8BD5","link":"#step4-\u6D4B\u8BD5","children":[]},{"level":3,"title":"Step5 \u4F7F\u7528","slug":"step5-\u4F7F\u7528","link":"#step5-\u4F7F\u7528","children":[]}]},{"level":2,"title":"\u4E8C\u3001\u6839\u636E\u7EC4\u4EF6\u8DEF\u5F84\u5339\u914D","slug":"\u4E8C\u3001\u6839\u636E\u7EC4\u4EF6\u8DEF\u5F84\u5339\u914D","link":"#\u4E8C\u3001\u6839\u636E\u7EC4\u4EF6\u8DEF\u5F84\u5339\u914D","children":[{"level":3,"title":"Step1","slug":"step1","link":"#step1","children":[]},{"level":3,"title":"Step2","slug":"step2","link":"#step2","children":[]},{"level":3,"title":"Step3 extra-webpack.config.js\u540C\u7EA7\u65B0\u5EFAadd-location.js","slug":"step3-extra-webpack-config-js\u540C\u7EA7\u65B0\u5EFAadd-location-js","link":"#step3-extra-webpack-config-js\u540C\u7EA7\u65B0\u5EFAadd-location-js","children":[]},{"level":3,"title":"Step4 angular.json","slug":"step4-angular-json","link":"#step4-angular-json","children":[]},{"level":3,"title":"Step5 app.component.ts","slug":"step5-app-component-ts","link":"#step5-app-component-ts","children":[]}]},{"level":2,"title":"\u4E09\u3001\u603B\u7ED3","slug":"\u4E09\u3001\u603B\u7ED3","link":"#\u4E09\u3001\u603B\u7ED3","children":[]}],"relativePath":"articles/angular/open-in-editor.md"}'),l={name:"articles/angular/open-in-editor.md"},p=e(`<h1 id="\u914D\u7F6Eopen-in-editor-\uFF08\u53F3\u51FB\u7EC4\u4EF6\u5FEB\u901F\u5728vscode\u4E2D\u6253\u5F00\u6E90\u7801\uFF09" tabindex="-1">\u914D\u7F6EOpen-In-Editor \uFF08\u53F3\u51FB\u7EC4\u4EF6\u5FEB\u901F\u5728vscode\u4E2D\u6253\u5F00\u6E90\u7801\uFF09 <a class="header-anchor" href="#\u914D\u7F6Eopen-in-editor-\uFF08\u53F3\u51FB\u7EC4\u4EF6\u5FEB\u901F\u5728vscode\u4E2D\u6253\u5F00\u6E90\u7801\uFF09" aria-hidden="true">#</a></h1><h2 id="\u4E00\u3001\u6839\u636E\u7EC4\u4EF6name\u5339\u914D" tabindex="-1">\u4E00\u3001\u6839\u636E\u7EC4\u4EF6name\u5339\u914D <a class="header-anchor" href="#\u4E00\u3001\u6839\u636E\u7EC4\u4EF6name\u5339\u914D" aria-hidden="true">#</a></h2><h3 id="step1-install" tabindex="-1">Step1 install <a class="header-anchor" href="#step1-install" aria-hidden="true">#</a></h3><p><strong>\u6CE8\u610F\u4E00\u4E0B\u7248\u672C\uFF0C1.0.5\u4E4B\u524D \u53EA\u652F\u6301\u6839\u636Ename\u5339\u914D\uFF0C1.0.5\u652F\u6301\u8DEF\u5F84\u548Cname\u5339\u914D\uFF0CopenInEditor\u65B9\u6CD5\u7B2C\u4E8C\u4E2A\u53C2\u6570\u4E3A\u201Cpath\u201D\u6216\u201Cname\u201D</strong></p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">   npm install ng-devtools-open-editor-middleware@1.0.5 -d </span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h3 id="step2-devserver\u914D\u7F6E" tabindex="-1">Step2 devserver\u914D\u7F6E <a class="header-anchor" href="#step2-devserver\u914D\u7F6E" aria-hidden="true">#</a></h3><p>\u770B\u4E0B\u4F60\u7684\u9879\u76EE\u662F\u5426\u652F\u6301\u81EA\u5B9A\u4E49webpack\uFF0C\u5982\u679C\u6CA1\u6709\u9700\u8981\u81EA\u884C\u914D\u7F6E\uFF0C\uFF08Cxcloud\u5927\u90E8\u5206\u662F\u6709\u7684\uFF09\uFF0C\u5728extra-webpack.config.js\u91CC\u6DFB\u52A0devServer\u5982\u4E0B\u914D\u7F6E\uFF1A</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">const openInEditor = require(&quot;ng-devtools-open-editor-middleware&quot;);</span></span>
<span class="line"><span style="color:#A6ACCD;">....</span></span>
<span class="line"><span style="color:#A6ACCD;">....</span></span>
<span class="line"><span style="color:#A6ACCD;">module.exports = {</span></span>
<span class="line"><span style="color:#A6ACCD;">    devServer: {</span></span>
<span class="line"><span style="color:#A6ACCD;">    // Webpack5\u4EE5\u4E0B</span></span>
<span class="line"><span style="color:#A6ACCD;">        before(app) {</span></span>
<span class="line"><span style="color:#A6ACCD;">            app.use(&quot;/__open-in-editor&quot;, openInEditor(&quot;code&quot;));</span></span>
<span class="line"><span style="color:#A6ACCD;">        },  </span></span>
<span class="line"><span style="color:#A6ACCD;">    // Webpack5 </span></span>
<span class="line"><span style="color:#A6ACCD;">      setupMiddlewares: (middlewares, devServer) =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">            middlewares.unshift({</span></span>
<span class="line"><span style="color:#A6ACCD;">                name: &quot;open-editor&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">                path: &quot;/__open-in-editor&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">                middleware: openInEditor(&quot;code&quot;,&quot;name&quot;),</span></span>
<span class="line"><span style="color:#A6ACCD;">            });</span></span>
<span class="line"><span style="color:#A6ACCD;">            return middlewares;</span></span>
<span class="line"><span style="color:#A6ACCD;">        },</span></span>
<span class="line"><span style="color:#A6ACCD;">    },</span></span>
<span class="line"><span style="color:#A6ACCD;">    module: {</span></span>
<span class="line"><span style="color:#A6ACCD;">       ...</span></span>
<span class="line"><span style="color:#A6ACCD;">    },</span></span>
<span class="line"><span style="color:#A6ACCD;">};</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h3 id="step3-angular-json\u8C03\u6574" tabindex="-1">Step3 angular.json\u8C03\u6574 <a class="header-anchor" href="#step3-angular-json\u8C03\u6574" aria-hidden="true">#</a></h3><p>\u9700\u8981\u5728angular.json\u4E2D\u627E\u5230\u5982\u4E0B\u914D\u7F6E\uFF0C\u6DFB\u52A0 &quot;devServer&quot;: &quot;prepend&quot;\uFF1A</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">   &quot;build&quot;:{</span></span>
<span class="line"><span style="color:#A6ACCD;">       ...</span></span>
<span class="line"><span style="color:#A6ACCD;">       &quot;options&quot;:{</span></span>
<span class="line"><span style="color:#A6ACCD;">           &quot;customWebpackConfig&quot;: {</span></span>
<span class="line"><span style="color:#A6ACCD;">              &quot;path&quot;: &quot;./extra-webpack.config.js&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">              &quot;mergeStrategies&quot;: {</span></span>
<span class="line"><span style="color:#A6ACCD;">                &quot;devServer&quot;: &quot;prepend&quot;  //\u6DFB\u52A0\u8FD9\u4E00\u884C</span></span>
<span class="line"><span style="color:#A6ACCD;">                &quot;module&quot;:{</span></span>
<span class="line"><span style="color:#A6ACCD;">                    rules&quot;: &quot;append&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">                }</span></span>
<span class="line"><span style="color:#A6ACCD;">              },</span></span>
<span class="line"><span style="color:#A6ACCD;">              &quot;replaceDuplicatePlugins&quot;: true</span></span>
<span class="line"><span style="color:#A6ACCD;">            }, </span></span>
<span class="line"><span style="color:#A6ACCD;">       }</span></span>
<span class="line"><span style="color:#A6ACCD;">   }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h3 id="step4-\u6D4B\u8BD5" tabindex="-1">Step4 \u6D4B\u8BD5 <a class="header-anchor" href="#step4-\u6D4B\u8BD5" aria-hidden="true">#</a></h3><p>\u5728\u5E94\u7528\u7684app.component.ts\u4E2D\u6DFB\u52A0\u5982\u4E0B\uFF1A</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">    openSourceInEditor($event) {</span></span>
<span class="line"><span style="color:#A6ACCD;">        if (environment.production) return;</span></span>
<span class="line"><span style="color:#A6ACCD;">        $event.preventDefault();</span></span>
<span class="line"><span style="color:#A6ACCD;">        const path = $event.path;</span></span>
<span class="line"><span style="color:#A6ACCD;">        let componentName = &#39;&#39;;</span></span>
<span class="line"><span style="color:#A6ACCD;">        for (let i = 0; i &lt; path.length; i++) {</span></span>
<span class="line"><span style="color:#A6ACCD;">            const { localName } = path[i];</span></span>
<span class="line"><span style="color:#A6ACCD;">            if (localName &amp;&amp; localName.indexOf(&#39;app-&#39;) &gt;= 0) {</span></span>
<span class="line"><span style="color:#A6ACCD;">                componentName = localName;</span></span>
<span class="line"><span style="color:#A6ACCD;">                break;</span></span>
<span class="line"><span style="color:#A6ACCD;">            }</span></span>
<span class="line"><span style="color:#A6ACCD;">        }</span></span>
<span class="line"><span style="color:#A6ACCD;">        fetch(\`__open-in-editor?file=\${componentName}\`)</span></span>
<span class="line"><span style="color:#A6ACCD;">            .then((res) =&gt; {})</span></span>
<span class="line"><span style="color:#A6ACCD;">            .catch((err) =&gt; {});</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">      ...</span></span>
<span class="line"><span style="color:#A6ACCD;">      ngOnInit(): void {</span></span>
<span class="line"><span style="color:#A6ACCD;">           ...</span></span>
<span class="line"><span style="color:#A6ACCD;">            const listener = new WeakMap();</span></span>
<span class="line"><span style="color:#A6ACCD;">            listener.set(document.body, this.openSourceInEditor);</span></span>
<span class="line"><span style="color:#A6ACCD;">            document.body.addEventListener(</span></span>
<span class="line"><span style="color:#A6ACCD;">                &#39;contextmenu&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">                listener.get(document.body),</span></span>
<span class="line"><span style="color:#A6ACCD;">                false</span></span>
<span class="line"><span style="color:#A6ACCD;">            );</span></span>
<span class="line"><span style="color:#A6ACCD;">        }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h3 id="step5-\u4F7F\u7528" tabindex="-1">Step5 \u4F7F\u7528 <a class="header-anchor" href="#step5-\u4F7F\u7528" aria-hidden="true">#</a></h3><p>\u91CD\u542F\u9879\u76EE\uFF0C\u53EA\u9700\u8981\u5728\u9875\u9762\u4E0A\u53F3\u51FB\u4F60\u60F3\u6253\u5F00\u7684\u7EC4\u4EF6\uFF0C\u4F1A\u81EA\u52A8\u8DF3\u8F6C\u5230vscode\u4E2D\u5BF9\u5E94\u7684\u7EC4\u4EF6\u6E90\u6587\u4EF6\u3002 \u6CE8\u610Fvscode terminal\u4F1A\u6253\u5370\uFF1A</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">\u6B63\u5728\u67E5\u627E\uFF0C\u8BF7\u7A0D\u7B49...</span></span>
<span class="line"><span style="color:#A6ACCD;">data---&gt; [ ...]</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h2 id="\u4E8C\u3001\u6839\u636E\u7EC4\u4EF6\u8DEF\u5F84\u5339\u914D" tabindex="-1">\u4E8C\u3001\u6839\u636E\u7EC4\u4EF6\u8DEF\u5F84\u5339\u914D <a class="header-anchor" href="#\u4E8C\u3001\u6839\u636E\u7EC4\u4EF6\u8DEF\u5F84\u5339\u914D" aria-hidden="true">#</a></h2><h3 id="step1" tabindex="-1">Step1 <a class="header-anchor" href="#step1" aria-hidden="true">#</a></h3><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">   npm install ng-devtools-open-editor-middleware@1.0.5 -d </span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h3 id="step2" tabindex="-1">Step2 <a class="header-anchor" href="#step2" aria-hidden="true">#</a></h3><p>extra-webpack.config.js</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">const openInEditor = require(&quot;ng-devtools-open-editor-middleware&quot;);</span></span>
<span class="line"><span style="color:#A6ACCD;">....</span></span>
<span class="line"><span style="color:#A6ACCD;">....</span></span>
<span class="line"><span style="color:#A6ACCD;">module.exports = {</span></span>
<span class="line"><span style="color:#A6ACCD;">    resolveLoader: {</span></span>
<span class="line"><span style="color:#A6ACCD;">        alias: {</span></span>
<span class="line"><span style="color:#A6ACCD;">            &quot;add-location&quot;: path.resolve(&quot;./add-location.js&quot;),</span></span>
<span class="line"><span style="color:#A6ACCD;">        },</span></span>
<span class="line"><span style="color:#A6ACCD;">    },</span></span>
<span class="line"><span style="color:#A6ACCD;">    devServer: {</span></span>
<span class="line"><span style="color:#A6ACCD;">    // Webpack5\u4EE5\u4E0B</span></span>
<span class="line"><span style="color:#A6ACCD;">        before(app) {</span></span>
<span class="line"><span style="color:#A6ACCD;">            app.use(&quot;/__open-in-editor&quot;, openInEditor(&quot;code&quot;));</span></span>
<span class="line"><span style="color:#A6ACCD;">        },  </span></span>
<span class="line"><span style="color:#A6ACCD;">    // Webpack5 </span></span>
<span class="line"><span style="color:#A6ACCD;">      setupMiddlewares: (middlewares, devServer) =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">            middlewares.unshift({</span></span>
<span class="line"><span style="color:#A6ACCD;">                name: &quot;open-editor&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">                path: &quot;/__open-in-editor&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">                middleware: openInEditor(&quot;code&quot;,&quot;name&quot;),</span></span>
<span class="line"><span style="color:#A6ACCD;">            });</span></span>
<span class="line"><span style="color:#A6ACCD;">            return middlewares;</span></span>
<span class="line"><span style="color:#A6ACCD;">        },</span></span>
<span class="line"><span style="color:#A6ACCD;">    },</span></span>
<span class="line"><span style="color:#A6ACCD;">    module: {</span></span>
<span class="line"><span style="color:#A6ACCD;">        rules: [</span></span>
<span class="line"><span style="color:#A6ACCD;">            {</span></span>
<span class="line"><span style="color:#A6ACCD;">                test: /\\.ts$/,</span></span>
<span class="line"><span style="color:#A6ACCD;">                use: &quot;add-location&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">                exclude: [/\\.(spec|e2e|service|module)\\.ts$/],</span></span>
<span class="line"><span style="color:#A6ACCD;">            },</span></span>
<span class="line"><span style="color:#A6ACCD;">        ],</span></span>
<span class="line"><span style="color:#A6ACCD;">       ...</span></span>
<span class="line"><span style="color:#A6ACCD;">    },</span></span>
<span class="line"><span style="color:#A6ACCD;">};</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h3 id="step3-extra-webpack-config-js\u540C\u7EA7\u65B0\u5EFAadd-location-js" tabindex="-1">Step3 extra-webpack.config.js\u540C\u7EA7\u65B0\u5EFAadd-location.js <a class="header-anchor" href="#step3-extra-webpack-config-js\u540C\u7EA7\u65B0\u5EFAadd-location-js" aria-hidden="true">#</a></h3><p>add-location.js</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">const path = require(&quot;path&quot;);</span></span>
<span class="line"><span style="color:#A6ACCD;">module.exports = function (source) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    if (source.indexOf(&quot;constructor(&quot;) &gt;= 0) {</span></span>
<span class="line"><span style="color:#A6ACCD;">        const { resourcePath, rootContext } = this;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">        /**add-</span></span>
<span class="line"><span style="color:#A6ACCD;">         * path.relative \u6839\u636E\u5F53\u524Dsrc\u8DEF\u5F84\u5F97\u5230\u6E90\u7801\u7684\u76F8\u5BF9\u8DEF\u5F84</span></span>
<span class="line"><span style="color:#A6ACCD;">         */</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">        const rawShortFilePath = path</span></span>
<span class="line"><span style="color:#A6ACCD;">            .relative(rootContext || process.cwd(), resourcePath)</span></span>
<span class="line"><span style="color:#A6ACCD;">            .replace(/^(\\.\\.[\\/\\\\])+/, &quot;&quot;);</span></span>
<span class="line"><span style="color:#A6ACCD;">        // console.log(&quot;rawShortFilePath&quot;, rawShortFilePath);</span></span>
<span class="line"><span style="color:#A6ACCD;">        source = source.replace(</span></span>
<span class="line"><span style="color:#A6ACCD;">            &quot;constructor&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">            &quot;sourcePath =&#39;&quot; +</span></span>
<span class="line"><span style="color:#A6ACCD;">                rawShortFilePath.replace(/\\\\/g, &quot;/&quot;) +</span></span>
<span class="line"><span style="color:#A6ACCD;">                &quot;&#39;;\\n\\nconstructor&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">        );</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">    return source;</span></span>
<span class="line"><span style="color:#A6ACCD;">};</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h3 id="step4-angular-json" tabindex="-1">Step4 angular.json <a class="header-anchor" href="#step4-angular-json" aria-hidden="true">#</a></h3><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">    &quot;customWebpackConfig&quot;: {</span></span>
<span class="line"><span style="color:#A6ACCD;">      &quot;path&quot;: &quot;./extra-webpack.config.js&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">      &quot;mergeRules&quot;: {</span></span>
<span class="line"><span style="color:#A6ACCD;">        &quot;resolveLoader&quot;: &quot;prepend&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">        &quot;devServer&quot;: &quot;prepend&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">        &quot;module&quot;: {</span></span>
<span class="line"><span style="color:#A6ACCD;">          &quot;rules&quot;: &quot;prepend&quot;   // rules\u6539\u6210prepend</span></span>
<span class="line"><span style="color:#A6ACCD;">        } </span></span>
<span class="line"><span style="color:#A6ACCD;">      },</span></span>
<span class="line"><span style="color:#A6ACCD;">      &quot;replaceDuplicatePlugins&quot;: false  //replaceDuplicatePlugins\u6539\u4E3Afalse</span></span>
<span class="line"><span style="color:#A6ACCD;">    },</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h3 id="step5-app-component-ts" tabindex="-1">Step5 app.component.ts <a class="header-anchor" href="#step5-app-component-ts" aria-hidden="true">#</a></h3><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">    openSourceInEditor($event) {</span></span>
<span class="line"><span style="color:#A6ACCD;">     if (environment.production) return;</span></span>
<span class="line"><span style="color:#A6ACCD;">        $event.preventDefault();</span></span>
<span class="line"><span style="color:#A6ACCD;">        const path = $event.path;</span></span>
<span class="line"><span style="color:#A6ACCD;">        let sourcePath = &#39;&#39;;</span></span>
<span class="line"><span style="color:#A6ACCD;">        for (let i = 0; i &lt; path.length; i++) {</span></span>
<span class="line"><span style="color:#A6ACCD;">            const { localName } = path[i];</span></span>
<span class="line"><span style="color:#A6ACCD;">            if (localName &amp;&amp; localName.indexOf(&#39;app-&#39;) &gt;= 0) {</span></span>
<span class="line"><span style="color:#A6ACCD;">                if (path[i].__ngContext__?.component) {</span></span>
<span class="line"><span style="color:#A6ACCD;">                    sourcePath = path[i].__ngContext__.component.sourcePath;</span></span>
<span class="line"><span style="color:#A6ACCD;">                } else {</span></span>
<span class="line"><span style="color:#A6ACCD;">                    const temp = path[i].__ngContext__.find(</span></span>
<span class="line"><span style="color:#A6ACCD;">                        (e) =&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">                            e &amp;&amp;</span></span>
<span class="line"><span style="color:#A6ACCD;">                            e.sourcePath &amp;&amp;</span></span>
<span class="line"><span style="color:#A6ACCD;">                            e.sourcePath.indexOf(</span></span>
<span class="line"><span style="color:#A6ACCD;">                                \`\${localName.substring(</span></span>
<span class="line"><span style="color:#A6ACCD;">                                    localName.indexOf(&#39;-&#39;) + 1,</span></span>
<span class="line"><span style="color:#A6ACCD;">                                    localName.length - 1</span></span>
<span class="line"><span style="color:#A6ACCD;">                                )}\`</span></span>
<span class="line"><span style="color:#A6ACCD;">                            )</span></span>
<span class="line"><span style="color:#A6ACCD;">                    );</span></span>
<span class="line"><span style="color:#A6ACCD;">                    sourcePath = temp.sourcePath;</span></span>
<span class="line"><span style="color:#A6ACCD;">                }</span></span>
<span class="line"><span style="color:#A6ACCD;">                break;</span></span>
<span class="line"><span style="color:#A6ACCD;">            }</span></span>
<span class="line"><span style="color:#A6ACCD;">        }</span></span>
<span class="line"><span style="color:#A6ACCD;">        fetch(\`__open-in-editor?file=\${sourcePath}\`)</span></span>
<span class="line"><span style="color:#A6ACCD;">            .then((res) =&gt; {})</span></span>
<span class="line"><span style="color:#A6ACCD;">            .catch((err) =&gt; {});</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">      ...</span></span>
<span class="line"><span style="color:#A6ACCD;">      ngOnInit(): void {</span></span>
<span class="line"><span style="color:#A6ACCD;">           ...</span></span>
<span class="line"><span style="color:#A6ACCD;">            const listener = new WeakMap();</span></span>
<span class="line"><span style="color:#A6ACCD;">            listener.set(document.body, this.openSourceInEditor);</span></span>
<span class="line"><span style="color:#A6ACCD;">            document.body.addEventListener(</span></span>
<span class="line"><span style="color:#A6ACCD;">                &#39;contextmenu&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">                listener.get(document.body),</span></span>
<span class="line"><span style="color:#A6ACCD;">                false</span></span>
<span class="line"><span style="color:#A6ACCD;">            );</span></span>
<span class="line"><span style="color:#A6ACCD;">        }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h2 id="\u4E09\u3001\u603B\u7ED3" tabindex="-1">\u4E09\u3001\u603B\u7ED3 <a class="header-anchor" href="#\u4E09\u3001\u603B\u7ED3" aria-hidden="true">#</a></h2><p>\u540C\u6837\u64CD\u4F5C\uFF0C\u524D\u8005\u57FA\u672C\u80FD\u6EE1\u8DB395%\u7684\u573A\u666F\uFF0C\u914D\u7F6E\u4E5F\u7A0D\u5FAE\u7B80\u5355\u70B9\uFF1B\u540E\u8005\u4FDD\u8BC1\u5B58\u5728\u7EC4\u4EF6\u540D\u79F0\u76F8\u540C\u7684\u60C5\u51B5\u4E0B\u80FD\u591F\u6B63\u786E\u6253\u5F00\uFF0C\u4E14\u57FA\u672C\u79D2\u6253\u5F00\uFF0C\u53F3\u952E\u5982\u4F55\u83B7\u53D6\u7EC4\u4EF6\u7684\u5C5E\u6027\u53EF\u4EE5\u8C03\u8BD5\u770B\u4E0B\u3002</p>`,32),o=[p];function t(c,r,i,C,A,d){return a(),n("div",null,o)}const D=s(l,[["render",t]]);export{y as __pageData,D as default};
