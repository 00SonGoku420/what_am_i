import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Component({
  selector: 'app-firebase-test',
  templateUrl: './firebase-test.component.html',
  styleUrls: ['./firebase-test.component.sass']
})
export class FirebaseTestComponent implements OnInit {

  constructor(
    private firestore: AngularFirestore,
  ) { 
    const huso = firestore.collection('test').valueChanges()
    huso.subscribe(console.log)
  }

  huso: string = ''

  ngOnInit(): void {
  }

}
