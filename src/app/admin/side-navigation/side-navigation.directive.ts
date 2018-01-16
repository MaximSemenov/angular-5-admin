import { menuLink } from './side-navigation.service';
import { element } from 'protractor';
import { Renderer2, ElementRef } from '@angular/core';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';

import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';
import { SideNavigationComponent } from './side-navigation.component';

@Directive({
    selector: '[appMyDirective]'

})
export class CustomEventHandlerDirective implements OnInit {

    @Input('appMyDirective') link;

    public menuLinks;

    constructor(
        private elementRef: ElementRef,
        private renderer: Renderer2,
        private sideNav: SideNavigationComponent
    ) { }


    ngOnInit() {

        if (this.link.hasSubmenu) {
            this.renderer.listen(this.elementRef.nativeElement, 'click', () => this.sideNav.toggleSubMenu(this.link));
        }

    }


}
