import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MusicService {

  // Simuler une liste de musiques
  private musicList = [
    { id: 1, name: 'Die With A Smile', artist: 'Lady Gaga & Bruno Mars', imageUrl: 'assets/Lady_Gaga_and_Bruno_Mars_-_Die_with_a_Smile.png' },
    { id: 2, name: 'Girl I am Gonna Miss You', artist: 'Milli Vanilli', imageUrl: 'assets/Girl I am Gonna Miss You.webp' },
    { id: 3, name: 'Good Luck, Babe!', artist: 'Chappell Roan', imageUrl: 'assets/god luck baby.png' },
    { id: 1, name: 'Godzella', artist: 'Eminem', imageUrl: 'assets/godzella.webp' },
    { id: 2, name: 'without me', artist: 'Eminem', imageUrl: 'assets/without me.jpg' },
    { id: 3, name: 'Bella', artist: 'Maître Gims', imageUrl: 'assets/bella.jpg' }
  ];

  constructor() { }

  // Méthode pour obtenir la liste des musiques
  getMusicList() {
    return this.musicList;
  }
}
