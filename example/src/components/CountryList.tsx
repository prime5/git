import styled from '@emotion/styled';
import type { Country } from "../types";

interface Props {
    countries: Country[];
    onItemClick: (country: Country) => void
}

const ListWrapper = styled.ul`
    padding: 0;
    display: flex;
    flex-wrap: wrap;
`;

const ListItem = styled.li`
    list-style-type: none;
    flex: 0 0 50%;
    text-align: center;
    cursor: pointer;

    @media (min-width: 420px) {
        flex: 0 0 33.33%;
    }
`;

const ListContent = styled.div`
    background-color: bisque;
    margin: 5px;
    padding: 10px 0;
`;

const CountryList: React.FunctionComponent<Props> = ( {countries, onItemClick}) => {
    return (
        <ListWrapper>
            {countries.map((country) => 
                <ListItem key={country.ID} onClick={() => onItemClick(country)}>
                    <ListContent>
                        <h4>{country.Country}</h4>
                        <div>New Confirmed: {country.NewConfirmed}</div>
                        <div>New Deaths: {country.NewDeaths}</div>
                        <div>New Recovered: {country.NewRecovered}</div>
                    </ListContent>
                </ListItem>)}
        </ListWrapper>
    );
};

export default CountryList;