import { Component, OnInit, ViewChild } from '@angular/core';
import { CdkDrag, CdkDragDrop, CdkDragEnter, CdkDropList, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-buildzone',
  templateUrl: './buildzone.component.html',
  styleUrls: ['./buildzone.component.scss'],
})
export class BuildzoneComponent implements OnInit {
  @ViewChild('doneList', { static: true })
  doneList!: CdkDropList;
  sectionLists = []
  todo = [
   [
         {
        id:'23237',
        title: 'task 1',
        type:'field',
        "columnCount": 1,
        "controlWidth": 3,
        }
    ],[
         {
        id:'23237',
        title: 'task 2',
        type:'field',
        "columnCount": 1,
        "controlWidth": 3,
        }
    ],[
         {
        id:'23237',
        title: 'task 3',
        type:'field',
        "columnCount": 1,
        "controlWidth": 3,
        }
    ],[
         {
        id:'23237',
        title: 'task 4',
        type:'field',
        "columnCount": 1,
        "controlWidth": 3,
        }
    ]
  ];

  // done = [
  //   ['Get up', 'Fall asleep','Fall aslee','read','look','watch'],
  //   ['Brush teeth', 'Fall'],
  //   ['Take a shower', 'Falled'],
  //   ['Check e-mail','Check'],
    
  // ];
  done=[
    [
        {
        id:'23231',
        title: 'read book',
        type:'field',
        "columnCount": 1,
        "controlWidth":1,
        },
        {
        id:'23232',
        title: 'listen music',
        type:'field',
        "columnCount": 1,
        "controlWidth": 1,
        },
        {
        id:'23233',
        title: 'watch movie',
        type:'field',
        "columnCount": 1,
        "controlWidth": 1,
        },
        
    ],
    [
        {
        id:'23234',
        title: 'read book 2',
        type:'field',
        "columnCount": 1,
        "controlWidth": 1,
        },
        {
        id:'23235',
        title: 'listen music 2',
        type:'field',
         "columnCount": 1,
        "controlWidth": 1,
        },
        {
        id:'23236',
        title: 'watch movie 2',
        type:'field',
        "columnCount": 1,
        "controlWidth": 1,
        },
        
    ],
    [
         {
        id:'23237',
        title: 'read book 3',
        type:'field',
        "columnCount": 1,
        "controlWidth": 3,
        }
    ]
]


 timePeriods = [
    'Bronze age',
    'Iron age',
    'Middle ages',
    'Early modern period',
    'Long nineteenth century',
  ];
  DropListConnectedTo:string[]=["doneList"]
  isConnectToparentList: boolean=true;
  ngOnInit(): void {
    this.getDropListConnections();
  }
  dragEntered(event: CdkDragEnter<string[]>) {
    // This method is called when dragging enters a container
    const targetContainerId = event.container.id;
   setTimeout(() => {
   this.addDropList()
   }, 3000);
  }
  drop(event: CdkDragDrop<any[]>): void {
    //  this.isConnectToparentList=event.data.length>=3?true:false
    console.log(this.isConnectToparentList)
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
          event.container.data,
          event.previousIndex,
          event.currentIndex);
this.done = this.done.map(item => {
    if (Array.isArray(item)) {
        return item;
    } else {
        return [item];
    }
});
         this.done = this.done.filter((subArray:any) => subArray.length > 0);
         
    }
    this.isConnectToparentList=false;
  }

dropondone(event: CdkDragDrop<any[]>): void {
    //  this.isConnectToparentList=event.data.length>=3?true:false
    console.log(this.isConnectToparentList)
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
          event.container.data,
          event.previousIndex,
          event.currentIndex);
this.done = this.done.map(item => {
    if (Array.isArray(item)) {
        return item;
    } else {
        return [item];
    }
});
         this.done = this.done.filter((subArray:any) => subArray.length > 0);
         
    }
    this.isConnectToparentList=false;
  }

  
getDropListConnections(){
  // this.DropListConnectedTo=[]
if (this.done.length > 0) {
    for (let i = 0; i < this.done.length; i++) {
        this.DropListConnectedTo.push(`droplist-${i}`);
    }

}
}

  /** Predicate function that doesn't allow items to be dropped into a list. */
  noReturnPredicate(drag: CdkDrag, drop: CdkDropList) {
return drop.data.length>=3?false:true;
    // return item.data.length>3;
  }


  addDropList(){
    this.DropListConnectedTo.push('doneList')
  }
//    connectionPredicate(drag: CdkDrag, drop: CdkDropList) {
// return drop.data.length<3?true:false;
//     // return item.data.length>3;
//   }
}
