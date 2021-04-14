import { Component, OnInit, ViewChild } from '@angular/core';
import { AdminService } from 'src/app/services/admin.service';
import {MatPaginator, MatTableDataSource, MatSort} from "@angular/material";
import { Transaction } from 'src/app/model/transaction';

@Component({
  selector: 'app-transaction-list',
  templateUrl: './transaction-list.component.html',
  styleUrls: ['./transaction-list.component.css']
})
export class TransactionListComponent implements OnInit {
  transactionList: Array<Transaction>;
  dataSource: MatTableDataSource<Transaction> = new MatTableDataSource();
  displayedColumns: string[] = ['id', 'user', 'product'];
  
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private adminService: AdminService) { }


  ngOnInit(): void {
    this.findAllTransactions();
  }

  ngAfterViewInit(){
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  findAllTransactions(){
    this.adminService.findAllTransactions().subscribe(data => {
      this.transactionList = data;
      this.dataSource = data;
    });
  }

}
