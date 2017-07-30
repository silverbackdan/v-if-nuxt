import { Router } from 'express'

const router = Router()

// Mock Users
const pages = [
  {
    name: 'A top level page',
    linkLabel: 'Page 1',
    children: [
      {
        name: 'A sub page 1 (live)',
        linkLabel: 'Sub Page 1',
        isLive: true
      },
      {
        name: 'A sub page 2 (draft)',
        linkLabel: 'Sub Page 2',
        isLive: false
      }
    ]
  },
  {
    name: 'Another top level page',
    linkLabel: 'Page 2'
  }
]

/* GET top pages listing. */
router.get('/pages', function (req, res, next) {
  res.json(pages)
})

/* GET page by ID. */
router.get('/page/:id', function (req, res, next) {
  const id = parseInt(req.params.id)
  if (id >= 0 && id < pages.length) {
    res.json(pages[id])
  } else {
    res.sendStatus(404)
  }
})

/* GET sub page by ID. */
router.get('/page/:id/:subid', function (req, res, next) {
  const id = parseInt(req.params.id)
  const subid = parseInt(req.params.subid)
  if (pages[id] && pages[id].children && pages[id].children[subid]) {
    return res.json(pages[id].children[subid])
  } else {
    res.sendStatus(404)
  }
})

export default router
