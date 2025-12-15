import { Router, Request, Response } from 'express'
import Product from '../models/Product'
import User from '../models/User'
import { adminMiddleware } from '../middleware/admin'

const router = Router()

// Get all products for admin (including pending)
router.get('/products', adminMiddleware, async (req: Request, res: Response) => {
  try {
    const { status } = req.query
    
    let query: any = {}
    if (status && status !== 'all') {
      query.status = status
    }

    const products = await Product.find(query)
      .populate('seller', 'name email')
      .sort({ createdAt: -1 })
    
    res.json(products)
  } catch (error) {
    res.status(500).json({ message: 'Server error', error })
  }
})

// Get dashboard statistics
router.get('/stats', adminMiddleware, async (req: Request, res: Response) => {
  try {
    const totalProducts = await Product.countDocuments()
    const pendingProducts = await Product.countDocuments({ status: 'pending' })
    const approvedProducts = await Product.countDocuments({ status: 'approved' })
    const rejectedProducts = await Product.countDocuments({ status: 'rejected' })
    const totalUsers = await User.countDocuments()

    res.json({
      totalProducts,
      pendingProducts,
      approvedProducts,
      rejectedProducts,
      totalUsers,
    })
  } catch (error) {
    res.status(500).json({ message: 'Server error', error })
  }
})

// Approve product
router.patch('/products/:id/approve', adminMiddleware, async (req: Request, res: Response) => {
  try {
    const product = await Product.findByIdAndUpdate(
      req.params.id,
      { status: 'approved' },
      { new: true }
    ).populate('seller', 'name email')

    if (!product) {
      return res.status(404).json({ message: 'Product not found' })
    }

    res.json(product)
  } catch (error) {
    res.status(500).json({ message: 'Server error', error })
  }
})

// Reject product
router.patch('/products/:id/reject', adminMiddleware, async (req: Request, res: Response) => {
  try {
    const product = await Product.findByIdAndUpdate(
      req.params.id,
      { status: 'rejected' },
      { new: true }
    ).populate('seller', 'name email')

    if (!product) {
      return res.status(404).json({ message: 'Product not found' })
    }

    res.json(product)
  } catch (error) {
    res.status(500).json({ message: 'Server error', error })
  }
})

// Delete product (admin only)
router.delete('/products/:id', adminMiddleware, async (req: Request, res: Response) => {
  try {
    const product = await Product.findByIdAndDelete(req.params.id)

    if (!product) {
      return res.status(404).json({ message: 'Product not found' })
    }

    res.json({ message: 'Product deleted successfully' })
  } catch (error) {
    res.status(500).json({ message: 'Server error', error })
  }
})

// Get all users
router.get('/users', adminMiddleware, async (req: Request, res: Response) => {
  try {
    const users = await User.find().select('-password').sort({ createdAt: -1 })
    res.json(users)
  } catch (error) {
    res.status(500).json({ message: 'Server error', error })
  }
})

export default router
