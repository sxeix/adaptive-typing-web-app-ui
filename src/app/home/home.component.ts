import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { PocketbaseService } from '../pocketbase.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

    wordset: string[] = [];
    wordIndex = 0;
    inputWord = "";
    typedWords: string[] = [];
    progressBar = 0;


    constructor(private pocketBaseService: PocketbaseService, private router: Router) { }

    ngOnInit(): void {
        this.refreshWordset()
    }


    onSpace() {
        if (this.inputWord[0] === " ") {
            // This logic is needed to avoid having a space at the start of a string
            // this happens due to the use of keydown.Space,
            // if a space occurs once at the start it is not the user's fault
            this.inputWord = this.inputWord.slice(1);
        }
        this.typedWords.push(this.inputWord);
        this.inputWord = "";
        this.wordIndex++;
        this.progressBar = (this.typedWords.length / this.wordset.length) * 100;
        if (this.typedWords.length === this.wordset.length) {
            console.log('test completed');
            // this.service.postTestResult(this.typedWords, this.wordset, this.currentUser, this.getTestStats()).subscribe(
            //     response => {
            //         console.log(response);
            //     }
            // );
        }
    }

    getColour(currentIndex: number): string {
        const intendedWord = this.wordset[currentIndex];
        const actualWord = this.typedWords[currentIndex];
        if (intendedWord === actualWord) {
            return 'green';
        } else if (actualWord === undefined && currentIndex === this.typedWords.length) {
            return 'grey';
        } else if (actualWord === undefined) {
            return 'white'
        } else if (intendedWord !== actualWord) {
            return 'red';
        }
        return 'white';
    }

    refreshWordset() {
        // this.service.tailoredWordsetRequest(this.currentUser, this.wordCount).subscribe(i => {
        //     this.wordset = Object.values(i["words"]);
        // })
        this.wordset = ["here", "are", "some", "test", "words", "here", "are", "some", "test", "words", "here", "are", "some", "test", "words", "here", "are", "some", "test", "words",];
        this.wordIndex = 0;
        this.typedWords = [];
        this.inputWord = "";
        this.progressBar = 0;
    }

}
