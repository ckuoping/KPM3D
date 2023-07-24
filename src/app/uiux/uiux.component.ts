import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-uiux',
  templateUrl: './uiux.component.html',
  styleUrls: ['./uiux.component.scss']
})
export class UiuxComponent implements OnInit {

  project:any=[
    {
      title:'Material Wizard',
      image:'assets/images/uiux-2.jpg',
      photo:'assets/images/uiux-mat.png',
      description:'A chemcial material search and management engine for Moldex3D Studio users to explore materials used in CAE projects.',
      chips:['web','desktop','A/B test','usability testing','AdobeXD'],
      btn:'Go'
    },
    {
      title:'Moldex3D Setup',
      image:'assets/images/uiux-1.jpg',
      photo:'assets/images/uiux-setup.png',
      description:'Design and study the setup process and setup wizard of Moldex3D products.',
      chips:['flow analysis','installation','Figma'],
      btn:'Go'
    },
    {
      title:'Process Wizard',
      image:'assets/images/uiux-3.jpg',
      photo:'assets/images/uiux-pro.png',
      description:'An application that assists Moldex3D Studio users in setting molding parameters for plastic injection.',
      chips:['molding setting','machine interface'],
      btn:'Go'
    },
    {
      title:'Plasticising',
      image:'assets/images/uiux-4.jpg',
      photo:'assets/images/uiux-pl.png',
      description:'Study the function and workflow of plasticising, a change in the thermal and mechanical properties of a given polymer.',
      chips:['molding setting','data visualization'],
      btn:'Go'
    },
    {
      title:'XY Plot',
      image:'assets/images/uiux-5.jpg',
      photo:'assets/images/uiux-xyplot.png',
      description:'Moldex3D Studio provides History, Thickness and Distribution curves for showing data visualization of CAE simulation result.',
      chips:['data visualization','plot setting'],
      btn:'Go'
    }

  ]

  dialogInfo:any ={
    title:'',
    description:'',
    photo:'',
    chips:[]
  }

  constructor() { }

  ngOnInit(): void {
  }

  showDialog(i:number){
    console.log(i);
    this.dialogInfo.title = '';
    this.dialogInfo.description = '';
    this.dialogInfo.photo = '';
    this.dialogInfo.chips = [];

    this.dialogInfo.title = this.project[i].title;
    this.dialogInfo.description = this.project[i].description;
    this.dialogInfo.photo = this.project[i].photo;
    this.dialogInfo.chips = this.project[i].chips;
  }

}
