import React from "react"


const APIService = {
    timeoutDelay: (ms) => {
        return new Promise((resolve) => setTimeout(resolve, ms));
    },

    getBucketSlug: () => {
        return "dw-production"
    },
    getReadKey: () => {
        return "hF6EGiGU47qdu7oae0evLO8AYtNxDgEkavAtdXiwxl1yiPYVby"
    },
    getInitialCarList: async () =>{
        const res = await fetch(
            `https://api.cosmicjs.com/v3/buckets/${APIService.getBucketSlug()}/objects?pretty=true&query=%7B%22type%22:%22initialcars%22%7D&read_key=${APIService.getReadKey()}&depth=1&props=title,metadata,id,`
        )

        await APIService.timeoutDelay(500);
        return res.json();
    },
    getDesignerList: async () => {
        const res = await fetch(
            `https://api.cosmicjs.com/v3/buckets/${APIService.getBucketSlug()}/objects?pretty=true&query=%7B%22type%22:%22designers%22%7D&read_key=${APIService.getReadKey()}&depth=1&props=title,metadata,id,`
        )
        
        await APIService.timeoutDelay(500);
        return res.json();
    },
    getCarsList: async () => {
        const res = await fetch(
            `https://api.cosmicjs.com/v3/buckets/${APIService.getBucketSlug()}/objects?pretty=true&query=%7B%22type%22:%22cars%22%7D&read_key=${APIService.getReadKey()}&depth=1&props=title,metadata,id,`
        )
        
        await APIService.timeoutDelay(500);
        return res.json();
    }
    
}


export default APIService;