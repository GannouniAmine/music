import { Component, OnInit } from '@angular/core';
import { MusicService } from '../services/music/music.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  musicList: any[] = [];      // Liste des musiques originales
  filteredMusicList: any[] = []; // Liste filtrée des musiques
  searchTerm: string = '';    // Terme de recherche

  constructor(private musicService: MusicService) { }

  ngOnInit(): void {
    // Charger la liste des musiques au démarrage du composant
    this.musicList = this.musicService.getMusicList();
    this.filteredMusicList = this.musicList; // Initialiser avec toutes les musiques
  }

  // Méthode pour filtrer la liste en fonction du terme de recherche
  filterMusic(): void {
    if (this.searchTerm === '') {
      // Si la recherche est vide, afficher toutes les musiques
      this.filteredMusicList = this.musicList;
    } else {
      // Sinon, filtrer la liste en fonction du terme de recherche (nom ou artiste)
      this.filteredMusicList = this.musicList.filter(music =>
        music.name.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
        music.artist.toLowerCase().includes(this.searchTerm.toLowerCase())
      );
    }
  }
}
