import BaseResponse from '../models/response';

class Controller {
  public customResponse(code: number, message: string, content?: any): BaseResponse {
    return new BaseResponse(code, message, content);
  }

  public successResponse(content: any): BaseResponse {
    return new BaseResponse(200, 'Información disponible', content);
  }

  public notFoundResponse(content: any = []): BaseResponse {
    return new BaseResponse(200, 'No se encuentra información disponible', content);
  }

  public createSuccessResponse(content: any): BaseResponse {
    return new BaseResponse(201, 'Información almacenada correctamente', content);
  }

  public deleteSuccessResponse(content: any): BaseResponse {
    return new BaseResponse(200, 'Información eliminada correctamente', content);
  }

  public updateSuccessResponse(content: any): BaseResponse {
    return new BaseResponse(200, 'Información actualizada correctamente', content);
  }

  public badResponse(content: any = ''): BaseResponse {
    return new BaseResponse(400, `Parámetros incompletos ${content}`, null);
  }

  public failResponse(content: any): BaseResponse {
    return new BaseResponse(500, 'Ha ocurrido un error', content);
  }
}
export default Controller;
