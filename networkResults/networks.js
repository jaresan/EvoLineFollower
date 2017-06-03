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

module.exports = { networkManual, networkMaxLeft, netGood, hajzlRobutek, test, test2, supaFast};