import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule, FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LucideAngularModule, Image, Plus, Trash2, Save, Upload, Move, Clock, Play, Pause, Eye, Settings as SettingsIcon } from 'lucide-angular';

interface CarouselImage {
  id: number;
  imageUrl: string;
  title?: string;
  description?: string;
  link?: string;
  altText?: string;
  order: number;
}

interface CarouselSettings {
  autoSlide: boolean;
  slideInterval: number; // in milliseconds
  showIndicators: boolean;
  showControls: boolean;
  animationType: 'fade' | 'slide';
}

@Component({
  selector: 'app-home-carousel',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule, LucideAngularModule],
  templateUrl: './home-carousel.component.html',
  styleUrl: './home-carousel.component.css'
})
export class HomeCarouselComponent implements OnInit, OnDestroy {
  icons = {
    image: Image,
    plus: Plus,
    trash: Trash2,
    save: Save,
    upload: Upload,
    move: Move,
    clock: Clock,
    play: Play,
    pause: Pause,
    eye: Eye,
    settings: SettingsIcon
  };

  carouselForm!: FormGroup;
  carouselSettings: CarouselSettings = {
    autoSlide: true,
    slideInterval: 5000,
    showIndicators: true,
    showControls: true,
    animationType: 'slide'
  };

  carouselImages: CarouselImage[] = [
    {
      id: 1,
      imageUrl: 'https://via.placeholder.com/1920x600/4F46E5/FFFFFF?text=Carousel+Image+1',
      title: 'Welcome to Immanuel Tours',
      description: 'Discover amazing destinations',
      order: 1
    },
    {
      id: 2,
      imageUrl: 'https://via.placeholder.com/1920x600/10B981/FFFFFF?text=Carousel+Image+2',
      title: 'Holy Land Pilgrimage',
      description: 'Experience the journey of a lifetime',
      order: 2
    }
  ];

  currentSlideIndex = 0;
  previewMode = false;
  private autoSlideInterval: any;

  constructor(private fb: FormBuilder) {
    this.initForm();
  }

  ngOnInit(): void {
    this.updateFormArray();
  }

  initForm(): void {
    this.carouselForm = this.fb.group({
      settings: this.fb.group({
        autoSlide: [this.carouselSettings.autoSlide],
        slideInterval: [this.carouselSettings.slideInterval, [Validators.required, Validators.min(1000)]],
        showIndicators: [this.carouselSettings.showIndicators],
        showControls: [this.carouselSettings.showControls],
        animationType: [this.carouselSettings.animationType]
      }),
      images: this.fb.array([])
    });
  }

  get imagesFormArray(): FormArray {
    return this.carouselForm.get('images') as FormArray;
  }

  get settingsFormGroup(): FormGroup {
    return this.carouselForm.get('settings') as FormGroup;
  }

  updateFormArray(): void {
    const imagesArray = this.imagesFormArray;
    imagesArray.clear();
    
    this.carouselImages.forEach((image, index) => {
      imagesArray.push(this.createImageFormGroup(image, index));
    });
  }

  createImageFormGroup(image: CarouselImage, index: number): FormGroup {
    return this.fb.group({
      id: [image.id],
      imageUrl: [image.imageUrl, Validators.required],
      title: [image.title || ''],
      description: [image.description || ''],
      link: [image.link || ''],
      altText: [image.altText || ''],
      order: [image.order]
    });
  }

  addNewImage(): void {
    const newImage: CarouselImage = {
      id: Date.now(),
      imageUrl: '',
      title: '',
      description: '',
      order: this.carouselImages.length + 1
    };
    
    this.carouselImages.push(newImage);
    this.imagesFormArray.push(this.createImageFormGroup(newImage, this.carouselImages.length - 1));
  }

  removeImage(index: number): void {
    if (confirm('Are you sure you want to remove this carousel image?')) {
      this.carouselImages.splice(index, 1);
      this.imagesFormArray.removeAt(index);
      // Reorder remaining images
      this.carouselImages.forEach((img, idx) => {
        img.order = idx + 1;
        if (this.imagesFormArray.at(idx)) {
          this.imagesFormArray.at(idx).patchValue({ order: idx + 1 });
        }
      });
    }
  }

  moveImageUp(index: number): void {
    if (index > 0) {
      [this.carouselImages[index], this.carouselImages[index - 1]] = 
        [this.carouselImages[index - 1], this.carouselImages[index]];
      
      const temp = this.carouselImages[index].order;
      this.carouselImages[index].order = this.carouselImages[index - 1].order;
      this.carouselImages[index - 1].order = temp;
      
      this.updateFormArray();
    }
  }

  moveImageDown(index: number): void {
    if (index < this.carouselImages.length - 1) {
      [this.carouselImages[index], this.carouselImages[index + 1]] = 
        [this.carouselImages[index + 1], this.carouselImages[index]];
      
      const temp = this.carouselImages[index].order;
      this.carouselImages[index].order = this.carouselImages[index + 1].order;
      this.carouselImages[index + 1].order = temp;
      
      this.updateFormArray();
    }
  }

  onImageUrlChange(index: number, event: any): void {
    const imageUrl = event.target.value;
    this.carouselImages[index].imageUrl = imageUrl;
    this.imagesFormArray.at(index).patchValue({ imageUrl });
  }

  handleFileUpload(event: any, index: number): void {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e: any) => {
        const imageUrl = e.target.result;
        this.carouselImages[index].imageUrl = imageUrl;
        this.imagesFormArray.at(index).patchValue({ imageUrl });
      };
      reader.readAsDataURL(file);
    }
  }

  saveCarousel(): void {
    if (this.carouselForm.valid) {
      const formValue = this.carouselForm.value;
      
      // Update carousel settings
      this.carouselSettings = {
        autoSlide: formValue.settings.autoSlide,
        slideInterval: formValue.settings.slideInterval,
        showIndicators: formValue.settings.showIndicators,
        showControls: formValue.settings.showControls,
        animationType: formValue.settings.animationType
      };
      
      // Update carousel images
      this.carouselImages = formValue.images.map((img: any) => ({
        ...img,
        ...this.carouselImages.find(ci => ci.id === img.id)
      }));
      
      console.log('Carousel saved:', { settings: this.carouselSettings, images: this.carouselImages });
      alert('Carousel settings saved successfully!');
      
      // Here you would typically send data to your backend API
      // this.carouselService.saveCarousel(this.carouselSettings, this.carouselImages).subscribe(...)
    } else {
      alert('Please fill in all required fields correctly.');
    }
  }

  togglePreview(): void {
    this.previewMode = !this.previewMode;
    if (this.previewMode) {
      // Reset to first slide when entering preview
      this.currentSlideIndex = 0;
      // Start auto-slide if enabled
      this.startAutoSlide();
    } else {
      // Stop auto-slide when exiting preview
      this.stopAutoSlide();
    }
  }

  startAutoSlide(): void {
    this.stopAutoSlide(); // Clear any existing interval
    const settings = this.settingsFormGroup.value;
    if (settings.autoSlide && this.carouselImages.length > 1) {
      this.autoSlideInterval = setInterval(() => {
        this.nextSlide();
      }, settings.slideInterval);
    }
  }

  stopAutoSlide(): void {
    if (this.autoSlideInterval) {
      clearInterval(this.autoSlideInterval);
      this.autoSlideInterval = null;
    }
  }

  ngOnDestroy(): void {
    this.stopAutoSlide();
  }

  goToSlide(index: number): void {
    this.currentSlideIndex = index;
  }

  nextSlide(): void {
    this.currentSlideIndex = (this.currentSlideIndex + 1) % this.carouselImages.length;
  }

  prevSlide(): void {
    this.currentSlideIndex = (this.currentSlideIndex - 1 + this.carouselImages.length) % this.carouselImages.length;
  }

  onIntervalChange(): void {
    const interval = this.settingsFormGroup.get('slideInterval')?.value;
    if (interval && interval >= 1000) {
      this.carouselSettings.slideInterval = interval;
      // Restart auto-slide with new interval if in preview mode
      if (this.previewMode) {
        this.startAutoSlide();
      }
    }
  }

  onAutoSlideChange(): void {
    if (this.previewMode) {
      const autoSlide = this.settingsFormGroup.get('autoSlide')?.value;
      if (autoSlide) {
        this.startAutoSlide();
      } else {
        this.stopAutoSlide();
      }
    }
  }
}
