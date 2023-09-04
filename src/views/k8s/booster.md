---
outline: deep
---

# 配置加速器

如果您无法从 dockerhub.io
下载镜像，强烈建议您预先配置仓库的镜像地址（即加速器）以加快下载速度。您可以参考 [Docker 官方文档](https://docs.docker.com/registry/recipes/mirror/#configure-the-docker-daemon)
，或执行以下步骤。

## 获取加速器地址

您需要获取仓库的一个镜像地址以配置加速器。您可以参考如何[从阿里云获取加速器地址](https://help.aliyun.com/zh/acr/user-guide/accelerate-the-pulls-of-docker-official-images)。

## 配置仓库镜像地址

您可以直接配置 Docker 守护程序，也可以使用 KubeKey 进行配置。

### 配置 Docker 守护程序

::: tip 备注
采用此方法，您需要预先安装 Docker。
:::

1.执行如下命令：

```shell
sudo mkdir -p /etc/docker
```

``` shell
sudo vim /etc/docker/daemon.json
```

2.在文件中添加 registry-mirrors 键值对。

```json
{
  "registry-mirrors": ["https://<my-docker-mirror-host>"]
}
```

::: tip 备注
请将命令中的地址替换成您实际的加速器地址。
:::

### 使用 KubeKey 配置仓库镜像地址

1.在安装前用 KubeKey 创建 config-sample.yaml 文件，并定位到文件中的 registry 位置。

```yaml
registry:

  registryMirrors: []

  insecureRegistries: []

  privateRegistry: ""
```

::: tip 备注
有关 registry 部分各个参数的更多信息，请参见 Kubernetes 集群配置。
:::

2.在 registryMirrors 处填入仓库的镜像地址并保存文件。有关安装的更多信息，请参见[多节点安装](multi-node.md)。

::: tip 备注
[在 Linux 上通过 All-in-One 模式安装 KubeSphere](https://www.kubesphere.io/zh/docs/v3.3/quick-start/all-in-one-on-linux/) 不需要 config-sample.yaml 文件。该模式下请采用第一种方法进行配置。
:::
