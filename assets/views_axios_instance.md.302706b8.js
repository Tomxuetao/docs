import{_ as s,o as a,c as n,Q as o}from"./chunks/framework.01af844e.js";const u=JSON.parse('{"title":"Axios 实例","description":"","frontmatter":{"outline":"deep"},"headers":[],"relativePath":"views/axios/instance.md","filePath":"views/axios/instance.md","lastUpdated":1694595146000}'),p={name:"views/axios/instance.md"},e=o(`<h1 id="axios-实例" tabindex="-1">Axios 实例 <a class="header-anchor" href="#axios-实例" aria-label="Permalink to &quot;Axios 实例&quot;">​</a></h1><h2 id="创建一个实例" tabindex="-1">创建一个实例 <a class="header-anchor" href="#创建一个实例" aria-label="Permalink to &quot;创建一个实例&quot;">​</a></h2><p>您可以使用自定义配置新建一个实例。</p><p>axios.create([config])</p><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">instance</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> axios.</span><span style="color:#B392F0;">create</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">  baseURL: </span><span style="color:#9ECBFF;">&#39;https://some-domain.com/api/&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  timeout: </span><span style="color:#79B8FF;">1000</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  headers: { </span><span style="color:#9ECBFF;">&#39;X-Custom-Header&#39;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&#39;foobar&#39;</span><span style="color:#E1E4E8;"> }</span></span>
<span class="line"><span style="color:#E1E4E8;">});</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">instance</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> axios.</span><span style="color:#6F42C1;">create</span><span style="color:#24292E;">({</span></span>
<span class="line"><span style="color:#24292E;">  baseURL: </span><span style="color:#032F62;">&#39;https://some-domain.com/api/&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  timeout: </span><span style="color:#005CC5;">1000</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  headers: { </span><span style="color:#032F62;">&#39;X-Custom-Header&#39;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&#39;foobar&#39;</span><span style="color:#24292E;"> }</span></span>
<span class="line"><span style="color:#24292E;">});</span></span></code></pre></div><h2 id="实例方法" tabindex="-1">实例方法 <a class="header-anchor" href="#实例方法" aria-label="Permalink to &quot;实例方法&quot;">​</a></h2><p>以下是可用的实例方法。指定的配置将与实例的配置合并。</p><p>axios#request(config)</p><p>axios#get(url[, config])</p><p>axios#delete(url[, config])</p><p>axios#head(url[, config])</p><p>axios#options(url[, config])</p><p>axios#post(url[, data[, config]])</p><p>axios#put(url[, data[, config]])</p><p>axios#patch(url[, data[, config]])</p><p>axios#getUri([config])</p>`,16),l=[e];function t(c,r,i,E,d,y){return a(),n("div",null,l)}const _=s(p,[["render",t]]);export{u as __pageData,_ as default};
