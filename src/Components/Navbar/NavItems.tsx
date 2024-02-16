interface Items {
    id: number,
    title: string,
    path: string,
    className: string,
}

export const navItems:Items[] = [
    {
        id: 1,
        title: "Home",
        path: "./",
        className: "nav-link",
    },
    {
        id: 2,
        title: "Prepare",
        path: "./prepare",
        className: "nav-link",
    },
    {
        id: 3,
        title: "Schedules",
        path: "#",
        className: "nav-link",
    },
    {
        id: 4,
        title: "Information",
        path: "./information",
        className: "nav-link",
    },
];

export const serviceDropdown:Items[] = [
    {
        id: 1,
        title: "Day 1",
        path: "./day1",
        className: "dropdownbox-link",
    },
    {
        id: 2,
        title: "Day 2",
        path: "./day2",
        className: "dropdownbox-link",
    },
    {
        id: 3,
        title: "Day 3",
        path: "./day3",
        className: "dropdownbox-link",
    },
    {
        id: 4,
        title: "Day 4",
        path: "./day4",
        className: "dropdownbox-link",
    },
    {
        id: 5,
        title: "Day 5",
        path: "./day5",
        className: "dropdownbox-link",
    },
    {
        id: 6,
        title: "Day 6",
        path: "./day6",
        className: "dropdownbox-link",
    },
];