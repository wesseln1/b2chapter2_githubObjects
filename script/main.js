
// for(let i = 0; i < githubData.length; i++){
    
// }


for(let i = 0; i < githubData.length; i++){
    if(githubData[i].id === '8030403992') {
        // console.log("hi there")
        let commit = githubData[i].payload.commits[0].message;
        let thisId = githubData[i].id;
        console.log(`Push Event Id and commit message; ${thisId}: ${commit}`)
    }
};

