import { Directive, Input, TemplateRef, ViewContainerRef, OnInit } from '@angular/core';
import { environment } from '../environments/environment';

@Directive({
  selector: '[improvingFeatureToggle]'
})
export class FeatureToggleDirective implements OnInit {
  @Input() improvingFeatureToggle: string;

  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef
  ) { }

  ngOnInit() {
    if (this.isEnabled()) {
      this.viewContainer.createEmbeddedView(this.templateRef);
    } else {
      this.viewContainer.clear();
    }
  }

  isEnabled() {
    if (environment.feature['enableAll']) {
      return true;
    }

    return environment.feature[this.improvingFeatureToggle];
  }
}