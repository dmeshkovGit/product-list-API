import express from 'express';
import {
  addProduct,
  deleteProduct,
  editProduct,
  getAllProducts,
  getOneProduct,
} from '../controllers/productController.js';
import validateBody from '../helpers/validateBody.js';
import {
  createProductSchema,
  editProductSchema,
} from '../schemas/productSchemas.js';

const productRouter = express.Router();

productRouter.post('/', validateBody(createProductSchema), addProduct);
productRouter.put('/:productId', validateBody(editProductSchema), editProduct);
productRouter.delete('/:productId', deleteProduct);
productRouter.get('/:productId', getOneProduct);
productRouter.get('/all', getAllProducts);

export default productRouter;
