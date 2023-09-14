import{_ as s,o as n,c as a,Q as p}from"./chunks/framework.ca65985f.js";const u=JSON.parse('{"title":"响应结构","description":"","frontmatter":{"outline":"deep"},"headers":[],"relativePath":"axios/res-schema.md","filePath":"axios/res-schema.md","lastUpdated":1694656397000}'),l={name:"axios/res-schema.md"},e=p(`<h1 id="响应结构" tabindex="-1">响应结构 <a class="header-anchor" href="#响应结构" aria-label="Permalink to &quot;响应结构&quot;">​</a></h1><p>一个请求的响应包含以下信息。</p><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">{</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// \`data\` 由服务器提供的响应</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">data</span><span style="color:#E1E4E8;">: {},</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// \`status\` 来自服务器响应的 HTTP 状态码</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">status</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">200</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// \`statusText\` 来自服务器响应的 HTTP 状态信息</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">statusText</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&#39;OK&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// \`headers\` 是服务器响应头</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// 所有的 header 名称都是小写，而且可以使用方括号语法访问</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// 例如: \`response.headers[&#39;content-type&#39;]\`</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">headers</span><span style="color:#E1E4E8;">: {},</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// \`config\` 是 \`axios\` 请求的配置信息</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">config</span><span style="color:#E1E4E8;">: {},</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// \`request\` 是生成此响应的请求</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// 在node.js中它是最后一个ClientRequest实例 (in redirects)，</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// 在浏览器中则是 XMLHttpRequest 实例</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">request</span><span style="color:#E1E4E8;">: {}</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">{</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// \`data\` 由服务器提供的响应</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">data</span><span style="color:#24292E;">: {},</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// \`status\` 来自服务器响应的 HTTP 状态码</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">status</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">200</span><span style="color:#24292E;">,</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// \`statusText\` 来自服务器响应的 HTTP 状态信息</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">statusText</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&#39;OK&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// \`headers\` 是服务器响应头</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// 所有的 header 名称都是小写，而且可以使用方括号语法访问</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// 例如: \`response.headers[&#39;content-type&#39;]\`</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">headers</span><span style="color:#24292E;">: {},</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// \`config\` 是 \`axios\` 请求的配置信息</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">config</span><span style="color:#24292E;">: {},</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// \`request\` 是生成此响应的请求</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// 在node.js中它是最后一个ClientRequest实例 (in redirects)，</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// 在浏览器中则是 XMLHttpRequest 实例</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">request</span><span style="color:#24292E;">: {}</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><p>当使用 <code>then</code> 时，您将接收如下响应:</p><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">axios.</span><span style="color:#B392F0;">get</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;/user/12345&#39;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">  .</span><span style="color:#B392F0;">then</span><span style="color:#E1E4E8;">(</span><span style="color:#F97583;">function</span><span style="color:#E1E4E8;"> (</span><span style="color:#FFAB70;">response</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">    console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(response.data)</span></span>
<span class="line"><span style="color:#E1E4E8;">    console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(response.status)</span></span>
<span class="line"><span style="color:#E1E4E8;">    console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(response.statusText)</span></span>
<span class="line"><span style="color:#E1E4E8;">    console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(response.headers)</span></span>
<span class="line"><span style="color:#E1E4E8;">    console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(response.config)</span></span>
<span class="line"><span style="color:#E1E4E8;">  })</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">axios.</span><span style="color:#6F42C1;">get</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;/user/12345&#39;</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;">  .</span><span style="color:#6F42C1;">then</span><span style="color:#24292E;">(</span><span style="color:#D73A49;">function</span><span style="color:#24292E;"> (</span><span style="color:#E36209;">response</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">    console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(response.data)</span></span>
<span class="line"><span style="color:#24292E;">    console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(response.status)</span></span>
<span class="line"><span style="color:#24292E;">    console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(response.statusText)</span></span>
<span class="line"><span style="color:#24292E;">    console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(response.headers)</span></span>
<span class="line"><span style="color:#24292E;">    console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(response.config)</span></span>
<span class="line"><span style="color:#24292E;">  })</span></span></code></pre></div><p>当使用 <code>catch</code> ，或者传递一个<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/then" target="_blank" rel="noreferrer">rejection callback</a> 作为 <code>then</code> 的第二个参数时，响应可以通过 <code>error</code> 对象被使用，正如在<a href="./handling-errors">错误处理</a>部分解释的那样。</p>`,6),o=[e];function c(t,r,E,y,i,d){return n(),a("div",null,o)}const F=s(l,[["render",c]]);export{u as __pageData,F as default};
