import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// import { TestComponent } from '../../components/test.components/test.component';
// import { TestModule } from '../../components/test.components/test.module';

// const appRoutes: Routes = [
//   {
//     path: 'test-component',
//     component: TestComponent,
//     outlet: 'popup'
//   },
//   {
//     path: 'my-rout-component-path',
//     loadChildren: 'app/components/test.components/test.module#TestModule',
//     data: { preload: true }
//  },
// ];

@NgModule({
  imports: [
    // TestModule,
    // RouterModule.forRoot(
    //   appRoutes,
    //   { enableTracing: true } // <-- debugging purposes only
    // )
  ],
  declarations: [
    // TestComponent
  ],
  exports: [
    RouterModule
  ]
})
export class RoutingModule { }
