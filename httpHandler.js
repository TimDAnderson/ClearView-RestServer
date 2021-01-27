const clearviewCommand = require('./clearviewCommand');
var router = require('express').Router();

//boilerplate route, copy/paste
router.post('/', (req, res) => {
  let cvCommand = '';
  clearviewCommand.create(cvCommand, (err, responseText) => {
    if (err) {
      res.sendStatus(404);
    } else {
      res.send(responseText.toString('utf8').replace(/\0/g, ''))
    }
  });
})

//help
router.get('/help', (req, res) => {
  let cvCommand = '?';
  clearviewCommand.create(cvCommand, (err, responseText) => {
    if (err) {
      res.sendStatus(404);
    } else {
      res.send(responseText.toString('utf8').replace(/\0/g, ''))
    }
  });
})

//usage for command
router.get('/help/:command', (req, res) => {
  let cvCommand = `? ${req.params.command}`;
  clearviewCommand.create(cvCommand, (err, responseText) => {
    if (err) {
      res.sendStatus(404);
    } else {
      res.send(responseText.toString('utf8').replace(/\0/g, ''))
    }
  });
})

//AminusBconfig - ugly if/else block but easier for customer to enter commands 
router.post('/AminusBconfig/:useThreshold/:threshold/:chroma/:addback', (req, res) => {
  let cvCommand = `AMinusBConfig ${req.params.useThreshold} ${req.params.threshold} ${req.params.chroma} ${req.params.addback}`
  clearviewCommand.create(cvCommand, (err, responseText) => {
    if (err) {
      res.sendStatus(404);
    } else {
      res.send(responseText.toString('utf8').replace(/\0/g, ''))
    }
  })
});

//AnalogFormat
router.post('/analogformat/:format', (req, res) => {
  let cvCommand = `analogformat ${req.params.format}`;
  clearviewCommand.create(cvCommand, (err, responseText) => {
    if (err) {
      res.sendStatus(404);
    } else {
      res.send(responseText.toString('utf8').replace(/\0/g, ''))
    }
  });
})

//autoalign
router.post('/autoalign/:maximizeLength/:alignmode', (req, res) => {
  let cvCommand = '';
  if ((req.query.DomSeqOnA !== undefined) && (req.query.exhaustiveSearchRange !== undefined)) {
    cvCommand = `autoalign ${req.params.maximizeLength} ${req.params.alignmode} ${req.query.DomSeqOnA} ${req.query.exhaustiveSearchRange}`
  } else if (eq.query.DomSeqOnA !== undefined) {
    cvCommand = `autoalign ${req.params.maximizeLength} ${req.params.alignmode} ${req.query.DomSeqOnA}`
  } else {
    cvCommand = `autoalign ${req.params.maximizeLength} ${req.params.alignmode}`
  }

  clearviewCommand.create(cvCommand, (err, responseText) => {
    if (err) {
      res.sendStatus(404);
    } else {
      res.send(responseText.toString('utf8').replace(/\0/g, ''))
    }
  });
})

//boardtemp
router.get('/boardtemp/:module', (req, res) => {
  let cvCommand = `boardtemp ${req.params.module}`
  clearviewCommand.create(cvCommand, (err, responseText) => {
    if (err) {
      res.sendStatus(404);
    } else {
      res.send(responseText.toString('utf8').replace(/\0/g, ''))
    }
  });
})

//configafreq
router.post('/ConfigAfreq/:batchMilliseconds/:lowPassThreshold/:silenceThreshold/:alignSearchRange/:interval', (req, res) => {
  let cvCommand = `ConfigAfreq ${req.params.batchMilliseconds} ${req.params.lowPassThreshold} ${req.params.silenceThreshold} ${req.params.alignSearchRange} ${req.params.interval}`;
  clearviewCommand.create(cvCommand, (err, responseText) => {
    if (err) {
      res.sendStatus(404);
    } else {
      res.send(responseText.toString('utf8').replace(/\0/g, ''))
    }
  });
})

//configDMOS
router.post('/configDMOS/:fieldMode/:maxValue', (req, res) => {
  let cvCommand = `configDMOS ${req.params.fieldMode} ${req.params.maxValue}`;
  clearviewCommand.create(cvCommand, (err, responseText) => {
    if (err) {
      res.sendStatus(404);
    } else {
      res.send(responseText.toString('utf8').replace(/\0/g, ''))
    }
  });
})

//configExport


//play
router.post('/play', (req, res) => {
  let cvCommand = ''
  if (req.query.block !== undefined) {
    cvCommand = `play ${req.query.block}`
  } else {
    cvCommand = 'play'
  }

  clearviewCommand.create(cvCommand, (err, responseText) => {
    if (err) {
      res.sendStatus(404);
    } else {
      res.send(responseText.toString('utf8').replace(/\0/g, ''))
    }
  });
})

//playmode
router.post('/playmode/:mode', (req, res) => {
  let cvCommand = `playmode ${req.params.mode}`
  clearviewCommand.create(cvCommand, (err, responseText) => {
    if (err) {
      res.sendStatus(404);
    } else {
      res.send(responseText.toString('utf8').replace(/\0/g, ''))
    }
  });
});

//viewmode
router.post('/viewmode/:mode', (req, res) => {
  let cvCommand = '';
  if ((req.query.horizontal !== undefined)&& req.query.splitPoint) {
    cvCommand = `viewmode ${req.params.mode} ${req.query.horizontal} ${req.query.splitPoint}`;
  } else if (req.query.horizontal !== undefined) {
    cvCommand = `viewmode ${req.params.mode} ${req.query.horizontal}`
  } else {
    cvCommand = `viewmode ${req.params.mode}`;
  }

  clearviewCommand.create(cvCommand, (err, responseText) => {
    if (err) {
      res.sendStatus(404);
    } else {
      res.send(responseText.toString('utf8').replace(/\0/g, ''))
    }
  })
});

module.exports = router;