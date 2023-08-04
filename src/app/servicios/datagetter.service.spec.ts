import { TestBed } from "@angular/core/testing";
import { HttpClientModule } from "@angular/common/http";

import { DatagetterService } from "./datagetter.service";
import { Collection } from "../interfaces/collection";

describe("DatagetterService", () => {
    let service: DatagetterService;

    beforeEach(() => {
        jasmine.DEFAULT_TIMEOUT_INTERVAL = 10000
        TestBed.configureTestingModule({
            imports: [HttpClientModule],
            providers: [DatagetterService],
        });
        service = TestBed.inject(DatagetterService);
    });

    afterAll(() =>{
      jasmine.DEFAULT_TIMEOUT_INTERVAL = 5000
    });

    it("Datagetter should return value from observable", (done: DoneFn) => {
        service.getResponse().subscribe((data) => {
            expect((data as Collection[]).length).toBeGreaterThan(0);
            done();
        });
    });
});
