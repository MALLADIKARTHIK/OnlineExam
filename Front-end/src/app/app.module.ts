import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserRegisterComponent } from './user-register/user-register.component';
import { HttpClientModule } from '@angular/common/http';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { ReportsComponent } from './reports/reports.component';
import { TestCategoriesComponent } from './test-categories/test-categories.component';
import { InstructionComponent } from './instruction/instruction.component';
import { ExamUiComponent } from './exam-ui/exam-ui.component';
import { ReportSuccessComponent } from './report-success/report-success.component';
import { AddQuestionComponent } from './add-question/add-question.component';
import { DelQuestionComponent } from './del-question/del-question.component';
import { ListQuestionComponent } from './list-question/list-question.component';
import { UpdateQuesComponent } from './update-ques/update-ques.component';
import { AdminSearchComponent } from './admin-search/admin-search.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TopBarComponent,
    UserLoginComponent,
    UserRegisterComponent,
    AdminLoginComponent,
    UserDashboardComponent,
    AdminDashboardComponent,
    ReportsComponent,
    TestCategoriesComponent,
    InstructionComponent,
    ExamUiComponent,
    ReportSuccessComponent,
    AddQuestionComponent,
    DelQuestionComponent,
    ListQuestionComponent,
    UpdateQuesComponent,
    AdminSearchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
