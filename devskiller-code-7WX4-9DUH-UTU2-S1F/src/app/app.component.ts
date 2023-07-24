import { Component, Inject, OnInit } from '@angular/core';
import { NotesService } from './notes.service';
import { Note } from './note';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  notes: Note[] = [
    {
      id: 1,
      title: 'Mock Title',
      body: 'mock body',
      color: '#ff0000',
      favourite: true
    }
  ];
  selected: Partial<Note>;

  constructor( private service: NotesService ) {

  }

  ngOnInit() {
    this.loadNotes();
    this.newNote();
  }

  getNotes() {
    return this.notes;
  }

  private loadNotes(): void {
    this.notes = this.service.getNotes();
  }

  selectNote(note) {
    this.selected = {...note};
  }

  newNote() {
    this.selected = {};
  }

  saveNote(note) {
    this.service.saveNote(note);
  }
}
