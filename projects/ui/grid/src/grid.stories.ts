import { ArgTypes, moduleMetadata, type Meta, type StoryObj } from '@storybook/angular-vite';
import { Grid, GridData } from './grid';
import { GridCell } from './grid-cell';

interface Employee extends GridData {
  firstName: string;
  lastName: string;
  role: string;
}

const meta: Meta<Grid<Employee>> = {
  title: 'Example/Grid',
  component: Grid,
  tags: ['autodocs'],
  decorators: [
    moduleMetadata({
      imports: [GridCell],
    }),
  ],
  argTypes: {
    getCellTemplate: { table: { disable: true } },
    gridColumnWidths: { table: { disable: true } },
  } as unknown as Meta<Grid<Employee>>['argTypes'],
};

export default meta;
type Story = StoryObj<Grid<Employee>>;

export const Default: Story = {
  render: (args) => ({
    props: args,
    template: `
      <ui-grid
        [dataSource]="dataSource"
        [columnDefs]="columnDefs"
        [headerHeight]="headerHeight"
        [rowHeight]="rowHeight"
      >
        <ng-template uiGridCell="id" let-item let-value="value">
          {{ value }}
        </ng-template>

        <ng-template uiGridCell="firstName" let-item let-value="value">
          {{ value }}
        </ng-template>

        <ng-template uiGridCell="lastName" let-item let-value="value">
          {{ value }}
        </ng-template>

        <ng-template uiGridCell="role" let-item let-value="value">
          <span class="role-input">
            <input [value]="value" />
          </span>
        </ng-template>
      </ui-grid>
    `,
  }),
  args: {
    dataSource: [
      {
        id: '1',
        firstName: 'Robert',
        lastName: 'Iancu',
        role: 'Frontend Engineer',
      },
      {
        id: '2',
        firstName: 'Marius',
        lastName: 'Iancu',
        role: 'Frontend Engineer',
      },
    ],
    columnDefs: [
      { field: 'id', name: 'ID', width: '100px' },
      { field: 'firstName', name: 'First name', width: '200px' },
      { field: 'lastName', name: 'Last name', width: '1fr' },
      { field: 'role', name: 'Role', width: '200px' },
    ],
    headerHeight: '50px',
    rowHeight: '50px',
  },
};
