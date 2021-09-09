const importer = require("../figmaImporter");

describe("tests for the figma importer script", () => {

    const mockedAPIRequestFromFigma = {
        "document": {
            "children": [
                {
                    "name": "Colors",
                    "children": [
                        {
                            "name": "COLORS USAGE",
                            "children": [
                                {
                                    "type": "GROUP",
                                    "children": [
                                        {
                                            "type": "GROUP",
                                            "children": [
                                                {
                                                    "type": "GROUP",
                                                    "children": [
                                                        {
                                                            "type": "TEXT",
                                                            "characters": "Is a web tool which finds a good constrasts, for web accessibility, between two given colors and suggests valid alternatives. Available on contrast-finder.tanaguru.com",
                                                        },
                                                        {
                                                            "type": "TEXT",
                                                            "characters": "Tanaguru contrast finder",
                                                        }
                                                    ],
                                                },
                                                {
                                                    "type": "GROUP",
                                                    "children": [
                                                        {
                                                            "type": "TEXT",
                                                            "characters": "Is a Sketch plugin that calculates the color contrast of two selected layers and evaluates it against the WCAG2.0. Available on github.com",
                                                        },
                                                        {
                                                            "type": "TEXT",
                                                            "characters": "Sketch-Color-Contrast-Analyser",
                                                        }
                                                    ],
                                                }
                                            ],
                                        },
                                        {
                                            "type": "TEXT",
                                            "characters": "Tools and resources",
                                            "style": {
                                                "fontSize": 22.0,
                                            },
                                        }
                                    ],
                                },
                                {
                                    "type": "GROUP",
                                    "children": [
                                        {
                                            "type": "TEXT",
                                            "characters": "All type color combinations on idealo must pass WCAG AA standards of 4.5:1 for normal text and 3:1 for large text. For larger text, if the font weight is light (300) or normal (400) the text should be no smaller than 24px. If the font weight is Semi-Bold (600) then the large text should be no smaller than 19px. In the table below are approved Carbon color combinations.",
                                            "style": {
                                                "fontSize": 14.0,
                                            },
                                        },
                                        {
                                            "type": "TEXT",
                                            "characters": "Color contrast | WCAG AA standards\n",
                                            "style": {
                                                "fontSize": 22.0,
                                            },
                                        }
                                    ],
                                },
                            ],
                        },
                    ],
                },
                {
                    "name": "Badges",
                    "children": [
                        {
                            "name": "ICONS USAGE",
                            "children": [
                                {
                                    "type": "GROUP",
                                    "children": [
                                        {
                                            "type": "TEXT",
                                            "characters": "A collection of the icons used in this styleguide is available in our server as Sktechapp library.\n\nproductmanagment > UX Konzepte > 0_Projects > 00_neue_Struktur > 02_Styleguide\n \n",
                                            "style": {
                                                "fontSize": 14.0,
                                            },
                                        },
                                        {
                                            "type": "TEXT",
                                            "characters": "Resources",
                                            "style": {
                                                "fontSize": 22.0,
                                            },
                                        }
                                    ],
                                },
                            ]
                        }
                    ],
                }
            ],
        }
    };

    const mockedComponentAfterFigmaImporter = [
        {
            "title": "Colors",
            "content": [
                {
                    "headline": "Color contrast | WCAG AA standards\n",
                },
                {
                    "content": "All type color combinations on idealo must pass WCAG AA standards of 4.5:1 for normal text and 3:1 for large text. For larger text, if the font weight is light (300) or normal (400) the text should be no smaller than 24px. If the font weight is Semi-Bold (600) then the large text should be no smaller than 19px. In the table below are approved Carbon color combinations.",
                },
                {
                    "headline": "Tools and resources",
                },
                {
                    "table": [
                        {
                            "rowNr": 0,
                            "rowValues": [
                                "Sketch-Color-Contrast-Analyser",
                                "Is a Sketch plugin that calculates the color contrast of two selected layers and evaluates it against the WCAG2.0. Available on github.com"
                            ]
                        },
                        {
                            "rowNr": 1,
                            "rowValues":
                                [
                                    "Tanaguru contrast finder",
                                    "Is a web tool which finds a good constrasts, for web accessibility, between two given colors and suggests valid alternatives. Available on contrast-finder.tanaguru.com"
                                ]
                        },
                    ]
                }
            ]
        },
        {
            "title": "Badges",
            "content": [
                {
                    "headline": "Resources"
                },
                {
                    "content": "A collection of the icons used in this styleguide is available in our server as Sktechapp library.\n\nproductmanagment > UX Konzepte > 0_Projects > 00_neue_Struktur > 02_Styleguide\n \n"
                }
            ]
        }
    ];

    test("get the components from figma API", async () => {
        let resultAfterFunction = await importer.getComponentsFromFigmaApi(
            mockedAPIRequestFromFigma
        );
        expect(resultAfterFunction).toEqual(mockedComponentAfterFigmaImporter);
    });
});