import { NgTemplateOutlet } from '@angular/common';
import { Component, computed, contentChildren, input, TemplateRef } from '@angular/core';
import { GridCell, GridCellContext } from './grid-cell';

export interface GridData {
  id: string;
}

export interface ColumnDef<T extends object> {
  field: keyof T;
  name: string;
  width?: string;
}

@Component({
  imports: [NgTemplateOutlet],
  selector: 'ui-grid',
  styleUrl: './grid.scss',
  templateUrl: './grid.html',
})
export class Grid<T extends GridData> {
  readonly dataSource = input.required<T[]>();
  readonly columnDefs = input.required<ColumnDef<T>[]>();
  readonly headerHeight = input<string>('1fr');
  readonly rowHeight = input<string>('1fr');
  readonly isLoading = input<boolean>(false);

  protected readonly gridAutoRows = computed(() => this.headerHeight() + ' ' + '1fr');
  protected readonly gridColumnWidths = computed(() =>
    this.columnDefs()
      .map((c) => c.width || '1fr')
      .join(' '),
  );

  private readonly cellTemplates = contentChildren(GridCell<T>);

  protected getCellTemplate(field: keyof T): TemplateRef<GridCellContext<T>> | undefined {
    const cell = this.cellTemplates().find((template) => template.uiGridCell() === field);

    if (!cell) {
      const columnDef = this.columnDefs().find((columnDef) => columnDef.field === field);
      console.warn(
        [
          `[ui-grid] No matching cell template found for column "${columnDef?.name}".`,
          '',
          `Verify that the template is declared inside <ui-grid> and that the`,
          `column key exists in the grid's column definitions.`,
          '',
          'Example:',
          `  <ng-template uiGridCell="${columnDef?.field.toString()}" let-item let-value="value">`,
          '    {{ value }}',
          '  </ng-template>',
        ].join('\n'),
      );
      return;
    }

    return cell.template;
  }
}
