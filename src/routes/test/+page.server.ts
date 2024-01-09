export async function load({ params }) {
    // Simulating a delay of 100 milliseconds
    await new Promise(resolve => {
        setTimeout(resolve, 10000);
    });

    return {
        post: "" // Replace this with the actual value you want to return
    };
}