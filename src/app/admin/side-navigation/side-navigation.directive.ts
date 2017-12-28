import { element } from 'protractor';
import { Renderer2, ElementRef } from '@angular/core';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';

import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
    selector: '[appMyDirective]'

})
export class CustomEventHandlerDirective implements OnInit {

    constructor(
        private elementRef: ElementRef,
        private renderer: Renderer2,
        // private templateRef: TemplateRef<any>,
        private viewContainer: ViewContainerRef,
    ) { }

    @Input() set appMyDirective(condition: boolean) {
        // this.viewContainer.createEmbeddedView(this.templateRef);

        console.log(condition);
        console.log(typeof condition);

        if (condition) {
            // this.renderer.listen(this.elementRef.nativeElement, 'click', () => console.log('Hey Hey Hey'));
        }

    }

    ngOnInit() {
        if (true) {
            // this.renderer.listen(this.elementRef.nativeElement, 'click', () => console.log('Hey Hey Hey'));
        }


        // this.elementRef.nativeElement.style.backgroundColor = 'red';
    }


}
