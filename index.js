function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}


async function sayHello() {
    console.log("Hello");
    await delay(2000); 
    console.log("World");}

    
    sayHello()