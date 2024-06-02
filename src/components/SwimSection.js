import styled from 'styled-components';

const Section = styled.section`
  background-image: url('/images/sec.png');
  background-size: cover; /* Make background image responsive */
  background-position: center; /* Center the background image */
  margin-top: 100px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  height: 565px; /* Adjust height as needed */
  width: 100%;
  max-width: 1387px;

  @media (max-width: 768px) {
    flex-direction: column;
    height: auto;
    margin-top: 50px;
    background-image: none; /* Remove background image for smaller screens */
    padding: 20px 10px; /* Adjust padding for smaller screens */
  }
`;

const ContentContainer1 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 20px;
  border-radius: 10px;
  margin: 10px;
  margin-bottom: 100px;
  margin-left: 400px;

  @media (max-width: 768px) {
    width: 100%;
    align-items: center;
    text-align: center;
    margin-bottom: 20px;
    margin-left: 0; /* Reset left margin for smaller screens */
  }
`;

const ContentContainer2 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 20px;
  border-radius: 10px;
  margin-top: 200px;
  margin-right: 200px;

  @media (max-width: 768px) {
    width: 100%;
    align-items: center;
    text-align: center;
    margin-top: 20px;
    margin-right: 0; /* Reset right margin for smaller screens */
  }
`;

const Title = styled.h2`
  font-size: 18px;
  margin: 0;
  color: #333;

  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

const Button = styled.button`
  background-color: #000000;
  color: #fff;
  border: none;
  border-radius: 5px;
  padding: 10px 20px;
  cursor: pointer;
  margin-top: 10px;

  &:hover {
    background-color: #555;
  }

  @media (max-width: 768px) {
    padding: 8px 16px;
  }
`;

const SwimSection = () => {
  return (
    <Section>
      <ContentContainer1>
        
        <Button>Take Our Swim Assessment</Button>
      </ContentContainer1>
      <ContentContainer2>
       
        <Button>Register</Button>
      </ContentContainer2>
    </Section>
  );
};

export { SwimSection };
