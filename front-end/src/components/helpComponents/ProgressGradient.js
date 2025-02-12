import React from 'react';
import ProgressBar from 'react-bootstrap/ProgressBar';
import '../helpComponents/proggress.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useSelector, useDispatch } from 'react-redux';



const ProgressGradient = (props) => {
    const chaptersAndCups = useSelector(state => state.chaptersAndCups);
    const percentOfReaded = () => {
        if (chaptersAndCups) {
            const NumOfReaded = chaptersAndCups.filter(chapter => chapter.is_readed).length;
            return parseInt((NumOfReaded / chaptersAndCups.length) * 100, 10);
        }
        return 0;
        // return chaptersAndCups.filter(chapter => chapter.is_readed).length / chaptersAndCups.length;
    }

    const getInnerLineStyle = () => {
        let style = { background: `${props.color}` };
        if (props.loadingPage)
            style = { ...style, width: props.percent + '%' };
        else
            style = { ...style, width: percentOfReaded() + '%' };
        return style;
    }

    return (
        <React.Fragment>

            <Row>
                <Col >
                    <div className="circle circle2" style={{ background: `${props.color}` }}>
                        {props.loadingPage ? props.percent + '%' : percentOfReaded() + '%'}
                    </div>
                    <div className="progress progress2">
                        <div className="progress-bar progress-bar2" style={getInnerLineStyle()}>
                        </div>
                    </div>
                </Col>
            </Row>

        </React.Fragment>
    );
};

export default ProgressGradient;


