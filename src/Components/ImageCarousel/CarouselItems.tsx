interface CImageItems {
    id: number,
    path: string,
    title: string,
}

export const carouselItems:CImageItems[]= [
    {
        id: 1,
        path: process.env.PUBLIC_URL + "Scroll1.jpg",
        title: "Shibuya"
    },
    {
        id: 2,
        path: process.env.PUBLIC_URL + "Scroll2.jpg",
        title: "Tokyo Steet"
    },
    {
        id: 3,
        path: process.env.PUBLIC_URL + "Scroll3.jpg",
        title: "Torii"
    },
    {
        id: 4,
        path: process.env.PUBLIC_URL + "Scroll4.jpg",
        title: "Tokyo Morning"
    },
    {
        id: 5,
        path: process.env.PUBLIC_URL + "Scroll5.jpg",
        title: "Tokyo Night"
    },
    {
        id: 6,
        path: process.env.PUBLIC_URL + "Scroll6.jpg",
        title: "Tokyo JR Station"
    },
    {
        id: 7,
        path: process.env.PUBLIC_URL + "Scroll7.jpg",
        title: "Arakurayama Sengen"
    },
];

