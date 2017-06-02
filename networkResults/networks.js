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
            "bias": 0.033114893081065244,
            "type": "hidden",
            "squash": "HARD_TANH",
            "mask": 1,
            "index": "5"
        },
        {
            "bias": -0.030901825758798837,
            "type": "hidden",
            "squash": "HARD_TANH",
            "mask": 1,
            "index": "6"
        },
        {
            "bias": -0.02745598312510955,
            "type": "output",
            "squash": "BIPOLAR",
            "mask": 1,
            "index": "7"
        },
        {
            "bias": -0.02745598312510955,
            "type": "output",
            "squash": "BIPOLAR",
            "mask": 1,
            "index": "8"
        }
    ],
    "connections": [
        {
            "weight": -0.09169911216863219,
            "from": 0,
            "to": 5,
            "gater": null
        },
        {
            "weight": -0.05470961643223187,
            "from": 1,
            "to": 5,
            "gater": null
        },
        {
            "weight": -0.05601474157892908,
            "from": 0,
            "to": 6,
            "gater": null
        },
        {
            "weight": 0.06867334279378468,
            "from": 2,
            "to": 5,
            "gater": null
        },
        {
            "weight": 0.9150864410693815,
            "from": 1,
            "to": 6,
            "gater": null
        },
        {
            "weight": -0.05080529577459121,
            "from": 3,
            "to": 5,
            "gater": null
        },
        {
            "weight": -0.08651500329029607,
            "from": 2,
            "to": 6,
            "gater": null
        },
        {
            "weight": 0.061698864582062696,
            "from": 0,
            "to": 8,
            "gater": null
        },
        {
            "weight": 0.07525283854592826,
            "from": 4,
            "to": 5,
            "gater": null
        },
        {
            "weight": -0.0300096491856459,
            "from": 3,
            "to": 6,
            "gater": null
        },
        {
            "weight": -0.04582244060686951,
            "from": 1,
            "to": 8,
            "gater": null
        },
        {
            "weight": 0.07760691848224144,
            "from": 4,
            "to": 6,
            "gater": null
        },
        {
            "weight": 0.08848211402299719,
            "from": 2,
            "to": 8,
            "gater": null
        },
        {
            "weight": -0.010229558818926551,
            "from": 3,
            "to": 8,
            "gater": null
        },
        {
            "weight": -0.06749609458716935,
            "from": 4,
            "to": 8,
            "gater": null
        },
        {
            "weight": -0.07954600954240068,
            "from": 5,
            "to": 8,
            "gater": null
        },
        {
            "weight": -0.12092712957594767,
            "from": 0,
            "to": 7,
            "gater": null
        },
        {
            "weight": -0.051468088823936414,
            "from": 1,
            "to": 7,
            "gater": null
        },
        {
            "weight": 0.08344358065259919,
            "from": 2,
            "to": 7,
            "gater": null
        },
        {
            "weight": 0.011619580841077906,
            "from": 3,
            "to": 7,
            "gater": null
        },
        {
            "weight": -0.01319843354852028,
            "from": 4,
            "to": 7,
            "gater": null
        },
        {
            "weight": 0.05178263471382591,
            "from": 5,
            "to": 7,
            "gater": null
        },
        {
            "weight": -0.08208178886520345,
            "from": 6,
            "to": 8,
            "gater": null
        },
        {
            "weight": -0.07235885119792546,
            "from": 6,
            "to": 7,
            "gater": null
        }
    ],
    "input": 5,
    "output": 2,
    "dropout": 0
};

module.exports = { networkManual, networkMaxLeft, netGood };