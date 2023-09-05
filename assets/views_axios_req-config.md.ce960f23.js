import{_ as s,o as n,c as a,Q as p}from"./chunks/framework.ca65985f.js";const d=JSON.parse('{"title":"请求配置","description":"","frontmatter":{"outline":"deep"},"headers":[],"relativePath":"views/axios/req-config.md","filePath":"views/axios/req-config.md","lastUpdated":1693900940000}'),l={name:"views/axios/req-config.md"},o=p(`<h1 id="请求配置" tabindex="-1">请求配置 <a class="header-anchor" href="#请求配置" aria-label="Permalink to &quot;请求配置&quot;">​</a></h1><p>这些是创建请求时可以用的配置选项。只有 <code>url</code> 是必需的。如果没有指定 <code>method</code>，请求将默认使用 <code>GET</code> 方法。</p><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">{</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// \`url\` 是用于请求的服务器 URL</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">url</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&#39;/user&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// \`method\` 是创建请求时使用的方法</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">method</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&#39;get&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#6A737D;">// 默认值</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// \`baseURL\` 将自动加在 \`url\` 前面，除非 \`url\` 是一个绝对 URL。</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// 它可以通过设置一个 \`baseURL\` 便于为 axios 实例的方法传递相对 URL</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">baseURL</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&#39;https://some-domain.com/api/&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// \`transformRequest\` 允许在向服务器发送前，修改请求数据</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// 它只能用于 &#39;PUT&#39;, &#39;POST&#39; 和 &#39;PATCH&#39; 这几个请求方法</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// 数组中最后一个函数必须返回一个字符串， 一个Buffer实例，ArrayBuffer，FormData，或 Stream</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// 你可以修改请求头。</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">transformRequest</span><span style="color:#E1E4E8;">: [</span><span style="color:#F97583;">function</span><span style="color:#E1E4E8;"> (</span><span style="color:#FFAB70;">data</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">headers</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 对发送的 data 进行任意转换处理</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> data;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }],</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// \`transformResponse\` 在传递给 then/catch 前，允许修改响应数据</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">transformResponse</span><span style="color:#E1E4E8;">: [</span><span style="color:#F97583;">function</span><span style="color:#E1E4E8;"> (</span><span style="color:#FFAB70;">data</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 对接收的 data 进行任意转换处理</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> data;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }],</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// 自定义请求头</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">headers</span><span style="color:#E1E4E8;">: {</span><span style="color:#9ECBFF;">&#39;X-Requested-With&#39;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&#39;XMLHttpRequest&#39;</span><span style="color:#E1E4E8;">},</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// \`params\` 是与请求一起发送的 URL 参数</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// 必须是一个简单对象或 URLSearchParams 对象</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">params</span><span style="color:#E1E4E8;">: {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">ID</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">12345</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// \`paramsSerializer\`是可选方法，主要用于序列化\`params\`</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// (e.g. https://www.npmjs.com/package/qs, http://api.jquery.com/jquery.param/)</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">paramsSerializer</span><span style="color:#E1E4E8;">: </span><span style="color:#F97583;">function</span><span style="color:#E1E4E8;"> (</span><span style="color:#FFAB70;">params</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> Qs.</span><span style="color:#B392F0;">stringify</span><span style="color:#E1E4E8;">(params, {arrayFormat: </span><span style="color:#9ECBFF;">&#39;brackets&#39;</span><span style="color:#E1E4E8;">})</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// \`data\` 是作为请求体被发送的数据</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// 仅适用 &#39;PUT&#39;, &#39;POST&#39;, &#39;DELETE 和 &#39;PATCH&#39; 请求方法</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// 在没有设置 \`transformRequest\` 时，则必须是以下类型之一:</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// - string, plain object, ArrayBuffer, ArrayBufferView, URLSearchParams</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// - 浏览器专属: FormData, File, Blob</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// - Node 专属: Stream, Buffer</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">data</span><span style="color:#E1E4E8;">: {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">firstName</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&#39;Fred&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// 发送请求体数据的可选语法</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// 请求方式 post</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// 只有 value 会被发送，key 则不会</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">data</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&#39;Country=Brasil&amp;City=Belo Horizonte&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// \`timeout\` 指定请求超时的毫秒数。</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// 如果请求时间超过 \`timeout\` 的值，则请求会被中断</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">timeout</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">1000</span><span style="color:#E1E4E8;">, </span><span style="color:#6A737D;">// 默认值是 \`0\` (永不超时)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// \`withCredentials\` 表示跨域请求时是否需要使用凭证</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">withCredentials</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">false</span><span style="color:#E1E4E8;">, </span><span style="color:#6A737D;">// default</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// \`adapter\` 允许自定义处理请求，这使测试更加容易。</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// 返回一个 promise 并提供一个有效的响应 （参见 lib/adapters/README.md）。</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">adapter</span><span style="color:#E1E4E8;">: </span><span style="color:#F97583;">function</span><span style="color:#E1E4E8;"> (</span><span style="color:#FFAB70;">config</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">/* ... */</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// \`auth\` HTTP Basic Auth</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">auth</span><span style="color:#E1E4E8;">: {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">username</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&#39;janedoe&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">password</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&#39;s00pers3cret&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// \`responseType\` 表示浏览器将要响应的数据类型</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// 选项包括: &#39;arraybuffer&#39;, &#39;document&#39;, &#39;json&#39;, &#39;text&#39;, &#39;stream&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// 浏览器专属：&#39;blob&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">responseType</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&#39;json&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#6A737D;">// 默认值</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// \`responseEncoding\` 表示用于解码响应的编码 (Node.js 专属)</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// 注意：忽略 \`responseType\` 的值为 &#39;stream&#39;，或者是客户端请求</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// Note: Ignored for \`responseType\` of &#39;stream&#39; or client-side requests</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">responseEncoding</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&#39;utf8&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#6A737D;">// 默认值</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// \`xsrfCookieName\` 是 xsrf token 的值，被用作 cookie 的名称</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">xsrfCookieName</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&#39;XSRF-TOKEN&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#6A737D;">// 默认值</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// \`xsrfHeaderName\` 是带有 xsrf token 值的http 请求头名称</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">xsrfHeaderName</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&#39;X-XSRF-TOKEN&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#6A737D;">// 默认值</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// \`onUploadProgress\` 允许为上传处理进度事件</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// 浏览器专属</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">onUploadProgress</span><span style="color:#E1E4E8;">: </span><span style="color:#F97583;">function</span><span style="color:#E1E4E8;"> (</span><span style="color:#FFAB70;">progressEvent</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 处理原生进度事件</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// \`onDownloadProgress\` 允许为下载处理进度事件</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// 浏览器专属</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">onDownloadProgress</span><span style="color:#E1E4E8;">: </span><span style="color:#F97583;">function</span><span style="color:#E1E4E8;"> (</span><span style="color:#FFAB70;">progressEvent</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 处理原生进度事件</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// \`maxContentLength\` 定义了node.js中允许的HTTP响应内容的最大字节数</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">maxContentLength</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">2000</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// \`maxBodyLength\`（仅Node）定义允许的http请求内容的最大字节数</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">maxBodyLength</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">2000</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// \`validateStatus\` 定义了对于给定的 HTTP状态码是 resolve 还是 reject promise。</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// 如果 \`validateStatus\` 返回 \`true\` (或者设置为 \`null\` 或 \`undefined\`)，</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// 则promise 将会 resolved，否则是 rejected。</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">validateStatus</span><span style="color:#E1E4E8;">: </span><span style="color:#F97583;">function</span><span style="color:#E1E4E8;"> (</span><span style="color:#FFAB70;">status</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> status </span><span style="color:#F97583;">&gt;=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">200</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">&amp;&amp;</span><span style="color:#E1E4E8;"> status </span><span style="color:#F97583;">&lt;</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">300</span><span style="color:#E1E4E8;">; </span><span style="color:#6A737D;">// 默认值</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// \`maxRedirects\` 定义了在node.js中要遵循的最大重定向数。</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// 如果设置为0，则不会进行重定向</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">maxRedirects</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">5</span><span style="color:#E1E4E8;">, </span><span style="color:#6A737D;">// 默认值</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// \`socketPath\` 定义了在node.js中使用的UNIX套接字。</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// e.g. &#39;/var/run/docker.sock&#39; 发送请求到 docker 守护进程。</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// 只能指定 \`socketPath\` 或 \`proxy\` 。</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// 若都指定，这使用 \`socketPath\` 。</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">socketPath</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">null</span><span style="color:#E1E4E8;">, </span><span style="color:#6A737D;">// default</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// \`httpAgent\` and \`httpsAgent\` define a custom agent to be used when performing http</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// and https requests, respectively, in node.js. This allows options to be added like</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// \`keepAlive\` that are not enabled by default.</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">httpAgent</span><span style="color:#E1E4E8;">: </span><span style="color:#F97583;">new</span><span style="color:#E1E4E8;"> http.</span><span style="color:#B392F0;">Agent</span><span style="color:#E1E4E8;">({ keepAlive: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;"> }),</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">httpsAgent</span><span style="color:#E1E4E8;">: </span><span style="color:#F97583;">new</span><span style="color:#E1E4E8;"> https.</span><span style="color:#B392F0;">Agent</span><span style="color:#E1E4E8;">({ keepAlive: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;"> }),</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// \`proxy\` 定义了代理服务器的主机名，端口和协议。</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// 您可以使用常规的\`http_proxy\` 和 \`https_proxy\` 环境变量。</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// 使用 \`false\` 可以禁用代理功能，同时环境变量也会被忽略。</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// \`auth\`表示应使用HTTP Basic auth连接到代理，并且提供凭据。</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// 这将设置一个 \`Proxy-Authorization\` 请求头，它会覆盖 \`headers\` 中已存在的自定义 \`Proxy-Authorization\` 请求头。</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// 如果代理服务器使用 HTTPS，则必须设置 protocol 为\`https\`</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">proxy</span><span style="color:#E1E4E8;">: {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">protocol</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&#39;https&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">host</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&#39;127.0.0.1&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">port</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">9000</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">auth</span><span style="color:#E1E4E8;">: {</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#B392F0;">username</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&#39;mikeymike&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#B392F0;">password</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&#39;rapunz3l&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// see https://axios-http.com/zh/docs/cancellation</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">cancelToken</span><span style="color:#E1E4E8;">: </span><span style="color:#F97583;">new</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">CancelToken</span><span style="color:#E1E4E8;">(</span><span style="color:#F97583;">function</span><span style="color:#E1E4E8;"> (</span><span style="color:#FFAB70;">cancel</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">  }),</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// \`decompress\` indicates whether or not the response body should be decompressed </span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// automatically. If set to \`true\` will also remove the &#39;content-encoding&#39; header </span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// from the responses objects of all decompressed responses</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// - Node only (XHR cannot turn off decompression)</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">decompress</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;"> </span><span style="color:#6A737D;">// 默认值</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">{</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// \`url\` 是用于请求的服务器 URL</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">url</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&#39;/user&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// \`method\` 是创建请求时使用的方法</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">method</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&#39;get&#39;</span><span style="color:#24292E;">, </span><span style="color:#6A737D;">// 默认值</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// \`baseURL\` 将自动加在 \`url\` 前面，除非 \`url\` 是一个绝对 URL。</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// 它可以通过设置一个 \`baseURL\` 便于为 axios 实例的方法传递相对 URL</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">baseURL</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&#39;https://some-domain.com/api/&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// \`transformRequest\` 允许在向服务器发送前，修改请求数据</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// 它只能用于 &#39;PUT&#39;, &#39;POST&#39; 和 &#39;PATCH&#39; 这几个请求方法</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// 数组中最后一个函数必须返回一个字符串， 一个Buffer实例，ArrayBuffer，FormData，或 Stream</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// 你可以修改请求头。</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">transformRequest</span><span style="color:#24292E;">: [</span><span style="color:#D73A49;">function</span><span style="color:#24292E;"> (</span><span style="color:#E36209;">data</span><span style="color:#24292E;">, </span><span style="color:#E36209;">headers</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 对发送的 data 进行任意转换处理</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> data;</span></span>
<span class="line"><span style="color:#24292E;">  }],</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// \`transformResponse\` 在传递给 then/catch 前，允许修改响应数据</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">transformResponse</span><span style="color:#24292E;">: [</span><span style="color:#D73A49;">function</span><span style="color:#24292E;"> (</span><span style="color:#E36209;">data</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 对接收的 data 进行任意转换处理</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> data;</span></span>
<span class="line"><span style="color:#24292E;">  }],</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// 自定义请求头</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">headers</span><span style="color:#24292E;">: {</span><span style="color:#032F62;">&#39;X-Requested-With&#39;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&#39;XMLHttpRequest&#39;</span><span style="color:#24292E;">},</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// \`params\` 是与请求一起发送的 URL 参数</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// 必须是一个简单对象或 URLSearchParams 对象</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">params</span><span style="color:#24292E;">: {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">ID</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">12345</span></span>
<span class="line"><span style="color:#24292E;">  },</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// \`paramsSerializer\`是可选方法，主要用于序列化\`params\`</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// (e.g. https://www.npmjs.com/package/qs, http://api.jquery.com/jquery.param/)</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">paramsSerializer</span><span style="color:#24292E;">: </span><span style="color:#D73A49;">function</span><span style="color:#24292E;"> (</span><span style="color:#E36209;">params</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> Qs.</span><span style="color:#6F42C1;">stringify</span><span style="color:#24292E;">(params, {arrayFormat: </span><span style="color:#032F62;">&#39;brackets&#39;</span><span style="color:#24292E;">})</span></span>
<span class="line"><span style="color:#24292E;">  },</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// \`data\` 是作为请求体被发送的数据</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// 仅适用 &#39;PUT&#39;, &#39;POST&#39;, &#39;DELETE 和 &#39;PATCH&#39; 请求方法</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// 在没有设置 \`transformRequest\` 时，则必须是以下类型之一:</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// - string, plain object, ArrayBuffer, ArrayBufferView, URLSearchParams</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// - 浏览器专属: FormData, File, Blob</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// - Node 专属: Stream, Buffer</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">data</span><span style="color:#24292E;">: {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">firstName</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&#39;Fred&#39;</span></span>
<span class="line"><span style="color:#24292E;">  },</span></span>
<span class="line"><span style="color:#24292E;">  </span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// 发送请求体数据的可选语法</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// 请求方式 post</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// 只有 value 会被发送，key 则不会</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">data</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&#39;Country=Brasil&amp;City=Belo Horizonte&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// \`timeout\` 指定请求超时的毫秒数。</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// 如果请求时间超过 \`timeout\` 的值，则请求会被中断</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">timeout</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">1000</span><span style="color:#24292E;">, </span><span style="color:#6A737D;">// 默认值是 \`0\` (永不超时)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// \`withCredentials\` 表示跨域请求时是否需要使用凭证</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">withCredentials</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">false</span><span style="color:#24292E;">, </span><span style="color:#6A737D;">// default</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// \`adapter\` 允许自定义处理请求，这使测试更加容易。</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// 返回一个 promise 并提供一个有效的响应 （参见 lib/adapters/README.md）。</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">adapter</span><span style="color:#24292E;">: </span><span style="color:#D73A49;">function</span><span style="color:#24292E;"> (</span><span style="color:#E36209;">config</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">/* ... */</span></span>
<span class="line"><span style="color:#24292E;">  },</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// \`auth\` HTTP Basic Auth</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">auth</span><span style="color:#24292E;">: {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">username</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&#39;janedoe&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">password</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&#39;s00pers3cret&#39;</span></span>
<span class="line"><span style="color:#24292E;">  },</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// \`responseType\` 表示浏览器将要响应的数据类型</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// 选项包括: &#39;arraybuffer&#39;, &#39;document&#39;, &#39;json&#39;, &#39;text&#39;, &#39;stream&#39;</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// 浏览器专属：&#39;blob&#39;</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">responseType</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&#39;json&#39;</span><span style="color:#24292E;">, </span><span style="color:#6A737D;">// 默认值</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// \`responseEncoding\` 表示用于解码响应的编码 (Node.js 专属)</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// 注意：忽略 \`responseType\` 的值为 &#39;stream&#39;，或者是客户端请求</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// Note: Ignored for \`responseType\` of &#39;stream&#39; or client-side requests</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">responseEncoding</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&#39;utf8&#39;</span><span style="color:#24292E;">, </span><span style="color:#6A737D;">// 默认值</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// \`xsrfCookieName\` 是 xsrf token 的值，被用作 cookie 的名称</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">xsrfCookieName</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&#39;XSRF-TOKEN&#39;</span><span style="color:#24292E;">, </span><span style="color:#6A737D;">// 默认值</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// \`xsrfHeaderName\` 是带有 xsrf token 值的http 请求头名称</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">xsrfHeaderName</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&#39;X-XSRF-TOKEN&#39;</span><span style="color:#24292E;">, </span><span style="color:#6A737D;">// 默认值</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// \`onUploadProgress\` 允许为上传处理进度事件</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// 浏览器专属</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">onUploadProgress</span><span style="color:#24292E;">: </span><span style="color:#D73A49;">function</span><span style="color:#24292E;"> (</span><span style="color:#E36209;">progressEvent</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 处理原生进度事件</span></span>
<span class="line"><span style="color:#24292E;">  },</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// \`onDownloadProgress\` 允许为下载处理进度事件</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// 浏览器专属</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">onDownloadProgress</span><span style="color:#24292E;">: </span><span style="color:#D73A49;">function</span><span style="color:#24292E;"> (</span><span style="color:#E36209;">progressEvent</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 处理原生进度事件</span></span>
<span class="line"><span style="color:#24292E;">  },</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// \`maxContentLength\` 定义了node.js中允许的HTTP响应内容的最大字节数</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">maxContentLength</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">2000</span><span style="color:#24292E;">,</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// \`maxBodyLength\`（仅Node）定义允许的http请求内容的最大字节数</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">maxBodyLength</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">2000</span><span style="color:#24292E;">,</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// \`validateStatus\` 定义了对于给定的 HTTP状态码是 resolve 还是 reject promise。</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// 如果 \`validateStatus\` 返回 \`true\` (或者设置为 \`null\` 或 \`undefined\`)，</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// 则promise 将会 resolved，否则是 rejected。</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">validateStatus</span><span style="color:#24292E;">: </span><span style="color:#D73A49;">function</span><span style="color:#24292E;"> (</span><span style="color:#E36209;">status</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> status </span><span style="color:#D73A49;">&gt;=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">200</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">&amp;&amp;</span><span style="color:#24292E;"> status </span><span style="color:#D73A49;">&lt;</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">300</span><span style="color:#24292E;">; </span><span style="color:#6A737D;">// 默认值</span></span>
<span class="line"><span style="color:#24292E;">  },</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// \`maxRedirects\` 定义了在node.js中要遵循的最大重定向数。</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// 如果设置为0，则不会进行重定向</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">maxRedirects</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">5</span><span style="color:#24292E;">, </span><span style="color:#6A737D;">// 默认值</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// \`socketPath\` 定义了在node.js中使用的UNIX套接字。</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// e.g. &#39;/var/run/docker.sock&#39; 发送请求到 docker 守护进程。</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// 只能指定 \`socketPath\` 或 \`proxy\` 。</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// 若都指定，这使用 \`socketPath\` 。</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">socketPath</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">null</span><span style="color:#24292E;">, </span><span style="color:#6A737D;">// default</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// \`httpAgent\` and \`httpsAgent\` define a custom agent to be used when performing http</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// and https requests, respectively, in node.js. This allows options to be added like</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// \`keepAlive\` that are not enabled by default.</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">httpAgent</span><span style="color:#24292E;">: </span><span style="color:#D73A49;">new</span><span style="color:#24292E;"> http.</span><span style="color:#6F42C1;">Agent</span><span style="color:#24292E;">({ keepAlive: </span><span style="color:#005CC5;">true</span><span style="color:#24292E;"> }),</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">httpsAgent</span><span style="color:#24292E;">: </span><span style="color:#D73A49;">new</span><span style="color:#24292E;"> https.</span><span style="color:#6F42C1;">Agent</span><span style="color:#24292E;">({ keepAlive: </span><span style="color:#005CC5;">true</span><span style="color:#24292E;"> }),</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// \`proxy\` 定义了代理服务器的主机名，端口和协议。</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// 您可以使用常规的\`http_proxy\` 和 \`https_proxy\` 环境变量。</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// 使用 \`false\` 可以禁用代理功能，同时环境变量也会被忽略。</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// \`auth\`表示应使用HTTP Basic auth连接到代理，并且提供凭据。</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// 这将设置一个 \`Proxy-Authorization\` 请求头，它会覆盖 \`headers\` 中已存在的自定义 \`Proxy-Authorization\` 请求头。</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// 如果代理服务器使用 HTTPS，则必须设置 protocol 为\`https\`</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">proxy</span><span style="color:#24292E;">: {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">protocol</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&#39;https&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">host</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&#39;127.0.0.1&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">port</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">9000</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">auth</span><span style="color:#24292E;">: {</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6F42C1;">username</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&#39;mikeymike&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6F42C1;">password</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&#39;rapunz3l&#39;</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">  },</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// see https://axios-http.com/zh/docs/cancellation</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">cancelToken</span><span style="color:#24292E;">: </span><span style="color:#D73A49;">new</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">CancelToken</span><span style="color:#24292E;">(</span><span style="color:#D73A49;">function</span><span style="color:#24292E;"> (</span><span style="color:#E36209;">cancel</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">  }),</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// \`decompress\` indicates whether or not the response body should be decompressed </span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// automatically. If set to \`true\` will also remove the &#39;content-encoding&#39; header </span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// from the responses objects of all decompressed responses</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// - Node only (XHR cannot turn off decompression)</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">decompress</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">true</span><span style="color:#24292E;"> </span><span style="color:#6A737D;">// 默认值</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div>`,3),e=[o];function c(t,r,E,y,i,A){return n(),a("div",null,e)}const D=s(l,[["render",c]]);export{d as __pageData,D as default};
