/*jslint */
/*global AdobeEdge: false, window: false, document: false, console:false, alert: false */
(function (compId) {

    "use strict";
    var im='images/',
        aud='media/',
        vid='media/',
        js='js/',
        fonts = {
        },
        opts = {
            'gAudioPreloadPreference': 'auto',
            'gVideoPreloadPreference': 'auto'
        },
        resources = [
        ],
        scripts = [
        ],
        symbols = {
            "stage": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "height",
                centerStage: "both",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            id: 'pelletstest5',
                            symbolName: 'pelletstest',
                            type: 'rect',
                            rect: ['340px', '412px', '26', '572', 'auto', 'auto']
                        },
                        {
                            id: 'pelletstest5Copy',
                            symbolName: 'pelletstest',
                            type: 'rect',
                            rect: ['1617px', '1029px', '26', '572', 'auto', 'auto']
                        },
                        {
                            id: 'pelletstest5Copy2',
                            symbolName: 'pelletstest',
                            type: 'rect',
                            rect: ['1348px', '812px', '26', '572', 'auto', 'auto'],
                            transform: [[],[],[],['0.9','0.9']]
                        },
                        {
                            id: 'pelletstest5Copy4',
                            symbolName: 'pelletstest',
                            type: 'rect',
                            rect: ['1117px', '684px', '26', '572', 'auto', 'auto']
                        },
                        {
                            id: 'pelletstest5Copy5',
                            symbolName: 'pelletstest',
                            type: 'rect',
                            rect: ['1926px', '890px', '26', '572', 'auto', 'auto']
                        },
                        {
                            id: 'pelletstest5Copy3',
                            symbolName: 'pelletstest',
                            type: 'rect',
                            rect: ['1445px', '948px', '26', '572', 'auto', 'auto']
                        },
                        {
                            id: 'pelletstest5Copy8',
                            symbolName: 'pelletstest',
                            type: 'rect',
                            rect: ['1944px', '1088px', '26', '572', 'auto', 'auto'],
                            transform: [[],[],[],['0.94','0.94']]
                        },
                        {
                            id: 'pelletsmotion22',
                            symbolName: 'pelletsmotion2',
                            type: 'rect',
                            rect: ['494px', '838px', '561', '164', 'auto', 'auto']
                        },
                        {
                            id: 'pelletsmotion2',
                            symbolName: 'pelletsmotion',
                            type: 'rect',
                            rect: ['132px', '935px', '730', '26', 'auto', 'auto']
                        },
                        {
                            id: 'pelletstest5Copy6',
                            symbolName: 'pelletstest',
                            type: 'rect',
                            rect: ['872px', '449px', '26', '572', 'auto', 'auto']
                        },
                        {
                            id: 'RectangleCopy4',
                            type: 'rect',
                            rect: ['1033px', '1088px', '45px', '34px', 'auto', 'auto'],
                            fill: ["rgba(255,255,255,1.00)"],
                            stroke: [0,"rgba(0,0,0,1)","none"]
                        },
                        {
                            id: 'pelletsmotion3',
                            symbolName: 'pelletsmotion3',
                            type: 'rect',
                            rect: ['922px', '1151px', '730', '26', 'auto', 'auto'],
                            transform: [[],[],[],['1.12999','1.12999']]
                        },
                        {
                            id: 'pelletsmotion3Copy',
                            symbolName: 'pelletsmotion3',
                            type: 'rect',
                            rect: ['1222px', '1374px', '730', '26', 'auto', 'auto']
                        },
                        {
                            id: 'pelletstest5Copy7',
                            symbolName: 'pelletstest',
                            type: 'rect',
                            rect: ['1042px', '597px', '26', '572', 'auto', 'auto']
                        },
                        {
                            id: 'pelletsmotion3Copy3',
                            symbolName: 'pelletsmotion3',
                            type: 'rect',
                            rect: ['642px', '970px', '730', '26', 'auto', 'auto']
                        },
                        {
                            id: 'pelletstest5Copy10',
                            symbolName: 'pelletstest',
                            type: 'rect',
                            rect: ['1683px', '1113px', '26', '572', 'auto', 'auto'],
                            transform: [[],[],[],['0.82','0.82']]
                        },
                        {
                            id: 'pelletsmotion3Copy4',
                            symbolName: 'pelletsmotion3',
                            type: 'rect',
                            rect: ['1286px', '1484px', '730', '26', 'auto', 'auto'],
                            transform: [[],[],[],['0.82','0.82']]
                        },
                        {
                            id: 'pelletstest5Copy9',
                            symbolName: 'pelletstest',
                            type: 'rect',
                            rect: ['1750px', '769px', '26', '572', 'auto', 'auto'],
                            transform: [[],[],[],['0.92','0.92']]
                        },
                        {
                            id: 'pelletsmotion3Copy2',
                            symbolName: 'pelletsmotion3',
                            type: 'rect',
                            rect: ['1514px', '1241px', '730', '26', 'auto', 'auto'],
                            transform: [[],[],[],['0.93','0.93']]
                        },
                        {
                            id: 'Rectangle',
                            type: 'rect',
                            rect: ['1440px', '1430px', '62px', '48px', 'auto', 'auto'],
                            fill: ["rgba(245,245,245,1.00)"],
                            stroke: [0,"rgba(0,0,0,1)","none"]
                        },
                        {
                            id: 'arrow2Copy5',
                            symbolName: 'arrow',
                            type: 'rect',
                            rect: ['1389px', '877px', '11', '12', 'auto', 'auto'],
                            transform: [[],['180']]
                        },
                        {
                            id: 'RectangleCopy3',
                            type: 'rect',
                            rect: ['1168px', '1055px', '62px', '33px', 'auto', 'auto'],
                            fill: ["rgba(245,245,245,1.00)"],
                            stroke: [0,"rgba(0,0,0,1)","none"]
                        },
                        {
                            id: 'RectangleCopy2',
                            type: 'rect',
                            rect: ['846px', '799px', '77px', '92px', 'auto', 'auto'],
                            fill: ["rgba(245,245,245,1.00)"],
                            stroke: [0,"rgba(0,0,0,1)","none"]
                        },
                        {
                            id: 'RectangleCopy',
                            type: 'rect',
                            rect: ['1032px', '948px', '45px', '24px', 'auto', 'auto'],
                            fill: ["rgba(245,245,245,1.00)"],
                            stroke: [0,"rgba(0,0,0,1)","none"]
                        },
                        {
                            id: 'RectangleCopy6',
                            type: 'rect',
                            rect: ['1061px', '943px', '45px', '67px', 'auto', 'auto'],
                            fill: ["rgba(245,245,245,1.00)"],
                            stroke: [0,"rgba(0,0,0,1)","none"],
                            transform: [[],['-29']]
                        },
                        {
                            id: 'RectangleCopy9',
                            type: 'rect',
                            rect: ['837px', '988px', '45px', '24px', 'auto', 'auto'],
                            fill: ["rgba(245,245,245,1.00)"],
                            stroke: [0,"rgba(0,0,0,1)","none"],
                            transform: [[],['-29']]
                        },
                        {
                            id: 'RectangleCopy7',
                            type: 'rect',
                            rect: ['1033px', '1081px', '45px', '48px', 'auto', 'auto'],
                            fill: ["rgba(245,245,245,1.00)"],
                            stroke: [0,"rgba(0,0,0,1)","none"]
                        },
                        {
                            id: 'arrow2Copy6',
                            symbolName: 'arrow',
                            type: 'rect',
                            rect: ['926px', '253px', '11', '12', 'auto', 'auto'],
                            transform: [[],['180']]
                        },
                        {
                            id: 'RectangleCopy8',
                            type: 'rect',
                            rect: ['1636px', '1357px', '45px', '48px', 'auto', 'auto'],
                            fill: ["rgba(245,245,245,1.00)"],
                            stroke: [0,"rgba(0,0,0,1)","none"]
                        },
                        {
                            id: 'RectangleCopy10',
                            type: 'rect',
                            rect: ['1540px', '1486px', '77px', '48px', 'auto', 'auto'],
                            fill: ["rgba(245,245,245,1.00)"],
                            stroke: [0,"rgba(0,0,0,1)","none"]
                        },
                        {
                            id: 'RectangleCopy11',
                            type: 'rect',
                            rect: ['1573px', '1498px', '77px', '63px', 'auto', 'auto'],
                            fill: ["rgba(245,245,245,1.00)"],
                            stroke: [0,"rgba(0,0,0,1)","none"],
                            transform: [[],['22']]
                        },
                        {
                            id: 'RectangleCopy14',
                            type: 'rect',
                            rect: ['1737px', '1104px', '77px', '96px', 'auto', 'auto'],
                            fill: ["rgba(245,245,245,1.00)"],
                            stroke: [0,"rgba(0,0,0,1)","none"]
                        },
                        {
                            id: 'RectangleCopy16',
                            type: 'rect',
                            rect: ['1708px', '1249px', '77px', '34px', 'auto', 'auto'],
                            fill: ["rgba(245,245,245,1.00)"],
                            stroke: [0,"rgba(0,0,0,1)","none"],
                            transform: [[],['43']]
                        },
                        {
                            id: 'RectangleCopy17',
                            type: 'rect',
                            rect: ['1906px', '1212px', '77px', '34px', 'auto', 'auto'],
                            fill: ["rgba(245,245,245,1.00)"],
                            stroke: [0,"rgba(0,0,0,1)","none"],
                            transform: [[],['43']]
                        },
                        {
                            id: 'RectangleCopy15',
                            type: 'rect',
                            rect: ['1738px', '1262px', '77px', '96px', 'auto', 'auto'],
                            fill: ["rgba(245,245,245,1.00)"],
                            stroke: [0,"rgba(0,0,0,1)","none"]
                        },
                        {
                            id: 'RectangleCopy12',
                            type: 'rect',
                            rect: ['1660px', '1530px', '77px', '71px', 'auto', 'auto'],
                            fill: ["rgba(245,245,245,1.00)"],
                            stroke: [0,"rgba(0,0,0,1)","none"]
                        },
                        {
                            id: 'RectangleCopy13',
                            type: 'rect',
                            rect: ['1679px', '1417px', '77px', '71px', 'auto', 'auto'],
                            fill: ["rgba(245,245,245,1.00)"],
                            stroke: [0,"rgba(0,0,0,1)","none"]
                        },
                        {
                            id: 'bigmanure',
                            symbolName: 'pellet1',
                            type: 'rect',
                            rect: ['492px', '588px', '21', '21', 'auto', 'auto'],
                            transform: [[],[],[],['0.73386','1.14999']]
                        },
                        {
                            id: 'manurelight2',
                            symbolName: 'manureflow',
                            type: 'rect',
                            rect: ['392px', '516px', '26', '2', 'auto', 'auto'],
                            transform: [[],[],[],['1','1.14999']]
                        },
                        {
                            id: 'arrow2',
                            symbolName: 'arrow',
                            type: 'rect',
                            rect: ['1396px', '1706px', '11', '12', 'auto', 'auto']
                        },
                        {
                            id: 'arrow2Copy',
                            symbolName: 'arrow',
                            type: 'rect',
                            rect: ['2170px', '1706px', '11', '12', 'auto', 'auto'],
                            transform: [[],['-90']]
                        },
                        {
                            id: 'arrow2Copy2',
                            symbolName: 'arrow',
                            type: 'rect',
                            rect: ['2171px', '1387px', '11', '12', 'auto', 'auto'],
                            transform: [[],['-90']]
                        },
                        {
                            id: 'arrow2Copy7',
                            symbolName: 'arrow',
                            type: 'rect',
                            rect: ['939px', '871px', '11', '12', 'auto', 'auto'],
                            transform: [[],['-90']]
                        },
                        {
                            id: 'arrow2Copy4',
                            symbolName: 'arrow',
                            type: 'rect',
                            rect: ['2165px', '877px', '11', '12', 'auto', 'auto'],
                            transform: [[],['180']]
                        },
                        {
                            id: 'RectangleCopy5',
                            type: 'rect',
                            rect: ['291px', '947px', '62px', '46px', 'auto', 'auto'],
                            fill: ["rgba(245,245,245,1.00)"],
                            stroke: [0,"rgba(0,0,0,1)","none"],
                            transform: [[],['-29']]
                        },
                        {
                            id: 'arrow6',
                            symbolName: 'arrow6',
                            type: 'rect',
                            rect: ['1386px', '1564px', '12', '10', 'auto', 'auto']
                        },
                        {
                            id: 'CarbonBlackFlowChart',
                            type: 'image',
                            rect: ['0px', '0px', '2236px', '1781px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"CarbonBlackFlowChart.png",'0px','0px']
                        },
                        {
                            id: 'pinmixtootip',
                            symbolName: 'pinmixtootip',
                            type: 'rect',
                            rect: ['449px', '663px', '265', '106', 'auto', 'auto'],
                            opacity: '0',
                            transform: [[],[],[],['1.11225','0.9078']]
                        },
                        {
                            id: 'pinmixtootipCopy',
                            symbolName: 'pinmixtootip',
                            type: 'rect',
                            rect: ['23px', '695px', '265', '106', 'auto', 'auto'],
                            opacity: '0',
                            transform: [[],[],[],['0.50732','0.9078']]
                        },
                        {
                            id: 'pinmixtootipCopy2',
                            symbolName: 'pinmixtootip',
                            type: 'rect',
                            rect: ['1285px', '1271px', '265', '106', 'auto', 'auto'],
                            opacity: '0',
                            transform: [[],[],[],['0.50732','0.62789']]
                        },
                        {
                            id: 'Text',
                            type: 'text',
                            rect: ['72px', '1757px', '1259px', '48px', 'auto', 'auto'],
                            cursor: 'pointer',
                            text: "<p style=\"margin: 0px;\"><span style=\"font-style: italic;\">For more information on our equipment, please contact Craig Vaughan at </span><span style=\"font-style: italic; text-decoration: underline; color: rgb(8, 31, 191);\">cvaughan@marsmineral.com</span><span style=\"font-style: italic;\">​</span></p>",
                            font: ['Arial, Helvetica, sans-serif', [25, "px"], "rgba(0,0,0,1)", "normal", "none", "", "break-word", "normal"]
                        }
                    ],
                    style: {
                        '${Stage}': {
                            isStage: true,
                            rect: ['null', 'null', '2236px', '1864px', 'auto', 'auto'],
                            overflow: 'hidden',
                            fill: ["rgba(245,245,245,1.00)"]
                        }
                    }
                },
                timeline: {
                    duration: 4554,
                    autoPlay: false,
                    data: [
                        [
                            "eid470",
                            "top",
                            0,
                            0,
                            "linear",
                            "${arrow2}",
                            '1706px',
                            '1706px'
                        ],
                        [
                            "eid290",
                            "left",
                            0,
                            0,
                            "linear",
                            "${pelletsmotion3Copy3}",
                            '642px',
                            '642px'
                        ],
                        [
                            "eid288",
                            "left",
                            0,
                            0,
                            "linear",
                            "${pelletsmotion22}",
                            '494px',
                            '494px'
                        ],
                        [
                            "eid391",
                            "top",
                            0,
                            0,
                            "linear",
                            "${arrow2Copy2}",
                            '1387px',
                            '1387px'
                        ],
                        [
                            "eid327",
                            "top",
                            0,
                            0,
                            "linear",
                            "${pelletsmotion3Copy3}",
                            '970px',
                            '970px'
                        ],
                        [
                            "eid475",
                            "top",
                            0,
                            0,
                            "linear",
                            "${arrow2Copy4}",
                            '877px',
                            '877px'
                        ],
                        [
                            "eid246",
                            "scaleX",
                            0,
                            0,
                            "linear",
                            "${pinmixtootipCopy2}",
                            '0.50732',
                            '0.50732'
                        ],
                        [
                            "eid160",
                            "rotateZ",
                            0,
                            0,
                            "linear",
                            "${arrow2Copy2}",
                            '-90deg',
                            '-90deg'
                        ],
                        [
                            "eid466",
                            "top",
                            0,
                            0,
                            "linear",
                            "${pelletstest5Copy10}",
                            '1113px',
                            '1113px'
                        ],
                        [
                            "eid434",
                            "top",
                            0,
                            0,
                            "linear",
                            "${pelletstest5Copy5}",
                            '890px',
                            '890px'
                        ],
                        [
                            "eid480",
                            "top",
                            0,
                            0,
                            "linear",
                            "${pelletstest5Copy9}",
                            '769px',
                            '769px'
                        ],
                        [
                            "eid477",
                            "scaleX",
                            0,
                            0,
                            "linear",
                            "${pelletstest5Copy9}",
                            '0.92',
                            '0.92'
                        ],
                        [
                            "eid503",
                            "left",
                            0,
                            0,
                            "linear",
                            "${pelletstest5Copy9}",
                            '1750px',
                            '1750px'
                        ],
                        [
                            "eid489",
                            "top",
                            0,
                            0,
                            "linear",
                            "${pelletstest5Copy}",
                            '1029px',
                            '1029px'
                        ],
                        [
                            "eid203",
                            "rotateZ",
                            0,
                            0,
                            "linear",
                            "${arrow2Copy6}",
                            '180deg',
                            '180deg'
                        ],
                        [
                            "eid468",
                            "left",
                            0,
                            0,
                            "linear",
                            "${arrow6}",
                            '1386px',
                            '1386px'
                        ],
                        [
                            "eid372",
                            "left",
                            0,
                            0,
                            "linear",
                            "${pelletsmotion3}",
                            '922px',
                            '922px'
                        ],
                        [
                            "eid473",
                            "top",
                            0,
                            0,
                            "linear",
                            "${arrow2Copy}",
                            '1706px',
                            '1706px'
                        ],
                        [
                            "eid416",
                            "scaleY",
                            4554,
                            0,
                            "linear",
                            "${bigmanure}",
                            '1.14999',
                            '1.14999'
                        ],
                        [
                            "eid360",
                            "left",
                            0,
                            0,
                            "linear",
                            "${arrow2Copy7}",
                            '939px',
                            '939px'
                        ],
                        [
                            "eid441",
                            "left",
                            0,
                            0,
                            "linear",
                            "${arrow2Copy4}",
                            '2165px',
                            '2165px'
                        ],
                        [
                            "eid482",
                            "scaleY",
                            0,
                            0,
                            "linear",
                            "${pelletsmotion3Copy2}",
                            '0.93',
                            '0.93'
                        ],
                        [
                            "eid200",
                            "left",
                            0,
                            0,
                            "linear",
                            "${arrow2Copy5}",
                            '1389px',
                            '1389px'
                        ],
                        [
                            "eid433",
                            "left",
                            0,
                            0,
                            "linear",
                            "${pelletstest5Copy5}",
                            '1926px',
                            '1926px'
                        ],
                        [
                            "eid237",
                            "scaleY",
                            0,
                            0,
                            "linear",
                            "${pinmixtootipCopy}",
                            '0.9078',
                            '0.9078'
                        ],
                        [
                            "eid368",
                            "left",
                            0,
                            0,
                            "linear",
                            "${pelletsmotion3Copy}",
                            '1222px',
                            '1222px'
                        ],
                        [
                            "eid255",
                            "scaleY",
                            0,
                            0,
                            "linear",
                            "${pinmixtootipCopy2}",
                            '0.62789',
                            '0.62789'
                        ],
                        [
                            "eid286",
                            "left",
                            0,
                            0,
                            "linear",
                            "${pelletsmotion2}",
                            '132px',
                            '132px'
                        ],
                        [
                            "eid209",
                            "rotateZ",
                            0,
                            0,
                            "linear",
                            "${arrow2Copy7}",
                            '-90deg',
                            '-90deg'
                        ],
                        [
                            "eid498",
                            "background-color",
                            0,
                            0,
                            "linear",
                            "${Stage}",
                            'rgba(245,245,245,1.00)',
                            'rgba(245,245,245,1.00)'
                        ],
                        [
                            "eid386",
                            "top",
                            0,
                            0,
                            "linear",
                            "${pelletstest5Copy2}",
                            '812px',
                            '812px'
                        ],
                        [
                            "eid349",
                            "top",
                            0,
                            0,
                            "linear",
                            "${pelletstest5Copy7}",
                            '597px',
                            '597px'
                        ],
                        [
                            "eid324",
                            "top",
                            0,
                            0,
                            "linear",
                            "${pelletstest5}",
                            '412px',
                            '412px'
                        ],
                        [
                            "eid370",
                            "left",
                            0,
                            0,
                            "linear",
                            "${pelletstest5Copy3}",
                            '1445px',
                            '1445px'
                        ],
                        [
                            "eid426",
                            "top",
                            0,
                            0,
                            "linear",
                            "${arrow6}",
                            '1564px',
                            '1564px'
                        ],
                        [
                            "eid387",
                            "left",
                            0,
                            0,
                            "linear",
                            "${pelletstest5Copy2}",
                            '1348px',
                            '1348px'
                        ],
                        [
                            "eid251",
                            "left",
                            0,
                            0,
                            "linear",
                            "${pinmixtootipCopy2}",
                            '1285px',
                            '1285px'
                        ],
                        [
                            "eid484",
                            "scaleX",
                            0,
                            0,
                            "linear",
                            "${pelletstest5Copy10}",
                            '0.82',
                            '0.82'
                        ],
                        [
                            "eid287",
                            "top",
                            0,
                            0,
                            "linear",
                            "${pelletsmotion2}",
                            '935px',
                            '935px'
                        ],
                        [
                            "eid357",
                            "top",
                            0,
                            0,
                            "linear",
                            "${pelletstest5Copy4}",
                            '684px',
                            '684px'
                        ],
                        [
                            "eid444",
                            "left",
                            0,
                            0,
                            "linear",
                            "${arrow2Copy2}",
                            '2171px',
                            '2171px'
                        ],
                        [
                            "eid359",
                            "top",
                            0,
                            0,
                            "linear",
                            "${arrow2Copy7}",
                            '871px',
                            '871px'
                        ],
                        [
                            "eid348",
                            "left",
                            0,
                            0,
                            "linear",
                            "${pelletstest5Copy7}",
                            '1042px',
                            '1042px'
                        ],
                        [
                            "eid303",
                            "top",
                            0,
                            0,
                            "linear",
                            "${pelletstest5Copy3}",
                            '948px',
                            '948px'
                        ],
                        [
                            "eid487",
                            "left",
                            0,
                            0,
                            "linear",
                            "${pelletstest5Copy10}",
                            '1683px',
                            '1683px'
                        ],
                        [
                            "eid495",
                            "scaleY",
                            0,
                            0,
                            "linear",
                            "${pelletsmotion3Copy4}",
                            '0.82',
                            '0.82'
                        ],
                        [
                            "eid497",
                            "top",
                            0,
                            0,
                            "linear",
                            "${pelletsmotion3Copy4}",
                            '1484px',
                            '1484px'
                        ],
                        [
                            "eid494",
                            "scaleX",
                            0,
                            0,
                            "linear",
                            "${pelletsmotion3Copy4}",
                            '0.82',
                            '0.82'
                        ],
                        [
                            "eid229",
                            "scaleX",
                            0,
                            0,
                            "linear",
                            "${pinmixtootip}",
                            '1.11225',
                            '1.11225'
                        ],
                        [
                            "eid383",
                            "scaleX",
                            0,
                            0,
                            "linear",
                            "${pelletstest5Copy2}",
                            '0.9',
                            '0.9'
                        ],
                        [
                            "eid421",
                            "left",
                            4554,
                            0,
                            "linear",
                            "${manurelight2}",
                            '392px',
                            '392px'
                        ],
                        [
                            "eid157",
                            "rotateZ",
                            0,
                            0,
                            "linear",
                            "${arrow2Copy}",
                            '-90deg',
                            '-90deg'
                        ],
                        [
                            "eid485",
                            "scaleY",
                            0,
                            0,
                            "linear",
                            "${pelletstest5Copy10}",
                            '0.82',
                            '0.82'
                        ],
                        [
                            "eid230",
                            "scaleY",
                            0,
                            0,
                            "linear",
                            "${pinmixtootip}",
                            '0.9078',
                            '0.9078'
                        ],
                        [
                            "eid501",
                            "top",
                            0,
                            0,
                            "linear",
                            "${pelletsmotion3Copy2}",
                            '1241px',
                            '1241px'
                        ],
                        [
                            "eid496",
                            "left",
                            0,
                            0,
                            "linear",
                            "${pelletsmotion3Copy4}",
                            '1286px',
                            '1286px'
                        ],
                        [
                            "eid358",
                            "top",
                            0,
                            0,
                            "linear",
                            "${pelletstest5Copy6}",
                            '449px',
                            '449px'
                        ],
                        [
                            "eid478",
                            "scaleY",
                            0,
                            0,
                            "linear",
                            "${pelletstest5Copy9}",
                            '0.92',
                            '0.92'
                        ],
                        [
                            "eid384",
                            "scaleY",
                            0,
                            0,
                            "linear",
                            "${pelletstest5Copy2}",
                            '0.9',
                            '0.9'
                        ],
                        [
                            "eid369",
                            "top",
                            0,
                            0,
                            "linear",
                            "${pelletsmotion3Copy}",
                            '1374px',
                            '1374px'
                        ],
                        [
                            "eid137",
                            "scaleY",
                            0,
                            0,
                            "linear",
                            "${pelletstest5Copy8}",
                            '0.94',
                            '0.94'
                        ],
                        [
                            "eid409",
                            "top",
                            4554,
                            0,
                            "linear",
                            "${manurelight2}",
                            '516px',
                            '516px'
                        ],
                        [
                            "eid381",
                            "scaleY",
                            0,
                            0,
                            "linear",
                            "${pelletsmotion3}",
                            '1.12999',
                            '1.12999'
                        ],
                        [
                            "eid382",
                            "top",
                            0,
                            0,
                            "linear",
                            "${pelletsmotion3}",
                            '1151px',
                            '1151px'
                        ],
                        [
                            "eid380",
                            "scaleX",
                            0,
                            0,
                            "linear",
                            "${pelletsmotion3}",
                            '1.12999',
                            '1.12999'
                        ],
                        [
                            "eid197",
                            "rotateZ",
                            0,
                            0,
                            "linear",
                            "${arrow2Copy5}",
                            '180deg',
                            '180deg'
                        ],
                        [
                            "eid394",
                            "top",
                            0,
                            0,
                            "linear",
                            "${arrow2Copy6}",
                            '253px',
                            '253px'
                        ],
                        [
                            "eid432",
                            "left",
                            0,
                            0,
                            "linear",
                            "${pelletstest5Copy8}",
                            '1944px',
                            '1944px'
                        ],
                        [
                            "eid243",
                            "scaleX",
                            0,
                            0,
                            "linear",
                            "${pinmixtootipCopy}",
                            '0.50732',
                            '0.50732'
                        ],
                        [
                            "eid476",
                            "top",
                            0,
                            0,
                            "linear",
                            "${arrow2Copy5}",
                            '877px',
                            '877px'
                        ],
                        [
                            "eid240",
                            "top",
                            0,
                            0,
                            "linear",
                            "${pinmixtootipCopy}",
                            '695px',
                            '695px'
                        ],
                        [
                            "eid474",
                            "left",
                            0,
                            0,
                            "linear",
                            "${arrow2Copy}",
                            '2170px',
                            '2170px'
                        ],
                        [
                            "eid234",
                            "top",
                            0,
                            0,
                            "linear",
                            "${pinmixtootip}",
                            '663px',
                            '663px'
                        ],
                        [
                            "eid289",
                            "top",
                            0,
                            0,
                            "linear",
                            "${pelletsmotion22}",
                            '838px',
                            '838px'
                        ],
                        [
                            "eid408",
                            "top",
                            4554,
                            0,
                            "linear",
                            "${bigmanure}",
                            '588px',
                            '588px'
                        ],
                        [
                            "eid233",
                            "left",
                            0,
                            0,
                            "linear",
                            "${pinmixtootip}",
                            '449px',
                            '449px'
                        ],
                        [
                            "eid244",
                            "left",
                            0,
                            0,
                            "linear",
                            "${pinmixtootipCopy}",
                            '23px',
                            '23px'
                        ],
                        [
                            "eid417",
                            "scaleY",
                            4554,
                            0,
                            "linear",
                            "${manurelight2}",
                            '1.14999',
                            '1.14999'
                        ],
                        [
                            "eid136",
                            "scaleX",
                            0,
                            0,
                            "linear",
                            "${pelletstest5Copy8}",
                            '0.94',
                            '0.94'
                        ],
                        [
                            "eid285",
                            "left",
                            0,
                            0,
                            "linear",
                            "${pelletstest5}",
                            '340px',
                            '340px'
                        ],
                        [
                            "eid256",
                            "top",
                            0,
                            0,
                            "linear",
                            "${pinmixtootipCopy2}",
                            '1271px',
                            '1271px'
                        ],
                        [
                            "eid192",
                            "rotateZ",
                            0,
                            0,
                            "linear",
                            "${arrow2Copy4}",
                            '180deg',
                            '180deg'
                        ],
                        [
                            "eid396",
                            "top",
                            0,
                            4554,
                            "linear",
                            "${pelletstest5Copy8}",
                            '1088px',
                            '1327px'
                        ],
                        [
                            "eid403",
                            "left",
                            4554,
                            0,
                            "linear",
                            "${bigmanure}",
                            '492px',
                            '492px'
                        ],
                        [
                            "eid488",
                            "left",
                            0,
                            0,
                            "linear",
                            "${pelletstest5Copy}",
                            '1617px',
                            '1617px'
                        ],
                        [
                            "eid330",
                            "left",
                            0,
                            0,
                            "linear",
                            "${pelletstest5Copy4}",
                            '1117px',
                            '1117px'
                        ],
                        [
                            "eid294",
                            "left",
                            0,
                            0,
                            "linear",
                            "${pelletstest5Copy6}",
                            '872px',
                            '872px'
                        ],
                        [
                            "eid395",
                            "left",
                            0,
                            0,
                            "linear",
                            "${arrow2Copy6}",
                            '926px',
                            '926px'
                        ],
                        [
                            "eid308",
                            "left",
                            0,
                            0,
                            "linear",
                            "${arrow2}",
                            '1396px',
                            '1396px'
                        ],
                        [
                            "eid481",
                            "scaleX",
                            0,
                            0,
                            "linear",
                            "${pelletsmotion3Copy2}",
                            '0.93',
                            '0.93'
                        ],
                        [
                            "eid499",
                            "left",
                            0,
                            0,
                            "linear",
                            "${pelletsmotion3Copy2}",
                            '1514px',
                            '1514px'
                        ]
                    ]
                }
            },
            "pellets": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            id: 'pellets',
                            type: 'image',
                            rect: ['0px', '0px', '2000px', '1861px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/pellets.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '2000px', '1861px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: true,
                    data: [

                    ]
                }
            },
            "pelletstest": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'image',
                            filter: [0, 0, 2, 10, 0, 0, 1, 0, 'rgba(0,0,0,0)', 0, 0, 0],
                            fi: [0, 0, 2, 10, 0, 0, 1, 0, 'rgba(0,0,0,0)', 0, 0, 0],
                            id: 'pelletstest3',
                            rect: ['0px', '0px', '26px', '572px', 'auto', 'auto'],
                            clip: 'rect(19px 26px 190px 0px)',
                            fill: ['rgba(0,0,0,0)', 'images/pelletstest.svg', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '26px', '572px']
                        }
                    }
                },
                timeline: {
                    duration: 4000,
                    autoPlay: true,
                    data: [
                        [
                            "eid340",
                            "filter.hue-rotate",
                            0,
                            0,
                            "linear",
                            "${pelletstest3}",
                            '0deg',
                            '0deg'
                        ],
                        [
                            "eid335",
                            "filter.saturate",
                            0,
                            0,
                            "linear",
                            "${pelletstest3}",
                            '10',
                            '10'
                        ],
                        [
                            "eid8",
                            "location",
                            0,
                            4000,
                            "linear",
                            "${pelletstest3}",
                            [[13, 286, 0, 0, 0, 0,0],[13, 621.41, 0, 0, 0, 0,335.41]]
                        ],
                        [
                            "eid339",
                            "filter.grayscale",
                            0,
                            0,
                            "linear",
                            "${pelletstest3}",
                            '1',
                            '1'
                        ],
                        [
                            "eid334",
                            "filter.contrast",
                            0,
                            0,
                            "linear",
                            "${pelletstest3}",
                            '2',
                            '2'
                        ],
                        [
                            "eid14",
                            "clip",
                            0,
                            4000,
                            "linear",
                            "${pelletstest3}",
                            [354,26,525,0],
                            [19,26,190,0],
                            {valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}
                        ],
                        [
                            "eid341",
                            "filter.sepia",
                            0,
                            0,
                            "linear",
                            "${pelletstest3}",
                            '0',
                            '0'
                        ]
                    ]
                }
            },
            "pelletsmotion": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'image',
                            fi: [0, 0, 2, 10, 0, 0, 1, 0, 'rgba(0,0,0,0)', 0, 0, 0],
                            filter: [0, 0, 2, 10, 0, 0, 1, 0, 'rgba(0,0,0,0)', 0, 0, 0],
                            id: 'pelletsmotion',
                            rect: ['0px', '0px', '730px', '26px', 'auto', 'auto'],
                            clip: 'rect(0px 431px 26px 68px)',
                            fill: ['rgba(0,0,0,0)', 'images/pelletsmotion.svg', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '730px', '26px']
                        }
                    }
                },
                timeline: {
                    duration: 4000,
                    autoPlay: true,
                    data: [
                        [
                            "eid344",
                            "filter.contrast",
                            0,
                            0,
                            "linear",
                            "${pelletsmotion}",
                            '2',
                            '2'
                        ],
                        [
                            "eid25",
                            "clip",
                            0,
                            4000,
                            "linear",
                            "${pelletsmotion}",
                            [0,571,26,210],
                            [0,431,26,68],
                            {valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}
                        ],
                        [
                            "eid343",
                            "filter.saturate",
                            0,
                            0,
                            "linear",
                            "${pelletsmotion}",
                            '10',
                            '10'
                        ],
                        [
                            "eid342",
                            "filter.grayscale",
                            0,
                            0,
                            "linear",
                            "${pelletsmotion}",
                            '1',
                            '1'
                        ],
                        [
                            "eid24",
                            "location",
                            0,
                            4000,
                            "linear",
                            "${pelletsmotion}",
                            [[365, 13, 0, 0, 0, 0,0],[507.67, 13, 0, 0, 0, 0,142.67]]
                        ]
                    ]
                }
            },
            "pelletsmotion2": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'image',
                            id: 'pelletstest',
                            rect: ['268px', '-204px', '26px', '572px', 'auto', 'auto'],
                            filter: [0, 0, 2, 10, 0, 0, 1, 0, 'rgba(0,0,0,0)', 0, 0, 0],
                            transform: [[], ['76'], [0, 0, 0], [1, 1, 1]],
                            fi: [0, 0, 2, 10, 0, 0, 1, 0, 'rgba(0,0,0,0)', 0, 0, 0],
                            clip: 'rect(317px 25px 576px 0px)',
                            fill: ['rgba(0,0,0,0)', 'images/pelletstest.svg', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '561px', '164px']
                        }
                    }
                },
                timeline: {
                    duration: 4000,
                    autoPlay: true,
                    data: [
                        [
                            "eid347",
                            "filter.contrast",
                            0,
                            0,
                            "linear",
                            "${pelletstest}",
                            '2',
                            '2'
                        ],
                        [
                            "eid28",
                            "location",
                            0,
                            4000,
                            "linear",
                            "${pelletstest}",
                            [[154, 109, 0, 0, 0, 0,0],[416.87, 43.28, 0, 0, 0, 0,270.96]]
                        ],
                        [
                            "eid346",
                            "filter.saturate",
                            0,
                            0,
                            "linear",
                            "${pelletstest}",
                            '10',
                            '10'
                        ],
                        [
                            "eid38",
                            "clip",
                            0,
                            4000,
                            "linear",
                            "${pelletstest}",
                            [53,26,308,-1],
                            [317,25,576,0],
                            {valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}
                        ],
                        [
                            "eid345",
                            "filter.grayscale",
                            0,
                            0,
                            "linear",
                            "${pelletstest}",
                            '1',
                            '1'
                        ]
                    ]
                }
            },
            "pelletsmotion3": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'rect',
                            id: 'pelletsmotion2Copy',
                            symbolName: 'pelletsmotion',
                            clip: 'rect(0px 423px 26px 231px)',
                            rect: ['-142px', '0px', '730', '26', 'auto', 'auto']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '730px', '26px']
                        }
                    }
                },
                timeline: {
                    duration: 4000,
                    autoPlay: true,
                    data: [
                        [
                            "eid49",
                            "location",
                            0,
                            4000,
                            "linear",
                            "${pelletsmotion2Copy}",
                            [[212.51, 13.01, 0, 0, 0, 0,0],[365.01, 13, 0, 0, 0, 0,152.5]]
                        ],
                        [
                            "eid52",
                            "clip",
                            0,
                            4000,
                            "linear",
                            "${pelletsmotion2Copy}",
                            [0,600,26,383],
                            [0,423,26,231],
                            {valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}
                        ]
                    ]
                }
            },
            "arrow": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '11px', '12px', 'auto', 'auto'],
                            id: 'arrow',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/arrow.svg', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '11px', '12px']
                        }
                    }
                },
                timeline: {
                    duration: 4000,
                    autoPlay: true,
                    data: [
                        [
                            "eid150",
                            "location",
                            0,
                            4000,
                            "linear",
                            "${arrow}",
                            [[5.5, 6, 0, 0, 0, 0,0],[520.23, 6, 0, 0, 0, 0,514.73]]
                        ]
                    ]
                }
            },
            "pinmixtootip": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '265px', '106px', 'auto', 'auto'],
                            opacity: '1',
                            id: 'pinmixertooltip',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'rect',
                            fill: ['rgba(255,255,255,1)']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '265px', '106px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: true,
                    data: [

                    ]
                }
            },
            "truckload": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['74px', '-102px', '35px', '127px', 'auto', 'auto'],
                            opacity: '1',
                            id: 'Rectangle2',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'rect',
                            fill: ['rgba(255,255,255,1.00)']
                        },
                        {
                            id: 'pellettruckmove2',
                            rect: ['34px', '10px', '75px', '23px', 'auto', 'auto'],
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/pellettruckmove.png', '0px', '0px']
                        },
                        {
                            type: 'image',
                            fi: null,
                            id: 'truck3',
                            filter: [0, 0, 1, 1, 0, 0, 0, 0, 'rgba(0,0,0,0)', 0, 0, 0],
                            rect: ['0px', '0px', '118px', '63px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/truck3.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '118px', '63px']
                        }
                    }
                },
                timeline: {
                    duration: 7000,
                    autoPlay: true,
                    data: [
                        [
                            "eid587",
                            "top",
                            0,
                            591,
                            "linear",
                            "${Rectangle2}",
                            '-102px',
                            '0px'
                        ],
                        [
                            "eid268",
                            "top",
                            591,
                            1409,
                            "linear",
                            "${Rectangle2}",
                            '0px',
                            '14px'
                        ],
                        [
                            "eid588",
                            "top",
                            2000,
                            62,
                            "linear",
                            "${Rectangle2}",
                            '14px',
                            '-102px'
                        ],
                        [
                            "eid265",
                            "left",
                            0,
                            2062,
                            "linear",
                            "${Rectangle2}",
                            '74px',
                            '79px'
                        ],
                        [
                            "eid269",
                            "left",
                            0,
                            2000,
                            "linear",
                            "${pellettruckmove2}",
                            '38px',
                            '39px'
                        ],
                        [
                            "eid254",
                            "left",
                            2000,
                            3000,
                            "linear",
                            "${pellettruckmove2}",
                            '39px',
                            '302px'
                        ],
                        [
                            "eid256",
                            "left",
                            5000,
                            2000,
                            "linear",
                            "${pellettruckmove2}",
                            '302px',
                            '34px'
                        ],
                        [
                            "eid249",
                            "top",
                            0,
                            2000,
                            "linear",
                            "${pellettruckmove2}",
                            '10px',
                            '2px'
                        ],
                        [
                            "eid257",
                            "top",
                            5000,
                            160,
                            "linear",
                            "${pellettruckmove2}",
                            '0px',
                            '13px'
                        ],
                        [
                            "eid251",
                            "left",
                            2000,
                            3000,
                            "linear",
                            "${truck3}",
                            '0px',
                            '266px'
                        ],
                        [
                            "eid253",
                            "left",
                            5000,
                            2000,
                            "linear",
                            "${truck3}",
                            '266px',
                            '0px'
                        ],
                        [
                            "eid757",
                            "width",
                            0,
                            2000,
                            "linear",
                            "${Rectangle2}",
                            '35px',
                            '30px'
                        ],
                        [
                            "eid759",
                            "opacity",
                            0,
                            700,
                            "linear",
                            "${Rectangle2}",
                            '1',
                            '0'
                        ],
                        [
                            "eid761",
                            "opacity",
                            2000,
                            0,
                            "linear",
                            "${Rectangle2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid753",
                            "height",
                            0,
                            700,
                            "linear",
                            "${Rectangle2}",
                            '112px',
                            '55px'
                        ],
                        [
                            "eid266",
                            "height",
                            700,
                            1300,
                            "linear",
                            "${Rectangle2}",
                            '55px',
                            '41px'
                        ],
                        [
                            "eid267",
                            "height",
                            2000,
                            62,
                            "linear",
                            "${Rectangle2}",
                            '41px',
                            '127px'
                        ]
                    ]
                }
            },
            "manureflow": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['102px', '87px', '17px', '2px', 'auto', 'auto'],
                            filter: [0, 0, 1, 1, 0, 0, 0, 1, 'rgba(0,0,0,0)', 0, 0, 0],
                            fi: [0, 0, 1, 1, 0, 0, 0, 1, 'rgba(0,0,0,0)', 0, 0, 0],
                            id: 'Rectangle3',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'rect',
                            fill: ['rgba(231,183,126,1.00)']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '26px', '2px']
                        }
                    }
                },
                timeline: {
                    duration: 2101,
                    autoPlay: true,
                    data: [
                        [
                            "eid160",
                            "background-color",
                            0,
                            0,
                            "linear",
                            "${Rectangle3}",
                            'rgba(231,183,126,1.00)',
                            'rgba(231,183,126,1.00)'
                        ],
                        [
                            "eid175",
                            "top",
                            0,
                            2101,
                            "linear",
                            "${Rectangle3}",
                            '87px',
                            '145px'
                        ],
                        [
                            "eid165",
                            "filter.blur",
                            0,
                            0,
                            "linear",
                            "${Rectangle3}",
                            '1px',
                            '1px'
                        ],
                        [
                            "eid402",
                            "left",
                            0,
                            0,
                            "linear",
                            "${Rectangle3}",
                            '102px',
                            '102px'
                        ],
                        [
                            "eid163",
                            "width",
                            0,
                            0,
                            "linear",
                            "${Rectangle3}",
                            '17px',
                            '17px'
                        ]
                    ]
                }
            },
            "pellet1": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '21px', '112px', 'auto', 'auto'],
                            filter: [0, 0, 1, 1, 0, 0, 0, 1, 'rgba(0,0,0,0)', 0, 0, 0],
                            fi: [0, 0, 1, 1, 0, 0, 0, 1, 'rgba(0,0,0,0)', 0, 0, 0],
                            id: 'Ellipse2',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'ellipse',
                            fill: ['rgba(97,63,23,1)', [64, 50, 'true', 'farthest-corner', [['rgba(122,87,65,1.00)', 0], ['rgba(63,37,10,1.00)', 100]]]]
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '21px', '21px']
                        }
                    }
                },
                timeline: {
                    duration: 2000,
                    autoPlay: true,
                    data: [
                        [
                            "eid150",
                            "width",
                            0,
                            0,
                            "linear",
                            "${Ellipse2}",
                            '21px',
                            '21px'
                        ],
                        [
                            "eid152",
                            "filter.blur",
                            0,
                            0,
                            "linear",
                            "${Ellipse2}",
                            '1px',
                            '1px'
                        ],
                        [
                            "eid26",
                            "top",
                            0,
                            2000,
                            "linear",
                            "${Ellipse2}",
                            '6px',
                            '0px'
                        ],
                        [
                            "eid419",
                            "left",
                            0,
                            0,
                            "linear",
                            "${Ellipse2}",
                            '0px',
                            '0px'
                        ],
                        [
                            "eid420",
                            "left",
                            2000,
                            0,
                            "linear",
                            "${Ellipse2}",
                            '0px',
                            '0px'
                        ],
                        [
                            "eid151",
                            "height",
                            0,
                            2000,
                            "linear",
                            "${Ellipse2}",
                            '6px',
                            '112px'
                        ]
                    ]
                }
            },
            "arrow6": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'image',
                            id: 'arrow',
                            rect: ['1px', '140px', '10px', '12px', 'auto', 'auto'],
                            transform: [[], ['90'], [0, 0, 0], [1, 1, 1]],
                            fill: ['rgba(0,0,0,0)', 'images/arrow.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '12px', '10px']
                        }
                    }
                },
                timeline: {
                    duration: 4000,
                    autoPlay: true,
                    data: [
                        [
                            "eid787",
                            "top",
                            0,
                            4000,
                            "linear",
                            "${arrow}",
                            '-1px',
                            '140px'
                        ]
                    ]
                }
            }
        };

    AdobeEdge.registerCompositionDefn(compId, symbols, fonts, scripts, resources, opts);

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("index_edgeActions.js");
})("EDGE-338773876");
