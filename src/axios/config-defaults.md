---
outline: deep
---

# 默认配置

## 默认配置

您可以指定默认配置，它将作用于每个请求。

### 全局 axios 默认值

```javascript
axios.defaults.baseURL = 'https://api.example.com';
axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
```

### 自定义实例默认值

```javascript
// 创建实例时配置默认值
const instance = axios.create({
  baseURL: 'https://api.example.com'
});

// 创建实例后修改默认值
instance.defaults.headers.common['Authorization'] = AUTH_TOKEN;
```

### 配置的优先级

配置将会按优先级进行合并。它的顺序是：在[lib/defaults/index.js](https://github.com/axios/axios/blob/main/lib/defaults/index.js)
中找到的库默认值，然后是实例的 `defaults` 属性，最后是请求的 `config`
参数。后面的优先级要高于前面的。下面有一个例子。

