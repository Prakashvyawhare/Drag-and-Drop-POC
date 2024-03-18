import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { Component, ElementRef, QueryList, ViewChildren } from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent {

  // @ViewChildren('divs') divs: QueryList<ElementRef>;
    @ViewChildren('outsideDivs') outsideDivs!: QueryList<ElementRef>;
   callActivityForm = [{header: 'Call Detail',
                        rows: [
                            [{key: 'subject', label: 'Subject',   width: 100 }],
                            [{key: 'startTime', label: 'Starts On',  width: 50},
                                    {key: 'endTime', label: 'Ends On', width: 50}],
                            [{key: 'description', label: 'Description',  width: 100}],
                            [{key: 'details', label: 'Details', width: 100}]
                        ]
                    }];
  name = 'Angular';

 drop(event: CdkDragDrop<string[]>) {
  if (event.previousContainer === event.container){

      moveItemInArray(this.callActivityForm[0].rows, event.previousIndex, event.currentIndex);
  }else
      {
        transferArrayItem(event.previousContainer.data,
          event.container.data,
          event.previousIndex,
          event.currentIndex);
      }
  }

  dropHorizon(event: CdkDragDrop<string[]>, i: number) {
      moveItemInArray(this.callActivityForm[0].rows[i], event.previousIndex, event.currentIndex);
      if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
          event.container.data,
          event.previousIndex,
          event.currentIndex);
    }
  }

  // getDivs(rectangle, i, m) {
  //     //this.divs.forEach((div: ElementRef) => console.log(div.nativeElement.id));
  //     const field = this.divs.find((div: ElementRef) => div.nativeElement.id === 'div-' + i + '-' + m);
  //     const field2 = this.outsideDivs.find((div: ElementRef) => div.nativeElement.id === 'outside-div-' + i + '-' + m);
  //     console.log(field2);
  //     field.nativeElement.style.width = `${rectangle.width}px`;
  //     field.nativeElement.style.height = `${rectangle.height}px`;
  //     field2.nativeElement.style.width = `${rectangle.width}px`;
  //     field2.nativeElement.style.height = `${rectangle.height}px`;
  // }

  // onResizeEnd(event: ResizeEvent, i, m): void {
  //     console.log('Element was resized', event);
  //     this.getDivs(event.rectangle, i, m);      
  // }
}
