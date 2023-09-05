---
outline: deep
---

# 操作系统基础配置

进行一些基础的配置，为搭建 `K8s` 环境做准备。基础环境的配置需要在所有 `K8s` 集群节点上执行，本文选取 `k8s-master-1` 节点作为演示。

::: tip 提示
其余 `K8s` 集群节点参照本文档进行相应的更改执行相关操作。
:::

## 配置主机名


```shell
# 更改主机名称
hostnamectl set-hostname k8s-master-1

# 切入新会话，验证修改主机名称是否成功
bash
```

::: tip 提示
`master` 节点的主机名前缀使用 `k8s-master-`

`worker` 节点的主机名前缀使用 `k8s-worker-`
:::

## 配置 DNS

```shell
echo "nameserver 114.114.114.114" > /etc/resolv.conf
```

## 配置服务器时区

配置服务器时区为 `Asia/Shanghai`

```shell
timedatectl set-timezone Asia/Shanghai
```

查看服务器时区

```shell
timedatectl
```

输出如下：

```shell
[root@k8s-master-1 ~]# timedatectl
      Local time: Tue 2023-09-05 17:18:54 CST
  Universal time: Tue 2023-09-05 09:18:54 UTC
        RTC time: Tue 2023-09-05 09:18:53
       Time zone: Asia/Shanghai (CST, +0800)
     NTP enabled: yes
NTP synchronized: yes
 RTC in local TZ: no
      DST active: n/a
```


## 配置时间同步

## 关闭系统防火墙

## 禁用 SELinux

## 安装系统依赖

## 配置基于 SSH 密钥
