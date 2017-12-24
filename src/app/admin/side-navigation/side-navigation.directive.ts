import { Directive, Input, Renderer2, TemplateRef, ElementRef, ViewContainerRef } from '@angular/core';



@Directive({
    selector: '[appSideNavigationDirective]'
})
export class CustomEventHandlerDirective {

    constructor(
        private templateRef: TemplateRef<any>,
        private viewContainer: ViewContainerRef,
        private element: ElementRef,
        private renderer: Renderer2) {
    }

    @Input() set appSideNavigationDirective(condition: boolean) {
        this.viewContainer.createEmbeddedView(this.templateRef);
        console.log(this.element.nativeElement)
        this.renderer.listen(this.element.nativeElement, 'click', (x) => console.log ('got it', x))
    }



}
