export class Advert {
  public actionId: string;
  public NGO: string;
  public actionName: string;
  public description: string;
  public actionDate: string;
  public createdBy: string;
  public region: string;
  public status: string;
  public workingHours?: number;
  public volunteersRequired?: number;
  public volunteersCommited?: number;
  constructor(
    description: string,
    NGO: string,
    actionName: string,
    actionDate: string,
    createdBy: string,
    region: string,
    status: string,
    workingHours: number,
    volunteersRequired: number,
    volunteersCommited: number
  ) {
    (this.description = description),
      (this.NGO = NGO),
      (this.actionName = actionName),
      (this.actionDate = actionDate),
      (this.region = region),
      (this.createdBy = createdBy),
      (this.status = status),
      (this.workingHours = workingHours),
      (this.volunteersRequired = volunteersRequired),
      (this.volunteersCommited = volunteersCommited);
  }
}
