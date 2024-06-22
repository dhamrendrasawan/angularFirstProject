import { RouterModule, Routes } from '@angular/router';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { AboutusComponent } from './components/aboutus/aboutus.component';
import { CareersComponent } from './components/careers/careers.component';
import { ContactusComponent } from './components/contactus/contactus.component';
import { HomeComponent } from './components/home/home.component';
import { NgModule } from '@angular/core';
import { ProductlistComponent } from './components/productlist/productlist.component';
import { PermanentjobComponent } from './components/permanentjob/permanentjob.component';
import { ContactjobComponent } from './components/contactjob/contactjob.component';
import { authguardGuard } from './guards/authguard.guard';
import { ProductComponent } from './components/product/products.component';
import { UserComponent } from './components/user/user.component';
import { UserdetailsComponent } from './components/userdetails/userdetails.component';
import { userdetailsResolver } from './resolvers/userdetails.resolver';
import { hasChangesGuard } from './guards/haschangeguard.guard';

    export const routes: Routes = [
       /* { path: 'home', component: HomeComponent },
        { path: 'aboutus', component: AboutusComponent },
        { path: 'careers', component: CareersComponent },
        { path: 'contactus', component: ContactusComponent },
        { path:'products',component:ProductlistComponent},
        { path: '', component: HomeComponent },
        { path: '**', component: NotfoundComponent }*/
        { path: 'home', component: HomeComponent, canDeactivate:  [hasChangesGuard] },
        {
            path: 'aboutus',
            component: AboutusComponent,
            canDeactivate: [hasChangesGuard]
        },
        { path: 'contactus', component: ContactusComponent },
        {
            path: 'careers',
            component: CareersComponent,
            canActivateChild: [authguardGuard],
            canDeactivate: [hasChangesGuard],
            children: [
                { path: "permanent", component: PermanentjobComponent },
                { path: "contract", component: ContactjobComponent }
            ]
        },
        { path:'products',component:ProductlistComponent},
        { path: 'productdetails', component: ProductComponent },
    {
        path: 'users',
        component: UserComponent,
       // canActivate: [authguardGuard]
    },
    {
        path: 'users',
        component: UserComponent,
        canActivate: [authguardGuard]
    },
    {
        path: 'userdetails/:id',
        component: UserdetailsComponent,
        resolve: { userInfo: userdetailsResolver }
    },
    ];
    @NgModule({
        imports: [RouterModule.forRoot(routes)],
        exports: [RouterModule]
      })
      export class AppRoutingModule { }