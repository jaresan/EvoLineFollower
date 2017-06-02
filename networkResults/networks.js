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

module.exports = { networkManual, networkMaxLeft, netGood };