module.exports = (app, db) => {
    app.get('/showdata', async (req, res) => {
        
      try {
  
        const resultFromProjectModel = await db.addpage.findAll({
          attributes:['id','create_date','approve_date','success_date','title','work_section','detail','status']
        })
        console.log(resultFromProjectModel)
        res.send(resultFromProjectModel)
  
      } catch(err){
        console.log(err)
        res.status(500).send(`${err}`)
      }
    })
  }