import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Rating} from '../../classes/rating';
import {RatingService} from '../../services/rating.service';

@Component({
  selector: 'app-rate-vehicle',
  templateUrl: './rate-vehicle.component.html',
  styleUrls: ['./rate-vehicle.component.css'],
  providers: [RatingService]
})
export class RateVehicleComponent implements OnInit {

  public id: number;
  public ratings: Rating[];

  constructor(
    private activatedRoute: ActivatedRoute,
    private ratingService: RatingService,
    private router: Router) { }

  ngOnInit() {
    this.id = parseInt(this.activatedRoute.snapshot.paramMap.get('id'), 10);
    this.ratingService.getRatings().subscribe((response: Rating[]) => {
      this.ratings = response;
    });
  }

  public rateVehicle(ratingId: number) {
    this.ratingService.setRatingForVehicle(ratingId, this.id).subscribe((response) => {
      if (response === null) {
        window.alert('Köszönjük!');
        this.router.navigate(['/profile']);
      }
    });
  }

}
