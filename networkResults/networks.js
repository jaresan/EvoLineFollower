// fitness - 207
export const network1 = {
  "nodes": [
  {
    "bias": 0,
    "type": "input",
    "squash": "LOGISTIC",
    "mask": 1,
    "index": "0"
  },
  {
    "bias": 0,
    "type": "input",
    "squash": "LOGISTIC",
    "mask": 1,
    "index": "1"
  },
  {
    "bias": 0,
    "type": "input",
    "squash": "LOGISTIC",
    "mask": 1,
    "index": "2"
  },
  {
    "bias": 0,
    "type": "input",
    "squash": "LOGISTIC",
    "mask": 1,
    "index": "3"
  },
  {
    "bias": 0,
    "type": "input",
    "squash": "LOGISTIC",
    "mask": 1,
    "index": "4"
  },
  {
    "bias": 0.09905095371139208,
    "type": "hidden",
    "squash": "LOGISTIC",
    "mask": 1,
    "index": "5"
  },
  {
    "bias": -0.7421163050136416,
    "type": "hidden",
    "squash": "LOGISTIC",
    "mask": 1,
    "index": "6"
  },
  {
    "bias": -0.09585114380048756,
    "type": "hidden",
    "squash": "LOGISTIC",
    "mask": 1,
    "index": "7"
  },
  {
    "bias": -0.4268353864643182,
    "type": "output",
    "squash": "LOGISTIC",
    "mask": 1,
    "index": "8"
  },
  {
    "bias": -0.7179677703234615,
    "type": "output",
    "squash": "LOGISTIC",
    "mask": 1,
    "index": "9"
  }
],
  "connections": [
  {
    "weight": 0.013452097875385594,
    "from": 0,
    "to": 5,
    "gater": null
  },
  {
    "weight": -0.043360476814440135,
    "from": 1,
    "to": 5,
    "gater": null
  },
  {
    "weight": -0.035662664670300354,
    "from": 0,
    "to": 6,
    "gater": null
  },
  {
    "weight": -0.00941387499045443,
    "from": 2,
    "to": 5,
    "gater": null
  },
  {
    "weight": -0.04838522596321831,
    "from": 1,
    "to": 6,
    "gater": null
  },
  {
    "weight": 0.04046866676769709,
    "from": 0,
    "to": 7,
    "gater": null
  },
  {
    "weight": 0.01105522561224892,
    "from": 3,
    "to": 5,
    "gater": null
  },
  {
    "weight": 0.0016552365910922767,
    "from": 2,
    "to": 6,
    "gater": null
  },
  {
    "weight": -0.056049364681858865,
    "from": 1,
    "to": 7,
    "gater": null
  },
  {
    "weight": 0.7078095728877669,
    "from": 4,
    "to": 5,
    "gater": null
  },
  {
    "weight": 0.06329710001241748,
    "from": 3,
    "to": 6,
    "gater": null
  },
  {
    "weight": -0.011913093734098504,
    "from": 2,
    "to": 7,
    "gater": null
  },
  {
    "weight": 0.06938407004654357,
    "from": 4,
    "to": 6,
    "gater": null
  },
  {
    "weight": 0.009165986765486661,
    "from": 3,
    "to": 7,
    "gater": null
  },
  {
    "weight": -0.091915395874765,
    "from": 4,
    "to": 7,
    "gater": null
  },
  {
    "weight": -0.09332094056496834,
    "from": 5,
    "to": 8,
    "gater": null
  },
  {
    "weight": 0.07729427339849138,
    "from": 6,
    "to": 8,
    "gater": null
  },
  {
    "weight": -0.038138483274677976,
    "from": 5,
    "to": 9,
    "gater": null
  },
  {
    "weight": -0.009383283512574309,
    "from": 7,
    "to": 8,
    "gater": null
  },
  {
    "weight": -0.03499681068944009,
    "from": 6,
    "to": 9,
    "gater": null
  },
  {
    "weight": 0.027762769174785762,
    "from": 7,
    "to": 9,
    "gater": null
  }
],
  "input": 5,
  "output": 2,
  "dropout": 0
};

// fitness - 125
export const network2 = {
  "nodes": [
    {
      "bias": 0,
      "type": "input",
      "squash": "LOGISTIC",
      "mask": 1,
      "index": "0"
    },
    {
      "bias": 0,
      "type": "input",
      "squash": "LOGISTIC",
      "mask": 1,
      "index": "1"
    },
    {
      "bias": 0,
      "type": "input",
      "squash": "LOGISTIC",
      "mask": 1,
      "index": "2"
    },
    {
      "bias": 0,
      "type": "input",
      "squash": "LOGISTIC",
      "mask": 1,
      "index": "3"
    },
    {
      "bias": 0,
      "type": "input",
      "squash": "LOGISTIC",
      "mask": 1,
      "index": "4"
    },
    {
      "bias": -0.09617945629858556,
      "type": "hidden",
      "squash": "LOGISTIC",
      "mask": 1,
      "index": "5"
    },
    {
      "bias": 0.0517118418906872,
      "type": "hidden",
      "squash": "LOGISTIC",
      "mask": 1,
      "index": "6"
    },
    {
      "bias": 0.0545342928705424,
      "type": "hidden",
      "squash": "LOGISTIC",
      "mask": 1,
      "index": "7"
    },
    {
      "bias": -0.8425106480308456,
      "type": "output",
      "squash": "LOGISTIC",
      "mask": 1,
      "index": "8"
    },
    {
      "bias": -0.7434594475677888,
      "type": "output",
      "squash": "LOGISTIC",
      "mask": 1,
      "index": "9"
    }
  ],
  "connections": [
    {
      "weight": 0.06115167561852383,
      "from": 0,
      "to": 5,
      "gater": null
    },
    {
      "weight": 0.020162094624953483,
      "from": 1,
      "to": 5,
      "gater": null
    },
    {
      "weight": 0.01410243568197514,
      "from": 0,
      "to": 6,
      "gater": null
    },
    {
      "weight": -0.045447815092754286,
      "from": 2,
      "to": 5,
      "gater": null
    },
    {
      "weight": 0.04464896790888301,
      "from": 1,
      "to": 6,
      "gater": null
    },
    {
      "weight": -0.06486249722364676,
      "from": 0,
      "to": 7,
      "gater": null
    },
    {
      "weight": -0.02626868346009341,
      "from": 3,
      "to": 5,
      "gater": null
    },
    {
      "weight": -0.08637740646958503,
      "from": 2,
      "to": 6,
      "gater": null
    },
    {
      "weight": 0.6660353681132926,
      "from": 1,
      "to": 7,
      "gater": null
    },
    {
      "weight": 0.03266945819890896,
      "from": 4,
      "to": 5,
      "gater": null
    },
    {
      "weight": -0.03187993392322941,
      "from": 3,
      "to": 6,
      "gater": null
    },
    {
      "weight": -0.0610864314287253,
      "from": 2,
      "to": 7,
      "gater": null
    },
    {
      "weight": -0.06356974996552264,
      "from": 4,
      "to": 6,
      "gater": null
    },
    {
      "weight": -0.05988827674837847,
      "from": 3,
      "to": 7,
      "gater": null
    },
    {
      "weight": -0.077615462713444,
      "from": 4,
      "to": 7,
      "gater": null
    },
    {
      "weight": 0.543823997191833,
      "from": 5,
      "to": 8,
      "gater": null
    },
    {
      "weight": 0.8048602894182181,
      "from": 6,
      "to": 8,
      "gater": null
    },
    {
      "weight": 0.9895919164894076,
      "from": 5,
      "to": 9,
      "gater": null
    },
    {
      "weight": 0.07582810466596884,
      "from": 7,
      "to": 8,
      "gater": null
    },
    {
      "weight": -0.05882266840828865,
      "from": 6,
      "to": 9,
      "gater": null
    },
    {
      "weight": 0.08296996046362276,
      "from": 7,
      "to": 9,
      "gater": null
    }
  ],
  "input": 5,
  "output": 2,
  "dropout": 0
};

// fitness - 411
export const network3 = {
  "nodes": [
    {
      "bias": 0,
      "type": "input",
      "squash": "LOGISTIC",
      "mask": 1,
      "index": "0"
    },
    {
      "bias": 0,
      "type": "input",
      "squash": "LOGISTIC",
      "mask": 1,
      "index": "1"
    },
    {
      "bias": 0,
      "type": "input",
      "squash": "LOGISTIC",
      "mask": 1,
      "index": "2"
    },
    {
      "bias": 0,
      "type": "input",
      "squash": "LOGISTIC",
      "mask": 1,
      "index": "3"
    },
    {
      "bias": 0,
      "type": "input",
      "squash": "LOGISTIC",
      "mask": 1,
      "index": "4"
    },
    {
      "bias": -0.09851277153884333,
      "type": "hidden",
      "squash": "LOGISTIC",
      "mask": 1,
      "index": "5"
    },
    {
      "bias": 0.31385153903262847,
      "type": "hidden",
      "squash": "LOGISTIC",
      "mask": 1,
      "index": "6"
    },
    {
      "bias": 1.6206766522281932,
      "type": "hidden",
      "squash": "LOGISTIC",
      "mask": 1,
      "index": "7"
    },
    {
      "bias": 0.12557881690248643,
      "type": "output",
      "squash": "LOGISTIC",
      "mask": 1,
      "index": "8"
    },
    {
      "bias": -0.0059534771258851205,
      "type": "output",
      "squash": "LOGISTIC",
      "mask": 1,
      "index": "9"
    }
  ],
  "connections": [
    {
      "weight": 2.2985783890987235,
      "from": 0,
      "to": 5,
      "gater": null
    },
    {
      "weight": 2.853564233680392,
      "from": 1,
      "to": 5,
      "gater": null
    },
    {
      "weight": 0.9509093176892087,
      "from": 0,
      "to": 6,
      "gater": null
    },
    {
      "weight": -1.0938784050043444,
      "from": 2,
      "to": 5,
      "gater": null
    },
    {
      "weight": 0.6506914220273946,
      "from": 1,
      "to": 6,
      "gater": null
    },
    {
      "weight": 2.169419905481562,
      "from": 0,
      "to": 7,
      "gater": null
    },
    {
      "weight": -0.01887872985437826,
      "from": 3,
      "to": 5,
      "gater": null
    },
    {
      "weight": -0.03450661619741817,
      "from": 2,
      "to": 6,
      "gater": null
    },
    {
      "weight": 0.7270540911134733,
      "from": 1,
      "to": 7,
      "gater": null
    },
    {
      "weight": 0.9161880662934581,
      "from": 4,
      "to": 5,
      "gater": null
    },
    {
      "weight": 0.20087075688027825,
      "from": 3,
      "to": 6,
      "gater": null
    },
    {
      "weight": -0.36033402629914024,
      "from": 2,
      "to": 7,
      "gater": null
    },
    {
      "weight": -0.14790127954625198,
      "from": 4,
      "to": 6,
      "gater": null
    },
    {
      "weight": 0.8603171124734404,
      "from": 3,
      "to": 7,
      "gater": null
    },
    {
      "weight": 1.1020030725928005,
      "from": 4,
      "to": 7,
      "gater": null
    },
    {
      "weight": 0.0027456902684678958,
      "from": 5,
      "to": 8,
      "gater": null
    },
    {
      "weight": 0.45148847252538055,
      "from": 6,
      "to": 8,
      "gater": null
    },
    {
      "weight": 1.618630571552789,
      "from": 5,
      "to": 9,
      "gater": null
    },
    {
      "weight": 0.026162783560197855,
      "from": 7,
      "to": 8,
      "gater": null
    },
    {
      "weight": 0.060270539910729365,
      "from": 6,
      "to": 9,
      "gater": null
    },
    {
      "weight": 0.004884412011204153,
      "from": 7,
      "to": 9,
      "gater": null
    }
  ],
  "input": 5,
  "output": 2,
  "dropout": 0
};
