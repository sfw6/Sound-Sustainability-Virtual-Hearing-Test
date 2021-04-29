import React, {Component} from 'react';

import Audio from './screening_routes/Audio';
import Calibration from './screening_routes/Calibration';
import Instructions from './screening_routes/Instructions';
import Results from './screening_routes/Results';

const data = [
    {
        id: '0',
        title: 'Instructions',
        stagePercent: '0'
    },
    {
        id: '1',
        title: 'Calibration',
        stagePercent: '33'
    },
    {
        id: '2',
        title: 'Hearing Screening',
        stagePercent: '66'
    },
    {
        id: '3',
        title: 'Results',
        stagePercent: '100'
    },
  ];

/*
    Adapted from :ReactJS: Dynamic Previous/Next Buttons
    desc: Retrieve previous & next titles and return them as component props.
    author: alpha1337
    https://codesandbox.io/s/rk360yxz?file=/index.js:3135-3772
*/
class AudioScreening extends Component {
    state = {
            test: [],
            stages: [],
            activeStage: '',
            modalTitle: '',
            modalPercentage: '',
            isDisabled: true
        }
    

    componentDidMount() {
        this.setState({ stages: data });
    }

    handleModalOpen = (idx) => {
        this.setState({
            activeStage: idx,
            modalTitle: this.state.stages[idx].title,
            modalPercentage: this.state.stages[idx].stagePercent
        });
    };

    handleModalRestart = () => {
        window.location.reload();
    };

    handleNextStage = () => {

        var arr = this.state.stages.length;
        var idx = this.state.activeStage + 1;
        idx = idx % arr;

        this.setState({
            activeStage: idx,
            modalTitle: this.state.stages[idx].title,
            modalPercentage: this.state.stages[idx].stagePercent,
            isDisabled: true
        });
    };

    handlePrevStage = () => {
        var arr = this.state.stages.length;
        var idx = this.state.activeStage;

        if (idx === 1) {
            this.handleModalRestart();
        } else {
            if (idx === 0) {
                idx = arr - 1;
            } else {
                idx = idx - 1;
            }
    
            this.setState({
                activeStage: idx,
                modalTitle: this.state.stages[idx].title,
                modalPercentage: this.state.stages[idx].stagePercent
            });
        }
    };

    handleDisableNextButton = () => {
        this.setState({
            isDisabled: false
        });
    }

    getResults = (test) => {
        this.setState({
            test: test
        });
    }

    render() {
        
        function nextStage(idx, arr) {
            var i = idx + 1;
            i = i % arr.length;
            return arr[i].title;
        }

        function prevStage(idx, arr) {
            let i = 0;
            if (idx === 0) {
                i = arr.length - 1;
            } else {
                i = idx - 1;
            }
            return arr[i].title;
        }

        if (this.state.activeStage === '') {
            return (
                <div className="container-fluid mb-3 px-5 pb-5">
                    <Breadcrumbs />
                    <Progress step="0"></Progress>
                    <Instructions />
                    <div className="pt-5 px-md-5 mx-md-5">
                        <button type="button" className="btn btn-primary float-right" 
                            onClick={this.handleModalOpen.bind(this, 1)}>  
                            Next: Calibration
                        </button>
                    </div>
                </div>
            );
        } else if (this.state.activeStage === 2) {
            return (
                <div className="container-fluid mb-3 px-5 pb-5">
                    <Breadcrumbs />
                    <Progress 
                        step={this.state.activeStage}
                    />
                    <Audio 
                        disable={this.handleDisableNextButton} 
                        passResults={this.getResults} 
                    />
                    <Modal
                        step={this.state.activeStage}
                        previousStage={prevStage(this.state.activeStage, data)}
                        nextStage={nextStage(this.state.activeStage, data)}
                        onModalRestart={this.handleModalRestart}
                        onNext={this.handleNextStage}
                        onPrev={this.handlePrevStage}
                        disable={this.state.isDisabled}
                    />
                </div>
            );
        } else {
            return (
                <div className="container-fluid mb-3 px-5 pb-5">
                    <Breadcrumbs />
                    <Progress 
                        step={this.state.activeStage}
                    />
                    <ScreeningComponenet 
                        step={this.state.activeStage}
                        talking1stepdown={this.talkin}
                        disable={this.handleDisableNextButton}
                        test={this.state.test}
                        getResults={this.getResults}
                    />
                    <Modal
                        step={this.state.activeStage}
                        previousStage={prevStage(this.state.activeStage, data)}
                        nextStage={nextStage(this.state.activeStage, data)}
                        onModalRestart={this.handleModalRestart}
                        onNext={this.handleNextStage}
                        onPrev={this.handlePrevStage}
                        disable={this.state.isDisabled}
                    />
                </div>
            );
        }
    }
}

function ScreeningComponenet(props) {
    if (props.step === 3) {
        return <Results testResults={props.test}/>;
    } else {
        return <Calibration disable={props.disable} />;
    }
}

class Modal extends React.Component {
    render() {
        if (this.props.step === 3) {
            return (
                <div >
                </div>
            );
        } else if (this.props.step === 2) {
            return (
                <div className="px-md-5 mx-md-5">
                    <div className="row text-center pt-5">
                        <div className="col-4">
                        </div>
                        <div className="col-4">
                            <button type="button" className="btn btn-light font-weight-light" onClick={this.props.onModalRestart}>restart</button>
                        </div>
                        <div className="col-4">
                            <button type="button" className="btn btn-primary float-right font-weight-light" disabled={this.props.disable} onClick={this.props.onNext}>Next: {this.props.nextStage}</button>
                        </div>
                    </div>
                </div>
            );
        } else {
            return (
                <div className="px-md-5 mx-md-5">
                    <div className="row text-center pt-5">
                        <div className="col-4">
                            <button type="button" className="btn btn-primary float-left font-weight-light" onClick={this.props.onPrev}>Previous: {this.props.previousStage}</button>
                        </div>
                        <div className="col-4">
                            <button type="button" className="btn btn-light font-weight-light" onClick={this.props.onModalRestart}>restart</button>
                        </div>
                        <div className="col-4">
                            <button type="button" className="btn btn-primary float-right font-weight-light" disabled={this.props.disable} onClick={this.props.onNext}>Next: {this.props.nextStage}</button>
                        </div>
                    </div>
                </div>
            );
        }
    }
}

class Breadcrumbs extends Component {
    render() {
        return (
            <nav aria-label="breadcrumb" className="breadcrumbs">
                <ol className="breadcrumb bg-transparent font-weight-light mb-1">
                    <li className="breadcrumb-item"><a className="text-danger" href="/">Home</a></li>
                    <li className="breadcrumb-item"><a className="text-danger" href="/screeninghome">Screening Info</a></li>
                    <li className="breadcrumb-item active" aria-current="page">Screening</li>
                </ol>
            </nav>
        );
    }
}

class Progress extends Component {
    render() {
        let stepSpacing = 'py-2 px-1 align-middle'
        
        let step2 = ' bg-light text-muted text-nowrap'
        let step3 = ' bg-light text-muted text-nowrap'
        let step4 = ' bg-light text-muted text-nowrap'
        if (this.props.step >= 1) {
            step2 = ' arrow-active text-nowrap';
        }
        if (this.props.step >= 2) {
            step3 = ' arrow-active text-nowrap';
        }
        if (this.props.step >= 3) {
            step4 = ' arrow-active text-nowrap';
        }

        return (
            <div>
                <div className="font-weight-light text-center p-2 w-100" id="screening-progress-web">
                    <ul className="d-inline-flex align-content-center text-dark p-0" id="progress">
                        <li className={stepSpacing + " arrow-active text-nowrap "}>
                            <span className="pl-4">Instructions</span>
                        </li>
                        <li className={stepSpacing+step2}>
                            <span className="pl-4">Calibration</span>
                        </li>
                        <li className={stepSpacing+step3}>
                            <span className="pl-4 pr-4">Hearing Screening</span>
                        </li>
                        <li className={stepSpacing+step4}>
                            <span className="pl-4">Results</span>
                        </li>
                    </ul>
                </div>
                <div className="font-weight-light text-center p-2 w-100" id="screening-progress-mobile">
                    <ul className="d-inline-flex align-content-center text-dark p-0" id="progress">
                        <li className={stepSpacing + " arrow-active text-nowrap"}>
                            <span className="pl-4"><i className="bi bi-info-circle"></i></span>
                        </li>
                        <li className={stepSpacing+step2}>
                            <span className="pl-4"><i className="bi bi-sliders"></i></span>
                        </li>
                        <li className={stepSpacing+step3}>
                            <span className="pl-4"><i className="bi bi-headphones"></i></span>
                        </li>
                        <li className={stepSpacing+step4}>
                            <span className="pl-4"><i className="bi bi-clipboard-data"></i></span>
                        </li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default AudioScreening;