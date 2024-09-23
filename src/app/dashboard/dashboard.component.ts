import { Component, OnInit } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { FlexLayoutModule } from '@angular/flex-layout';
import { NgxChartsModule } from '@swimlane/ngx-charts';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    MatCardModule,
    MatGridListModule,
    MatToolbarModule,
    MatIconModule,
    FlexLayoutModule,
    NgxChartsModule,
  ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
})
export class DashboardComponent implements OnInit {
  assetAllocationData = [
    { name: 'Stocks', value: 60000 },
    { name: 'Bonds', value: 30000 },
    { name: 'Real Estate', value: 15000 },
    { name: 'Commodities', value: 10000 },
  ];

  marketTrendsData = [
    {
      name: 'Portfolio',
      series: [
        { name: 'April', value: 50000 },
        { name: 'May', value: 52000 },
        { name: 'June', value: 53000 },
        { name: 'July', value: 54000 },
        { name: 'August', value: 55000 },
        { name: 'September', value: 56000 },
      ],
    },
    {
      name: 'Benchmark',
      series: [
        { name: 'April', value: 49000 },
        { name: 'May', value: 50500 },
        { name: 'June', value: 51000 },
        { name: 'July', value: 51500 },
        { name: 'August', value: 52000 },
        { name: 'September', value: 52500 },
      ],
    },
  ];

  totalValue = 120000;
  totalReturns = 15;

  colorScheme: any = {
    domain: ['#5AA454', '#E44D25', '#CFC0BB', '#7aa3e5', '#a8385d', '#aae3f5'],
  };

  constructor() {}

  ngOnInit(): void {}
}
