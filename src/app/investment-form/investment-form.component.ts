import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Investment } from '../models/investment-model';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatNativeDateModule } from '@angular/material/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-investment-form',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    MatCardModule,
    MatInputModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatButtonModule,
    CommonModule,
  ],
  templateUrl: './investment-form.component.html',
  styleUrl: './investment-form.component.scss',
})
export class InvestmentFormComponent implements OnInit {
  investmentForm: FormGroup;
  assetTypes: string[] = [
    'Stocks',
    'Bonds',
    'Real Estate',
    'Commodities',
    'Mutual Funds',
    'ETFs',
  ];
  submitted = false;
  investmentData: Investment | null = null;

  constructor(private fb: FormBuilder) {
    this.investmentForm = this.fb.group({
      assetType: ['', Validators.required],
      quantity: ['', [Validators.required, Validators.min(1)]],
      purchasePrice: ['', [Validators.required, Validators.min(0.01)]],
      purchaseDate: ['', Validators.required],
    });
  }

  ngOnInit(): void {}

  get f() {
    return this.investmentForm.controls;
  }

  onSubmit() {
    this.submitted = true;

    if (this.investmentForm.invalid) {
      return;
    }

    this.investmentData = this.investmentForm.value;
    console.log('Investment Data:', this.investmentData);
    this.investmentForm.reset();
    this.submitted = false;
  }
}
