import { Component, OnInit } from '@angular/core';
import { AlbumsService } from '../albums.service';
import { Album } from '../models';
import { Location } from '@angular/common';

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.css']
})
export class AlbumsComponent implements OnInit {
  albums : Album[] =[];
  // mainData: Album[]=[];
  filterState:boolean=false;
  loaded: boolean;
  data:string="";
  filteredData: Album[]=[];
  constructor(private albumsService: AlbumsService,
    private location: Location) {
    this.loaded=true;
   }

  ngOnInit(): void {
    this.getItems();
  }
  getItems(){
    this.loaded=false;
    this.albumsService.getItems().subscribe((albums) => {
      this.albums=albums;
      this.loaded=true;
    });
    // this.mainData=this.albums;
  }
  deleteItem(id:number){
    this.albums=this.albums.filter(x=>x.id!==id);
    this.albumsService.deleteItem(id).subscribe(()=>{
      console.log('deleted', id);
    });
  }
  returnBack(){
    this.location.back();
  }
  filter(){
    // this.getItems();
    // this.albums=this.mainData;
    this.filterState=true;
    this.filteredData=this.albums.filter(x=>{
        return x.title.search(this.data)!==-1 ;
    });
    // this.albums=this.filteredData;
  }
  

}
