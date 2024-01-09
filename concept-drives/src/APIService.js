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
    getDesignerList: async () => {
        const res = await fetch(
            `https://api.cosmicjs.com/v3/buckets/${APIService.getBucketSlug()}/objects?pretty=true&query=%7B%22type%22:%22designers%22%7D&read_key=${APIService.getReadKey()}&depth=1&props=title,metadata,id,`
        )
        
        await APIService.timeoutDelay(500);
        return res.json();
    },
    getCarsList: async () => {
        console.log("getCarsList")
        const res = await fetch(
            `https://api.cosmicjs.com/v3/buckets/${APIService.getBucketSlug()}/objects?pretty=true&query=%7B%22type%22:%22cars%22%7D&read_key=${APIService.getReadKey()}&depth=1&props=title,metadata,id,`
        )
        
        await APIService.timeoutDelay(500);
        return res.json();
    },
    getAboutUs: async () => {
        const res = await fetch(
            `https://api.cosmicjs.com/v3/buckets/${APIService.getBucketSlug()}/objects?pretty=true&query=%7B%22type%22:%22aboutus%22%7D&limit=10&read_key=${APIService.getReadKey()}&depth=1&props=title,metadata,id,`
        )
        
        await APIService.timeoutDelay(500);
        return res.json();
    },

    getCar: async (id) => {
        console.log(id)
        const res = await fetch(
            `https://api.cosmicjs.com/v3/buckets/${APIService.getBucketSlug()}/objects/${id}?read_key=${APIService.getReadKey()}&props=slug,title,metadata,id,`
        )
        
        await APIService.timeoutDelay(500);
        return res.json();
    }
    
}


export default APIService;