import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { StoreModule } from '@ngrx/store'

import { RegisterComponent } from 'src/app/auth/components/register/register.component'
import { RouterModule } from '@angular/router'
import { ReactiveFormsModule } from '@angular/forms'
import { reducers } from 'src/app/auth/store/reducers'
import { AuthService } from 'src/app/auth/services/auth.service'

const routes = [
  {
    path: 'register',
    component: RegisterComponent,
  },
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule,
    StoreModule.forFeature('auth', reducers),
  ],
  declarations: [RegisterComponent],
  providers: [AuthService],
})
export class AuthModule {}
