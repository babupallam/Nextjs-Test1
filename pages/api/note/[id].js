import nc from 'next-connect'
import notes from '../../../src/data/data'

//function to get a note based on id
const getNote = id => notes.find(n => n.id === parseInt(id))

const handler = nc()
  .get((req, res) => {
    //get the requested note back to the client based on id
    const note = getNote(req.query.id)

    if (!note) {
      res.status(404)
      res.end()
      return
    }

    res.json({data: note})
  })
  .patch((req, res) => {
      //updating the note curresponding to the id given by the client
    const note = getNote(req.query.id)

    if (!note) {
      res.status(404)
      res.end()
      return
    }
    //find the index of the note by searching the notes array based on the given id
    const i = notes.findIndex(n => n.id === parseInt(req.query.id))
    
    //replacing contant of note by req.body
    const updated = {...note, ...req.body}
    notes[i] = updated
    res.json({data: updated})
  })
  .delete((req, res) => {
    const note = getNote(req.query.id)

    if (!note) {
      res.status(404)
      res.end()
      return
    }
    const i = notes.findIndex(n => n.id === parseInt(req.query.id))
    
    notes.splice(i, 1)

    res.json({data: req.query.id})
  })
  

export default handler