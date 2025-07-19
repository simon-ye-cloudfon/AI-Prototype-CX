const express = require('express');
const axios = require('axios');
const cors = require('cors');
const path = require('path');
const debug = require('debug')('server');

const app = express();
app.use(cors());
app.use((req, res, next) => {
  debug('Incoming %s request to %s', req.method, req.path);
  next();
});
app.use(express.json());

// 配置静态文件目录 - 使用嵌套路由结构
// 首先配置根目录的静态文件服务
app.use(express.static(path.join(__dirname)));
// 然后配置子目录的静态文件服务，确保路径正确映射
app.use('/aiReport', express.static(path.join(__dirname, 'aiReport')));
app.use('/webinar', express.static(path.join(__dirname, 'webinar')));
app.use('/flowlog', express.static(path.join(__dirname, 'flowlog')));

// 添加路由重定向，确保外部访问时能正确访问到根目录下的导航页面
app.get('/', (req, res) => {
  res.redirect('/index.html');
});

app.post('/api/register', async (req, res) => {
  console.log('Received registration request:', JSON.stringify(req.body, null, 2));
  try {
    console.log('Forwarding to webhook...');
    const response = await axios.post('https://cloudfon.apac-ancontact.com/webhook/v2.0/work_flow/start/c71d04f8-e4bf-44b3-8425-9fb72180c7d1', req.body);
    console.log('Webhook response:', {
      status: response.status,
      data: response.data,
      headers: response.headers
    });
    if (response.status === 200) {
      res.json({ success: true, data: response.data });
    } else {
      throw new Error(`Webhook returned status ${response.status}`);
    }
  } catch (error) {
    console.error('Registration error:', error);
    res.status(500).json({ success: false, error: error.message });
  }
});

app.listen(3000, '0.0.0.0', () => {
  console.log('Server running on http://0.0.0.0:3000');
});
