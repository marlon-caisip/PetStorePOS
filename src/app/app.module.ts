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


const routes: Routes = [
  { path: 'dashboard', component: CustomersComponent },
  { path: 'total-sales', component: TotalSalesComponent },
  { path: 'inventory', component: InventoryComponent },
  { path: 'analysis', component: AnalysisComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    LeftNavigationComponent,
    CustomersComponent,
    TotalSalesComponent,
    
    AnalysisComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes),
    CanvasJSAngularChartsModule,
    InventoryComponent
  ],
  exports: [RouterModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
