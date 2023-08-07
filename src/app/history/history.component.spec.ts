import { ComponentFixture, TestBed } from "@angular/core/testing";
import { CarouselModule } from "@coreui/angular";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { HistoryComponent } from "./history.component";

describe("HistoryComponent", () => {
    let component: HistoryComponent;
    let fixture: ComponentFixture<HistoryComponent>;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [CarouselModule, BrowserAnimationsModule],
            declarations: [HistoryComponent],
        });
        fixture = TestBed.createComponent(HistoryComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it("should create", () => {
        expect(component).toBeTruthy();
    });

    it("div element", () => {
        const headerElement: HTMLElement = fixture.nativeElement;
        const div = headerElement.querySelector("div");
        expect(div).toBeTruthy();
    });
});
