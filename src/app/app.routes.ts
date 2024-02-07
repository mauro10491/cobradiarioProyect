import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { CreteUserComponent } from './modules/users/pages/create/crete-user/crete-user.component';
import { LayoutComponent } from './modules/layout/components/layout/layout.component';
import { ModalComponent } from './modules/users/pages/update/modal/modal.component';
import { CreateClientComponent } from './modules/clients/pages/create/create-client/create-client.component';
import { UpdateClientComponent } from './modules/clients/pages/update/update-client/update-client.component';
import { CreditsComponent } from './shared/components/credits/credits/credits.component';
import { CreateCreditComponent } from './modules/credits/pages/create/create-credit/create-credit.component';
import { CreditUsersComponent } from './shared/components/creditsUsers/credit-users/credit-users.component';
import { CreateCreditUserComponent } from './modules/credits-user/pages/create-credit-user/create-credit-user.component';

export const routes: Routes = [
    {path: '', component: LayoutComponent},
    {path: 'create-user', component: CreteUserComponent},
    {path: 'user/:id', component: ModalComponent},
    {path: 'create-client', component: CreateClientComponent}, 
    {path: 'client/:id', component: UpdateClientComponent}, 
    {path: 'credit/:id', component: CreditsComponent},
    {path: 'create-credit/:id', component: CreateCreditComponent},
    {path: 'credit-user/:id', component : CreditUsersComponent},
    {path: 'create-credit-user/:id', component: CreateCreditUserComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})

export class AppRoutingModule {}