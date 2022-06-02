import styled from '@emotion/styled';

interface Props {
    newConfirmed: number;
    newDeaths: number;
    newRecovered: number;
}

const Wrapper = styled.div`
    text-align: center;
`;

const GlobalInfo: React.FunctionComponent<Props> = ({ 
    newConfirmed, 
    newDeaths,
    newRecovered,
}) => {
    return (
        <Wrapper>
            <h1>Global Covid-19 data</h1>
            <h1>New Confirmed: {new Intl.NumberFormat().format(newConfirmed)}</h1>
            <h1>New Deaths: {new Intl.NumberFormat().format(newDeaths)}</h1>
            <h1>New Recovered: {new Intl.NumberFormat().format(newRecovered)}</h1>
        </Wrapper>
    );
};

export default GlobalInfo;