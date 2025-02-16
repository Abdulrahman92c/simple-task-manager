import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent {
  @Output() filterChange = new EventEmitter<string>();

  onFilterChange(event: Event): void {
    const filterValue = (event.target as HTMLSelectElement).value;
    this.filterChange.emit(filterValue);
  }
}
