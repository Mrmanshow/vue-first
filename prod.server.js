var express = require('express')
var config = require('./config/index')
var axios = require('axios')

const app = express()

//服务代理
var apiRoutes = express.Router();
apiRoutes.get('/getDiscList', function(req, res){
  var url = 'https://c.y.qq.com/splcloud/fcgi-bin/fcg_get_diss_by_tag.fcg';

  axios.get(url, {
    headers: {
      referer: 'https://c.y.qq.com/',
      host: 'c.y.qq.com'
    },
    params: req.query
  }).then((response) => {
    //输出到浏览器端
    res.json(response.data)
  }).catch((e) => {
    console.info(e)
  })
})

apiRoutes.get('/lyric', function(req, res){
  var url = 'https://c.y.qq.com/lyric/fcgi-bin/fcg_query_lyric_new.fcg';

  axios.get(url, {
    headers: {
      referer: 'https://c.y.qq.com/',
      host: 'c.y.qq.com'
    },
    params: req.query
  }).then((response) => {
    var ret = response.data;
    if(typeof ret === 'string') {
      var reg = /^\w+\(({[^()]+})\)$/;
      var mathces = ret.match(reg);
      if(mathces) {
        ret = JSON.parse(mathces[1])
      }
    }
    res.json(ret)
  }).catch((e) => {
    console.info(e)
  })
})

apiRoutes.get('/getDiscSongList', function(req, res){
  var url = 'https://c.y.qq.com/qzone/fcg-bin/fcg_ucc_getcdinfo_byids_cp.fcg';

  axios.get(url, {
    headers: {
      referer: 'https://c.y.qq.com/',
      host: 'c.y.qq.com'
    },
    params: req.query
  }).then((response) => {
    res.json(response.data)
  }).catch((e) => {
    console.info(e)
  })
})

app.use('/api',apiRoutes)

app.use(express.static('./dist'))

var port = process.env.PORT || config.build.port

module.exports = app.listen(port, function(err) {
  if(err) {
    console.log(err)
    return
  }
  console.log('Listening at http://localhost:' + port + '\n');
});

