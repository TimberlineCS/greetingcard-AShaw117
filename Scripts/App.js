//Andrew Shaw
//Period 7
//12/11/23

/*Provide a description about what this program does here*/


//Snowman
var SM1 = document.createElement("div")
var SM2 = document.createElement("div")
var SM3 = document.createElement("div")
var SMH1 = document.createElement("div")
var SMH2 = document.createElement("div")
var SMN = document.createElement("div")
var SME1 = document.createElement("div")
var SME2 = document.createElement("div")
var SMB1 = document.createElement("div")
var SMB2 = document.createElement("div")
var SMB3 = document.createElement("div")
var SMA1 = document.createElement("div")
var SMA2 = document.createElement("div")
var SMA3 = document.createElement("div")
var SMA4 = document.createElement("div")
document.body.append(SM1)
document.body.append(SM2)
document.body.append(SM3)
document.body.append(SMH1)
document.body.append(SMH2)
document.body.append(SMN)
document.body.append(SME1)
document.body.append(SME2)
document.body.append(SMB1)
document.body.append(SMB2)
document.body.append(SMB3)
document.body.append(SMA1)
document.body.append(SMA2)
document.body.append(SMA3)
document.body.append(SMA4)

SM1.style.backgroundColor = "#ffffff"
SM1.style.borderRadius = "50%"
SM1.style.border = "solid 2px gray"
SM1.style.height = "220px"
SM1.style.width = "220px"
SM1.style.position = "absolute"
SM1.style.left = "100px"
SM1.style.top = "550px"

SM2.style.backgroundColor = "#ffffff";
SM2.style.borderRadius = "50%";
SM2.style.border = "solid 2px gray";
SM2.style.height = "170px";
SM2.style.width = "170px";
SM2.style.position = "absolute";
SM2.style.left = "125px";
SM2.style.top = "380px";

SM3.style.backgroundColor = "#ffffff";
SM3.style.borderRadius = "50%";
SM3.style.border = "solid 2px gray";
SM3.style.height = "120px";
SM3.style.width = "120px";
SM3.style.position = "absolute";
SM3.style.left = "150px";
SM3.style.top = "260px"

SME1.style.backgroundColor = "#3d3d3d";
SME1.style.borderRadius = "50%";
SME1.style.border = "solid 2px black";
SME1.style.height = "8px";
SME1.style.width = "8px";
SME1.style.position = "absolute";
SME1.style.left = "185px";
SME1.style.top = "290px"

SME2.style.backgroundColor = "#3d3d3d";
SME2.style.borderRadius = "50%";
SME2.style.border = "solid 2px black";
SME2.style.height = "8px";
SME2.style.width = "8px";
SME2.style.position = "absolute";
SME2.style.left = "225px";
SME2.style.top = "290px"

SMN.style.border = "orange solid 50px";
SMN.style.width = "0px";
SMN.style.height = "0px";
SMN.style.borderRightColor = "transparent";
SMN.style.borderBottomColor = "transparent";
SMN.style.borderTopColor = "transparent";
SMN.style.borderTopWidth = "10px"
SMN.style.borderBottomWidth = "10px"
SMN.style.borderLeftWidth = "60px"
SMN.style.position = "absolute";
SMN.style.left = "210px";
SMN.style.top = "310px"

SMH1.style.backgroundColor = "black";
SMH1.style.border = "solid 2px black";
SMH1.style.height = "20px";
SMH1.style.width = "125px";
SMH1.style.position = "absolute";
SMH1.style.left = "148px";
SMH1.style.top = "250px"

SMH2.style.backgroundColor = "black";
SMH2.style.border = "solid 2px black";
SMH2.style.height = "100px";
SMH2.style.width = "75px";
SMH2.style.position = "absolute";
SMH2.style.left = "172px";
SMH2.style.top = "149px"

SMB1.style.backgroundColor = "#3d3d3d"
SMB1.style.transform = "rotate(39deg)"
SMB1.style.borderRadius = "41%"
SMB1.style.border = "solid 2px gray"
SMB1.style.height = "12px"
SMB1.style.width = "12px"
SMB1.style.position = "absolute"
SMB1.style.left = "200px"
SMB1.style.top = "505px"

SMB2.style.backgroundColor = "#3d3d3d"
SMB2.style.transform = "rotate(28deg)"
SMB2.style.borderRadius = "41%"
SMB2.style.border = "solid 2px gray"
SMB2.style.height = "12px"
SMB2.style.width = "12px"
SMB2.style.position = "absolute"
SMB2.style.left = "202px"
SMB2.style.top = "413px"

SMB3.style.backgroundColor = "#3d3d3d"
SMB3.style.transform = "rotate(52deg)"
SMB3.style.borderRadius = "41%"
SMB3.style.border = "solid 2px gray"
SMB3.style.height = "12px"
SMB3.style.width = "12px"
SMB3.style.position = "absolute"
SMB3.style.left = "205px"
SMB3.style.top = "458px"

SMH1.style.backgroundColor = "black";
SMH1.style.border = "solid 2px black";
SMH1.style.height = "20px";
SMH1.style.width = "125px";
SMH1.style.position = "absolute";
SMH1.style.left = "148px";
SMH1.style.top = "250px"

SMH2.style.backgroundColor = "black";
SMH2.style.border = "solid 2px black";
SMH2.style.height = "100px";
SMH2.style.width = "75px";
SMH2.style.position = "absolute";
SMH2.style.left = "172px";
SMH2.style.top = "149px"

SMA1.style.backgroundColor = "brown"
SMA1.style.transform = "rotate(53deg)"
SMA1.style.borderRadius = "2%"
SMA1.style.height = "115px"
SMA1.style.width = "12px"
SMA1.style.position = "absolute"
SMA1.style.left = "327px"
SMA1.style.top = "359px"

SMA2.style.backgroundColor = "brown"
SMA2.style.transform = "rotate(-23deg)"
SMA2.style.borderRadius = "2%"
SMA2.style.height = "48px"
SMA2.style.width = "12px"
SMA2.style.position = "absolute"
SMA2.style.left = "355px"
SMA2.style.top = "372px"

SMA3.style.backgroundColor = "brown"
SMA3.style.transform = "rotate(88deg)"
SMA3.style.borderRadius = "2%"
SMA3.style.height = "100px"
SMA3.style.width = "12px"
SMA3.style.position = "absolute"
SMA3.style.left = "86px"
SMA3.style.top = "392px"

SMA4.style.backgroundColor = "brown"
SMA4.style.borderRadius = "2%"
SMA4.style.height = "48px"
SMA4.style.width = "12px"
SMA4.style.position = "absolute"
SMA4.style.left = "57px"
SMA4.style.top = "418px"
//Snowman

//General Backround
var box = document.createElement("div");
box.style.margin = "0"
box.style.width = "1248px";
box.style.height = "768px";
box.style.border = "green dotted 24px";
box.style.backgroundColor = "red"
document.body.append(box)
//General Backround

//Text
var text = document.createElement("div")
box.innerHTML = "Happy Holidays To All!"
box.style.color = "green";
box.style.fontStyle = "italic"; 
box.style.fontSize = "4.5em"; 
box.style.textAlign = "center"
document.body.append(text);
//Text

//tree
var tree = document.createElement("img");
tree.src = "Images/Tree.png"; 
tree.style.position = "absolute";
tree.style.top = "275px"
tree.style.left = "800px"
tree.style.width = "auto"; 
tree.style.height = "490px"; 
document.body.appendChild(tree);
//tree

//Besy(Evan)
var besy = document.createElement("img");
besy.src = "Images/Besy.png"; 
besy.style.position = "absolute";
besy.style.top = "135px"
besy.style.left = "325px"
besy.style.width = "auto"; 
besy.style.height = "650px"; 
document.body.appendChild(besy);
//Besy(Evan)

//Snow
var img = document.createElement("img");
img.src = "Images/FallingSnowTransparent.gif"; 
img.style.position = "fixed";
img.style.top = "1px"
img.style.left = "1px"
img.style.margin = "0 auto"; 
img.style.width = "auto"; 
img.style.height = "768"; 
document.body.appendChild(img);

var img2 = document.createElement("img");
img2.src = "Images/FallingSnowTransparent.gif"; 
img2.style.position = "fixed";
img2.style.top = "1px"
img2.style.left = "275px"
img2.style.margin = "0 auto"; 
img2.style.width = "auto"; 
img2.style.height = "1000px"; 
document.body.appendChild(img2);
//Snow

//Music
var au = new Audio("Music/MerryChrima.MOV");
au.loop = true
au.controls = true;
document.body.appendChild(au);
//Music

//Besy Text Bubble
var bubble = document.createElement("div")
document.body.append(bubble)
bubble.style.backgroundColor = "#ffffff"
bubble.style.borderRadius = "50%"
bubble.style.border = "solid 1px black"
bubble.style.height = "65px"
bubble.style.width = "220px"
bubble.style.position = "absolute"
bubble.style.left = "748px"
bubble.style.top = "134px"

var text1 = document.createElement("div")
text1.innerHTML = "Merry Chrima"
text1.style.color = "black";
text1.style.fontStyle = "bold"; 
text1.style.fontStyle = "italic"; 
text1.style.fontSize = "1.75em"; 
text1.style.position = "absolute"
text1.style.top = "150px"
text1.style.left = "775px"
document.body.append(text1);

var B1 = document.createElement("div")
B1.style.backgroundColor = "white"
B1.style.borderRadius = "50%"
B1.style.border = "solid 1px black"
B1.style.height = "12px"
B1.style.width = "12px"
B1.style.position = "absolute"
B1.style.left = "740px"
B1.style.top = "190px"
document.body.append(B1);

var B2 = document.createElement("div")
B2.style.backgroundColor = "white"
B2.style.borderRadius = "50%"
B2.style.border = "solid 1px black"
B2.style.height = "10px"
B2.style.width = "10px"
B2.style.position = "absolute"
B2.style.left = "728px"
B2.style.top = "205px"
document.body.append(B2)

var B3 = document.createElement("div")
B3.style.backgroundColor = "white"
B3.style.borderRadius = "50%"
B3.style.border = "solid 1px black"
B3.style.height = "8px"
B3.style.width = "8px"
B3.style.position = "absolute"
B3.style.left = "712px"
B3.style.top = "218px"
document.body.append(B3);
//Besy Text Bubble

//Old code may need in future
// var snow = document.createElement("img");
// snow.src = "../Images/FallingSnowTransparent.gif"
// snow.style.position = "relative";
// snow.setAttribute("width", "300px")
// snow.setAttribute("height", "200px")
// document.body.append(snow);

//<h1 id=text> Happy Hollidays To All!</h1>
//text = document.getElementById("text").textContent;
//box.textContent = text;   
//var hideText = document.getElementById("text");
//hideText.style.display = "none";