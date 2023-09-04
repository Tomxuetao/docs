import{_ as s,o as a,c as e,Q as n}from"./chunks/framework.90e210d2.js";const b=JSON.parse('{"title":"多节点安装","description":"","frontmatter":{"outline":"deep"},"headers":[],"relativePath":"k8s/multi-node.md","filePath":"k8s/multi-node.md","lastUpdated":1693801013000}'),l={name:"k8s/multi-node.md"},p=n(`<h1 id="多节点安装" tabindex="-1">多节点安装 <a class="header-anchor" href="#多节点安装" aria-label="Permalink to &quot;多节点安装&quot;">​</a></h1><p>在生产环境中，由于单节点集群资源有限、计算能力不足，无法满足大部分需求，因此不建议在处理大规模数据时使用单节点集群。此外，单节点集群只有一个节点，因此也不具有高可用性。相比之下，在应用程序部署和分发方面，多节点架构是最常见的首选架构。</p><h2 id="视频演示" tabindex="-1">视频演示 <a class="header-anchor" href="#视频演示" aria-label="Permalink to &quot;视频演示&quot;">​</a></h2><br><video controls src="https://kubesphere-docs.pek3b.qingstor.com/website/docs-v3.0/KS3.0%E5%AE%89%E8%A3%85%E4%B8%8E%E9%83%A8%E7%BD%B2_2_Multi-Node%20Deployment%20on%20Linux.mp4"> 你的浏览器不支持 <code>video</code> 标签。 </video><h2 id="概念" tabindex="-1">概念 <a class="header-anchor" href="#概念" aria-label="Permalink to &quot;概念&quot;">​</a></h2><p>多节点集群由至少一个主节点和一个工作节点组成。您可以使用任何节点作为<strong>任务机</strong>来执行安装任务，也可以在安装之前或之后根据需要新增节点（例如，为了实现高可用性）。</p><ul><li><strong>Control plane node</strong>：主节点，通常托管控制平面，控制和管理整个系统。</li><li><strong>Worker node</strong>：工作节点，运行部署在工作节点上的实际应用程序。</li></ul><h2 id="步骤-1-准备-linux-主机" tabindex="-1">步骤 1：准备 Linux 主机 <a class="header-anchor" href="#步骤-1-准备-linux-主机" aria-label="Permalink to &quot;步骤 1：准备 Linux 主机&quot;">​</a></h2><p>请参见下表列出的硬件和操作系统要求。在本教程所演示多节点安装示例中，您需要按照下列要求准备至少三台主机。如果您节点的资源充足，也可以将 <a href="https://kubesphere.com.cn/" target="_blank" rel="noreferrer">KubeSphere 容器平</a>台安装在两个节点上。</p><h3 id="系统要求" tabindex="-1">系统要求 <a class="header-anchor" href="#系统要求" aria-label="Permalink to &quot;系统要求&quot;">​</a></h3><table><thead><tr><th>系统</th><th>最低要求（每个节点</th></tr></thead><tbody><tr><td><strong>Ubuntu</strong> 16.04，18.04，20.04</td><td>CPU：2 核，内存：4 G，硬盘：40 G</td></tr><tr><td><strong>Debian</strong> Buster，Stretch</td><td>CPU：2 核，内存：4 G，硬盘：40 G</td></tr><tr><td><strong>CentOS</strong> 7.x</td><td>CPU：2 核，内存：4 G，硬盘：40 G</td></tr><tr><td><strong>Red Hat Enterprise Linux</strong> 7</td><td>CPU：2 核，内存：4 G，硬盘：40 G</td></tr><tr><td><strong>SUSE Linux Enterprise Server</strong> 15 / <strong>openSUSE Leap</strong> 15.2</td><td>CPU：2 核，内存：4 G，硬盘：40 G</td></tr></tbody></table><div class="tip custom-block"><p class="custom-block-title">提示</p><ul><li>/var/lib/docker 路径主要用于存储容器数据，在使用和操作过程中数据量会逐渐增加。因此，在生产环境中，建议为 /var/lib/docker 单独挂载一个硬盘。</li><li>CPU 必须为 x86_64，暂时不支持 Arm 架构的 CPU。</li></ul></div><h3 id="节点要求" tabindex="-1">节点要求 <a class="header-anchor" href="#节点要求" aria-label="Permalink to &quot;节点要求&quot;">​</a></h3><ul><li>所有节点必须都能通过 SSH 访问。</li><li>所有节点时间同步。</li><li>所有节点都应使用 sudo/curl/openssl/tar。</li></ul><h3 id="容器运行时" tabindex="-1">容器运行时 <a class="header-anchor" href="#容器运行时" aria-label="Permalink to &quot;容器运行时&quot;">​</a></h3><p>您的集群必须有一个可用的容器运行时。如果您使用 KubeKey 搭建集群，KubeKey 会默认安装最新版本的 Docker。或者，您也可以在创建集群前手动安装 Docker 或其他容器运行时。</p><table><thead><tr><th>支持的容器运行时</th><th>版本</th></tr></thead><tbody><tr><td>Docker</td><td>19.3.8+</td></tr><tr><td>containerd</td><td>最新版</td></tr><tr><td>CRI-O（试验版，未经充分测试</td><td>最新版</td></tr><tr><td>iSula（试验版，未经充分测试）</td><td>最新版</td></tr></tbody></table><h3 id="依赖项要求" tabindex="-1">依赖项要求 <a class="header-anchor" href="#依赖项要求" aria-label="Permalink to &quot;依赖项要求&quot;">​</a></h3><p>KubeKey 可以一同安装 Kubernetes 和 KubeSphere。根据要安装的 Kubernetes 版本，需要安装的依赖项可能会不同。您可以参考下表，查看是否需要提前在节点上安装相关依赖项。</p><table><thead><tr><th>依赖项</th><th>Kubernetes 版本 ≥ 1.18</th><th>Kubernetes 版本 &lt; 1.18</th></tr></thead><tbody><tr><td>socat</td><td>必须</td><td>可选，但建议安装</td></tr><tr><td>conntrack</td><td>必须</td><td>可选，但建议安装</td></tr><tr><td>ebtables</td><td>可选，但建议安装</td><td>可选，但建议安装</td></tr><tr><td>ipset</td><td>可选，但建议安装</td><td>可选，但建议安装</td></tr></tbody></table><h3 id="网络和dns要求" tabindex="-1">网络和DNS要求 <a class="header-anchor" href="#网络和dns要求" aria-label="Permalink to &quot;网络和DNS要求&quot;">​</a></h3><ul><li>请确保 /etc/resolv.conf 中的 DNS 地址可用，否则，可能会导致集群中的 DNS 出现问题。</li><li>如果您的网络配置使用防火墙规则或安全组，请务必确保基础设施组件可以通过特定端口相互通信。建议您关闭防火墙。有关更多信息，请参见<a href="https://www.kubesphere.io/zh/docs/v3.3/installing-on-linux/introduction/port-firewall/" target="_blank" rel="noreferrer">端口要求</a>。</li><li>支持的 CNI 插件：Calico 和 Flannel。其他插件也适用（例如 Cilium 和 Kube-OVN 等），但请注意它们未经充分测试。</li></ul><div class="tip custom-block"><p class="custom-block-title">提示</p><ul><li>建议您使用干净的操作系统（即不安装任何其他软件）。否则，可能会产生冲突。</li><li>如果您从 dockerhub.io 下载镜像时遇到问题，建议提前准备仓库的镜像地址（即加速器）。请参见<a href="https://www.kubesphere.io/zh/docs/v3.3/faq/installation/configure-booster/" target="_blank" rel="noreferrer">为安装配置加速器</a>或<a href="https://docs.docker.com/registry/recipes/mirror/#configure-the-docker-daemon" target="_blank" rel="noreferrer">为 Docker Daemon 配置仓库镜像</a>。</li></ul></div><h2 id="步骤-2-下载-kubekey" tabindex="-1">步骤 2：下载 KubeKey <a class="header-anchor" href="#步骤-2-下载-kubekey" aria-label="Permalink to &quot;步骤 2：下载 KubeKey&quot;">​</a></h2><p>请按照以下步骤下载 <a href="https://www.kubesphere.io/zh/docs/v3.3/installing-on-linux/introduction/kubekey" target="_blank" rel="noreferrer">KubeKey</a>。</p><h3 id="如果你能访问github" tabindex="-1">如果你能访问GitHub <a class="header-anchor" href="#如果你能访问github" aria-label="Permalink to &quot;如果你能访问GitHub&quot;">​</a></h3><p>从 <a href="https://github.com/kubesphere/kubekey/releases" target="_blank" rel="noreferrer">GitHub Release Page</a> 下载 KubeKey 或者直接运行以下命令。</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">curl</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-sfL</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">https://get-kk.kubesphere.io</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">|</span><span style="color:#E1E4E8;"> VERSION</span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;">v3.0.7</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">sh</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">-</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">curl</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-sfL</span><span style="color:#24292E;"> </span><span style="color:#032F62;">https://get-kk.kubesphere.io</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">|</span><span style="color:#24292E;"> VERSION</span><span style="color:#D73A49;">=</span><span style="color:#032F62;">v3.0.7</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">sh</span><span style="color:#24292E;"> </span><span style="color:#032F62;">-</span></span></code></pre></div><div class="tip custom-block"><p class="custom-block-title">提示</p><p>通过以上的命令，可以下载 KubeKey 的最新版本。您可以更改命令中的版本号来下载特定的版本。</p></div><h3 id="如果你访问github受限" tabindex="-1">如果你访问GitHub受限 <a class="header-anchor" href="#如果你访问github受限" aria-label="Permalink to &quot;如果你访问GitHub受限&quot;">​</a></h3><p>首先运行以下命令，以确保您从正确的区域下载 KubeKey。</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">export</span><span style="color:#E1E4E8;"> KKZONE</span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;">cn</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">export</span><span style="color:#24292E;"> KKZONE</span><span style="color:#D73A49;">=</span><span style="color:#032F62;">cn</span></span></code></pre></div><p>运行以下命令来下载 KubeKey：</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">curl</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-sfL</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">https://get-kk.kubesphere.io</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">|</span><span style="color:#E1E4E8;"> VERSION</span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;">v3.0.7</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">sh</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">-</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">curl</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-sfL</span><span style="color:#24292E;"> </span><span style="color:#032F62;">https://get-kk.kubesphere.io</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">|</span><span style="color:#24292E;"> VERSION</span><span style="color:#D73A49;">=</span><span style="color:#032F62;">v3.0.7</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">sh</span><span style="color:#24292E;"> </span><span style="color:#032F62;">-</span></span></code></pre></div><div class="tip custom-block"><p class="custom-block-title">提示</p><p>执行以上命令会下载最新版 KubeKey，您可以修改命令中的版本号下载指定版本。</p></div><p>为 kk 添加可执行权限：</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">chmod</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">+x</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">kk</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">chmod</span><span style="color:#24292E;"> </span><span style="color:#032F62;">+x</span><span style="color:#24292E;"> </span><span style="color:#032F62;">kk</span></span></code></pre></div><h2 id="步骤-3-创建集群" tabindex="-1">步骤 3：创建集群 <a class="header-anchor" href="#步骤-3-创建集群" aria-label="Permalink to &quot;步骤 3：创建集群&quot;">​</a></h2><p>对于多节点安装，您需要通过指定配置文件来创建集群。</p><h3 id="_1-创建示例配置文件" tabindex="-1">1. 创建示例配置文件 <a class="header-anchor" href="#_1-创建示例配置文件" aria-label="Permalink to &quot;1. 创建示例配置文件&quot;">​</a></h3><p>命令如下：</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">./kk</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">create</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">config</span><span style="color:#E1E4E8;"> [--with-kubernetes </span><span style="color:#9ECBFF;">version]</span><span style="color:#E1E4E8;"> [--with-kubesphere </span><span style="color:#9ECBFF;">version]</span><span style="color:#E1E4E8;"> [(-f </span><span style="color:#F97583;">|</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">--file</span><span style="color:#E1E4E8;">) path]</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">./kk</span><span style="color:#24292E;"> </span><span style="color:#032F62;">create</span><span style="color:#24292E;"> </span><span style="color:#032F62;">config</span><span style="color:#24292E;"> [--with-kubernetes </span><span style="color:#032F62;">version]</span><span style="color:#24292E;"> [--with-kubesphere </span><span style="color:#032F62;">version]</span><span style="color:#24292E;"> [(-f </span><span style="color:#D73A49;">|</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">--file</span><span style="color:#24292E;">) path]</span></span></code></pre></div><div class="tip custom-block"><p class="custom-block-title">提示</p><ul><li>安装 KubeSphere 3.3 的建议 Kubernetes 版本：v1.20.x、v1.21.x、* v1.22.x、* v1.23.x 和 * v1.24.x。带星号的版本可能出现边缘节点部分功能不可用的情况。因此，如需使用边缘节点，推荐安装 v1.21.x。如果不指定 Kubernetes 版本，KubeKey 将默认安装 Kubernetes v1.23.10。有关受支持的 Kubernetes 版本的更多信息，请参见<a href="https://www.kubesphere.io/zh/docs/v3.3/installing-on-linux/introduction/kubekey/#%e6%94%af%e6%8c%81%e7%9f%a9%e9%98%b5" target="_blank" rel="noreferrer">支持矩阵</a>。</li><li>如果您在此步骤的命令中不添加标志 --with-kubesphere，则不会部署 KubeSphere，只能使用配置文件中的 addons 字段安装，或者在您后续使用 ./kk create cluster 命令时再次添加这个标志。</li><li>如果您添加标志 --with-kubesphere 时不指定 KubeSphere 版本，则会安装最新版本的 KubeSphere。</li></ul></div><p>以下是一些示例，供您参考：</p><ul><li>您可以使用默认配置创建示例配置文件，也可以为该文件指定其他文件名或其他文件夹。</li></ul><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">./kk</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">create</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">config</span><span style="color:#E1E4E8;"> [-f </span><span style="color:#9ECBFF;">~/myfolder/abc.yaml]</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">./kk</span><span style="color:#24292E;"> </span><span style="color:#032F62;">create</span><span style="color:#24292E;"> </span><span style="color:#032F62;">config</span><span style="color:#24292E;"> [-f </span><span style="color:#032F62;">~/myfolder/abc.yaml]</span></span></code></pre></div><ul><li>您可以指定要安装的 KubeSphere 版本（例如 --with-kubesphere v3.3.2）。</li></ul><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">./kk</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">create</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">config</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">--with-kubesphere</span><span style="color:#E1E4E8;"> [version]</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">./kk</span><span style="color:#24292E;"> </span><span style="color:#032F62;">create</span><span style="color:#24292E;"> </span><span style="color:#032F62;">config</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">--with-kubesphere</span><span style="color:#24292E;"> [version]</span></span></code></pre></div><h3 id="_2-编辑配置文件" tabindex="-1">2. 编辑配置文件 <a class="header-anchor" href="#_2-编辑配置文件" aria-label="Permalink to &quot;2. 编辑配置文件&quot;">​</a></h3><p>如果您不更改名称，那么将创建默认文件 config-sample.yaml。编辑文件，以下是多节点集群（具有一个主节点）配置文件的示例。</p><div class="tip custom-block"><p class="custom-block-title">提示</p><p>若要自定义 Kubernetes 相关参数，请参考 <a href="https://www.kubesphere.io/zh/docs/v3.3/installing-on-linux/introduction/vars/" target="_blank" rel="noreferrer">Kubernetes 集群配置</a>。</p></div><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">spec:</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">  hosts:</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">  - {name: master, address: 192.168.0.2, internalAddress: 192.168.0.2, user: ubuntu, password: Testing123}</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">  - {name: node1, address: 192.168.0.3, internalAddress: 192.168.0.3, user: ubuntu, password: Testing123}</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">  - {name: node2, address: 192.168.0.4, internalAddress: 192.168.0.4, user: ubuntu, password: Testing123}</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">  roleGroups:</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">    etcd:</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">    - master</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">    control-plane:</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">    - master</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">    worker:</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">    - node1</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">    - node2</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">  controlPlaneEndpoint:</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">    domain: lb.kubesphere.local</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">    address: &quot;&quot;</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">    port: 6443</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">spec:</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">  hosts:</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">  - {name: master, address: 192.168.0.2, internalAddress: 192.168.0.2, user: ubuntu, password: Testing123}</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">  - {name: node1, address: 192.168.0.3, internalAddress: 192.168.0.3, user: ubuntu, password: Testing123}</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">  - {name: node2, address: 192.168.0.4, internalAddress: 192.168.0.4, user: ubuntu, password: Testing123}</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">  roleGroups:</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">    etcd:</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">    - master</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">    control-plane:</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">    - master</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">    worker:</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">    - node1</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">    - node2</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">  controlPlaneEndpoint:</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">    domain: lb.kubesphere.local</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">    address: &quot;&quot;</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">    port: 6443</span></span></code></pre></div><h4 id="主机" tabindex="-1">主机 <a class="header-anchor" href="#主机" aria-label="Permalink to &quot;主机&quot;">​</a></h4><p>请参照上方示例在 hosts 下列出您的所有机器并添加详细信息。</p><p>name：实例的主机名。</p><p>address：任务机和其他实例通过 SSH 相互连接所使用的 IP 地址。根据您的环境，可以是公有 IP 地址或私有 IP 地址。例如，一些云平台为每个实例提供一个公有 IP 地址，用于通过 SSH 访问。在这种情况下，您可以在该字段填入这个公有 IP 地址。</p><p>internalAddress：实例的私有 IP 地址。</p><p>此外，您必须提供用于连接至每台实例的登录信息，以下示例供您参考：</p><ul><li>使用密码登录示例：</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">hosts:</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">  - {name: master, address: 192.168.0.2, internalAddress: 192.168.0.2, port: 8022, user: ubuntu, password: Testing123}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">hosts:</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">  - {name: master, address: 192.168.0.2, internalAddress: 192.168.0.2, port: 8022, user: ubuntu, password: Testing123}</span></span></code></pre></div><div class="tip custom-block"><p class="custom-block-title">备注</p><p>在本教程中，端口 22 是 SSH 的默认端口，因此您无需将它添加至该 YAML 文件中。否则，您需要在 IP 地址后添加对应端口号，如上所示。</p></div><ul><li>默认 root 用户示例：</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">hosts:</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">  - {name: master, address: 192.168.0.2, internalAddress: 192.168.0.2, password: Testing123}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">hosts:</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">  - {name: master, address: 192.168.0.2, internalAddress: 192.168.0.2, password: Testing123}</span></span></code></pre></div><ul><li>使用 SSH 密钥的无密码登录示例：</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">hosts:</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">  - {name: master, address: 192.168.0.2, internalAddress: 192.168.0.2, privateKeyPath: &quot;~/.ssh/id_rsa&quot;}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">hosts:</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">  - {name: master, address: 192.168.0.2, internalAddress: 192.168.0.2, privateKeyPath: &quot;~/.ssh/id_rsa&quot;}</span></span></code></pre></div><div class="tip custom-block"><p class="custom-block-title">备注</p><ul><li>在安装 KubeSphere 之前，您可以使用 hosts 下提供的信息（例如 IP 地址和密码）通过 SSH 的方式测试任务机和其他实例之间的网络连接。</li><li>在安装前，请确保端口 6443 没有被其他服务占用，否则在安装时会产生冲突（6443 为 API 服务器的默认端口）。</li></ul></div><h4 id="rolegroups" tabindex="-1">roleGroups <a class="header-anchor" href="#rolegroups" aria-label="Permalink to &quot;roleGroups&quot;">​</a></h4><ul><li>etcd：etcd 节点名称</li><li>worker：工作节点名称</li><li>control-plane：主节点名称</li></ul><h4 id="controlplaneendpoint-仅适用于高可用安装" tabindex="-1">controlPlaneEndpoint（仅适用于高可用安装） <a class="header-anchor" href="#controlplaneendpoint-仅适用于高可用安装" aria-label="Permalink to &quot;controlPlaneEndpoint（仅适用于高可用安装）&quot;">​</a></h4><p>您需要在 controlPlaneEndpoint 部分为高可用集群提供外部负载均衡器信息。当且仅当您安装多个主节点时，才需要准备和配置外部负载均衡器。请注意，config-sample.yaml 中的地址和端口应缩进两个空格，address 应为您的负载均衡器地址。有关详细信息，请参见<a href="https://www.kubesphere.io/zh/docs/v3.3/installing-on-linux/high-availability-configurations/ha-configuration/" target="_blank" rel="noreferrer">高可用配置</a>。</p><h4 id="addons" tabindex="-1">addons <a class="header-anchor" href="#addons" aria-label="Permalink to &quot;addons&quot;">​</a></h4><p>您可以在 config-sample.yaml 的 addons 字段下指定存储，从而自定义持久化存储插件，例如 NFS 客户端、Ceph RBD、GlusterFS 等。有关更多信息，请参见<a href="https://www.kubesphere.io/zh/docs/v3.3/installing-on-linux/persistent-storage-configurations/understand-persistent-storage/" target="_blank" rel="noreferrer">持久化存储配置</a>。</p><p>KubeSphere 会默认安装 <a href="https://openebs.io/" target="_blank" rel="noreferrer">OpenEBS</a>，为开发和测试环境配置 <a href="https://kubernetes.io/docs/concepts/storage/volumes/#local" target="_blank" rel="noreferrer">LocalPV</a>，方便新用户使用。在本多节点安装示例中，使用了默认存储类型（本地存储卷）。对于生产环境，您可以使用 Ceph/GlusterFS/CSI 或者商业存储产品作为持久化存储解决方案。</p><div class="tip custom-block"><p class="custom-block-title">提示</p><ul><li>您可以编辑配置文件，启用多集群功能。有关更多信息，请参见<a href="https://www.kubesphere.io/zh/docs/v3.3/multicluster-management/" target="_blank" rel="noreferrer">多集群管理</a>。</li><li>您也可以选择要安装的组件。有关更多信息，请参见<a href="https://www.kubesphere.io/zh/docs/v3.3/pluggable-components/" target="_blank" rel="noreferrer">启用可插拔组件</a>。有关完整的 config-sample.yaml 文件的示例，请参见<a href="https://github.com/kubesphere/kubekey/blob/release-2.2/docs/config-example.md" target="_blank" rel="noreferrer">此文件</a>。</li></ul></div><p>完成编辑后，请保存文件。</p><h3 id="_3-使用配置文件创建集群" tabindex="-1">3. 使用配置文件创建集群 <a class="header-anchor" href="#_3-使用配置文件创建集群" aria-label="Permalink to &quot;3. 使用配置文件创建集群&quot;">​</a></h3><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">./kk</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">create</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">cluster</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-f</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">config-sample.yaml</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">./kk</span><span style="color:#24292E;"> </span><span style="color:#032F62;">create</span><span style="color:#24292E;"> </span><span style="color:#032F62;">cluster</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-f</span><span style="color:#24292E;"> </span><span style="color:#032F62;">config-sample.yaml</span></span></code></pre></div><div class="tip custom-block"><p class="custom-block-title">提示</p><p>如果使用其他名称，则需要将上面的 config-sample.yaml 更改为您自己的文件。</p></div><p>整个安装过程可能需要 10 到 20 分钟，具体取决于您的计算机和网络环境。</p><h3 id="_4-验证安装" tabindex="-1">4. 验证安装 <a class="header-anchor" href="#_4-验证安装" aria-label="Permalink to &quot;4. 验证安装&quot;">​</a></h3><p>安装完成后，您会看到如下内容：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">#####################################################</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">###              Welcome to KubeSphere!           ###</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">#####################################################</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">Console: http://192.168.0.2:30880</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">Account: admin</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">Password: P@88w0rd</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">NOTES：</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">  1. After you log into the console, please check the</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">     monitoring status of service components in</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">     the &quot;Cluster Management&quot;. If any service is not</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">     ready, please wait patiently until all components</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">     are up and running.</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">  2. Please change the default password after login.</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">#####################################################</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">https://kubesphere.io             20xx-xx-xx xx:xx:xx</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">#####################################################</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">#####################################################</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">###              Welcome to KubeSphere!           ###</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">#####################################################</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">Console: http://192.168.0.2:30880</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">Account: admin</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">Password: P@88w0rd</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">NOTES：</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">  1. After you log into the console, please check the</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">     monitoring status of service components in</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">     the &quot;Cluster Management&quot;. If any service is not</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">     ready, please wait patiently until all components</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">     are up and running.</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">  2. Please change the default password after login.</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">#####################################################</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">https://kubesphere.io             20xx-xx-xx xx:xx:xx</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">#####################################################</span></span></code></pre></div>`,83),o=[p];function t(r,c,i,d,h,y){return a(),e("div",null,o)}const k=s(l,[["render",t]]);export{b as __pageData,k as default};
