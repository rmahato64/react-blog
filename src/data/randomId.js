

    export const randomId = (n = 6) => {
        const lettersAndNums = "0123456789abcdefghijklmnopqrstuvwxysABCDEFGHIJKLMNOPQRSTUVWXYZ"
        let id = ''
        for(let i = 0; i<n; i++ ) {
            let index = Math.floor(Math.random() * lettersAndNums.length);
            id = id + lettersAndNums[index];
        }
        return id
    }



