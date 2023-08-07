import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';

import { PiechartComponent } from './piechart.component';
import { DatagetterService } from '../servicios/datagetter.service';

describe('PiechartComponent', () => {
  let component: PiechartComponent;
  let fixture: ComponentFixture<PiechartComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers: [DatagetterService],
      declarations: [PiechartComponent]
    });
    fixture = TestBed.createComponent(PiechartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it("canvas element", () => {
      const headerElement: HTMLElement = fixture.nativeElement;
      const canvas = headerElement.querySelector("canvas");
      expect(canvas).toBeTruthy();
  });
});
