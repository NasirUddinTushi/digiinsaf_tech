// Explicit icon registry: only the icons actually referenced by name from
// data files (services, industries, process, etc.) are imported here.
// Importing `* as icons` from lucide-react would pull the entire ~6000-icon
// package into the main bundle since string-based lookups defeat
// tree-shaking — keep this list in sync with icon names used in src/data/*
// and any `<Icon name="...">` call.
import {
  Circle,
  Inbox,
  SearchX,
  PenTool,
  Code2,
  Smartphone,
  Sparkles,
  LayoutDashboard,
  ShoppingCart,
  Compass,
  CloudCog,
  SearchCheck,
  ListChecks,
  ShieldCheck,
  Rocket,
  Landmark,
  HeartPulse,
  GraduationCap,
  ShoppingBag,
  Building2,
  Plane,
  Briefcase,
  Truck,
  Car,
  HandHeart,
  PackageCheck,
  Layers,
  Users,
  MessageSquare,
  Users2,
  Network,
  Handshake,
  LifeBuoy,
  Gem,
  SlidersHorizontal,
  TrendingUp,
  Lock,
  FileCheck,
  Eye,
  Globe,
} from 'lucide-react';

const registry = {
  Circle,
  Inbox,
  SearchX,
  PenTool,
  Code2,
  Smartphone,
  Sparkles,
  LayoutDashboard,
  ShoppingCart,
  Compass,
  CloudCog,
  SearchCheck,
  ListChecks,
  ShieldCheck,
  Rocket,
  Landmark,
  HeartPulse,
  GraduationCap,
  ShoppingBag,
  Building2,
  Plane,
  Briefcase,
  Truck,
  Car,
  HandHeart,
  PackageCheck,
  Layers,
  Users,
  MessageSquare,
  Users2,
  Network,
  Handshake,
  LifeBuoy,
  Gem,
  SlidersHorizontal,
  TrendingUp,
  Lock,
  FileCheck,
  Eye,
  Globe,
};

// Resolves an icon by name (e.g. "PenTool") so data files can reference
// icons as plain strings without importing React components directly.
// Falls back to a neutral circle if a name is not in the registry above.
export default function Icon({ name, className, strokeWidth = 1.75, ...rest }) {
  const LucideIcon = registry[name] || Circle;
  return <LucideIcon className={className} strokeWidth={strokeWidth} {...rest} />;
}
