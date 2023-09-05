---
outline: deep
---

# POST 请求

用Axios如何发起POST请求

## 发起一个 POST 请求

```javascript
axios.post('/user', {
  firstName: 'Fred',
  lastName: 'Flintstone'
})
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });
```

## 发起多个并发请求

```javascript
function getUserAccount() {
  return axios.get('/user/12345');
}

function getUserPermissions() {
  return axios.get('/user/12345/permissions');
}

const [acct, perm] = await Promise.all([getUserAccount(), getUserPermissions()]);

// OR

Promise.all([getUserAccount(), getUserPermissions()])
  .then(function ([acct, perm]) {
    // ...
  });
```

## 将 HTML Form 转换成 JSON 进行请求

```javascript
const { data } = await axios.post('/user', document.querySelector('#my-form'), {
  headers: {
    'Content-Type': 'application/json'
  }
})
```

## Forms

### Multipart (multipart/form-data)

```javascript
const { data } = await axios.post('https://httpbin.org/post', {
    firstName: 'Fred',
    lastName: 'Flintstone',
    orders: [1, 2, 3],
    photo: document.querySelector('#fileInput').files
  }, {
    headers: {
      'Content-Type': 'multipart/form-data'
    }
  }
)
```

### URL encoded form (application/x-www-form-urlencoded)

```javascript
const { data } = await axios.post('https://httpbin.org/post', {
  firstName: 'Fred',
  lastName: 'Flintstone',
  orders: [1, 2, 3]
}, {
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded'
  }
})
```
