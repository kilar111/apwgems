import { Router, Request, Response } from 'express'
import Order from '../models/Order'
import { authMiddleware } from '../middleware/auth'

const router = Router()

// Get user orders
router.get('/my-orders', authMiddleware, async (req: Request, res: Response) => {
  try {
    const orders = await Order.find({ user: req.user.userId })
      .populate('items.product')
      .sort({ createdAt: -1 })
    
    res.json(orders)
  } catch (error) {
    res.status(500).json({ message: 'Server error', error })
  }
})

// Get single order
router.get('/:id', authMiddleware, async (req: Request, res: Response) => {
  try {
    const order = await Order.findById(req.params.id).populate('items.product')
    
    if (!order) {
      return res.status(404).json({ message: 'Order not found' })
    }

    if (order.user.toString() !== req.user.userId) {
      return res.status(403).json({ message: 'Not authorized' })
    }

    res.json(order)
  } catch (error) {
    res.status(500).json({ message: 'Server error', error })
  }
})

// Create order
router.post('/', authMiddleware, async (req: Request, res: Response) => {
  try {
    const { items, shippingAddress, paymentMethod } = req.body

    const totalAmount = items.reduce(
      (sum: number, item: any) => sum + item.price * item.quantity,
      0
    )

    const order = new Order({
      user: req.user.userId,
      items,
      totalAmount,
      shippingAddress,
      paymentMethod,
    })

    await order.save()
    res.status(201).json(order)
  } catch (error) {
    res.status(500).json({ message: 'Server error', error })
  }
})

export default router
