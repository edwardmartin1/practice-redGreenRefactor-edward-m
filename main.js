function countVowels(str)
{
    let strArray = str.split("");

    let count = 0;

    strArray.forEach((arrayElement) =>
        {
            if (arrayElement.toUpperCase() === "A"
                || arrayElement.toUpperCase() === "E"
                || arrayElement.toUpperCase() === "I"
                || arrayElement.toUpperCase() === "O"
                || arrayElement.toUpperCase() === "U")
            {
                count += 1;
            }
        
            
        });
        
    return count;        
}

console.log(countVowels("Hello, world!"));


