import { Router, Request, Response } from 'express'
import Product from '../models/Product'
import { authMiddleware } from '../middleware/auth'
import { upload } from '../middleware/upload'

const router = Router()

// Get all products
router.get('/', async (req: Request, res: Response) => {
  try {
    const { category, minPrice, maxPrice, sort } = req.query

    let query: any = {}

    if (category && category !== 'all') {
      query.category = category
    }

    if (minPrice || maxPrice) {
      query.price = {}
      if (minPrice) query.price.$gte = Number(minPrice)
      if (maxPrice) query.price.$lte = Number(maxPrice)
    }

    let sortOption: any = { createdAt: -1 }
    if (sort === 'price-asc') sortOption = { price: 1 }
    if (sort === 'price-desc') sortOption = { price: -1 }

    const products = await Product.find(query).sort(sortOption).populate('seller', 'name email')
    res.json(products)
  } catch (error) {
    res.status(500).json({ message: 'Server error', error })
  }
})

// Get single product
router.get('/:id', async (req: Request, res: Response) => {
  try {
    const product = await Product.findById(req.params.id).populate('seller', 'name email')
    if (!product) {
      return res.status(404).json({ message: 'Product not found' })
    }
    res.json(product)
  } catch (error) {
    res.status(500).json({ message: 'Server error', error })
  }
})

// Create product (protected) - with image upload
router.post('/', authMiddleware, upload.single('image'), async (req: Request, res: Response) => {
  try {
    const { name, description, price, category, carat, color, origin, stock } = req.body

    // Get image URL from uploaded file or use provided URL
    let imageUrl = req.body.image || ''
    if (req.file) {
      imageUrl = `/uploads/${req.file.filename}`
    }

    const product = new Product({
      name,
      description,
      price: Number(price),
      category,
      carat: Number(carat),
      color,
      origin,
      image: imageUrl,
      stock: Number(stock) || 1,
      seller: req.user.userId,
    })

    await product.save()
    res.status(201).json(product)
  } catch (error) {
    res.status(500).json({ message: 'Server error', error })
  }
})

// Update product (protected) - with image upload
router.put('/:id', authMiddleware, upload.single('image'), async (req: Request, res: Response) => {
  try {
    const product = await Product.findById(req.params.id)
    
    if (!product) {
      return res.status(404).json({ message: 'Product not found' })
    }

    if (product.seller.toString() !== req.user.userId) {
      return res.status(403).json({ message: 'Not authorized' })
    }

    // Prepare update data
    const updateData: any = { ...req.body }
    
    // Handle image update
    if (req.file) {
      updateData.image = `/uploads/${req.file.filename}`
    }

    // Convert numeric fields
    if (updateData.price) updateData.price = Number(updateData.price)
    if (updateData.carat) updateData.carat = Number(updateData.carat)
    if (updateData.stock) updateData.stock = Number(updateData.stock)

    const updatedProduct = await Product.findByIdAndUpdate(
      req.params.id,
      updateData,
      { new: true }
    )

    res.json(updatedProduct)
  } catch (error) {
    res.status(500).json({ message: 'Server error', error })
  }
})

// Delete product (protected)
router.delete('/:id', authMiddleware, async (req: Request, res: Response) => {
  try {
    const product = await Product.findById(req.params.id)
    
    if (!product) {
      return res.status(404).json({ message: 'Product not found' })
    }

    if (product.seller.toString() !== req.user.userId) {
      return res.status(403).json({ message: 'Not authorized' })
    }

    await Product.findByIdAndDelete(req.params.id)
    res.json({ message: 'Product deleted' })
  } catch (error) {
    res.status(500).json({ message: 'Server error', error })
  }
})

export default router
