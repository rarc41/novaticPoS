import { Request, Response } from 'express';
import BaseResponse from '../models/response';
import Sale from '../models/Sale';
import Controller from './controller';

class SaleController extends Controller {
  public getSales = () => async (req: Request, res: Response) => {
    let response: BaseResponse;
    try {
      const sales = await Sale.find();
      if (sales.length > 0) response = this.successResponse(sales);
      else response = this.notFoundResponse();
    } catch (error) {
      console.log(error);
      response = this.failResponse(error);
    }
    res.status(response.getCode()).json(response.toJSON());
  };

  public createSale = () => async (req: Request, res: Response) => {
    let response: BaseResponse;
    try {
      if (!req.body.total) response = this.badResponse('Total de la venta');
      else if (!req.body.customerid) response = this.badResponse('Identificación cliente');
      else if (!req.body.customername) response = this.badResponse('Nombre cliente');
      else if (!req.body.user) response = this.badResponse('Vendedor');
      else {
        const newSale = new Sale(req.body);
        await newSale.save();
        response = this.createSuccessResponse(newSale);
      }
    } catch (error) {
      console.log(error);
      response = this.failResponse(error);
    }
    res.status(response.getCode()).json(response.toJSON());
  };

  public updateSale = () => async (req: Request, res: Response) => {
    let response: BaseResponse;
    try {
      await Sale.findOneAndUpdate({ _id: req.params.saleId }, req.body);
      const sale = await Sale.findOne({ _id: req.params.saleId });
      response = this.updateSuccessResponse(sale);
    } catch (error) {
      console.log(error);
      response = this.failResponse(error);
    }
    res.status(response.getCode()).json(response.toJSON());
  };
}
export default new SaleController();
