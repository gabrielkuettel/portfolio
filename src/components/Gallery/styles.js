import styled from 'styled-components';

export const vars = {
	shadowOn: `4px 4px 15px rgba(0, 0, 0, 0.3)`,
	shadowOff: `4px 4px 15px rgba(0, 0, 0, 0)`,
	textShadow: `1px 1px 2px #000000`,
	transitionEase: `0.5s ease`,
	colorText: `white`,
};

export const Container = styled.div`
	display: grid;
	grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
	grid-auto-rows: 200px;
	grid-gap: 12px;
	margin: 0 auto;
`;

export const Item = styled.div`
	opacity: 1;
	transition: ${vars.transitionEase};
	box-shadow: ${vars.shadowOn};
	:hover {
		box-shadow: ${vars.shadowOff};
	}
	${({ feature }) =>
		feature &&
		`
       grid-column: 1 / 3;
      grid-row: 1 / 3;
      @media only screen and (max-device-width: 720px) {
         grid-column: 1 / -1;
         grid-row: 1 / -1;
      }  
   `}
`;

export const ImageContainer = styled.div`
	position: relative;
	height: 100%;
	width: 100%;
`;

export const ImageTitle = styled.h4`
	position: absolute;
	padding: 10px 10px 10px 10px;
	z-index: 1;
	opacity: 0;
	margin: 0;
	transition: ${vars.transitionEase};
	color: ${vars.colorText};
	text-shadow: ${vars.textShadow};
	${ImageContainer}:hover & {
		opacity: 1;
	}
	@media only screen and (max-device-width: 720px) {
		opacity: 1;
	}
`;

export const ImageSubtitle = styled.h5`
	position: absolute;
	padding: 10px 10px 10px 10px;
	z-index: 1;
	opacity: 0;
	margin: 0;
	bottom: 0;
	right: 0;
	transition: ${vars.transitionEase};
	color: ${vars.colorText};
	text-shadow: ${vars.textShadow};
	${ImageContainer}:hover & {
		opacity: 1;
	}
	@media only screen and (max-device-width: 720px) {
		opacity: 1;
	}
`;
