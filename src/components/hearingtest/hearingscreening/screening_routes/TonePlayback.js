import React from 'react';
import useSound from 'use-sound';

import L500Hz15 from './audio_files/L500Hz15.wav';
import L500Hz20 from './audio_files/L500Hz20.wav';
import L500Hz25 from './audio_files/L500Hz25.wav';
import L500Hz30 from './audio_files/L500Hz30.wav';
import L500Hz35 from './audio_files/L500Hz35.wav';
import L500Hz40 from './audio_files/L500Hz40.wav';
import L500Hz45 from './audio_files/L500Hz45.wav';
import L500Hz50 from './audio_files/L500Hz50.wav';
import L500Hz55 from './audio_files/L500Hz55.wav';
import L500Hz60 from './audio_files/L500Hz60.wav';
import L500Hz65 from './audio_files/L500Hz65.wav';
import L500Hz70 from './audio_files/L500Hz70.wav';
import L500Hz75 from './audio_files/L500Hz75.wav';
import L1000Hz15 from './audio_files/L1000Hz15.wav';
import L1000Hz20 from './audio_files/L1000Hz20.wav';
import L1000Hz25 from './audio_files/L1000Hz25.wav';
import L1000Hz30 from './audio_files/L1000Hz30.wav';
import L1000Hz35 from './audio_files/L1000Hz35.wav';
import L1000Hz40 from './audio_files/L1000Hz40.wav';
import L1000Hz45 from './audio_files/L1000Hz45.wav';
import L1000Hz50 from './audio_files/L1000Hz50.wav';
import L1000Hz55 from './audio_files/L1000Hz55.wav';
import L1000Hz60 from './audio_files/L1000Hz60.wav';
import L1000Hz65 from './audio_files/L1000Hz65.wav';
import L1000Hz70 from './audio_files/L1000Hz70.wav';
import L1000Hz75 from './audio_files/L1000Hz75.wav';
import L2000Hz15 from './audio_files/L2000Hz15.wav';
import L2000Hz20 from './audio_files/L2000Hz20.wav';
import L2000Hz25 from './audio_files/L2000Hz25.wav';
import L2000Hz30 from './audio_files/L2000Hz30.wav';
import L2000Hz35 from './audio_files/L2000Hz35.wav';
import L2000Hz40 from './audio_files/L2000Hz40.wav';
import L2000Hz45 from './audio_files/L2000Hz45.wav';
import L2000Hz50 from './audio_files/L2000Hz50.wav';
import L2000Hz55 from './audio_files/L2000Hz55.wav';
import L2000Hz60 from './audio_files/L2000Hz60.wav';
import L2000Hz65 from './audio_files/L2000Hz65.wav';
import L2000Hz70 from './audio_files/L2000Hz70.wav';
import L2000Hz75 from './audio_files/L2000Hz75.wav';
import L4000Hz15 from './audio_files/L4000Hz15.wav';
import L4000Hz20 from './audio_files/L4000Hz20.wav';
import L4000Hz25 from './audio_files/L4000Hz25.wav';
import L4000Hz30 from './audio_files/L4000Hz30.wav';
import L4000Hz35 from './audio_files/L4000Hz35.wav';
import L4000Hz40 from './audio_files/L4000Hz40.wav';
import L4000Hz45 from './audio_files/L4000Hz45.wav';
import L4000Hz50 from './audio_files/L4000Hz50.wav';
import L4000Hz55 from './audio_files/L4000Hz55.wav';
import L4000Hz60 from './audio_files/L4000Hz60.wav';
import L4000Hz65 from './audio_files/L4000Hz65.wav';
import L4000Hz70 from './audio_files/L4000Hz70.wav';
import L4000Hz75 from './audio_files/L4000Hz75.wav';
import L6000Hz15 from './audio_files/L6000Hz15.wav';
import L6000Hz20 from './audio_files/L6000Hz20.wav';
import L6000Hz25 from './audio_files/L6000Hz25.wav';
import L6000Hz30 from './audio_files/L6000Hz30.wav';
import L6000Hz35 from './audio_files/L6000Hz35.wav';
import L6000Hz40 from './audio_files/L6000Hz40.wav';
import L6000Hz45 from './audio_files/L6000Hz45.wav';
import L6000Hz50 from './audio_files/L6000Hz50.wav';
import L6000Hz55 from './audio_files/L6000Hz55.wav';
import L6000Hz60 from './audio_files/L6000Hz60.wav';
import L6000Hz65 from './audio_files/L6000Hz65.wav';
import L6000Hz70 from './audio_files/L6000Hz70.wav';
import L6000Hz75 from './audio_files/L6000Hz75.wav';
import R500Hz15 from './audio_files/R500Hz15.wav';
import R500Hz20 from './audio_files/R500Hz20.wav';
import R500Hz25 from './audio_files/R500Hz25.wav';
import R500Hz30 from './audio_files/R500Hz30.wav';
import R500Hz35 from './audio_files/R500Hz35.wav';
import R500Hz40 from './audio_files/R500Hz40.wav';
import R500Hz45 from './audio_files/R500Hz45.wav';
import R500Hz50 from './audio_files/R500Hz50.wav';
import R500Hz55 from './audio_files/R500Hz55.wav';
import R500Hz60 from './audio_files/R500Hz60.wav';
import R500Hz65 from './audio_files/R500Hz65.wav';
import R500Hz70 from './audio_files/R500Hz70.wav';
import R500Hz75 from './audio_files/R500Hz75.wav';
import R1000Hz15 from './audio_files/R1000Hz15.wav';
import R1000Hz20 from './audio_files/R1000Hz20.wav';
import R1000Hz25 from './audio_files/R1000Hz25.wav';
import R1000Hz30 from './audio_files/R1000Hz30.wav';
import R1000Hz35 from './audio_files/R1000Hz35.wav';
import R1000Hz40 from './audio_files/R1000Hz40.wav';
import R1000Hz45 from './audio_files/R1000Hz45.wav';
import R1000Hz50 from './audio_files/R1000Hz50.wav';
import R1000Hz55 from './audio_files/R1000Hz55.wav';
import R1000Hz60 from './audio_files/R1000Hz60.wav';
import R1000Hz65 from './audio_files/R1000Hz65.wav';
import R1000Hz70 from './audio_files/R1000Hz70.wav';
import R1000Hz75 from './audio_files/R1000Hz75.wav';
import R2000Hz15 from './audio_files/R2000Hz15.wav';
import R2000Hz20 from './audio_files/R2000Hz20.wav';
import R2000Hz25 from './audio_files/R2000Hz25.wav';
import R2000Hz30 from './audio_files/R2000Hz30.wav';
import R2000Hz35 from './audio_files/R2000Hz35.wav';
import R2000Hz40 from './audio_files/R2000Hz40.wav';
import R2000Hz45 from './audio_files/R2000Hz45.wav';
import R2000Hz50 from './audio_files/R2000Hz50.wav';
import R2000Hz55 from './audio_files/R2000Hz55.wav';
import R2000Hz60 from './audio_files/R2000Hz60.wav';
import R2000Hz65 from './audio_files/R2000Hz65.wav';
import R2000Hz70 from './audio_files/R2000Hz70.wav';
import R2000Hz75 from './audio_files/R2000Hz75.wav';
import R4000Hz15 from './audio_files/R4000Hz15.wav';
import R4000Hz20 from './audio_files/R4000Hz20.wav';
import R4000Hz25 from './audio_files/R4000Hz25.wav';
import R4000Hz30 from './audio_files/R4000Hz30.wav';
import R4000Hz35 from './audio_files/R4000Hz35.wav';
import R4000Hz40 from './audio_files/R4000Hz40.wav';
import R4000Hz45 from './audio_files/R4000Hz45.wav';
import R4000Hz50 from './audio_files/R4000Hz50.wav';
import R4000Hz55 from './audio_files/R4000Hz55.wav';
import R4000Hz60 from './audio_files/R4000Hz60.wav';
import R4000Hz65 from './audio_files/R4000Hz65.wav';
import R4000Hz70 from './audio_files/R4000Hz70.wav';
import R4000Hz75 from './audio_files/R4000Hz75.wav';
import R6000Hz15 from './audio_files/R6000Hz15.wav';
import R6000Hz20 from './audio_files/R6000Hz20.wav';
import R6000Hz25 from './audio_files/R6000Hz25.wav';
import R6000Hz30 from './audio_files/R6000Hz30.wav';
import R6000Hz35 from './audio_files/R6000Hz35.wav';
import R6000Hz40 from './audio_files/R6000Hz40.wav';
import R6000Hz45 from './audio_files/R6000Hz45.wav';
import R6000Hz50 from './audio_files/R6000Hz50.wav';
import R6000Hz55 from './audio_files/R6000Hz55.wav';
import R6000Hz60 from './audio_files/R6000Hz60.wav';
import R6000Hz65 from './audio_files/R6000Hz65.wav';
import R6000Hz70 from './audio_files/R6000Hz70.wav';
import R6000Hz75 from './audio_files/R6000Hz75.wav';


export const BoopButton = (props) => {
    const [playL500Hz15] = useSound(L500Hz15);
    const [playL500Hz20] = useSound(L500Hz20);
    const [playL500Hz25] = useSound(L500Hz25);
    const [playL500Hz30] = useSound(L500Hz30);
    const [playL500Hz35] = useSound(L500Hz35);
    const [playL500Hz40] = useSound(L500Hz40);
    const [playL500Hz45] = useSound(L500Hz45);
    const [playL500Hz50] = useSound(L500Hz50);
    const [playL500Hz55] = useSound(L500Hz55);
    const [playL500Hz60] = useSound(L500Hz60);
    const [playL500Hz65] = useSound(L500Hz65);
    const [playL500Hz70] = useSound(L500Hz70);
    const [playL500Hz75] = useSound(L500Hz75);
    const [playL1000Hz15] = useSound(L1000Hz15);
    const [playL1000Hz20] = useSound(L1000Hz20);
    const [playL1000Hz25] = useSound(L1000Hz25);
    const [playL1000Hz30] = useSound(L1000Hz30);
    const [playL1000Hz35] = useSound(L1000Hz35);
    const [playL1000Hz40] = useSound(L1000Hz40);
    const [playL1000Hz45] = useSound(L1000Hz45);
    const [playL1000Hz50] = useSound(L1000Hz50);
    const [playL1000Hz55] = useSound(L1000Hz55);
    const [playL1000Hz60] = useSound(L1000Hz60);
    const [playL1000Hz65] = useSound(L1000Hz65);
    const [playL1000Hz70] = useSound(L1000Hz70);
    const [playL1000Hz75] = useSound(L1000Hz75);
    const [playL2000Hz15] = useSound(L2000Hz15);
    const [playL2000Hz20] = useSound(L2000Hz20);
    const [playL2000Hz25] = useSound(L2000Hz25);
    const [playL2000Hz30] = useSound(L2000Hz30);
    const [playL2000Hz35] = useSound(L2000Hz35);
    const [playL2000Hz40] = useSound(L2000Hz40);
    const [playL2000Hz45] = useSound(L2000Hz45);
    const [playL2000Hz50] = useSound(L2000Hz50);
    const [playL2000Hz55] = useSound(L2000Hz55);
    const [playL2000Hz60] = useSound(L2000Hz60);
    const [playL2000Hz65] = useSound(L2000Hz65);
    const [playL2000Hz70] = useSound(L2000Hz70);
    const [playL2000Hz75] = useSound(L2000Hz75);
    const [playL4000Hz15] = useSound(L4000Hz15);
    const [playL4000Hz20] = useSound(L4000Hz20);
    const [playL4000Hz25] = useSound(L4000Hz25);
    const [playL4000Hz30] = useSound(L4000Hz30);
    const [playL4000Hz35] = useSound(L4000Hz35);
    const [playL4000Hz40] = useSound(L4000Hz40);
    const [playL4000Hz45] = useSound(L4000Hz45);
    const [playL4000Hz50] = useSound(L4000Hz50);
    const [playL4000Hz55] = useSound(L4000Hz55);
    const [playL4000Hz60] = useSound(L4000Hz60);
    const [playL4000Hz65] = useSound(L4000Hz65);
    const [playL4000Hz70] = useSound(L4000Hz70);
    const [playL4000Hz75] = useSound(L4000Hz75);
    const [playL6000Hz15] = useSound(L6000Hz15);
    const [playL6000Hz20] = useSound(L6000Hz20);
    const [playL6000Hz25] = useSound(L6000Hz25);
    const [playL6000Hz30] = useSound(L6000Hz30);
    const [playL6000Hz35] = useSound(L6000Hz35);
    const [playL6000Hz40] = useSound(L6000Hz40);
    const [playL6000Hz45] = useSound(L6000Hz45);
    const [playL6000Hz50] = useSound(L6000Hz50);
    const [playL6000Hz55] = useSound(L6000Hz55);
    const [playL6000Hz60] = useSound(L6000Hz60);
    const [playL6000Hz65] = useSound(L6000Hz65);
    const [playL6000Hz70] = useSound(L6000Hz70);
    const [playL6000Hz75] = useSound(L6000Hz75);
    const [playR500Hz15] = useSound(R500Hz15);
    const [playR500Hz20] = useSound(R500Hz20);
    const [playR500Hz25] = useSound(R500Hz25);
    const [playR500Hz30] = useSound(R500Hz30);
    const [playR500Hz35] = useSound(R500Hz35);
    const [playR500Hz40] = useSound(R500Hz40);
    const [playR500Hz45] = useSound(R500Hz45);
    const [playR500Hz50] = useSound(R500Hz50);
    const [playR500Hz55] = useSound(R500Hz55);
    const [playR500Hz60] = useSound(R500Hz60);
    const [playR500Hz65] = useSound(R500Hz65);
    const [playR500Hz70] = useSound(R500Hz70);
    const [playR500Hz75] = useSound(R500Hz75);
    const [playR1000Hz15] = useSound(R1000Hz15);
    const [playR1000Hz20] = useSound(R1000Hz20);
    const [playR1000Hz25] = useSound(R1000Hz25);
    const [playR1000Hz30] = useSound(R1000Hz30);
    const [playR1000Hz35] = useSound(R1000Hz35);
    const [playR1000Hz40] = useSound(R1000Hz40);
    const [playR1000Hz45] = useSound(R1000Hz45);
    const [playR1000Hz50] = useSound(R1000Hz50);
    const [playR1000Hz55] = useSound(R1000Hz55);
    const [playR1000Hz60] = useSound(R1000Hz60);
    const [playR1000Hz65] = useSound(R1000Hz65);
    const [playR1000Hz70] = useSound(R1000Hz70);
    const [playR1000Hz75] = useSound(R1000Hz75);
    const [playR2000Hz15] = useSound(R2000Hz15);
    const [playR2000Hz20] = useSound(R2000Hz20);
    const [playR2000Hz25] = useSound(R2000Hz25);
    const [playR2000Hz30] = useSound(R2000Hz30);
    const [playR2000Hz35] = useSound(R2000Hz35);
    const [playR2000Hz40] = useSound(R2000Hz40);
    const [playR2000Hz45] = useSound(R2000Hz45);
    const [playR2000Hz50] = useSound(R2000Hz50);
    const [playR2000Hz55] = useSound(R2000Hz55);
    const [playR2000Hz60] = useSound(R2000Hz60);
    const [playR2000Hz65] = useSound(R2000Hz65);
    const [playR2000Hz70] = useSound(R2000Hz70);
    const [playR2000Hz75] = useSound(R2000Hz75);
    const [playR4000Hz15] = useSound(R4000Hz15);
    const [playR4000Hz20] = useSound(R4000Hz20);
    const [playR4000Hz25] = useSound(R4000Hz25);
    const [playR4000Hz30] = useSound(R4000Hz30);
    const [playR4000Hz35] = useSound(R4000Hz35);
    const [playR4000Hz40] = useSound(R4000Hz40);
    const [playR4000Hz45] = useSound(R4000Hz45);
    const [playR4000Hz50] = useSound(R4000Hz50);
    const [playR4000Hz55] = useSound(R4000Hz55);
    const [playR4000Hz60] = useSound(R4000Hz60);
    const [playR4000Hz65] = useSound(R4000Hz65);
    const [playR4000Hz70] = useSound(R4000Hz70);
    const [playR4000Hz75] = useSound(R4000Hz75);
    const [playR6000Hz15] = useSound(R6000Hz15);
    const [playR6000Hz20] = useSound(R6000Hz20);
    const [playR6000Hz25] = useSound(R6000Hz25);
    const [playR6000Hz30] = useSound(R6000Hz30);
    const [playR6000Hz35] = useSound(R6000Hz35);
    const [playR6000Hz40] = useSound(R6000Hz40);
    const [playR6000Hz45] = useSound(R6000Hz45);
    const [playR6000Hz50] = useSound(R6000Hz50);
    const [playR6000Hz55] = useSound(R6000Hz55);
    const [playR6000Hz60] = useSound(R6000Hz60);
    const [playR6000Hz65] = useSound(R6000Hz65);
    const [playR6000Hz70] = useSound(R6000Hz70);
    const [playR6000Hz75] = useSound(R6000Hz75);


    if (props.boop === 'playL500Hz15') {
        return (<button className="btn btn-primary text-white my-3" disabled={props.disabled} onClick={() => {props.clickDisable(); props.hasClicked();  playL500Hz15(); }}><span className="display-4 d-flex"><i className="bi bi-play-fill display-1 text-white"></i><span className="align-self-center pr-1">Play Tone </span></span></button>);
    } else if (props.boop === 'playL500Hz20') {
        return (<button className="btn btn-primary text-white my-3" disabled={props.disabled} onClick={() => {props.clickDisable(); props.hasClicked();  playL500Hz20(); }}><span className="display-4 d-flex"><i className="bi bi-play-fill display-1 text-white"></i><span className="align-self-center pr-1">Play Tone </span></span></button>);
    } else if (props.boop === 'playL500Hz25') {
        return (<button className="btn btn-primary text-white my-3" disabled={props.disabled} onClick={() => {props.clickDisable(); props.hasClicked();  playL500Hz25(); }}><span className="display-4 d-flex"><i className="bi bi-play-fill display-1 text-white"></i><span className="align-self-center pr-1">Play Tone </span></span></button>);
    } else if (props.boop === 'playL500Hz30') {
        return (<button className="btn btn-primary text-white my-3" disabled={props.disabled} onClick={() => {props.clickDisable(); props.hasClicked();  playL500Hz30(); }}><span className="display-4 d-flex"><i className="bi bi-play-fill display-1 text-white"></i><span className="align-self-center pr-1">Play Tone </span></span></button>);
    } else if (props.boop === 'playL500Hz35') {
        return (<button className="btn btn-primary text-white my-3" disabled={props.disabled} onClick={() => {props.clickDisable(); props.hasClicked();  playL500Hz35(); }}><span className="display-4 d-flex"><i className="bi bi-play-fill display-1 text-white"></i><span className="align-self-center pr-1">Play Tone </span></span></button>);
    } else if (props.boop === 'playL500Hz40') {
        return (<button className="btn btn-primary text-white my-3" disabled={props.disabled} onClick={() => {props.clickDisable(); props.hasClicked();  playL500Hz40(); }}><span className="display-4 d-flex"><i className="bi bi-play-fill display-1 text-white"></i><span className="align-self-center pr-1">Play Tone </span></span></button>);
    } else if (props.boop === 'playL500Hz45') {
        return (<button className="btn btn-primary text-white my-3" disabled={props.disabled} onClick={() => {props.clickDisable(); props.hasClicked();  playL500Hz45(); }}><span className="display-4 d-flex"><i className="bi bi-play-fill display-1 text-white"></i><span className="align-self-center pr-1">Play Tone </span></span></button>);
    } else if (props.boop === 'playL500Hz50') {
        return (<button className="btn btn-primary text-white my-3" disabled={props.disabled} onClick={() => {props.clickDisable(); props.hasClicked();  playL500Hz50(); }}><span className="display-4 d-flex"><i className="bi bi-play-fill display-1 text-white"></i><span className="align-self-center pr-1">Play Tone </span></span></button>);
    } else if (props.boop === 'playL500Hz55') {
        return (<button className="btn btn-primary text-white my-3" disabled={props.disabled} onClick={() => {props.clickDisable(); props.hasClicked();  playL500Hz55(); }}><span className="display-4 d-flex"><i className="bi bi-play-fill display-1 text-white"></i><span className="align-self-center pr-1">Play Tone </span></span></button>);
    } else if (props.boop === 'playL500Hz60') {
        return (<button className="btn btn-primary text-white my-3" disabled={props.disabled} onClick={() => {props.clickDisable(); props.hasClicked();  playL500Hz60(); }}><span className="display-4 d-flex"><i className="bi bi-play-fill display-1 text-white"></i><span className="align-self-center pr-1">Play Tone </span></span></button>);
    } else if (props.boop === 'playL500Hz65') {
        return (<button className="btn btn-primary text-white my-3" disabled={props.disabled} onClick={() => {props.clickDisable(); props.hasClicked();  playL500Hz65(); }}><span className="display-4 d-flex"><i className="bi bi-play-fill display-1 text-white"></i><span className="align-self-center pr-1">Play Tone </span></span></button>);
    } else if (props.boop === 'playL500Hz70') {
        return (<button className="btn btn-primary text-white my-3" disabled={props.disabled} onClick={() => {props.clickDisable(); props.hasClicked();  playL500Hz70(); }}><span className="display-4 d-flex"><i className="bi bi-play-fill display-1 text-white"></i><span className="align-self-center pr-1">Play Tone </span></span></button>);
    } else if (props.boop === 'playL500Hz75') {
        return (<button className="btn btn-primary text-white my-3" disabled={props.disabled} onClick={() => {props.clickDisable(); props.hasClicked();  playL500Hz75(); }}><span className="display-4 d-flex"><i className="bi bi-play-fill display-1 text-white"></i><span className="align-self-center pr-1">Play Tone </span></span></button>);
    } else if (props.boop === 'playL1000Hz15') {
        return (<button className="btn btn-primary text-white my-3" disabled={props.disabled} onClick={() => {props.clickDisable(); props.hasClicked();  playL1000Hz15(); }}><span className="display-4 d-flex"><i className="bi bi-play-fill display-1 text-white"></i><span className="align-self-center pr-1">Play Tone </span></span></button>);
    } else if (props.boop === 'playL1000Hz20') {
        return (<button className="btn btn-primary text-white my-3" disabled={props.disabled} onClick={() => {props.clickDisable(); props.hasClicked();  playL1000Hz20(); }}><span className="display-4 d-flex"><i className="bi bi-play-fill display-1 text-white"></i><span className="align-self-center pr-1">Play Tone </span></span></button>);
    } else if (props.boop === 'playL1000Hz25') {
        return (<button className="btn btn-primary text-white my-3" disabled={props.disabled} onClick={() => {props.clickDisable(); props.hasClicked();  playL1000Hz25(); }}><span className="display-4 d-flex"><i className="bi bi-play-fill display-1 text-white"></i><span className="align-self-center pr-1">Play Tone </span></span></button>);
    } else if (props.boop === 'playL1000Hz30') {
        return (<button className="btn btn-primary text-white my-3" disabled={props.disabled} onClick={() => {props.clickDisable(); props.hasClicked();  playL1000Hz30(); }}><span className="display-4 d-flex"><i className="bi bi-play-fill display-1 text-white"></i><span className="align-self-center pr-1">Play Tone </span></span></button>);
    } else if (props.boop === 'playL1000Hz35') {
        return (<button className="btn btn-primary text-white my-3" disabled={props.disabled} onClick={() => {props.clickDisable(); props.hasClicked();  playL1000Hz35(); }}><span className="display-4 d-flex"><i className="bi bi-play-fill display-1 text-white"></i><span className="align-self-center pr-1">Play Tone </span></span></button>);
    } else if (props.boop === 'playL1000Hz40') {
        return (<button className="btn btn-primary text-white my-3" disabled={props.disabled} onClick={() => {props.clickDisable(); props.hasClicked();  playL1000Hz40(); }}><span className="display-4 d-flex"><i className="bi bi-play-fill display-1 text-white"></i><span className="align-self-center pr-1">Play Tone </span></span></button>);
    } else if (props.boop === 'playL1000Hz45') {
        return (<button className="btn btn-primary text-white my-3" disabled={props.disabled} onClick={() => {props.clickDisable(); props.hasClicked();  playL1000Hz45(); }}><span className="display-4 d-flex"><i className="bi bi-play-fill display-1 text-white"></i><span className="align-self-center pr-1">Play Tone </span></span></button>);
    } else if (props.boop === 'playL1000Hz50') {
        return (<button className="btn btn-primary text-white my-3" disabled={props.disabled} onClick={() => {props.clickDisable(); props.hasClicked();  playL1000Hz50(); }}><span className="display-4 d-flex"><i className="bi bi-play-fill display-1 text-white"></i><span className="align-self-center pr-1">Play Tone </span></span></button>);
    } else if (props.boop === 'playL1000Hz55') {
        return (<button className="btn btn-primary text-white my-3" disabled={props.disabled} onClick={() => {props.clickDisable(); props.hasClicked();  playL1000Hz55(); }}><span className="display-4 d-flex"><i className="bi bi-play-fill display-1 text-white"></i><span className="align-self-center pr-1">Play Tone </span></span></button>);
    } else if (props.boop === 'playL1000Hz60') {
        return (<button className="btn btn-primary text-white my-3" disabled={props.disabled} onClick={() => {props.clickDisable(); props.hasClicked();  playL1000Hz60(); }}><span className="display-4 d-flex"><i className="bi bi-play-fill display-1 text-white"></i><span className="align-self-center pr-1">Play Tone </span></span></button>);
    } else if (props.boop === 'playL1000Hz65') {
        return (<button className="btn btn-primary text-white my-3" disabled={props.disabled} onClick={() => {props.clickDisable(); props.hasClicked();  playL1000Hz65(); }}><span className="display-4 d-flex"><i className="bi bi-play-fill display-1 text-white"></i><span className="align-self-center pr-1">Play Tone </span></span></button>);
    } else if (props.boop === 'playL1000Hz70') {
        return (<button className="btn btn-primary text-white my-3" disabled={props.disabled} onClick={() => {props.clickDisable(); props.hasClicked();  playL1000Hz70(); }}><span className="display-4 d-flex"><i className="bi bi-play-fill display-1 text-white"></i><span className="align-self-center pr-1">Play Tone </span></span></button>);
    } else if (props.boop === 'playL1000Hz75') {
        return (<button className="btn btn-primary text-white my-3" disabled={props.disabled} onClick={() => {props.clickDisable(); props.hasClicked();  playL1000Hz75(); }}><span className="display-4 d-flex"><i className="bi bi-play-fill display-1 text-white"></i><span className="align-self-center pr-1">Play Tone </span></span></button>);
    } else if (props.boop === 'playL2000Hz15') {
        return (<button className="btn btn-primary text-white my-3" disabled={props.disabled} onClick={() => {props.clickDisable(); props.hasClicked();  playL2000Hz15(); }}><span className="display-4 d-flex"><i className="bi bi-play-fill display-1 text-white"></i><span className="align-self-center pr-1">Play Tone </span></span></button>);
    } else if (props.boop === 'playL2000Hz20') {
        return (<button className="btn btn-primary text-white my-3" disabled={props.disabled} onClick={() => {props.clickDisable(); props.hasClicked();  playL2000Hz20(); }}><span className="display-4 d-flex"><i className="bi bi-play-fill display-1 text-white"></i><span className="align-self-center pr-1">Play Tone </span></span></button>);
    } else if (props.boop === 'playL2000Hz25') {
        return (<button className="btn btn-primary text-white my-3" disabled={props.disabled} onClick={() => {props.clickDisable(); props.hasClicked();  playL2000Hz25(); }}><span className="display-4 d-flex"><i className="bi bi-play-fill display-1 text-white"></i><span className="align-self-center pr-1">Play Tone </span></span></button>);
    } else if (props.boop === 'playL2000Hz30') {
        return (<button className="btn btn-primary text-white my-3" disabled={props.disabled} onClick={() => {props.clickDisable(); props.hasClicked();  playL2000Hz30(); }}><span className="display-4 d-flex"><i className="bi bi-play-fill display-1 text-white"></i><span className="align-self-center pr-1">Play Tone </span></span></button>);
    } else if (props.boop === 'playL2000Hz35') {
        return (<button className="btn btn-primary text-white my-3" disabled={props.disabled} onClick={() => {props.clickDisable(); props.hasClicked();  playL2000Hz35(); }}><span className="display-4 d-flex"><i className="bi bi-play-fill display-1 text-white"></i><span className="align-self-center pr-1">Play Tone </span></span></button>);
    } else if (props.boop === 'playL2000Hz40') {
        return (<button className="btn btn-primary text-white my-3" disabled={props.disabled} onClick={() => {props.clickDisable(); props.hasClicked();  playL2000Hz40(); }}><span className="display-4 d-flex"><i className="bi bi-play-fill display-1 text-white"></i><span className="align-self-center pr-1">Play Tone </span></span></button>);
    } else if (props.boop === 'playL2000Hz45') {
        return (<button className="btn btn-primary text-white my-3" disabled={props.disabled} onClick={() => {props.clickDisable(); props.hasClicked();  playL2000Hz45(); }}><span className="display-4 d-flex"><i className="bi bi-play-fill display-1 text-white"></i><span className="align-self-center pr-1">Play Tone </span></span></button>);
    } else if (props.boop === 'playL2000Hz50') {
        return (<button className="btn btn-primary text-white my-3" disabled={props.disabled} onClick={() => {props.clickDisable(); props.hasClicked();  playL2000Hz50(); }}><span className="display-4 d-flex"><i className="bi bi-play-fill display-1 text-white"></i><span className="align-self-center pr-1">Play Tone </span></span></button>);
    } else if (props.boop === 'playL2000Hz55') {
        return (<button className="btn btn-primary text-white my-3" disabled={props.disabled} onClick={() => {props.clickDisable(); props.hasClicked();  playL2000Hz55(); }}><span className="display-4 d-flex"><i className="bi bi-play-fill display-1 text-white"></i><span className="align-self-center pr-1">Play Tone </span></span></button>);
    } else if (props.boop === 'playL2000Hz60') {
        return (<button className="btn btn-primary text-white my-3" disabled={props.disabled} onClick={() => {props.clickDisable(); props.hasClicked();  playL2000Hz60(); }}><span className="display-4 d-flex"><i className="bi bi-play-fill display-1 text-white"></i><span className="align-self-center pr-1">Play Tone </span></span></button>);
    } else if (props.boop === 'playL2000Hz65') {
        return (<button className="btn btn-primary text-white my-3" disabled={props.disabled} onClick={() => {props.clickDisable(); props.hasClicked();  playL2000Hz65(); }}><span className="display-4 d-flex"><i className="bi bi-play-fill display-1 text-white"></i><span className="align-self-center pr-1">Play Tone </span></span></button>);
    } else if (props.boop === 'playL2000Hz70') {
        return (<button className="btn btn-primary text-white my-3" disabled={props.disabled} onClick={() => {props.clickDisable(); props.hasClicked();  playL2000Hz70(); }}><span className="display-4 d-flex"><i className="bi bi-play-fill display-1 text-white"></i><span className="align-self-center pr-1">Play Tone </span></span></button>);
    } else if (props.boop === 'playL2000Hz75') {
        return (<button className="btn btn-primary text-white my-3" disabled={props.disabled} onClick={() => {props.clickDisable(); props.hasClicked();  playL2000Hz75(); }}><span className="display-4 d-flex"><i className="bi bi-play-fill display-1 text-white"></i><span className="align-self-center pr-1">Play Tone </span></span></button>);
    } else if (props.boop === 'playL4000Hz15') {
        return (<button className="btn btn-primary text-white my-3" disabled={props.disabled} onClick={() => {props.clickDisable(); props.hasClicked();  playL4000Hz15(); }}><span className="display-4 d-flex"><i className="bi bi-play-fill display-1 text-white"></i><span className="align-self-center pr-1">Play Tone </span></span></button>);
    } else if (props.boop === 'playL4000Hz20') {
        return (<button className="btn btn-primary text-white my-3" disabled={props.disabled} onClick={() => {props.clickDisable(); props.hasClicked();  playL4000Hz20(); }}><span className="display-4 d-flex"><i className="bi bi-play-fill display-1 text-white"></i><span className="align-self-center pr-1">Play Tone </span></span></button>);
    } else if (props.boop === 'playL4000Hz25') {
        return (<button className="btn btn-primary text-white my-3" disabled={props.disabled} onClick={() => {props.clickDisable(); props.hasClicked();  playL4000Hz25(); }}><span className="display-4 d-flex"><i className="bi bi-play-fill display-1 text-white"></i><span className="align-self-center pr-1">Play Tone </span></span></button>);
    } else if (props.boop === 'playL4000Hz30') {
        return (<button className="btn btn-primary text-white my-3" disabled={props.disabled} onClick={() => {props.clickDisable(); props.hasClicked();  playL4000Hz30(); }}><span className="display-4 d-flex"><i className="bi bi-play-fill display-1 text-white"></i><span className="align-self-center pr-1">Play Tone </span></span></button>);
    } else if (props.boop === 'playL4000Hz35') {
        return (<button className="btn btn-primary text-white my-3" disabled={props.disabled} onClick={() => {props.clickDisable(); props.hasClicked();  playL4000Hz35(); }}><span className="display-4 d-flex"><i className="bi bi-play-fill display-1 text-white"></i><span className="align-self-center pr-1">Play Tone </span></span></button>);
    } else if (props.boop === 'playL4000Hz40') {
        return (<button className="btn btn-primary text-white my-3" disabled={props.disabled} onClick={() => {props.clickDisable(); props.hasClicked();  playL4000Hz40(); }}><span className="display-4 d-flex"><i className="bi bi-play-fill display-1 text-white"></i><span className="align-self-center pr-1">Play Tone </span></span></button>);
    } else if (props.boop === 'playL4000Hz45') {
        return (<button className="btn btn-primary text-white my-3" disabled={props.disabled} onClick={() => {props.clickDisable(); props.hasClicked();  playL4000Hz45(); }}><span className="display-4 d-flex"><i className="bi bi-play-fill display-1 text-white"></i><span className="align-self-center pr-1">Play Tone </span></span></button>);
    } else if (props.boop === 'playL4000Hz50') {
        return (<button className="btn btn-primary text-white my-3" disabled={props.disabled} onClick={() => {props.clickDisable(); props.hasClicked();  playL4000Hz50(); }}><span className="display-4 d-flex"><i className="bi bi-play-fill display-1 text-white"></i><span className="align-self-center pr-1">Play Tone </span></span></button>);
    } else if (props.boop === 'playL4000Hz55') {
        return (<button className="btn btn-primary text-white my-3" disabled={props.disabled} onClick={() => {props.clickDisable(); props.hasClicked();  playL4000Hz55(); }}><span className="display-4 d-flex"><i className="bi bi-play-fill display-1 text-white"></i><span className="align-self-center pr-1">Play Tone </span></span></button>);
    } else if (props.boop === 'playL4000Hz60') {
        return (<button className="btn btn-primary text-white my-3" disabled={props.disabled} onClick={() => {props.clickDisable(); props.hasClicked();  playL4000Hz60(); }}><span className="display-4 d-flex"><i className="bi bi-play-fill display-1 text-white"></i><span className="align-self-center pr-1">Play Tone </span></span></button>);
    } else if (props.boop === 'playL4000Hz65') {
        return (<button className="btn btn-primary text-white my-3" disabled={props.disabled} onClick={() => {props.clickDisable(); props.hasClicked();  playL4000Hz65(); }}><span className="display-4 d-flex"><i className="bi bi-play-fill display-1 text-white"></i><span className="align-self-center pr-1">Play Tone </span></span></button>);
    } else if (props.boop === 'playL4000Hz70') {
        return (<button className="btn btn-primary text-white my-3" disabled={props.disabled} onClick={() => {props.clickDisable(); props.hasClicked();  playL4000Hz70(); }}><span className="display-4 d-flex"><i className="bi bi-play-fill display-1 text-white"></i><span className="align-self-center pr-1">Play Tone </span></span></button>);
    } else if (props.boop === 'playL4000Hz75') {
        return (<button className="btn btn-primary text-white my-3" disabled={props.disabled} onClick={() => {props.clickDisable(); props.hasClicked();  playL4000Hz75(); }}><span className="display-4 d-flex"><i className="bi bi-play-fill display-1 text-white"></i><span className="align-self-center pr-1">Play Tone </span></span></button>);
    } else if (props.boop === 'playL6000Hz15') {
        return (<button className="btn btn-primary text-white my-3" disabled={props.disabled} onClick={() => {props.clickDisable(); props.hasClicked();  playL6000Hz15(); }}><span className="display-4 d-flex"><i className="bi bi-play-fill display-1 text-white"></i><span className="align-self-center pr-1">Play Tone </span></span></button>);
    } else if (props.boop === 'playL6000Hz20') {
        return (<button className="btn btn-primary text-white my-3" disabled={props.disabled} onClick={() => {props.clickDisable(); props.hasClicked();  playL6000Hz20(); }}><span className="display-4 d-flex"><i className="bi bi-play-fill display-1 text-white"></i><span className="align-self-center pr-1">Play Tone </span></span></button>);
    } else if (props.boop === 'playL6000Hz25') {
        return (<button className="btn btn-primary text-white my-3" disabled={props.disabled} onClick={() => {props.clickDisable(); props.hasClicked();  playL6000Hz25(); }}><span className="display-4 d-flex"><i className="bi bi-play-fill display-1 text-white"></i><span className="align-self-center pr-1">Play Tone </span></span></button>);
    } else if (props.boop === 'playL6000Hz30') {
        return (<button className="btn btn-primary text-white my-3" disabled={props.disabled} onClick={() => {props.clickDisable(); props.hasClicked();  playL6000Hz30(); }}><span className="display-4 d-flex"><i className="bi bi-play-fill display-1 text-white"></i><span className="align-self-center pr-1">Play Tone </span></span></button>);
    } else if (props.boop === 'playL6000Hz35') {
        return (<button className="btn btn-primary text-white my-3" disabled={props.disabled} onClick={() => {props.clickDisable(); props.hasClicked();  playL6000Hz35(); }}><span className="display-4 d-flex"><i className="bi bi-play-fill display-1 text-white"></i><span className="align-self-center pr-1">Play Tone </span></span></button>);
    } else if (props.boop === 'playL6000Hz40') {
        return (<button className="btn btn-primary text-white my-3" disabled={props.disabled} onClick={() => {props.clickDisable(); props.hasClicked();  playL6000Hz40(); }}><span className="display-4 d-flex"><i className="bi bi-play-fill display-1 text-white"></i><span className="align-self-center pr-1">Play Tone </span></span></button>);
    } else if (props.boop === 'playL6000Hz45') {
        return (<button className="btn btn-primary text-white my-3" disabled={props.disabled} onClick={() => {props.clickDisable(); props.hasClicked();  playL6000Hz45(); }}><span className="display-4 d-flex"><i className="bi bi-play-fill display-1 text-white"></i><span className="align-self-center pr-1">Play Tone </span></span></button>);
    } else if (props.boop === 'playL6000Hz50') {
        return (<button className="btn btn-primary text-white my-3" disabled={props.disabled} onClick={() => {props.clickDisable(); props.hasClicked();  playL6000Hz50(); }}><span className="display-4 d-flex"><i className="bi bi-play-fill display-1 text-white"></i><span className="align-self-center pr-1">Play Tone </span></span></button>);
    } else if (props.boop === 'playL6000Hz55') {
        return (<button className="btn btn-primary text-white my-3" disabled={props.disabled} onClick={() => {props.clickDisable(); props.hasClicked();  playL6000Hz55(); }}><span className="display-4 d-flex"><i className="bi bi-play-fill display-1 text-white"></i><span className="align-self-center pr-1">Play Tone </span></span></button>);
    } else if (props.boop === 'playL6000Hz60') {
        return (<button className="btn btn-primary text-white my-3" disabled={props.disabled} onClick={() => {props.clickDisable(); props.hasClicked();  playL6000Hz60(); }}><span className="display-4 d-flex"><i className="bi bi-play-fill display-1 text-white"></i><span className="align-self-center pr-1">Play Tone </span></span></button>);
    } else if (props.boop === 'playL6000Hz65') {
        return (<button className="btn btn-primary text-white my-3" disabled={props.disabled} onClick={() => {props.clickDisable(); props.hasClicked();  playL6000Hz65(); }}><span className="display-4 d-flex"><i className="bi bi-play-fill display-1 text-white"></i><span className="align-self-center pr-1">Play Tone </span></span></button>);
    } else if (props.boop === 'playL6000Hz70') {
        return (<button className="btn btn-primary text-white my-3" disabled={props.disabled} onClick={() => {props.clickDisable(); props.hasClicked();  playL6000Hz70(); }}><span className="display-4 d-flex"><i className="bi bi-play-fill display-1 text-white"></i><span className="align-self-center pr-1">Play Tone </span></span></button>);
    } else if (props.boop === 'playL6000Hz75') {
        return (<button className="btn btn-primary text-white my-3" disabled={props.disabled} onClick={() => {props.clickDisable(); props.hasClicked();  playL6000Hz75(); }}><span className="display-4 d-flex"><i className="bi bi-play-fill display-1 text-white"></i><span className="align-self-center pr-1">Play Tone </span></span></button>);
    } else if (props.boop === 'playR500Hz15') {
        return (<button className="btn btn-primary text-white my-3" disabled={props.disabled} onClick={() => {props.clickDisable(); props.hasClicked();  playR500Hz15(); }}><span className="display-4 d-flex"><i className="bi bi-play-fill display-1 text-white"></i><span className="align-self-center pr-1">Play Tone </span></span></button>);
    } else if (props.boop === 'playR500Hz20') {
        return (<button className="btn btn-primary text-white my-3" disabled={props.disabled} onClick={() => {props.clickDisable(); props.hasClicked();  playR500Hz20(); }}><span className="display-4 d-flex"><i className="bi bi-play-fill display-1 text-white"></i><span className="align-self-center pr-1">Play Tone </span></span></button>);
    } else if (props.boop === 'playR500Hz25') {
        return (<button className="btn btn-primary text-white my-3" disabled={props.disabled} onClick={() => {props.clickDisable(); props.hasClicked();  playR500Hz25(); }}><span className="display-4 d-flex"><i className="bi bi-play-fill display-1 text-white"></i><span className="align-self-center pr-1">Play Tone </span></span></button>);
    } else if (props.boop === 'playR500Hz30') {
        return (<button className="btn btn-primary text-white my-3" disabled={props.disabled} onClick={() => {props.clickDisable(); props.hasClicked();  playR500Hz30(); }}><span className="display-4 d-flex"><i className="bi bi-play-fill display-1 text-white"></i><span className="align-self-center pr-1">Play Tone </span></span></button>);
    } else if (props.boop === 'playR500Hz35') {
        return (<button className="btn btn-primary text-white my-3" disabled={props.disabled} onClick={() => {props.clickDisable(); props.hasClicked();  playR500Hz35(); }}><span className="display-4 d-flex"><i className="bi bi-play-fill display-1 text-white"></i><span className="align-self-center pr-1">Play Tone </span></span></button>);
    } else if (props.boop === 'playR500Hz40') {
        return (<button className="btn btn-primary text-white my-3" disabled={props.disabled} onClick={() => {props.clickDisable(); props.hasClicked();  playR500Hz40(); }}><span className="display-4 d-flex"><i className="bi bi-play-fill display-1 text-white"></i><span className="align-self-center pr-1">Play Tone </span></span></button>);
    } else if (props.boop === 'playR500Hz45') {
        return (<button className="btn btn-primary text-white my-3" disabled={props.disabled} onClick={() => {props.clickDisable(); props.hasClicked();  playR500Hz45(); }}><span className="display-4 d-flex"><i className="bi bi-play-fill display-1 text-white"></i><span className="align-self-center pr-1">Play Tone </span></span></button>);
    } else if (props.boop === 'playR500Hz50') {
        return (<button className="btn btn-primary text-white my-3" disabled={props.disabled} onClick={() => {props.clickDisable(); props.hasClicked();  playR500Hz50(); }}><span className="display-4 d-flex"><i className="bi bi-play-fill display-1 text-white"></i><span className="align-self-center pr-1">Play Tone </span></span></button>);
    } else if (props.boop === 'playR500Hz55') {
        return (<button className="btn btn-primary text-white my-3" disabled={props.disabled} onClick={() => {props.clickDisable(); props.hasClicked();  playR500Hz55(); }}><span className="display-4 d-flex"><i className="bi bi-play-fill display-1 text-white"></i><span className="align-self-center pr-1">Play Tone </span></span></button>);
    } else if (props.boop === 'playR500Hz60') {
        return (<button className="btn btn-primary text-white my-3" disabled={props.disabled} onClick={() => {props.clickDisable(); props.hasClicked();  playR500Hz60(); }}><span className="display-4 d-flex"><i className="bi bi-play-fill display-1 text-white"></i><span className="align-self-center pr-1">Play Tone </span></span></button>);
    } else if (props.boop === 'playR500Hz65') {
        return (<button className="btn btn-primary text-white my-3" disabled={props.disabled} onClick={() => {props.clickDisable(); props.hasClicked();  playR500Hz65(); }}><span className="display-4 d-flex"><i className="bi bi-play-fill display-1 text-white"></i><span className="align-self-center pr-1">Play Tone </span></span></button>);
    } else if (props.boop === 'playR500Hz70') {
        return (<button className="btn btn-primary text-white my-3" disabled={props.disabled} onClick={() => {props.clickDisable(); props.hasClicked();  playR500Hz70(); }}><span className="display-4 d-flex"><i className="bi bi-play-fill display-1 text-white"></i><span className="align-self-center pr-1">Play Tone </span></span></button>);
    } else if (props.boop === 'playR500Hz75') {
        return (<button className="btn btn-primary text-white my-3" disabled={props.disabled} onClick={() => {props.clickDisable(); props.hasClicked();  playR500Hz75(); }}><span className="display-4 d-flex"><i className="bi bi-play-fill display-1 text-white"></i><span className="align-self-center pr-1">Play Tone </span></span></button>);
    } else if (props.boop === 'playR1000Hz15') {
        return (<button className="btn btn-primary text-white my-3" disabled={props.disabled} onClick={() => {props.clickDisable(); props.hasClicked();  playR1000Hz15(); }}><span className="display-4 d-flex"><i className="bi bi-play-fill display-1 text-white"></i><span className="align-self-center pr-1">Play Tone </span></span></button>);
    } else if (props.boop === 'playR1000Hz20') {
        return (<button className="btn btn-primary text-white my-3" disabled={props.disabled} onClick={() => {props.clickDisable(); props.hasClicked();  playR1000Hz20(); }}><span className="display-4 d-flex"><i className="bi bi-play-fill display-1 text-white"></i><span className="align-self-center pr-1">Play Tone </span></span></button>);
    } else if (props.boop === 'playR1000Hz25') {
        return (<button className="btn btn-primary text-white my-3" disabled={props.disabled} onClick={() => {props.clickDisable(); props.hasClicked();  playR1000Hz25(); }}><span className="display-4 d-flex"><i className="bi bi-play-fill display-1 text-white"></i><span className="align-self-center pr-1">Play Tone </span></span></button>);
    } else if (props.boop === 'playR1000Hz30') {
        return (<button className="btn btn-primary text-white my-3" disabled={props.disabled} onClick={() => {props.clickDisable(); props.hasClicked();  playR1000Hz30(); }}><span className="display-4 d-flex"><i className="bi bi-play-fill display-1 text-white"></i><span className="align-self-center pr-1">Play Tone </span></span></button>);
    } else if (props.boop === 'playR1000Hz35') {
        return (<button className="btn btn-primary text-white my-3" disabled={props.disabled} onClick={() => {props.clickDisable(); props.hasClicked();  playR1000Hz35(); }}><span className="display-4 d-flex"><i className="bi bi-play-fill display-1 text-white"></i><span className="align-self-center pr-1">Play Tone </span></span></button>);
    } else if (props.boop === 'playR1000Hz40') {
        return (<button className="btn btn-primary text-white my-3" disabled={props.disabled} onClick={() => {props.clickDisable(); props.hasClicked();  playR1000Hz40(); }}><span className="display-4 d-flex"><i className="bi bi-play-fill display-1 text-white"></i><span className="align-self-center pr-1">Play Tone </span></span></button>);
    } else if (props.boop === 'playR1000Hz45') {
        return (<button className="btn btn-primary text-white my-3" disabled={props.disabled} onClick={() => {props.clickDisable(); props.hasClicked();  playR1000Hz45(); }}><span className="display-4 d-flex"><i className="bi bi-play-fill display-1 text-white"></i><span className="align-self-center pr-1">Play Tone </span></span></button>);
    } else if (props.boop === 'playR1000Hz50') {
        return (<button className="btn btn-primary text-white my-3" disabled={props.disabled} onClick={() => {props.clickDisable(); props.hasClicked();  playR1000Hz50(); }}><span className="display-4 d-flex"><i className="bi bi-play-fill display-1 text-white"></i><span className="align-self-center pr-1">Play Tone </span></span></button>);
    } else if (props.boop === 'playR1000Hz55') {
        return (<button className="btn btn-primary text-white my-3" disabled={props.disabled} onClick={() => {props.clickDisable(); props.hasClicked();  playR1000Hz55(); }}><span className="display-4 d-flex"><i className="bi bi-play-fill display-1 text-white"></i><span className="align-self-center pr-1">Play Tone </span></span></button>);
    } else if (props.boop === 'playR1000Hz60') {
        return (<button className="btn btn-primary text-white my-3" disabled={props.disabled} onClick={() => {props.clickDisable(); props.hasClicked();  playR1000Hz60(); }}><span className="display-4 d-flex"><i className="bi bi-play-fill display-1 text-white"></i><span className="align-self-center pr-1">Play Tone </span></span></button>);
    } else if (props.boop === 'playR1000Hz65') {
        return (<button className="btn btn-primary text-white my-3" disabled={props.disabled} onClick={() => {props.clickDisable(); props.hasClicked();  playR1000Hz65(); }}><span className="display-4 d-flex"><i className="bi bi-play-fill display-1 text-white"></i><span className="align-self-center pr-1">Play Tone </span></span></button>);
    } else if (props.boop === 'playR1000Hz70') {
        return (<button className="btn btn-primary text-white my-3" disabled={props.disabled} onClick={() => {props.clickDisable(); props.hasClicked();  playR1000Hz70(); }}><span className="display-4 d-flex"><i className="bi bi-play-fill display-1 text-white"></i><span className="align-self-center pr-1">Play Tone </span></span></button>);
    } else if (props.boop === 'playR1000Hz75') {
        return (<button className="btn btn-primary text-white my-3" disabled={props.disabled} onClick={() => {props.clickDisable(); props.hasClicked();  playR1000Hz75(); }}><span className="display-4 d-flex"><i className="bi bi-play-fill display-1 text-white"></i><span className="align-self-center pr-1">Play Tone </span></span></button>);
    } else if (props.boop === 'playR2000Hz15') {
        return (<button className="btn btn-primary text-white my-3" disabled={props.disabled} onClick={() => {props.clickDisable(); props.hasClicked();  playR2000Hz15(); }}><span className="display-4 d-flex"><i className="bi bi-play-fill display-1 text-white"></i><span className="align-self-center pr-1">Play Tone </span></span></button>);
    } else if (props.boop === 'playR2000Hz20') {
        return (<button className="btn btn-primary text-white my-3" disabled={props.disabled} onClick={() => {props.clickDisable(); props.hasClicked();  playR2000Hz20(); }}><span className="display-4 d-flex"><i className="bi bi-play-fill display-1 text-white"></i><span className="align-self-center pr-1">Play Tone </span></span></button>);
    } else if (props.boop === 'playR2000Hz25') {
        return (<button className="btn btn-primary text-white my-3" disabled={props.disabled} onClick={() => {props.clickDisable(); props.hasClicked();  playR2000Hz25(); }}><span className="display-4 d-flex"><i className="bi bi-play-fill display-1 text-white"></i><span className="align-self-center pr-1">Play Tone </span></span></button>);
    } else if (props.boop === 'playR2000Hz30') {
        return (<button className="btn btn-primary text-white my-3" disabled={props.disabled} onClick={() => {props.clickDisable(); props.hasClicked();  playR2000Hz30(); }}><span className="display-4 d-flex"><i className="bi bi-play-fill display-1 text-white"></i><span className="align-self-center pr-1">Play Tone </span></span></button>);
    } else if (props.boop === 'playR2000Hz35') {
        return (<button className="btn btn-primary text-white my-3" disabled={props.disabled} onClick={() => {props.clickDisable(); props.hasClicked();  playR2000Hz35(); }}><span className="display-4 d-flex"><i className="bi bi-play-fill display-1 text-white"></i><span className="align-self-center pr-1">Play Tone </span></span></button>);
    } else if (props.boop === 'playR2000Hz40') {
        return (<button className="btn btn-primary text-white my-3" disabled={props.disabled} onClick={() => {props.clickDisable(); props.hasClicked();  playR2000Hz40(); }}><span className="display-4 d-flex"><i className="bi bi-play-fill display-1 text-white"></i><span className="align-self-center pr-1">Play Tone </span></span></button>);
    } else if (props.boop === 'playR2000Hz45') {
        return (<button className="btn btn-primary text-white my-3" disabled={props.disabled} onClick={() => {props.clickDisable(); props.hasClicked();  playR2000Hz45(); }}><span className="display-4 d-flex"><i className="bi bi-play-fill display-1 text-white"></i><span className="align-self-center pr-1">Play Tone </span></span></button>);
    } else if (props.boop === 'playR2000Hz50') {
        return (<button className="btn btn-primary text-white my-3" disabled={props.disabled} onClick={() => {props.clickDisable(); props.hasClicked();  playR2000Hz50(); }}><span className="display-4 d-flex"><i className="bi bi-play-fill display-1 text-white"></i><span className="align-self-center pr-1">Play Tone </span></span></button>);
    } else if (props.boop === 'playR2000Hz55') {
        return (<button className="btn btn-primary text-white my-3" disabled={props.disabled} onClick={() => {props.clickDisable(); props.hasClicked();  playR2000Hz55(); }}><span className="display-4 d-flex"><i className="bi bi-play-fill display-1 text-white"></i><span className="align-self-center pr-1">Play Tone </span></span></button>);
    } else if (props.boop === 'playR2000Hz60') {
        return (<button className="btn btn-primary text-white my-3" disabled={props.disabled} onClick={() => {props.clickDisable(); props.hasClicked();  playR2000Hz60(); }}><span className="display-4 d-flex"><i className="bi bi-play-fill display-1 text-white"></i><span className="align-self-center pr-1">Play Tone </span></span></button>);
    } else if (props.boop === 'playR2000Hz65') {
        return (<button className="btn btn-primary text-white my-3" disabled={props.disabled} onClick={() => {props.clickDisable(); props.hasClicked();  playR2000Hz65(); }}><span className="display-4 d-flex"><i className="bi bi-play-fill display-1 text-white"></i><span className="align-self-center pr-1">Play Tone </span></span></button>);
    } else if (props.boop === 'playR2000Hz70') {
        return (<button className="btn btn-primary text-white my-3" disabled={props.disabled} onClick={() => {props.clickDisable(); props.hasClicked();  playR2000Hz70(); }}><span className="display-4 d-flex"><i className="bi bi-play-fill display-1 text-white"></i><span className="align-self-center pr-1">Play Tone </span></span></button>);
    } else if (props.boop === 'playR2000Hz75') {
        return (<button className="btn btn-primary text-white my-3" disabled={props.disabled} onClick={() => {props.clickDisable(); props.hasClicked();  playR2000Hz75(); }}><span className="display-4 d-flex"><i className="bi bi-play-fill display-1 text-white"></i><span className="align-self-center pr-1">Play Tone </span></span></button>);
    } else if (props.boop === 'playR4000Hz15') {
        return (<button className="btn btn-primary text-white my-3" disabled={props.disabled} onClick={() => {props.clickDisable(); props.hasClicked();  playR4000Hz15(); }}><span className="display-4 d-flex"><i className="bi bi-play-fill display-1 text-white"></i><span className="align-self-center pr-1">Play Tone </span></span></button>);
    } else if (props.boop === 'playR4000Hz20') {
        return (<button className="btn btn-primary text-white my-3" disabled={props.disabled} onClick={() => {props.clickDisable(); props.hasClicked();  playR4000Hz20(); }}><span className="display-4 d-flex"><i className="bi bi-play-fill display-1 text-white"></i><span className="align-self-center pr-1">Play Tone </span></span></button>);
    } else if (props.boop === 'playR4000Hz25') {
        return (<button className="btn btn-primary text-white my-3" disabled={props.disabled} onClick={() => {props.clickDisable(); props.hasClicked();  playR4000Hz25(); }}><span className="display-4 d-flex"><i className="bi bi-play-fill display-1 text-white"></i><span className="align-self-center pr-1">Play Tone </span></span></button>);
    } else if (props.boop === 'playR4000Hz30') {
        return (<button className="btn btn-primary text-white my-3" disabled={props.disabled} onClick={() => {props.clickDisable(); props.hasClicked();  playR4000Hz30(); }}><span className="display-4 d-flex"><i className="bi bi-play-fill display-1 text-white"></i><span className="align-self-center pr-1">Play Tone </span></span></button>);
    } else if (props.boop === 'playR4000Hz35') {
        return (<button className="btn btn-primary text-white my-3" disabled={props.disabled} onClick={() => {props.clickDisable(); props.hasClicked();  playR4000Hz35(); }}><span className="display-4 d-flex"><i className="bi bi-play-fill display-1 text-white"></i><span className="align-self-center pr-1">Play Tone </span></span></button>);
    } else if (props.boop === 'playR4000Hz40') {
        return (<button className="btn btn-primary text-white my-3" disabled={props.disabled} onClick={() => {props.clickDisable(); props.hasClicked();  playR4000Hz40(); }}><span className="display-4 d-flex"><i className="bi bi-play-fill display-1 text-white"></i><span className="align-self-center pr-1">Play Tone </span></span></button>);
    } else if (props.boop === 'playR4000Hz45') {
        return (<button className="btn btn-primary text-white my-3" disabled={props.disabled} onClick={() => {props.clickDisable(); props.hasClicked();  playR4000Hz45(); }}><span className="display-4 d-flex"><i className="bi bi-play-fill display-1 text-white"></i><span className="align-self-center pr-1">Play Tone </span></span></button>);
    } else if (props.boop === 'playR4000Hz50') {
        return (<button className="btn btn-primary text-white my-3" disabled={props.disabled} onClick={() => {props.clickDisable(); props.hasClicked();  playR4000Hz50(); }}><span className="display-4 d-flex"><i className="bi bi-play-fill display-1 text-white"></i><span className="align-self-center pr-1">Play Tone </span></span></button>);
    } else if (props.boop === 'playR4000Hz55') {
        return (<button className="btn btn-primary text-white my-3" disabled={props.disabled} onClick={() => {props.clickDisable(); props.hasClicked();  playR4000Hz55(); }}><span className="display-4 d-flex"><i className="bi bi-play-fill display-1 text-white"></i><span className="align-self-center pr-1">Play Tone </span></span></button>);
    } else if (props.boop === 'playR4000Hz60') {
        return (<button className="btn btn-primary text-white my-3" disabled={props.disabled} onClick={() => {props.clickDisable(); props.hasClicked();  playR4000Hz60(); }}><span className="display-4 d-flex"><i className="bi bi-play-fill display-1 text-white"></i><span className="align-self-center pr-1">Play Tone </span></span></button>);
    } else if (props.boop === 'playR4000Hz65') {
        return (<button className="btn btn-primary text-white my-3" disabled={props.disabled} onClick={() => {props.clickDisable(); props.hasClicked();  playR4000Hz65(); }}><span className="display-4 d-flex"><i className="bi bi-play-fill display-1 text-white"></i><span className="align-self-center pr-1">Play Tone </span></span></button>);
    } else if (props.boop === 'playR4000Hz70') {
        return (<button className="btn btn-primary text-white my-3" disabled={props.disabled} onClick={() => {props.clickDisable(); props.hasClicked();  playR4000Hz70(); }}><span className="display-4 d-flex"><i className="bi bi-play-fill display-1 text-white"></i><span className="align-self-center pr-1">Play Tone </span></span></button>);
    } else if (props.boop === 'playR4000Hz75') {
        return (<button className="btn btn-primary text-white my-3" disabled={props.disabled} onClick={() => {props.clickDisable(); props.hasClicked();  playR4000Hz75(); }}><span className="display-4 d-flex"><i className="bi bi-play-fill display-1 text-white"></i><span className="align-self-center pr-1">Play Tone </span></span></button>);
    } else if (props.boop === 'playR6000Hz15') {
        return (<button className="btn btn-primary text-white my-3" disabled={props.disabled} onClick={() => {props.clickDisable(); props.hasClicked();  playR6000Hz15(); }}><span className="display-4 d-flex"><i className="bi bi-play-fill display-1 text-white"></i><span className="align-self-center pr-1">Play Tone </span></span></button>);
    } else if (props.boop === 'playR6000Hz20') {
        return (<button className="btn btn-primary text-white my-3" disabled={props.disabled} onClick={() => {props.clickDisable(); props.hasClicked();  playR6000Hz20(); }}><span className="display-4 d-flex"><i className="bi bi-play-fill display-1 text-white"></i><span className="align-self-center pr-1">Play Tone </span></span></button>);
    } else if (props.boop === 'playR6000Hz25') {
        return (<button className="btn btn-primary text-white my-3" disabled={props.disabled} onClick={() => {props.clickDisable(); props.hasClicked();  playR6000Hz25(); }}><span className="display-4 d-flex"><i className="bi bi-play-fill display-1 text-white"></i><span className="align-self-center pr-1">Play Tone </span></span></button>);
    } else if (props.boop === 'playR6000Hz30') {
        return (<button className="btn btn-primary text-white my-3" disabled={props.disabled} onClick={() => {props.clickDisable(); props.hasClicked();  playR6000Hz30(); }}><span className="display-4 d-flex"><i className="bi bi-play-fill display-1 text-white"></i><span className="align-self-center pr-1">Play Tone </span></span></button>);
    } else if (props.boop === 'playR6000Hz35') {
        return (<button className="btn btn-primary text-white my-3" disabled={props.disabled} onClick={() => {props.clickDisable(); props.hasClicked();  playR6000Hz35(); }}><span className="display-4 d-flex"><i className="bi bi-play-fill display-1 text-white"></i><span className="align-self-center pr-1">Play Tone </span></span></button>);
    } else if (props.boop === 'playR6000Hz40') {
        return (<button className="btn btn-primary text-white my-3" disabled={props.disabled} onClick={() => {props.clickDisable(); props.hasClicked();  playR6000Hz40(); }}><span className="display-4 d-flex"><i className="bi bi-play-fill display-1 text-white"></i><span className="align-self-center pr-1">Play Tone </span></span></button>);
    } else if (props.boop === 'playR6000Hz45') {
        return (<button className="btn btn-primary text-white my-3" disabled={props.disabled} onClick={() => {props.clickDisable(); props.hasClicked();  playR6000Hz45(); }}><span className="display-4 d-flex"><i className="bi bi-play-fill display-1 text-white"></i><span className="align-self-center pr-1">Play Tone </span></span></button>);
    } else if (props.boop === 'playR6000Hz50') {
        return (<button className="btn btn-primary text-white my-3" disabled={props.disabled} onClick={() => {props.clickDisable(); props.hasClicked();  playR6000Hz50(); }}><span className="display-4 d-flex"><i className="bi bi-play-fill display-1 text-white"></i><span className="align-self-center pr-1">Play Tone </span></span></button>);
    } else if (props.boop === 'playR6000Hz55') {
        return (<button className="btn btn-primary text-white my-3" disabled={props.disabled} onClick={() => {props.clickDisable(); props.hasClicked();  playR6000Hz55(); }}><span className="display-4 d-flex"><i className="bi bi-play-fill display-1 text-white"></i><span className="align-self-center pr-1">Play Tone </span></span></button>);
    } else if (props.boop === 'playR6000Hz60') {
        return (<button className="btn btn-primary text-white my-3" disabled={props.disabled} onClick={() => {props.clickDisable(); props.hasClicked();  playR6000Hz60(); }}><span className="display-4 d-flex"><i className="bi bi-play-fill display-1 text-white"></i><span className="align-self-center pr-1">Play Tone </span></span></button>);
    } else if (props.boop === 'playR6000Hz65') {
        return (<button className="btn btn-primary text-white my-3" disabled={props.disabled} onClick={() => {props.clickDisable(); props.hasClicked();  playR6000Hz65(); }}><span className="display-4 d-flex"><i className="bi bi-play-fill display-1 text-white"></i><span className="align-self-center pr-1">Play Tone </span></span></button>);
    } else if (props.boop === 'playR6000Hz70') {
        return (<button className="btn btn-primary text-white my-3" disabled={props.disabled} onClick={() => {props.clickDisable(); props.hasClicked();  playR6000Hz70(); }}><span className="display-4 d-flex"><i className="bi bi-play-fill display-1 text-white"></i><span className="align-self-center pr-1">Play Tone </span></span></button>);
    } else {
        return (<button className="btn btn-primary text-white my-3" disabled={props.disabled} onClick={() => {props.clickDisable(); props.hasClicked();  playR6000Hz75(); }}><span className="display-4 d-flex"><i className="bi bi-play-fill display-1 text-white"></i><span className="align-self-center pr-1">Play Tone </span></span></button>);
    }
}