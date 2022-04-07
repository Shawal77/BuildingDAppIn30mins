// Automatically generated with Reach 0.1.9 (d3fd55fe)
/* eslint-disable */
export const _version = '0.1.9';
export const _versionHash = '0.1.9 (d3fd55fe)';
export const _backendVersion = 11;

export function getExports(s) {
  const stdlib = s.reachStdlib;
  return {
    };
  };
export function _getEvents(s) {
  const stdlib = s.reachStdlib;
  return {
    };
  };
export function _getViews(s, viewlib) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Address;
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Null;
  const ctc3 = stdlib.T_Bool;
  const ctc4 = stdlib.T_Object({
    came: ctc3
    });
  const ctc5 = stdlib.T_Data({
    None: ctc2,
    Some: ctc4
    });
  const map0_ctc = ctc5;
  
  
  return {
    infos: {
      },
    views: {
      3: [ctc0, ctc1, ctc1, ctc1]
      }
    };
  
  };
export function _getMaps(s) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_Bool;
  const ctc2 = stdlib.T_Object({
    came: ctc1
    });
  const ctc3 = stdlib.T_Data({
    None: ctc0,
    Some: ctc2
    });
  const ctc4 = stdlib.T_Tuple([ctc3]);
  return {
    mapDataTy: ctc4
    };
  };
export async function Admin(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Admin expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Admin expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_Bool;
  const ctc2 = stdlib.T_Object({
    came: ctc1
    });
  const ctc3 = stdlib.T_Data({
    None: ctc0,
    Some: ctc2
    });
  const ctc4 = stdlib.T_UInt;
  const ctc5 = stdlib.T_Tuple([]);
  const ctc6 = stdlib.T_Address;
  const ctc7 = stdlib.T_Tuple([ctc6]);
  const ctc8 = stdlib.T_Data({
    Attendee_iWillGo0_63: ctc5,
    CheckIn_theyCame0_63: ctc7
    });
  
  const map0_ctc = ctc3;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: false,
    ty: map0_ctc
    });
  
  
  const v266 = stdlib.protect(ctc4, interact.deadline, 'for Admin\'s interact field deadline');
  const v267 = stdlib.protect(ctc4, interact.price, 'for Admin\'s interact field price');
  
  const txn1 = await (ctc.sendrecv({
    args: [v267, v266],
    evt_cnt: 2,
    funcNum: 0,
    lct: stdlib.checkedBigNumberify('./index.rsh:23:7:dot', stdlib.UInt_max, 0),
    onlyIf: true,
    out_tys: [ctc4, ctc4],
    pay: [stdlib.checkedBigNumberify('./index.rsh:23:7:decimal', stdlib.UInt_max, 0), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      
      const {data: [v271, v272], secs: v274, time: v273, didSend: v29, from: v270 } = txn1;
      
      ;
      
      const v276 = stdlib.checkedBigNumberify('./index.rsh:31:30:decimal', stdlib.UInt_max, 0);
      const v277 = true;
      const v278 = v273;
      
      if (await (async () => {
        
        return v277;})()) {
        sim_r.isHalt = false;
        }
      else {
        const v429 = stdlib.mul(v276, v271);
        sim_r.txns.push({
          amt: v429,
          kind: 'from',
          to: v270,
          tok: undefined /* Nothing */
          });
        sim_r.txns.push({
          kind: 'halt',
          tok: undefined /* Nothing */
          })
        sim_r.isHalt = true;
        }
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc4, ctc4],
    waitIfNotPresent: false
    }));
  const {data: [v271, v272], secs: v274, time: v273, didSend: v29, from: v270 } = txn1;
  ;
  stdlib.protect(ctc0, await interact.ready(), {
    at: './index.rsh:24:21:application',
    fs: ['at ./index.rsh:24:21:application call to [unknown function] (defined at: ./index.rsh:24:21:function exp)', 'at ./index.rsh:24:21:application call to "liftedInteract" (defined at: ./index.rsh:24:21:application)'],
    msg: 'ready',
    who: 'Admin'
    });
  
  let v276 = stdlib.checkedBigNumberify('./index.rsh:31:30:decimal', stdlib.UInt_max, 0);
  let v277 = true;
  let v278 = v273;
  
  while (await (async () => {
    
    return v277;})()) {
    const txn2 = await (ctc.recv({
      didSend: false,
      evt_cnt: 1,
      funcNum: 2,
      out_tys: [ctc8],
      timeoutAt: ['time', v272],
      waitIfNotPresent: false
      }));
    if (txn2.didTimeout) {
      const txn3 = await (ctc.recv({
        didSend: false,
        evt_cnt: 1,
        funcNum: 3,
        out_tys: [ctc5],
        timeoutAt: undefined /* mto */,
        waitIfNotPresent: false
        }));
      const {data: [v419], secs: v421, time: v420, didSend: v238, from: v418 } = txn3;
      undefined /* setApiDetails */;
      ;
      const v422 = true;
      await txn3.getOutput('CheckIn_timesUp', 'v422', ctc1, v422);
      const cv276 = v276;
      const cv277 = false;
      const cv278 = v420;
      
      v276 = cv276;
      v277 = cv277;
      v278 = cv278;
      
      continue;
      }
    else {
      const {data: [v328], secs: v330, time: v329, didSend: v174, from: v327 } = txn2;
      switch (v328[0]) {
        case 'Attendee_iWillGo0_63': {
          const v331 = v328[1];
          undefined /* setApiDetails */;
          ;
          const v341 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v327), null);
          let v342;
          switch (v341[0]) {
            case 'None': {
              const v343 = v341[1];
              v342 = true;
              
              break;
              }
            case 'Some': {
              const v344 = v341[1];
              v342 = false;
              
              break;
              }
            }
          stdlib.assert(v342, {
            at: './index.rsh:48:26:application',
            fs: ['at ./index.rsh:47:20:application call to [unknown function] (defined at: ./index.rsh:47:20:function exp)'],
            msg: 'they haven\'t been RSVPed',
            who: 'Admin'
            });
          const v345 = {
            came: false
            };
          await stdlib.mapSet(map0, v327, v345);
          const v346 = true;
          await txn2.getOutput('Attendee_iWillGo', 'v346', ctc1, v346);
          const v352 = stdlib.add(v276, stdlib.checkedBigNumberify('./index.rsh:52:47:decimal', stdlib.UInt_max, 1));
          const cv276 = v352;
          const cv277 = true;
          const cv278 = v329;
          
          v276 = cv276;
          v277 = cv277;
          v278 = cv278;
          
          continue;
          break;
          }
        case 'CheckIn_theyCame0_63': {
          const v373 = v328[1];
          undefined /* setApiDetails */;
          ;
          const v397 = v373[stdlib.checkedBigNumberify('./index.rsh:55:17:spread', stdlib.UInt_max, 0)];
          const v398 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v397), null);
          let v399;
          switch (v398[0]) {
            case 'None': {
              const v400 = v398[1];
              v399 = false;
              
              break;
              }
            case 'Some': {
              const v401 = v398[1];
              v399 = true;
              
              break;
              }
            }
          stdlib.assert(v399, {
            at: './index.rsh:62:26:application',
            fs: ['at ./index.rsh:61:24:application call to [unknown function] (defined at: ./index.rsh:61:24:function exp)'],
            msg: 'they RSVPd',
            who: 'Admin'
            });
          const v402 = stdlib.addressEq(v327, v270);
          stdlib.assert(v402, {
            at: './index.rsh:63:26:application',
            fs: ['at ./index.rsh:61:24:application call to [unknown function] (defined at: ./index.rsh:61:24:function exp)'],
            msg: 'You\'re the boss',
            who: 'Admin'
            });
          ;
          await stdlib.mapSet(map0, v397, undefined /* Nothing */);
          const v407 = true;
          await txn2.getOutput('CheckIn_theyCame', 'v407', ctc1, v407);
          const v413 = stdlib.sub(v276, stdlib.checkedBigNumberify('./index.rsh:67:46:decimal', stdlib.UInt_max, 1));
          const cv276 = v413;
          const cv277 = true;
          const cv278 = v329;
          
          v276 = cv276;
          v277 = cv277;
          v278 = cv278;
          
          continue;
          break;
          }
        }}
    
    }
  const v429 = stdlib.mul(v276, v271);
  ;
  return;
  
  
  };
export async function Attendee_iWillGo(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Attendee_iWillGo expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Attendee_iWillGo expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_Bool;
  const ctc2 = stdlib.T_Object({
    came: ctc1
    });
  const ctc3 = stdlib.T_Data({
    None: ctc0,
    Some: ctc2
    });
  const ctc4 = stdlib.T_Address;
  const ctc5 = stdlib.T_UInt;
  const ctc6 = stdlib.T_Tuple([]);
  const ctc7 = stdlib.T_Tuple([ctc4]);
  const ctc8 = stdlib.T_Data({
    Attendee_iWillGo0_63: ctc6,
    CheckIn_theyCame0_63: ctc7
    });
  
  const map0_ctc = ctc3;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: true,
    ty: map0_ctc
    });
  
  
  const [v270, v271, v272, v276] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 3), [ctc4, ctc5, ctc5, ctc5]);
  const v298 = ctc.selfAddress();
  const v300 = stdlib.protect(ctc6, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:41:19:application call to [unknown function] (defined at: ./index.rsh:41:19:function exp)', 'at ./index.rsh:31:23:application call to "runAttendee_iWillGo0_63" (defined at: ./index.rsh:40:15:function exp)', 'at ./index.rsh:31:23:application call to [unknown function] (defined at: ./index.rsh:31:23:function exp)'],
    msg: 'in',
    who: 'Attendee_iWillGo'
    });
  const v302 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v298), null);
  let v303;
  switch (v302[0]) {
    case 'None': {
      const v304 = v302[1];
      v303 = true;
      
      break;
      }
    case 'Some': {
      const v305 = v302[1];
      v303 = false;
      
      break;
      }
    }
  stdlib.assert(v303, {
    at: './index.rsh:44:26:application',
    fs: ['at ./index.rsh:41:19:application call to [unknown function] (defined at: ./index.rsh:41:19:function exp)', 'at ./index.rsh:41:19:application call to [unknown function] (defined at: ./index.rsh:41:19:function exp)', 'at ./index.rsh:31:23:application call to "runAttendee_iWillGo0_63" (defined at: ./index.rsh:40:15:function exp)', 'at ./index.rsh:31:23:application call to [unknown function] (defined at: ./index.rsh:31:23:function exp)'],
    msg: 'they haven\'t been RSVPed',
    who: 'Attendee_iWillGo'
    });
  const v308 = ['Attendee_iWillGo0_63', v300];
  
  const txn1 = await (ctc.sendrecv({
    args: [v270, v271, v272, v276, v308],
    evt_cnt: 1,
    funcNum: 2,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 0),
    onlyIf: true,
    out_tys: [ctc8],
    pay: [v271, []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      
      const {data: [v328], secs: v330, time: v329, didSend: v174, from: v327 } = txn1;
      
      switch (v328[0]) {
        case 'Attendee_iWillGo0_63': {
          const v331 = v328[1];
          sim_r.txns.push({
            kind: 'api',
            who: "Attendee_iWillGo"
            });
          sim_r.txns.push({
            amt: v271,
            kind: 'to',
            tok: undefined /* Nothing */
            });
          const v341 = stdlib.protect(map0_ctc, await stdlib.simMapRef(sim_r, 0, v327), null);
          let v342;
          switch (v341[0]) {
            case 'None': {
              const v343 = v341[1];
              v342 = true;
              
              break;
              }
            case 'Some': {
              const v344 = v341[1];
              v342 = false;
              
              break;
              }
            }
          ;
          const v345 = {
            came: false
            };
          await stdlib.simMapSet(sim_r, 0, v327, v345);
          const v346 = true;
          const v347 = await txn1.getOutput('Attendee_iWillGo', 'v346', ctc1, v346);
          
          const v352 = stdlib.add(v276, stdlib.checkedBigNumberify('./index.rsh:52:47:decimal', stdlib.UInt_max, 1));
          const v839 = v352;
          sim_r.isHalt = false;
          
          break;
          }
        case 'CheckIn_theyCame0_63': {
          const v373 = v328[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc4, ctc5, ctc5, ctc5, ctc8],
    waitIfNotPresent: false
    }));
  const {data: [v328], secs: v330, time: v329, didSend: v174, from: v327 } = txn1;
  switch (v328[0]) {
    case 'Attendee_iWillGo0_63': {
      const v331 = v328[1];
      undefined /* setApiDetails */;
      ;
      const v341 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v327), null);
      let v342;
      switch (v341[0]) {
        case 'None': {
          const v343 = v341[1];
          v342 = true;
          
          break;
          }
        case 'Some': {
          const v344 = v341[1];
          v342 = false;
          
          break;
          }
        }
      stdlib.assert(v342, {
        at: './index.rsh:48:26:application',
        fs: ['at ./index.rsh:47:20:application call to [unknown function] (defined at: ./index.rsh:47:20:function exp)'],
        msg: 'they haven\'t been RSVPed',
        who: 'Attendee_iWillGo'
        });
      const v345 = {
        came: false
        };
      await stdlib.mapSet(map0, v327, v345);
      const v346 = true;
      const v347 = await txn1.getOutput('Attendee_iWillGo', 'v346', ctc1, v346);
      if (v174) {
        stdlib.protect(ctc0, await interact.out(v331, v347), {
          at: './index.rsh:40:16:application',
          fs: ['at ./index.rsh:40:16:application call to [unknown function] (defined at: ./index.rsh:40:16:function exp)', 'at ./index.rsh:50:22:application call to "k" (defined at: ./index.rsh:47:20:function exp)', 'at ./index.rsh:47:20:application call to [unknown function] (defined at: ./index.rsh:47:20:function exp)'],
          msg: 'out',
          who: 'Attendee_iWillGo'
          });
        }
      else {
        }
      
      const v352 = stdlib.add(v276, stdlib.checkedBigNumberify('./index.rsh:52:47:decimal', stdlib.UInt_max, 1));
      const v839 = v352;
      return;
      
      break;
      }
    case 'CheckIn_theyCame0_63': {
      const v373 = v328[1];
      return;
      break;
      }
    }
  
  
  };
export async function CheckIn_theyCame(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for CheckIn_theyCame expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for CheckIn_theyCame expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_Bool;
  const ctc2 = stdlib.T_Object({
    came: ctc1
    });
  const ctc3 = stdlib.T_Data({
    None: ctc0,
    Some: ctc2
    });
  const ctc4 = stdlib.T_Address;
  const ctc5 = stdlib.T_UInt;
  const ctc6 = stdlib.T_Tuple([ctc4]);
  const ctc7 = stdlib.T_Tuple([]);
  const ctc8 = stdlib.T_Data({
    Attendee_iWillGo0_63: ctc7,
    CheckIn_theyCame0_63: ctc6
    });
  
  const map0_ctc = ctc3;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: true,
    ty: map0_ctc
    });
  
  
  const [v270, v271, v272, v276] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 3), [ctc4, ctc5, ctc5, ctc5]);
  const v310 = ctc.selfAddress();
  const v312 = stdlib.protect(ctc6, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:56:22:application call to [unknown function] (defined at: ./index.rsh:56:22:function exp)', 'at ./index.rsh:31:23:application call to "runCheckIn_theyCame0_63" (defined at: ./index.rsh:55:17:function exp)', 'at ./index.rsh:31:23:application call to [unknown function] (defined at: ./index.rsh:31:23:function exp)'],
    msg: 'in',
    who: 'CheckIn_theyCame'
    });
  const v313 = v312[stdlib.checkedBigNumberify('./index.rsh:55:17:spread', stdlib.UInt_max, 0)];
  const v315 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v313), null);
  let v316;
  switch (v315[0]) {
    case 'None': {
      const v317 = v315[1];
      v316 = false;
      
      break;
      }
    case 'Some': {
      const v318 = v315[1];
      v316 = true;
      
      break;
      }
    }
  stdlib.assert(v316, {
    at: './index.rsh:57:26:application',
    fs: ['at ./index.rsh:56:22:application call to [unknown function] (defined at: ./index.rsh:56:22:function exp)', 'at ./index.rsh:56:22:application call to [unknown function] (defined at: ./index.rsh:56:22:function exp)', 'at ./index.rsh:31:23:application call to "runCheckIn_theyCame0_63" (defined at: ./index.rsh:55:17:function exp)', 'at ./index.rsh:31:23:application call to [unknown function] (defined at: ./index.rsh:31:23:function exp)'],
    msg: 'they RSVPd',
    who: 'CheckIn_theyCame'
    });
  const v319 = stdlib.addressEq(v310, v270);
  stdlib.assert(v319, {
    at: './index.rsh:58:26:application',
    fs: ['at ./index.rsh:56:22:application call to [unknown function] (defined at: ./index.rsh:56:22:function exp)', 'at ./index.rsh:56:22:application call to [unknown function] (defined at: ./index.rsh:56:22:function exp)', 'at ./index.rsh:31:23:application call to "runCheckIn_theyCame0_63" (defined at: ./index.rsh:55:17:function exp)', 'at ./index.rsh:31:23:application call to [unknown function] (defined at: ./index.rsh:31:23:function exp)'],
    msg: 'You\'re the boss',
    who: 'CheckIn_theyCame'
    });
  const v322 = ['CheckIn_theyCame0_63', v312];
  
  const txn1 = await (ctc.sendrecv({
    args: [v270, v271, v272, v276, v322],
    evt_cnt: 1,
    funcNum: 2,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 0),
    onlyIf: true,
    out_tys: [ctc8],
    pay: [stdlib.checkedBigNumberify('./index.rsh:60:22:decimal', stdlib.UInt_max, 0), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      
      const {data: [v328], secs: v330, time: v329, didSend: v174, from: v327 } = txn1;
      
      switch (v328[0]) {
        case 'Attendee_iWillGo0_63': {
          const v331 = v328[1];
          
          break;
          }
        case 'CheckIn_theyCame0_63': {
          const v373 = v328[1];
          sim_r.txns.push({
            kind: 'api',
            who: "CheckIn_theyCame"
            });
          ;
          const v397 = v373[stdlib.checkedBigNumberify('./index.rsh:55:17:spread', stdlib.UInt_max, 0)];
          const v398 = stdlib.protect(map0_ctc, await stdlib.simMapRef(sim_r, 0, v397), null);
          let v399;
          switch (v398[0]) {
            case 'None': {
              const v400 = v398[1];
              v399 = false;
              
              break;
              }
            case 'Some': {
              const v401 = v398[1];
              v399 = true;
              
              break;
              }
            }
          ;
          const v402 = stdlib.addressEq(v327, v270);
          ;
          sim_r.txns.push({
            amt: v271,
            kind: 'from',
            to: v397,
            tok: undefined /* Nothing */
            });
          await stdlib.simMapSet(sim_r, 0, v397, undefined /* Nothing */);
          const v407 = true;
          const v408 = await txn1.getOutput('CheckIn_theyCame', 'v407', ctc1, v407);
          
          const v413 = stdlib.sub(v276, stdlib.checkedBigNumberify('./index.rsh:67:46:decimal', stdlib.UInt_max, 1));
          const v851 = v413;
          sim_r.isHalt = false;
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc4, ctc5, ctc5, ctc5, ctc8],
    waitIfNotPresent: false
    }));
  const {data: [v328], secs: v330, time: v329, didSend: v174, from: v327 } = txn1;
  switch (v328[0]) {
    case 'Attendee_iWillGo0_63': {
      const v331 = v328[1];
      return;
      break;
      }
    case 'CheckIn_theyCame0_63': {
      const v373 = v328[1];
      undefined /* setApiDetails */;
      ;
      const v397 = v373[stdlib.checkedBigNumberify('./index.rsh:55:17:spread', stdlib.UInt_max, 0)];
      const v398 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v397), null);
      let v399;
      switch (v398[0]) {
        case 'None': {
          const v400 = v398[1];
          v399 = false;
          
          break;
          }
        case 'Some': {
          const v401 = v398[1];
          v399 = true;
          
          break;
          }
        }
      stdlib.assert(v399, {
        at: './index.rsh:62:26:application',
        fs: ['at ./index.rsh:61:24:application call to [unknown function] (defined at: ./index.rsh:61:24:function exp)'],
        msg: 'they RSVPd',
        who: 'CheckIn_theyCame'
        });
      const v402 = stdlib.addressEq(v327, v270);
      stdlib.assert(v402, {
        at: './index.rsh:63:26:application',
        fs: ['at ./index.rsh:61:24:application call to [unknown function] (defined at: ./index.rsh:61:24:function exp)'],
        msg: 'You\'re the boss',
        who: 'CheckIn_theyCame'
        });
      ;
      await stdlib.mapSet(map0, v397, undefined /* Nothing */);
      const v407 = true;
      const v408 = await txn1.getOutput('CheckIn_theyCame', 'v407', ctc1, v407);
      if (v174) {
        stdlib.protect(ctc0, await interact.out(v373, v408), {
          at: './index.rsh:55:18:application',
          fs: ['at ./index.rsh:55:18:application call to [unknown function] (defined at: ./index.rsh:55:18:function exp)', 'at ./index.rsh:66:22:application call to "k" (defined at: ./index.rsh:61:24:function exp)', 'at ./index.rsh:61:24:application call to [unknown function] (defined at: ./index.rsh:61:24:function exp)'],
          msg: 'out',
          who: 'CheckIn_theyCame'
          });
        }
      else {
        }
      
      const v413 = stdlib.sub(v276, stdlib.checkedBigNumberify('./index.rsh:67:46:decimal', stdlib.UInt_max, 1));
      const v851 = v413;
      return;
      
      break;
      }
    }
  
  
  };
export async function CheckIn_timesUp(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for CheckIn_timesUp expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for CheckIn_timesUp expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_Bool;
  const ctc2 = stdlib.T_Object({
    came: ctc1
    });
  const ctc3 = stdlib.T_Data({
    None: ctc0,
    Some: ctc2
    });
  const ctc4 = stdlib.T_Address;
  const ctc5 = stdlib.T_UInt;
  const ctc6 = stdlib.T_Tuple([]);
  
  const map0_ctc = ctc3;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: true,
    ty: map0_ctc
    });
  
  
  const [v270, v271, v272, v276] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 3), [ctc4, ctc5, ctc5, ctc5]);
  const v417 = stdlib.protect(ctc6, await interact.in(), {
    at: './index.rsh:71:15:application',
    fs: ['at ./index.rsh:71:15:application call to [unknown function] (defined at: ./index.rsh:71:15:function exp)', 'at ./index.rsh:70:45:application call to [unknown function] (defined at: ./index.rsh:70:45:function exp)'],
    msg: 'in',
    who: 'CheckIn_timesUp'
    });
  
  const txn1 = await (ctc.sendrecv({
    args: [v270, v271, v272, v276, v417],
    evt_cnt: 1,
    funcNum: 3,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 0),
    onlyIf: true,
    out_tys: [ctc6],
    pay: [stdlib.checkedBigNumberify('./index.rsh:71:15:decimal', stdlib.UInt_max, 0), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      
      const {data: [v419], secs: v421, time: v420, didSend: v238, from: v418 } = txn1;
      
      sim_r.txns.push({
        kind: 'api',
        who: "CheckIn_timesUp"
        });
      ;
      const v422 = true;
      const v423 = await txn1.getOutput('CheckIn_timesUp', 'v422', ctc1, v422);
      
      const v858 = stdlib.mul(v276, v271);
      sim_r.txns.push({
        amt: v858,
        kind: 'from',
        to: v270,
        tok: undefined /* Nothing */
        });
      sim_r.txns.push({
        kind: 'halt',
        tok: undefined /* Nothing */
        })
      sim_r.isHalt = true;
      
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc4, ctc5, ctc5, ctc5, ctc6],
    waitIfNotPresent: false
    }));
  const {data: [v419], secs: v421, time: v420, didSend: v238, from: v418 } = txn1;
  undefined /* setApiDetails */;
  ;
  const v422 = true;
  const v423 = await txn1.getOutput('CheckIn_timesUp', 'v422', ctc1, v422);
  stdlib.protect(ctc0, await interact.out(v419, v423), {
    at: './index.rsh:71:15:application',
    fs: ['at ./index.rsh:71:15:application call to [unknown function] (defined at: ./index.rsh:71:15:function exp)', 'at ./index.rsh:72:16:application call to "k" (defined at: ./index.rsh:71:15:function exp)', 'at ./index.rsh:70:45:application call to [unknown function] (defined at: ./index.rsh:70:45:function exp)'],
    msg: 'out',
    who: 'CheckIn_timesUp'
    });
  
  const v858 = stdlib.mul(v276, v271);
  ;
  return;
  
  
  
  };
const _ALGO = {
  ABI: {
    impure: [`Attendee_iWillGo()byte`, `CheckIn_theyCame(address)byte`, `CheckIn_timesUp()byte`],
    pure: [],
    sigs: [`Attendee_iWillGo()byte`, `CheckIn_theyCame(address)byte`, `CheckIn_timesUp()byte`]
    },
  appApproval: `BiAJAAEDCICznaYF1NPAmwooIDAmBAEAAAEBAgAAIjUAMRhBAp8pZEkiWzUBJVs1AjEZIxJBAAgxACgrZkICbjYaABdJQQBBIjUEIzUGSSEEDEAAH0khBQxAAAghBRJEKUIAQiEEEkQ2GgE1/yo0/1BCAIiBs/b77wMSRCk1/yg0/1AyA1BCAHM2GgIXNQQ2GgM2GgEXSYECDEABT0kkDEAAWCQSRCQ0ARJENARJIhJMNAISEUQoZEk1AyEGWzX/STUFNf6ABMiaD7s0/lCwMgY0/w9EgAkAAAAAAAABpgGwKjUHNANXACA0AyEHWzT/NAMhCFsiMgZCATNIJDQBEkQ0BEkiEkw0AhIRRChkSTUDSUpXACA1/yEHWzX+IQZbNf0hCFs1/Ek1BTX7gASixbPbNPtQsDIGNP0MRDT7IlVAAEg0/ogBkzEAiAGBSTX5IlVAAAYjNfpCAAYiNfpCAAA0+kQxACiAAgEAZoAJAAAAAAAAAVoBsCo1BzT/NP40/TT8IwgjMgZCAKM0+1cBIDX6NPo1+TT5iAEzSTX3IlVAAAYiNfhCAAYjNfhCAAA0+EQxADT/EkSxIrIBNP6yCCOyEDT5sgezNPkoK2aACQAAAAAAAAGXAbAqNQc0/zT+NP00/CMJIzIGQgBCIhJEIjQBEkQ0BEkiEkw0AhIRREk1BUkiWzX/JVs1/oAErNEfwzT/FlA0/hZQsIGgjQaIALoxADT/NP4iIzIGQgAANf81/jX9Nfw1+zX6NP5BACA0+jT7FlA0/BZQNP0WUChLAVcAOGdIJDUBMgY1AkIAMrEisgE0/TT7C7III7IQNPqyB7NCAAAxGYEFEkSxIrIBIrIII7IQMgmyCTIKsgezQgAFMRkiEkQpNAEWNAIWUGc0BkEACoAEFR98dTQHULA0AEkjCDIEEkQxFhJEI0MxGSISREL/3yI1ASI1AkL/w0kxGGFAAANIK4koYok0AElKIwg1ADgHMgoSRDgQIxJEOAgSRIk=`,
  appClear: `Bg==`,
  companionInfo: null,
  extraPages: 0,
  mapDataKeys: 1,
  mapDataSize: 2,
  stateKeys: 1,
  stateSize: 56,
  unsupported: [],
  version: 10,
  warnings: [`This program was compiled with trustworthy maps, but maps are not trustworthy on Algorand, because they are represented with local state. A user can delete their local state at any time, by sending a ClearState transaction. The only way to use local state properly on Algorand is to ensure that a user doing this can only 'hurt' themselves and not the entire system.`]
  };
const _ETH = {
  ABI: `[
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v271",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v272",
                "type": "uint256"
              }
            ],
            "internalType": "struct T5",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T6",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "stateMutability": "payable",
    "type": "constructor"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "msg",
        "type": "uint256"
      }
    ],
    "name": "ReachError",
    "type": "error"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v271",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v272",
                "type": "uint256"
              }
            ],
            "internalType": "struct T5",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T6",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e0",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "components": [
                  {
                    "internalType": "enum _enum_T10",
                    "name": "which",
                    "type": "uint8"
                  },
                  {
                    "internalType": "bool",
                    "name": "_Attendee_iWillGo0_63",
                    "type": "bool"
                  },
                  {
                    "components": [
                      {
                        "internalType": "address payable",
                        "name": "elem0",
                        "type": "address"
                      }
                    ],
                    "internalType": "struct T9",
                    "name": "_CheckIn_theyCame0_63",
                    "type": "tuple"
                  }
                ],
                "internalType": "struct T10",
                "name": "v328",
                "type": "tuple"
              }
            ],
            "internalType": "struct T11",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T12",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e2",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "bool",
                "name": "v419",
                "type": "bool"
              }
            ],
            "internalType": "struct T13",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T14",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e3",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "bool",
        "name": "v0",
        "type": "bool"
      }
    ],
    "name": "_reach_oe_v346",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "bool",
        "name": "v0",
        "type": "bool"
      }
    ],
    "name": "_reach_oe_v407",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "bool",
        "name": "v0",
        "type": "bool"
      }
    ],
    "name": "_reach_oe_v422",
    "type": "event"
  },
  {
    "stateMutability": "payable",
    "type": "fallback"
  },
  {
    "inputs": [],
    "name": "Attendee_iWillGo",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address payable",
        "name": "_a0",
        "type": "address"
      }
    ],
    "name": "CheckIn_theyCame",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "CheckIn_timesUp",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "_reachCreationTime",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "_reachCurrentState",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      },
      {
        "internalType": "bytes",
        "name": "",
        "type": "bytes"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "_reachCurrentTime",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "addr",
        "type": "address"
      }
    ],
    "name": "_reachMap0Ref",
    "outputs": [
      {
        "components": [
          {
            "internalType": "enum _enum_T1",
            "name": "which",
            "type": "uint8"
          },
          {
            "internalType": "bool",
            "name": "_None",
            "type": "bool"
          },
          {
            "components": [
              {
                "internalType": "bool",
                "name": "_came",
                "type": "bool"
              }
            ],
            "internalType": "struct T0",
            "name": "_Some",
            "type": "tuple"
          }
        ],
        "internalType": "struct T1",
        "name": "res",
        "type": "tuple"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "components": [
                  {
                    "internalType": "enum _enum_T10",
                    "name": "which",
                    "type": "uint8"
                  },
                  {
                    "internalType": "bool",
                    "name": "_Attendee_iWillGo0_63",
                    "type": "bool"
                  },
                  {
                    "components": [
                      {
                        "internalType": "address payable",
                        "name": "elem0",
                        "type": "address"
                      }
                    ],
                    "internalType": "struct T9",
                    "name": "_CheckIn_theyCame0_63",
                    "type": "tuple"
                  }
                ],
                "internalType": "struct T10",
                "name": "v328",
                "type": "tuple"
              }
            ],
            "internalType": "struct T11",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T12",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m2",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "bool",
                "name": "v419",
                "type": "bool"
              }
            ],
            "internalType": "struct T13",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T14",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m3",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "stateMutability": "payable",
    "type": "receive"
  }
]`,
  Bytecode: `0x6080604052604051620016d1380380620016d183398101604081905262000026916200039f565b6000805543600355604080518251815260208084015180518284015201518183015290517f80c0078efe412e5091172e0df54decefb16131f320816d23b64aede2bf8e9e4b9181900360600190a162000082341560076200011a565b620000cd6040805160a0810182526000918101828152606082018390526080820192909252908190815260408051606081018252600080825260208281018290529282015291015290565b80513390526020808301805151835183015251810151825160409081019190915281830180516000905280516001930192909252905143910152620001128162000144565b50506200046a565b81620001405760405163100960cb60e01b81526004810182905260240160405180910390fd5b5050565b80602001516020015115620002185762000188604051806080016040528060006001600160a01b031681526020016000815260200160008152602001600081525090565b8151516001600160a01b0316808252825160209081015181840190815284516040908101518186019081528387015151606080880191825260036000554360015583519586019690965292519184019190915251928201929092529051608082015260a001604051602081830303815290604052600290805190602001906200021392919062000288565b505050565b8051805160209182015191830151516001600160a01b03909116916108fc91620002439190620003ff565b6040518115909202916000818181858888f193505050501580156200026c573d6000803e3d6000fd5b5060008080556001819055620002859060029062000317565b50565b82805462000296906200042d565b90600052602060002090601f016020900481019282620002ba576000855562000305565b82601f10620002d557805160ff191683800117855562000305565b8280016001018555821562000305579182015b8281111562000305578251825591602001919060010190620002e8565b506200031392915062000351565b5090565b50805462000325906200042d565b6000825580601f1062000336575050565b601f0160209004906000526020600020908101906200028591905b5b8082111562000313576000815560010162000352565b604080519081016001600160401b03811182821017156200039957634e487b7160e01b600052604160045260246000fd5b60405290565b60008183036060811215620003b357600080fd5b620003bd62000368565b835181526040601f1983011215620003d457600080fd5b620003de62000368565b60208581015182526040909501518582015293810193909352509092915050565b60008160001904831182151516156200042857634e487b7160e01b600052601160045260246000fd5b500290565b600181811c908216806200044257607f821691505b602082108114156200046457634e487b7160e01b600052602260045260246000fd5b50919050565b611257806200047a6000396000f3fe6080604052600436106100845760003560e01c806383230757116100565780638323075714610114578063a4e7e8a414610129578063ab53f2c614610131578063af020d6314610154578063e2186a081461015c57005b806309c354e71461008d5780631e93b0f1146100a05780633bc5b7bf146100c45780635ff66f4c146100f157005b3661008b57005b005b61008b61009b366004610dc3565b61016f565b3480156100ac57600080fd5b506003545b6040519081526020015b60405180910390f35b3480156100d057600080fd5b506100e46100df366004610df0565b6101a8565b6040516100bb9190610e48565b6101046100ff366004610df0565b6101bf565b60405190151581526020016100bb565b34801561012057600080fd5b506001546100b1565b610104610231565b34801561013d57600080fd5b5061014661027d565b6040516100bb929190610e7b565b61010461031a565b61008b61016a366004610ed8565b610376565b60408051606081018252600080825260208201819052918101919091526101a461019e36849003840184610f93565b826103ab565b5050565b6101b0610c21565b6101b982610831565b92915050565b604080516060810182526000808252602082018190529181018290526101e3610c52565b6101eb610c21565b60408051602080820183526001600160a01b03881682528383019190915260018352815180820190925282825283015261022582846103ab565b50506020015192915050565b60408051606081018252600080825260208201819052918101829052610255610c6c565b60408051602080820190925260008152908201526102738183610902565b5060400151919050565b6000606060005460028080546102929061103f565b80601f01602080910402602001604051908101604052809291908181526020018280546102be9061103f565b801561030b5780601f106102e05761010080835404028352916020019161030b565b820191906000526020600020905b8154815290600101906020018083116102ee57829003601f168201915b50505050509050915091509091565b6040805160608101825260008082526020820181905291810182905261033e610c52565b610346610c21565b60006020828101829052908252604080518083019091528281529083015261036e82846103ab565b505051919050565b60408051606081018252600080825260208201819052918101919091526101a46103a536849003840184611074565b82610902565b6103bb600360005414600d610ac1565b81516103d69015806103cf57508251600154145b600e610ac1565b6000808055600280546103e89061103f565b80601f01602080910402602001604051908101604052809291908181526020018280546104149061103f565b80156104615780601f1061043657610100808354040283529160200191610461565b820191906000526020600020905b81548152906001019060200180831161044457829003601f168201915b505050505080602001905181019061047991906110f8565b90506104bc604080516080810182526000808252825160208082018552828252808401919091528351908101845281815292820192909252606081019190915290565b6104cd82604001514310600f610ac1565b7f73515aa853363e8940db328aff972512670e5a5d73d0016f764544db2e448dd7846040516104fc9190611175565b60405180910390a1600060208501515151600181111561051e5761051e610e14565b141561067257610535826020015134146008610ac1565b600061054033610831565b51600181111561055257610552610e14565b14156105615760018152610589565b600161056c33610831565b51600181111561057e5761057e610e14565b141561058957600081525b8051610596906009610ac1565b6020818101805160009081905233815260048352604090819020805460ff1990811660019081178355935151918401805492151592909116919091179055519081527fd919772d76c1de3df476d1bb3f5b2f2f2273d6c54f46f8087aeece3b2e08790e910160405180910390a16001835261060f610c96565b825181516001600160a01b0390911690526020808401518251909101526040808401518251909101526060830151610649906001906111d3565b602080830180519290925281516001910152514360409091015261066c81610ae6565b5061082b565b600160208501515151600181111561068c5761068c610e14565b141561082b57602084015151604090810151908201526106ae3415600a610ac1565b60006040820151516106bf90610831565b5160018111156106d1576106d1610e14565b14156106e35760006060820152610714565b60016040820151516106f490610831565b51600181111561070657610706610e14565b141561071457600160608201525b6107238160600151600b610ac1565b815161073b906001600160a01b03163314600c610ac1565b60408082015151602084015191516001600160a01b039091169180156108fc02916000818181858888f1935050505015801561077b573d6000803e3d6000fd5b50604081810151516001600160a01b031660009081526004602090815290829020805461ffff191681556001908101805460ff1916905591519182527f906f6aed91eb48f2647c8addfda09ee050e109fe0e5d9710480c1deff2ec4072910160405180910390a1600160208401526107f1610c96565b825181516001600160a01b0390911690526020808401518251909101526040808401518251909101526060830151610649906001906111eb565b50505050565b610839610c21565b60016001600160a01b03831660009081526004602052604090205460ff16600181111561086857610868610e14565b14156108f2576001600160a01b038216600090815260046020526040908190208151606081019092528054829060ff1660018111156108a9576108a9610e14565b60018111156108ba576108ba610e14565b81528154610100900460ff90811615156020808401919091526040805191820181526001909401549091161515815291015292915050565b600080825260208201525b919050565b6109126003600054146011610ac1565b815161092d90158061092657508251600154145b6012610ac1565b60008080556002805461093f9061103f565b80601f016020809104026020016040519081016040528092919081815260200182805461096b9061103f565b80156109b85780601f1061098d576101008083540402835291602001916109b8565b820191906000526020600020905b81548152906001019060200180831161099b57829003601f168201915b50505050508060200190518101906109d091906110f8565b90506109e481604001514310156013610ac1565b6040805184518152602080860151511515908201527f46fa595f7924075e82e3f58fa001775f50eda2857c56728dafc78ec80de66f49910160405180910390a1610a3034156010610ac1565b604051600181527f5ea190c0ccf150c7af6c56c82d6a634174d696b64a21dfae60e073440d8155619060200160405180910390a160016040830152610a73610c96565b815181516001600160a01b0390911690526020808301518251820152604080840151835182015260608401518284018051919091528051600093019290925290514391015261082b81610ae6565b816101a45760405163100960cb60e01b81526004810182905260240160405180910390fd5b80602001516020015115610bb657610b28604051806080016040528060006001600160a01b031681526020016000815260200160008152602001600081525090565b8151516001600160a01b0316808252825160209081015181840190815284516040908101518186019081528387015151606080880191825260036000554360015583519586019690965292519184019190915251928201929092529051608082015260a00160405160208183030381529060405260029080519060200190610bb1929190610cdd565b505050565b8051805160209182015191830151516001600160a01b03909116916108fc91610bdf9190611202565b6040518115909202916000818181858888f19350505050158015610c07573d6000803e3d6000fd5b5060008080556001819055610c1e90600290610d61565b50565b604080516060810190915280600081526000602080830182905260408051918201815291815291015290565b905290565b604051806040016040528060008152602001610c4d610d9b565b604051806040016040528060008152602001610c4d60405180602001604052806000151581525090565b6040805160a0810182526000918101828152606082018390526080820192909252908190815260408051606081018252600080825260208281018290529282015291015290565b828054610ce99061103f565b90600052602060002090601f016020900481019282610d0b5760008555610d51565b82601f10610d2457805160ff1916838001178555610d51565b82800160010185558215610d51579182015b82811115610d51578251825591602001919060010190610d36565b50610d5d929150610dae565b5090565b508054610d6d9061103f565b6000825580601f10610d7d575050565b601f016020900490600052602060002090810190610c1e9190610dae565b6040518060200160405280610c4d610c21565b5b80821115610d5d5760008155600101610daf565b600060808284031215610dd557600080fd5b50919050565b6001600160a01b0381168114610c1e57600080fd5b600060208284031215610e0257600080fd5b8135610e0d81610ddb565b9392505050565b634e487b7160e01b600052602160045260246000fd5b60028110610c1e57634e487b7160e01b600052602160045260246000fd5b81516060820190610e5881610e2a565b808352506020830151151560208301526040830151511515604083015292915050565b82815260006020604081840152835180604085015260005b81811015610eaf57858101830151858201606001528201610e93565b81811115610ec1576000606083870101525b50601f01601f191692909201606001949350505050565b600060408284031215610dd557600080fd5b6040805190810167ffffffffffffffff81118282101715610f1b57634e487b7160e01b600052604160045260246000fd5b60405290565b6040516020810167ffffffffffffffff81118282101715610f1b57634e487b7160e01b600052604160045260246000fd5b6040516060810167ffffffffffffffff81118282101715610f1b57634e487b7160e01b600052604160045260246000fd5b803580151581146108fd57600080fd5b60008183036080811215610fa657600080fd5b610fae610eea565b833581526060601f1983011215610fc457600080fd5b610fcc610f21565b610fd4610f52565b602086013560028110610fe657600080fd5b8152610ff460408701610f83565b60208201526020605f198501121561100b57600080fd5b611013610f21565b9350606086013561102381610ddb565b8452604081019390935291825260208101919091529392505050565b600181811c9082168061105357607f821691505b60208210811415610dd557634e487b7160e01b600052602260045260246000fd5b6000818303604081121561108757600080fd5b6040516040810181811067ffffffffffffffff821117156110b857634e487b7160e01b600052604160045260246000fd5b604052833581526020601f19830112156110d157600080fd5b6110d9610f21565b91506110e760208501610f83565b825260208101919091529392505050565b60006080828403121561110a57600080fd5b6040516080810181811067ffffffffffffffff8211171561113b57634e487b7160e01b600052604160045260246000fd5b604052825161114981610ddb565b808252506020830151602082015260408301516040820152606083015160608201528091505092915050565b81518152602082015151805160808301919061119081610e2a565b8060208501525060208101511515604084015260018060a01b036040820151511660608401525092915050565b634e487b7160e01b600052601160045260246000fd5b600082198211156111e6576111e66111bd565b500190565b6000828210156111fd576111fd6111bd565b500390565b600081600019048311821515161561121c5761121c6111bd565b50029056fea26469706673582212206c41d0eade287ba0a5877061f9ebe6371a75688e3d32423c5884fc823f8a408264736f6c634300080c0033`,
  BytecodeLen: 5841,
  Which: `oD`,
  version: 6,
  views: {
    }
  };
export const _stateSourceMap = {
  2: {
    at: './index.rsh:79:13:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  3: {
    at: './index.rsh:31:23:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    }
  };
export const _Connectors = {
  ALGO: _ALGO,
  ETH: _ETH
  };
export const _Participants = {
  "Admin": Admin,
  "Attendee_iWillGo": Attendee_iWillGo,
  "CheckIn_theyCame": CheckIn_theyCame,
  "CheckIn_timesUp": CheckIn_timesUp
  };
export const _APIs = {
  Attendee: {
    iWillGo: Attendee_iWillGo
    },
  CheckIn: {
    theyCame: CheckIn_theyCame,
    timesUp: CheckIn_timesUp
    }
  };
