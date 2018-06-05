const db = require ('../db')

async function viewItems (req, res) {
  let msg = await db.viewItems()
  res.status = 200
  res.send(msg)
}

async function viewItem (req, res) {
  let msg = await db.viewItem(req.body)
  res.status = 200
  res.send(msg)
}

function addItem (req, res) {
    db.addItem(req.body)
    res.status= 200
    res.send('Item added')
}

function deleteItem(req, res) {
  console.log('about to delete')
  db.deleteItem(req.params.id)
  res.send('Deleted')

}

function editItem(req, res) {
  db.editItem(req)
  res.send('edited')

}

//     EXPORTS =================================================================

exports.addItem = addItem
exports.deleteItem = deleteItem
exports.viewItems = viewItems
exports.viewItem = viewItem
exports.editItem = editItem
