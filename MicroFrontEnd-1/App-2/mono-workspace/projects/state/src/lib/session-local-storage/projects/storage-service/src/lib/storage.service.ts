import { Injectable } from '@angular/core';

export type StorageType = 'local' | 'session';

@Injectable({
  providedIn: 'root'
})
export class StorageService {
  constructor() { }
  private getStorage(type: StorageType): Storage {
    return type === 'local' ? localStorage : sessionStorage;
  }

  setItem(key: string, value: any, type: StorageType = 'local'): void {
    const storage = this.getStorage(type);
    storage.setItem(key, JSON.stringify(value));
  }

  getItem(key: string, type: StorageType = 'local'): any {
    const storage = this.getStorage(type);
    const item = storage.getItem(key);
    return item ? JSON.parse(item) : null;
  }

  removeItem(key: string, type: StorageType = 'local'): void {
    const storage = this.getStorage(type);
    storage.removeItem(key);
  }

  clear(type: StorageType = 'local'): void {
    const storage = this.getStorage(type);
    storage.clear();
  }
}
