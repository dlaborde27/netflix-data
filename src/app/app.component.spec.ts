import { TestBed } from "@angular/core/testing";
import { RouterTestingModule } from "@angular/router/testing";
import { HttpClientModule } from "@angular/common/http";
import { AppComponent } from "./app.component";
import { MastheadComponent } from "./masthead/masthead.component";
import { NavigationComponent } from "./navigation/navigation.component";
import { PiechartComponent } from "./piechart/piechart.component";
import { ProjectComponent } from "./project/project.component";
import { TablefilmComponent } from "./tablefilm/tablefilm.component";
import { FooterComponent } from "./footer/footer.component";

describe("AppComponent", () => {
    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [
                RouterTestingModule,

                //Registre el módulo para realizar peticiones asincrónicas
                HttpClientModule,
            ],
            declarations: [
                //Registre TODOS los componentes que son instanciados en la aplicación mediante un selector
                NavigationComponent,
                MastheadComponent,
                ProjectComponent,
                TablefilmComponent,
                PiechartComponent,
                FooterComponent
            ],
        }).compileComponents();
    });

    it("should create the navComponent", () => {
        const fixture = TestBed.createComponent(AppComponent);
        fixture.detectChanges();
        const compiled = fixture.debugElement.nativeElement
        expect(compiled.querySelector('app-navigation')).not.toBe(null);
    });

    it("should create the headComponent", () => {
        const fixture = TestBed.createComponent(AppComponent);
        fixture.detectChanges();
        const compiled = fixture.debugElement.nativeElement;
        expect(compiled.querySelector("app-masthead")).not.toBe(null);
    });

    it("should create the projectComponent", () => {
        const fixture = TestBed.createComponent(AppComponent);
        fixture.detectChanges();
        const compiled = fixture.debugElement.nativeElement;
        expect(compiled.querySelector("app-project")).not.toBe(null);
    });

    it("should create the tableComponent", () => {
        const fixture = TestBed.createComponent(AppComponent);
        fixture.detectChanges();
        const compiled = fixture.debugElement.nativeElement;
        expect(compiled.querySelector("app-tablefilm")).not.toBe(null);
    });

    it("should create the pieChartComponent", () => {
        const fixture = TestBed.createComponent(AppComponent);
        fixture.detectChanges();
        const compiled = fixture.debugElement.nativeElement;
        expect(compiled.querySelector("app-piechart")).not.toBe(null);
    });

    it("should create the footerComponent", () => {
        const fixture = TestBed.createComponent(AppComponent);
        fixture.detectChanges();
        const compiled = fixture.debugElement.nativeElement;
        expect(compiled.querySelector("app-footer")).not.toBe(null);
    });
});
