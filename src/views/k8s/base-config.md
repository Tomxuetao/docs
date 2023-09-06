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

重启网络

```shell
service network restart
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

安装 `chrony` 作为时间同步软件。

```shell
yum install chrony -y
```

修改配置文件 `/etc/chrony.conf`，修改 `ntp` 服务器配置

```shell
vim /etc/chrony.conf

# 删除所有的server配置
# server 0.centos.pool.ntp.org iburst
# server 1.centos.pool.ntp.org iburst
# server 2.centos.pool.ntp.org iburst
# server 3.centos.pool.ntp.org iburst

# 添加阿里云时间同步服务器
server ntp1.aliyun.com iburst 
server ntp2.aliyun.com iburst 
server ntp3.aliyun.com iburst 
server ntp4.aliyun.com iburst 
server ntp5.aliyun.com iburst 
server ntp6.aliyun.com iburst 
```

重启并设置 `chrony` 服务开机自启动

```shell
systemctl enable chronyd --now
```

验证 `chrony` 同步状态

```shell
# 执行查看命令
chronyc sourcestats -v

# 正确结果如下：
[root@k8s-master-1 ~]# chronyc sourcestats -v
210 Number of sources = 4
                             .- Number of sample points in measurement set.
                            /    .- Number of residual runs with same sign.
                           |    /    .- Length of measurement set (time).
                           |   |    /      .- Est. clock freq error (ppm).
                           |   |   |      /           .- Est. error in freq.
                           |   |   |     |           /         .- Est. offset.
                           |   |   |     |          |          |   On the -.
                           |   |   |     |          |          |   samples. \
                           |   |   |     |          |          |             |
Name/IP Address            NP  NR  Span  Frequency  Freq Skew  Offset  Std Dev
==============================================================================
dns1.synet.edu.cn          22  11  379m     +0.000      0.021    +60ns   182us
sv1.ggsrv.de               25  12  500m     +0.021      0.198    -19ms  2059us
139.199.214.202            27  17  517m     -0.003      0.100  -1815us  1471us
36.110.235.196             13   6  207m     +0.008      0.041   +480us   126us
```

## 关闭系统防火墙

```shell
systemctl stop firewalld && systemctl disable firewalld

# 查看防火墙状态
systemctl status firewalld

# 正确结果如下：
[root@k8s-master-1 ~]# systemctl status firewalld
   firewalld.service - firewalld - dynamic firewall daemon
   Loaded: loaded (/usr/lib/systemd/system/firewalld.service; disabled; vendor preset: enabled)
   Active: inactive (dead)
     Docs: man:firewalld(1)
[root@k8s-master-1 ~]# 
```

## 禁用 SELinux

[SELinux](https://www.redhat.com/zh/topics/linux/what-is-selinux)

## 安装系统依赖

## 配置基于 SSH 密钥
