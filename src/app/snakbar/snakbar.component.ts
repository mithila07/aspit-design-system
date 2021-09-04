import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-snakbar',
  templateUrl: './snakbar.component.html',
  styleUrls: ['./snakbar.component.css']
})
export class SnakbarComponent implements OnInit {

  constructor(private toastr: ToastrService) { }

  ngOnInit() {
  }

  showSuccess() {
    this.toastr.success('Changes have been successfully saved', '', {
      timeOut :  1000000000,
      positionClass: 'toast-bottom-center',
      closeButton: true
    });
  }
  showInfo() {
    this.toastr.info('Hello world!', '', {
      timeOut :  1000000000,
      positionClass: 'toast-bottom-center',
      closeButton: true
    });
  }
  showWarning() {
    this.toastr.warning('Something went wrong', '', {
      timeOut :  1000000000,
      positionClass: 'toast-bottom-center',
      closeButton: true
    });
  }
  showError() {
    this.toastr.error('Something went wrong, try again', '', {
      timeOut :  1000000000,
      positionClass: 'toast-bottom-center',
      closeButton: true
    });
  }

}
