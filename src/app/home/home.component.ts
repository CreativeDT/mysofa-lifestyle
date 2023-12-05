import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent  implements OnInit{

  constructor(private cdr: ChangeDetectorRef,private sanitizer: DomSanitizer) {}
  // constructor() {}

  public sanitizeUrl(url: string): SafeResourceUrl {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
}

  

  openModel() {
    console.log("open method is called");
    // this.selectedDocument = document;
    const modelDiv = document.getElementById('myModal');
    if (modelDiv != null) {
      modelDiv.style.display = 'block';
      //  const maodel= document.getElementsByClassName('main');
      //  modelDiv.style.opacity='0.4';
    }
  }
  closeModel() {
    // this.onFileSelected();
    const modelDiv = document.getElementById('myModal');
    if (modelDiv != null) {
      modelDiv.style.display = 'none';
    }
  }
  ngOnInit(): void {
      //  console.log("seleceted fabric is : "+this.selectedFabric);
    
  }
  images: string[] = [
    'assets/images/image1_single.jpg',
    'assets/images/image2_double.jpg',
    'assets/images/image3_three.jpg'
  ];
  showModelViewer: boolean = false;
  selectedFabric: string = '';
  selectedStyle:string='';
  selectedColor: string = '#87554B';
  selectedImage: string = 'assets/images/image1_single.jpg';
  selectedImage1: string='';
  selectedImage2: string='';
  selectedImage3: string='';
  selectedImage4:string='';
  selectedImage5:string='';
  selectedImage6:string='';
  selectedImage7:string='';
  selectedImage8:string='';
  selectedImage9:string='';
  selectedImage10:string='';
  selectedImage11:string='assets/images/image_3d.png';
  selectedSeating: string = 'single'; 
  selectedImages:string|null=null;
message:boolean=false;
selectedImageIndex: number | null = null;

// onStyleChange(){
  
//   this.selectedStyle=this.selectedStyle.toLowerCase();
//   console.log("selected style is : "+this.selectedStyle);
  
// }
toggleModelViewer() {
  this.showModelViewer = !this.showModelViewer;
}
  displayImage(imageSrc: string): void {
    this.selectedImages=imageSrc;
    this.selectedImage = imageSrc;
    if(imageSrc.match('single')){
    
      this.selectedSeating='single';
    }
    else if(imageSrc.match('double')){
      
      this.selectedSeating='double';
    }
    else if(imageSrc.match('three')){
   
      this.selectedSeating='three';
    }
  }
//   onFabricChange(){
// console.log("selected fabric is : "+this.selectedFabric)
// this.selectedFabric = this.selectedFabric.toLowerCase();
//   }
zoomInImage() {
  const imageElement = document.querySelector('.zoomable') as HTMLElement;
  if (imageElement) {
    imageElement.classList.add('zoomed');
  }
}

resetImageZoom() {
  const imageElement = document.querySelector('.zoomable') as HTMLElement;
  if (imageElement) {
    imageElement.classList.remove('zoomed');
  }
}


  onFabricChange() {
    console.log("Selected fabric is: " + this.selectedFabric);
    // this.selectedFabric = this.selectedFabric.toLowerCase();
    this.cdr.detectChanges();
  }

  onStyleChange() {
    console.log("Selected style is: " + this.selectedStyle);
    this.cdr.detectChanges();
    // Additional logic for style change if needed...
  }
  
  onChangeImage(imageKey: string) {
    
    this.selectedImage = (this as any)[imageKey];
  }
  onChangeImages(index:number){
    this.selectedImageIndex = index;
  }
  updateImage(colorCode: string): void {
    
    console.log('update methode called')
    this.selectedColor = colorCode;
    console.log("seleceted fabric is : "+this.selectedFabric)
    if(this.selectedStyle.toLowerCase() ==='hard plastic'){
  if(this.selectedFabric.toLowerCase() ==='wool'){
    if(this.selectedSeating==='single'){
      console.log(this.selectedSeating);
      if(this.selectedColor==='1'){
        console.log(this.message);
    this.message=true;
    console.log(this.message);
      this.selectedImage= 'assets/images/image1_1.jpg';
      this.selectedImage1='assets/images/image1_1_1.jpg';
      this.selectedImage2='assets/images/image1_1_2.jpg';
      this.selectedImage3='assets/images/image1_1_3.jpg'
      this.selectedImage4='assets/images/image1_1_4.jpg'
      this.selectedImage5='assets/images/image1_1_5.jpg'
      this.selectedImage6='assets/images/image1_1_6.jpg'
      this.selectedImage7='assets/images/image1_1_7.jpg';
      this.selectedImage8='assets/images/image1_1_8.jpg';
      this.selectedImage9='assets/images/image1_1_9.gif';
      this.selectedImage10='assets/images/image_360.png';
      // this.selectedImage11 = 'assets/images/image_3d.png';

     
    }
    else if (this.selectedColor==='2'){
      console.log(this.message);
    this.message=false;
    console.log(this.message);
     this.selectedImage= 'assets/images/image1_2.jpg'
    }
    else if(this.selectedColor==='3'){
      this.selectedImage= 'assets/images/image1_3.jpg'
    }
    else if(this.selectedColor==='4'){
      this.selectedImage= 'assets/images/image1_4_wool.jpg'
    }
    }}
    if(this.selectedSeating==='double'){
    this.message=false;

      if(this.selectedColor==='1'){
        this.selectedImage= 'assets/images/image2_1.jpg';
      }
      else if (this.selectedColor==='2'){
        this.selectedImage='assets/images/image2_2.jpg'
      }
      else if(this.selectedColor==='3'){
        this.selectedImage= 'assets/images/image2_3.jpg'
      }
      else if(this.selectedColor==='4'){
        this.selectedImage= 'assets/images/image2_4_wool.jpg'
      }
    }
    if(this.selectedSeating==='three'){
    this.message=false;

      if(this.selectedColor==='1'){
        this.selectedImage= 'assets/images/image3_1.jpg';
      }
      else if (this.selectedColor==='2'){
        this.selectedImage='assets/images/image3_2.jpg'
      }
      else if(this.selectedColor==='3'){
        this.selectedImage= 'assets/images/image3_3.jpg'
      }
      else if(this.selectedColor==='4'){
        this.selectedImage= 'assets/images/image3_4_wool.jpg'
      }
    }
    if(this.selectedSeating==='four'){
    this.message=false;

      if(this.selectedColor==='1'){
        this.selectedImage= 'assets/images/image4_1.jpg';
      }
      else if (this.selectedColor==='2'){
        this.selectedImage='assets/images/image4_2.jpg'
      }
      else if(this.selectedColor==='3'){
        this.selectedImage= 'assets/images/image4_3.jpg'
      }
      else if(this.selectedColor==='4'){
        this.selectedImage= 'assets/images/image4_3.jpg'
      }
    }
  
    if(this.selectedFabric.toLowerCase()==='leather'){
    this.message=false;

      if(this.selectedSeating==='single'){
        console.log(this.selectedSeating);
        if(this.selectedColor==='1'){
        this.selectedImage= 'assets/images/image1_1_leather.jpg';
        // this.message=true;
      }
      else if (this.selectedColor==='2'){
        // this.message=false;
       this.selectedImage= 'assets/images/image1_2_leather.jpg'
      }
      else if(this.selectedColor==='3'){
        this.selectedImage= 'assets/images/image1_3_leather.jpg'
      }
      else if(this.selectedColor==='4'){
        this.selectedImage= 'assets/images/image1_4.jpg'
      }
      else{
        this.message=true;
      }
      }
      if(this.selectedSeating==='double'){
        if(this.selectedColor==='1'){
          this.selectedImage= 'assets/images/image2_1_leather.jpg';
        }
        else if (this.selectedColor==='2'){
          this.selectedImage='assets/images/image2_2_leather.jpg'
        }
        else if(this.selectedColor==='3'){
          this.selectedImage= 'assets/images/image2_3_leather.jpg'
        }
        else if(this.selectedColor==='4'){
          this.selectedImage= 'assets/images/image2_4.jpg'
        }
      }
      if(this.selectedSeating==='three'){
        if(this.selectedColor==='1'){
          this.selectedImage= 'assets/images/image3_1_leather.jpg';
        }
        else if (this.selectedColor==='2'){
          this.selectedImage='assets/images/image3_2_leather.jpg'
        }
        else if(this.selectedColor==='3'){
          this.selectedImage= 'assets/images/image3_3_leather.jpg'
        }
        else if(this.selectedColor==='4'){
          this.selectedImage= 'assets/images/image3_4.jpg'
        }
      }
    }}
    if(this.selectedStyle.toLowerCase()==='wood'){
      if(this.selectedFabric.toLowerCase() ==='wool'){
        if(this.selectedSeating==='single'){
          console.log(this.selectedSeating);
          if(this.selectedColor==='1'){
          this.selectedImage= 'assets/images/image1_1_wool_wood.jpg';
        }
        else if (this.selectedColor==='2'){
         this.selectedImage= 'assets/images/image1_2_wool_wood.jpg'
        }
        else if(this.selectedColor==='3'){
          this.selectedImage= 'assets/images/image1_3_wool_wood.jpg'
        }
        else if(this.selectedColor==='4'){
          this.selectedImage= 'assets/images/image1_4_wool_wood.jpg'
        }
        }}
        if(this.selectedSeating==='double'){
          if(this.selectedColor==='1'){
            this.selectedImage= 'assets/images/image2_1_wool_wood.jpg';
          }
          else if (this.selectedColor==='2'){
            this.selectedImage='assets/images/image2_2_wool_wood.jpg'
          }
          else if(this.selectedColor==='3'){
            this.selectedImage= 'assets/images/image2_3_wool_wood.jpg'
          }
          else if(this.selectedColor==='4'){
            this.selectedImage= 'assets/images/image2_4_wool_wood.jpg'
          }
        }
        if(this.selectedSeating==='three'){
          if(this.selectedColor==='1'){
            this.selectedImage= 'assets/images/image3_1_wool_wood.jpg';
          }
          else if (this.selectedColor==='2'){
            this.selectedImage='assets/images/image3_2_wool_wood.jpg'
          }
          else if(this.selectedColor==='3'){
            this.selectedImage= 'assets/images/image3_3_wool_wood.jpg'
          }
          else if(this.selectedColor==='4'){
            this.selectedImage= 'assets/images/image3_4_wool_wood.jpg'
          }
        }
        if(this.selectedSeating==='four'){
          if(this.selectedColor==='1'){
            this.selectedImage= 'assets/images/image4_1_wool_wood.jpg';
          }
          else if (this.selectedColor==='2'){
            this.selectedImage='assets/images/image4_2_wool_wood.jpg'
          }
          else if(this.selectedColor==='3'){
            this.selectedImage= 'assets/images/image4_3_wool_wood.jpg'
          }
          else if(this.selectedColor==='4'){
            this.selectedImage= 'assets/images/image4_3_wool_wood.jpg'
          }
        }
      
        if(this.selectedFabric.toLowerCase()==='leather'){
          if(this.selectedSeating==='single'){
            console.log(this.selectedSeating);
            
            if(this.selectedColor==='1'){
            this.selectedImage= 'assets/images/image1_1_leather.jpg';
          
          }
          else if (this.selectedColor==='2'){
            
           this.selectedImage= 'assets/images/image1_2_wood_leather.jpg';
        
          }
          else if(this.selectedColor==='3'){
            this.selectedImage= 'assets/images/image1_3_leather.jpg'
          }
          else if(this.selectedColor==='4'){
            this.selectedImage= 'assets/images/image1_4_leather.jpg'
          }
          
          }
          if(this.selectedSeating==='double'){
            if(this.selectedColor==='1'){
              this.selectedImage= 'assets/images/image2_1_leather.jpg';
            }
            else if (this.selectedColor==='2'){
              this.selectedImage='assets/images/image2_2_leather.jpg'
            }
            else if(this.selectedColor==='3'){
              this.selectedImage= 'assets/images/image2_3_leather.jpg'
            }
            else if(this.selectedColor==='4'){
              this.selectedImage= 'assets/images/image2_4.jpg'
            }
          }
          if(this.selectedSeating==='three'){
            if(this.selectedColor==='1'){
              this.selectedImage= 'assets/images/image3_1_leather.jpg';
            }
            else if (this.selectedColor==='2'){
              this.selectedImage='assets/images/image3_2_leather.jpg'
            }
            else if(this.selectedColor==='3'){
              this.selectedImage= 'assets/images/image3_3_leather.jpg'
            }
            else if(this.selectedColor==='4'){
              this.selectedImage= 'assets/images/image3_4.jpg'
            }
          }
        }
    }
   
  }
  fabricOptions: { value: string, label: string }[] = [

    { value: 'Wool', label: 'Wool' },
    { value: 'Leather', label: 'Leather' },
    { value: 'Cotton', label: 'Cotton' },
    {value:'Chenille',label:'Chenille'}
   
  ];
  styleOptions: { value: string, label: string,image:string }[] = [
    { value: 'Hard Plastic', label: 'Hard Plastic',image:'assets/images/image1_1.jpg' },
    { value: 'Wood', label: 'Wood' ,image:'assets/images/image1_1_wool_wood.jpg'},
    // { value: 'Steel', label: 'Steel',image:'assets/images/image1_1_steel.jpg' }
  ];
  
}
