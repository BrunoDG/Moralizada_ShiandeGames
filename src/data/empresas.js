const empresas = [
    {
        name: 'Nintendo',
        subtipos: [
            {
                name: 'Portáteis', consoles: [
                    { name: 'GameBoy / GameBoy Color', route: '/consoles/gameboy' },
                    { name: 'GameBoy Advance', route: '/consoles/GBA' },
                    { name: 'Nintendo DS', route: '/consoles/nds' },
                    { name: 'Nintendo 3DS', route: '/consoles/3ds' },]
            },
            {
                name: 'Consoles de Mesa', consoles: [
                    { name: 'NES / Famicom', route: '/consoles/nes' },
                    { name: 'Super Nintendo / Super Famicom', route: '/consoles/snes' },
                    { name: 'Nintendo 64', route: '/consoles/n64' },
                    { name: 'GameCube', route: '/consoles/gamecube' },]
            }
        ]
    },
    {
        name: 'SEGA',
        subtipos: [
            {
                name: 'Portáteis', consoles: [
                    { name: 'Game Gear', route: '/consoles/gamegear' },
                ]
            },
            {
                name: 'Consoles de Mesa', consoles: [
                    { name: 'Master System', route: '/consoles/mastersystem' },
                    { name: 'Mega Drive', route: '/consoles/megadrive' },
                    { name: 'Saturn', route: '/consoles/saturn' },
                    { name: 'Dreamcast', route: '/consoles/dc' },
                ]
            }
        ]
    },
    {
        name: 'Sony',
        subtipos: [
            {
                name: 'Portáteis', consoles: [
                    { name: 'Playstation Portable (PSP)', route: '/consoles/psp' },
                    { name: 'Playstation Vita (PSVita)', route: '/consoles/psvita' },
                ]
            },
            {
                name: 'Consoles de Mesa', consoles: [
                    { name: 'Playstation / PSOne', route: '/consoles/psone' },
                    { name: 'Playstation 2', route: '/consoles/ps2' },
                    { name: 'Playstation 3', route: '/consoles/ps3' },
                    { name: 'Playstation 4', route: '/consoles/ps4' },
                ]
            }
        ]
    },
    {
        name: 'Panasonic',
        subtipos: [
            {
                name: 'Consoles de Mesa', consoles: [
                    { name: '3DO', route: '/consoles/3do' },
                ]
            }
        ]
    },
    {
        name: 'NEC',
        subtipos: [
            {
                name: 'Portáteis', consoles: [
                    { name: 'TurboExpress / PC Engine GT', route: '/consoles/pc-engine-gt' },
                ]
            },
            {
                name: 'Consoles de Mesa', consoles: [
                    { name: 'TurboGrafx-16 / PC Engine', route: '/consoles/pc-engine' },
                    { name: 'PC-FX', route: '/consoles/pc-fx' },
                ]
            }
        ]
    },
];

export default empresas;