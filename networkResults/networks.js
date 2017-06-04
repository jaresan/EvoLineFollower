const networkMaxLeft = {
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
            "bias": 0.06447607081152054,
            "type": "hidden",
            "squash": "LOGISTIC",
            "mask": 1,
            "index": "5"
        },
        {
            "bias": -0.6922008538359671,
            "type": "hidden",
            "squash": "LOGISTIC",
            "mask": 1,
            "index": "6"
        },
        {
            "bias": 2.591066699864244,
            "type": "hidden",
            "squash": "LOGISTIC",
            "mask": 1,
            "index": "7"
        },
        {
            "bias": 2.9445584429339853,
            "type": "output",
            "squash": "LOGISTIC",
            "mask": 1,
            "index": "8"
        },
        {
            "bias": -0.2865713717172502,
            "type": "output",
            "squash": "LOGISTIC",
            "mask": 1,
            "index": "9"
        }
    ],
    "connections": [
        {
            "weight": 0.06376703665908232,
            "from": 0,
            "to": 5,
            "gater": null
        },
        {
            "weight": 0.0414750426341286,
            "from": 1,
            "to": 5,
            "gater": null
        },
        {
            "weight": 0.08709279948004084,
            "from": 0,
            "to": 6,
            "gater": null
        },
        {
            "weight": -0.05052716428332724,
            "from": 2,
            "to": 5,
            "gater": null
        },
        {
            "weight": 0.7578452188837695,
            "from": 1,
            "to": 6,
            "gater": null
        },
        {
            "weight": 0.07947619791610228,
            "from": 0,
            "to": 7,
            "gater": null
        },
        {
            "weight": 0.9375242437618841,
            "from": 3,
            "to": 5,
            "gater": null
        },
        {
            "weight": 0.05173751032303847,
            "from": 2,
            "to": 6,
            "gater": null
        },
        {
            "weight": 0.01785328075515276,
            "from": 1,
            "to": 7,
            "gater": null
        },
        {
            "weight": 0.35491743793313063,
            "from": 4,
            "to": 5,
            "gater": null
        },
        {
            "weight": 0.021719828396325358,
            "from": 3,
            "to": 6,
            "gater": null
        },
        {
            "weight": -0.08105241206457153,
            "from": 2,
            "to": 7,
            "gater": null
        },
        {
            "weight": -0.09673524818887823,
            "from": 4,
            "to": 6,
            "gater": null
        },
        {
            "weight": 1.0499796490905395,
            "from": 3,
            "to": 7,
            "gater": null
        },
        {
            "weight": 0.003526790206716021,
            "from": 4,
            "to": 7,
            "gater": null
        },
        {
            "weight": 0.8974076676956666,
            "from": 5,
            "to": 8,
            "gater": null
        },
        {
            "weight": 0.9953693549403793,
            "from": 6,
            "to": 8,
            "gater": null
        },
        {
            "weight": 0.0752951070927769,
            "from": 5,
            "to": 9,
            "gater": null
        },
        {
            "weight": 1.0452816550716297,
            "from": 7,
            "to": 8,
            "gater": null
        },
        {
            "weight": 0.031458525648446145,
            "from": 6,
            "to": 9,
            "gater": null
        },
        {
            "weight": -0.07670681223350764,
            "from": 7,
            "to": 9,
            "gater": null
        }
    ],
    "input": 5,
    "output": 2,
    "dropout": 0
};

const networkManual = {
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
            "bias": -2.059629378094606,
            "type": "hidden",
            "squash": "LOGISTIC",
            "mask": 1,
            "index": "5"
        },
        {
            "bias": 0.9154974126209579,
            "type": "hidden",
            "squash": "LOGISTIC",
            "mask": 1,
            "index": "6"
        },
        {
            "bias": 1.6109649138342745,
            "type": "hidden",
            "squash": "LOGISTIC",
            "mask": 1,
            "index": "7"
        },
        {
            "bias": 3.378177356012038,
            "type": "output",
            "squash": "LOGISTIC",
            "mask": 1,
            "index": "8"
        },
        {
            "bias": -5.874218180346487,
            "type": "output",
            "squash": "LOGISTIC",
            "mask": 1,
            "index": "9"
        }
    ],
    "connections": [
        {
            "weight": 0.28375945400305785,
            "from": 0,
            "to": 5,
            "gater": null
        },
        {
            "weight": 4.590241696825217,
            "from": 1,
            "to": 5,
            "gater": null
        },
        {
            "weight": -1.2290367464136134,
            "from": 0,
            "to": 6,
            "gater": null
        },
        {
            "weight": 1.4182361741292029,
            "from": 2,
            "to": 5,
            "gater": null
        },
        {
            "weight": -3.599239006171308,
            "from": 1,
            "to": 6,
            "gater": null
        },
        {
            "weight": 1.4272228294135019,
            "from": 0,
            "to": 7,
            "gater": null
        },
        {
            "weight": -5.332400290134859,
            "from": 3,
            "to": 5,
            "gater": null
        },
        {
            "weight": 1.7019196027329273,
            "from": 2,
            "to": 6,
            "gater": null
        },
        {
            "weight": 1.5547848366573744,
            "from": 1,
            "to": 7,
            "gater": null
        },
        {
            "weight": 0.9119991392892098,
            "from": 4,
            "to": 5,
            "gater": null
        },
        {
            "weight": 2.3248876662398823,
            "from": 3,
            "to": 6,
            "gater": null
        },
        {
            "weight": 2.162226626832976,
            "from": 2,
            "to": 7,
            "gater": null
        },
        {
            "weight": 0.05175813562964904,
            "from": 4,
            "to": 6,
            "gater": null
        },
        {
            "weight": -5.075267356017781,
            "from": 3,
            "to": 7,
            "gater": null
        },
        {
            "weight": 1.2363968182115406,
            "from": 4,
            "to": 7,
            "gater": null
        },
        {
            "weight": -6.462804737805705,
            "from": 5,
            "to": 8,
            "gater": null
        },
        {
            "weight": 4.038415296276685,
            "from": 6,
            "to": 8,
            "gater": null
        },
        {
            "weight": 18.262997404284604,
            "from": 5,
            "to": 9,
            "gater": null
        },
        {
            "weight": -1.032502391335583,
            "from": 7,
            "to": 8,
            "gater": null
        },
        {
            "weight": -3.222208132249593,
            "from": 6,
            "to": 9,
            "gater": null
        },
        {
            "weight": 8.163834569218736,
            "from": 7,
            "to": 9,
            "gater": null
        }
    ],
    "input": 5,
    "output": 2,
    "dropout": 0
};

const netGood = {
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
            "bias": 0.02083250161781458,
            "type": "hidden",
            "squash": "SINUSOID",
            "mask": 1,
            "index": "5"
        },
        {
            "bias": -0.3157680117669458,
            "type": "hidden",
            "squash": "TANH",
            "mask": 1,
            "index": "6"
        },
        {
            "bias": -0.009505345248183292,
            "type": "hidden",
            "squash": "BIPOLAR",
            "mask": 1,
            "index": "7"
        },
        {
            "bias": -0.009505345248183292,
            "type": "hidden",
            "squash": "BIPOLAR",
            "mask": 1,
            "index": "8"
        },
        {
            "bias": 0.09533576432586874,
            "type": "hidden",
            "squash": "HARD_TANH",
            "mask": 1,
            "index": "9"
        },
        {
            "bias": 0.4140515064958069,
            "type": "output",
            "squash": "HARD_TANH",
            "mask": 1,
            "index": "10"
        },
        {
            "bias": 0.4140515064958069,
            "type": "output",
            "squash": "RELU",
            "mask": 1,
            "index": "11"
        }
    ],
    "connections": [
        {
            "weight": 0.06452978342603519,
            "from": 0,
            "to": 6,
            "gater": null
        },
        {
            "weight": -0.07536084412831548,
            "from": 1,
            "to": 6,
            "gater": null
        },
        {
            "weight": 0.06452978342603519,
            "from": 0,
            "to": 7,
            "gater": null
        },
        {
            "weight": 0.0689633085216396,
            "from": 2,
            "to": 6,
            "gater": null
        },
        {
            "weight": -0.03682140200139594,
            "from": 1,
            "to": 7,
            "gater": null
        },
        {
            "weight": -0.02707670900556046,
            "from": 4,
            "to": 5,
            "gater": null
        },
        {
            "weight": -0.012311475583630924,
            "from": 3,
            "to": 6,
            "gater": null
        },
        {
            "weight": 0.02168470953159987,
            "from": 2,
            "to": 7,
            "gater": null
        },
        {
            "weight": -0.09057215994544282,
            "from": 3,
            "to": 7,
            "gater": null
        },
        {
            "weight": -0.07820077502158199,
            "from": 4,
            "to": 7,
            "gater": null
        },
        {
            "weight": -0.088158190542821,
            "from": 4,
            "to": 8,
            "gater": null
        },
        {
            "weight": -0.051172263974578726,
            "from": 6,
            "to": 9,
            "gater": null
        },
        {
            "weight": 0.4345028600011245,
            "from": 7,
            "to": 11,
            "gater": null
        },
        {
            "weight": 0.4345028600011245,
            "from": 8,
            "to": 11,
            "gater": null
        },
        {
            "weight": -0.01948200536908487,
            "from": 0,
            "to": 8,
            "gater": null
        },
        {
            "weight": 0.09474355210534885,
            "from": 1,
            "to": 8,
            "gater": null
        },
        {
            "weight": 0.02168470953159987,
            "from": 2,
            "to": 8,
            "gater": null
        },
        {
            "weight": -0.09004350951063836,
            "from": 5,
            "to": 6,
            "gater": null
        },
        {
            "weight": -0.06849082987796393,
            "from": 3,
            "to": 8,
            "gater": null
        },
        {
            "weight": 0.09157368290779608,
            "from": 4,
            "to": 9,
            "gater": null
        },
        {
            "weight": -0.051172263974578726,
            "from": 6,
            "to": 10,
            "gater": null
        },
        {
            "weight": -0.03319790189999115,
            "from": 7,
            "to": 10,
            "gater": null
        },
        {
            "weight": -0.8165775649636617,
            "from": 8,
            "to": 10,
            "gater": null
        },
        {
            "weight": -0.09807606002682974,
            "from": 9,
            "to": 11,
            "gater": null
        }
    ],
    "input": 5,
    "output": 2,
    "dropout": 0
};

const hajzlRobutek = {
  nodes: [
    {
      bias: 0,
      type: 'input',
      squash: 'LOGISTIC',
      mask: 1,
      index: "0"
    },
    {
      bias: 0,
      type: 'input',
      squash: 'LOGISTIC',
      mask: 1,
      index: "1"
    },
    {
      bias: 0,
      type: 'input',
      squash: 'LOGISTIC',
      mask: 1,
      index: "2"
    },
    {
      bias: 0,
      type: 'input',
      squash: 'LOGISTIC',
      mask: 1,
      index: "3"
    },
    {
      bias: 0,
      type: 'input',
      squash: 'LOGISTIC',
      mask: 1,
      index: "4"
    },
    {
      bias: -0.08224770994705032,
      type: 'hidden',
      squash: 'LOGISTIC',
      mask: 1,
      index: "5"
    },
    {
      bias: -0.02103271093322108,
      type: 'hidden',
      squash: 'LOGISTIC',
      mask: 1,
      index: "6"
    },
    {
      bias: 0.07183862471889829,
      type: 'output',
      squash: 'BIPOLAR',
      mask: 1,
      index: "7"
    },
    {
      bias: 0.07183862471889829,
      type: 'output',
      squash: 'BIPOLAR',
      mask: 1,
      index: "8"
    }
  ],
  connections: [
    {
      weight: 0.02657135393007759,
      from: 0,
      to: 5,
      gater: null
    },
    {
      weight: -0.040633574509031024,
      from: 1,
      to: 5,
      gater: null
    },
    {
      weight: -0.058827909795596156,
      from: 0,
      to: 6,
      gater: null
    },
    {
      weight: -0.06956634506663005,
      from: 1,
      to: 6,
      gater: null
    },
    {
      weight: -0.03977465502777662,
      from: 2,
      to: 6,
      gater: null
    },
    {
      weight: 0.05892745755764098,
      from: 0,
      to: 8,
      gater: null
    },
    {
      weight: 0.00982249964792152,
      from: 3,
      to: 6,
      gater: null
    },
    {
      weight: -0.040633574509031024,
      from: 1,
      to: 8,
      gater: null
    },
    {
      weight: 0.06381110598635684,
      from: 4,
      to: 6,
      gater: null
    },
    {
      weight: -0.02569406051894023,
      from: 2,
      to: 8,
      gater: null
    },
    {
      weight: 0.0010296345829703402,
      from: 3,
      to: 8,
      gater: null
    },
    {
      weight: 0.08435397609152737,
      from: 4,
      to: 8,
      gater: null
    },
    {
      weight: -0.0436399540284091,
      from: 5,
      to: 8,
      gater: null
    },
    {
      weight: -0.0023981271634402612,
      from: 0,
      to: 7,
      gater: null
    },
    {
      weight: -0.08043534635624755,
      from: 1,
      to: 7,
      gater: null
    },
    {
      weight: 0.013326549135662932,
      from: 2,
      to: 7,
      gater: null
    },
    {
      weight: 0.00982249964792152,
      from: 3,
      to: 7,
      gater: null
    },
    {
      weight: 0.047217551804534796,
      from: 4,
      to: 7,
      gater: null
    },
    {
      weight: -0.017135595200934522,
      from: 5,
      to: 7,
      gater: null
    },
    {
      weight: 0.002098899849626218,
      from: 6,
      to: 8,
      gater: null
    }
  ],
  input: 5,
  output: 2,
  dropout: 0
};

const test = {
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
        "bias": -0.4066876236891267,
        "type": "output",
        "squash": "TANH",
        "mask": 1,
        "index": "5"
      },
      {
        "bias": 0.14419143360114148,
        "type": "output",
        "squash": "STEP",
        "mask": 1,
        "index": "6"
      }
    ],
    "connections": [
      {
        "weight": -0.0831865216198172,
        "from": 1,
        "to": 5,
        "gater": null
      },
      {
        "weight": 0.04569667566522023,
        "from": 0,
        "to": 6,
        "gater": null
      },
      {
        "weight": 0.6727858843124104,
        "from": 2,
        "to": 5,
        "gater": null
      },
      {
        "weight": -0.8942232608829722,
        "from": 2,
        "to": 6,
        "gater": null
      },
      {
        "weight": -0.018996805134391212,
        "from": 4,
        "to": 5,
        "gater": null
      },
      {
        "weight": 0.08592903804641919,
        "from": 3,
        "to": 6,
        "gater": null
      },
      {
        "weight": 0.0057878653905825556,
        "from": 4,
        "to": 6,
        "gater": null
      },
      {
        "weight": -0.07561755553782411,
        "from": 1,
        "to": 6,
        "gater": null
      }
    ],
    "input": 5,
    "output": 2,
    "dropout": 0
  };

const test2 = {nodes:[{bias:0,type:"input",squash:"LOGISTIC",mask:1,index:"0"},{bias:0,type:"input",squash:"LOGISTIC",mask:1,index:"1"},{bias:0,type:"input",squash:"LOGISTIC",mask:1,index:"2"},{bias:0,type:"input",squash:"LOGISTIC",mask:1,index:"3"},{bias:0,type:"input",squash:"LOGISTIC",mask:1,index:"4"},{bias:-0.07707297714553857,type:"hidden",squash:"BIPOLAR",mask:1,index:"5"},{bias:-0.07707297714553857,type:"hidden",squash:"BIPOLAR",mask:1,index:"6"},{bias:-0.07707297714553857,type:"hidden",squash:"BIPOLAR",mask:1,index:"7"},{bias:-0.07707297714553857,type:"hidden",squash:"BIPOLAR",mask:1,index:"8"},{bias:-0.012080466041298449,type:"hidden",squash:"BIPOLAR",mask:1,index:"9"},{bias:2.4731762814478913,type:"output",squash:"BENT_IDENTITY",mask:1,index:"10"},{bias:1.976734317385075,type:"output",squash:"BENT_IDENTITY",mask:1,index:"11"}],connections:[{weight:0.08397364598739637,from:0,to:5,gater:null},{weight:0.09066407213654304,from:1,to:5,gater:null},{weight:0.01930103919305033,from:2,to:5,gater:null},{weight:0.05780632052250631,from:0,to:7,gater:null},{weight:-0.07844354822440912,from:3,to:5,gater:null},{weight:-0.019900947242611405,from:4,to:5,gater:null},{weight:-0.661267539124996,from:3,to:6,gater:null},{weight:-0.028872816553204395,from:2,to:9,gater:null},{weight:-0.04379314690690986,from:0,to:11,gater:null},{weight:0.48719084199374063,from:5,to:7,gater:null},{weight:0.9904767782677382,from:1,to:11,gater:null},{weight:-0.02801865725425548,from:6,to:7,gater:null},{weight:0.0019121859142678943,from:3,to:11,gater:null},{weight:-0.0416462227353771,from:7,to:8,gater:null},{weight:2.2540746920311427,from:5,to:11,gater:null},{weight:0.8829783298817921,from:7,to:11,gater:null},{weight:-1.5719266979485844,from:8,to:11,gater:null},{weight:-0.10089289882037661,from:1,to:7,gater:null},{weight:0.02201574955176397,from:0,to:8,gater:null},{weight:0.09817470586325619,from:2,to:7,gater:null},{weight:-0.8338786912410133,from:0,to:10,gater:null},{weight:-0.019900947242611405,from:4,to:7,gater:null},{weight:0.0019121859142678943,from:3,to:8,gater:null},{weight:0.09066407213654304,from:1,to:10,gater:null},{weight:-0.028872816553204395,from:2,to:10,gater:null},{weight:-0.043095818651293,from:5,to:8,gater:null},{weight:0.08877599099027217,from:3,to:10,gater:null},{weight:-0.08710198105311134,from:4,to:10,gater:null},{weight:-0.8681068434960996,from:5,to:10,gater:null},{weight:-2.2109806263083036,from:7,to:10,gater:null},{weight:-1.2802111795139142,from:9,to:11,gater:null}],input:5,output:2,dropout:0};

const supaFast = {
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
      "bias": 0.34912365963405095,
      "type": "output",
      "squash": "BIPOLAR",
      "mask": 1,
      "index": "5"
    },
    {
      "bias": 0.34912365963405095,
      "type": "output",
      "squash": "STEP",
      "mask": 1,
      "index": "6"
    }
  ],
  "connections": [
    {
      "weight": -0.031564245509178065,
      "from": 0,
      "to": 5,
      "gater": null
    },
    {
      "weight": -0.017115798200444926,
      "from": 1,
      "to": 5,
      "gater": null
    },
    {
      "weight": 0.08759619858464274,
      "from": 0,
      "to": 6,
      "gater": null
    },
    {
      "weight": -0.7223696453135893,
      "from": 2,
      "to": 5,
      "gater": null
    },
    {
      "weight": 0.21530778963915634,
      "from": 1,
      "to": 6,
      "gater": null
    },
    {
      "weight": -0.036605362813484546,
      "from": 2,
      "to": 6,
      "gater": null
    },
    {
      "weight": -0.45686293909657993,
      "from": 3,
      "to": 6,
      "gater": null
    },
    {
      "weight": 0.03137155811684092,
      "from": 4,
      "to": 6,
      "gater": null
    },
    {
      "weight": 0.40683157689746685,
      "from": 3,
      "to": 5,
      "gater": null
    },
    {
      "weight": 1.1014010342102447,
      "from": 4,
      "to": 5,
      "gater": null
    }
  ],
  "input": 5,
  "output": 2,
  "dropout": 0
};

const pureSigmoid = {"nodes":[{"bias":0,"type":"input","squash":"LOGISTIC","mask":1,"index":"0"},{"bias":0,"type":"input","squash":"LOGISTIC","mask":1,"index":"1"},{"bias":0,"type":"input","squash":"LOGISTIC","mask":1,"index":"2"},{"bias":0,"type":"input","squash":"LOGISTIC","mask":1,"index":"3"},{"bias":0,"type":"input","squash":"LOGISTIC","mask":1,"index":"4"},{"bias":7.054036160412597,"type":"hidden","squash":"LOGISTIC","mask":1,"index":"5"},{"bias":-0.587732676217362,"type":"hidden","squash":"LOGISTIC","mask":1,"index":"6"},{"bias":-0.34726654828193837,"type":"hidden","squash":"LOGISTIC","mask":1,"index":"7"},{"bias":-0.05806576016952658,"type":"output","squash":"LOGISTIC","mask":1,"index":"8"},{"bias":-0.34513642876851114,"type":"output","squash":"LOGISTIC","mask":1,"index":"9"}],"connections":[{"weight":-0.45284241974587625,"from":0,"to":5,"gater":null},{"weight":-0.49874796389910603,"from":1,"to":5,"gater":null},{"weight":-1.6672900838467473,"from":0,"to":6,"gater":null},{"weight":1.0955692703293487,"from":2,"to":5,"gater":null},{"weight":3.6459534057547316,"from":1,"to":6,"gater":null},{"weight":-1.161236319368146,"from":0,"to":7,"gater":null},{"weight":-0.6600485256133387,"from":3,"to":5,"gater":null},{"weight":-0.24061549146323702,"from":2,"to":6,"gater":null},{"weight":4.030063826959149,"from":1,"to":7,"gater":null},{"weight":-1.1945287214525981,"from":4,"to":5,"gater":null},{"weight":0.7319271312695278,"from":3,"to":6,"gater":null},{"weight":-0.7913046879660708,"from":2,"to":7,"gater":null},{"weight":1.1379861907375817,"from":4,"to":6,"gater":null},{"weight":3.969086905098827,"from":3,"to":7,"gater":null},{"weight":1.451952458196848,"from":4,"to":7,"gater":null},{"weight":0.07226017260710191,"from":5,"to":8,"gater":null},{"weight":0.04409240174858442,"from":6,"to":8,"gater":null},{"weight":0.028229497347672744,"from":5,"to":9,"gater":null},{"weight":-0.08852206566773001,"from":7,"to":8,"gater":null},{"weight":0.9030455704191598,"from":6,"to":9,"gater":null},{"weight":1.4464624540601325,"from":7,"to":9,"gater":null}],"input":5,"output":2,"dropout":0};

const firstTanhAttempt = {"nodes":[{"bias":0,"type":"input","squash":"LOGISTIC","mask":1,"index":"0"},{"bias":0,"type":"input","squash":"LOGISTIC","mask":1,"index":"1"},{"bias":0,"type":"input","squash":"LOGISTIC","mask":1,"index":"2"},{"bias":0,"type":"input","squash":"LOGISTIC","mask":1,"index":"3"},{"bias":0,"type":"input","squash":"LOGISTIC","mask":1,"index":"4"},{"bias":0.05233629017298283,"type":"hidden","squash":"BIPOLAR","mask":1,"index":"5"},{"bias":0.5309708595338373,"type":"hidden","squash":"STEP","mask":1,"index":"6"},{"bias":-0.14809852548728614,"type":"hidden","squash":"BENT_IDENTITY","mask":1,"index":"7"},{"bias":-0.059512324647033266,"type":"hidden","squash":"BIPOLAR","mask":1,"index":"8"},{"bias":-0.09202109715695062,"type":"hidden","squash":"BIPOLAR","mask":1,"index":"9"},{"bias":0.03327368435902489,"type":"output","squash":"TANH","mask":1,"index":"10"},{"bias":0.8704867626365376,"type":"output","squash":"TANH","mask":1,"index":"11"}],"connections":[{"weight":0.056584521940690274,"from":0,"to":5,"gater":null},{"weight":0.02931689370867288,"from":1,"to":5,"gater":null},{"weight":0.30966743123958096,"from":2,"to":5,"gater":null},{"weight":-0.051457647711632415,"from":0,"to":7,"gater":null},{"weight":-0.050866391134769144,"from":3,"to":5,"gater":null},{"weight":-0.03055718816368201,"from":4,"to":5,"gater":null},{"weight":-0.09539049137004052,"from":2,"to":7,"gater":null},{"weight":-0.4705548172699682,"from":4,"to":6,"gater":null},{"weight":1.7344659580490598,"from":3,"to":7,"gater":null},{"weight":-0.07982832425997716,"from":5,"to":6,"gater":null},{"weight":-0.051642172435936745,"from":4,"to":7,"gater":null},{"weight":-0.9171171398062079,"from":4,"to":8,"gater":null},{"weight":0.42665389610350324,"from":1,"to":11,"gater":null},{"weight":0.042929383676971467,"from":6,"to":7,"gater":null},{"weight":0.0681325060825253,"from":4,"to":9,"gater":null},{"weight":1.5258643102960794,"from":2,"to":11,"gater":null},{"weight":0.06833981438278941,"from":5,"to":9,"gater":null},{"weight":-1.0804221152561995,"from":3,"to":11,"gater":null},{"weight":0.016811285578258284,"from":5,"to":10,"gater":null},{"weight":-0.04658328852648972,"from":4,"to":11,"gater":null},{"weight":0.016811285578258284,"from":5,"to":11,"gater":null},{"weight":-0.09574000263012775,"from":7,"to":11,"gater":null},{"weight":0.06614415439081908,"from":8,"to":11,"gater":null},{"weight":-0.051457647711632415,"from":0,"to":10,"gater":null},{"weight":-0.34632433739351887,"from":1,"to":10,"gater":null},{"weight":0.09927113262938067,"from":2,"to":10,"gater":null},{"weight":1.8020410660761228,"from":3,"to":10,"gater":null},{"weight":0.3022935410936516,"from":7,"to":10,"gater":null},{"weight":-0.06666416863114649,"from":8,"to":10,"gater":null},{"weight":-0.06903275715839592,"from":9,"to":10,"gater":null}],"input":5,"output":2,"dropout":0}

const secondTanhAttempt = {"nodes":[{"bias":0,"type":"input","squash":"LOGISTIC","mask":1,"index":"0"},{"bias":0,"type":"input","squash":"LOGISTIC","mask":1,"index":"1"},{"bias":0,"type":"input","squash":"LOGISTIC","mask":1,"index":"2"},{"bias":0,"type":"input","squash":"LOGISTIC","mask":1,"index":"3"},{"bias":0,"type":"input","squash":"LOGISTIC","mask":1,"index":"4"},{"bias":-0.004705180583845392,"type":"hidden","squash":"STEP","mask":1,"index":"5"},{"bias":1.5894360089925321,"type":"hidden","squash":"GAUSSIAN","mask":1,"index":"6"},{"bias":-0.8905069207419525,"type":"hidden","squash":"SOFTSIGN","mask":1,"index":"7"},{"bias":-0.14809852548728614,"type":"hidden","squash":"BENT_IDENTITY","mask":1,"index":"8"},{"bias":-0.2776597800107243,"type":"hidden","squash":"ABSOLUTE","mask":1,"index":"9"},{"bias":-0.2776597800107243,"type":"hidden","squash":"BENT_IDENTITY","mask":1,"index":"10"},{"bias":-0.2776597800107243,"type":"hidden","squash":"BENT_IDENTITY","mask":1,"index":"11"},{"bias":-1.246305299833367,"type":"hidden","squash":"TANH","mask":1,"index":"12"},{"bias":-0.14809852548728614,"type":"hidden","squash":"IDENTITY","mask":1,"index":"13"},{"bias":-0.14809852548728614,"type":"hidden","squash":"IDENTITY","mask":1,"index":"14"},{"bias":-1.246305299833367,"type":"hidden","squash":"TANH","mask":1,"index":"15"},{"bias":-0.14809852548728614,"type":"hidden","squash":"IDENTITY","mask":1,"index":"16"},{"bias":0.8704867626365376,"type":"output","squash":"TANH","mask":1,"index":"17"},{"bias":0.8704867626365376,"type":"output","squash":"TANH","mask":1,"index":"18"}],"connections":[{"weight":-0.7525231709597512,"from":0,"to":5,"gater":null},{"weight":-0.34809081756368304,"from":1,"to":5,"gater":null},{"weight":0.30966743123958096,"from":2,"to":5,"gater":null},{"weight":0.013394093179173311,"from":0,"to":7,"gater":null},{"weight":-0.339460645259672,"from":2,"to":6,"gater":null},{"weight":0.5591663762703004,"from":3,"to":6,"gater":null},{"weight":-0.03284832641488644,"from":0,"to":9,"gater":null},{"weight":0.06832100876132494,"from":4,"to":6,"gater":null},{"weight":0.5431731998068561,"from":2,"to":8,"gater":null},{"weight":-1.4151743113220272,"from":5,"to":6,"gater":null},{"weight":2.917035188763045,"from":3,"to":8,"gater":null},{"weight":0.5431731998068561,"from":2,"to":9,"gater":null},{"weight":-0.7783358757236691,"from":4,"to":8,"gater":null},{"weight":0.8001469643669685,"from":5,"to":8,"gater":null},{"weight":1.8020410660761228,"from":3,"to":10,"gater":null},{"weight":-1.222505225696216,"from":1,"to":12,"gater":null},{"weight":0.0021845784542348784,"from":0,"to":13,"gater":null},{"weight":0.05731048238520439,"from":6,"to":8,"gater":null},{"weight":0.09600107641197644,"from":4,"to":10,"gater":null},{"weight":-0.09007254718480723,"from":7,"to":8,"gater":null},{"weight":-0.00980146398036763,"from":7,"to":9,"gater":null},{"weight":0.07635410512276022,"from":0,"to":16,"gater":null},{"weight":-1.222505225696216,"from":1,"to":17,"gater":null},{"weight":0.07635410512276022,"from":0,"to":18,"gater":null},{"weight":0.035371755869264554,"from":9,"to":10,"gater":null},{"weight":1.8020410660761228,"from":3,"to":16,"gater":null},{"weight":0.09927113262938067,"from":2,"to":17,"gater":null},{"weight":1.3486591868422444,"from":1,"to":18,"gater":null},{"weight":-0.01556470846001598,"from":6,"to":14,"gater":null},{"weight":1.8020410660761228,"from":3,"to":17,"gater":null},{"weight":1.772593418508781,"from":2,"to":18,"gater":null},{"weight":0.8841489770732857,"from":10,"to":11,"gater":null},{"weight":-2.413857979659717,"from":3,"to":18,"gater":null},{"weight":0.032262145051029645,"from":6,"to":16,"gater":null},{"weight":0.9655160318053012,"from":5,"to":17,"gater":null},{"weight":0.06105883883524968,"from":4,"to":18,"gater":null},{"weight":0.8841489770732857,"from":11,"to":12,"gater":null},{"weight":-0.022238521155059088,"from":7,"to":16,"gater":null},{"weight":0.4355272951964724,"from":8,"to":17,"gater":null},{"weight":-0.0905771659441998,"from":13,"to":15,"gater":null},{"weight":-0.07328778386416307,"from":12,"to":16,"gater":null},{"weight":-0.09657493027307856,"from":10,"to":18,"gater":null},{"weight":-0.0905771659441998,"from":14,"to":16,"gater":null},{"weight":-0.09657493027307856,"from":12,"to":18,"gater":null},{"weight":-0.062423321275253324,"from":15,"to":16,"gater":null},{"weight":-0.09657493027307856,"from":16,"to":18,"gater":null}],"input":5,"output":2,"dropout":0};

const thirdTanhAttempt = {"nodes":[{"bias":0,"type":"input","squash":"LOGISTIC","mask":1,"index":"0"},{"bias":0,"type":"input","squash":"LOGISTIC","mask":1,"index":"1"},{"bias":0,"type":"input","squash":"LOGISTIC","mask":1,"index":"2"},{"bias":0,"type":"input","squash":"LOGISTIC","mask":1,"index":"3"},{"bias":0,"type":"input","squash":"LOGISTIC","mask":1,"index":"4"},{"bias":-0.004705180583845392,"type":"hidden","squash":"STEP","mask":1,"index":"5"},{"bias":-0.551334911354675,"type":"hidden","squash":"SOFTSIGN","mask":1,"index":"6"},{"bias":0.3450271940083826,"type":"hidden","squash":"SOFTSIGN","mask":1,"index":"7"},{"bias":1.214404089155844,"type":"hidden","squash":"LOGISTIC","mask":1,"index":"8"},{"bias":-0.14809852548728614,"type":"hidden","squash":"SINUSOID","mask":1,"index":"9"},{"bias":-0.6501671671991204,"type":"hidden","squash":"BIPOLAR","mask":1,"index":"10"},{"bias":-0.2776597800107243,"type":"hidden","squash":"BENT_IDENTITY","mask":1,"index":"11"},{"bias":-0.2776597800107243,"type":"hidden","squash":"BENT_IDENTITY","mask":1,"index":"12"},{"bias":-0.2776597800107243,"type":"hidden","squash":"BENT_IDENTITY","mask":1,"index":"13"},{"bias":-1.246305299833367,"type":"hidden","squash":"IDENTITY","mask":1,"index":"14"},{"bias":-0.28946482444731103,"type":"hidden","squash":"IDENTITY","mask":1,"index":"15"},{"bias":-0.09730124078929672,"type":"hidden","squash":"BIPOLAR_SIGMOID","mask":1,"index":"16"},{"bias":-1.73095345163745,"type":"hidden","squash":"GAUSSIAN","mask":1,"index":"17"},{"bias":-1.73095345163745,"type":"hidden","squash":"GAUSSIAN","mask":1,"index":"18"},{"bias":-1.0450232112892777,"type":"hidden","squash":"STEP","mask":1,"index":"19"},{"bias":-1.246305299833367,"type":"hidden","squash":"TANH","mask":1,"index":"20"},{"bias":-1.246305299833367,"type":"hidden","squash":"TANH","mask":1,"index":"21"},{"bias":0.3094088965027435,"type":"hidden","squash":"BIPOLAR","mask":1,"index":"22"},{"bias":0.0677247416151543,"type":"hidden","squash":"BENT_IDENTITY","mask":1,"index":"23"},{"bias":0.8704867626365376,"type":"output","squash":"TANH","mask":1,"index":"24"},{"bias":0.8704867626365376,"type":"output","squash":"TANH","mask":1,"index":"25"}],"connections":[{"weight":-0.7525231709597512,"from":0,"to":5,"gater":null},{"weight":-0.34809081756368304,"from":1,"to":5,"gater":null},{"weight":0.30966743123958096,"from":2,"to":5,"gater":null},{"weight":0.056899757919508576,"from":3,"to":5,"gater":null},{"weight":0.087518176563644,"from":2,"to":6,"gater":null},{"weight":-0.06010858485696655,"from":5,"to":6,"gater":null},{"weight":-0.014072932084921955,"from":4,"to":7,"gater":null},{"weight":0.7056708998187976,"from":5,"to":7,"gater":null},{"weight":-0.06822415373337716,"from":2,"to":10,"gater":null},{"weight":2.0393371366516138,"from":3,"to":10,"gater":null},{"weight":-0.06822415373337716,"from":2,"to":11,"gater":null},{"weight":-0.23900773972329703,"from":4,"to":10,"gater":null},{"weight":-0.09516397958700336,"from":7,"to":8,"gater":null},{"weight":1.6953191198779474,"from":5,"to":10,"gater":null},{"weight":0.0021845784542348784,"from":0,"to":15,"gater":null},{"weight":-0.08834681294970462,"from":7,"to":9,"gater":null},{"weight":-0.025048402647900855,"from":6,"to":10,"gater":null},{"weight":-0.020879260277781905,"from":4,"to":12,"gater":null},{"weight":2.7205310941117746,"from":3,"to":13,"gater":null},{"weight":0.05731048238520439,"from":8,"to":10,"gater":null},{"weight":-0.09007254718480723,"from":9,"to":10,"gater":null},{"weight":0.05731048238520439,"from":9,"to":11,"gater":null},{"weight":-0.008115205743700532,"from":2,"to":19,"gater":null},{"weight":-1.222505225696216,"from":1,"to":20,"gater":null},{"weight":0.036189056809349335,"from":6,"to":16,"gater":null},{"weight":0.04109201179949262,"from":5,"to":17,"gater":null},{"weight":0.035371755869264554,"from":11,"to":13,"gater":null},{"weight":0.07684804113896623,"from":12,"to":13,"gater":null},{"weight":0.03251582302788392,"from":8,"to":17,"gater":null},{"weight":0.04276851656884259,"from":7,"to":19,"gater":null},{"weight":-0.016554329616053076,"from":4,"to":21,"gater":null},{"weight":-1.222505225696216,"from":1,"to":24,"gater":null},{"weight":0.08311612042616764,"from":0,"to":25,"gater":null},{"weight":0.8841489770732857,"from":13,"to":14,"gater":null},{"weight":0.8156421256923001,"from":2,"to":24,"gater":null},{"weight":1.3486591868422444,"from":1,"to":25,"gater":null},{"weight":0.032262145051029645,"from":9,"to":19,"gater":null},{"weight":1.8020410660761228,"from":3,"to":24,"gater":null},{"weight":2.7264479232168433,"from":2,"to":25,"gater":null},{"weight":-2.413857979659717,"from":3,"to":25,"gater":null},{"weight":-0.07328778386416307,"from":12,"to":18,"gater":null},{"weight":1.9323913980077836,"from":5,"to":24,"gater":null},{"weight":-0.01186257993182549,"from":6,"to":24,"gater":null},{"weight":-0.012194001585060787,"from":16,"to":17,"gater":null},{"weight":-0.15335122925237102,"from":15,"to":18,"gater":null},{"weight":0.06463862235452664,"from":14,"to":19,"gater":null},{"weight":0.4355272951964724,"from":10,"to":24,"gater":null},{"weight":-0.0905771659441998,"from":17,"to":20,"gater":null},{"weight":-0.7542930994817514,"from":13,"to":25,"gater":null},{"weight":-0.09657493027307856,"from":14,"to":25,"gater":null},{"weight":-0.022930173224419897,"from":22,"to":23,"gater":null},{"weight":-0.09657493027307856,"from":21,"to":25,"gater":null},{"weight":-0.03717895969659084,"from":23,"to":25,"gater":null},{"weight":-0.019688394397232495,"from":3,"to":17,"gater":null},{"weight":-0.00650304985170691,"from":7,"to":22,"gater":null},{"weight":-0.0676013822451674,"from":3,"to":22,"gater":null},{"weight":0.02407063900656041,"from":20,"to":22,"gater":null},{"weight":-0.03287930195397308,"from":19,"to":22,"gater":null},{"weight":-0.05646969077553857,"from":18,"to":22,"gater":null},{"weight":-0.0592600774467861,"from":17,"to":22,"gater":null},{"weight":-0.039585967373807485,"from":14,"to":22,"gater":null},{"weight":0.06330155797176334,"from":8,"to":22,"gater":null},{"weight":0.06310573354005486,"from":6,"to":22,"gater":null},{"weight":0.09765429489465402,"from":5,"to":22,"gater":null},{"weight":0.07630029514245681,"from":0,"to":22,"gater":null}],"input":5,"output":2,"dropout":0}

const trainedOnMffuk = {"nodes":[{"bias":0,"type":"input","squash":"LOGISTIC","mask":1,"index":"0"},{"bias":0,"type":"input","squash":"LOGISTIC","mask":1,"index":"1"},{"bias":0,"type":"input","squash":"LOGISTIC","mask":1,"index":"2"},{"bias":0,"type":"input","squash":"LOGISTIC","mask":1,"index":"3"},{"bias":0,"type":"input","squash":"LOGISTIC","mask":1,"index":"4"},{"bias":0.6384796303875812,"type":"hidden","squash":"SINUSOID","mask":1,"index":"5"},{"bias":-0.09694721817199162,"type":"hidden","squash":"TANH","mask":1,"index":"6"},{"bias":-0.09694721817199162,"type":"hidden","squash":"TANH","mask":1,"index":"7"},{"bias":-1.0811681758552054,"type":"hidden","squash":"BENT_IDENTITY","mask":1,"index":"8"},{"bias":0.05068755272745906,"type":"hidden","squash":"BIPOLAR","mask":1,"index":"9"},{"bias":1.194375949478835,"type":"hidden","squash":"IDENTITY","mask":1,"index":"10"},{"bias":1.194375949478835,"type":"hidden","squash":"IDENTITY","mask":1,"index":"11"},{"bias":1.8122615955523278,"type":"hidden","squash":"IDENTITY","mask":1,"index":"12"},{"bias":0.002732505383349834,"type":"hidden","squash":"BIPOLAR","mask":1,"index":"13"},{"bias":0.002732505383349834,"type":"hidden","squash":"BIPOLAR","mask":1,"index":"14"},{"bias":-1.3483429530547437,"type":"hidden","squash":"BIPOLAR","mask":1,"index":"15"},{"bias":-1.3483429530547437,"type":"hidden","squash":"BIPOLAR_SIGMOID","mask":1,"index":"16"},{"bias":0.09278631393551415,"type":"hidden","squash":"BIPOLAR","mask":1,"index":"17"},{"bias":0.5687794738875839,"type":"hidden","squash":"STEP","mask":1,"index":"18"},{"bias":0.09278631393551415,"type":"hidden","squash":"STEP","mask":1,"index":"19"},{"bias":0.09278631393551415,"type":"hidden","squash":"STEP","mask":1,"index":"20"},{"bias":0.09278631393551415,"type":"hidden","squash":"STEP","mask":1,"index":"21"},{"bias":0.09278631393551415,"type":"hidden","squash":"STEP","mask":1,"index":"22"},{"bias":0.029445428422882836,"type":"hidden","squash":"ABSOLUTE","mask":1,"index":"23"},{"bias":0.029445428422882836,"type":"hidden","squash":"ABSOLUTE","mask":1,"index":"24"},{"bias":0.029445428422882836,"type":"hidden","squash":"BIPOLAR_SIGMOID","mask":1,"index":"25"},{"bias":0.015026371812220995,"type":"hidden","squash":"IDENTITY","mask":1,"index":"26"},{"bias":0.015026371812220995,"type":"hidden","squash":"IDENTITY","mask":1,"index":"27"},{"bias":1.2088114319714691,"type":"output","squash":"TANH","mask":1,"index":"28"},{"bias":1.2088114319714691,"type":"output","squash":"TANH","mask":1,"index":"29"}],"connections":[{"weight":-0.07600039354047855,"from":1,"to":6,"gater":null},{"weight":0.06809336926947604,"from":3,"to":5,"gater":null},{"weight":-0.0997418669708044,"from":1,"to":7,"gater":null},{"weight":0.01482114550052857,"from":1,"to":9,"gater":null},{"weight":0.046672230006035986,"from":0,"to":10,"gater":null},{"weight":0.0862113232522313,"from":5,"to":6,"gater":null},{"weight":-0.07947477070947206,"from":0,"to":13,"gater":null},{"weight":-0.5666554017488574,"from":6,"to":8,"gater":null},{"weight":-0.05755028293004619,"from":3,"to":11,"gater":null},{"weight":0.015159179874719222,"from":2,"to":12,"gater":null},{"weight":0.2693858316283292,"from":1,"to":13,"gater":null},{"weight":-0.06257220463231922,"from":7,"to":8,"gater":null},{"weight":-0.0958037861856818,"from":6,"to":9,"gater":null},{"weight":-0.09683266205382131,"from":5,"to":10,"gater":null},{"weight":-0.06905844594361632,"from":7,"to":9,"gater":null},{"weight":-0.22212745924982089,"from":2,"to":14,"gater":null},{"weight":0.07729441668470942,"from":3,"to":14,"gater":null},{"weight":0.022314556119865214,"from":1,"to":16,"gater":null},{"weight":0.436185040380593,"from":8,"to":10,"gater":null},{"weight":0.7260144583507174,"from":4,"to":14,"gater":null},{"weight":0.07880438290670652,"from":9,"to":10,"gater":null},{"weight":-0.09844163757080407,"from":0,"to":19,"gater":null},{"weight":0.06672559874018585,"from":6,"to":16,"gater":null},{"weight":-0.4531616616664593,"from":9,"to":14,"gater":null},{"weight":0.04206877669580855,"from":11,"to":13,"gater":null},{"weight":0.046818509200052094,"from":4,"to":20,"gater":null},{"weight":-0.04462213282741634,"from":12,"to":13,"gater":null},{"weight":0.08823269625239835,"from":9,"to":17,"gater":null},{"weight":-0.020492148393000023,"from":13,"to":15,"gater":null},{"weight":-0.96731072071792,"from":0,"to":29,"gater":null},{"weight":1.229070828306236,"from":1,"to":29,"gater":null},{"weight":-0.006866903395731677,"from":15,"to":16,"gater":null},{"weight":-0.03288241296122196,"from":11,"to":20,"gater":null},{"weight":0.5934466763157963,"from":2,"to":29,"gater":null},{"weight":-0.0052373106259899355,"from":13,"to":19,"gater":null},{"weight":-0.006866903395731677,"from":17,"to":18,"gater":null},{"weight":-0.7265544536202624,"from":6,"to":29,"gater":null},{"weight":0.024744947761595304,"from":10,"to":29,"gater":null},{"weight":0.06979184711878483,"from":18,"to":22,"gater":null},{"weight":-0.04619579562083445,"from":20,"to":21,"gater":null},{"weight":-0.21130248609508517,"from":19,"to":29,"gater":null},{"weight":-0.21130248609508517,"from":21,"to":29,"gater":null},{"weight":0.07482927921728888,"from":23,"to":29,"gater":null},{"weight":-0.4984468535047105,"from":26,"to":29,"gater":null},{"weight":0.0988542468881417,"from":0,"to":25,"gater":null},{"weight":2.5602739146243003,"from":3,"to":26,"gater":null},{"weight":-0.4346224643523296,"from":1,"to":28,"gater":null},{"weight":0.05822205696393312,"from":4,"to":28,"gater":null},{"weight":-0.09697210370324623,"from":6,"to":27,"gater":null},{"weight":-0.06502838609462672,"from":13,"to":23,"gater":null},{"weight":-0.06238642437113349,"from":14,"to":24,"gater":null},{"weight":0.024744947761595304,"from":10,"to":28,"gater":null},{"weight":-0.9306523842607748,"from":13,"to":28,"gater":null},{"weight":-0.06502838609462672,"from":15,"to":28,"gater":null},{"weight":0.06818452530196187,"from":21,"to":23,"gater":null},{"weight":-0.05406730555368218,"from":16,"to":28,"gater":null},{"weight":0.07482927921728888,"from":22,"to":28,"gater":null},{"weight":-0.06775036081942631,"from":24,"to":28,"gater":null},{"weight":-0.06088275835462174,"from":25,"to":28,"gater":null},{"weight":-0.6838013583445649,"from":27,"to":28,"gater":null}],"input":5,"output":2,"dropout":0};

const largeNetPenalty = {"nodes":[{"bias":0,"type":"input","squash":"LOGISTIC","mask":1,"index":"0"},{"bias":0,"type":"input","squash":"LOGISTIC","mask":1,"index":"1"},{"bias":0,"type":"input","squash":"LOGISTIC","mask":1,"index":"2"},{"bias":0,"type":"input","squash":"LOGISTIC","mask":1,"index":"3"},{"bias":0,"type":"input","squash":"LOGISTIC","mask":1,"index":"4"},{"bias":1.2464996920309126,"type":"output","squash":"TANH","mask":1,"index":"5"},{"bias":1.2464996920309126,"type":"output","squash":"TANH","mask":1,"index":"6"}],"connections":[{"weight":0.016161743428526346,"from":0,"to":5,"gater":null},{"weight":-2.368898157527748,"from":1,"to":5,"gater":null},{"weight":0.8024266320474045,"from":0,"to":6,"gater":null},{"weight":3.6914393246103674,"from":1,"to":6,"gater":null},{"weight":4.386362855926073,"from":3,"to":5,"gater":null},{"weight":-0.012498936429392815,"from":2,"to":6,"gater":null},{"weight":-0.982748722241105,"from":4,"to":5,"gater":null},{"weight":4.386362855926073,"from":3,"to":6,"gater":null},{"weight":-0.982748722241105,"from":4,"to":6,"gater":null},{"weight":0.0949001019060848,"from":2,"to":5,"gater":null}],"input":5,"output":2,"dropout":0};

module.exports = { networkManual, networkMaxLeft, netGood, hajzlRobutek, test, test2, supaFast, pureSigmoid, firstTanhAttempt, secondTanhAttempt, trainedOnMffuk, thirdTanhAttempt, largeNetPenalty};