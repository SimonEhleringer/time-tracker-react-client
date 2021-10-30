export interface PagedResponseModel<TData> {
  data: TData[];
  pageNumber: number;
  pageLength: number;
}

export interface TimeResponseModel {
  id: number;
  startTime: string;
  endTime: string;
  description: string;
}
