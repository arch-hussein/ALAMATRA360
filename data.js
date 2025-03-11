var APP_DATA = {
  "scenes": [
    {
      "id": "0-out-street",
      "name": "OUT STREET",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "yaw": 0,
        "pitch": 0,
        "fov": 1.22682949163576
      },
      "linkHotspots": [
        {
          "yaw": -0.5778933106880206,
          "pitch": 0.11736993564554687,
          "rotation": 3.141592653589793,
          "target": "1-out"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-out",
      "name": "out",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.802272546442838,
          "pitch": 0.03558610646513749,
          "rotation": 1.5707963267948966,
          "target": "0-out-street"
        },
        {
          "yaw": -0.7182381915398359,
          "pitch": 0.04610007993075982,
          "rotation": 0,
          "target": "2-reception_1"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-reception_1",
      "name": "reception_1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.4384551476740999,
          "pitch": 0.21266282579193607,
          "rotation": 5.497787143782138,
          "target": "1-out"
        },
        {
          "yaw": 1.8871383233752628,
          "pitch": 0.0030275348135955227,
          "rotation": 1.5707963267948966,
          "target": "3-corridor"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-corridor",
      "name": "CORRIDOR",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "yaw": -0.06229365537120657,
        "pitch": 0.059041451776167264,
        "fov": 1.22682949163576
      },
      "linkHotspots": [
        {
          "yaw": -0.5975506208813393,
          "pitch": 0.2756091591308003,
          "rotation": 4.71238898038469,
          "target": "4-staircase"
        },
        {
          "yaw": -2.824498473739263,
          "pitch": -0.014535904012070944,
          "rotation": 1.5707963267948966,
          "target": "2-reception_1"
        },
        {
          "yaw": -0.35404924028620144,
          "pitch": 0.010297995445178287,
          "rotation": 1.5707963267948966,
          "target": "7-library"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-staircase",
      "name": "staircase",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.6908718569880108,
          "pitch": 0.15464609500180515,
          "rotation": 4.71238898038469,
          "target": "9-seminar-and-class"
        },
        {
          "yaw": 0.48200568783128794,
          "pitch": 0.2669508197701447,
          "rotation": 1.5707963267948966,
          "target": "5-teacher-room"
        },
        {
          "yaw": -3.0590688115885953,
          "pitch": 0.06111156636032966,
          "rotation": 1.5707963267948966,
          "target": "2-reception_1"
        },
        {
          "yaw": -1.6506660771637058,
          "pitch": -0.21727037494783374,
          "rotation": 0,
          "target": "12-firstfloor"
        },
        {
          "yaw": 0.11677664541804056,
          "pitch": 0.009378444747170533,
          "rotation": 1.5707963267948966,
          "target": "7-library"
        },
        {
          "yaw": 1.1463863030855794,
          "pitch": 0.0791512444828264,
          "rotation": 1.5707963267948966,
          "target": "8-class-room1_1"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "5-teacher-room",
      "name": "teacher room",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.6379552524200562,
          "pitch": 0.3926268958468704,
          "rotation": 4.71238898038469,
          "target": "3-corridor"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "6-library-and-corridor",
      "name": "library and corridor",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.2824726529132722,
          "pitch": 0.03831986545797861,
          "rotation": 3.141592653589793,
          "target": "3-corridor"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "7-library",
      "name": "library",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.20666198067384656,
          "pitch": 0.13382834554790612,
          "rotation": 4.71238898038469,
          "target": "6-library-and-corridor"
        },
        {
          "yaw": 0.9868199916328368,
          "pitch": 0.12079333095602607,
          "rotation": 4.71238898038469,
          "target": "11-class-3"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "8-class-room1_1",
      "name": "class room1_1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.7210130238914836,
          "pitch": 0.11331711365301267,
          "rotation": 4.71238898038469,
          "target": "4-staircase"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "9-seminar-and-class",
      "name": "seminar and class",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 2.2379248744765015,
          "pitch": 0.027225109525058855,
          "rotation": 5.497787143782138,
          "target": "3-corridor"
        },
        {
          "yaw": 1.3745685868306499,
          "pitch": 0.21276917677516494,
          "rotation": 3.141592653589793,
          "target": "10-class-2"
        },
        {
          "yaw": -0.29704558061801833,
          "pitch": 0.013786933699345028,
          "rotation": 0,
          "target": "11-class-3"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "10-class-2",
      "name": "CLASS 2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -2.1742507245779965,
          "pitch": 0.31910462171386555,
          "rotation": 2.356194490192345,
          "target": "9-seminar-and-class"
        },
        {
          "yaw": 0.27967475702688915,
          "pitch": 0.026648121807735237,
          "rotation": 4.71238898038469,
          "target": "11-class-3"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "11-class-3",
      "name": "CLASS 3",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.51444623142282,
          "pitch": 0.005179401380921433,
          "rotation": 0,
          "target": "10-class-2"
        },
        {
          "yaw": -0.851605130740861,
          "pitch": 0.010161279318054994,
          "rotation": 4.71238898038469,
          "target": "7-library"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "12-firstfloor",
      "name": "firstfloor",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.7709524159884893,
          "pitch": 0.009767622363938244,
          "rotation": 3.141592653589793,
          "target": "3-corridor"
        },
        {
          "yaw": -2.07523785933855,
          "pitch": -0.02974411224663953,
          "rotation": 4.71238898038469,
          "target": "14-co-working-2"
        },
        {
          "yaw": 0.4854847397014215,
          "pitch": -0.22451272474040884,
          "rotation": 1.5707963267948966,
          "target": "15-panorama"
        },
        {
          "yaw": -0.7767557260060549,
          "pitch": -0.11428947133390821,
          "rotation": 0,
          "target": "13-coworking-1"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "13-coworking-1",
      "name": "coworking 1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.40506221496974604,
          "pitch": 0.023665125940924625,
          "rotation": 1.5707963267948966,
          "target": "17-meeting1"
        },
        {
          "yaw": 0.7944824433577136,
          "pitch": 0.2710091630439635,
          "rotation": 3.141592653589793,
          "target": "3-corridor"
        },
        {
          "yaw": 1.239250938970736,
          "pitch": 0.2894194790581892,
          "rotation": 0,
          "target": "20-roof-top"
        },
        {
          "yaw": 2.224495971237409,
          "pitch": 0.0339022698235496,
          "rotation": 4.71238898038469,
          "target": "14-co-working-2"
        },
        {
          "yaw": -0.5298143344538069,
          "pitch": 0.04088698288728132,
          "rotation": 0,
          "target": "15-panorama"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "14-co-working-2",
      "name": "co working 2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.7048634662688542,
          "pitch": -0.04370665273008001,
          "rotation": 4.71238898038469,
          "target": "16-director-office"
        },
        {
          "yaw": 1.9727064572805508,
          "pitch": -0.32197473969222656,
          "rotation": 1.5707963267948966,
          "target": "13-coworking-1"
        },
        {
          "yaw": 1.4634391194247014,
          "pitch": 0.07326526889173834,
          "rotation": 6.283185307179586,
          "target": "18-meting2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "15-panorama",
      "name": "Panorama",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.7695607470967136,
          "pitch": 0.14367213669342327,
          "rotation": 4.71238898038469,
          "target": "17-meeting1"
        },
        {
          "yaw": -0.273561995355891,
          "pitch": 0.1101033283646018,
          "rotation": 0,
          "target": "12-firstfloor"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "16-director-office",
      "name": "director office",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.7515251591230312,
          "pitch": 0.0732539214068133,
          "rotation": 1.5707963267948966,
          "target": "14-co-working-2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "17-meeting1",
      "name": "meeting1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.1682205915585655,
          "pitch": 0.16142933557586758,
          "rotation": 4.71238898038469,
          "target": "13-coworking-1"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "18-meting2",
      "name": "METING2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 2.60328247871189,
          "pitch": -0.04646357661374978,
          "rotation": 4.71238898038469,
          "target": "14-co-working-2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "19-director-office",
      "name": "director office",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [],
      "infoHotspots": []
    },
    {
      "id": "20-roof-top",
      "name": "roof top",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.2915221436008508,
          "pitch": 0.10589794615854942,
          "rotation": 7.853981633974483,
          "target": "21-gaming-spot"
        },
        {
          "yaw": 0.9470181665651332,
          "pitch": 0.35097452672217955,
          "rotation": 3.141592653589793,
          "target": "12-firstfloor"
        },
        {
          "yaw": 2.374521411746092,
          "pitch": 0.017707246088866313,
          "rotation": 0,
          "target": "22-studeio"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "21-gaming-spot",
      "name": "gaming spot",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.8505567546927049,
          "pitch": 0.1340451868010284,
          "rotation": 0,
          "target": "20-roof-top"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "22-studeio",
      "name": "STUDEIO",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -2.46948434619571,
          "pitch": 0.062930163702557,
          "rotation": 4.71238898038469,
          "target": "20-roof-top"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Project Title",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": false,
    "fullscreenButton": false,
    "viewControlButtons": false
  }
};
