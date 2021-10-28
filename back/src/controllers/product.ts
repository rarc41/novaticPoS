import { Request, Response } from 'express';
import BaseResponse from '../models/response';
import Product from '../models/Product';
import Controller from './controller';

class ProductController extends Controller {
  public getProducts = () => async (req: Request, res: Response) => {
    let response: BaseResponse;
    try {
      const products = await Product.find();
      if (products.length > 0) response = this.successResponse(products);
      else response = this.notFoundResponse();
    } catch (error) {
      console.log(error);
      response = this.failResponse(error);
    }
    res.status(response.getCode()).json(response.toJSON());
  };

  public createProduct = () => async (req: Request, res: Response) => {
    let response: BaseResponse;
    try {
      if (!req.body.id) response = this.badResponse('Identificador');
      else if (!req.body.description) response = this.badResponse('Descripción');
      else if (!req.body.price) response = this.badResponse('Valor unitario');
      else {
        const product = await Product.findOne({ id: req.body.id });
        if (product) response = this.customResponse(400, 'El ID del producto ya está registrado', null);
        else {
          const newProduct = new Product(req.body);
          await newProduct.save();
          response = this.createSuccessResponse(newProduct);
        }
      }
    } catch (error) {
      console.log(error);
      response = this.failResponse(error);
    }
    res.status(response.getCode()).json(response.toJSON());
  };

  public updateProduct = () => async (req: Request, res: Response) => {
    let response: BaseResponse;
    try {
      await Product.findOneAndUpdate({ id: req.params.productId }, req.body);
      const product = await Product.findOne({ id: req.params.productId });
      response = this.updateSuccessResponse(product);
    } catch (error) {
      console.log(error);
      response = this.failResponse(error);
    }
    res.status(response.getCode()).json(response.toJSON());
  };
}
export default new ProductController();
