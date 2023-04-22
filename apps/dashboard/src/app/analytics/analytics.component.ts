import { ChangeDetectionStrategy, Component, OnDestroy, OnInit } from '@angular/core';
import { TravelLocation } from '@sandbox/api-interfaces';
import { SharedDataService } from '@sandbox/core-data';
import { LocationsFacade } from '@sandbox/core-state';
import { Observable, Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'sandbox-analytics',
  templateUrl: './analytics.component.html',
  styleUrls: ['./analytics.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush

})
export class AnalyticsComponent implements OnInit, OnDestroy {

  
  data: any;
  datas: any;
  locations: TravelLocation[] = [];
  private destroy$ = new Subject<void>();
  public barChartData: any;


  

    options: any;

    constructor(
      private locationsFacade: LocationsFacade,
      private shareData: SharedDataService
    ) { }

    ngOnInit() {
        this.locationsFacade.loadLocations();
        const documentStyle = getComputedStyle(document.documentElement);
        const textColor = documentStyle.getPropertyValue('--text-color');
        const textColorSecondary = documentStyle.getPropertyValue('--text-color-secondary');
        const surfaceBorder = documentStyle.getPropertyValue('--surface-border');

        this.shareData.currentData$
      .pipe(takeUntil(this.destroy$))
      .subscribe((data) => {
        this.locations = data;

        this.updateChartData();
      });
        
    

            

        

        
        
        // this.data = {
        //     labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        //     datasets: [
        //         {
        //             type: 'line',
        //             label: 'Dataset 1',
        //             borderColor: documentStyle.getPropertyValue('--blue-500'),
        //             borderWidth: 2,
        //             fill: false,
        //             tension: 0.4,
        //             data: [50, 25, 12, 48, 56, 76, 42]
        //         },
        //         {
        //             type: 'bar',
        //             label: 'Dataset 2',
        //             backgroundColor: documentStyle.getPropertyValue('--green-500'),
        //             data: [21, 84, 24, 75, 37, 65, 34],
        //             borderColor: 'white',
        //             borderWidth: 2
        //         },
        //         {
        //             type: 'bar',
        //             label: 'Dataset 3',
        //             backgroundColor: documentStyle.getPropertyValue('--orange-500'),
        //             data: [41, 52, 24, 74, 23, 21, 32]
        //         }
        //     ]
        // };
        
        this.options = {
            maintainAspectRatio: false,
            aspectRatio: 0.6,
            plugins: {
                legend: {
                    labels: {
                        color: textColor
                    }
                }
            },
            scales: {
                x: {
                    ticks: {
                        color: textColorSecondary
                    },
                    grid: {
                        color: surfaceBorder
                    }
                },
                y: {
                    ticks: {
                        color: textColorSecondary
                    },
                    grid: {
                        color: surfaceBorder
                    }
                }
            }
        };
    }

    ngOnDestroy(): void {
      this.destroy$.next();
      this.destroy$.complete();
    }

    updateChartData() {
      if (!this.locations) {
        return;
      }
    
      const sortedLocations = this.locations.sort((a, b) => {
        const dateA = new Date(a.date);
        const dateB = new Date(b.date);
        return dateA.getTime() - dateB.getTime();
      });
    
      const labels = sortedLocations.map((location) => location.tripTitle);
      const plannedBudgetData = sortedLocations.map(
        (location) => location.initialBudget
      );
      const actualSpentData = sortedLocations.map(
        (location) => location.actualSpent
      );
    
      this.barChartData = {
        labels: labels,
        datasets: [
          {
            label: 'Planned Budget',
            backgroundColor: '#42A5F5',
            borderColor: '#1E88E5',
            data: plannedBudgetData,
          },
          {
            label: 'Actual Spent',
            backgroundColor: '#9CCC65',
            borderColor: '#7CB342',
            data: actualSpentData,
          },
        ],
      };
    }
    
}
