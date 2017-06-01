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