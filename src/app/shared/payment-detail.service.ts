import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PaymentDetail } from './payment-detail.model';

@Injectable({
  providedIn: 'root',
})
export class PaymentDetailService {
  constructor(private http: HttpClient) {}
  readonly baseUrl = 'http://localhost:46407/api/PaymentDetails';
  formData: PaymentDetail = new PaymentDetail();
  list: PaymentDetail[];

  postPaymentDetail() {
    return this.http.post(this.baseUrl, this.formData);
  }

  putPaymentDetail() {
    return this.http.put(
      this.baseUrl + '/' + this.formData.paymentDetailId,
      this.formData
    );
  }

  deletePaymentDetail(id: number) {
    return this.http.delete(this.baseUrl + '/' + id);
  }

  refreshList() {
    return this.http
      .get(this.baseUrl)
      .toPromise()
      .then((response) => (this.list = response as PaymentDetail[]));
  }
}
