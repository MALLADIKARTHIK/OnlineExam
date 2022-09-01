import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserLoginComponent } from './user-login/user-login.component';
import { HomeComponent } from './home/home.component';
import { UserRegisterComponent } from './user-register/user-register.component';
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
const routes: Routes = [
  {path:'user_login',component:UserLoginComponent},
  {path:'', component:HomeComponent},
  {path:'user_registration',component:UserRegisterComponent},
  {path:'register-here',component:UserRegisterComponent},
  {path:'admin_login',component:AdminLoginComponent},
  {path:'user-dashboard',component:UserDashboardComponent},
  {path:'admin-dashboard',component:AdminDashboardComponent},
  {path:'user_reports',component:ReportsComponent},
  {path:'test-categories',component:TestCategoriesComponent},
  {path:'instruction',component:InstructionComponent},
  {path:'exam-ui',component:ExamUiComponent},
  {path:'report_success',component:ReportSuccessComponent},
  {path:'admin-dashboard/add',component:AddQuestionComponent},
  {path:'admin-dashboard/del',component:DelQuestionComponent},
  {path:'admin-dashboard/list',component:ListQuestionComponent},
  {path:'admin-dashboard/up',component:UpdateQuesComponent},
  {path:'admin-search',component:AdminSearchComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
