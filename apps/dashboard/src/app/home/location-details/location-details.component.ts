import {
  Component,
  Input,
  OnInit,
  OnChanges,
  SimpleChanges,
} from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { TravelLocation } from '@sandbox/api-interfaces';
import { SharedDataService } from '@sandbox/core-data';
import { LocationsFacade } from '@sandbox/core-state';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'sandbox-location-details',
  templateUrl: './location-details.component.html',
  styleUrls: ['./location-details.component.scss'],
  providers: [MessageService],
})
export class LocationDetailsComponent implements OnInit, OnChanges {
  @Input() locations: TravelLocation[] | null = [];

  options: any;

  overlays: any[] = [];

  dialogVisible = false;

  markerTitle: any;

  selectedPosition: any;

  infoWindow: any;

  draggable = true;

  locationForm: FormGroup;

  constructor(
    private messageService: MessageService,
    private formBuilder: FormBuilder,
    private locationsFacade: LocationsFacade,
    private shareData: SharedDataService
  ) {
    this.locationForm = this.formBuilder.group({
      tripTitle: ['', Validators.required],
      city: ['', Validators.required],
      state: [''],
      zip: [''],
      addressOne: [''],
      addressTwo: [''],
      country: ['', Validators.required],
      date: ['', Validators.required],
      description: ['', Validators.required],
      latitude: ['', Validators.required],
      longitude: ['', Validators.required],
      initialBudget: ['', Validators.required],
      actualSpent: ['', Validators.required],
    });
  }

  ngOnInit() {
    this.options = {
      center: { lat: 28.5384, lng: -81.3789 },
      zoom: 3,
    };

    this.initOverlays();

    this.infoWindow = new google.maps.InfoWindow();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['locations'] && this.locations?.length) {
      this.initOverlays();
    };
    this.shareData.updateData(this.locations);

  }

  handleMapClick(event: any) {
    this.dialogVisible = true;
    this.selectedPosition = event.latLng;
    this.locationForm.controls['latitude'].setValue(this.selectedPosition.lat());
    this.locationForm.controls['longitude'].setValue(this.selectedPosition.lng());
  }

  handleOverlayClick(event: any) {
    const isMarker = event.overlay.getTitle != undefined;

    if (isMarker) {
      const title = event.overlay.getTitle();
      this.infoWindow.setContent('' + title + '');
      this.infoWindow.open(event.map, event.overlay);
      event.map.setCenter(event.overlay.getPosition());

      this.messageService.add({
        severity: 'info',
        summary: 'Marker Selected',
        detail: title,
      });
    } else {
      this.messageService.add({
        severity: 'info',
        summary: 'Shape Selected',
        detail: '',
      });
    }
  }

  addMarker() {
    this.overlays.push(
      new google.maps.Marker({
        position: {
          lat: this.selectedPosition.lat(),
          lng: this.selectedPosition.lng(),
        },
        title: this.markerTitle,
        draggable: this.draggable,
      })
    );
    this.markerTitle = null;
    this.dialogVisible = false;
  }

  handleDragEnd(event: any) {
    this.messageService.add({
      severity: 'info',
      summary: 'Marker Dragged',
      detail: event.overlay.getTitle(),
    });
  }

  initOverlays() {
    if (!this.overlays || !this.overlays.length) {
      this.overlays =
        this.locations?.map(
          (location) =>
            new google.maps.Marker({
              position: { lat: location.latitude, lng: location.longitude },
              title: location.tripTitle,
            })
        ) || [];
    }
  }

  zoomIn(map: any) {
    map.setZoom(map.getZoom() + 1);
  }

  zoomOut(map: any) {
    map.setZoom(map.getZoom() - 1);
  }

  clear() {
    this.overlays = [];
  }
  onSubmit() {
    if (this.locationForm.valid) {
      const location: TravelLocation = this.locationForm.value;
      this.locationsFacade.saveLocation(location);
  
      // Add a new marker to the overlays array
      this.overlays.push(
        new google.maps.Marker({
          position: {
            lat: location.latitude,
            lng: location.longitude,
          },
          title: location.tripTitle,
          draggable: this.draggable,
        })
      );
  
      // Re-center the map on the new marker
      this.options = {
        ...this.options,
        center: { lat: location.latitude, lng: location.longitude },
        zoom: 3,
      };
  
      this.locationForm.reset();
      this.dialogVisible = false;
    }
  }
}
