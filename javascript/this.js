// the object that excuting the current function
// method = obj 
// function = global (window,global) 


// const video={
//     title:'a',
//     tags:['a','b','c'],
//     showtags() {
//         this.tags.forEach(function(tag){
//             console.log(tag);
//         });
//     }
// };
// video.showtags();

// video.play();

// video.stop = function(){
//     console.log(this);
// }

// video.stop();  

// function playVideo(){
//     console.log(this);
// }
// playVideo();



const person= {
    name:'mosh',
    walk(){
        console.log(this);
    }
}
person.walk();

const wal = person.walk ;
console.log(wal);
walk(); 

