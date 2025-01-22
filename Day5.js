let ag=17;
if (ag>=18) {
    console.log("eligible for vote");
}
else{
    console.log("not eligible");
}
let a='b';
switch(a){
    case 'a':
        console.log("vowel");
        break;
    case 'e':
        console.log("vowel");
        break;
    case 'i':
        console.log("vowel");
        break;
    case 'o':
        console.log("vowel");
        break;
    case 'u':
        console.log("vowel");   
        break;
    case 'A':
        console.log("vowel");
        break;
    case 'E':
        console.log("vowel");
        break;
    case 'I':
        console.log("vowel");
        break;
    case 'O':
        console.log("vowel");
        break;
    case 'U':
        console.log("vowel");   
        break;
 
    default:
        console.log("consonant");
    
    }
let b=23;
if(b%2==0){
    console.log("Even");    
}
else{
    console.log("Odd");
}
for(i=0;i<=15;i++){
    console.log(i ,"* 5 =",i*5  );
}

let sum =0;
for(i=0;i<=50;i++){
    sum=sum+i;
}
console.log("Sum of numbers from 1 - 50 is ",sum);

console.log("Pattern printing");
for(i=1;i<=5;i++){
    console.log("*".repeat(i));
}
let abc = (x,y)=>(x+y);
console.log(abc(1,3));
