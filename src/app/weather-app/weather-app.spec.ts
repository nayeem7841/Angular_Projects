import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { WeatherAppComponent } from './weather-app';

describe('WeatherApp', () => {
  let component: WeatherAppComponent;
  let fixture: ComponentFixture<WeatherAppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WeatherAppComponent],
      providers: [provideHttpClient(), provideHttpClientTesting()],
    }).compileComponents();

    fixture = TestBed.createComponent(WeatherAppComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
