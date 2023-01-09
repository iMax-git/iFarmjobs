Config = {
    extended : "extended",

    Jobs : [
        // {
        //     name: "Travail",
        //     location: [x,y,z],
        //     salary: [min,max],
        //     animation: "animation dictionnary", // https://wiki.rage.mp/index.php?title=Animations
        //     animation2: "animation name", // https://wiki.rage.mp/index.php?title=Animations
        //     tool: "prop de l'outil", // https://cdn.rage.mp/public/odb/
        //     blip_sprite: nombre, // https://wiki.rage.mp/index.php?title=Blips
        //     blip_color: nombre, // https://wiki.rage.mp/index.php?title=Blips#Blip_colors
        //     marker_type: nombre, // https://wiki.rage.mp/index.php?title=Markers
        //     marker_color: [r,g,b,a],
        // },
        {name: "Mineur", location: [-596.1758, 2089.794, 131.4066], salary: [5,10], animation: "amb@world_human_hammering@male@base", animation2: "base",tool:"prop_tool_pickaxe", blip_sprite: 351, blip_color: 2, marker_type: 1, marker_color: [255, 0, 0, 255]},
        {name: "Pêcheur", location: [-1825.636, -1268.426, 8.605102], salary: [5,10], animation: "amb@world_human_stand_fishing@base", animation2: "base",tool:"prop_fishing_rod_01", blip_sprite: 351, blip_color: 2, marker_type: 1, marker_color: [0, 0, 255, 255]},
        {name: "Bûcheron", location: [1525.938, 2171.076, 80.01464], salary: [5,10], animation: "amb@world_human_hammering@male@base", animation2: "base",tool:"prop_tool_fireaxe", blip_sprite: 351, blip_color: 2, marker_type: 1, marker_color: [0, 255, 0, 255]},
    ],

    Worktime : 2, //2 seconds
}