import { Component, signal } from '@angular/core';
import { ColumnDef, Grid, GridCell, GridData } from '@ngx-ui/grid';

interface Employee extends GridData {
  firstName: string;
  lastName: string;
  role: string;
}

@Component({
  imports: [Grid, GridCell],
  selector: 'app-root',
  styleUrl: './app.scss',
  templateUrl: './app.html',
})
export class App {
  readonly employees = signal<Employee[]>([
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
  ]);

  readonly columnDefs = signal<ColumnDef<Employee>[]>([
    { field: 'id', name: 'ID', width: '100px' },
    { field: 'firstName', name: 'First name', width: '200px' },
    { field: 'lastName', name: 'Last name', width: '1fr' },
    { field: 'role', name: 'Role', width: '200px' },
  ]);
}
