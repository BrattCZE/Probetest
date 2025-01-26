/***************************************** 
 * Sophieking_Dot_Probe_Healthwords *
 *****************************************/


// store info about the experiment session:
let expName = 'SOPHIEKING_dot_probe_HEALTHWORDS';  // from the Builder filename that created this script
let expInfo = {
    'participant': '',
    '': '',
};

// Start code blocks for 'Before Experiment'
// init psychoJS:
const psychoJS = new PsychoJS({
  debug: true
});

// open window:
psychoJS.openWindow({
  fullscr: true,
  color: new util.Color([0,0,0]),
  units: 'height',
  waitBlanking: true,
  backgroundImage: '',
  backgroundFit: 'none',
});
// schedule the experiment:
psychoJS.schedule(psychoJS.gui.DlgFromDict({
  dictionary: expInfo,
  title: expName
}));

const flowScheduler = new Scheduler(psychoJS);
const dialogCancelScheduler = new Scheduler(psychoJS);
psychoJS.scheduleCondition(function() { return (psychoJS.gui.dialogComponent.button === 'OK'); },flowScheduler, dialogCancelScheduler);

// flowScheduler gets run if the participants presses OK
flowScheduler.add(updateInfo); // add timeStamp
flowScheduler.add(experimentInit);
flowScheduler.add(instructions1RoutineBegin());
flowScheduler.add(instructions1RoutineEachFrame());
flowScheduler.add(instructions1RoutineEnd());
flowScheduler.add(instructionspractice_2RoutineBegin());
flowScheduler.add(instructionspractice_2RoutineEachFrame());
flowScheduler.add(instructionspractice_2RoutineEnd());
const practicetrialsLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(practicetrialsLoopBegin(practicetrialsLoopScheduler));
flowScheduler.add(practicetrialsLoopScheduler);
flowScheduler.add(practicetrialsLoopEnd);


flowScheduler.add(instructionsrealRoutineBegin());
flowScheduler.add(instructionsrealRoutineEachFrame());
flowScheduler.add(instructionsrealRoutineEnd());
const trialsLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(trialsLoopBegin(trialsLoopScheduler));
flowScheduler.add(trialsLoopScheduler);
flowScheduler.add(trialsLoopEnd);



flowScheduler.add(byeRoutineBegin());
flowScheduler.add(byeRoutineEachFrame());
flowScheduler.add(byeRoutineEnd());
flowScheduler.add(quitPsychoJS, 'Thank you for your patience.', true);

// quit if user presses Cancel in dialog box:
dialogCancelScheduler.add(quitPsychoJS, 'Thank you for your patience.', false);

psychoJS.start({
  expName: expName,
  expInfo: expInfo,
  resources: [
    // resources:
    {'name': 'practice_conditions_dot_probe11.xlsx', 'path': 'practice_conditions_dot_probe11.xlsx'},
    {'name': 'conditions2.xlsx.xlsx', 'path': 'conditions2.xlsx.xlsx'},
  ]
});

psychoJS.experimentLogger.setLevel(core.Logger.ServerLevel.INFO);


var currentLoop;
var frameDur;
async function updateInfo() {
  currentLoop = psychoJS.experiment;  // right now there are no loops
  expInfo['date'] = util.MonotonicClock.getDateStr();  // add a simple timestamp
  expInfo['expName'] = expName;
  expInfo['psychopyVersion'] = '2024.2.4';
  expInfo['OS'] = window.navigator.platform;


  // store frame rate of monitor if we can measure it successfully
  expInfo['frameRate'] = psychoJS.window.getActualFrameRate();
  if (typeof expInfo['frameRate'] !== 'undefined')
    frameDur = 1.0 / Math.round(expInfo['frameRate']);
  else
    frameDur = 1.0 / 60.0; // couldn't get a reliable measure so guess

  // add info from the URL:
  util.addInfoFromUrl(expInfo);
  

  
  psychoJS.experiment.dataFileName = (("." + "/") + `data/${expInfo["participant"]}_${expName}_${expInfo["date"]}`);
  psychoJS.experiment.field_separator = '\t';


  return Scheduler.Event.NEXT;
}


var instructions1Clock;
var instrtxt;
var instr_resp;
var instructionspractice_2Clock;
var instructionspractice;
var instr_resp_2;
var practiceClock;
var fixationprac;
var top_word_practice;
var bottom_text_practice;
var probe_practice;
var key_resp_prac;
var instructionsrealClock;
var instructions;
var key_resp_2;
var realtrialClock;
var fixation;
var top_word;
var bottom_word;
var probe;
var key_resp;
var feedbackClock;
var textbox;
var byeClock;
var bye_txt;
var globalClock;
var routineTimer;
async function experimentInit() {
  // Initialize components for Routine "instructions1"
  instructions1Clock = new util.Clock();
  instrtxt = new visual.TextBox({
    win: psychoJS.window,
    name: 'instrtxt',
    text: 'In this task you will see some crosses in the middle of the screen like this.\n\n+++ \n\nTry to keep your eyes on the fixation crosses. \n\nPress space to continue',
    placeholder: 'Type here...',
    font: 'Arial',
    pos: [0, 0], 
    draggable: false,
    letterHeight: 0.05,
    lineSpacing: 1.0,
    size: [1, 1],  units: undefined, 
    ori: 0.0,
    color: 'white', colorSpace: 'rgb',
    fillColor: undefined, borderColor: undefined,
    languageStyle: 'LTR',
    bold: false, italic: false,
    opacity: undefined,
    padding: 0.0,
    alignment: 'center',
    overflow: 'visible',
    editable: false,
    multiline: true,
    anchor: 'center',
    depth: 0.0 
  });
  
  instr_resp = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "instructionspractice_2"
  instructionspractice_2Clock = new util.Clock();
  instructionspractice = new visual.TextBox({
    win: psychoJS.window,
    name: 'instructionspractice',
    text: 'You will then briefly see two words like this:\n\nCAT         DOG\n\nOne of the words will be followed by an arrow facing left ( < ) or right ( > ). Use the Z and M keys on your keyboard to identify the direction the arrow faces:\n\n< = press the Z key. \n> = press the M key.  \n\nPress space to start a practice trial. Please be as quick and accurate as possible.',
    placeholder: 'Type here...',
    font: 'Arial',
    pos: [0, 0], 
    draggable: false,
    letterHeight: 0.05,
    lineSpacing: 1.0,
    size: [1, 1],  units: undefined, 
    ori: 0.0,
    color: 'white', colorSpace: 'rgb',
    fillColor: undefined, borderColor: undefined,
    languageStyle: 'LTR',
    bold: false, italic: false,
    opacity: undefined,
    padding: 0.0,
    alignment: 'center',
    overflow: 'visible',
    editable: false,
    multiline: true,
    anchor: 'center',
    depth: 0.0 
  });
  
  instr_resp_2 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "practice"
  practiceClock = new util.Clock();
  fixationprac = new visual.TextStim({
    win: psychoJS.window,
    name: 'fixationprac',
    text: '+++',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  top_word_practice = new visual.TextStim({
    win: psychoJS.window,
    name: 'top_word_practice',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [(- 0.5), 0], draggable: false, height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -1.0 
  });
  
  bottom_text_practice = new visual.TextStim({
    win: psychoJS.window,
    name: 'bottom_text_practice',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0.5, 0], draggable: false, height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -2.0 
  });
  
  probe_practice = new visual.TextStim({
    win: psychoJS.window,
    name: 'probe_practice',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -3.0 
  });
  
  key_resp_prac = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "instructionsreal"
  instructionsrealClock = new util.Clock();
  instructions = new visual.TextStim({
    win: psychoJS.window,
    name: 'instructions',
    text: 'The practice trial is now over.\n\nPlease be aware that arrows may appear on the right or left side of the screen, however it is the DIRECTION that they are facing that determines your answer. \n< = press the Z key. \n> = press the M key.  \n\nPress space to start the real trial. Please be as quick and accurate as possible.',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  key_resp_2 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "realtrial"
  realtrialClock = new util.Clock();
  fixation = new visual.TextBox({
    win: psychoJS.window,
    name: 'fixation',
    text: '+++',
    placeholder: 'Type here...',
    font: 'Arial',
    pos: [0, 0], 
    draggable: false,
    letterHeight: 0.05,
    lineSpacing: 1.0,
    size: [0.5, 0.5],  units: undefined, 
    ori: 0.0,
    color: 'white', colorSpace: 'rgb',
    fillColor: undefined, borderColor: undefined,
    languageStyle: 'LTR',
    bold: false, italic: false,
    opacity: undefined,
    padding: 0.0,
    alignment: 'center',
    overflow: 'visible',
    editable: false,
    multiline: true,
    anchor: 'center',
    depth: 0.0 
  });
  
  top_word = new visual.TextBox({
    win: psychoJS.window,
    name: 'top_word',
    text: '',
    placeholder: 'Type here...',
    font: 'Arial',
    pos: [0.5, 0], 
    draggable: false,
    letterHeight: 0.05,
    lineSpacing: 1.0,
    size: [0.3, 0.1],  units: undefined, 
    ori: 0.0,
    color: 'white', colorSpace: 'rgb',
    fillColor: undefined, borderColor: undefined,
    languageStyle: 'LTR',
    bold: false, italic: false,
    opacity: undefined,
    padding: 0.0,
    alignment: 'center',
    overflow: 'visible',
    editable: false,
    multiline: true,
    anchor: 'center',
    depth: -1.0 
  });
  
  bottom_word = new visual.TextBox({
    win: psychoJS.window,
    name: 'bottom_word',
    text: '',
    placeholder: 'Type here...',
    font: 'Arial',
    pos: [(- 0.5), 0], 
    draggable: false,
    letterHeight: 0.05,
    lineSpacing: 1.0,
    size: [0.3, 0.1],  units: undefined, 
    ori: 0.0,
    color: 'white', colorSpace: 'rgb',
    fillColor: undefined, borderColor: undefined,
    languageStyle: 'LTR',
    bold: false, italic: false,
    opacity: undefined,
    padding: 0.0,
    alignment: 'center',
    overflow: 'visible',
    editable: false,
    multiline: true,
    anchor: 'center',
    depth: -2.0 
  });
  
  probe = new visual.TextBox({
    win: psychoJS.window,
    name: 'probe',
    text: '',
    placeholder: 'Type here...',
    font: 'Arial',
    pos: [0, 0], 
    draggable: false,
    letterHeight: 0.05,
    lineSpacing: 1.0,
    size: [0.2, 0.1],  units: undefined, 
    ori: 0.0,
    color: 'white', colorSpace: 'rgb',
    fillColor: undefined, borderColor: undefined,
    languageStyle: 'LTR',
    bold: false, italic: false,
    opacity: undefined,
    padding: 0.0,
    alignment: 'center',
    overflow: 'visible',
    editable: false,
    multiline: true,
    anchor: 'center',
    depth: -3.0 
  });
  
  key_resp = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "feedback"
  feedbackClock = new util.Clock();
  textbox = new visual.TextBox({
    win: psychoJS.window,
    name: 'textbox',
    text: '',
    placeholder: 'Type here...',
    font: 'Arial',
    pos: [0, 0], 
    draggable: false,
    letterHeight: 0.05,
    lineSpacing: 1.0,
    size: [0.5, 0.5],  units: undefined, 
    ori: 0.0,
    color: 'white', colorSpace: 'rgb',
    fillColor: undefined, borderColor: undefined,
    languageStyle: 'LTR',
    bold: false, italic: false,
    opacity: undefined,
    padding: 0.0,
    alignment: 'center',
    overflow: 'visible',
    editable: false,
    multiline: true,
    anchor: 'center',
    depth: -1.0 
  });
  
  // Initialize components for Routine "bye"
  byeClock = new util.Clock();
  bye_txt = new visual.TextBox({
    win: psychoJS.window,
    name: 'bye_txt',
    text: 'That is the end - goodbye!',
    placeholder: 'Type here...',
    font: 'Arial',
    pos: [0, 0], 
    draggable: false,
    letterHeight: 0.05,
    lineSpacing: 1.0,
    size: [0.5, 0.5],  units: undefined, 
    ori: 0.0,
    color: 'white', colorSpace: 'rgb',
    fillColor: undefined, borderColor: undefined,
    languageStyle: 'LTR',
    bold: false, italic: false,
    opacity: undefined,
    padding: 0.0,
    alignment: 'center',
    overflow: 'visible',
    editable: false,
    multiline: true,
    anchor: 'center',
    depth: 0.0 
  });
  
  // Create some handy timers
  globalClock = new util.Clock();  // to track the time since experiment started
  routineTimer = new util.CountdownTimer();  // to track time remaining of each (non-slip) routine
  
  return Scheduler.Event.NEXT;
}


var t;
var frameN;
var continueRoutine;
var instructions1MaxDurationReached;
var _instr_resp_allKeys;
var instructions1MaxDuration;
var instructions1Components;
function instructions1RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'instructions1' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    instructions1Clock.reset();
    routineTimer.reset();
    instructions1MaxDurationReached = false;
    // update component parameters for each repeat
    instr_resp.keys = undefined;
    instr_resp.rt = undefined;
    _instr_resp_allKeys = [];
    psychoJS.experiment.addData('instructions1.started', globalClock.getTime());
    instructions1MaxDuration = null
    // keep track of which components have finished
    instructions1Components = [];
    instructions1Components.push(instrtxt);
    instructions1Components.push(instr_resp);
    
    instructions1Components.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function instructions1RoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'instructions1' ---
    // get current time
    t = instructions1Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *instrtxt* updates
    if (t >= 0.0 && instrtxt.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      instrtxt.tStart = t;  // (not accounting for frame time here)
      instrtxt.frameNStart = frameN;  // exact frame index
      
      instrtxt.setAutoDraw(true);
    }
    
    
    // *instr_resp* updates
    if (t >= 0.0 && instr_resp.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      instr_resp.tStart = t;  // (not accounting for frame time here)
      instr_resp.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { instr_resp.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { instr_resp.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { instr_resp.clearEvents(); });
    }
    
    if (instr_resp.status === PsychoJS.Status.STARTED) {
      let theseKeys = instr_resp.getKeys({keyList: ['space'], waitRelease: false});
      _instr_resp_allKeys = _instr_resp_allKeys.concat(theseKeys);
      if (_instr_resp_allKeys.length > 0) {
        instr_resp.keys = _instr_resp_allKeys[_instr_resp_allKeys.length - 1].name;  // just the last key pressed
        instr_resp.rt = _instr_resp_allKeys[_instr_resp_allKeys.length - 1].rt;
        instr_resp.duration = _instr_resp_allKeys[_instr_resp_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    instructions1Components.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function instructions1RoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'instructions1' ---
    instructions1Components.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('instructions1.stopped', globalClock.getTime());
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(instr_resp.corr, level);
    }
    psychoJS.experiment.addData('instr_resp.keys', instr_resp.keys);
    if (typeof instr_resp.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('instr_resp.rt', instr_resp.rt);
        psychoJS.experiment.addData('instr_resp.duration', instr_resp.duration);
        routineTimer.reset();
        }
    
    instr_resp.stop();
    // the Routine "instructions1" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var instructionspractice_2MaxDurationReached;
var _instr_resp_2_allKeys;
var instructionspractice_2MaxDuration;
var instructionspractice_2Components;
function instructionspractice_2RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'instructionspractice_2' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    instructionspractice_2Clock.reset();
    routineTimer.reset();
    instructionspractice_2MaxDurationReached = false;
    // update component parameters for each repeat
    instr_resp_2.keys = undefined;
    instr_resp_2.rt = undefined;
    _instr_resp_2_allKeys = [];
    psychoJS.experiment.addData('instructionspractice_2.started', globalClock.getTime());
    instructionspractice_2MaxDuration = null
    // keep track of which components have finished
    instructionspractice_2Components = [];
    instructionspractice_2Components.push(instructionspractice);
    instructionspractice_2Components.push(instr_resp_2);
    
    instructionspractice_2Components.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function instructionspractice_2RoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'instructionspractice_2' ---
    // get current time
    t = instructionspractice_2Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *instructionspractice* updates
    if (t >= 0.0 && instructionspractice.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      instructionspractice.tStart = t;  // (not accounting for frame time here)
      instructionspractice.frameNStart = frameN;  // exact frame index
      
      instructionspractice.setAutoDraw(true);
    }
    
    
    // *instr_resp_2* updates
    if (t >= 0.0 && instr_resp_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      instr_resp_2.tStart = t;  // (not accounting for frame time here)
      instr_resp_2.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { instr_resp_2.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { instr_resp_2.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { instr_resp_2.clearEvents(); });
    }
    
    if (instr_resp_2.status === PsychoJS.Status.STARTED) {
      let theseKeys = instr_resp_2.getKeys({keyList: ['space'], waitRelease: false});
      _instr_resp_2_allKeys = _instr_resp_2_allKeys.concat(theseKeys);
      if (_instr_resp_2_allKeys.length > 0) {
        instr_resp_2.keys = _instr_resp_2_allKeys[_instr_resp_2_allKeys.length - 1].name;  // just the last key pressed
        instr_resp_2.rt = _instr_resp_2_allKeys[_instr_resp_2_allKeys.length - 1].rt;
        instr_resp_2.duration = _instr_resp_2_allKeys[_instr_resp_2_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    instructionspractice_2Components.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function instructionspractice_2RoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'instructionspractice_2' ---
    instructionspractice_2Components.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('instructionspractice_2.stopped', globalClock.getTime());
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(instr_resp_2.corr, level);
    }
    psychoJS.experiment.addData('instr_resp_2.keys', instr_resp_2.keys);
    if (typeof instr_resp_2.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('instr_resp_2.rt', instr_resp_2.rt);
        psychoJS.experiment.addData('instr_resp_2.duration', instr_resp_2.duration);
        routineTimer.reset();
        }
    
    instr_resp_2.stop();
    // the Routine "instructionspractice_2" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var practicetrials;
function practicetrialsLoopBegin(practicetrialsLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    practicetrials = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 1, method: TrialHandler.Method.RANDOM,
      extraInfo: expInfo, originPath: undefined,
      trialList: 'practice_conditions_dot_probe11.xlsx',
      seed: undefined, name: 'practicetrials'
    });
    psychoJS.experiment.addLoop(practicetrials); // add the loop to the experiment
    currentLoop = practicetrials;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    practicetrials.forEach(function() {
      snapshot = practicetrials.getSnapshot();
    
      practicetrialsLoopScheduler.add(importConditions(snapshot));
      practicetrialsLoopScheduler.add(practiceRoutineBegin(snapshot));
      practicetrialsLoopScheduler.add(practiceRoutineEachFrame());
      practicetrialsLoopScheduler.add(practiceRoutineEnd(snapshot));
      practicetrialsLoopScheduler.add(practicetrialsLoopEndIteration(practicetrialsLoopScheduler, snapshot));
    });
    
    return Scheduler.Event.NEXT;
  }
}


async function practicetrialsLoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(practicetrials);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function practicetrialsLoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        psychoJS.experiment.nextEntry(snapshot);
      }
    return Scheduler.Event.NEXT;
    }
  };
}


var trials;
function trialsLoopBegin(trialsLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    trials = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 1, method: TrialHandler.Method.RANDOM,
      extraInfo: expInfo, originPath: undefined,
      trialList: 'conditions2.xlsx.xlsx',
      seed: undefined, name: 'trials'
    });
    psychoJS.experiment.addLoop(trials); // add the loop to the experiment
    currentLoop = trials;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    trials.forEach(function() {
      snapshot = trials.getSnapshot();
    
      trialsLoopScheduler.add(importConditions(snapshot));
      trialsLoopScheduler.add(realtrialRoutineBegin(snapshot));
      trialsLoopScheduler.add(realtrialRoutineEachFrame());
      trialsLoopScheduler.add(realtrialRoutineEnd(snapshot));
      trialsLoopScheduler.add(feedbackRoutineBegin(snapshot));
      trialsLoopScheduler.add(feedbackRoutineEachFrame());
      trialsLoopScheduler.add(feedbackRoutineEnd(snapshot));
      trialsLoopScheduler.add(trialsLoopEndIteration(trialsLoopScheduler, snapshot));
    });
    
    return Scheduler.Event.NEXT;
  }
}


async function trialsLoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(trials);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function trialsLoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        psychoJS.experiment.nextEntry(snapshot);
      }
    return Scheduler.Event.NEXT;
    }
  };
}


var practiceMaxDurationReached;
var _key_resp_prac_allKeys;
var practiceMaxDuration;
var practiceComponents;
function practiceRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'practice' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    practiceClock.reset();
    routineTimer.reset();
    practiceMaxDurationReached = false;
    // update component parameters for each repeat
    top_word_practice.setText(top_text);
    bottom_text_practice.setText(bottom_text);
    probe_practice.setPos([cue_x, 0]);
    probe_practice.setText(this_probe);
    key_resp_prac.keys = undefined;
    key_resp_prac.rt = undefined;
    _key_resp_prac_allKeys = [];
    psychoJS.experiment.addData('practice.started', globalClock.getTime());
    practiceMaxDuration = null
    // keep track of which components have finished
    practiceComponents = [];
    practiceComponents.push(fixationprac);
    practiceComponents.push(top_word_practice);
    practiceComponents.push(bottom_text_practice);
    practiceComponents.push(probe_practice);
    practiceComponents.push(key_resp_prac);
    
    practiceComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


var frameRemains;
function practiceRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'practice' ---
    // get current time
    t = practiceClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *fixationprac* updates
    if (t >= 0.0 && fixationprac.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      fixationprac.tStart = t;  // (not accounting for frame time here)
      fixationprac.frameNStart = frameN;  // exact frame index
      
      fixationprac.setAutoDraw(true);
    }
    
    frameRemains = 0.0 + 0.5 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (fixationprac.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      fixationprac.setAutoDraw(false);
    }
    
    
    // *top_word_practice* updates
    if (t >= 1 && top_word_practice.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      top_word_practice.tStart = t;  // (not accounting for frame time here)
      top_word_practice.frameNStart = frameN;  // exact frame index
      
      top_word_practice.setAutoDraw(true);
    }
    
    frameRemains = 1 + 0.5 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (top_word_practice.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      top_word_practice.setAutoDraw(false);
    }
    
    
    // *bottom_text_practice* updates
    if (t >= 1 && bottom_text_practice.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      bottom_text_practice.tStart = t;  // (not accounting for frame time here)
      bottom_text_practice.frameNStart = frameN;  // exact frame index
      
      bottom_text_practice.setAutoDraw(true);
    }
    
    frameRemains = 1 + 0.5 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (bottom_text_practice.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      bottom_text_practice.setAutoDraw(false);
    }
    
    
    // *probe_practice* updates
    if (t >= 1.5 && probe_practice.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      probe_practice.tStart = t;  // (not accounting for frame time here)
      probe_practice.frameNStart = frameN;  // exact frame index
      
      probe_practice.setAutoDraw(true);
    }
    
    
    // *key_resp_prac* updates
    if (t >= 1.5 && key_resp_prac.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_prac.tStart = t;  // (not accounting for frame time here)
      key_resp_prac.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_prac.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_prac.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_prac.clearEvents(); });
    }
    
    if (key_resp_prac.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_prac.getKeys({keyList: ['z', 'm'], waitRelease: false});
      _key_resp_prac_allKeys = _key_resp_prac_allKeys.concat(theseKeys);
      if (_key_resp_prac_allKeys.length > 0) {
        key_resp_prac.keys = _key_resp_prac_allKeys[_key_resp_prac_allKeys.length - 1].name;  // just the last key pressed
        key_resp_prac.rt = _key_resp_prac_allKeys[_key_resp_prac_allKeys.length - 1].rt;
        key_resp_prac.duration = _key_resp_prac_allKeys[_key_resp_prac_allKeys.length - 1].duration;
        // was this correct?
        if (key_resp_prac.keys == answer) {
            key_resp_prac.corr = 1;
        } else {
            key_resp_prac.corr = 0;
        }
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    practiceComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function practiceRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'practice' ---
    practiceComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('practice.stopped', globalClock.getTime());
    // was no response the correct answer?!
    if (key_resp_prac.keys === undefined) {
      if (['None','none',undefined].includes(answer)) {
         key_resp_prac.corr = 1;  // correct non-response
      } else {
         key_resp_prac.corr = 0;  // failed to respond (incorrectly)
      }
    }
    // store data for current loop
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(key_resp_prac.corr, level);
    }
    psychoJS.experiment.addData('key_resp_prac.keys', key_resp_prac.keys);
    psychoJS.experiment.addData('key_resp_prac.corr', key_resp_prac.corr);
    if (typeof key_resp_prac.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp_prac.rt', key_resp_prac.rt);
        psychoJS.experiment.addData('key_resp_prac.duration', key_resp_prac.duration);
        routineTimer.reset();
        }
    
    key_resp_prac.stop();
    // the Routine "practice" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var instructionsrealMaxDurationReached;
var _key_resp_2_allKeys;
var instructionsrealMaxDuration;
var instructionsrealComponents;
function instructionsrealRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'instructionsreal' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    instructionsrealClock.reset();
    routineTimer.reset();
    instructionsrealMaxDurationReached = false;
    // update component parameters for each repeat
    key_resp_2.keys = undefined;
    key_resp_2.rt = undefined;
    _key_resp_2_allKeys = [];
    psychoJS.experiment.addData('instructionsreal.started', globalClock.getTime());
    instructionsrealMaxDuration = null
    // keep track of which components have finished
    instructionsrealComponents = [];
    instructionsrealComponents.push(instructions);
    instructionsrealComponents.push(key_resp_2);
    
    instructionsrealComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function instructionsrealRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'instructionsreal' ---
    // get current time
    t = instructionsrealClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *instructions* updates
    if (t >= 0.0 && instructions.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      instructions.tStart = t;  // (not accounting for frame time here)
      instructions.frameNStart = frameN;  // exact frame index
      
      instructions.setAutoDraw(true);
    }
    
    
    // *key_resp_2* updates
    if (t >= 0.0 && key_resp_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_2.tStart = t;  // (not accounting for frame time here)
      key_resp_2.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_2.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_2.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_2.clearEvents(); });
    }
    
    if (key_resp_2.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_2.getKeys({keyList: ['space'], waitRelease: false});
      _key_resp_2_allKeys = _key_resp_2_allKeys.concat(theseKeys);
      if (_key_resp_2_allKeys.length > 0) {
        key_resp_2.keys = _key_resp_2_allKeys[_key_resp_2_allKeys.length - 1].name;  // just the last key pressed
        key_resp_2.rt = _key_resp_2_allKeys[_key_resp_2_allKeys.length - 1].rt;
        key_resp_2.duration = _key_resp_2_allKeys[_key_resp_2_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    instructionsrealComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function instructionsrealRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'instructionsreal' ---
    instructionsrealComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('instructionsreal.stopped', globalClock.getTime());
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(key_resp_2.corr, level);
    }
    psychoJS.experiment.addData('key_resp_2.keys', key_resp_2.keys);
    if (typeof key_resp_2.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp_2.rt', key_resp_2.rt);
        psychoJS.experiment.addData('key_resp_2.duration', key_resp_2.duration);
        routineTimer.reset();
        }
    
    key_resp_2.stop();
    // the Routine "instructionsreal" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var realtrialMaxDurationReached;
var _key_resp_allKeys;
var realtrialMaxDuration;
var realtrialComponents;
function realtrialRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'realtrial' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    realtrialClock.reset();
    routineTimer.reset();
    realtrialMaxDurationReached = false;
    // update component parameters for each repeat
    top_word.setText(top_text);
    bottom_word.setText(bottom_text);
    probe.setPos([cue_x, 0]);
    probe.setText(this_probe);
    key_resp.keys = undefined;
    key_resp.rt = undefined;
    _key_resp_allKeys = [];
    psychoJS.experiment.addData('realtrial.started', globalClock.getTime());
    realtrialMaxDuration = null
    // keep track of which components have finished
    realtrialComponents = [];
    realtrialComponents.push(fixation);
    realtrialComponents.push(top_word);
    realtrialComponents.push(bottom_word);
    realtrialComponents.push(probe);
    realtrialComponents.push(key_resp);
    
    realtrialComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function realtrialRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'realtrial' ---
    // get current time
    t = realtrialClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *fixation* updates
    if (t >= 0.0 && fixation.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      fixation.tStart = t;  // (not accounting for frame time here)
      fixation.frameNStart = frameN;  // exact frame index
      
      fixation.setAutoDraw(true);
    }
    
    frameRemains = 0.0 + 0.5 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (fixation.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      fixation.setAutoDraw(false);
    }
    
    
    // *top_word* updates
    if (t >= 1 && top_word.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      top_word.tStart = t;  // (not accounting for frame time here)
      top_word.frameNStart = frameN;  // exact frame index
      
      top_word.setAutoDraw(true);
    }
    
    frameRemains = 1 + 0.5 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (top_word.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      top_word.setAutoDraw(false);
    }
    
    
    // *bottom_word* updates
    if (t >= 1 && bottom_word.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      bottom_word.tStart = t;  // (not accounting for frame time here)
      bottom_word.frameNStart = frameN;  // exact frame index
      
      bottom_word.setAutoDraw(true);
    }
    
    frameRemains = 1 + 0.5 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (bottom_word.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      bottom_word.setAutoDraw(false);
    }
    
    
    // *probe* updates
    if (t >= 1.5 && probe.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      probe.tStart = t;  // (not accounting for frame time here)
      probe.frameNStart = frameN;  // exact frame index
      
      probe.setAutoDraw(true);
    }
    
    
    // *key_resp* updates
    if (t >= 1.5 && key_resp.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp.tStart = t;  // (not accounting for frame time here)
      key_resp.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp.clearEvents(); });
    }
    
    if (key_resp.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp.getKeys({keyList: ['z', 'm'], waitRelease: false});
      _key_resp_allKeys = _key_resp_allKeys.concat(theseKeys);
      if (_key_resp_allKeys.length > 0) {
        key_resp.keys = _key_resp_allKeys[_key_resp_allKeys.length - 1].name;  // just the last key pressed
        key_resp.rt = _key_resp_allKeys[_key_resp_allKeys.length - 1].rt;
        key_resp.duration = _key_resp_allKeys[_key_resp_allKeys.length - 1].duration;
        // was this correct?
        if (key_resp.keys == answer) {
            key_resp.corr = 1;
        } else {
            key_resp.corr = 0;
        }
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    realtrialComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function realtrialRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'realtrial' ---
    realtrialComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('realtrial.stopped', globalClock.getTime());
    // was no response the correct answer?!
    if (key_resp.keys === undefined) {
      if (['None','none',undefined].includes(answer)) {
         key_resp.corr = 1;  // correct non-response
      } else {
         key_resp.corr = 0;  // failed to respond (incorrectly)
      }
    }
    // store data for current loop
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(key_resp.corr, level);
    }
    psychoJS.experiment.addData('key_resp.keys', key_resp.keys);
    psychoJS.experiment.addData('key_resp.corr', key_resp.corr);
    if (typeof key_resp.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp.rt', key_resp.rt);
        psychoJS.experiment.addData('key_resp.duration', key_resp.duration);
        routineTimer.reset();
        }
    
    key_resp.stop();
    // the Routine "realtrial" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var feedbackMaxDurationReached;
var fbtxt;
var fbcol;
var feedbackMaxDuration;
var feedbackComponents;
function feedbackRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'feedback' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    feedbackClock.reset(routineTimer.getTime());
    routineTimer.add(0.500000);
    feedbackMaxDurationReached = false;
    // update component parameters for each repeat
    // Run 'Begin Routine' code from fbcode
    if ((key_resp.corr === 1)) {
        fbtxt = "Correct!";
        fbcol = "Green";
    } else {
        fbtxt = "Incorrect";
        fbcol = "Red";
    }
    
    textbox.setColor(new util.Color(fbcol));
    textbox.setText(fbtxt);
    psychoJS.experiment.addData('feedback.started', globalClock.getTime());
    feedbackMaxDuration = null
    // keep track of which components have finished
    feedbackComponents = [];
    feedbackComponents.push(textbox);
    
    feedbackComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function feedbackRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'feedback' ---
    // get current time
    t = feedbackClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *textbox* updates
    if (t >= 0.0 && textbox.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      textbox.tStart = t;  // (not accounting for frame time here)
      textbox.frameNStart = frameN;  // exact frame index
      
      textbox.setAutoDraw(true);
    }
    
    frameRemains = 0.0 + 0.5 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (textbox.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      textbox.setAutoDraw(false);
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    feedbackComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function feedbackRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'feedback' ---
    feedbackComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('feedback.stopped', globalClock.getTime());
    if (feedbackMaxDurationReached) {
        feedbackClock.add(feedbackMaxDuration);
    } else {
        feedbackClock.add(0.500000);
    }
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var byeMaxDurationReached;
var byeMaxDuration;
var byeComponents;
function byeRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'bye' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    byeClock.reset(routineTimer.getTime());
    routineTimer.add(2.000000);
    byeMaxDurationReached = false;
    // update component parameters for each repeat
    psychoJS.experiment.addData('bye.started', globalClock.getTime());
    byeMaxDuration = null
    // keep track of which components have finished
    byeComponents = [];
    byeComponents.push(bye_txt);
    
    byeComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function byeRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'bye' ---
    // get current time
    t = byeClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *bye_txt* updates
    if (t >= 0.0 && bye_txt.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      bye_txt.tStart = t;  // (not accounting for frame time here)
      bye_txt.frameNStart = frameN;  // exact frame index
      
      bye_txt.setAutoDraw(true);
    }
    
    frameRemains = 0.0 + 2 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (bye_txt.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      bye_txt.setAutoDraw(false);
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    byeComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function byeRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'bye' ---
    byeComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('bye.stopped', globalClock.getTime());
    if (byeMaxDurationReached) {
        byeClock.add(byeMaxDuration);
    } else {
        byeClock.add(2.000000);
    }
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


function importConditions(currentLoop) {
  return async function () {
    psychoJS.importAttributes(currentLoop.getCurrentTrial());
    return Scheduler.Event.NEXT;
    };
}


async function quitPsychoJS(message, isCompleted) {
  // Check for and save orphaned data
  if (psychoJS.experiment.isEntryEmpty()) {
    psychoJS.experiment.nextEntry();
  }
  psychoJS.window.close();
  psychoJS.quit({message: message, isCompleted: isCompleted});
  
  return Scheduler.Event.QUIT;
}
