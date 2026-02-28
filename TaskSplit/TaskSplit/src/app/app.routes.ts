import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { AccountComponent } from './components/account/account.component';
import { TaskListComponent } from './components/task-list/task-list.component';
import { HabitListComponent } from './components/habit-list/habit-list.component';
import { AuthGuardService } from './services/auth-guard.service';

export const routes: Routes = [
    //{path: '', component:AppComponent},
    { path: '', redirectTo: '/home', pathMatch: 'full'},
    { path:'home', component: HomeComponent },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegistrationComponent },
    { path: 'account', component: AccountComponent },
    { path: 'task-list', component: TaskListComponent },
    { path: 'habit-list', component: HabitListComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}