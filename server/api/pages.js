import { Router } from 'express'

const router = Router()

// Mock Users
const pages = [
  {
    name: 'Home page'
  },
  {
    name: 'A news post',
    isLive: true
  }
]

/* GET page by ID. */
router.get('/page/:id', function (req, res) {
  const id = parseInt(req.params.id)
  if (id >= 0 && id < pages.length) {
    res.json(pages[id])
  } else {
    res.sendStatus(404)
  }
})

export default router
