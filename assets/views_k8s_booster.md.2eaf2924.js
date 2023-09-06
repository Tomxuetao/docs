import{_ as s,o as a,c as e,Q as n}from"./chunks/framework.ca65985f.js";const u=JSON.parse('{"title":"配置加速器","description":"","frontmatter":{"outline":"deep"},"headers":[],"relativePath":"views/k8s/booster.md","filePath":"views/k8s/booster.md","lastUpdated":1693990401000}'),l={name:"views/k8s/booster.md"},o=n(`<h1 id="配置加速器" tabindex="-1">配置加速器 <a class="header-anchor" href="#配置加速器" aria-label="Permalink to &quot;配置加速器&quot;">​</a></h1><p>如果您无法从 <a href="https://hub.docker.com/" target="_blank" rel="noreferrer"><code>DockerHub</code></a> 下载镜像，强烈建议您预先配置仓库的镜像地址（即加速器）以加快下载速度。您可以参考 <a href="https://docs.docker.com/registry/recipes/mirror/#configure-the-docker-daemon" target="_blank" rel="noreferrer">Docker 官方文档</a> ，或执行以下步骤。</p><h2 id="获取加速器地址" tabindex="-1">获取加速器地址 <a class="header-anchor" href="#获取加速器地址" aria-label="Permalink to &quot;获取加速器地址&quot;">​</a></h2><p>您需要获取仓库的一个镜像地址以配置加速器。您可以参考如何<a href="https://help.aliyun.com/zh/acr/user-guide/accelerate-the-pulls-of-docker-official-images" target="_blank" rel="noreferrer">从阿里云获取加速器地址</a>。</p><h2 id="配置仓库镜像地址" tabindex="-1">配置仓库镜像地址 <a class="header-anchor" href="#配置仓库镜像地址" aria-label="Permalink to &quot;配置仓库镜像地址&quot;">​</a></h2><p>您可以直接配置 Docker 守护程序，也可以使用 KubeKey 进行配置。</p><h3 id="配置-docker-守护程序" tabindex="-1">配置 Docker 守护程序 <a class="header-anchor" href="#配置-docker-守护程序" aria-label="Permalink to &quot;配置 Docker 守护程序&quot;">​</a></h3><div class="tip custom-block"><p class="custom-block-title">备注</p><p>采用此方法，您需要预先安装 Docker。</p></div><p>1.执行如下命令：</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">sudo</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">mkdir</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-p</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">/etc/docker</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">sudo</span><span style="color:#24292E;"> </span><span style="color:#032F62;">mkdir</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-p</span><span style="color:#24292E;"> </span><span style="color:#032F62;">/etc/docker</span></span></code></pre></div><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">sudo</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">vim</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">/etc/docker/daemon.json</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">sudo</span><span style="color:#24292E;"> </span><span style="color:#032F62;">vim</span><span style="color:#24292E;"> </span><span style="color:#032F62;">/etc/docker/daemon.json</span></span></code></pre></div><p>2.在文件中添加 registry-mirrors 键值对。</p><div class="language-json vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">{</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">&quot;registry-mirrors&quot;</span><span style="color:#E1E4E8;">: [</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#9ECBFF;">&quot;https://&lt;my-docker-mirror-host&gt;&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">  ]</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">{</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#005CC5;">&quot;registry-mirrors&quot;</span><span style="color:#24292E;">: [</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#032F62;">&quot;https://&lt;my-docker-mirror-host&gt;&quot;</span></span>
<span class="line"><span style="color:#24292E;">  ]</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><div class="tip custom-block"><p class="custom-block-title">备注</p><p>请将命令中的地址替换成您实际的加速器地址。</p></div><h3 id="使用-kubekey-配置仓库镜像地址" tabindex="-1">使用 KubeKey 配置仓库镜像地址 <a class="header-anchor" href="#使用-kubekey-配置仓库镜像地址" aria-label="Permalink to &quot;使用 KubeKey 配置仓库镜像地址&quot;">​</a></h3><p>1.在安装前用 KubeKey 创建 config-sample.yaml 文件，并定位到文件中的 registry 位置。</p><div class="language-yaml vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">yaml</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#85E89D;">registry</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#85E89D;">registryMirrors</span><span style="color:#E1E4E8;">: [ ]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#85E89D;">insecureRegistries</span><span style="color:#E1E4E8;">: [ ]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#85E89D;">privateRegistry</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;&quot;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#22863A;">registry</span><span style="color:#24292E;">:</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#22863A;">registryMirrors</span><span style="color:#24292E;">: [ ]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#22863A;">insecureRegistries</span><span style="color:#24292E;">: [ ]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#22863A;">privateRegistry</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;&quot;</span></span></code></pre></div><div class="tip custom-block"><p class="custom-block-title">备注</p><p>有关 registry 部分各个参数的更多信息，请参见 Kubernetes 集群配置。</p></div><p>2.在 registryMirrors 处填入仓库的镜像地址并保存文件。有关安装的更多信息，请参见<a href="./multi-node">多节点安装</a>。</p><div class="tip custom-block"><p class="custom-block-title">备注</p><p><a href="https://www.kubesphere.io/zh/docs/v3.3/quick-start/all-in-one-on-linux/" target="_blank" rel="noreferrer">在 Linux 上通过 All-in-One 模式安装 KubeSphere</a> 不需要 config-sample.yaml 文件。该模式下请采用第一种方法进行配置。</p></div>`,20),p=[o];function t(r,c,i,d,y,h){return a(),e("div",null,p)}const k=s(l,[["render",t]]);export{u as __pageData,k as default};
