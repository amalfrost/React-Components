import type { TreeData } from "../../models/treeViewModel";

export const TreeMockData: TreeData[] = [
    {
        id: 1,
        title: "About",
        children: [
            {
                id: 11,
                title: "Company",
                children: [
                    {
                        id: 111,
                        title: "History",
                    },
                    {
                        id: 112,
                        title: "Leadership",
                        children: [
                            {
                                id: 1121,
                                title: "CEO",
                            },
                            {
                                id: 1122,
                                title: "CTO",
                            },
                        ],
                    },
                ],
            },
            {
                id: 12,
                title: "Mission",
            },
        ],
    },
    {
        id: 2,
        title: "Products",
        children: [
            {
                id: 21,
                title: "Frontend",
                children: [
                    {
                        id: 211,
                        title: "React",
                    },
                    {
                        id: 212,
                        title: "Angular",
                    },
                    {
                        id: 213,
                        title: "Vue",
                    },
                ],
            },
            {
                id: 22,
                title: "Backend",
                children: [
                    {
                        id: 221,
                        title: "Node.js",
                        children: [
                            {
                                id: 2211,
                                title: "Express",
                            },
                            {
                                id: 2212,
                                title: "NestJS",
                            },
                        ],
                    },
                    {
                        id: 222,
                        title: "Java",
                        children: [
                            {
                                id: 2221,
                                title: "Spring Boot",
                            },
                        ],
                    },
                ],
            },
        ],
    },
    {
        id: 3,
        title: "Documentation",
        children: [
            {
                id: 31,
                title: "Getting Started",
            },
            {
                id: 32,
                title: "Guides",
                children: [
                    {
                        id: 321,
                        title: "Installation",
                    },
                    {
                        id: 322,
                        title: "Configuration",
                        children: [
                            {
                                id: 3221,
                                title: "Environment Variables",
                            },
                            {
                                id: 3222,
                                title: "Build Settings",
                                children: [
                                    {
                                        id: 32221,
                                        title: "Development",
                                    },
                                    {
                                        id: 32222,
                                        title: "Production",
                                    },
                                ],
                            },
                        ],
                    },
                ],
            },
        ],
    },
    {
        id: 4,
        title: "Deep Recursion Test",
        children: [
            {
                id: 41,
                title: "Level 1",
                children: [
                    {
                        id: 411,
                        title: "Level 2",
                        children: [
                            {
                                id: 4111,
                                title: "Level 3",
                                children: [
                                    {
                                        id: 41111,
                                        title: "Level 4",
                                        children: [
                                            {
                                                id: 411111,
                                                title: "Level 5",
                                                children: [
                                                    {
                                                        id: 4111111,
                                                        title: "Level 6",
                                                    },
                                                ],
                                            },
                                        ],
                                    },
                                ],
                            },
                        ],
                    },
                ],
            },
        ],
    },
];