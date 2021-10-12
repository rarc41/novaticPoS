export default class BaseResponse {
  private message: string;
  private code: number;
  private data?: any;

  constructor(code: number, message: string, response?: any) {
    this.message = message;
    this.code = code;
    this.data = response;
  }

  public getMessage(): string {
    return this.message;
  }

  public getCode(): number {
    return this.code;
  }

  public getResponse(): any | undefined {
    return this.data ? this.data : undefined;
  }

  public toJSON() {
    return { message: this.message, data: this.data };
  }
}
