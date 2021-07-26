interface IGenericException {
  success: boolean;
  message: string;
}
interface IResponse {
  data: IGenericException;
  status: number;
}

export default class GenericException extends Error {
  public readonly success: boolean;
  public readonly message: string;
  public readonly status: number;

  constructor(response: IResponse) {
    super();
    this.success = response.data?.success || false;
    this.message = response.data?.message || "";
    this.status = response.status;
  }
}
