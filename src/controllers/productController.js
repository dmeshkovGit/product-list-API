import HttpError from '../helpers/HttpError.js';
import { Product } from '../models/productModel.js';

export const addProduct = async (req, res, next) => {
  const { imageUrl, name, count, size, weight } = req.body;
  try {
    const productInfo = {
      imageUrl,
      name,
      count,
      size,
      weight,
    };

    const newProduct = await Product.create(productInfo);

    res.status(201).send(newProduct);
  } catch (error) {
    next(error);
  }
};

export const editProduct = async (req, res, next) => {
  try {
    const params = req.body;

    if (Object.keys(params).length === 0) {
      next(HttpError(400, 'Body must have at least one field'));
    }

    const { productId } = req.params;
    console.log(params);

    const editedProduct = await Product.findOneAndUpdate(
      { _id: productId },
      params,
      {
        new: true,
      },
    );

    if (editedProduct === null) {
      next(HttpError(404));
    }

    res.status(200).json(editedProduct);
  } catch (error) {
    next(error);
  }
};

export const deleteProduct = async (req, res, next) => {
  try {
    const { productId } = req.params;

    const deletedContact = await Product.findOneAndDelete({
      _id: productId,
    });

    if (deletedContact === null) {
      next(HttpError(404));
    }

    res.status(200).json(deletedContact);
  } catch (error) {
    next(error);
  }
};

export const getAllProducts = async (req, res, next) => {
  try {
    const products = await Product.find();

    res.status(200).json(products);
  } catch (error) {
    next(error);
  }
};

export const getOneProduct = async (req, res, next) => {
  try {
    const { productId } = req.params;

    const product = await Product.findOne({ _id: productId });

    if (product === null) {
      next(HttpError(404));
    }

    res.status(200).json(product);
  } catch (error) {
    next(error);
  }
};
