import { Component, OnInit } from '@angular/core';
import { StepsService } from 'src/app/services/steps.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public steps = [];
  constructor(private stepService: StepsService) { }

  async ngOnInit() {
    const stepsFromAPI = await this.stepService.getSteps().toPromise();

    this.steps = stepsFromAPI.map((step: any) => {

      const currentVersion = step.versionContent.reduce((a: any, b: any) => {
        return new Date(a.effectiveDate) > new Date(b.effectiveDate) ? a : b;
      })

      return {
        number: parseInt(step.stepNumber),
        title: currentVersion.title,
        description: currentVersion.body,
      };
    });

    this.steps.sort((a: any, b: any) => {
      return a.stepNumber > b.stepNumber ? 1 : -1;
    });

  }


}
