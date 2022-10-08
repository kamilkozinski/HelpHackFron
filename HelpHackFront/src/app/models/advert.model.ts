export class Advert {
  public actionId: string;
  // actionType: string;
  // actionDate: string;
  // workingHours: number;
  public NGO: string;
  public actionName: string;
  public description: string;
  public actionDate: string;
  public createdBy: string;
  public region: string;
  public status: string;
  // public createdBy: string;

  constructor(
    description: string,
    NGO: string,
    actionName: string,
    actionDate: string,
    createdBy: string,
    region: string,
    status: string
  ) {
    (this.description = description),
      (this.NGO = NGO),
      (this.actionName = actionName),
      (this.actionDate = actionDate),
      (this.region = region),
      (this.createdBy = createdBy),
      (this.status = status);
  }
}
