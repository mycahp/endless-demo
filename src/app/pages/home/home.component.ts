import { Component, HostListener, OnInit } from '@angular/core';
import { Step } from 'src/app/models/step';
import { StepsService } from 'src/app/services/steps.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  public steps: Step[];
  constructor(private stepService: StepsService) {}

  async ngOnInit() {
    const stepsFromAPI: any[] = await this.stepService.getSteps().toPromise();

    this.steps = this.sortAndClean(stepsFromAPI);
  }

  sortAndClean(steps: any[]): Step[] {
    const cleanedSteps = steps.map((step: any) => {
      const currentVersion = step.versionContent.reduce((a: any, b: any) => {
        return new Date(a.effectiveDate) > new Date(b.effectiveDate) ? a : b;
      });

      return {
        number: parseInt(step.stepNumber),
        title: currentVersion.title,
        description: currentVersion.body,
      };
    });

    cleanedSteps.sort((a: any, b: any) => {
      return a.number > b.number ? 1 : -1;
    });

    return cleanedSteps;
  }
}
