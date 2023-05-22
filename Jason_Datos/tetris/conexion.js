const mysql= require('mysql')

const connection = mysql.createConnection({
  host:'localhost',
  user:'david',
  password:'david',
  database:'tetris',
})

connection.connect((err)=>{
    if(err) throw err
  console.log('La conexion funciona')
})

connection.query('Select High from highscore', (err, rows)=>{
    if(err) throw err
    console.log('Los datos son: ')
    const high=rows[0]
    const highsc=high.High
    console.log(`El highscore es:${highsc}`)

    return highsc
})
//console.log(`El highscore es:${high.High}`)
connection.end();

module.exports={
  connection,
}