import { Component, Input, Output, EventEmitter } from '@angular/core';
import { RouterModule } from '@angular/router';
import { 
  LucideAngularModule, 
  LayoutDashboard, 
  Package,
  MapPin,
  BookText,
  Briefcase,
  Images,
  MessageSquare,
  Star,
  Settings, 
  LogOut,
  Users,
  UserCog,
  ChevronDown,
  ChevronRight,
  Database,
  HelpCircle,
  FileText,
  Mail,
  Shield,
  Code
} from 'lucide-angular';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [RouterModule, LucideAngularModule, CommonModule],
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
  @Input() isCollapsed = false;
  @Output() collapsedChange = new EventEmitter<boolean>();
  
  // Track expanded/collapsed state of each dropdown
  expandedMenus: any = {
    packages: false,
    destinations: false,
    cmsPages: false,
    messages: false,
    users: false,
    settings: false
  };

  // Icons organized by category
  icons = {
    dashboard: LayoutDashboard,
    package: Package,
    mapPin: MapPin,
    bookText: BookText,
    briefcase: Briefcase,
    images: Images,
    messageSquare: MessageSquare,
    star: Star,
    settings: Settings,
    logout: LogOut,
    users: Users,
    userCog: UserCog,
    
    // Navigation icons
    chevronDown: ChevronDown,
    chevronRight: ChevronRight,
    
    // CMS Pages icons
    helpCircle: HelpCircle,
    fileText: FileText,
    mail: Mail,
    
    // Settings icons
    shield: Shield,
    code: Code,
    
    // Users section
    database: Database
  };
  
  toggleSidebar() {
    this.isCollapsed = !this.isCollapsed;
    this.collapsedChange.emit(this.isCollapsed);
    // Close all menus when collapsing sidebar
    if (this.isCollapsed) {
      Object.keys(this.expandedMenus).forEach(menu => {
        this.expandedMenus[menu] = false;
      });
    }
  }

  toggleMenu(menu: string) {
    this.expandedMenus[menu] = !this.expandedMenus[menu];
  }

  logout() {
    // Implement your logout logic here
    console.log('Logging out...');
  }
}