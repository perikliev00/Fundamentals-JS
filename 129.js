function censored(text,word) {
    let x=0
   while(text.includes(word)) {
    text=text.replace(word,'*'.repeat(word.length));
    x++;
   }
   console.log(x);
}