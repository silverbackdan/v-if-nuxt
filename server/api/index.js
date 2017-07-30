import { Router } from 'express'

import pages from './pages'

const router = Router()

// Add USERS Routes
router.use(pages)

export default router
