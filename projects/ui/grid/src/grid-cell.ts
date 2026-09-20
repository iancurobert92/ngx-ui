import { Directive, inject, input, TemplateRef } from '@angular/core';
import { GridData } from './grid';

export interface GridCellContext<T extends GridData> {
  $implicit: T;
  item: T;
  value: unknown;
}

@Directive({
  selector: 'ng-template[uiGridCell]',
})
export class GridCell<T extends GridData> {
  readonly uiGridCell = input.required<string>();
  readonly template = inject(TemplateRef<GridCellContext<T>>);
}
