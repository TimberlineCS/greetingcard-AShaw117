Project 1: Greeting Card
Author: Andrew Shaw
Class: AP CS Principles
Semester: December 2023
Overview
Makes a Christmas Card with some images and sounds. It is in a HTML website format and is styled using JavaScript. Mine has a snowman, 2 images of a tree and a person, and a backround.

Compiling and Using
You just simply need to open a new tab, navigate to the file, then double click to open it. You can play the audio by clicking a button in the bottom.

Discussion
At first I struggled with figuring out how to format everything and get it to show up as I missed 2 days prior to the project. I was able to work through that by consulting with classmates and my teacher. Eventually I had a backround and text, but I cound’t figure out how to format the text the way I wanted, so I turned to ChatGPT. I simply uploaded my code and asked it what I should do, and it gave me a couple of solutions. From there it was pretty smooth sailing, though I did have trouble trying to find an image of a christmas tree without a backround. I had to canva and use some of their backround removal. The hardest part was making the snowman, as it required lots of copy and paste coding as well as guess and check to make sure it was placed correctly.

Testing
There wasn’t much testing that needed to be done, as it was basically a purely visual image. The only real testing was to see if my elements were in the correct place and if the audio worked correctly

Sources used
ChatGpt
Old Classroom Assignments

var au = new Audio("Music/AllIWantForChristmas.mp3");
au.controls = true;
document.body.appendChild(au);
