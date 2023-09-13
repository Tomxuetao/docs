import{_ as s,o as a,c as n,Q as p}from"./chunks/framework.ca65985f.js";const u=JSON.parse('{"title":"POST 请求","description":"","frontmatter":{"outline":"deep"},"headers":[],"relativePath":"views/axios/post-example.md","filePath":"views/axios/post-example.md","lastUpdated":1694601679000}'),l={name:"views/axios/post-example.md"},o=p(`<h1 id="post-请求" tabindex="-1">POST 请求 <a class="header-anchor" href="#post-请求" aria-label="Permalink to &quot;POST 请求&quot;">​</a></h1><p>用Axios如何发起 <code>POST</code> 请求</p><h2 id="发起一个-post-请求" tabindex="-1">发起一个 POST 请求 <a class="header-anchor" href="#发起一个-post-请求" aria-label="Permalink to &quot;发起一个 POST 请求&quot;">​</a></h2><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">axios.</span><span style="color:#B392F0;">post</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;/user&#39;</span><span style="color:#E1E4E8;">, {</span></span>
<span class="line"><span style="color:#E1E4E8;">  firstName: </span><span style="color:#9ECBFF;">&#39;Fred&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  lastName: </span><span style="color:#9ECBFF;">&#39;Flintstone&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">})</span></span>
<span class="line"><span style="color:#E1E4E8;">  .</span><span style="color:#B392F0;">then</span><span style="color:#E1E4E8;">(</span><span style="color:#F97583;">function</span><span style="color:#E1E4E8;"> (</span><span style="color:#FFAB70;">response</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">    console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(response);</span></span>
<span class="line"><span style="color:#E1E4E8;">  })</span></span>
<span class="line"><span style="color:#E1E4E8;">  .</span><span style="color:#B392F0;">catch</span><span style="color:#E1E4E8;">(</span><span style="color:#F97583;">function</span><span style="color:#E1E4E8;"> (</span><span style="color:#FFAB70;">error</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">    console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(error);</span></span>
<span class="line"><span style="color:#E1E4E8;">  });</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">axios.</span><span style="color:#6F42C1;">post</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;/user&#39;</span><span style="color:#24292E;">, {</span></span>
<span class="line"><span style="color:#24292E;">  firstName: </span><span style="color:#032F62;">&#39;Fred&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  lastName: </span><span style="color:#032F62;">&#39;Flintstone&#39;</span></span>
<span class="line"><span style="color:#24292E;">})</span></span>
<span class="line"><span style="color:#24292E;">  .</span><span style="color:#6F42C1;">then</span><span style="color:#24292E;">(</span><span style="color:#D73A49;">function</span><span style="color:#24292E;"> (</span><span style="color:#E36209;">response</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">    console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(response);</span></span>
<span class="line"><span style="color:#24292E;">  })</span></span>
<span class="line"><span style="color:#24292E;">  .</span><span style="color:#6F42C1;">catch</span><span style="color:#24292E;">(</span><span style="color:#D73A49;">function</span><span style="color:#24292E;"> (</span><span style="color:#E36209;">error</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">    console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(error);</span></span>
<span class="line"><span style="color:#24292E;">  });</span></span></code></pre></div><h2 id="发起多个并发请求" tabindex="-1">发起多个并发请求 <a class="header-anchor" href="#发起多个并发请求" aria-label="Permalink to &quot;发起多个并发请求&quot;">​</a></h2><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">function</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">getUserAccount</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> axios.</span><span style="color:#B392F0;">get</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;/user/12345&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">function</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">getUserPermissions</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> axios.</span><span style="color:#B392F0;">get</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;/user/12345/permissions&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> [</span><span style="color:#79B8FF;">acct</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">perm</span><span style="color:#E1E4E8;">] </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">await</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">Promise</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">all</span><span style="color:#E1E4E8;">([</span><span style="color:#B392F0;">getUserAccount</span><span style="color:#E1E4E8;">(), </span><span style="color:#B392F0;">getUserPermissions</span><span style="color:#E1E4E8;">()]);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// OR</span></span>
<span class="line"></span>
<span class="line"><span style="color:#79B8FF;">Promise</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">all</span><span style="color:#E1E4E8;">([</span><span style="color:#B392F0;">getUserAccount</span><span style="color:#E1E4E8;">(), </span><span style="color:#B392F0;">getUserPermissions</span><span style="color:#E1E4E8;">()])</span></span>
<span class="line"><span style="color:#E1E4E8;">  .</span><span style="color:#B392F0;">then</span><span style="color:#E1E4E8;">(</span><span style="color:#F97583;">function</span><span style="color:#E1E4E8;"> ([</span><span style="color:#FFAB70;">acct</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">perm</span><span style="color:#E1E4E8;">]) {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// ...</span></span>
<span class="line"><span style="color:#E1E4E8;">  });</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">function</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">getUserAccount</span><span style="color:#24292E;">() {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> axios.</span><span style="color:#6F42C1;">get</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;/user/12345&#39;</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">function</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">getUserPermissions</span><span style="color:#24292E;">() {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> axios.</span><span style="color:#6F42C1;">get</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;/user/12345/permissions&#39;</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> [</span><span style="color:#005CC5;">acct</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">perm</span><span style="color:#24292E;">] </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">await</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">Promise</span><span style="color:#24292E;">.</span><span style="color:#6F42C1;">all</span><span style="color:#24292E;">([</span><span style="color:#6F42C1;">getUserAccount</span><span style="color:#24292E;">(), </span><span style="color:#6F42C1;">getUserPermissions</span><span style="color:#24292E;">()]);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// OR</span></span>
<span class="line"></span>
<span class="line"><span style="color:#005CC5;">Promise</span><span style="color:#24292E;">.</span><span style="color:#6F42C1;">all</span><span style="color:#24292E;">([</span><span style="color:#6F42C1;">getUserAccount</span><span style="color:#24292E;">(), </span><span style="color:#6F42C1;">getUserPermissions</span><span style="color:#24292E;">()])</span></span>
<span class="line"><span style="color:#24292E;">  .</span><span style="color:#6F42C1;">then</span><span style="color:#24292E;">(</span><span style="color:#D73A49;">function</span><span style="color:#24292E;"> ([</span><span style="color:#E36209;">acct</span><span style="color:#24292E;">, </span><span style="color:#E36209;">perm</span><span style="color:#24292E;">]) {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// ...</span></span>
<span class="line"><span style="color:#24292E;">  });</span></span></code></pre></div><h2 id="将-html-form-转换成-json-进行请求" tabindex="-1">将 HTML Form 转换成 JSON 进行请求 <a class="header-anchor" href="#将-html-form-转换成-json-进行请求" aria-label="Permalink to &quot;将 HTML Form 转换成 JSON 进行请求&quot;">​</a></h2><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> { </span><span style="color:#79B8FF;">data</span><span style="color:#E1E4E8;"> } </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">await</span><span style="color:#E1E4E8;"> axios.</span><span style="color:#B392F0;">post</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;/user&#39;</span><span style="color:#E1E4E8;">, document.</span><span style="color:#B392F0;">querySelector</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;#my-form&#39;</span><span style="color:#E1E4E8;">), {</span></span>
<span class="line"><span style="color:#E1E4E8;">  headers: {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#9ECBFF;">&#39;Content-Type&#39;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&#39;application/json&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">})</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> { </span><span style="color:#005CC5;">data</span><span style="color:#24292E;"> } </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">await</span><span style="color:#24292E;"> axios.</span><span style="color:#6F42C1;">post</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;/user&#39;</span><span style="color:#24292E;">, document.</span><span style="color:#6F42C1;">querySelector</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;#my-form&#39;</span><span style="color:#24292E;">), {</span></span>
<span class="line"><span style="color:#24292E;">  headers: {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#032F62;">&#39;Content-Type&#39;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&#39;application/json&#39;</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"><span style="color:#24292E;">})</span></span></code></pre></div><h2 id="forms" tabindex="-1">Forms <a class="header-anchor" href="#forms" aria-label="Permalink to &quot;Forms&quot;">​</a></h2><h3 id="multipart-multipart-form-data" tabindex="-1">Multipart (<code>multipart/form-data</code>) <a class="header-anchor" href="#multipart-multipart-form-data" aria-label="Permalink to &quot;Multipart (\`multipart/form-data\`)&quot;">​</a></h3><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> { </span><span style="color:#79B8FF;">data</span><span style="color:#E1E4E8;"> } </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">await</span><span style="color:#E1E4E8;"> axios.</span><span style="color:#B392F0;">post</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;https://httpbin.org/post&#39;</span><span style="color:#E1E4E8;">, {</span></span>
<span class="line"><span style="color:#E1E4E8;">    firstName: </span><span style="color:#9ECBFF;">&#39;Fred&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    lastName: </span><span style="color:#9ECBFF;">&#39;Flintstone&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    orders: [</span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">2</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">3</span><span style="color:#E1E4E8;">],</span></span>
<span class="line"><span style="color:#E1E4E8;">    photo: document.</span><span style="color:#B392F0;">querySelector</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;#fileInput&#39;</span><span style="color:#E1E4E8;">).files</span></span>
<span class="line"><span style="color:#E1E4E8;">  }, {</span></span>
<span class="line"><span style="color:#E1E4E8;">    headers: {</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#9ECBFF;">&#39;Content-Type&#39;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&#39;multipart/form-data&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">)</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> { </span><span style="color:#005CC5;">data</span><span style="color:#24292E;"> } </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">await</span><span style="color:#24292E;"> axios.</span><span style="color:#6F42C1;">post</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;https://httpbin.org/post&#39;</span><span style="color:#24292E;">, {</span></span>
<span class="line"><span style="color:#24292E;">    firstName: </span><span style="color:#032F62;">&#39;Fred&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    lastName: </span><span style="color:#032F62;">&#39;Flintstone&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    orders: [</span><span style="color:#005CC5;">1</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">2</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">3</span><span style="color:#24292E;">],</span></span>
<span class="line"><span style="color:#24292E;">    photo: document.</span><span style="color:#6F42C1;">querySelector</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;#fileInput&#39;</span><span style="color:#24292E;">).files</span></span>
<span class="line"><span style="color:#24292E;">  }, {</span></span>
<span class="line"><span style="color:#24292E;">    headers: {</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#032F62;">&#39;Content-Type&#39;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&#39;multipart/form-data&#39;</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"><span style="color:#24292E;">)</span></span></code></pre></div><h3 id="url-encoded-form-application-x-www-form-urlencoded" tabindex="-1">URL encoded form (<code>application/x-www-form-urlencoded</code>) <a class="header-anchor" href="#url-encoded-form-application-x-www-form-urlencoded" aria-label="Permalink to &quot;URL encoded form (\`application/x-www-form-urlencoded\`)&quot;">​</a></h3><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> { </span><span style="color:#79B8FF;">data</span><span style="color:#E1E4E8;"> } </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">await</span><span style="color:#E1E4E8;"> axios.</span><span style="color:#B392F0;">post</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;https://httpbin.org/post&#39;</span><span style="color:#E1E4E8;">, {</span></span>
<span class="line"><span style="color:#E1E4E8;">  firstName: </span><span style="color:#9ECBFF;">&#39;Fred&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  lastName: </span><span style="color:#9ECBFF;">&#39;Flintstone&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  orders: [</span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">2</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">3</span><span style="color:#E1E4E8;">]</span></span>
<span class="line"><span style="color:#E1E4E8;">}, {</span></span>
<span class="line"><span style="color:#E1E4E8;">  headers: {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#9ECBFF;">&#39;Content-Type&#39;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&#39;application/x-www-form-urlencoded&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">})</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> { </span><span style="color:#005CC5;">data</span><span style="color:#24292E;"> } </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">await</span><span style="color:#24292E;"> axios.</span><span style="color:#6F42C1;">post</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;https://httpbin.org/post&#39;</span><span style="color:#24292E;">, {</span></span>
<span class="line"><span style="color:#24292E;">  firstName: </span><span style="color:#032F62;">&#39;Fred&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  lastName: </span><span style="color:#032F62;">&#39;Flintstone&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  orders: [</span><span style="color:#005CC5;">1</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">2</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">3</span><span style="color:#24292E;">]</span></span>
<span class="line"><span style="color:#24292E;">}, {</span></span>
<span class="line"><span style="color:#24292E;">  headers: {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#032F62;">&#39;Content-Type&#39;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&#39;application/x-www-form-urlencoded&#39;</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"><span style="color:#24292E;">})</span></span></code></pre></div>`,13),e=[o];function t(c,r,E,y,i,F){return a(),n("div",null,e)}const h=s(l,[["render",t]]);export{u as __pageData,h as default};