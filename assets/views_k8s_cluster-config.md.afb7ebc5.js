import{_ as s,o as n,c as a,Q as l}from"./chunks/framework.ca65985f.js";const b=JSON.parse('{"title":"Kubernetes 集群配置","description":"","frontmatter":{"outline":"deep"},"headers":[],"relativePath":"views/k8s/cluster-config.md","filePath":"views/k8s/cluster-config.md","lastUpdated":1694654094000}'),e={name:"views/k8s/cluster-config.md"},p=l(`<h1 id="kubernetes-集群配置" tabindex="-1">Kubernetes 集群配置 <a class="header-anchor" href="#kubernetes-集群配置" aria-label="Permalink to &quot;Kubernetes 集群配置&quot;">​</a></h1><p>当创建 Kubernetes 集群时，您可以使用 <a href="./kubekey">KubeKey</a> 去生成含有集群基本信息的配置文件 (config-sample.yaml)。有关配置文件中的 Kubernetes 相关参数，请参阅以下示例。</p><div class="language-yaml vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">yaml</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#85E89D;">kubernetes</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#85E89D;">version</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">v1.22.12</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#85E89D;">imageRepo</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">kubesphere</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#85E89D;">clusterName</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">cluster.local</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#85E89D;">masqueradeAll</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">false</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#85E89D;">maxPods</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">110</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#85E89D;">nodeCidrMaskSize</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">24</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#85E89D;">proxyMode</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">ipvs</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#85E89D;">network</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#85E89D;">plugin</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">calico</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#85E89D;">calico</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#85E89D;">ipipMode</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">Always</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#85E89D;">vxlanMode</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">Never</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#85E89D;">vethMTU</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">1440</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#85E89D;">kubePodsCIDR</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">10.233.64.0/18</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#85E89D;">kubeServiceCIDR</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">10.233.0.0/18</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#85E89D;">registry</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#85E89D;">registryMirrors</span><span style="color:#E1E4E8;">: []</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#85E89D;">insecureRegistries</span><span style="color:#E1E4E8;">: []</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#85E89D;">privateRegistry</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#85E89D;">addons</span><span style="color:#E1E4E8;">: []</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#22863A;">kubernetes</span><span style="color:#24292E;">:</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#22863A;">version</span><span style="color:#24292E;">: </span><span style="color:#032F62;">v1.22.12</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#22863A;">imageRepo</span><span style="color:#24292E;">: </span><span style="color:#032F62;">kubesphere</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#22863A;">clusterName</span><span style="color:#24292E;">: </span><span style="color:#032F62;">cluster.local</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#22863A;">masqueradeAll</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">false</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#22863A;">maxPods</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">110</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#22863A;">nodeCidrMaskSize</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">24</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#22863A;">proxyMode</span><span style="color:#24292E;">: </span><span style="color:#032F62;">ipvs</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#22863A;">network</span><span style="color:#24292E;">:</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#22863A;">plugin</span><span style="color:#24292E;">: </span><span style="color:#032F62;">calico</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#22863A;">calico</span><span style="color:#24292E;">:</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#22863A;">ipipMode</span><span style="color:#24292E;">: </span><span style="color:#032F62;">Always</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#22863A;">vxlanMode</span><span style="color:#24292E;">: </span><span style="color:#032F62;">Never</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#22863A;">vethMTU</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">1440</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#22863A;">kubePodsCIDR</span><span style="color:#24292E;">: </span><span style="color:#032F62;">10.233.64.0/18</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#22863A;">kubeServiceCIDR</span><span style="color:#24292E;">: </span><span style="color:#032F62;">10.233.0.0/18</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#22863A;">registry</span><span style="color:#24292E;">:</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#22863A;">registryMirrors</span><span style="color:#24292E;">: []</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#22863A;">insecureRegistries</span><span style="color:#24292E;">: []</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#22863A;">privateRegistry</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#22863A;">addons</span><span style="color:#24292E;">: []</span></span></code></pre></div><p>以下表格会详细描述上面的参数。</p><table><thead><tr><th>参数</th><th>描述</th></tr></thead><tbody><tr><td>kubernetes</td><td></td></tr><tr><td>version</td><td>Kubernetes 安装版本。如未指定 Kubernetes 版本，<a href="./kubekey">KubeKey</a> v3.0.7 默认安装 Kubernetes v1.23.10。有关更多信息，请参阅<a href="./kubekey#支持矩阵">支持矩阵</a>。</td></tr><tr><td>imageRepo</td><td>用于下载镜像的 Docker Hub 仓库</td></tr><tr><td>clusterName</td><td>Kubernetes 集群名称。</td></tr><tr><td>masqueradeAll*</td><td>如果使用纯 iptables 代理模式，masqueradeAll 即让 kube-proxy 对所有流量进行源地址转换 (SNAT)。它默认值为 false。</td></tr><tr><td>maxPods*</td><td>Kubelet 可运行 Pod 的最大数量，默认值为 110。</td></tr><tr><td>nodeCidrMaskSize*</td><td>集群中节点 CIDR 的掩码大小，默认值为 24。</td></tr><tr><td>proxyMode*</td><td>使用的代理模式，默认为 ipvs。</td></tr><tr><td>network</td><td></td></tr><tr><td>plugin</td><td>是否使用 CNI 插件。KubeKey 默认安装 Calico，您也可以指定为 Flannel。请注意，只有使用 Calico 作为 CNI 插件时，才能使用某些功能，例如 Pod IP 池。</td></tr><tr><td>calico.ipipMode*</td><td>用于集群启动时创建 IPv4 池的 IPIP 模式。如果值设置除 Never 以外的值，则参数 vxlanMode 应该被设置成 Never。此参数允许设置值 Always，CrossSubnet 和 Never。默认值为 Always。</td></tr><tr><td>calico.vxlanMode*</td><td>用于集群启动时创建 IPv4 池的 VXLAN 模式。如果该值不设为 Never，则参数 ipipMode 应该设为 Never。此参数允许设置值 Always，CrossSubnet 和 Never。默认值为 Never。</td></tr><tr><td>calico.vethMTU*</td><td>最大传输单元（maximum transmission unit 简称 MTU）设置可以通过网络传输的最大数据包大小。默认值为 1440。</td></tr><tr><td>kubePodsCIDR</td><td>Kubernetes Pod 子网的有效 CIDR 块。CIDR 块不应与您的节点子网和 Kubernetes 服务子网重叠。</td></tr><tr><td>kubeServiceCIDR</td><td>Kubernetes 服务的有效 CIDR 块。CIDR 块不应与您的节点子网和 Kubernetes Pod 子网重叠。</td></tr><tr><td>registry</td><td></td></tr><tr><td>registryMirrors</td><td>配置 Docker 仓库镜像以加速下载。有关详细信息，请参阅<a href="https://docs.docker.com/registry/recipes/mirror/#configure-the-docker-daemon" target="_blank" rel="noreferrer">配置 Docker 守护进程</a>。</td></tr><tr><td>insecureRegistries</td><td>设置不安全镜像仓库的地址。有关详细信息，请参阅<a href="https://docs.docker.com/registry/insecure/" target="_blank" rel="noreferrer">测试不安全仓库</a>。</td></tr><tr><td>privateRegistry*</td><td>配置私有镜像仓库，用于离线安装（例如，Docker 本地仓库或 Harbor）。有关详细信息，请参阅<a href="https://www.kubesphere.io/zh/docs/v3.3/installing-on-linux/introduction/air-gapped-installation/" target="_blank" rel="noreferrer">离线安装</a>。</td></tr></tbody></table><div class="tip custom-block"><p class="custom-block-title">备注</p><ul><li>*默认情况下，KubeKey 不会在配置文件中定义这些参数，您可以手动添加这些参数并自定义其值。</li><li>addons 用于安装云原生扩展 (Addon)（YAML 或 Chart）。有关详细信息，请参阅此<a href="https://github.com/kubesphere/kubekey/blob/release-2.2/docs/addons.md" target="_blank" rel="noreferrer">文件</a>。</li><li>此页面仅列出 KubeKey 创建的配置文件中的部分参数。有关其他参数的详细信息，请参阅此<a href="https://github.com/kubesphere/kubekey/blob/release-2.2/docs/config-example.md" target="_blank" rel="noreferrer">示例文件</a>。</li></ul></div>`,6),o=[p];function t(r,c,i,E,y,d){return n(),a("div",null,o)}const k=s(e,[["render",t]]);export{b as __pageData,k as default};
