export interface BillDetailOptions {
  title: string;
  companyName: string;
  reason: string;
  amount: number;
  companyLogo: string;
}

export interface InfoMessageOptions {
  messageTitle?: string,
  message?: string
}

export interface BillInfoOptions extends BillDetailOptions, InfoMessageOptions {
}