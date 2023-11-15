import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LeftNavigationComponent } from './left-navigation/left-navigation.component';
import { CustomersComponent } from './customers/customers.component';
import { TotalSalesComponent } from './total-sales/total-sales.component';
import { InventoryComponent } from './inventory/inventory.component';
import { AnalysisComponent } from './analysis/analysis.component';
import { CanvasJSAngularChartsModule } from '@canvasjs/angular-charts';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; 
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

// routing configuration
const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: CustomersComponent },
  { path: 'total-sales', component: TotalSalesComponent },
  { path: 'inventory', component: InventoryComponent },
  { path: 'analysis', component: AnalysisComponent },
];

// configuration for the standalone component and other modules

@NgModule({
  declarations: [
    AppComponent,
    LeftNavigationComponent,
    TotalSalesComponent,
    AnalysisComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes),
    CanvasJSAngularChartsModule,
    InventoryComponent,
    FormsModule,
    BrowserAnimationsModule,
    CustomersComponent,
    ReactiveFormsModule, 
    CommonModule
    
  ],
  exports: [RouterModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
