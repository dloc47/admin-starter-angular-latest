import { Component, Input, Output, EventEmitter } from '@angular/core';
import { RouterModule } from '@angular/router';
import { 
  LucideAngularModule, 
  LayoutDashboard, 
  Home, 
  Settings, 
  LogOut,
  ListChecks,
  Users,
  Ticket,
  UserCog,
  ChevronDown,
  ChevronRight,
  PlusCircle,
  FileText,
  Sliders,
  BookOpen,
  Award,
  ShoppingBag,
  Database,
  FileBarChart,
  UserPlus,
  ClipboardList
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
  expandedMenus:any = {
    quiz: false,
    players: false,
    coupons: false,
    users: false,
    content: false,
    reports: false
  };

  // Icons organized by category
  icons = {
    dashboard: LayoutDashboard,
    home: Home,
    settings: Settings,
    logout: LogOut,
    
    // Navigation icons
    chevronDown: ChevronDown,
    chevronRight: ChevronRight,
    
    // Quiz section
    quiz: ListChecks,
    quizList: ClipboardList,
    addQuiz: PlusCircle,
    quizConfig: Sliders,
    quizRules: BookOpen,
    
    // Players section
    players: Users,
    playerList: UserPlus,
    playerActivity: FileBarChart,
    
    // Coupons section
    coupons: Ticket,
    couponList: ShoppingBag,
    couponGenerate: PlusCircle,
    redemptions: Award,
    
    // Users section
    users: UserCog,
    userList: Users,
    roles: Database,
    
    // Content Management
    content: FileText,
    banners: FileText,
    faqs: BookOpen,
    
    // Reports
    reports: FileBarChart
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
    // Close other menus when opening one (optional)
    // Object.keys(this.expandedMenus).forEach(m => {
    //   if (m !== menu) this.expandedMenus[m] = false;
    // });
  }

  logout() {
    // Implement your logout logic here
    console.log('Logging out...');
  }
}