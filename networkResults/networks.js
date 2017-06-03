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

const test3 = {
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
      "bias": 0.06598249514971669,
      "type": "hidden",
      "squash": "BIPOLAR_SIGMOID",
      "mask": 1,
      "index": "5"
    },
    {
      "bias": -0.04985604125688825,
      "type": "hidden",
      "squash": "IDENTITY",
      "mask": 1,
      "index": "6"
    },
    {
      "bias": -0.04985604125688825,
      "type": "hidden",
      "squash": "RELU",
      "mask": 1,
      "index": "7"
    },
    {
      "bias": 0.0784665984941253,
      "type": "hidden",
      "squash": "BIPOLAR",
      "mask": 1,
      "index": "8"
    },
    {
      "bias": 0.019905786348336243,
      "type": "hidden",
      "squash": "IDENTITY",
      "mask": 1,
      "index": "9"
    },
    {
      "bias": 0.019905786348336243,
      "type": "hidden",
      "squash": "IDENTITY",
      "mask": 1,
      "index": "10"
    },
    {
      "bias": 0.20452887833254327,
      "type": "hidden",
      "squash": "SOFTSIGN",
      "mask": 1,
      "index": "11"
    },
    {
      "bias": 0.20452887833254327,
      "type": "hidden",
      "squash": "SOFTSIGN",
      "mask": 1,
      "index": "12"
    },
    {
      "bias": -0.12247524386696944,
      "type": "hidden",
      "squash": "ABSOLUTE",
      "mask": 1,
      "index": "13"
    },
    {
      "bias": -0.9531091169872671,
      "type": "hidden",
      "squash": "GAUSSIAN",
      "mask": 1,
      "index": "14"
    },
    {
      "bias": -0.05498261508391709,
      "type": "hidden",
      "squash": "STEP",
      "mask": 1,
      "index": "15"
    },
    {
      "bias": 0.09930768749198299,
      "type": "hidden",
      "squash": "BENT_IDENTITY",
      "mask": 1,
      "index": "16"
    },
    {
      "bias": 0.09930768749198299,
      "type": "hidden",
      "squash": "HARD_TANH",
      "mask": 1,
      "index": "17"
    },
    {
      "bias": 0.0065161067690149704,
      "type": "hidden",
      "squash": "TANH",
      "mask": 1,
      "index": "18"
    },
    {
      "bias": 0.546158915322428,
      "type": "hidden",
      "squash": "ABSOLUTE",
      "mask": 1,
      "index": "19"
    },
    {
      "bias": 0.014859057842380174,
      "type": "hidden",
      "squash": "IDENTITY",
      "mask": 1,
      "index": "20"
    },
    {
      "bias": 0.055038732410135044,
      "type": "hidden",
      "squash": "BENT_IDENTITY",
      "mask": 1,
      "index": "21"
    },
    {
      "bias": -0.05180449546640453,
      "type": "hidden",
      "squash": "TANH",
      "mask": 1,
      "index": "22"
    },
    {
      "bias": -1.3427527623562268,
      "type": "hidden",
      "squash": "GAUSSIAN",
      "mask": 1,
      "index": "23"
    },
    {
      "bias": -1.3427527623562268,
      "type": "hidden",
      "squash": "TANH",
      "mask": 1,
      "index": "24"
    },
    {
      "bias": -0.07049831734696377,
      "type": "hidden",
      "squash": "ABSOLUTE",
      "mask": 1,
      "index": "25"
    },
    {
      "bias": 0.016528553999084705,
      "type": "hidden",
      "squash": "SINUSOID",
      "mask": 1,
      "index": "26"
    },
    {
      "bias": 0.016528553999084705,
      "type": "hidden",
      "squash": "ABSOLUTE",
      "mask": 1,
      "index": "27"
    },
    {
      "bias": 0.016528553999084705,
      "type": "hidden",
      "squash": "ABSOLUTE",
      "mask": 1,
      "index": "28"
    },
    {
      "bias": -0.24857184519693587,
      "type": "hidden",
      "squash": "SINUSOID",
      "mask": 1,
      "index": "29"
    },
    {
      "bias": 0.016528553999084705,
      "type": "hidden",
      "squash": "ABSOLUTE",
      "mask": 1,
      "index": "30"
    },
    {
      "bias": 0.016528553999084705,
      "type": "hidden",
      "squash": "ABSOLUTE",
      "mask": 1,
      "index": "31"
    },
    {
      "bias": -0.7182874415229092,
      "type": "hidden",
      "squash": "ABSOLUTE",
      "mask": 1,
      "index": "32"
    },
    {
      "bias": 0.016528553999084705,
      "type": "hidden",
      "squash": "ABSOLUTE",
      "mask": 1,
      "index": "33"
    },
    {
      "bias": 0.008426680707330325,
      "type": "output",
      "squash": "STEP",
      "mask": 1,
      "index": "34"
    },
    {
      "bias": 0.008426680707330325,
      "type": "output",
      "squash": "STEP",
      "mask": 1,
      "index": "35"
    }
  ],
  "connections": [
    {
      "weight": 0.9960942376982066,
      "from": 0,
      "to": 5,
      "gater": null
    },
    {
      "weight": 0.03776301848293723,
      "from": 1,
      "to": 5,
      "gater": null
    },
    {
      "weight": 0.09332644856445951,
      "from": 0,
      "to": 6,
      "gater": null
    },
    {
      "weight": -0.0621355575140544,
      "from": 2,
      "to": 5,
      "gater": null
    },
    {
      "weight": -0.09610870710380014,
      "from": 1,
      "to": 6,
      "gater": null
    },
    {
      "weight": 0.09332644856445951,
      "from": 0,
      "to": 7,
      "gater": null
    },
    {
      "weight": 0.03411330184420752,
      "from": 3,
      "to": 5,
      "gater": null
    },
    {
      "weight": -0.49907522938580307,
      "from": 2,
      "to": 6,
      "gater": null
    },
    {
      "weight": -0.09610870710380014,
      "from": 1,
      "to": 7,
      "gater": null
    },
    {
      "weight": 0.09332644856445951,
      "from": 0,
      "to": 8,
      "gater": null
    },
    {
      "weight": -0.07679728643270711,
      "from": 4,
      "to": 5,
      "gater": null
    },
    {
      "weight": 0.03411330184420752,
      "from": 3,
      "to": 6,
      "gater": null
    },
    {
      "weight": 0.07544517754882576,
      "from": 2,
      "to": 7,
      "gater": null
    },
    {
      "weight": -0.09610870710380014,
      "from": 1,
      "to": 8,
      "gater": null
    },
    {
      "weight": -0.8564826313042261,
      "from": 0,
      "to": 9,
      "gater": null
    },
    {
      "weight": -0.9723193538039651,
      "from": 4,
      "to": 6,
      "gater": null
    },
    {
      "weight": 0.07884022113770048,
      "from": 3,
      "to": 7,
      "gater": null
    },
    {
      "weight": 0.05944503162658418,
      "from": 2,
      "to": 8,
      "gater": null
    },
    {
      "weight": -0.9002621767906526,
      "from": 1,
      "to": 9,
      "gater": null
    },
    {
      "weight": 0.09332644856445951,
      "from": 0,
      "to": 10,
      "gater": null
    },
    {
      "weight": -1.0044311503695302,
      "from": 6,
      "to": 5,
      "gater": null
    },
    {
      "weight": -0.06661715043940082,
      "from": 5,
      "to": 6,
      "gater": null
    },
    {
      "weight": -0.03473028897073825,
      "from": 4,
      "to": 7,
      "gater": null
    },
    {
      "weight": -0.04781753442354933,
      "from": 3,
      "to": 8,
      "gater": null
    },
    {
      "weight": 0.05944503162658418,
      "from": 2,
      "to": 9,
      "gater": null
    },
    {
      "weight": -0.09610870710380014,
      "from": 1,
      "to": 10,
      "gater": null
    },
    {
      "weight": 0.09332644856445951,
      "from": 0,
      "to": 11,
      "gater": null
    },
    {
      "weight": -0.026467818375132082,
      "from": 7,
      "to": 5,
      "gater": null
    },
    {
      "weight": -0.041543530849159495,
      "from": 5,
      "to": 7,
      "gater": null
    },
    {
      "weight": -0.03473028897073825,
      "from": 4,
      "to": 8,
      "gater": null
    },
    {
      "weight": 0.07884022113770048,
      "from": 3,
      "to": 9,
      "gater": null
    },
    {
      "weight": -0.01803484334642054,
      "from": 2,
      "to": 10,
      "gater": null
    },
    {
      "weight": -0.09610870710380014,
      "from": 1,
      "to": 11,
      "gater": null
    },
    {
      "weight": 0.09332644856445951,
      "from": 0,
      "to": 12,
      "gater": null
    },
    {
      "weight": -0.026467818375132082,
      "from": 7,
      "to": 6,
      "gater": null
    },
    {
      "weight": 0.03206364735905454,
      "from": 6,
      "to": 7,
      "gater": null
    },
    {
      "weight": 0.6799560946853174,
      "from": 5,
      "to": 8,
      "gater": null
    },
    {
      "weight": 0.10870729475774955,
      "from": 4,
      "to": 9,
      "gater": null
    },
    {
      "weight": -0.04781753442354933,
      "from": 3,
      "to": 10,
      "gater": null
    },
    {
      "weight": -0.01803484334642054,
      "from": 2,
      "to": 11,
      "gater": null
    },
    {
      "weight": -0.09610870710380014,
      "from": 1,
      "to": 12,
      "gater": null
    },
    {
      "weight": 0.09332644856445951,
      "from": 0,
      "to": 13,
      "gater": null
    },
    {
      "weight": -0.026467818375132082,
      "from": 8,
      "to": 6,
      "gater": null
    },
    {
      "weight": 0.00639040036955793,
      "from": 6,
      "to": 8,
      "gater": null
    },
    {
      "weight": 0.06910506947794956,
      "from": 5,
      "to": 9,
      "gater": null
    },
    {
      "weight": -0.051751437084032584,
      "from": 4,
      "to": 10,
      "gater": null
    },
    {
      "weight": 0.07884022113770048,
      "from": 3,
      "to": 11,
      "gater": null
    },
    {
      "weight": -0.01803484334642054,
      "from": 2,
      "to": 12,
      "gater": null
    },
    {
      "weight": -0.09610870710380014,
      "from": 1,
      "to": 13,
      "gater": null
    },
    {
      "weight": 0.09332644856445951,
      "from": 0,
      "to": 14,
      "gater": null
    },
    {
      "weight": -0.026467818375132082,
      "from": 9,
      "to": 6,
      "gater": null
    },
    {
      "weight": -0.026467818375132082,
      "from": 8,
      "to": 7,
      "gater": null
    },
    {
      "weight": -0.05674303705324122,
      "from": 7,
      "to": 8,
      "gater": null
    },
    {
      "weight": 0.00639040036955793,
      "from": 6,
      "to": 9,
      "gater": null
    },
    {
      "weight": 0.0467655343347361,
      "from": 5,
      "to": 10,
      "gater": null
    },
    {
      "weight": -0.4317700689548155,
      "from": 4,
      "to": 11,
      "gater": null
    },
    {
      "weight": 0.008042742770145939,
      "from": 3,
      "to": 12,
      "gater": null
    },
    {
      "weight": 0.08305335547597031,
      "from": 2,
      "to": 13,
      "gater": null
    },
    {
      "weight": -0.09610870710380014,
      "from": 1,
      "to": 14,
      "gater": null
    },
    {
      "weight": 0.09332644856445951,
      "from": 0,
      "to": 15,
      "gater": null
    },
    {
      "weight": -0.026467818375132082,
      "from": 10,
      "to": 6,
      "gater": null
    },
    {
      "weight": -0.026467818375132082,
      "from": 9,
      "to": 7,
      "gater": null
    },
    {
      "weight": 0.0742070060860188,
      "from": 7,
      "to": 9,
      "gater": null
    },
    {
      "weight": 0.04590540957312231,
      "from": 6,
      "to": 10,
      "gater": null
    },
    {
      "weight": 0.0467655343347361,
      "from": 5,
      "to": 11,
      "gater": null
    },
    {
      "weight": -0.03473028897073825,
      "from": 4,
      "to": 12,
      "gater": null
    },
    {
      "weight": 0.06665301512111052,
      "from": 3,
      "to": 13,
      "gater": null
    },
    {
      "weight": 0.08305335547597031,
      "from": 2,
      "to": 14,
      "gater": null
    },
    {
      "weight": -0.09610870710380014,
      "from": 1,
      "to": 15,
      "gater": null
    },
    {
      "weight": -0.015939039126565427,
      "from": 0,
      "to": 16,
      "gater": null
    },
    {
      "weight": -0.026467818375132082,
      "from": 11,
      "to": 6,
      "gater": null
    },
    {
      "weight": -0.026467818375132082,
      "from": 10,
      "to": 7,
      "gater": null
    },
    {
      "weight": 0.3842059534567646,
      "from": 9,
      "to": 8,
      "gater": null
    },
    {
      "weight": -0.05678820416833799,
      "from": 8,
      "to": 9,
      "gater": null
    },
    {
      "weight": 0.0742070060860188,
      "from": 7,
      "to": 10,
      "gater": null
    },
    {
      "weight": 0.009459914794909624,
      "from": 6,
      "to": 11,
      "gater": null
    },
    {
      "weight": 0.09468987938679349,
      "from": 5,
      "to": 12,
      "gater": null
    },
    {
      "weight": -0.03473028897073825,
      "from": 4,
      "to": 13,
      "gater": null
    },
    {
      "weight": 0.06665301512111052,
      "from": 3,
      "to": 14,
      "gater": null
    },
    {
      "weight": 0.07544517754882576,
      "from": 2,
      "to": 15,
      "gater": null
    },
    {
      "weight": -0.09610870710380014,
      "from": 1,
      "to": 16,
      "gater": null
    },
    {
      "weight": -0.015939039126565427,
      "from": 0,
      "to": 17,
      "gater": null
    },
    {
      "weight": -0.026467818375132082,
      "from": 12,
      "to": 6,
      "gater": null
    },
    {
      "weight": -0.026467818375132082,
      "from": 11,
      "to": 7,
      "gater": null
    },
    {
      "weight": -0.026467818375132082,
      "from": 10,
      "to": 8,
      "gater": null
    },
    {
      "weight": -0.041543530849159495,
      "from": 8,
      "to": 10,
      "gater": null
    },
    {
      "weight": 0.0742070060860188,
      "from": 7,
      "to": 11,
      "gater": null
    },
    {
      "weight": 0.04590540957312231,
      "from": 6,
      "to": 12,
      "gater": null
    },
    {
      "weight": 0.09468987938679349,
      "from": 5,
      "to": 13,
      "gater": null
    },
    {
      "weight": -0.03473028897073825,
      "from": 4,
      "to": 14,
      "gater": null
    },
    {
      "weight": 0.06665301512111052,
      "from": 3,
      "to": 15,
      "gater": null
    },
    {
      "weight": 0.07544517754882576,
      "from": 2,
      "to": 16,
      "gater": null
    },
    {
      "weight": -0.09610870710380014,
      "from": 1,
      "to": 17,
      "gater": null
    },
    {
      "weight": 0.09332644856445951,
      "from": 0,
      "to": 18,
      "gater": null
    },
    {
      "weight": -0.026467818375132082,
      "from": 13,
      "to": 6,
      "gater": null
    },
    {
      "weight": -0.026467818375132082,
      "from": 12,
      "to": 7,
      "gater": null
    },
    {
      "weight": -0.026467818375132082,
      "from": 11,
      "to": 8,
      "gater": null
    },
    {
      "weight": 0.5149181455519736,
      "from": 10,
      "to": 9,
      "gater": null
    },
    {
      "weight": -0.041543530849159495,
      "from": 9,
      "to": 10,
      "gater": null
    },
    {
      "weight": -0.0921187985037013,
      "from": 8,
      "to": 11,
      "gater": null
    },
    {
      "weight": -0.013679911250307347,
      "from": 7,
      "to": 12,
      "gater": null
    },
    {
      "weight": 0.009459914794909624,
      "from": 6,
      "to": 13,
      "gater": null
    },
    {
      "weight": 0.09468987938679349,
      "from": 5,
      "to": 14,
      "gater": null
    },
    {
      "weight": -0.03473028897073825,
      "from": 4,
      "to": 15,
      "gater": null
    },
    {
      "weight": 0.008042742770145939,
      "from": 3,
      "to": 16,
      "gater": null
    },
    {
      "weight": 0.07544517754882576,
      "from": 2,
      "to": 17,
      "gater": null
    },
    {
      "weight": 0.08463790880213412,
      "from": 1,
      "to": 18,
      "gater": null
    },
    {
      "weight": 0.09332644856445951,
      "from": 0,
      "to": 19,
      "gater": null
    },
    {
      "weight": -0.026467818375132082,
      "from": 14,
      "to": 6,
      "gater": null
    },
    {
      "weight": -0.026467818375132082,
      "from": 13,
      "to": 7,
      "gater": null
    },
    {
      "weight": -0.026467818375132082,
      "from": 12,
      "to": 8,
      "gater": null
    },
    {
      "weight": -0.026467818375132082,
      "from": 11,
      "to": 9,
      "gater": null
    },
    {
      "weight": 0.00639040036955793,
      "from": 9,
      "to": 11,
      "gater": null
    },
    {
      "weight": -0.0921187985037013,
      "from": 8,
      "to": 12,
      "gater": null
    },
    {
      "weight": 0.009459914794909624,
      "from": 7,
      "to": 13,
      "gater": null
    },
    {
      "weight": 0.009459914794909624,
      "from": 6,
      "to": 14,
      "gater": null
    },
    {
      "weight": 0.009459914794909624,
      "from": 5,
      "to": 15,
      "gater": null
    },
    {
      "weight": -0.03473028897073825,
      "from": 4,
      "to": 16,
      "gater": null
    },
    {
      "weight": 0.06665301512111052,
      "from": 3,
      "to": 17,
      "gater": null
    },
    {
      "weight": 0.07544517754882576,
      "from": 2,
      "to": 18,
      "gater": null
    },
    {
      "weight": 0.08463790880213412,
      "from": 1,
      "to": 19,
      "gater": null
    },
    {
      "weight": 0.09332644856445951,
      "from": 0,
      "to": 20,
      "gater": null
    },
    {
      "weight": -0.026467818375132082,
      "from": 14,
      "to": 7,
      "gater": null
    },
    {
      "weight": -0.026467818375132082,
      "from": 13,
      "to": 8,
      "gater": null
    },
    {
      "weight": -0.026467818375132082,
      "from": 12,
      "to": 9,
      "gater": null
    },
    {
      "weight": 0.3842059534567646,
      "from": 11,
      "to": 10,
      "gater": null
    },
    {
      "weight": 0.0700013213909271,
      "from": 10,
      "to": 11,
      "gater": null
    },
    {
      "weight": -0.041543530849159495,
      "from": 9,
      "to": 12,
      "gater": null
    },
    {
      "weight": -0.0921187985037013,
      "from": 8,
      "to": 13,
      "gater": null
    },
    {
      "weight": -0.0749125410462311,
      "from": 7,
      "to": 14,
      "gater": null
    },
    {
      "weight": 0.0756578136364591,
      "from": 6,
      "to": 15,
      "gater": null
    },
    {
      "weight": 0.09468987938679349,
      "from": 5,
      "to": 16,
      "gater": null
    },
    {
      "weight": -0.03473028897073825,
      "from": 4,
      "to": 17,
      "gater": null
    },
    {
      "weight": 0.06665301512111052,
      "from": 3,
      "to": 18,
      "gater": null
    },
    {
      "weight": 0.011775789497482148,
      "from": 2,
      "to": 19,
      "gater": null
    },
    {
      "weight": -0.09610870710380014,
      "from": 1,
      "to": 20,
      "gater": null
    },
    {
      "weight": -0.047556128115745055,
      "from": 0,
      "to": 21,
      "gater": null
    },
    {
      "weight": -0.026467818375132082,
      "from": 15,
      "to": 7,
      "gater": null
    },
    {
      "weight": -0.026467818375132082,
      "from": 14,
      "to": 8,
      "gater": null
    },
    {
      "weight": -0.026467818375132082,
      "from": 13,
      "to": 9,
      "gater": null
    },
    {
      "weight": -0.026467818375132082,
      "from": 12,
      "to": 10,
      "gater": null
    },
    {
      "weight": -0.041543530849159495,
      "from": 10,
      "to": 12,
      "gater": null
    },
    {
      "weight": -0.0936174320947171,
      "from": 9,
      "to": 13,
      "gater": null
    },
    {
      "weight": -0.07793590693764348,
      "from": 8,
      "to": 14,
      "gater": null
    },
    {
      "weight": 0.09496693793098096,
      "from": 7,
      "to": 15,
      "gater": null
    },
    {
      "weight": 0.0756578136364591,
      "from": 6,
      "to": 16,
      "gater": null
    },
    {
      "weight": -0.24059399498174008,
      "from": 5,
      "to": 17,
      "gater": null
    },
    {
      "weight": -0.03473028897073825,
      "from": 4,
      "to": 18,
      "gater": null
    },
    {
      "weight": 0.06665301512111052,
      "from": 3,
      "to": 19,
      "gater": null
    },
    {
      "weight": 0.07544517754882576,
      "from": 2,
      "to": 20,
      "gater": null
    },
    {
      "weight": -0.09610870710380014,
      "from": 1,
      "to": 21,
      "gater": null
    },
    {
      "weight": -0.047556128115745055,
      "from": 0,
      "to": 22,
      "gater": null
    },
    {
      "weight": -0.026467818375132082,
      "from": 16,
      "to": 7,
      "gater": null
    },
    {
      "weight": -0.026467818375132082,
      "from": 15,
      "to": 8,
      "gater": null
    },
    {
      "weight": -0.026467818375132082,
      "from": 14,
      "to": 9,
      "gater": null
    },
    {
      "weight": -0.026467818375132082,
      "from": 13,
      "to": 10,
      "gater": null
    },
    {
      "weight": 0.3842059534567646,
      "from": 12,
      "to": 11,
      "gater": null
    },
    {
      "weight": -0.09556692699750191,
      "from": 11,
      "to": 12,
      "gater": null
    },
    {
      "weight": 0.007211492260806238,
      "from": 10,
      "to": 13,
      "gater": null
    },
    {
      "weight": -0.07793590693764348,
      "from": 9,
      "to": 14,
      "gater": null
    },
    {
      "weight": -0.041543530849159495,
      "from": 8,
      "to": 15,
      "gater": null
    },
    {
      "weight": 0.009337365555467159,
      "from": 7,
      "to": 16,
      "gater": null
    },
    {
      "weight": 0.09496693793098096,
      "from": 6,
      "to": 17,
      "gater": null
    },
    {
      "weight": 0.09468987938679349,
      "from": 5,
      "to": 18,
      "gater": null
    },
    {
      "weight": -0.03473028897073825,
      "from": 4,
      "to": 19,
      "gater": null
    },
    {
      "weight": 0.06665301512111052,
      "from": 3,
      "to": 20,
      "gater": null
    },
    {
      "weight": 0.07544517754882576,
      "from": 2,
      "to": 21,
      "gater": null
    },
    {
      "weight": 0.08463790880213412,
      "from": 1,
      "to": 22,
      "gater": null
    },
    {
      "weight": -0.047556128115745055,
      "from": 0,
      "to": 23,
      "gater": null
    },
    {
      "weight": -0.026467818375132082,
      "from": 16,
      "to": 8,
      "gater": null
    },
    {
      "weight": -0.026467818375132082,
      "from": 15,
      "to": 9,
      "gater": null
    },
    {
      "weight": -0.026467818375132082,
      "from": 13,
      "to": 11,
      "gater": null
    },
    {
      "weight": -0.041543530849159495,
      "from": 11,
      "to": 13,
      "gater": null
    },
    {
      "weight": 0.00969070336181481,
      "from": 10,
      "to": 14,
      "gater": null
    },
    {
      "weight": -0.0936174320947171,
      "from": 9,
      "to": 15,
      "gater": null
    },
    {
      "weight": 0.012195051687907951,
      "from": 8,
      "to": 16,
      "gater": null
    },
    {
      "weight": 0.09496693793098096,
      "from": 7,
      "to": 17,
      "gater": null
    },
    {
      "weight": -0.05076814285117646,
      "from": 6,
      "to": 18,
      "gater": null
    },
    {
      "weight": 0.09468987938679349,
      "from": 5,
      "to": 19,
      "gater": null
    },
    {
      "weight": -0.03473028897073825,
      "from": 4,
      "to": 20,
      "gater": null
    },
    {
      "weight": 0.06665301512111052,
      "from": 3,
      "to": 21,
      "gater": null
    },
    {
      "weight": 0.07544517754882576,
      "from": 2,
      "to": 22,
      "gater": null
    },
    {
      "weight": -0.09610870710380014,
      "from": 1,
      "to": 23,
      "gater": null
    },
    {
      "weight": -0.047556128115745055,
      "from": 0,
      "to": 24,
      "gater": null
    },
    {
      "weight": -0.026467818375132082,
      "from": 14,
      "to": 11,
      "gater": null
    },
    {
      "weight": 0.3842059534567646,
      "from": 13,
      "to": 12,
      "gater": null
    },
    {
      "weight": -0.09556692699750191,
      "from": 12,
      "to": 13,
      "gater": null
    },
    {
      "weight": 0.00969070336181481,
      "from": 11,
      "to": 14,
      "gater": null
    },
    {
      "weight": -0.041543530849159495,
      "from": 10,
      "to": 15,
      "gater": null
    },
    {
      "weight": 0.06879476606369125,
      "from": 9,
      "to": 16,
      "gater": null
    },
    {
      "weight": 0.007211492260806238,
      "from": 8,
      "to": 17,
      "gater": null
    },
    {
      "weight": 0.009337365555467159,
      "from": 7,
      "to": 18,
      "gater": null
    },
    {
      "weight": 0.0522669427121,
      "from": 6,
      "to": 19,
      "gater": null
    },
    {
      "weight": 0.09468987938679349,
      "from": 5,
      "to": 20,
      "gater": null
    },
    {
      "weight": -0.03473028897073825,
      "from": 4,
      "to": 21,
      "gater": null
    },
    {
      "weight": 0.06665301512111052,
      "from": 3,
      "to": 22,
      "gater": null
    },
    {
      "weight": 0.07544517754882576,
      "from": 2,
      "to": 23,
      "gater": null
    },
    {
      "weight": -0.09610870710380014,
      "from": 1,
      "to": 24,
      "gater": null
    },
    {
      "weight": -0.015939039126565427,
      "from": 0,
      "to": 25,
      "gater": null
    },
    {
      "weight": -0.026467818375132082,
      "from": 15,
      "to": 11,
      "gater": null
    },
    {
      "weight": -0.026467818375132082,
      "from": 14,
      "to": 12,
      "gater": null
    },
    {
      "weight": -0.05708745873537233,
      "from": 12,
      "to": 14,
      "gater": null
    },
    {
      "weight": 0.00969070336181481,
      "from": 11,
      "to": 15,
      "gater": null
    },
    {
      "weight": -0.0936174320947171,
      "from": 10,
      "to": 16,
      "gater": null
    },
    {
      "weight": -0.041543530849159495,
      "from": 9,
      "to": 17,
      "gater": null
    },
    {
      "weight": 0.012195051687907951,
      "from": 8,
      "to": 18,
      "gater": null
    },
    {
      "weight": 0.09496693793098096,
      "from": 7,
      "to": 19,
      "gater": null
    },
    {
      "weight": -0.05076814285117646,
      "from": 6,
      "to": 20,
      "gater": null
    },
    {
      "weight": 0.09468987938679349,
      "from": 5,
      "to": 21,
      "gater": null
    },
    {
      "weight": -0.03473028897073825,
      "from": 4,
      "to": 22,
      "gater": null
    },
    {
      "weight": 0.06665301512111052,
      "from": 3,
      "to": 23,
      "gater": null
    },
    {
      "weight": 0.07544517754882576,
      "from": 2,
      "to": 24,
      "gater": null
    },
    {
      "weight": -0.09610870710380014,
      "from": 1,
      "to": 25,
      "gater": null
    },
    {
      "weight": 0.09332644856445951,
      "from": 0,
      "to": 26,
      "gater": null
    },
    {
      "weight": -0.026467818375132082,
      "from": 15,
      "to": 12,
      "gater": null
    },
    {
      "weight": 0.3842059534567646,
      "from": 14,
      "to": 13,
      "gater": null
    },
    {
      "weight": 0.018015281763108598,
      "from": 13,
      "to": 14,
      "gater": null
    },
    {
      "weight": -0.041543530849159495,
      "from": 12,
      "to": 15,
      "gater": null
    },
    {
      "weight": 0.00969070336181481,
      "from": 11,
      "to": 16,
      "gater": null
    },
    {
      "weight": 0.00759385814875517,
      "from": 10,
      "to": 17,
      "gater": null
    },
    {
      "weight": -0.041543530849159495,
      "from": 9,
      "to": 18,
      "gater": null
    },
    {
      "weight": 0.09496693793098096,
      "from": 8,
      "to": 19,
      "gater": null
    },
    {
      "weight": 0.009504886864165701,
      "from": 7,
      "to": 20,
      "gater": null
    },
    {
      "weight": 0.009459914794909624,
      "from": 6,
      "to": 21,
      "gater": null
    },
    {
      "weight": 0.09468987938679349,
      "from": 5,
      "to": 22,
      "gater": null
    },
    {
      "weight": -0.03473028897073825,
      "from": 4,
      "to": 23,
      "gater": null
    },
    {
      "weight": 0.06665301512111052,
      "from": 3,
      "to": 24,
      "gater": null
    },
    {
      "weight": 0.07544517754882576,
      "from": 2,
      "to": 25,
      "gater": null
    },
    {
      "weight": -0.09610870710380014,
      "from": 1,
      "to": 26,
      "gater": null
    },
    {
      "weight": 0.06744346925819755,
      "from": 0,
      "to": 27,
      "gater": null
    },
    {
      "weight": -0.026467818375132082,
      "from": 15,
      "to": 13,
      "gater": null
    },
    {
      "weight": -0.041543530849159495,
      "from": 13,
      "to": 15,
      "gater": null
    },
    {
      "weight": -0.041543530849159495,
      "from": 12,
      "to": 16,
      "gater": null
    },
    {
      "weight": -0.0936174320947171,
      "from": 11,
      "to": 17,
      "gater": null
    },
    {
      "weight": -0.041543530849159495,
      "from": 10,
      "to": 18,
      "gater": null
    },
    {
      "weight": 0.004896078885322508,
      "from": 9,
      "to": 19,
      "gater": null
    },
    {
      "weight": 0.04102938008593729,
      "from": 8,
      "to": 20,
      "gater": null
    },
    {
      "weight": 0.09496693793098096,
      "from": 7,
      "to": 21,
      "gater": null
    },
    {
      "weight": -0.05076814285117646,
      "from": 6,
      "to": 22,
      "gater": null
    },
    {
      "weight": 0.09468987938679349,
      "from": 5,
      "to": 23,
      "gater": null
    },
    {
      "weight": -0.03473028897073825,
      "from": 4,
      "to": 24,
      "gater": null
    },
    {
      "weight": 0.06665301512111052,
      "from": 3,
      "to": 25,
      "gater": null
    },
    {
      "weight": 0.07544517754882576,
      "from": 2,
      "to": 26,
      "gater": null
    },
    {
      "weight": -0.09610870710380014,
      "from": 1,
      "to": 27,
      "gater": null
    },
    {
      "weight": 0.06744346925819755,
      "from": 0,
      "to": 28,
      "gater": null
    },
    {
      "weight": -0.026467818375132082,
      "from": 16,
      "to": 13,
      "gater": null
    },
    {
      "weight": -0.058689434448869274,
      "from": 14,
      "to": 15,
      "gater": null
    },
    {
      "weight": -0.0879546157923913,
      "from": 13,
      "to": 16,
      "gater": null
    },
    {
      "weight": -0.035913006917478854,
      "from": 12,
      "to": 17,
      "gater": null
    },
    {
      "weight": 0.004896078885322508,
      "from": 11,
      "to": 18,
      "gater": null
    },
    {
      "weight": -0.0936174320947171,
      "from": 10,
      "to": 19,
      "gater": null
    },
    {
      "weight": 0.004896078885322508,
      "from": 9,
      "to": 20,
      "gater": null
    },
    {
      "weight": 0.09496693793098096,
      "from": 8,
      "to": 21,
      "gater": null
    },
    {
      "weight": 0.09496693793098096,
      "from": 7,
      "to": 22,
      "gater": null
    },
    {
      "weight": 0.009504886864165701,
      "from": 6,
      "to": 23,
      "gater": null
    },
    {
      "weight": 0.09468987938679349,
      "from": 5,
      "to": 24,
      "gater": null
    },
    {
      "weight": -0.03473028897073825,
      "from": 4,
      "to": 25,
      "gater": null
    },
    {
      "weight": 0.06665301512111052,
      "from": 3,
      "to": 26,
      "gater": null
    },
    {
      "weight": 0.07544517754882576,
      "from": 2,
      "to": 27,
      "gater": null
    },
    {
      "weight": -0.09610870710380014,
      "from": 1,
      "to": 28,
      "gater": null
    },
    {
      "weight": 0.03694803739566849,
      "from": 14,
      "to": 16,
      "gater": null
    },
    {
      "weight": 0.0897289607306074,
      "from": 13,
      "to": 17,
      "gater": null
    },
    {
      "weight": -0.03600680161170025,
      "from": 12,
      "to": 18,
      "gater": null
    },
    {
      "weight": -0.041543530849159495,
      "from": 11,
      "to": 19,
      "gater": null
    },
    {
      "weight": 0.044026314913123865,
      "from": 10,
      "to": 20,
      "gater": null
    },
    {
      "weight": 0.02436673481935521,
      "from": 9,
      "to": 21,
      "gater": null
    },
    {
      "weight": 0.09496693793098096,
      "from": 8,
      "to": 22,
      "gater": null
    },
    {
      "weight": 0.009337365555467159,
      "from": 7,
      "to": 23,
      "gater": null
    },
    {
      "weight": 0.009504886864165701,
      "from": 6,
      "to": 24,
      "gater": null
    },
    {
      "weight": 0.09468987938679349,
      "from": 5,
      "to": 25,
      "gater": null
    },
    {
      "weight": -0.03473028897073825,
      "from": 4,
      "to": 26,
      "gater": null
    },
    {
      "weight": 0.06665301512111052,
      "from": 3,
      "to": 27,
      "gater": null
    },
    {
      "weight": 0.07544517754882576,
      "from": 2,
      "to": 28,
      "gater": null
    },
    {
      "weight": 0.06744346925819755,
      "from": 0,
      "to": 30,
      "gater": null
    },
    {
      "weight": 0.03694803739566849,
      "from": 15,
      "to": 16,
      "gater": null
    },
    {
      "weight": -0.3667472859485509,
      "from": 14,
      "to": 17,
      "gater": null
    },
    {
      "weight": -0.022857088320923674,
      "from": 13,
      "to": 18,
      "gater": null
    },
    {
      "weight": -0.041543530849159495,
      "from": 12,
      "to": 19,
      "gater": null
    },
    {
      "weight": 0.004896078885322508,
      "from": 11,
      "to": 20,
      "gater": null
    },
    {
      "weight": -0.041543530849159495,
      "from": 10,
      "to": 21,
      "gater": null
    },
    {
      "weight": 0.06879476606369125,
      "from": 9,
      "to": 22,
      "gater": null
    },
    {
      "weight": 0.09496693793098096,
      "from": 8,
      "to": 23,
      "gater": null
    },
    {
      "weight": 0.009337365555467159,
      "from": 7,
      "to": 24,
      "gater": null
    },
    {
      "weight": 0.009504886864165701,
      "from": 6,
      "to": 25,
      "gater": null
    },
    {
      "weight": 0.09468987938679349,
      "from": 5,
      "to": 26,
      "gater": null
    },
    {
      "weight": -0.03473028897073825,
      "from": 4,
      "to": 27,
      "gater": null
    },
    {
      "weight": 0.06665301512111052,
      "from": 3,
      "to": 28,
      "gater": null
    },
    {
      "weight": -0.09610870710380014,
      "from": 1,
      "to": 30,
      "gater": null
    },
    {
      "weight": 0.07721467891648254,
      "from": 0,
      "to": 31,
      "gater": null
    },
    {
      "weight": -0.041582844349441574,
      "from": 15,
      "to": 17,
      "gater": null
    },
    {
      "weight": -0.3667472859485509,
      "from": 14,
      "to": 18,
      "gater": null
    },
    {
      "weight": -0.03600680161170025,
      "from": 13,
      "to": 19,
      "gater": null
    },
    {
      "weight": 0.004896078885322508,
      "from": 12,
      "to": 20,
      "gater": null
    },
    {
      "weight": -0.041543530849159495,
      "from": 11,
      "to": 21,
      "gater": null
    },
    {
      "weight": 0.004896078885322508,
      "from": 10,
      "to": 22,
      "gater": null
    },
    {
      "weight": 0.09496693793098096,
      "from": 9,
      "to": 23,
      "gater": null
    },
    {
      "weight": 0.09496693793098096,
      "from": 8,
      "to": 24,
      "gater": null
    },
    {
      "weight": 0.009337365555467159,
      "from": 7,
      "to": 25,
      "gater": null
    },
    {
      "weight": 0.009459914794909624,
      "from": 6,
      "to": 26,
      "gater": null
    },
    {
      "weight": 0.09468987938679349,
      "from": 5,
      "to": 27,
      "gater": null
    },
    {
      "weight": -0.03473028897073825,
      "from": 4,
      "to": 28,
      "gater": null
    },
    {
      "weight": 0.07544517754882576,
      "from": 2,
      "to": 30,
      "gater": null
    },
    {
      "weight": -0.09610870710380014,
      "from": 1,
      "to": 31,
      "gater": null
    },
    {
      "weight": 0.06744346925819755,
      "from": 0,
      "to": 32,
      "gater": null
    },
    {
      "weight": 0.03694803739566849,
      "from": 16,
      "to": 17,
      "gater": null
    },
    {
      "weight": 0.02505583850736018,
      "from": 15,
      "to": 18,
      "gater": null
    },
    {
      "weight": 0.003337389984524597,
      "from": 14,
      "to": 19,
      "gater": null
    },
    {
      "weight": 0.083178108914997,
      "from": 13,
      "to": 20,
      "gater": null
    },
    {
      "weight": -0.041543530849159495,
      "from": 12,
      "to": 21,
      "gater": null
    },
    {
      "weight": -0.041543530849159495,
      "from": 11,
      "to": 22,
      "gater": null
    },
    {
      "weight": -0.07793590693764348,
      "from": 10,
      "to": 23,
      "gater": null
    },
    {
      "weight": -0.016605408566081253,
      "from": 9,
      "to": 24,
      "gater": null
    },
    {
      "weight": 0.09496693793098096,
      "from": 8,
      "to": 25,
      "gater": null
    },
    {
      "weight": 0.09401838173897481,
      "from": 7,
      "to": 26,
      "gater": null
    },
    {
      "weight": -0.05076814285117646,
      "from": 6,
      "to": 27,
      "gater": null
    },
    {
      "weight": 0.09468987938679349,
      "from": 5,
      "to": 28,
      "gater": null
    },
    {
      "weight": 0.06665301512111052,
      "from": 3,
      "to": 30,
      "gater": null
    },
    {
      "weight": 0.07544517754882576,
      "from": 2,
      "to": 31,
      "gater": null
    },
    {
      "weight": -0.09610870710380014,
      "from": 1,
      "to": 32,
      "gater": null
    },
    {
      "weight": 0.06744346925819755,
      "from": 0,
      "to": 33,
      "gater": null
    },
    {
      "weight": 0.007677420851395528,
      "from": 16,
      "to": 18,
      "gater": null
    },
    {
      "weight": 0.010241854555859048,
      "from": 15,
      "to": 19,
      "gater": null
    },
    {
      "weight": 0.049758509488532526,
      "from": 14,
      "to": 20,
      "gater": null
    },
    {
      "weight": 0.083178108914997,
      "from": 13,
      "to": 21,
      "gater": null
    },
    {
      "weight": -0.041543530849159495,
      "from": 12,
      "to": 22,
      "gater": null
    },
    {
      "weight": -0.041543530849159495,
      "from": 11,
      "to": 23,
      "gater": null
    },
    {
      "weight": -0.07793590693764348,
      "from": 10,
      "to": 24,
      "gater": null
    },
    {
      "weight": -0.07793590693764348,
      "from": 9,
      "to": 25,
      "gater": null
    },
    {
      "weight": 0.09496693793098096,
      "from": 8,
      "to": 26,
      "gater": null
    },
    {
      "weight": 0.009337365555467159,
      "from": 7,
      "to": 27,
      "gater": null
    },
    {
      "weight": -0.04976750232554368,
      "from": 6,
      "to": 28,
      "gater": null
    },
    {
      "weight": -0.03473028897073825,
      "from": 4,
      "to": 30,
      "gater": null
    },
    {
      "weight": 0.06665301512111052,
      "from": 3,
      "to": 31,
      "gater": null
    },
    {
      "weight": 0.07544517754882576,
      "from": 2,
      "to": 32,
      "gater": null
    },
    {
      "weight": 0.06744346925819755,
      "from": 0,
      "to": 34,
      "gater": null
    },
    {
      "weight": 0.03694803739566849,
      "from": 17,
      "to": 18,
      "gater": null
    },
    {
      "weight": 0.07473064548169708,
      "from": 16,
      "to": 19,
      "gater": null
    },
    {
      "weight": -0.03019854552464954,
      "from": 15,
      "to": 20,
      "gater": null
    },
    {
      "weight": 0.003337389984524597,
      "from": 14,
      "to": 21,
      "gater": null
    },
    {
      "weight": -0.03733700319361187,
      "from": 13,
      "to": 22,
      "gater": null
    },
    {
      "weight": -0.041543530849159495,
      "from": 12,
      "to": 23,
      "gater": null
    },
    {
      "weight": 0.07040681303283827,
      "from": 11,
      "to": 24,
      "gater": null
    },
    {
      "weight": -0.07793590693764348,
      "from": 10,
      "to": 25,
      "gater": null
    },
    {
      "weight": -0.016605408566081253,
      "from": 9,
      "to": 26,
      "gater": null
    },
    {
      "weight": 0.09496693793098096,
      "from": 8,
      "to": 27,
      "gater": null
    },
    {
      "weight": 0.009337365555467159,
      "from": 7,
      "to": 28,
      "gater": null
    },
    {
      "weight": 0.09468987938679349,
      "from": 5,
      "to": 30,
      "gater": null
    },
    {
      "weight": -0.03473028897073825,
      "from": 4,
      "to": 31,
      "gater": null
    },
    {
      "weight": 0.06665301512111052,
      "from": 3,
      "to": 32,
      "gater": null
    },
    {
      "weight": -0.09610870710380014,
      "from": 1,
      "to": 34,
      "gater": null
    },
    {
      "weight": 0.06972730324507875,
      "from": 0,
      "to": 35,
      "gater": null
    },
    {
      "weight": -0.041543530849159495,
      "from": 17,
      "to": 19,
      "gater": null
    },
    {
      "weight": 0.07473064548169708,
      "from": 16,
      "to": 20,
      "gater": null
    },
    {
      "weight": 0.003337389984524597,
      "from": 15,
      "to": 21,
      "gater": null
    },
    {
      "weight": -0.041543530849159495,
      "from": 14,
      "to": 22,
      "gater": null
    },
    {
      "weight": -0.041543530849159495,
      "from": 13,
      "to": 23,
      "gater": null
    },
    {
      "weight": -0.041543530849159495,
      "from": 12,
      "to": 24,
      "gater": null
    },
    {
      "weight": 0.07040681303283827,
      "from": 11,
      "to": 25,
      "gater": null
    },
    {
      "weight": -0.016605408566081253,
      "from": 10,
      "to": 26,
      "gater": null
    },
    {
      "weight": -0.016605408566081253,
      "from": 9,
      "to": 27,
      "gater": null
    },
    {
      "weight": 0.09496693793098096,
      "from": 8,
      "to": 28,
      "gater": null
    },
    {
      "weight": 0.009459914794909624,
      "from": 6,
      "to": 30,
      "gater": null
    },
    {
      "weight": 0.09468987938679349,
      "from": 5,
      "to": 31,
      "gater": null
    },
    {
      "weight": -0.03473028897073825,
      "from": 4,
      "to": 32,
      "gater": null
    },
    {
      "weight": 0.07544517754882576,
      "from": 2,
      "to": 34,
      "gater": null
    },
    {
      "weight": -0.09610870710380014,
      "from": 1,
      "to": 35,
      "gater": null
    },
    {
      "weight": 0.002845909040047584,
      "from": 18,
      "to": 19,
      "gater": null
    },
    {
      "weight": -0.08539826302723795,
      "from": 17,
      "to": 20,
      "gater": null
    },
    {
      "weight": -0.03019854552464954,
      "from": 16,
      "to": 21,
      "gater": null
    },
    {
      "weight": 0.05568933174449789,
      "from": 15,
      "to": 22,
      "gater": null
    },
    {
      "weight": -0.041543530849159495,
      "from": 14,
      "to": 23,
      "gater": null
    },
    {
      "weight": -0.06465780573759777,
      "from": 13,
      "to": 24,
      "gater": null
    },
    {
      "weight": -0.041543530849159495,
      "from": 12,
      "to": 25,
      "gater": null
    },
    {
      "weight": -0.041543530849159495,
      "from": 11,
      "to": 26,
      "gater": null
    },
    {
      "weight": -0.016605408566081253,
      "from": 10,
      "to": 27,
      "gater": null
    },
    {
      "weight": -0.016605408566081253,
      "from": 9,
      "to": 28,
      "gater": null
    },
    {
      "weight": 0.09496693793098096,
      "from": 7,
      "to": 30,
      "gater": null
    },
    {
      "weight": 0.009459914794909624,
      "from": 6,
      "to": 31,
      "gater": null
    },
    {
      "weight": 0.09468987938679349,
      "from": 5,
      "to": 32,
      "gater": null
    },
    {
      "weight": 0.06665301512111052,
      "from": 3,
      "to": 34,
      "gater": null
    },
    {
      "weight": 0.07544517754882576,
      "from": 2,
      "to": 35,
      "gater": null
    },
    {
      "weight": 0.03694803739566849,
      "from": 18,
      "to": 20,
      "gater": null
    },
    {
      "weight": 0.02505583850736018,
      "from": 17,
      "to": 21,
      "gater": null
    },
    {
      "weight": 0.02505583850736018,
      "from": 16,
      "to": 22,
      "gater": null
    },
    {
      "weight": -0.06890668144484563,
      "from": 15,
      "to": 23,
      "gater": null
    },
    {
      "weight": 0.049758509488532526,
      "from": 14,
      "to": 24,
      "gater": null
    },
    {
      "weight": 0.083178108914997,
      "from": 13,
      "to": 25,
      "gater": null
    },
    {
      "weight": -0.016605408566081253,
      "from": 12,
      "to": 26,
      "gater": null
    },
    {
      "weight": -0.041543530849159495,
      "from": 11,
      "to": 27,
      "gater": null
    },
    {
      "weight": -0.07793590693764348,
      "from": 10,
      "to": 28,
      "gater": null
    },
    {
      "weight": 0.09496693793098096,
      "from": 8,
      "to": 30,
      "gater": null
    },
    {
      "weight": 0.009337365555467159,
      "from": 7,
      "to": 31,
      "gater": null
    },
    {
      "weight": 0.009459914794909624,
      "from": 6,
      "to": 32,
      "gater": null
    },
    {
      "weight": -0.03473028897073825,
      "from": 4,
      "to": 34,
      "gater": null
    },
    {
      "weight": -0.7164542573522958,
      "from": 3,
      "to": 35,
      "gater": null
    },
    {
      "weight": 0.03694803739566849,
      "from": 19,
      "to": 20,
      "gater": null
    },
    {
      "weight": -0.08539826302723795,
      "from": 18,
      "to": 21,
      "gater": null
    },
    {
      "weight": 0.003337389984524597,
      "from": 17,
      "to": 22,
      "gater": null
    },
    {
      "weight": 0.02505583850736018,
      "from": 16,
      "to": 23,
      "gater": null
    },
    {
      "weight": -0.041543530849159495,
      "from": 15,
      "to": 24,
      "gater": null
    },
    {
      "weight": -0.02507323587794992,
      "from": 14,
      "to": 25,
      "gater": null
    },
    {
      "weight": 0.08739831325818531,
      "from": 13,
      "to": 26,
      "gater": null
    },
    {
      "weight": -0.041543530849159495,
      "from": 12,
      "to": 27,
      "gater": null
    },
    {
      "weight": -0.07793590693764348,
      "from": 11,
      "to": 28,
      "gater": null
    },
    {
      "weight": -0.016605408566081253,
      "from": 9,
      "to": 30,
      "gater": null
    },
    {
      "weight": 0.09496693793098096,
      "from": 8,
      "to": 31,
      "gater": null
    },
    {
      "weight": 0.009337365555467159,
      "from": 7,
      "to": 32,
      "gater": null
    },
    {
      "weight": 0.09468987938679349,
      "from": 5,
      "to": 34,
      "gater": null
    },
    {
      "weight": -0.03473028897073825,
      "from": 4,
      "to": 35,
      "gater": null
    },
    {
      "weight": 0.003337389984524597,
      "from": 19,
      "to": 21,
      "gater": null
    },
    {
      "weight": 0.003337389984524597,
      "from": 18,
      "to": 22,
      "gater": null
    },
    {
      "weight": -0.041543530849159495,
      "from": 17,
      "to": 23,
      "gater": null
    },
    {
      "weight": 0.049758509488532526,
      "from": 16,
      "to": 24,
      "gater": null
    },
    {
      "weight": 0.0737180072772223,
      "from": 15,
      "to": 25,
      "gater": null
    },
    {
      "weight": -0.041543530849159495,
      "from": 14,
      "to": 26,
      "gater": null
    },
    {
      "weight": 0.08091370839851875,
      "from": 13,
      "to": 27,
      "gater": null
    },
    {
      "weight": -0.041543530849159495,
      "from": 12,
      "to": 28,
      "gater": null
    },
    {
      "weight": -0.07793590693764348,
      "from": 10,
      "to": 30,
      "gater": null
    },
    {
      "weight": 0.09496693793098096,
      "from": 9,
      "to": 31,
      "gater": null
    },
    {
      "weight": 0.09496693793098096,
      "from": 8,
      "to": 32,
      "gater": null
    },
    {
      "weight": 0.009459914794909624,
      "from": 6,
      "to": 34,
      "gater": null
    },
    {
      "weight": -0.5853813841742662,
      "from": 5,
      "to": 35,
      "gater": null
    },
    {
      "weight": -0.07305045797003201,
      "from": 20,
      "to": 21,
      "gater": null
    },
    {
      "weight": 0.003337389984524597,
      "from": 19,
      "to": 22,
      "gater": null
    },
    {
      "weight": -0.041543530849159495,
      "from": 18,
      "to": 23,
      "gater": null
    },
    {
      "weight": 0.02505583850736018,
      "from": 17,
      "to": 24,
      "gater": null
    },
    {
      "weight": 0.048557990138937385,
      "from": 16,
      "to": 25,
      "gater": null
    },
    {
      "weight": -0.041543530849159495,
      "from": 15,
      "to": 26,
      "gater": null
    },
    {
      "weight": 0.08739831325818531,
      "from": 14,
      "to": 27,
      "gater": null
    },
    {
      "weight": 0.08739831325818531,
      "from": 13,
      "to": 28,
      "gater": null
    },
    {
      "weight": 0.044026314913123865,
      "from": 11,
      "to": 30,
      "gater": null
    },
    {
      "weight": -0.07793590693764348,
      "from": 10,
      "to": 31,
      "gater": null
    },
    {
      "weight": -0.016605408566081253,
      "from": 9,
      "to": 32,
      "gater": null
    },
    {
      "weight": -0.5853813841742662,
      "from": 6,
      "to": 35,
      "gater": null
    },
    {
      "weight": 0.035491055027096985,
      "from": 20,
      "to": 22,
      "gater": null
    },
    {
      "weight": 0.035491055027096985,
      "from": 19,
      "to": 23,
      "gater": null
    },
    {
      "weight": -0.010321970797669694,
      "from": 18,
      "to": 24,
      "gater": null
    },
    {
      "weight": 0.02505583850736018,
      "from": 17,
      "to": 25,
      "gater": null
    },
    {
      "weight": 0.04920062264641861,
      "from": 16,
      "to": 26,
      "gater": null
    },
    {
      "weight": -0.06740849914967569,
      "from": 15,
      "to": 27,
      "gater": null
    },
    {
      "weight": -0.041543530849159495,
      "from": 14,
      "to": 28,
      "gater": null
    },
    {
      "weight": -0.041543530849159495,
      "from": 12,
      "to": 30,
      "gater": null
    },
    {
      "weight": -0.041543530849159495,
      "from": 11,
      "to": 31,
      "gater": null
    },
    {
      "weight": -0.07793590693764348,
      "from": 10,
      "to": 32,
      "gater": null
    },
    {
      "weight": 0.09496693793098096,
      "from": 8,
      "to": 34,
      "gater": null
    },
    {
      "weight": 0.009337365555467159,
      "from": 7,
      "to": 35,
      "gater": null
    },
    {
      "weight": 0.003337389984524597,
      "from": 21,
      "to": 22,
      "gater": null
    },
    {
      "weight": -0.08539826302723795,
      "from": 20,
      "to": 23,
      "gater": null
    },
    {
      "weight": 0.02505583850736018,
      "from": 19,
      "to": 24,
      "gater": null
    },
    {
      "weight": 0.02505583850736018,
      "from": 18,
      "to": 25,
      "gater": null
    },
    {
      "weight": -0.010321970797669694,
      "from": 17,
      "to": 26,
      "gater": null
    },
    {
      "weight": 0.049758509488532526,
      "from": 16,
      "to": 27,
      "gater": null
    },
    {
      "weight": -0.041543530849159495,
      "from": 15,
      "to": 28,
      "gater": null
    },
    {
      "weight": -0.041543530849159495,
      "from": 14,
      "to": 29,
      "gater": null
    },
    {
      "weight": -0.041543530849159495,
      "from": 13,
      "to": 30,
      "gater": null
    },
    {
      "weight": -0.07793590693764348,
      "from": 12,
      "to": 31,
      "gater": null
    },
    {
      "weight": -0.07793590693764348,
      "from": 11,
      "to": 32,
      "gater": null
    },
    {
      "weight": -0.016605408566081253,
      "from": 9,
      "to": 34,
      "gater": null
    },
    {
      "weight": -0.03741614623442495,
      "from": 8,
      "to": 35,
      "gater": null
    },
    {
      "weight": 0.035491055027096985,
      "from": 21,
      "to": 23,
      "gater": null
    },
    {
      "weight": 0.003337389984524597,
      "from": 20,
      "to": 24,
      "gater": null
    },
    {
      "weight": -0.010321970797669694,
      "from": 19,
      "to": 25,
      "gater": null
    },
    {
      "weight": 0.03694803739566849,
      "from": 18,
      "to": 26,
      "gater": null
    },
    {
      "weight": -0.010321970797669694,
      "from": 17,
      "to": 27,
      "gater": null
    },
    {
      "weight": -0.06740849914967569,
      "from": 16,
      "to": 28,
      "gater": null
    },
    {
      "weight": -0.06840971143035741,
      "from": 13,
      "to": 31,
      "gater": null
    },
    {
      "weight": -0.041543530849159495,
      "from": 12,
      "to": 32,
      "gater": null
    },
    {
      "weight": -0.07793590693764348,
      "from": 10,
      "to": 34,
      "gater": null
    },
    {
      "weight": -0.016605408566081253,
      "from": 9,
      "to": 35,
      "gater": null
    },
    {
      "weight": -0.09840677889271565,
      "from": 22,
      "to": 23,
      "gater": null
    },
    {
      "weight": -0.08539826302723795,
      "from": 21,
      "to": 24,
      "gater": null
    },
    {
      "weight": 0.02505583850736018,
      "from": 20,
      "to": 25,
      "gater": null
    },
    {
      "weight": -0.03459517431950898,
      "from": 19,
      "to": 26,
      "gater": null
    },
    {
      "weight": -0.010321970797669694,
      "from": 18,
      "to": 27,
      "gater": null
    },
    {
      "weight": -0.041543530849159495,
      "from": 17,
      "to": 28,
      "gater": null
    },
    {
      "weight": -0.041543530849159495,
      "from": 15,
      "to": 30,
      "gater": null
    },
    {
      "weight": -0.041543530849159495,
      "from": 14,
      "to": 31,
      "gater": null
    },
    {
      "weight": -0.041543530849159495,
      "from": 13,
      "to": 32,
      "gater": null
    },
    {
      "weight": -0.07793590693764348,
      "from": 11,
      "to": 34,
      "gater": null
    },
    {
      "weight": -0.07793590693764348,
      "from": 10,
      "to": 35,
      "gater": null
    },
    {
      "weight": 0.003337389984524597,
      "from": 22,
      "to": 24,
      "gater": null
    },
    {
      "weight": 0.02505583850736018,
      "from": 21,
      "to": 25,
      "gater": null
    },
    {
      "weight": -0.0165661884979309,
      "from": 20,
      "to": 26,
      "gater": null
    },
    {
      "weight": -0.041543530849159495,
      "from": 19,
      "to": 27,
      "gater": null
    },
    {
      "weight": 0.02505583850736018,
      "from": 18,
      "to": 28,
      "gater": null
    },
    {
      "weight": -0.041543530849159495,
      "from": 16,
      "to": 30,
      "gater": null
    },
    {
      "weight": -0.041543530849159495,
      "from": 15,
      "to": 31,
      "gater": null
    },
    {
      "weight": -0.041543530849159495,
      "from": 14,
      "to": 32,
      "gater": null
    },
    {
      "weight": -0.041543530849159495,
      "from": 12,
      "to": 34,
      "gater": null
    },
    {
      "weight": -0.07793590693764348,
      "from": 11,
      "to": 35,
      "gater": null
    },
    {
      "weight": 0.002845909040047584,
      "from": 23,
      "to": 24,
      "gater": null
    },
    {
      "weight": 0.003337389984524597,
      "from": 22,
      "to": 25,
      "gater": null
    },
    {
      "weight": -0.08539826302723795,
      "from": 21,
      "to": 26,
      "gater": null
    },
    {
      "weight": 0.003337389984524597,
      "from": 20,
      "to": 27,
      "gater": null
    },
    {
      "weight": -0.010321970797669694,
      "from": 19,
      "to": 28,
      "gater": null
    },
    {
      "weight": -0.041543530849159495,
      "from": 17,
      "to": 30,
      "gater": null
    },
    {
      "weight": -0.08592316275479522,
      "from": 16,
      "to": 31,
      "gater": null
    },
    {
      "weight": -0.06740849914967569,
      "from": 15,
      "to": 32,
      "gater": null
    },
    {
      "weight": -0.041543530849159495,
      "from": 13,
      "to": 34,
      "gater": null
    },
    {
      "weight": -0.08119412867915649,
      "from": 12,
      "to": 35,
      "gater": null
    },
    {
      "weight": 0.035491055027096985,
      "from": 23,
      "to": 25,
      "gater": null
    },
    {
      "weight": 0.035491055027096985,
      "from": 22,
      "to": 26,
      "gater": null
    },
    {
      "weight": -0.05723579298825885,
      "from": 21,
      "to": 27,
      "gater": null
    },
    {
      "weight": 0.003337389984524597,
      "from": 20,
      "to": 28,
      "gater": null
    },
    {
      "weight": -0.041543530849159495,
      "from": 18,
      "to": 30,
      "gater": null
    },
    {
      "weight": 0.07960895763605072,
      "from": 17,
      "to": 31,
      "gater": null
    },
    {
      "weight": -0.06740849914967569,
      "from": 16,
      "to": 32,
      "gater": null
    },
    {
      "weight": -0.041543530849159495,
      "from": 14,
      "to": 34,
      "gater": null
    },
    {
      "weight": -0.04193531255588883,
      "from": 13,
      "to": 35,
      "gater": null
    },
    {
      "weight": 0.035491055027096985,
      "from": 24,
      "to": 25,
      "gater": null
    },
    {
      "weight": 0.07473064548169708,
      "from": 23,
      "to": 26,
      "gater": null
    },
    {
      "weight": 0.003337389984524597,
      "from": 22,
      "to": 27,
      "gater": null
    },
    {
      "weight": 0.003337389984524597,
      "from": 21,
      "to": 28,
      "gater": null
    },
    {
      "weight": -0.041543530849159495,
      "from": 19,
      "to": 30,
      "gater": null
    },
    {
      "weight": -0.041543530849159495,
      "from": 18,
      "to": 31,
      "gater": null
    },
    {
      "weight": -0.041543530849159495,
      "from": 17,
      "to": 32,
      "gater": null
    },
    {
      "weight": -0.041543530849159495,
      "from": 15,
      "to": 34,
      "gater": null
    },
    {
      "weight": -0.041543530849159495,
      "from": 14,
      "to": 35,
      "gater": null
    },
    {
      "weight": 0.035491055027096985,
      "from": 24,
      "to": 26,
      "gater": null
    },
    {
      "weight": 0.003337389984524597,
      "from": 23,
      "to": 27,
      "gater": null
    },
    {
      "weight": 0.003337389984524597,
      "from": 22,
      "to": 28,
      "gater": null
    },
    {
      "weight": -0.041543530849159495,
      "from": 20,
      "to": 30,
      "gater": null
    },
    {
      "weight": 0.003337389984524597,
      "from": 19,
      "to": 31,
      "gater": null
    },
    {
      "weight": -0.041543530849159495,
      "from": 18,
      "to": 32,
      "gater": null
    },
    {
      "weight": -0.09187082536590468,
      "from": 16,
      "to": 34,
      "gater": null
    },
    {
      "weight": -0.041543530849159495,
      "from": 15,
      "to": 35,
      "gater": null
    },
    {
      "weight": 0.035491055027096985,
      "from": 25,
      "to": 26,
      "gater": null
    },
    {
      "weight": -0.015319853249979198,
      "from": 24,
      "to": 27,
      "gater": null
    },
    {
      "weight": 0.003337389984524597,
      "from": 23,
      "to": 28,
      "gater": null
    },
    {
      "weight": 0.02505583850736018,
      "from": 21,
      "to": 30,
      "gater": null
    },
    {
      "weight": -0.010321970797669694,
      "from": 20,
      "to": 31,
      "gater": null
    },
    {
      "weight": -0.041543530849159495,
      "from": 19,
      "to": 32,
      "gater": null
    },
    {
      "weight": -0.06740849914967569,
      "from": 17,
      "to": 34,
      "gater": null
    },
    {
      "weight": -0.041543530849159495,
      "from": 16,
      "to": 35,
      "gater": null
    },
    {
      "weight": 0.010405533867459973,
      "from": 25,
      "to": 27,
      "gater": null
    },
    {
      "weight": -0.08539826302723795,
      "from": 24,
      "to": 28,
      "gater": null
    },
    {
      "weight": -0.015319853249979198,
      "from": 22,
      "to": 30,
      "gater": null
    },
    {
      "weight": 0.02505583850736018,
      "from": 21,
      "to": 31,
      "gater": null
    },
    {
      "weight": -0.041543530849159495,
      "from": 20,
      "to": 32,
      "gater": null
    },
    {
      "weight": -0.041543530849159495,
      "from": 19,
      "to": 33,
      "gater": null
    },
    {
      "weight": -0.041543530849159495,
      "from": 18,
      "to": 34,
      "gater": null
    },
    {
      "weight": -0.041543530849159495,
      "from": 17,
      "to": 35,
      "gater": null
    },
    {
      "weight": 0.010405533867459973,
      "from": 26,
      "to": 27,
      "gater": null
    },
    {
      "weight": 0.035491055027096985,
      "from": 25,
      "to": 28,
      "gater": null
    },
    {
      "weight": 0.003337389984524597,
      "from": 23,
      "to": 30,
      "gater": null
    },
    {
      "weight": 0.02505583850736018,
      "from": 22,
      "to": 31,
      "gater": null
    },
    {
      "weight": 0.003337389984524597,
      "from": 21,
      "to": 32,
      "gater": null
    },
    {
      "weight": 0.07960895763605072,
      "from": 19,
      "to": 34,
      "gater": null
    },
    {
      "weight": -0.041543530849159495,
      "from": 18,
      "to": 35,
      "gater": null
    },
    {
      "weight": 0.035491055027096985,
      "from": 26,
      "to": 28,
      "gater": null
    },
    {
      "weight": 0.02505583850736018,
      "from": 24,
      "to": 30,
      "gater": null
    },
    {
      "weight": 0.02505583850736018,
      "from": 23,
      "to": 31,
      "gater": null
    },
    {
      "weight": -0.010321970797669694,
      "from": 22,
      "to": 32,
      "gater": null
    },
    {
      "weight": 0.003337389984524597,
      "from": 19,
      "to": 35,
      "gater": null
    },
    {
      "weight": 0.035491055027096985,
      "from": 27,
      "to": 28,
      "gater": null
    },
    {
      "weight": 0.02505583850736018,
      "from": 25,
      "to": 30,
      "gater": null
    },
    {
      "weight": 0.003337389984524597,
      "from": 24,
      "to": 31,
      "gater": null
    },
    {
      "weight": 0.03694803739566849,
      "from": 23,
      "to": 32,
      "gater": null
    },
    {
      "weight": -0.041543530849159495,
      "from": 21,
      "to": 34,
      "gater": null
    },
    {
      "weight": -0.010321970797669694,
      "from": 20,
      "to": 35,
      "gater": null
    },
    {
      "weight": -0.08539826302723795,
      "from": 26,
      "to": 30,
      "gater": null
    },
    {
      "weight": 0.02505583850736018,
      "from": 25,
      "to": 31,
      "gater": null
    },
    {
      "weight": 0.03694803739566849,
      "from": 24,
      "to": 32,
      "gater": null
    },
    {
      "weight": 0.003337389984524597,
      "from": 22,
      "to": 34,
      "gater": null
    },
    {
      "weight": 0.003337389984524597,
      "from": 21,
      "to": 35,
      "gater": null
    },
    {
      "weight": 0.03694803739566849,
      "from": 27,
      "to": 30,
      "gater": null
    },
    {
      "weight": 0.003337389984524597,
      "from": 26,
      "to": 31,
      "gater": null
    },
    {
      "weight": 0.003337389984524597,
      "from": 25,
      "to": 32,
      "gater": null
    },
    {
      "weight": 0.03694803739566849,
      "from": 23,
      "to": 34,
      "gater": null
    },
    {
      "weight": 0.03694803739566849,
      "from": 22,
      "to": 35,
      "gater": null
    },
    {
      "weight": 0.035491055027096985,
      "from": 28,
      "to": 30,
      "gater": null
    },
    {
      "weight": 0.03694803739566849,
      "from": 27,
      "to": 31,
      "gater": null
    },
    {
      "weight": 0.02505583850736018,
      "from": 26,
      "to": 32,
      "gater": null
    },
    {
      "weight": 0.02505583850736018,
      "from": 24,
      "to": 34,
      "gater": null
    },
    {
      "weight": -0.02927272787169892,
      "from": 23,
      "to": 35,
      "gater": null
    },
    {
      "weight": 0.035491055027096985,
      "from": 29,
      "to": 30,
      "gater": null
    },
    {
      "weight": 0.03984223004408474,
      "from": 28,
      "to": 31,
      "gater": null
    },
    {
      "weight": 0.03694803739566849,
      "from": 27,
      "to": 32,
      "gater": null
    },
    {
      "weight": 0.046931270638449124,
      "from": 25,
      "to": 34,
      "gater": null
    },
    {
      "weight": 0.03694803739566849,
      "from": 24,
      "to": 35,
      "gater": null
    },
    {
      "weight": 0.08554678704166499,
      "from": 28,
      "to": 32,
      "gater": null
    },
    {
      "weight": -0.02927272787169892,
      "from": 26,
      "to": 34,
      "gater": null
    },
    {
      "weight": 0.03694803739566849,
      "from": 25,
      "to": 35,
      "gater": null
    },
    {
      "weight": 0.0686544870277257,
      "from": 30,
      "to": 31,
      "gater": null
    },
    {
      "weight": -0.02927272787169892,
      "from": 27,
      "to": 34,
      "gater": null
    },
    {
      "weight": -0.02927272787169892,
      "from": 26,
      "to": 35,
      "gater": null
    },
    {
      "weight": 0.035491055027096985,
      "from": 30,
      "to": 32,
      "gater": null
    },
    {
      "weight": 0.03694803739566849,
      "from": 28,
      "to": 34,
      "gater": null
    },
    {
      "weight": 0.03694803739566849,
      "from": 27,
      "to": 35,
      "gater": null
    },
    {
      "weight": 0.035491055027096985,
      "from": 31,
      "to": 32,
      "gater": null
    },
    {
      "weight": 0.003337389984524597,
      "from": 28,
      "to": 35,
      "gater": null
    },
    {
      "weight": 0.035491055027096985,
      "from": 30,
      "to": 34,
      "gater": null
    },
    {
      "weight": 0.035491055027096985,
      "from": 31,
      "to": 34,
      "gater": null
    },
    {
      "weight": 0.003337389984524597,
      "from": 30,
      "to": 35,
      "gater": null
    },
    {
      "weight": 0.035491055027096985,
      "from": 32,
      "to": 34,
      "gater": null
    },
    {
      "weight": -0.05960525241446253,
      "from": 31,
      "to": 35,
      "gater": null
    },
    {
      "weight": 0.06301489544252645,
      "from": 32,
      "to": 35,
      "gater": null
    },
    {
      "weight": 0.03694803739566849,
      "from": 33,
      "to": 35,
      "gater": null
    },
    {
      "weight": 0.003337389984524597,
      "from": 34,
      "to": 35,
      "gater": null
    },
    {
      "weight": -0.026467818375132082,
      "from": 14,
      "to": 10,
      "gater": null
    },
    {
      "weight": 0.06744346925819755,
      "from": 0,
      "to": 29,
      "gater": null
    },
    {
      "weight": -0.09610870710380014,
      "from": 1,
      "to": 29,
      "gater": null
    },
    {
      "weight": 0.07544517754882576,
      "from": 2,
      "to": 29,
      "gater": null
    },
    {
      "weight": 0.06665301512111052,
      "from": 3,
      "to": 29,
      "gater": null
    },
    {
      "weight": -0.03473028897073825,
      "from": 4,
      "to": 29,
      "gater": null
    },
    {
      "weight": 0.09468987938679349,
      "from": 5,
      "to": 29,
      "gater": null
    },
    {
      "weight": -0.09610870710380014,
      "from": 1,
      "to": 33,
      "gater": null
    },
    {
      "weight": 0.009459914794909624,
      "from": 6,
      "to": 29,
      "gater": null
    },
    {
      "weight": 0.07544517754882576,
      "from": 2,
      "to": 33,
      "gater": null
    },
    {
      "weight": 0.009337365555467159,
      "from": 7,
      "to": 29,
      "gater": null
    },
    {
      "weight": 0.06665301512111052,
      "from": 3,
      "to": 33,
      "gater": null
    },
    {
      "weight": 0.09496693793098096,
      "from": 8,
      "to": 29,
      "gater": null
    },
    {
      "weight": -0.03473028897073825,
      "from": 4,
      "to": 33,
      "gater": null
    },
    {
      "weight": -0.016605408566081253,
      "from": 9,
      "to": 29,
      "gater": null
    },
    {
      "weight": 0.09468987938679349,
      "from": 5,
      "to": 33,
      "gater": null
    },
    {
      "weight": -0.07793590693764348,
      "from": 10,
      "to": 29,
      "gater": null
    },
    {
      "weight": 0.009459914794909624,
      "from": 6,
      "to": 33,
      "gater": null
    },
    {
      "weight": -0.016605408566081253,
      "from": 11,
      "to": 29,
      "gater": null
    },
    {
      "weight": 0.009337365555467159,
      "from": 7,
      "to": 33,
      "gater": null
    },
    {
      "weight": -0.041543530849159495,
      "from": 12,
      "to": 29,
      "gater": null
    },
    {
      "weight": 0.09496693793098096,
      "from": 8,
      "to": 33,
      "gater": null
    },
    {
      "weight": 0.009337365555467159,
      "from": 7,
      "to": 34,
      "gater": null
    },
    {
      "weight": 0.08739831325818531,
      "from": 13,
      "to": 29,
      "gater": null
    },
    {
      "weight": -0.016605408566081253,
      "from": 9,
      "to": 33,
      "gater": null
    },
    {
      "weight": -0.07793590693764348,
      "from": 10,
      "to": 33,
      "gater": null
    },
    {
      "weight": -0.06740849914967569,
      "from": 15,
      "to": 29,
      "gater": null
    },
    {
      "weight": -0.041543530849159495,
      "from": 14,
      "to": 30,
      "gater": null
    },
    {
      "weight": -0.07793590693764348,
      "from": 11,
      "to": 33,
      "gater": null
    },
    {
      "weight": -0.06740849914967569,
      "from": 16,
      "to": 29,
      "gater": null
    },
    {
      "weight": -0.041543530849159495,
      "from": 12,
      "to": 33,
      "gater": null
    },
    {
      "weight": -0.041543530849159495,
      "from": 17,
      "to": 29,
      "gater": null
    },
    {
      "weight": -0.041543530849159495,
      "from": 13,
      "to": 33,
      "gater": null
    },
    {
      "weight": -0.041543530849159495,
      "from": 18,
      "to": 29,
      "gater": null
    },
    {
      "weight": -0.041543530849159495,
      "from": 14,
      "to": 33,
      "gater": null
    },
    {
      "weight": 0.003337389984524597,
      "from": 19,
      "to": 29,
      "gater": null
    },
    {
      "weight": -0.041543530849159495,
      "from": 15,
      "to": 33,
      "gater": null
    },
    {
      "weight": 0.2780936876048925,
      "from": 20,
      "to": 29,
      "gater": null
    },
    {
      "weight": -0.06740849914967569,
      "from": 16,
      "to": 33,
      "gater": null
    },
    {
      "weight": 0.03694803739566849,
      "from": 21,
      "to": 29,
      "gater": null
    },
    {
      "weight": 0.07960895763605072,
      "from": 17,
      "to": 33,
      "gater": null
    },
    {
      "weight": -0.008096142476906154,
      "from": 22,
      "to": 29,
      "gater": null
    },
    {
      "weight": -0.041543530849159495,
      "from": 18,
      "to": 33,
      "gater": null
    },
    {
      "weight": 0.03694803739566849,
      "from": 23,
      "to": 29,
      "gater": null
    },
    {
      "weight": -0.08539826302723795,
      "from": 24,
      "to": 29,
      "gater": null
    },
    {
      "weight": -0.041543530849159495,
      "from": 20,
      "to": 33,
      "gater": null
    },
    {
      "weight": -0.08539826302723795,
      "from": 25,
      "to": 29,
      "gater": null
    },
    {
      "weight": 0.003337389984524597,
      "from": 21,
      "to": 33,
      "gater": null
    },
    {
      "weight": 0.03694803739566849,
      "from": 26,
      "to": 29,
      "gater": null
    },
    {
      "weight": 0.02505583850736018,
      "from": 22,
      "to": 33,
      "gater": null
    },
    {
      "weight": 0.08263077812890468,
      "from": 27,
      "to": 29,
      "gater": null
    },
    {
      "weight": 0.02505583850736018,
      "from": 23,
      "to": 33,
      "gater": null
    },
    {
      "weight": 0.035491055027096985,
      "from": 28,
      "to": 29,
      "gater": null
    },
    {
      "weight": 0.02505583850736018,
      "from": 24,
      "to": 33,
      "gater": null
    },
    {
      "weight": 0.03694803739566849,
      "from": 25,
      "to": 33,
      "gater": null
    },
    {
      "weight": -0.02927272787169892,
      "from": 26,
      "to": 33,
      "gater": null
    },
    {
      "weight": 0.03694803739566849,
      "from": 29,
      "to": 31,
      "gater": null
    },
    {
      "weight": 0.03694803739566849,
      "from": 27,
      "to": 33,
      "gater": null
    },
    {
      "weight": 0.035491055027096985,
      "from": 29,
      "to": 32,
      "gater": null
    },
    {
      "weight": 0.03694803739566849,
      "from": 28,
      "to": 33,
      "gater": null
    },
    {
      "weight": 0.03694803739566849,
      "from": 29,
      "to": 33,
      "gater": null
    },
    {
      "weight": 0.035491055027096985,
      "from": 30,
      "to": 33,
      "gater": null
    },
    {
      "weight": 0.03694803739566849,
      "from": 29,
      "to": 34,
      "gater": null
    },
    {
      "weight": 0.022309835505111314,
      "from": 31,
      "to": 33,
      "gater": null
    },
    {
      "weight": 0.03694803739566849,
      "from": 29,
      "to": 35,
      "gater": null
    },
    {
      "weight": 0.035491055027096985,
      "from": 32,
      "to": 33,
      "gater": null
    },
    {
      "weight": 0.035491055027096985,
      "from": 33,
      "to": 34,
      "gater": null
    },
    {
      "weight": 0.06121221188475001,
      "from": 20,
      "to": 34,
      "gater": null
    }
  ],
  "input": 5,
  "output": 2,
  "dropout": 0
};

module.exports = { networkManual, networkMaxLeft, netGood, hajzlRobutek, test, test2, supaFast, test3 };