export interface DropdownOption {
  value: string;
  label: string;
}

export interface District {
  id: number;
  name: string;
}

export interface Tehsil {
  id: number | null;
  name: string;
}

export interface PropertyArea {
  id: number;
  name: string;
}

export interface Mouza {
  id: number;
  name: string;
}

export interface RegisterFormData {
  district: string;
  tehsil: string;
  mouza: string;
  year: string;
  searchQuery: string;
}

export interface MapConfig {
  center: [number, number];
  zoom: number;
  height: string;
  width: string;
}
