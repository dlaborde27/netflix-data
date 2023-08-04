import { ComponentFixture, TestBed } from "@angular/core/testing";
import { HttpClientModule } from "@angular/common/http";

import { TablefilmComponent } from "./tablefilm.component";
import { DatagetterService } from "../servicios/datagetter.service";

describe("TablefilmComponent", () => {
    let component: TablefilmComponent;
    let fixture: ComponentFixture<TablefilmComponent>;

    beforeEach(() => {
        jasmine.DEFAULT_TIMEOUT_INTERVAL = 10000
        TestBed.configureTestingModule({
            imports: [HttpClientModule],
            providers: [DatagetterService],
            declarations: [TablefilmComponent],
        });
        fixture = TestBed.createComponent(TablefilmComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    afterAll(() =>{
      jasmine.DEFAULT_TIMEOUT_INTERVAL = 5000
    })

    it("should request service user after Angular calls ngOnInit", (done: DoneFn) => {
        component.ngOnInit();

        fixture.whenStable().then(() => {
            expect(component.data.length).toBeGreaterThan(0);
            done();
        });
    });
});
