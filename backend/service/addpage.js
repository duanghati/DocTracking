const passport = require('passport')


module.exports = (app, db) => {

  app.post('/Test1', (req, res) => {
    res.send('TEST OssK')
  })

  app.post('/GetTimelineJob', (req, res) => {
    let currIdRef = ''

    currIdRef = req.body.idRef

    db.addpageDetail.findAll({
        where: {
          IdRef: currIdRef
        }
      })
      .then(result => {
        res.status(201).send(result)
      })
      .catch(error => {
        res.status(400).json({
          message: error.message
        });
      });
  })

  app.post('/CreateNewJob', (req, res) => {

    let currTitle = ''
    let currWorkSection = ''
    let currDetail = ''
    let currStatus = ''

    currTitle = req.body.title
    currWorkSection = req.body.work_section
    currDetail = req.body.detail
    currStatus = req.body.status

    db.addpage.create({
        create_date: new Date(),
        title: currTitle,
        work_section: currWorkSection,
        detail: currDetail,
        status: currStatus
      })
      .then(result => {
        //Update DataDetail
        db.addpageDetail.create({
            IdRef: result.id,
            StateValue: currStatus,
            UpdateBy: 'SYSTEM',
          }).then(result => res.status(201).send(result))
          .catch(err => res.status(400).send({
            message: err.message
          }))
      })
      .catch((err) => {
        console.error(err);
        res.status(400).send({
          message: err.message
        })
      })
  })

  app.post('/UpdateJobState', (req, res) => {
    let currId = ''
    let currStatus = ''

    currId = req.body.id
    currStatus = req.body.status
    currUpdateBy = 'SYSTEM'
    db.addpage.update({
        status: currStatus
      }, {
        where: {
          id: currId
        }
      })
      .then(result => {
        //Update DataDetail
        db.addpageDetail.create({
            IdRef: currId,
            StateValue: currStatus,
            UpdateBy: currUpdateBy,
          }).then(result => res.status(201).send(result))
          .catch(err => res.status(400).send({
            message: err.message
          }))
      })
      .catch(error => {
        res.status(400).json({
          message: error.message
        });
      });
  })


}