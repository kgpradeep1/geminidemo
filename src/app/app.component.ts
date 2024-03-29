import { Component } from '@angular/core';
// import { GenerativeModel, GoogleGenerativeAI } from '@google/generative-ai';
import { GoogleGenerativeAI } from "@google/generative-ai";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  title = 'gemini';
  key='AIzaSyAlsi7QIqjIl4qvfBGR5XjgyivlQKHWinI';
  enterData:any;
  processed:any;
  constructor(){}
   gg(){
    // alert(this.enterData);
    this.newModel();
   }
  async newModel(){
    const genAI = new GoogleGenerativeAI(this.key);
    const model = genAI.getGenerativeModel({ model: "gemini-pro"});
    const prompt = "Write a story about a magic backpack."
    // alert(this.enterData)
    const result = await model.generateContent(this.enterData);
    const response = await result.response;
    this.processed = response.text();
    console.log(typeof this.processed);

  }
}
