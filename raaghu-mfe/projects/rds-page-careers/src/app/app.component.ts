import { Component, OnInit } from '@angular/core';
import { ComponentLoaderOptions } from '@libs/shared';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'careers';
  openFormContent: boolean = false;

  public rdsOpenPositionMfeConfig: ComponentLoaderOptions;
  public rdsApplyPositionMfeConfig: ComponentLoaderOptions;
  
  item = {
    titleHeader: "Open Positions",
    navtabsItems: [
      {
        id: 'developer',
        label: 'Developer',
        tablink: '#developer',
        ariacontrols: 'developer',
      },
      {
        id: 'marketing',
        label: 'Marketing',
        tablink: '#marketing',
        ariacontrols: 'marketing',
      },
      {
        id: 'designer',
        label: 'Designer',
        tablink: '#designer',
        ariacontrols: 'designer',
      },
      {
        id: 'researcher',
        label: 'Researcher',
        tablink: '#researcher',
        ariacontrols: 'researcher',
      }
    ],
    descriptions: [
      {
        type: "developer",
        roleName: "Android Developer",
        roleDescription: "Designing and developing advanced applications for the Android platform · Unit-testing code for robustness, ...",
        buttonLabel: "Apply Now"
      },
      {
        type: "marketing",
        roleName: "Sales",
        roleDescription: "Designing and developing advanced applications for the Android platform · Unit-testing code for robustness, ...",
        buttonLabel: "Apply Now"
      },
      {
        type: "designer",
        roleName: "UI/UX",
        roleDescription: "Designing and developing advanced applications for the Android platform · Unit-testing code for robustness, ...",
        buttonLabel: "Apply Now"
      },
      {
        type: "researcher",
        roleName: "Tester",
        roleDescription: "Designing and developing advanced applications for the Android platform · Unit-testing code for robustness, ...",
        buttonLabel: "Apply Now"
      },
    ],
  }
  ngOnInit(): void {
    // console.log(this.item);
    // this.rdsOpenPositionMfeConfig = {
    //   name: 'RdsCompOpenPosition',
    //   input: {
       

    //   }
    // }

    // this.rdsApplyPositionMfeConfig = {
    //   name: 'RdsCompApplyForPosition',
    //   input: {
       
    //   }
    // }
  }

  openForm() {
    this.openFormContent = true;
  }

}
