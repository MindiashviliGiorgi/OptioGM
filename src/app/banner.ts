export interface BannerFormData {
  id : string;
  name : string;
  channelId : string;
  language : string;
  zoneId : string;
  priority : number;
  url : string;
  fileId : string;
  startDate : Date;
  endDate : Date;
  isCorporate : boolean;
  labels : string;
  active : boolean;
}