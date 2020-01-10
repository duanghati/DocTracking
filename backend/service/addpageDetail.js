module.exports = (app, db) => {
    app.post('/create-addpageDetail', async (req, res) => {
        
      try {
  
        const resultFromProjectModel = await db.addpageDetail.findAll({
          attributes:['IdRef','StateValue','UpdateBy']
        })
        console.log(resultFromProjectModel)
        res.send(resultFromProjectModel)
  
      } catch(err){
        console.log(err)
        res.status(500).send(`${err}`)
      }
    })
}