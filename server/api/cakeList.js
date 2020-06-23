const models = require('../db');
const express = require('express');
const router = express.Router();
const mysql = require('mysql');
// 连接数据库
const conn = mysql.createConnection(models.mysql);
conn.connect();
// 增加cakelist接口
router.get('/cakelist', (req, res) => {
    const sql = "select * from cake";
    conn.query(sql, (err, result)=>{
        if (err) {
            console.log(err);
        }
        if (result) {
            console.log(result);
            res.json({
              message: 'SUCCESS',
              data: result,
              code: 200
            });
        }
    })
});
module.exports = router;