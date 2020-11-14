---
title: Fetching GBK Encoded Chinese Content With Axios in Node.js
date: 2020-11-15
tags:
  - axios
  - gbk-encoding
  - nodejs
---
```js
const axios = require('axios').default;
const iconv = require('iconv-lite');

axios.get(
  url,
  { responseType: 'arraybuffer'}
).then(
  res => iconv.decode(res.data, 'gbk')
).then(text => {
  console.log(text);
});
```

Reference: [axios/axios#2126](https://github.com/axios/axios/issues/2126#issuecomment-489675527)