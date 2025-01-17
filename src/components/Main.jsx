import React, {useState, useEffect} from 'react';
import {Grid} from '@material-ui/core';
import TaskSelector from './TaskSelector';
import {
  calculateAPR,
  calculateFutureTokens,
  calculateTime,
  calculateNecessaryTokens,
} from './TasksFunctions';
import Footer from './Footer';
import {TaskA} from './InputsSection/TaskA';
import {TaskC} from './InputsSection/TaskC';
import {TaskD} from './InputsSection/TaskD';
import {TaskE} from './InputsSection/TaskE';
import {makeStyles} from '@material-ui/core';
import {style} from './InputsSection/styles';
import TokenSelector from './TokenSelector';

const useStyles = makeStyles(style);

const IAPR = {
  TAPR: undefined, // Tokens APR
  USDAPR: Number, // Dolars APR
};

const Main = props => {
  const [starterTokens, setStarterTokens] = useState(undefined);
  const [finalTokens, setFinalTokens] = useState(undefined);
  const [apr, setApr] = useState(IAPR);
  const [startDate, setStartDate] = useState(null);
  const [finalDate, setFinalDate] = useState(null);
  const [task, setTask] = useState(null);
  const [necessaryTime, setNecessaryTime] = useState(undefined);

  const classes = useStyles();

  const resetValues = () => {
    setStarterTokens(undefined);
    setFinalTokens(undefined);
    setApr(prevState => {
      return {TAPR: undefined};
    });
    setNecessaryTime(undefined);
  };

  useEffect(() => {
    if (task === 'A') {
      let apr2 = calculateAPR(starterTokens, finalTokens, startDate, finalDate);
      setApr(prevState => {
        return {TAPR: apr2};
      });
    }
  }, [task, starterTokens, finalTokens, startDate, finalDate]);

  useEffect(() => {
    if (task === 'C') {
      let futureTokens = calculateFutureTokens(starterTokens, startDate, finalDate, apr.TAPR);
      setFinalTokens(futureTokens);
    }
  }, [task, starterTokens, startDate, finalDate, apr.TAPR]);

  useEffect(() => {
    if (task === 'D') {
      let time = calculateTime(starterTokens, finalTokens, apr.TAPR);
      setNecessaryTime(time);
    }
  }, [task, starterTokens, finalTokens, apr.TAPR]);

  useEffect(() => {
    if (task === 'E') {
      let necessaryTokens = calculateNecessaryTokens(finalTokens, apr.TAPR, necessaryTime);
      setStarterTokens(necessaryTokens);
    }
  }, [task, finalTokens, apr.TAPR, necessaryTime]);

  return (
    <Grid item style={{width: '100%', maxWidth: 700}}>
      <div className={classes.borders}>
        <Grid container justifyContent='center'>
          <Grid item xs={12} style={{display: 'flex', justifyContent: 'center'}}>
            <p style={{marginBottom: 0}}>Paso 1: ¿Qué deseas calcular?</p>
          </Grid>
        </Grid>
        <Grid container>
          <Grid item xs={12} style={{margin: '0.75em 1em'}}>
            <TaskSelector task={task} setTask={setTask} resetValues={resetValues} />
          </Grid>
        </Grid>
      </div>

      {task ? (
        <div className={classes.borders}>
          <Grid container justifyContent='center'>
            <Grid item xs={12} style={{display: 'flex', justifyContent: 'center'}}>
              <p style={{marginBottom: 0}}>Opcional: Elige un Token</p>
            </Grid>
          </Grid>
          <Grid container justifyContent='center' style={{margin: '1em 0em'}}>
            <TokenSelector />
          </Grid>
        </div>
      ) : null}

      {/* PASO 2 */}

      {task === 'A' ? (
        <TaskA
          starterTokens={starterTokens}
          setStarterTokens={setStarterTokens}
          setStartDate={setStartDate}
          finalTokens={finalTokens}
          setFinalTokens={setFinalTokens}
          setFinalDate={setFinalDate}
          apr={apr}
          setApr={setApr}
        />
      ) : null}
      {task === 'C' ? (
        <TaskC
          starterTokens={starterTokens}
          setStarterTokens={setStarterTokens}
          setStartDate={setStartDate}
          finalTokens={finalTokens}
          setFinalTokens={setFinalTokens}
          setFinalDate={setFinalDate}
          apr={apr}
          setApr={setApr}
        />
      ) : null}
      {task === 'D' ? (
        <TaskD
          starterTokens={starterTokens}
          setStarterTokens={setStarterTokens}
          finalTokens={finalTokens}
          setFinalTokens={setFinalTokens}
          apr={apr}
          setApr={setApr}
          necessaryTime={necessaryTime}
        />
      ) : null}
      {task === 'E' ? (
        <TaskE
          starterTokens={starterTokens}
          setStarterTokens={setStarterTokens}
          finalTokens={finalTokens}
          setFinalTokens={setFinalTokens}
          apr={apr}
          setApr={setApr}
          necessaryTime={necessaryTime}
          setNecessaryTime={setNecessaryTime}
        />
      ) : null}
      <Grid item xs={12}>
        <Footer />
      </Grid>
    </Grid>
  );
};

export default Main;
