import styled from 'styled-components';

const StyledPage = styled.div`
  .page {
  }
`;

const places = [{
    name: 'Frontlive.pl',
    link: 'https://frontlive.pl/'
}]
export function Places() {
  /*
   * Replace the elements below with your own.
   *
   * Note: The corresponding styles are in the ./index.styled-components file.
   */
  return (
    <StyledPage>
      <div className="wrapper">
        <div className="container">
          <div id="welcome">
            <h1>
              Miejsca warte odwiedzenia
            </h1>
          </div>
          <div>
            <ul>
                {places && places.map(place => <li key={place.name}>{place.name} - {place.link}</li>)}
            </ul>
          </div>
        </div>
      </div>
    </StyledPage>
  );
}

export default Places;
