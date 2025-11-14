import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import {
  LucideAngularModule,
  Plane,
  MessageSquare,
  MapPin,
  Users,
  Activity,
  Compass,
  ClipboardList,
  CalendarCheck
} from 'lucide-angular';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, RouterModule, LucideAngularModule],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  protected readonly statsCards = [
    {
      label: 'Total Packages',
      value: 128,
      change: '+12% vs last month',
      icon: Plane,
      iconBg: 'bg-sky-50',
      iconColor: 'text-sky-500'
    },
    {
      label: 'Total Inquiries',
      value: 342,
      change: '+28% vs last month',
      icon: MessageSquare,
      iconBg: 'bg-amber-50',
      iconColor: 'text-amber-500'
    },
    {
      label: 'Total Destinations',
      value: 52,
      change: '+4 new this quarter',
      icon: MapPin,
      iconBg: 'bg-emerald-50',
      iconColor: 'text-emerald-500'
    },
    {
      label: 'Total Users',
      value: 18,
      change: 'Team & partners',
      icon: Users,
      iconBg: 'bg-purple-50',
      iconColor: 'text-purple-500'
    }
  ];

  protected readonly quickLinks = [
    {
      title: 'Manage Packages',
      description: 'Create, edit, and publish tour packages.',
      icon: Compass,
      link: '/packages'
    },
    {
      title: 'Review Inquiries',
      description: 'Respond to traveler questions quickly.',
      icon: MessageSquare,
      link: '/messages/inquiries'
    },
    {
      title: 'Destinations Library',
      description: 'Update photos, highlights, and logistics.',
      icon: MapPin,
      link: '/destinations'
    },
    {
      title: 'Team Directory',
      description: 'Manage access for agents and partners.',
      icon: Users,
      link: '/users'
    }
  ];

  protected readonly recentActivities = [
    {
      title: 'New inquiry received for “Holy Land Pilgrimage”',
      timestamp: '5 minutes ago',
      icon: MessageSquare
    },
    {
      title: 'Seasonal “Bethlehem Christmas Retreat” package published',
      timestamp: '1 hour ago',
      icon: CalendarCheck
    },
    {
      title: 'Destination “Galilee” itinerary updated by Sarah D.',
      timestamp: 'Yesterday',
      icon: ClipboardList
    },
    {
      title: 'New partner agent account approved',
      timestamp: '2 days ago',
      icon: Activity
    }
  ];

  constructor() { }

  ngOnInit() {
  }
}
