
// for(let i = 0; i < githubData.length; i++){
    
// }


for(let i = 0; i < githubData.length; i++){
    if(githubData[i].id === '8030403992 ') {
        console.log("hi there")
        let commit = githubData[i].payload.commits[0].message;
        console.log("This is my commit message!", commit)
    }
};

