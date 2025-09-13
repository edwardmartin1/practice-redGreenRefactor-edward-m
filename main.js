/* original code for red/green testing 

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
*/

/* refactored code */
function countVowels(str)
{
    try 
    {
        if (typeof str !== "string") 
        {
            throw new Error("Input must be a string.");
        }

        if (!str) 
        {
            throw new Error("No input was provided.");
        }

        if (str.trim() === "") 
        {
            throw new Error("Blank input was provided.");
        }


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

    catch (err) 
    {
        console.error(`Error: ${err.message}`);
    
        return 0;
    }
}


module.exports =
{
    countVowels: countVowels
};

