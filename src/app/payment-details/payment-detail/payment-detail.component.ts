import { Component, OnInit } from '@angular/core';
import { PaymentDetailService } from 'src/app/shared/payment-detail.service';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-payment-detail',
  templateUrl: './payment-detail.component.html',
  styleUrls: ['./payment-detail.component.css']
})
export class PaymentDetailComponent implements OnInit {

  constructor(public service: PaymentDetailService, private toastr: ToastrService) { }

  ngOnInit() {
    this.resetForm();
  }


  resetForm(form?: NgForm) {
    if (form != null) {
      form.form.reset();
    }
    this.service.formData = {
      PMId: 0,
      CardOwnerName: '',
      CardNumber: 0,
      ExpirationDate: '',
      CVV: 0
    };
  }

  onSubmit(form: NgForm) {
    if (this.service.formData.PMId === 0) {
      this.insertRecord(form);
    } else {
      this.updateRecord(form);
    }
  }

  insertRecord(form: NgForm) {
    console.log("data:",this.service.formData);
    console.log("CardOwnerName",typeof this.service.formData.CardOwnerName);
    console.log("cardNumber",typeof this.service.formData.CardNumber);
    console.log("ExpirationDate",typeof this.service.formData.ExpirationDate);
    console.log("CVV",typeof this.service.formData.CVV);
    this.service.postPaymentDetail().subscribe(
      res => {
        this.resetForm(form);
        this.toastr.success('Submitted successfully', 'Payment Detail Register');
        this.service.refreshList();
      },
      err => {
        console.log(err);
      }
    );
  }


  updateRecord(form: NgForm) {
    this.service.putPaymentDetail().subscribe(
      res => {
        this.resetForm(form);
        this.toastr.info('Submitted successfully', 'Payment Detail Register');
        this.service.refreshList();
      },
      err => {
        console.log(err);
      }
    )
  }
}
