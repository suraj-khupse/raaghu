import { FormBuilder } from '@angular/forms';
import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { RdsBadgeModule, RdsIconModule, RdsPaginationModule } from '@libs/rds-elements';
import { NgxTranslateModule } from '@libs/shared';
import { RdsCompWebsiteLogComponent } from './rds-comp-website-log.component';

export default {
    title: 'Components/WebsiteLog',
    component: RdsCompWebsiteLogComponent,
    decorators: [
        moduleMetadata({
            imports: [
                RdsIconModule,
                RdsPaginationModule,
                RdsBadgeModule,
                NgxTranslateModule.forRoot()
            ],
            providers: [
                FormBuilder
            ],
        })
    ]
} as Meta;

const Template: Story<RdsCompWebsiteLogComponent> = (args: RdsCompWebsiteLogComponent) => ({
    props: {
        ...args
    }
});

export const Default = Template.bind({});
Default.args = {
    websiteLogData: [ "INFO  2022-06-20 20:56:34,313 [4    ] Microsoft.AspNetCore.Hosting.Diagnostics - Request starting HTTP/2 GET https://localhost:44301/AbpUserConfiguration/GetAll?d=1655738793955 application/json -",
    "INFO  2022-06-20 20:56:34,313 [4    ] pNetCore.Cors.Infrastructure.CorsService - CORS policy execution successful.",
   "INFO  2022-06-20 20:56:34,346 [39   ] osoft.EntityFrameworkCore.Infrastructure - Entity Framework Core 5.0.10 initialized 'MyTraining105DemoDbContext' using provider 'Microsoft.EntityFrameworkCore.SqlServer' with options: None",
 "INFO  2022-06-20 20:56:34,353 [4    ] osoft.EntityFrameworkCore.Infrastructure - Entity Framework Core 5.0.10 initialized 'MyTraining105DemoDbContext' using provider 'Microsoft.EntityFrameworkCore.SqlServer' with options: None",
   "INFO  2022-06-20 20:56:34,369 [39   ] uthentication.JwtBearer.JwtBearerHandler - Successfully validated the token.",
  "INFO  2022-06-20 20:56:34,383 [39   ] osoft.EntityFrameworkCore.Infrastructure - Entity Framework Core 5.0.10 initialized 'MyTraining105DemoDbContext' using provider 'Microsoft.EntityFrameworkCore.SqlServer' with options: None",
   "INFO  2022-06-20 20:56:34,399 [31   ] ft.AspNetCore.Routing.EndpointMiddleware - Executing endpoint 'MyTraining105Demo.Sessions.SessionAppService.GetCurrentLoginInformations (MyTraining105Demo.Application)'",
   "INFO  2022-06-20 20:56:34,410 [4    ] uthentication.JwtBearer.JwtBearerHandler - Successfully validated the token.",
"INFO  2022-06-20 20:56:34,410 [4    ] ft.AspNetCore.Routing.EndpointMiddleware - Executing endpoint 'Abp.AspNetCore.Mvc.Controllers.AbpUserConfigurationController.GetAll (Abp.AspNetCore)'",
  "INFO  2022-06-20 20:56:34,411 [31   ] c.Infrastructure.ControllerActionInvoker - Route matched with {area = \"app\", action = \"GetCurrentLoginInformations\", controller = \"Session\"}. Executing controller action with signature System.Threading.Tasks.Task`1[MyTraining105Demo.Sessions.Dto.GetCurrentLoginInformationsOutput] GetCurrentLoginInformations() on controller MyTraining105Demo.Sessions.SessionAppService (MyTraining105Demo.Application).",
  "INFO  2022-06-20 20:56:34,414 [4    ] c.Infrastructure.ControllerActionInvoker - Route matched with {action = \"GetAll\", controller = \"AbpUserConfiguration\", area = \"\"}. Executing controller action with signature System.Threading.Tasks.Task`1[Microsoft.AspNetCore.Mvc.JsonResult] GetAll() on controller Abp.AspNetCore.Mvc.Controllers.AbpUserConfigurationController (Abp.AspNetCore).",
  "INFO  2022-06-20 20:56:34,419 [31   ] osoft.EntityFrameworkCore.Infrastructure - Entity Framework Core 5.0.10 initialized 'MyTraining105DemoDbContext' using provider 'Microsoft.EntityFrameworkCore.SqlServer' with options: None",
 "INFO  2022-06-20 20:56:34,419 [4    ] osoft.EntityFrameworkCore.Infrastructure - Entity Framework Core 5.0.10 initialized 'MyTraining105DemoDbContext' using provider 'Microsoft.EntityFrameworkCore.SqlServer' with options: None",
    
],
    role: 'Advanced',
    alignmentType: "end",
    resetPagination: false,
    recordsPerPage: 10
}
