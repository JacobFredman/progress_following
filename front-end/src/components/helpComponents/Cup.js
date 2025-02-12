import React from 'react';
import '../myProgress/Cup.css';

const Cup = (props) => {
    const widthPoprportion = 0.755;
    // const goldCup = <svg xmlns="http://www.w3.org/2000/svg" width="25.973" height="34.394" viewBox="0 0 25.973 34.394">
    const goldCup = <svg style={{ margin: props.marginPx }} xmlns="http://www.w3.org/2000/svg" width={props.height * widthPoprportion} height={props.height} viewBox="0 0 25.973 34.394">
        <g id="Group_2116" data-name="Group 2116" transform="translate(-1616.863 180.509)">
            <path id="Path_1" data-name="Path 1" d="M183.569,128.094c-6.628-5.636-8.621-10.867-7.654-13.551a2.045,2.045,0,0,1,1.871-1.494,3.519,3.519,0,0,1,2.58,1.042,6.18,6.18,0,0,1,1.586,4.348H180.54a4.827,4.827,0,0,0-1.165-3.342,2.145,2.145,0,0,0-1.568-.635c-.3,0-.47.307-.561.56-.647,1.8.747,6.475,7.24,12Z" transform="translate(1441.178 -293.557)" fill="#f9bf55" />
            <path id="Path_2" data-name="Path 2" d="M220.079,128.094l-.915-1.077c6.493-5.521,7.887-10.2,7.241-12-.092-.253-.262-.555-.562-.56a2.136,2.136,0,0,0-1.568.635,4.827,4.827,0,0,0-1.165,3.342H221.7a6.18,6.18,0,0,1,1.586-4.348,3.522,3.522,0,0,1,2.581-1.042,2.045,2.045,0,0,1,1.871,1.494c.966,2.684-1.026,7.915-7.655,13.551" transform="translate(1414.872 -293.556)" fill="#f9bf55" />
            <path id="Path_3" data-name="Path 3" d="M206.137,155.2a8.519,8.519,0,0,0,.84,3.7h-5.969a8.58,8.58,0,0,0,0-7.406h5.969a8.519,8.519,0,0,0-.84,3.7" transform="translate(1425.857 -316.821)" fill="#de9c27" />
            <path id="Path_4" data-name="Path 4" d="M188,118.19v6.628a8.121,8.121,0,0,0,16.243,0V118.19Z" transform="translate(1433.726 -296.668)" fill="#f9bf55" />
            <path id="Path_5" data-name="Path 5" d="M206.158,171.671a4.525,4.525,0,1,0-9.05,0Z" transform="translate(1428.216 -326.287)" fill="#de9c27" />
            <rect id="Rectangle_5" data-name="Rectangle 5" width="17.573" height="2.261" transform="translate(1621.063 -148.376)" fill="#bd7a1e" />
            <rect id="Rectangle_6" data-name="Rectangle 6" width="13.819" height="6.701" transform="translate(1622.94 -155.078)" fill="#f9bf55" />
            <path id="Path_6" data-name="Path 6" d="M205.262,184.8H198a.9.9,0,0,0-.9-.9v-2.41a.9.9,0,0,0,.9-.895h7.259a.9.9,0,0,0,.9.895v2.41a.9.9,0,0,0-.9.9" transform="translate(1428.217 -334.425)" fill="#bd7a1e" />
        </g>
    </svg>

    const grayCup = <svg style={{ margin: props.marginPx }} xmlns="http://www.w3.org/2000/svg" width={props.height * widthPoprportion} height={props.height} viewBox="0 0 25.973 34.394">
        <g id="Group_2117" data-name="Group 2117" transform="translate(-1616.863 180.509)">
            <path id="Path_1" data-name="Path 1" d="M183.569,128.094c-6.628-5.636-8.621-10.867-7.654-13.551a2.045,2.045,0,0,1,1.871-1.494,3.519,3.519,0,0,1,2.58,1.042,6.18,6.18,0,0,1,1.586,4.348H180.54a4.827,4.827,0,0,0-1.165-3.342,2.145,2.145,0,0,0-1.568-.635c-.3,0-.47.307-.561.56-.647,1.8.747,6.475,7.24,12Z" transform="translate(1441.178 -293.557)" fill="#e1e5ee" />
            <path id="Path_2" data-name="Path 2" d="M220.079,128.094l-.915-1.077c6.493-5.521,7.887-10.2,7.241-12-.092-.253-.262-.555-.562-.56a2.136,2.136,0,0,0-1.568.635,4.827,4.827,0,0,0-1.165,3.342H221.7a6.18,6.18,0,0,1,1.586-4.348,3.522,3.522,0,0,1,2.581-1.042,2.045,2.045,0,0,1,1.871,1.494c.966,2.684-1.026,7.915-7.655,13.551" transform="translate(1414.872 -293.556)" fill="#e1e5ee" />
            <path id="Path_3" data-name="Path 3" d="M206.137,155.2a8.519,8.519,0,0,0,.84,3.7h-5.969a8.58,8.58,0,0,0,0-7.406h5.969a8.519,8.519,0,0,0-.84,3.7" transform="translate(1425.857 -316.821)" fill="#e1e5ee" />
            <path id="Path_4" data-name="Path 4" d="M188,118.19v6.628a8.121,8.121,0,0,0,16.243,0V118.19Z" transform="translate(1433.726 -296.668)" fill="#e1e5ee" />
            <path id="Path_5" data-name="Path 5" d="M206.158,171.671a4.525,4.525,0,1,0-9.05,0Z" transform="translate(1428.216 -326.287)" fill="#e1e5ee" />
            <rect id="Rectangle_5" data-name="Rectangle 5" width="17.573" height="2.261" transform="translate(1621.063 -148.376)" fill="#e1e5ee" />
            <rect id="Rectangle_6" data-name="Rectangle 6" width="13.819" height="6.701" transform="translate(1622.94 -155.078)" fill="#e1e5ee" />
            <path id="Path_6" data-name="Path 6" d="M205.262,184.8H198a.9.9,0,0,0-.9-.9v-2.41a.9.9,0,0,0,.9-.895h7.259a.9.9,0,0,0,.9.895v2.41a.9.9,0,0,0-.9.9" transform="translate(1428.217 -334.425)" fill="#e1e5ee" />
        </g>
    </svg>

    // { alert(props.identify) }
    return (
        props.gold ? goldCup : grayCup
    );
};

export default Cup;