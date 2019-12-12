import { Injectable } from '@angular/core';
import { PaymentDetail } from './payment-detail.model';
import { HttpClient } from '@angular/common/http';
import axios from 'axios';


@Injectable({
  providedIn: 'root'
})
export class PaymentDetailService {
  formData: any;
  readonly rootURL = 'http://localhost:57538/api';
  list: PaymentDetail[];

  constructor(private Http: HttpClient) { }


  postPaymentDetail() {
    return this.Http.post(this.rootURL + '/PaymentDetails', this.formData);
  }

  refreshList() {
    this.Http.get(this.rootURL + '/PaymentDetails')
      .toPromise()
      .then(res => this.list = res as PaymentDetail[]);
  }

  putPaymentDetail() {
    return this.Http.put(this.rootURL + '/PaymentDetails/' + this.formData.PMId, this.formData);
  }

  deletePaymentDetail(id) {
    return this.Http.delete(this.rootURL + '/PaymentDetails/' + id);
  }
}
