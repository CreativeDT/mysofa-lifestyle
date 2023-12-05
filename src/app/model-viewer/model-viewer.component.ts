// import { Component } from '@angular/core';
import { Component, ElementRef, AfterViewInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';


@Component({
  selector: 'app-model-viewer',
  templateUrl: './model-viewer.component.html',
  styleUrls: ['./model-viewer.component.css']
})
export class ModelViewerComponent implements AfterViewInit {
  sanitizedHTML: any;
  constructor(private el: ElementRef, private sanitizer: DomSanitizer) { }


  ngAfterViewInit() {
    const element = this.el.nativeElement;
    this.sanitizedHTML = this.sanitizer.bypassSecurityTrustHtml(`
<model-viewer
style="
          display: flex;
          align-item:center;
          width: 100vw;
          height: 100vh;
          max-width: 600px;
          max-height: 600px;"
        src="assets/images/chair.glb"
        poster="assets/images/chair.webp"
        camera-orbit="0.9677rad 1.2427rad 100%"
        interaction-prompt-threshold="0"
        shadow-intensity="0"
        loading="lazy"
        ar-status="not presenting"
        alt="A 3D model of a chair"
        ar
        auto-rotate
        camera-controls>
</model-viewer>
    `);


  }
}
